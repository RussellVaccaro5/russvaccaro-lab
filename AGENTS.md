# Repository operating guide

## Purpose

This is the canonical source for `https://lab.russvaccaro.com`: a static, browser-only Astro lab of small tools for sales practice, learning, reading, and thinking. Keep it dependency-light and inspectable. It has no accounts, database, API keys, server adapter, or required environment variables; do not add those layers unless a feature clearly requires them and the owner agrees.

## Architecture and repository map

- Astro 7 + TypeScript/ES modules, with static output and trailing-slash URLs. `src/layouts/BaseLayout.astro` owns metadata, canonical/social URLs, the early theme bootstrap, and the shared header/footer.
- Routes live under `src/pages/`; interactive tools use page-local, client-side TypeScript in `.astro` files. Preserve the published route structure when moving files.
- Reusable presentation belongs in `src/components/`. Shared tokens, layout primitives, accessibility helpers, and common controls belong in `src/styles/global.css`; route-specific styles stay scoped in their page/component.
- Editable content lives in `src/data/`: `books.json`, `interview-questions.ts`, `learning-cards.ts`, and `discovery-questions.json`. `src/utils/shuffle.ts` is the shared non-mutating Fisher-Yates/shuffle-bag implementation.
- `public/` contains stable root-served assets. `CONSOLIDATION_REPORT.md` records why this source tree and design system won over earlier overlapping implementations.

## Invariants and compatibility

- Preserve `astro.config.mjs`'s canonical site (`https://lab.russvaccaro.com`), static output, and `trailingSlash: 'always'` unless the owner decides on a deployment/URL change. The external main-site URL is `https://russvaccaro.com`.
- Browser persistence is part of the product contract. Do not rename, repurpose, or silently change the schema of these keys: `rv-lab-theme`, `rv-lab-interview-settings-v1`, `rv-lab-interview-queues-v1`, `rv-lab-learning-decks-v1`, `rv-lab-meddpicc-v1`, `rv-lab-pov-builder-v1`, `rv-lab-daily-pages-v2`, or legacy migration input `rv-lab-scratchpad-v1`. Introduce a versioned key/schema and an explicit migration for incompatible changes.
- Interview question IDs, learning-card IDs, discovery-question IDs, MEDDPICC `data-criterion` IDs, and daily-page `YYYY-MM-DD` local-date keys connect rendered content to saved state. Keep published IDs stable; add new IDs rather than recycling old ones.
- Keep the scratchpad v1-to-v2 migration and its `{ version: 2, pages: Record<string, DailyPage> }` envelope. Date navigation intentionally uses the browser's local calendar, not UTC.
- Shuffle-bag behavior is intentional: it prevents repeats across draws/refreshes. Filter stored bags against current IDs and retain graceful behavior when storage is blocked or malformed.
- Do not reintroduce the discarded sample blog/about/RSS/MDX stack, placeholder writing, duplicate layouts/styles, or unrelated dependencies from prior source folders.

## Design and implementation conventions

- Extend the existing warm editorial system: CSS custom properties support light/dark themes; Georgia is used for display headings and the system sans stack for UI/body text; green/orange/blue are established accents; surfaces use restrained borders, radii, and shadows.
- Build new pages on `BaseLayout` and prefer `PageIntro`, existing card/status components, `.shell`/`.page-shell`, `.tool-panel`, and existing button/field patterns before creating variants.
- Preserve accessibility behavior: semantic landmarks and headings, the `#main-content` skip target, labels, visible `:focus-visible`, `aria-live` feedback, expanded/pressed state, keyboard/Escape behavior, and meaningful empty/error states.
- Keep interactions browser-native and page-local unless code is genuinely reused. Prefer structured data plus Astro rendering over duplicated markup. Keep shuffle helpers non-mutating.
- Treat `localStorage`, `sessionStorage`, clipboard, and downloads as unavailable or fallible. A tool should remain usable for the current page view when persistence is blocked; destructive resets require confirmation.
- Use root-relative internal links with the established trailing slash. Update shared navigation, home/sales discovery cards, metadata, changelog, and README only when the affected change warrants it.

## Scope and owner decisions

Make the smallest coherent change and do not broaden a tool into platform infrastructure speculatively. Ask the owner before changing canonical domains/navigation strategy, adding a backend/accounts/external data source, treating reading statuses or ratings as autobiographical truth, calibrating MEDDPICC scoring/process language, publishing personal essays, or materially redefining Account POV prompts. These are product/content decisions, not implementation details.

## Commands

Use Node.js 22.12 or newer.

- `npm install` — install the locked dependencies.
- `npm run dev` — local Astro development server.
- `npm run check` — Astro and TypeScript validation.
- `npm run build` — required production validation (`astro check && astro build`).
- `npm run preview` — serve the completed static build for manual review.

## Definition of done

- The change follows the architecture and preserves routes, IDs, storage keys/schemas, migrations, and static/browser-only behavior unless an approved requirement says otherwise.
- Relevant UI is checked at narrow and wide widths, in light and dark themes, with keyboard navigation and blocked/empty/malformed-storage paths considered. Take a screenshot for a perceptible web UI change.
- Data/content changes match the existing schema and use unique stable IDs; user-facing feature changes are reflected in discovery surfaces or the changelog where appropriate.
- `npm run check` and `npm run build` pass. Review the final diff for generated files, `.DS_Store`, accidental dependency churn, placeholder content, and unrelated edits before committing.
