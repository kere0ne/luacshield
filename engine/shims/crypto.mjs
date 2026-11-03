function rand() { const b = new Uint32Array(1); globalThis.crypto.getRandomValues(b); return b[0] >>> 0; }
export default { randomInt(min, max) { return min + (rand() % (max - min)); }, randomBytes(n) { const a = new Uint8Array(n); globalThis.crypto.getRandomValues(a); return Buffer.from(a); } };
