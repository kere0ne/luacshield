// LuacShield engine runner: loads the Prometheus (levno-710) Lua sources into
// wasmoon (Lua 5.4 WASM) and exposes pipeline + chunk execution.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { LuaFactory } from "wasmoon";

const here = path.dirname(fileURLToPath(import.meta.url));
const srcRoot = path.join(here, "prometheus-src");

function luaPathToModuleName(filePath) {
  const normalized = filePath.split(path.sep).join("/");
  const withoutSrc = normalized.replace(/^src\//, "");
  return withoutSrc.replace(/\.lua$/, "").split("/").join(".");
}

function findLuaFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...findLuaFiles(abs));
    else if (entry.isFile() && entry.name.endsWith(".lua")) out.push(abs);
  }
  return out;
}

export function buildLuaSources() {
  const modules = {};
  for (const abs of findLuaFiles(srcRoot)) {
    modules[luaPathToModuleName(path.relative(srcRoot, abs))] = fs.readFileSync(abs, "utf8");
  }
  return modules;
}

function toLuaLongString(s) {
  // [==[ ... ]==] with a depth safe against the payload content
  let depth = 0;
  while (s.includes("]" + "=".repeat(depth)) || s.includes("[" + "=".repeat(depth) + "[")) depth++;
  const eq = "=".repeat(depth);
  return `[${eq}[${s}]${eq}]`;
}

export async function createLuaEngine({ openStandardLibs = true } = {}) {
  const factory = new LuaFactory(undefined, undefined);
  const engine = await factory.createEngine({ openStandardLibs });
  const modules = buildLuaSources();
  const bootstrap = Object.entries(modules)
    .map(([name, source]) => {
      const chunkName = `@/src/${name.split(".").join("/")}.lua`;
      return `package.preload[${JSON.stringify(name)}] = function(...)\n  local chunk, err = load(${toLuaLongString(source)}, ${toLuaLongString(chunkName)}, "t")\n  if not chunk then error(err) end\n  return chunk(...)\nend`;
    })
    .join("\n");
  await engine.doString(bootstrap);
  return engine;
}

export async function runPipeline(engine, { source, preset = "Strong", filename = "script.lua", seed = 1, luaVersion = "Lua51" }) {
  const code = `
_G.arg = _G.arg or {}
if not math.log10 then
  local ln = math.log
  math.log10 = function(v)
    if type(v) ~= "number" or v ~= v or v == math.huge or v <= 0 then return ln(v) / ln(10) end
    local av = v
    if av == math.floor(av) and av >= 1 and av < 1e15 then
      local d = 1
      local t = math.floor(av)
      while t >= 10 do t = math.floor(t / 10); d = d + 1 end
      -- exact integer part; fractional part from the normalized mantissa
      local m = av / 10 ^ (d - 1)
      return (d - 1) + (ln(m) / ln(10))
    end
    return ln(v) / ln(10)
  end
end
local Prometheus = require("prometheus")
Prometheus.Logger.logLevel = Prometheus.Logger.LogLevel.Info
Prometheus.colors.enabled = false
local preset = ${JSON.stringify(preset)}
local source = ${toLuaLongString(source)}
local filename = ${JSON.stringify(filename)}
local config = {}
for key, value in pairs(Prometheus.Presets[preset]) do config[key] = value end
config.LuaVersion = ${JSON.stringify(luaVersion)}
config.PrettyPrint = false
config.Seed = ${Math.max(1, Math.floor(seed))}
local ok, out = xpcall(function()
  return Prometheus.Pipeline:fromConfig(config):apply(source, filename)
end, debug.traceback)
if not ok then error(tostring(out), 0) end
-- return the payload base64-encoded from inside Lua so high bytes survive
-- the JS boundary exactly (the raw string would be mangled to UTF-8)
local B64CH = {}
local alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
for i = 1, #alphabet do B64CH[i - 1] = alphabet:sub(i, i) end
local parts = {}
local n = #out
for i = 1, n, 3 do
  local b1, b2, b3 = out:byte(i, i + 2)
  local v = b1 * 65536 + (b2 or 0) * 256 + (b3 or 0)
  local pad = (b3 and 0) or (b2 and 1) or 2
  parts[#parts + 1] = B64CH[math.floor(v / 262144) % 64] .. B64CH[math.floor(v / 4096) % 64]
  if pad < 2 then parts[#parts + 1] = B64CH[math.floor(v / 64) % 64] end
  if pad < 1 then parts[#parts + 1] = B64CH[v % 64] end
  if pad > 0 then parts[#parts + 1] = string.rep("=", pad) end
end
return table.concat(parts)
`;
  const raw = await engine.doString(code);
  return Buffer.from(raw, "base64").toString("binary");
}

