import { Buffer } from "buffer";
globalThis.Buffer = Buffer;
import wasmB64 from "./wasm-b64.mjs";
const WASM_URI = "data:application/octet-stream;base64," + wasmB64;

let enginePromise = null;
async function getEngine() {
  if (!enginePromise) {
    const [{ createLuaEngine }] = await Promise.all([import("./runner.mjs")]);
    enginePromise = createLuaEngine({ wasmUri: WASM_URI }).catch((e) => { enginePromise = null; throw e; });
  }
  return enginePromise;
}

export async function luacshieldProtect({ source, filename = "script.lua", seed, level = "maximum", anti = {}, onStep } = {}) {
  const { protect } = await import("./protect.mjs");
  return protect(await getEngine(), { source, filename, seed, level, anti, onStep });
}
export default luacshieldProtect;
