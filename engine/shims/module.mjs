import fsShim from "./fs.mjs";
import pathShim from "./path.mjs";
import urlShim from "./url.mjs";
const mods = { fs: fsShim, path: pathShim, url: urlShim };
export function createRequire() {
  return (name) => {
    if (mods[name]) return mods[name];
    throw new Error("require not available in browser build: " + name);
  };
}
export default { createRequire };
