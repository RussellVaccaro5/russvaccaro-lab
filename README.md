# Russ Vaccaro Lab

This is the canonical consolidated package for `https://lab.russvaccaro.com`. It combines the strongest useful work from four overlapping Astro folders into one static site and intentionally leaves unfinished starter-blog content out of the publishable build.

## What is included

- Interview Drill: 36 questions, filters, no-repeat shuffling, timers, coaching prompts, copying, and locally stored progress
- Daily Scratchpad: date navigation, per-day auto-save, quick structures, live counts, legacy-note migration, and one chronological Markdown dump
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
- Interview prompts: `src/data/interview-questions.json`
- Learning cards: `src/data/learning-cards.json`
- Account POV prompts: `src/data/discovery-questions.json`
- Public build record: `src/pages/changelog/index.astro`

Keep IDs stable after publishing so saved browser progress continues to map to the correct questions and cards.

All four datasets are validated when Astro imports them during the production build. Allowed values and TypeScript interfaces live in `src/data/schema.ts`; validation rules live in `src/data/validation.ts`.

## Protected content editor

The repository includes a form-based editor at `/editor/` with search, create, duplicate, delete, live validation, JSON import/export, previews, and GitHub pull-request publishing. Keep the public lab and private editor as separate Vercel projects connected to the same repository:

1. Leave `PUBLIC_EDITOR_ENABLED` unset on the public project. The `/editor/` route displays only an unavailable message there, and publishing remains disabled.
2. Set `PUBLIC_EDITOR_ENABLED=true` and `EDITOR_PUBLISH_ENABLED=true` on the private editor project.
3. Enable Vercel Deployment Protection for every environment in which the editor is available.
4. Install a narrowly scoped GitHub App on this repository with **Contents: read/write** and **Pull requests: read/write** repository permissions.
5. Configure the private project with `GITHUB_APP_ID`, `GITHUB_APP_PRIVATE_KEY`, `GITHUB_APP_INSTALLATION_ID`, `GITHUB_REPOSITORY_OWNER`, and `GITHUB_REPOSITORY_NAME`. `GITHUB_BASE_BRANCH` is optional and defaults to `main`.

Do not expose the GitHub App private key through a `PUBLIC_` variable. The publishing function reads credentials only on the server, creates a timestamped branch, commits changed JSON files, and opens a pull request; it never merges directly.

See `CONSOLIDATION_REPORT.md` for the source-folder comparison, intentional repetition, rejected conflicts, and merge decisions.
