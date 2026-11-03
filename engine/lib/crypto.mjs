// LuacShield build-side crypto: RC4, LZW compression, checksums, base64.
export function rc4(key, data) {
  const s = [];
  for (let i = 0; i < 256; i++) s[i] = i;
  let j = 0;
  for (let i = 0; i < 256; i++) {
    j = (j + s[i] + key[i % key.length]) % 256;
    const t = s[i]; s[i] = s[j]; s[j] = t;
  }
  const out = Buffer.alloc(data.length);
  let i = 0; j = 0;
  for (let n = 0; n < data.length; n++) {
    i = (i + 1) % 256;
    j = (j + s[i]) % 256;
    const t = s[i]; s[i] = s[j]; s[j] = t;
    out[n] = data[n] ^ s[(s[i] + s[j]) % 256];
  }
  return out;
}

const CLEAR = 256;
const MAX_CODE = 65535;

// LZW with 16-bit big-endian codes, CLEAR code 256 resets the dictionary.
export function lzwCompress(data) {
  const codes = [];
  let dict = new Map();
  let next = 257;
  let w = -1;
  const resetDict = () => { dict = new Map(); next = 257; };
  for (let i = 0; i < data.length; i++) {
    const c = data[i];
    if (w < 0) { w = c; continue; }
    const key = w * 256 + c;
    const found = dict.get(key);
    if (found !== undefined) { w = found; continue; }
    codes.push(w);
    if (next <= MAX_CODE) { dict.set(key, next); next++; }
    if (next > MAX_CODE) { codes.push(CLEAR); resetDict(); }
    w = c;
  }
  if (w >= 0) codes.push(w);
  const out = Buffer.alloc(codes.length * 2);
  for (let i = 0; i < codes.length; i++) {
    out[i * 2] = (codes[i] >> 8) & 0xff;
    out[i * 2 + 1] = codes[i] & 0xff;
  }
  return out;
}

// Weighted checksum the Lua runtime side recomputes (VERIFY2 layer).
export function verifySum(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum = (sum + data[i] * ((i % 64) + 1) + 1) % 4294967295;
  }
  return sum >>> 0;
}

export function randomKey(len = 24) {
  const b = Buffer.alloc(len);
  for (let i = 0; i < len; i++) b[i] = Math.floor(Math.random() * 256);
  return b;
}

export function splitObfuscate(buf, parts = 4) {
  // splits a key into xor-chunks so no single literal holds it
  const chunks = [];
  const size = Math.ceil(buf.length / parts);
  for (let p = 0; p < parts; p++) {
    const piece = buf.slice(p * size, (p + 1) * size);
    const mask = Buffer.alloc(piece.length);
    const x = Buffer.alloc(piece.length);
    for (let i = 0; i < piece.length; i++) {
      mask[i] = Math.floor(Math.random() * 256);
      x[i] = piece[i] ^ mask[i];
    }
    chunks.push({ mask: Array.from(mask), x: Array.from(x) });
  }
  return chunks;
}
