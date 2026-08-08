# Russ Vaccaro Astro Lab starter

This is a dependency-light Astro scaffold for `lab.russvaccaro.com`. It includes:

- A responsive lab homepage and experiment directory
- Reading-log search, category/status filters, reset, and random selection
- A MEDDPICC evidence diagnostic with browser-only persistence
- A deterministic target-account POV builder with copy and text download
- Searchable technical learning cards
- A changelog and custom 404 page
- A persistent light/dark theme

The project uses Astro, TypeScript data, JSON, CSS, and browser JavaScript. It does not require React, a database, authentication, API keys, or an Astro server adapter.

## Before you copy files

This package is a complete standalone example. If your Vercel-created repository came from the official Astro Blog starter, preserve any existing blog files you want to keep.

Files in this package that are intended to replace an existing file:

- `src/pages/index.astro`
- `astro.config.mjs` only if your current file does not already contain other settings
- `public/favicon.svg` only if you want this icon

The other routes and components are additions. If your current project already has `src/styles/global.css`, compare the files instead of blindly replacing your existing stylesheet.

The safest option is to add the lab files on the `feature/lab-foundation` branch, let Vercel build the preview, and resolve any conflicts before merging.

## Recommended branch workflow

Use one branch for the complete, internally consistent scaffold. That ensures every navigation link has a working route in the first Vercel preview:

| Order | Branch | Add or update |
| --- | --- | --- |
| 1 | `feature/lab-foundation` | Copy the complete scaffold, preview all eight routes, and merge it |
| 2 | `content/reading-log` | Replace placeholder books with real entries and note links |
| 3 | `feature/meddpicc-calibration` | Adjust prompts, score bands, and evidence standards to match your process |
| 4 | `feature/account-pov-template` | Refine the output after testing it on public or fictional accounts |
| 5 | `content/learning-cards` | Replace the examples with your own technical notes and flashcards |

Always create the next branch from the newly updated `main` branch after the previous pull request has merged. Avoid creating all five branches at once because each follow-on branch depends on the foundation.

## Easiest browser-only workflow

1. Open the repository on GitHub and confirm the branch selector says `main`.
2. Open the branch selector, type the branch name, and select **Create branch from main**.
3. Press `.` to open the branch in `github.dev`.
4. Create or edit the listed files.
5. Open Source Control, stage the changes, enter a focused commit message, and select **Commit & Push**.
6. In Vercel, open the new Preview deployment and test it.
7. On GitHub, create a pull request with `main` as the base and your feature branch as the compare branch.
8. Check the Files changed and Checks tabs, open the Vercel preview again, and merge.
9. Delete the merged branch.
10. Switch back to `main` before creating the next branch.

Suggested commit messages:

```text
Add Astro lab foundation and prototype routes
Add real reading log entries
Calibrate MEDDPICC evidence scoring
Refine target account POV template
Expand technical learning cards
```

## Target structure

```text
src/
├── components/
│   ├── ExperimentCard.astro
│   ├── PageHeader.astro
│   └── StatusBadge.astro
├── data/
│   ├── books.json
│   ├── changelog.ts
│   ├── experiments.ts
│   ├── learningNotes.ts
│   └── meddpicc.ts
├── layouts/
│   └── LabLayout.astro
├── pages/
│   ├── 404.astro
│   ├── changelog.astro
│   ├── index.astro
│   ├── learning.astro
│   ├── reading.astro
│   └── sales/
│       ├── index.astro
│       ├── meddpicc.astro
│       └── pov-builder.astro
└── styles/
    └── global.css
```

Astro converts each file under `src/pages` into a route:

| File | Route |
| --- | --- |
| `src/pages/index.astro` | `/` |
| `src/pages/reading.astro` | `/reading/` |
| `src/pages/learning.astro` | `/learning/` |
| `src/pages/changelog.astro` | `/changelog/` |
| `src/pages/sales/index.astro` | `/sales/` |
| `src/pages/sales/meddpicc.astro` | `/sales/meddpicc/` |
| `src/pages/sales/pov-builder.astro` | `/sales/pov-builder/` |

## Running it locally

If you use Codespaces, VS Code, or Terminal:

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

Before pushing:

```bash
npm run build
```

If you stay in `github.dev`, there is no terminal or local runtime. Commit the branch and use its Vercel Preview deployment as your test environment.

## What to customize first

1. Replace the placeholder records in `src/data/books.json`.
2. Replace or expand the example cards in `src/data/learningNotes.ts`.
3. Update `src/data/changelog.ts` after each production merge.
4. Change experiment statuses and descriptions in `src/data/experiments.ts`.
5. Review the wording and score bands in the MEDDPICC tool so they reflect how you actually inspect deals.
6. Edit the POV template only after using it on several fictional or public accounts and noticing repeated friction.

## Preview checklist for every branch

- The Vercel build finishes successfully.
- The new route loads directly and after a browser refresh.
- Header navigation works on desktop and mobile.
- Search, filters, buttons, and browser persistence behave as expected.
- No placeholder information is presented as your real reading history.
- No confidential customer, employer, or candidate information appears in source code or saved screenshots.
- The pull request contains only the intended feature.

## Good next experiments

- Move technical notes from TypeScript into an Astro Markdown content collection.
- Add a command palette for navigating experiments.
- Add an export/import button for the browser-only MEDDPICC scorecard.
- Add URL query parameters so a Reading Log filter can be shared.
- Enable Vercel Analytics and Speed Insights.
- Add an API-backed version of the POV Builder only after the deterministic workflow proves useful.
