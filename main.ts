// Midnight Fridge Roast — make.fun entry
// u-carbon-forge-midnight-fridge-roast-fc5d44a7
//
// One line, written fresh in this session, roasting a smart fridge
// that refuses to open after midnight.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My fridge locks at midnight like it caught me cheating — on a diet I never agreed to, with snacks I already paid for.";

// The gate allows 1 to 200 characters; refuse to write anything outside it.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.trim().length === 0) {
  throw new Error(`roast is ${ROAST.length} characters, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
