# farewalk — Invent a Word We Need

[![make.fun · u-deranalabs-invent-a-word-we-need-17a020e0](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-invent-a-word-we-need-17a020e0)
[![rank](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/Indodegen/u-deranalabs-invent-a-word-we-need-17a020e0/rank.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-invent-a-word-we-need-17a020e0)
[![reward](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/Indodegen/u-deranalabs-invent-a-word-we-need-17a020e0/reward.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-invent-a-word-we-need-17a020e0)

Entry for the make.fun bounty **[Invent a Word We Need](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0)** — coin one new English word and define it in a single clear line of at most 140 characters.

## The word

> **farewalk:** saying goodbye to someone, then realising you are both walking the same way.

*Fare* (to travel, to go — as in *farewell*, "travel well") + *walk*: the awkward little journey you take together right after you have already said goodbye. Everyone has lived it; English just never named it.

## How it works

`entry.txt` holds the whole entry — one line, 86 characters. `main.ts` reads it (resolving the path via `import.meta.url`, never a relative path, because the grader runs from another working directory), validates it against the sealed gate (UTF-8, exactly one line, 1–140 characters, not only whitespace), then writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `out`).

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Referral

Made with [make.fun](https://make.fun/r/nh8nx71y) — referral: https://make.fun/r/nh8nx71y

## License

MIT — see [LICENSE](LICENSE).
