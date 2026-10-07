// Converts legacy PNGs in ../public_html into trimmed, resized WebP files under public/images.
// Usage: node scripts/optimize-images.mjs
import { readFile, stat, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const legacy = path.resolve(root, "..", "public_html");
const products = JSON.parse(
  await readFile(path.join(root, "docs", "products.source.json"), "utf8"),
);

const toKebab = (file) =>
  path
    .parse(file)
    .name.toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const jobs = [
  ...products.map((p) => ({
    src: p.image,
    out: `products/${toKebab(p.image)}.webp`,
    maxWidth: 1000,
    trim: true,
  })),
  { src: "lo.png", out: "site/logo.webp", maxWidth: 400, trim: false },
];

let before = 0;
let after = 0;
const rows = [];

for (const job of jobs) {
  const input = path.join(legacy, job.src);
  const output = path.join(root, "public", "images", job.out);
  await mkdir(path.dirname(output), { recursive: true });

  let pipeline = sharp(input);
  // Trim the white/transparent padding so every product sits in its frame the same way.
  if (job.trim) pipeline = pipeline.trim({ background: "#ffffff", threshold: 12 });
  const info = await pipeline
    .resize({ width: job.maxWidth, height: 1200, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82, alphaQuality: 90, effort: 6 })
    .toFile(output);

  const inSize = (await stat(input)).size;
  before += inSize;
  after += info.size;
  rows.push(
    `${job.src.padEnd(22)} ${(inSize / 1024).toFixed(0).padStart(6)} KB -> ${(info.size / 1024)
      .toFixed(0)
      .padStart(4)} KB  ${info.width}x${info.height}  ${job.out}`,
  );
}

console.log(rows.join("\n"));
console.log(
  `\nTotal: ${(before / 1024 / 1024).toFixed(2)} MB -> ${(after / 1024 / 1024).toFixed(2)} MB`,
);
