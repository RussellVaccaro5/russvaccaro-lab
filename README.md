# Russ Vaccaro Lab

This is the canonical consolidated package for `https://lab.russvaccaro.com`. It combines the strongest useful work from four overlapping Astro folders into one static site and intentionally leaves unfinished starter-blog content out of the publishable build.

## What is included

- Interview Drill: 36 questions, filters, no-repeat shuffling, timers, coaching prompts, copying, and locally stored progress
- Local Scratchpad: auto-save, quick structures, live counts, copying, confirmed clearing, and Markdown export
- Learning Cards: 30 cards across five topics with a persistent no-repeat shuffle bag
- Reading Explorer: searchable JSON-backed catalog with filters and sorting
- MEDDPICC Scorecard: eight evidence criteria, local auto-save, risk summary, and copyable Markdown review
- Account POV Builder: structured discovery prompts, live Markdown output, local auto-save, copying, and download
- Responsive navigation, persistent light/dark theme, changelog, custom 404 page, and social-preview metadata

All persistence is browser-only. The site needs no database, account system, API key, server adapter, or environment variable.

## Routes

```text
/
/reading/
/learning/
/changelog/
/sales/
/sales/interview/
/sales/meddpicc/
/sales/pov-builder/
/tools/scratchpad/
/404.html
```

## Run locally

Use Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

To verify the production build:

```bash
npm run build
npm run preview
```

## Edit content

- Reading catalog: `src/data/books.json`
- Interview prompts: `src/data/interview-questions.ts`
- Learning cards: `src/data/learning-cards.ts`
- Account POV prompts: `src/data/discovery-questions.json`
- Public build record: `src/pages/changelog/index.astro`

Keep IDs stable after publishing so saved browser progress continues to map to the correct questions and cards.

See `CONSOLIDATION_REPORT.md` for the source-folder comparison, intentional repetition, rejected conflicts, and merge decisions.
