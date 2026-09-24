import fs from "fs";
import path from "path";

const sourceRoot = process.cwd();
const liveRoot = path.resolve(sourceRoot, "..");

const standaloneDir = path.join(sourceRoot, ".next", "standalone");
const publicDir = path.join(sourceRoot, "public");
const staticDir = path.join(sourceRoot, ".next", "static");

console.log("=================================");
console.log("Preparing standalone deployment");
console.log("Source:", sourceRoot);
console.log("Live:", liveRoot);
console.log("=================================");

// 1. Copy public → standalone/public
if (fs.existsSync(publicDir)) {
  fs.cpSync(
    publicDir,
    path.join(standaloneDir, "public"),
    { recursive: true }
  );

  console.log("✓ public copied");
}

// 2. Copy .next/static → standalone/.next/static
if (fs.existsSync(staticDir)) {
  fs.cpSync(
    staticDir,
    path.join(standaloneDir, ".next", "static"),
    { recursive: true }
  );

  console.log("✓ .next/static copied");
}

// 3. Verify standalone server
const standaloneServer = path.join(standaloneDir, "server.js");

if (!fs.existsSync(standaloneServer)) {
  throw new Error("Standalone server.js not found.");
}

console.log("✓ standalone/server.js found");

// 4. Copy standalone build → /httpdocs
fs.cpSync(
  standaloneDir,
  liveRoot,
  {
    recursive: true,
    force: true,
  }
);

console.log("✓ Standalone build copied to live root");
console.log("=================================");
console.log("DEPLOYMENT COMPLETE");
console.log("=================================");