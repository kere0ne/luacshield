function asStr(u) { return u && typeof u === "object" && typeof u.href === "string" ? u.href : String(u); }
export function fileURLToPath(u) { return asStr(u).replace(/^file:\/\//, ""); }
export function pathToFileURL(p) { return { href: "file://" + String(p) }; }
export default { fileURLToPath, pathToFileURL };
