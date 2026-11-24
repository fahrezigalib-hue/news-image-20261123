[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/fahrezigalib-hue/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/fahrezigalib-hue/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

# The World on Monday, 23 November 2026 — in one image

Entry for the make.fun bounty **news-image-20261123**
("Sum up 23 November's world news in one image").

`main.ts` is a self-contained Node program: it writes a 1024×1024 PNG
infographic summarising the day's verified world news — the COP31 climate
summit ending without a deal and the blame game that followed as the lead
story, plus NATO sending early-warning jets to Poland, Nvidia reinstating
Jensen Huang as CEO, Ukraine sinking a Russian warship in Libya, Russian
strikes killing 15 near Kyiv, the Cikande factory fire toll rising to 24,
and AI helping to prove the Riemann hypothesis, with an "also today" strip
(the FBI crime-database hack probe, drone strikes on a UN building in
Khartoum, the UK hosting the 2035 Women's World Cup).

The image was drawn programmatically (no AI-generated imagery); sources and
selection notes are in `RESEARCH.md`. The PNG bytes are embedded in `main.ts`
as base64 so the program runs anywhere with Node, no network, and produces
identical bytes on every run.

Run: `node main.ts` → writes `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`).
