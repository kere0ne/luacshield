import esbuild from "esbuild";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const shims = (name) => path.join(here, "engine/shims", name + ".mjs");

const nodeShimPlugin = {
  name: "node-shims",
  setup(build) {
    const map = {
      fs: "fs", path: "path", url: "url", crypto: "crypto",
      cp: "cp", util: "util", module: "module", child_process: "cp",
    };
    build.onResolve({ filter: /^(node:)?(fs|path|url|crypto|cp|util|module|child_process)$/ }, (args) => {
      const base = args.path.startsWith("node:") ? args.path.slice(5) : args.path;
      const file = map[base];
      if (!file) return { path: args.path, external: true };
      return { path: shims(file) };
    });
  },
};

await esbuild.build({
  entryPoints: [path.join(here, "engine/browser-entry.mjs")],
  bundle: true,
  format: "iife",
  globalName: "LuacShieldEngine",
  outfile: path.join(here, "deploy/engine.js"),
  plugins: [nodeShimPlugin],
  platform: "browser",
  logLevel: "info",
});
