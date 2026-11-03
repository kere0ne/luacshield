const clean = (a) => a.join("/").replace(/\/{2,}/g, "/");
export default {
  sep: "/",
  dirname: (p) => { const s = String(p); const i = s.lastIndexOf("/"); return i < 0 ? "." : s.slice(0, i) || "/"; },
  join: (...a) => clean(a.map(String)),
  relative: (_a, b) => String(b),
  resolve: (...a) => clean(a.map(String)),
  normalize(p) { const s = String(p); const abs = s.startsWith("/"); const out = []; for (const x of s.split("/")) { if (!x || x === ".") continue; if (x === "..") { out.pop(); continue; } out.push(x); } return (abs ? "/" : "") + out.join("/") || "/"; },
  basename: (p) => String(p).split("/").filter(Boolean).pop() || "",
  extname: (p) => { const b = String(p).split("/").filter(Boolean).pop() || ""; const i = b.lastIndexOf("."); return i > 0 ? b.slice(i) : ""; },
  isAbsolute: (p) => String(p).startsWith("/"),
};
