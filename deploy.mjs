import fs from "fs";
import path from "path";

const sourceRoot = process.cwd();

const standaloneDir = path.join(sourceRoot, ".next", "standalone");
const publicDir = path.join(sourceRoot, "public");
const staticDir = path.join(sourceRoot, ".next", "static");

console.log("Preparing standalone deployment...");

// Copy public → standalone/public
if (fs.existsSync(publicDir)) {
  fs.cpSync(
    publicDir,
    path.join(standaloneDir, "public"),
    { recursive: true }
  );
  console.log("✓ public copied");
}

// Copy .next/static → standalone/.next/static
if (fs.existsSync(staticDir)) {
  fs.cpSync(
    staticDir,
    path.join(standaloneDir, ".next", "static"),
    { recursive: true }
  );
  console.log("✓ .next/static copied");
}

console.log("✓ Standalone deployment prepared.");