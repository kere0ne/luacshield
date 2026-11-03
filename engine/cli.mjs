import { createLuaEngine, runPipeline, runLuaChunk } from "./runner.mjs";
import { protect } from "./protect.mjs";
import fs from "node:fs";

const [cmd, ...args] = process.argv.slice(2);
if (cmd === "protect") {
  const [inFile, outFile, levelArg] = args;
  const source = fs.readFileSync(inFile, "utf8");
  const engine = await createLuaEngine();
  const res = await protect(engine, { source, filename: inFile, level: levelArg || "maximum", onStep: (s) => console.log("[step]", s) });
  fs.writeFileSync(outFile, res.output);
  console.log(JSON.stringify(res.meta, null, 1));
} else if (cmd === "run") {
  const engine = await createLuaEngine();
  const src = fs.readFileSync(args[0], "utf8");
  const res = await runLuaChunk(engine, src, args[0]);
  console.log(JSON.stringify(res, null, 1));
} else {
  console.log("usage: node cli.mjs protect <in> <out> [level] | run <file>");
}
