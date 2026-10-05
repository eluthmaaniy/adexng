# Adex — Phase 3

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

Phase 3 adds a browser-only enquiry composer, copy feedback and manual fallback, a mobile contact action, FAQs and refined service/process copy. It excludes server-side enquiry delivery, verified testimonials, payments, analytics and deployment. The approved Inter/green personal design is retained.

The project can be imported into Vercel later using its standard Next.js configuration. Google Fonts are fetched at build time by `next/font`; the build environment needs access to Google Fonts. Metadata uses `https://adex.com.ng`, which does not configure DNS or deploy the site.

## Tooling compatibility

Runtime dependencies use the stable npm releases available on implementation day. TypeScript 6 and ESLint 9 are pinned to the versions supported by Next.js’s bundled lint plugins. ESLint 10 currently breaks the React lint rules, and TypeScript 7 is not yet supported by typescript-eslint. Revisit these development-only pins when the upstream plugins support the newer releases.

## Visual direction

Inter is loaded with `next/font/google`. White is the main background, deep green `#0B3D2E` is the text and footer colour, green `#147D52` is the primary action and accent colour, and pale green `#F1F8F4` is used for supporting surfaces. Primary buttons have white text and deepen to `#0B3D2E` on hover. Footer focus outlines use pale green to remain visible on the dark surface.

## Enquiry behaviour

Limits: name 100, email 254, optional store URL 2,048 and description 2,000 characters. Store URLs default to HTTPS; only HTTP/HTTPS without credentials are accepted. Service choices live in the central config. External app launch does not confirm delivery. Clipboard access requires browser permission and a secure context; failure reveals a selectable enquiry and direct email alternative. Long mailto messages depend on the visitor’s email app; copy is available as an alternative.
