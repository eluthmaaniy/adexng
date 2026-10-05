# Adex — Personal Shopify portfolio

A personal Shopify portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Inter and the official Remix Icon package. No deployment or server-side form delivery is configured. Direct WhatsApp, email and Instagram contact links are active.

## Run locally

Use Node.js 22 LTS or newer (Node 24 was used for verification).

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

```sh
npm run lint
npm run typecheck
npm run build
node scripts/check-enquiry.mjs
npm start
```

## Edit content

`src/data/site.ts` holds typed identity/contact settings, homepage copy, image paths and four detailed projects and link-only past work. Set contribution and result fields only after owner confirmation and evidence. The enquiry composer validates fields and opens WhatsApp or an email draft. Visitors review and send the message themselves. Fields stay in React state and are never stored, logged or sent to a backend.

- `/` features three selected projects.
- `/work` lists four detailed projects and link-only past work.
- `/work/[slug]` presents a screenshot, story, observed storefront features and live-store/enquiry links.
- Original personal images are retained beside optimized WebP assets in `public/images/`.
- Store covers in `public/projects/` are normalized to 1440 × 990 from real desktop screenshots.
- Internal source observations, access limitations and missing contribution details are in `docs/project-content-review.md`. This file is not served as public UI.
- Faith Forged Designs is link-only past work. Its old internal route redirects permanently to `/work`; its access limitation remains in the internal review.

## Phase boundary

Phase 4 adds a rounded personal portrait, photo favicon assets, a social preview, publication-gated reviews, SEO and launch documentation. The Phase 3 enquiry composer, copy fallback, mobile contact action and FAQs are retained. It excludes server-side enquiry delivery, verified testimonials, payments, analytics and deployment. The approved Inter/green personal design is retained.

The project can be imported into Vercel later using its standard Next.js configuration. Google Fonts are fetched at build time by `next/font`; the build environment needs access to Google Fonts. Metadata uses `https://adex.com.ng`, which does not configure DNS or deploy the site.

## Tooling compatibility

Runtime dependencies use the stable npm releases available on implementation day. TypeScript 6 and ESLint 9 are pinned to the versions supported by Next.js’s bundled lint plugins. ESLint 10 currently breaks the React lint rules, and TypeScript 7 is not yet supported by typescript-eslint. Revisit these development-only pins when the upstream plugins support the newer releases.

## Visual direction

Inter is loaded with `next/font/google`. White is the main background, deep green `#0B3D2E` is the text and footer colour, green `#147D52` is the primary action and accent colour, and pale green `#F1F8F4` is used for supporting surfaces. Primary buttons have white text and deepen to `#0B3D2E` on hover. Footer focus outlines use pale green to remain visible on the dark surface.

## Enquiry behaviour

Limits: name 100, email 254, optional store URL 2,048 and description 2,000 characters. Store URLs default to HTTPS; only HTTP/HTTPS without credentials are accepted. Service choices live in the central config. External app launch does not confirm delivery. Clipboard access requires browser permission and a secure context; failure reveals a selectable enquiry and direct email alternative. Long mailto messages depend on the visitor’s email app; copy is available as an alternative.

## Phase 4 launch handoff

No deployment, Vercel connection or DNS changes have been made. Import `eluthmaaniy/adexng` from GitHub into Vercel when ready.

| Setting | Value |
| --- | --- |
| Framework preset | Next.js |
| Root directory | Repository root (`.`); do not enter `adexng` inside this repository |
| Package manager | npm; committed `package-lock.json` |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output directory | Leave the Next.js preset default; do not set `out` |
| Node.js | 24.x (used locally) |
| Environment variables | No application secrets or required user-configured variables |
| Production branch | `main` |

Google Fonts must be accessible during build for `next/font/google`. `VERCEL_ENV` is supplied automatically by Vercel. Preview/development Vercel builds use noindex/nofollow metadata and headers, and disallow crawling in robots.txt. Production builds allow crawling and use `https://adex.com.ng` canonicals. For a non-Vercel temporary preview, set `VERCEL_ENV=preview` **before building**, and verify the resulting robots metadata/header; don't reuse a production-built artifact for that preview. Deploy preview protection can provide another layer. Do not put a global noindex rule on the production domain.

After importing, add `adex.com.ng` under Project Settings → Domains. Add `www.adex.com.ng` as a redirect to `https://adex.com.ng` to match this project's canonical origin. Follow the exact A/CNAME and any verification records shown by Vercel at that time; do not guess DNS values or remove unrelated mail records. Confirm HTTPS and the www redirect once DNS propagates. Official reference: https://vercel.com/docs/domains/working-with-domains/add-a-domain

Post-deployment checks: homepage/work/four project routes; legacy Faith Forged Designs 308 redirect; mobile menu/FAQ/contact bar; enquiry validation and decoded WhatsApp/email message (do not send test enquiries); clipboard fallback; photo favicon and Apple icon; 1200×630 share image, page metadata, sitemap and production robots. Check a real phone with its software keyboard and 200% browser zoom. Refresh social caches if an older preview remains.

No approved testimonials exist yet. See `docs/reviews.md`; do not publish examples. `/reviews` shows a short noindex empty state until genuine approved content exists. Tests: `node scripts/check-enquiry.mjs` and `node scripts/check-reviews.mjs`.

Local brand assets are committed, so no Python/font tools are required for deployment. To regenerate them separately, use Pillow and an Inter Latin TTF with `python scripts/generate-brand-assets.py /path/to/Inter-Latin.ttf`. The exact source photo and originals are retained. The homepage cover is preloaded; the portrait loads eagerly without a separate preload. Project screenshots use Next Image lazy loading and explicit dimensions. The supplied cover is displayed intact with a contain treatment; its embedded figures are not used as verified results.

## Personal profile navigation

The homepage is a compact profile. Detailed content lives at `/about`, `/services`, `/work`, `/reviews` and `/contact`. Service links accept a validated `service` query parameter for the enquiry composer. Empty Reviews is a short noindex page linked from navigation and excluded from sitemap; this supersedes the earlier hidden/404 review behaviour. See `docs/profile-content-checklist.md` for missing factual details. Existing Vercel import settings remain unchanged. A main push may trigger the connected automatic deployment; no separate deployment is created.

## Profile refinement

Nigeria and English are confirmed profile details. Upwork Academy is listed only as an education/training provider. Certifications and client feedback remain visible with honest empty states. Unconfirmed certificate titles, proposed training and additional skills stay out of public claims; see `docs/profile-content-checklist.md`. Approved reviews automatically replace the empty state, with up to eight on Home and six per page on Reviews.

Copyright receives a server-rendered year, then synchronises with Africa/Lagos time after hydration, once per minute and on window focus. This corrects an older cached static page and updates a tab left open across New Year. Browser-window strips around screenshots are decorative.
