// Copies the simple-icons SVGs the site needs into public/logos/ so LogoFan's
// CSS-mask technique (monochrome rule: background:currentColor + mask) works
// offline and without a CDN. Runs automatically before dev/build.
import { copyFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const src = join(root, "node_modules", "simple-icons", "icons");
const dst = join(root, "public", "logos");

const slugs = [
  "nestjs", "typescript", "natsdotio", "kubernetes", "helm", "docker",
  "mongodb", "redis", "angular", "react", "nextdotjs", "minio",
  "proxmox", "n8n", "asterisk", "frappe", "googlegemini", "prisma",
  "mysql", "nginx", "linux", "googlecloud", "amazons3", "tailwindcss", "html5", "javascript",
];

mkdirSync(dst, { recursive: true });
let ok = 0;
for (const slug of slugs) {
  const f = join(src, `${slug}.svg`);
  if (existsSync(f)) {
    copyFileSync(f, join(dst, `${slug}.svg`));
    ok++;
  } else {
    console.warn(`[copy-logos] missing slug: ${slug} (check simple-icons rename)`);
  }
}
console.log(`[copy-logos] ${ok}/${slugs.length} brand marks → public/logos/`);
