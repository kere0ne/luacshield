// LuacShield obfuscation API (Vercel serverless function).
import { createLuaEngine, runPipeline } from "../engine/runner.mjs";
import { protect } from "../engine/protect.mjs";

const MAX_SOURCE_BYTES = 300 * 1024;

let enginePromise = null;
let queue = Promise.resolve();
function withEngine(fn) {
  const run = queue.then(fn);
  queue = run.catch(() => {});
  return run;
}
function getEngine() {
  if (!enginePromise) enginePromise = createLuaEngine();
  return enginePromise;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "POST only" });
    return;
  }
  let body;
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});
  } catch (_) {
    res.status(400).json({ ok: false, error: "invalid JSON body" });
    return;
  }
  const source = typeof body.source === "string" ? body.source : "";
  if (!source.trim()) {
    res.status(400).json({ ok: false, error: "source is required" });
    return;
  }
  if (Buffer.byteLength(source, "utf8") > MAX_SOURCE_BYTES) {
    res.status(413).json({ ok: false, error: "source too large (300 KB max on the web build)" });
    return;
  }
  const preset = ["Weak", "Medium", "Strong", "Maximum"].includes(body.preset) ? body.preset : "Strong";
  try {
    const result = await withEngine(async () =>
      protect(await getEngine(), { source, filename: body.filename || "script.lua", preset })
    );
    res.status(200).json({ ok: true, output: result.output, meta: result.meta });
  } catch (e) {
    res.status(500).json({ ok: false, error: "obfuscation failed: " + String(e && e.message || e).slice(0, 300) });
  }
}

export const maxDuration = 60;
