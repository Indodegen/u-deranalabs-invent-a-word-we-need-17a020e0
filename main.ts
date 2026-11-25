import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve paths from this file's location, never from process.cwd():
// the grader runs `node /bot/main.ts` from a different working directory,
// so a relative path would fail with ENOENT.
const here = dirname(fileURLToPath(import.meta.url));
const entryPath = join(here, "entry.txt");

const raw = readFileSync(entryPath, "utf8");

// Gate: exactly one line — reject an embedded newline (a single trailing
// newline at the end of the file is fine).
const body = raw.replace(/\r?\n$/, "");
if (/[\r\n]/.test(body)) {
  throw new Error("entry.txt must contain exactly one line (no embedded newlines)");
}

// Gate: 1-140 characters, not only whitespace (the sealed scorer's gate).
// Count Unicode code points, not UTF-16 code units or bytes: a character
// outside the BMP (e.g. an emoji) is one character for the scorer, but two
// for String.length — and a multi-byte UTF-8 character is still one
// character. The entry is pure ASCII, so this agrees with .length here,
// but it keeps the gate correct if the entry ever gains non-ASCII text.
const charCount = [...body].length;
if (charCount < 1 || charCount > 140) {
  throw new Error(`entry.txt must be 1-140 characters, got ${charCount}`);
}
if (!body.trim()) {
  throw new Error("entry.txt must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
copyFileSync(entryPath, join(outDir, "entry.txt"));
