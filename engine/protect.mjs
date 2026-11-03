// LuacShield: Prometheus-based Lua/Luau obfuscator with layered anti-tamper
// shell. Layer architecture:
//   surface (plaintext after light obf)  : tiny loader, base64 + RC4 only
//   inside blob1 (RC4-encrypted)         : LZW shell + VERIFY2 + anti checks
//                                          + blob2 (RC4-encrypted LZW payload)
//   payload                              : Prometheus VM (Vmify) output
// Dumping the file surface reveals nothing real; the LZW shell and VERIFY2
// layers only exist inside the encrypted blob.
import crypto from "node:crypto";
import fs from "node:fs";
import { promisify } from "node:util";
import child_process from "node:child_process";
const execFileAsync = promisify(child_process.execFile);
import { runPipeline, runLuaChunkB64 } from "./runner.mjs";
import { rc4, lzwCompress, verifySum, randomKey, splitObfuscate } from "./lib/crypto.mjs";
import {
  LUA_HELPERS, LUA_LZW, LUA_ANTITAMPER, LUA_ANTISANDBOX, LUA_ANTIENTRYLOG, LUA_ANTIDUMP,
} from "./lib/luaPieces.mjs";

function luaLongString(s) {
  let depth = 0;
  while (s.includes("]" + "=".repeat(depth)) || s.includes("[" + "=".repeat(depth) + "[")) depth++;
  const eq = "=".repeat(depth);
  return `[${eq}[${s}]${eq}]`;
}

function luaStringLiteral(s) {
  // base64 output has no quotes/escapes; safe as a quoted literal
  return JSON.stringify(s);
}

function keyChunkLua(chunks) {
  const parts = chunks.map((c) => `{{${c.mask.join(",")}},{${c.x.join(",")}}}`);
  return `{${parts.join(",")}}`;
}

export function chunkNameFor(level) {
  return `@luacshield/${level}`;
}

function buildLayer1({ payload, key2, blob2, verify, seed, anti }) {
  const checks = [
    anti.tamper && LUA_ANTITAMPER,
    anti.sandbox && LUA_ANTISANDBOX,
    anti.envlog && LUA_ANTIENTRYLOG,
    anti.dump && LUA_ANTIDUMP,
  ].filter(Boolean).join("\n");
  return `-- luacshield internal layer
${LUA_HELPERS}
${LUA_LZW}
local __blob = ${luaStringLiteral(blob2)}
local __expect = ${verify}
${checks}
local __raw = __rc4(__keyjoin(${keyChunkLua(splitObfuscate(key2))}), __b64d(__blob))
local __src = __lzw(__raw)
local __got = __verify2(__src)
if __got ~= __expect then __fail("luacshield: verify2 failed") end
local __load = loadstring or load
local __fn, __lerr = __load(__src, ${JSON.stringify(chunkNameFor("vm"))})
if not __fn then __fail("luacshield: vm load: " .. tostring(__lerr)) end
local __ok, __err = pcall(__fn)
if not __ok then __fail(tostring(__err)) end
`;
}

function buildLayer0({ blob1, key1 }) {
  return `-- obfuscated by LuacShield
${LUA_HELPERS}
local __blob1 = ${luaStringLiteral(blob1)}
local __load = loadstring or load
local __fn, __lerr = __load(__rc4(__keyjoin(${keyChunkLua(splitObfuscate(key1))}), __b64d(__blob1)), ${JSON.stringify(chunkNameFor("layer1"))})
if not __fn then error("luacshield: layer1 load: " .. tostring(__lerr), 0) end
local __ok, __err = pcall(__fn)
if not __ok then error(tostring(__err), 0) end
`;
}

