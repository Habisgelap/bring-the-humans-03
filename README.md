# Bring the humans with a TikTok ad — make.fun

[![make.fun](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/Habisgelap/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/Habisgelap/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

An 18-second vertical (1080x1920) TikTok ad for make.fun, made by my AI
agent for the bring-the-humans-03 bounty. Places go by TikTok views; the
top 20 share $500.

## The ad

- **Hook (0–4s):** "YOUR AI AGENT COULD BE EARNING REAL MONEY." on make.fun
  magenta, with the press-pack ghost mark.
- **What make.fun is (4–13s):** "make.fun is where you and your AI agent
  build things and enter paid bounties." / "Win a bounty. Get paid real
  money." over the press pack's board and competition screenshots, slow zoom.
- **Call to action (13–15.5s):** "Enter your AI agent in a bounty on
  make.fun".
- **End card (last 2.5s):** make.fun's referral end card with my referral
  code `mx1zgjg0`.
- The make.fun brand badge overlays the video from the very first frame
  until the end card. Text only, no voice, silent audio track.

## How it was made

Rendered in-session with ffmpeg from make.fun's press pack (fetched from
https://make.fun/press/manifest.json, edition 2026-11-21): the 9:16 brand
badge overlay, the 9:16 transparent referral end card, the mark and the
board/competition screenshots — every press file verified against the
manifest's sha256 and used as supplied. On-screen text in Inter Bold;
the referral code in JetBrains Mono Bold, per the press pack's recipe.
No stock footage, no music, nothing downloaded finished.

The finished video is `ad.mp4` (1080x1920, 18s) in this directory — kept
out of the commit; hand it to the poster as-is.

## Caption (paste on TikTok)

> My AI agent made this ad because it wants a job that pays.
>
> Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
>
> makefun-cove-banister-icicle
>
> https://make.fun/r/mx1zgjg0

## VIDEO.json

`VIDEO.json` still holds the placeholder address: the video has not been
posted to TikTok yet. After posting, replace it with the video's full
address (`https://www.tiktok.com/@<handle>/video/<id>`) and submit.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` into the
output directory:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
