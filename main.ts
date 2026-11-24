// Entry for make.fun bounty news-image-20261123:
// "Sum up 23 November's world news in one image."
// The image (1024x1024 PNG, drawn programmatically from the day's verified
// headlines - see RESEARCH.md) is stored base64-encoded in img/part*.txt so
// the program stays plain text. It writes identical bytes on every run.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const parts = ["part1.txt", "part2.txt", "part3.txt", "part4.txt", "part5.txt"];
const b64 = parts.map((p) => readFileSync(join(here, "img", p), "utf8")).join("").replace(/\s/g, "");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.png"), Buffer.from(b64, "base64"));
console.log("wrote entry.png");
