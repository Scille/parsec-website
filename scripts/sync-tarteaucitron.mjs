// scripts/sync-tarteaucitron.mjs
// Copies the minified tarteaucitronjs assets we actually ship from node_modules
// into public/tarteaucitron/, so the served files stay byte-identical to the
// npm package instead of drifting (e.g. getting reformatted by Prettier).
import path from "node:path";
import { promises as fs } from "node:fs";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.resolve(__dirname, "..");
const PACKAGE_DIR = path.resolve(
  PROJECT_ROOT,
  "node_modules",
  "tarteaucitronjs",
);
const TARGET_DIR = path.resolve(PROJECT_ROOT, "public", "tarteaucitron");

const FILES_TO_SYNC = [
  "tarteaucitron.min.js",
  "tarteaucitron.services.min.js",
  path.join("css", "tarteaucitron.min.css"),
  path.join("lang", "tarteaucitron.en.min.js"),
  path.join("lang", "tarteaucitron.fr.min.js"),
];

for (const relativePath of FILES_TO_SYNC) {
  const source = path.join(PACKAGE_DIR, relativePath);
  const destination = path.join(TARGET_DIR, relativePath);

  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.copyFile(source, destination);
}

console.log(
  `Synced ${FILES_TO_SYNC.length} tarteaucitronjs assets into public/tarteaucitron/`,
);
