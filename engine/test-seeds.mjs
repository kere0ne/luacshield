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
for (const seed of [7, 12345, 999999]) {
  const res = await protect(engine, { source: src, filename: "t.lua", seed });
  const fs = await import("node:fs");
  fs.writeFileSync("final_s" + seed + ".lua", res.output, "binary");
  console.log("seed", seed, "bytes", res.output.length);
}
