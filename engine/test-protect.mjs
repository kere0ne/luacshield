import fs from "node:fs";
import { promisify } from "node:util";
import child_process from "node:child_process";
const execFileAsync = promisify(child_process.execFile);
import { createLuaEngine } from "./runner.mjs";
import { protect } from "./protect.mjs";
const engine = await createLuaEngine();
const src = `
local function greet(name)
  return "hi " .. name .. ", secret value is 42"
end
print(greet("tester"))
for i = 1, 3 do
  print("loop", i)
end
local t = { alpha = 1, beta = "two" }
print(t.alpha, t.beta)
`;
const res = await protect(engine, { source: src, filename: "t.lua", seed: 42 });
console.log("META", JSON.stringify(res.meta));
fs.writeFileSync("final.lua", res.output, "binary");
const { stdout } = await execFileAsync("python3", ["validate_lupa.py", "final.lua"], { timeout: 120000, maxBuffer: 1024 * 1024 * 32 });
console.log("RUN5.1", stdout.trim());