export async function runLuaChunk(engine, source, filename = "chunk.lua", envGlobals = {}) {
  const stubs = Object.entries(envGlobals)
    .map(([k, v]) => `_G[${JSON.stringify(k)}] = ${JSON.stringify(v)}`)
    .join("\n");
  const code = `
${stubs}
local logs = {}
_G.print = function(...) local parts = {} for i = 1, select("#", ...) do parts[#parts + 1] = tostring(select(i, ...)) end logs[#logs + 1] = table.concat(parts, " ") end
local ok, err = xpcall(function()
  local chunk, loadErr = load(${toLuaLongString(source)}, ${JSON.stringify(filename)}, "t")
  if not chunk then error(loadErr, 0) end
  chunk()
end, debug.traceback)
if not ok then return { ok = false, error = tostring(err), logs = logs } end
return { ok = true, error = "", logs = logs }
`;
  return await engine.doString(code);
}

export async function runLuaChunkB64(engine, payloadBinary, filename = "@luacshield/validate") {
  const b64 = Buffer.from(payloadBinary, "binary").toString("base64");
  const code = `
local alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
local rev = {}
for i = 1, #alpha do rev[alpha:sub(i, i)] = i - 1 end
local function b64d(data)
  local out, acc, bits = {}, 0, 0
  for i = 1, #data do
    local v = rev[data:sub(i, i)]
    if v then
      acc = acc * 64 + v
      bits = bits + 6
      if bits >= 8 then
        bits = bits - 8
        out[#out + 1] = string.char(math.floor(acc / 2 ^ bits) % 256)
        acc = acc % 2 ^ bits
      end
    end
  end
  return table.concat(out)
end
local payload = b64d(${JSON.stringify(b64)})
local logs = {}
_G.print = function(...) local parts = {} for i = 1, select("#", ...) do parts[#parts + 1] = tostring(select(i, ...)) end logs[#logs + 1] = table.concat(parts, " ") end
local ok, err = xpcall(function()
  local chunk, loadErr = load(payload, ${JSON.stringify(filename)}, "t")
  if not chunk then error(loadErr, 0) end
  chunk()
end, debug.traceback)
if not ok then return { ok = false, error = tostring(err), logs = logs } end
return { ok = true, error = "", logs = logs }
`;
  return await engine.doString(code);
}

const ROBLOX_STUB = `
local function __any(name)
  local t
  t = setmetatable({}, { __name = name, __index = function(_, k)
    if k == "ClassName" or k == "Name" then return name end
    return function() return t end
  end })
  return t
end
game = setmetatable({ ClassName = "DataModel", PlaceId = 0, GameId = 0, JobId = "stub" }, {
  __index = function(_, k)
    if k == "GetService" then return function(_, svc) return __any(svc) end end
    return function() return nil end
  end,
})
workspace = __any("Workspace")
game.Workspace = workspace
game.Players = __any("Players")
game.ReplicatedStorage = __any("ReplicatedStorage")
Instance = { new = function(_, cls) return __any(cls) end }
task = { wait = function() end, spawn = function(f, ...) return f(...) end, defer = function(f, ...) return f(...) end }
tick = function() return 0 end
wait = function() return 0 end
typeof = function(v) return type(v) end
script = __any("Script")
`;

export async function runLuaChunkStub(engine, source, filename) {
  await engine.doString(ROBLOX_STUB);
  return await runLuaChunk(engine, source, filename);
}
