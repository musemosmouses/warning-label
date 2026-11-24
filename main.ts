// warning-label: one-line entry for the make.fun bounty
// "Warning Label for Humans" (u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85).
// Writes the entry text to <MAKEFUN_OUTPUT_DIR>/entry.txt (default: out/).
// Deterministic: no network, no clock, no randomness, fixed output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, 107 characters. The laugh turns in the last few words.
const ENTRY =
  "WARNING: Do not shake. This human is held together by caffeine, spite, " +
  "and a playlist they refuse to share.";

// Gate: the sealed scorer accepts 1-160 characters of UTF-8 text.
const len = [...ENTRY].length;
if (len < 1 || len > 160) {
  throw new Error(`entry must be 1-160 characters, got ${len}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${len} chars)`);