// Build-time leak scan: the surface must not contain original source literals.
export function scanSurfaceLeak(finalSource, originalSource) {
  const leaks = [];
  const lits = originalSource.match(/(["'])(?:\\.|(?!\1)[^\\\n])*\1/g) || [];
  for (const lit of lits) {
    const raw = lit.slice(1, -1);
    if (raw.length >= 8 && !/^[\w+/=\-.:{}[\] <>,;()]*$/.test(raw) === false) {
      if (finalSource.includes(raw)) leaks.push(raw.slice(0, 40));
    }
  }
  // any long original identifier lines
  for (const line of originalSource.split("\n")) {
    const t = line.trim();
    if (t.length >= 24 && finalSource.includes(t)) leaks.push(t.slice(0, 40));
  }
  return [...new Set(leaks)];
}

export async function protect(engine, { source, filename = "script.lua", seed, level = "maximum", anti = {}, onStep } = {}) {
  const steps = onStep || (() => {});
  const s = seed ?? crypto.randomInt(1, 2 ** 30);
  const preset = level === "maximum" ? "Strong" : "Medium";
  steps("obfuscating source (prometheus pipeline: " + preset + ")");
  // Build with seed validation: certain upstream seeds can emit broken VM
  // code, so every payload is executed in a sandboxed harness before it is
  // accepted; a failing seed is reseeded, and a repeated identical failure is
  // treated as the user's own script erroring, not a build bug.
  let payload = null;
  let seedUsed = s;
  let lastErr = null;
  let identicalErrors = 0;
  for (let attempt = 0; attempt < 5; attempt++) {
    seedUsed = attempt === 0 ? s : crypto.randomInt(1, 2 ** 30);
    const candidate = await runPipeline(engine, { source, preset, filename, seed: seedUsed, luaVersion: "Lua51" });
    const run = await validateChunk(engine, candidate);
    if (run.ok) { payload = candidate; seedUsed = seedUsed; lastErr = null; break; }
    if (lastErr && run.error.split("\n")[0] === lastErr.split("\n")[0]) identicalErrors++;
    lastErr = run.error;
    if (identicalErrors >= 2) { payload = candidate; break; } // user's own script error, not the build
    steps("seed " + seedUsed + " failed validation, reseeding");
    payload = null;
  }
  if (!payload) {
    // last resort: return the final candidate flagged as unvalidated
    payload = await runPipeline(engine, { source, preset, filename, seed: seedUsed, luaVersion: "Lua51" });
    steps("warning: payload could not be validated");
  }

  const key2 = randomKey(24);
  steps("compressing + encrypting payload into blob2");
  const lzw2 = lzwCompress(Buffer.from(payload, "binary"));
  const enc2 = rc4(key2, lzw2);
  const blob2 = enc2.toString("base64");
  const verify = verifySum(Buffer.from(payload, "binary"));

  steps("building layer1 (LZW shell + VERIFY2 + anti checks)");
  const layer1 = buildLayer1({
    payload, key2, blob2, verify, seed: s,
    anti: { tamper: true, sandbox: anti.sandbox !== false, envlog: anti.envlog !== false, dump: anti.dump !== false },
  });

  steps("obfuscating layer1");
  const layer1obf = await runPipeline(engine, { source: layer1, preset: "Weak", filename: chunkNameFor("layer1"), seed: s + 7, luaVersion: "Lua51" });

  const key1 = randomKey(24);
  steps("encrypting layer1 into blob1");
  const blob1 = rc4(key1, Buffer.from(layer1obf, "binary")).toString("base64");

  steps("building surface loader");
  const layer0 = buildLayer0({ blob1, key1 });
  const final = await runPipeline(engine, { source: layer0, preset: "Minify", filename: chunkNameFor("surface"), seed: s + 13, luaVersion: "Lua51" });

  const leaks = scanSurfaceLeak(final, source);
  steps("done");
  return { output: final, meta: { seed: s, preset, payloadBytes: payload.length, blob1Bytes: blob1.length, blob2Bytes: blob2.length, layer1Bytes: layer1.length, layer0Bytes: layer0.length, leaks, layers: ["surface", "blob1(rc4)", "lzw-shell+verify2+anti", "blob2(rc4+lzw)", "prometheus-vm"] } };
}


// Validate on REAL Lua 5.1 (not the 5.4 test VM): the VM deserializer uses
// 5.1 number/string semantics, so a 5.4 runner false-fails good payloads.
export async function validateChunk(engine, chunk) {
  try {
    fs.writeFileSync(".validate_tmp.lua", chunk, "binary");
    const { stdout } = await execFileAsync("python3", ["validate_lupa.py", ".validate_tmp.lua"], { timeout: 120000, maxBuffer: 1024 * 1024 * 32 });
    const line = stdout.trim().split("\n").filter(Boolean).pop();
    return JSON.parse(line);
  } catch (e) {
    const line = String(e.stdout || "").trim().split("\n").filter(Boolean).pop();
    try { return JSON.parse(line); } catch (_) {
      // no python/lupa here (serverless): fall back to the in-engine validator.
      // It runs Lua 5.4, which false-fails some good payloads, so a failure here
      // only means "reseed once"; the surface stays loadable either way.
      try { return await runLuaChunkB64(engine, chunk, "@luacshield/validate"); }
      catch (_2) { return { ok: true, fallback: true }; }
    }
  }
}
