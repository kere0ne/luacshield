import fs from "node:fs";
import vm from "node:vm";
import { Buffer } from "node:buffer";
import { TextEncoder, TextDecoder } from "node:util";
import url0 from "node:url";
import { webcrypto } from "node:crypto";
import mod0 from "node:module";

const code = fs.readFileSync("deploy/engine.js", "utf8");
const context = {
  console,
  setTimeout, clearTimeout, setInterval, clearInterval,
  TextEncoder, TextDecoder, Buffer,
  URL, URLSearchParams, performance, Response, crypto,
  globalThis: null, self: null, window: null,
};
context.globalThis = context; context.self = context; context.window = context;
context.crypto = webcrypto;

context.__filename = "engine.js";
context.__dirname = ".";
context.require = (name) => name === "url" ? url0 : name === "module" ? mod0 : {};
const realFetch = globalThis.fetch;
context.fetch = async (input) => {
  const url = typeof input === "string" ? input : String(input.url);
  if (url.startsWith("data:")) {
    const comma = url.indexOf(",");
    const meta = url.slice(5, comma), body = url.slice(comma + 1);
    const buf = meta.includes("base64") ? Buffer.from(body, "base64") : Buffer.from(decodeURIComponent(body), "utf8");
    return new Response(new Uint8Array(buf));
  }
  return realFetch(input);
};
vm.createContext(context);
vm.runInContext(code, context, { filename: "engine.js" });
const t0 = Date.now();
const out = await vm.runInContext(`(async () => {
  return await LuacShieldEngine.luacshieldProtect({
    source: 'local x = 7\\nprint("hello from luacshield")\\nlocal function add(a,b) return a+b end\\nprint(add(x,3))\\nfor i=1,3 do task.wait(0.1) end\\nprint("done", i)',
    filename: "test.lua",
    seed: 42,
    level: "medium",
    anti: {},
  });
})()`, context, { timeout: 300000 });
console.log("keys", Object.keys(out));
console.log("meta", JSON.stringify(out.meta).slice(0, 500));
fs.writeFileSync("engine/out_s42.lua", out.output, "latin1");
console.log("bytes", Buffer.byteLength(out.output, "latin1"), "elapsed", Date.now() - t0, "ms");
