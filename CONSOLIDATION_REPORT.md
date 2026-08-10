# Four-folder comparison and consolidation report

Date: August 9, 2026

## Outcome

`russvaccaro-lab-foundation` was selected as the canonical base because it is the only folder that already combines all six useful browser experiments inside one coherent layout, navigation system, and visual language. The final package keeps that implementation, adds a social preview card and metadata, updates the project version to 0.3.0, and excludes incomplete blog-starter material and stray duplicates from `russvaccaro-lab-main`.

## Folder summary

| Folder | Source files | What it contains | Decision |
| --- | ---: | --- | --- |
| `russvaccaro-lab-main` | 53 | The starter lab plus Astro's example blog/about/RSS stack, local fonts, sitemap, analytics dependencies, editor files, and several stray root copies | Use only as evidence of the earlier merge; do not carry unfinished blog content into production |
| `russvaccaro-lab-prototypes` | 20 | Three polished browser-only experiments: Interview Drill, Local Scratchpad, and Learning Cards | Preserve through the identical or evolved copies already present in `foundation` |
| `russvaccaro-lab-foundation` | 29 | All six experiments, shared navigation/layout, consolidated home page, sales hub, changelog, and 404 | Canonical base for the final package |
| `russvaccaro-astro-lab-starter` | 24 | The initial lab scaffold with Reading, Learning, MEDDPICC, POV Builder, changelog, and 404 | Superseded by the broader and more cohesive `foundation` implementation |

Counts use project source files and exclude `.git`, `node_modules`, and generated build output.

## Correctly repetitive files

The repetition is correct when each folder is treated as a standalone Astro package. Every package needs its own `package.json`, lockfile, Astro config, TypeScript config, favicon, layout, global styles, home page, and 404 page. Those files should not coexist twice in one final package; one canonical copy must win.

### `main` and `starter`: 20 byte-identical files

This shows that `main` was built directly on the starter lab. The following copies are expected and should remain only once in a consolidated package:

```text
README.md
public/favicon.svg
src/components/ExperimentCard.astro
src/components/PageHeader.astro
src/components/StatusBadge.astro
src/data/books.json
src/data/changelog.ts
src/data/experiments.ts
src/data/learningNotes.ts
src/data/meddpicc.ts
src/layouts/LabLayout.astro
src/pages/404.astro
src/pages/changelog.astro
src/pages/index.astro
src/pages/learning.astro
src/pages/reading.astro
src/pages/sales/index.astro
src/pages/sales/meddpicc.astro
src/pages/sales/pov-builder.astro
src/styles/global.css
```

### `foundation` and `prototypes`: 15 byte-identical files

This shows that `foundation` intentionally absorbed the working prototype family. These are the correct retained implementations:

```text
astro.config.mjs
public/favicon.svg
src/components/PageIntro.astro
src/components/ProjectCard.astro
src/components/SiteFooter.astro
src/data/interview-questions.ts
src/data/learning-cards.ts
src/layouts/BaseLayout.astro
src/pages/404.astro
src/pages/learning/index.astro
src/pages/sales/interview.astro
src/pages/tools/scratchpad.astro
src/styles/global.css
src/utils/shuffle.ts
tsconfig.json
```

The evolved files in `foundation` are also intentional: `SiteHeader.astro` gained routes for the expanded lab, the home page grew from three to six experiments, and the package version/dependencies changed from prototype package 0.1.0 to consolidated lab 0.2.0.

## Material differences

### Project configuration

- `starter` is the smallest dependency-light Astro project and runs only `astro build`.
- `prototypes` adds Astro's checker and TypeScript, and requires checks before production builds.
- `foundation` keeps those checks and merges both experiment families.
- `main` adds MDX, RSS, sitemap, Vercel analytics/speed dependencies, Sharp, and local Atkinson fonts because it also contains Astro blog-starter files. Its package name remains `@example/blog`, which is stale for this site.

### Routes and content

- `starter` contains Reading, Learning Notes, MEDDPICC, Account POV, Changelog, and 404 routes.
- `prototypes` contains Interview Drill, Local Scratchpad, and a richer Learning Cards route.
- `foundation` combines those into 10 static HTML outputs and adds a sales hub.
- `main` contains the starter routes plus About, Blog, MDX, RSS, and sitemap infrastructure, but it does not include Interview Drill or Local Scratchpad.

### Design systems

- `main` and `starter` use `LabLayout.astro`, blue-forward design tokens, and `ExperimentCard`/`PageHeader` components.
- `prototypes` and `foundation` use `BaseLayout.astro`, a warmer editorial palette, shared header/footer, and project/experiment card components.
- These are competing systems, not additive files. Mixing both global styles and both layouts would create duplicated navigation, conflicting CSS variables, and inconsistent routes.

### Data

- `starter` and `main` use three explicitly labeled example reading entries and a smaller learning-note set.
- `prototypes` adds 36 interview questions and 30 no-repeat learning cards.
- `foundation` retains those richer datasets and adds a 12-book reading catalog plus structured POV discovery prompts.
- Browser storage keys and stable content IDs in the prototype/foundation family are functional compatibility details and should not be renamed casually.

## Files intentionally excluded

- `main/src/pages/about.astro` and multiple `main/src/content/blog/*` entries contain Lorem ipsum or sample documentation.
- `main/src/components/Footer.astro` still says “Your name here,” and its social links point to Astro examples.
- `main/package.json` retains the placeholder name `@example/blog`.
- Root-level `main/PageHeader.astro`, `main/global.css`, `main/favicon.svg`, `.codesandbox`, and `.vscode` are not needed by the consolidated runtime.
- `.DS_Store`, `node_modules`, `.astro`, `dist`, temporary package-manager files, and repository metadata are generated or machine-specific and are excluded from the ZIP.

## Changes made in the final package

1. Selected `foundation` as the single canonical source tree.
2. Preserved all six experiments and all 10 static HTML routes.
3. Kept the richer Interview Drill and Learning Cards datasets plus the Scratchpad utility.
4. Rejected unfinished blog/about content instead of publishing placeholders as personal writing.
5. Added a site-specific Open Graph image and complete Open Graph/X card metadata.
6. Declared the Node.js version required by Astro and advanced the package to 0.3.0.
7. Updated the README and public changelog to document the consolidation.
8. Verified 22 Astro source files with zero errors, warnings, or hints and produced a successful static build.

## Recommended next changes requiring owner input

These should not be guessed during consolidation:

- Confirm that the reading catalog reflects Russ's real reading status and ratings before treating it as autobiographical.
- Replace or calibrate MEDDPICC scoring language to match the actual sales process.
- Test the Account POV prompts on public or fictional accounts before adding external data sources.
- Add real personal essays only when publishable writing exists; the discarded Astro sample posts are not suitable substitutes.
- Decide whether `lab.russvaccaro.com` should remain a separate lab or become the main `russvaccaro.com` homepage before changing canonical URLs or navigation.
