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

The repository includes a form-based editor at `/editor/` with search, create, duplicate, delete, live validation, JSON import/export, previews, and GitHub pull-request publishing. It runs in the existing Vercel project: visit `https://lab.russvaccaro.com/editor/`, sign in with an approved GitHub account, make changes, and create a pull request.

### One-time GitHub App setup

1. Create or update a GitHub App owned by the account that owns this repository.
2. Set its callback URL to `https://lab.russvaccaro.com/api/auth/callback` and enable user authorization through the app.
3. Grant only **Contents: read/write** and **Pull requests: read/write** repository permissions, then install it only on this repository.
4. Generate a private key and note the App ID, client ID, client secret, and installation ID.
5. Add these encrypted environment variables to the existing Vercel project:
   - `EDITOR_SITE_URL=https://lab.russvaccaro.com`
   - `EDITOR_ALLOWED_GITHUB_LOGINS=your-github-username` (comma-separated for more than one editor)
   - `EDITOR_SESSION_SECRET=` followed by a random value of at least 32 characters (generate one with `openssl rand -hex 32`)
   - `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`, `GITHUB_APP_ID`, `GITHUB_APP_PRIVATE_KEY`, and `GITHUB_APP_INSTALLATION_ID`
   - `GITHUB_REPOSITORY_OWNER` and `GITHUB_REPOSITORY_NAME`
   - Optional `GITHUB_BASE_BRANCH` (defaults to `main`)
6. Redeploy once so Vercel applies the variables.

Authentication uses an eight-hour, signed, HTTP-only cookie. Every publish request verifies that session server-side before using the GitHub App to create a timestamped branch, commit changed JSON files, and open a pull request. It never merges directly. Do not put authentication or GitHub secrets in variables beginning with `PUBLIC_`.

See `CONSOLIDATION_REPORT.md` for the source-folder comparison, intentional repetition, rejected conflicts, and merge decisions.
