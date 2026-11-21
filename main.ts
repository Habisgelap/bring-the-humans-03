// Entry program for bring-the-humans-03.
//
// The entry is a TikTok video ad for make.fun. This program does the one
// thing the grader needs: it copies VIDEO.json (the video's TikTok address)
// from the repository into the output directory, byte for byte.
//
// It runs on Node 22 with the standard library only. No network, no wall
// clock, no files outside the repository: the two runs of an entry write
// the same bytes.
//
//   MAKEFUN_BOT_DIR     repository root (defaults to the working directory)
//   MAKEFUN_OUTPUT_DIR  where VIDEO.json is written (defaults to "out")
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const botDir = resolve(process.env.MAKEFUN_BOT_DIR ?? process.cwd());
// A relative output dir is relative to the repository, not to wherever
// the caller happened to run from, so both runs land in the same place.
const outEnv = process.env.MAKEFUN_OUTPUT_DIR;
const outDir = outEnv ? resolve(botDir, outEnv) : join(botDir, "out");

const source = join(botDir, "VIDEO.json");
if (!existsSync(source)) {
  throw new Error(`VIDEO.json not found in ${botDir}`);
}

// Refuse a malformed hand-in early instead of copying garbage along.
const parsed = JSON.parse(readFileSync(source, "utf8"));
if (typeof parsed !== "object" || parsed === null || typeof parsed.url !== "string") {
  throw new Error("VIDEO.json must be a JSON object with a string url");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "VIDEO.json"));
