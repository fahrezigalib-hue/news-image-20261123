// Entry for make.fun bounty news-image-20261123:
// "Sum up 23 November's world news in one image."
// The image (1024x1024 PNG, drawn programmatically from the day's verified
// headlines - see RESEARCH.md) is stored base64-encoded in img/part*.txt so
// the program stays plain text. It writes identical bytes on every run.
import { readFileSync, writeFileSync, renameSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const parts = ["part1.txt", "part2.txt", "part3.txt", "part4.txt", "part5.txt"];
const b64 = parts.map((p) => readFileSync(join(here, "img", p), "utf8")).join("").replace(/\s/g, "");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const png = Buffer.from(b64, "base64");
// Sanity-check the payload before writing: a valid PNG starts with the
// 8-byte signature 89 50 4E 47 0D 0A 1A 0A; anything else means a part
// file was corrupted in transit and the output would not be an image.
const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
if (png.length < PNG_SIGNATURE.length || !PNG_SIGNATURE.every((b, i) => png[i] === b)) {
  throw new Error("decoded payload is not a PNG (bad signature)");
}
// Write via a temp file + rename so a reader never sees a half-written PNG.
const finalPath = join(outDir, "entry.png");
writeFileSync(finalPath + ".tmp", png);
renameSync(finalPath + ".tmp", finalPath);
console.log(`wrote entry.png (${png.length} bytes)`);
