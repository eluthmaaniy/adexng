# Adex — Phase 1

A personal Shopify portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Inter and the official Remix Icon package. No deployment or enquiry delivery is configured.

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
npm start
```

## Edit content

`src/data/site.ts` contains typed homepage content, navigation, projects, portrait, social links and a verified-testimonial structure.

- Add Adex’s approved photo to `public/portraits/` and set `site.portrait` with its path and descriptive alt text.
- Add approved screenshots to `public/projects/`, then replace each placeholder’s name, service, summary and screenshot. Set `placeholder: false` only once the content is real.
- Leave `detailUrl: null` until a real project page or destination exists. No link is rendered without a URL.
- Add only real social profiles to `site.socials`. Empty social lists are not rendered.
- About copy is provisional and needs Adex’s approval.
- Testimonials are prepared as typed data but intentionally not rendered in Phase 1.
- `contact.destination` is reserved for a later phase. Setting it alone does not enable form delivery. The preview prevents submissions and never shows a success message.

## Phase boundary

Phase 1 includes the responsive homepage, accessible mobile navigation, portrait and project placeholders, services, introduction, process and preview form. It excludes backend delivery, real project pages, testimonials, payments, analytics and deployment.

The project can be imported into Vercel later using its standard Next.js configuration. Google Fonts are fetched at build time by `next/font`; the build environment needs access to Google Fonts.

## Tooling compatibility

Runtime dependencies use the stable npm releases available on implementation day. TypeScript 6 and ESLint 9 are pinned to the versions supported by Next.js’s bundled lint plugins. ESLint 10 currently breaks the React lint rules, and TypeScript 7 is not yet supported by typescript-eslint. Revisit these development-only pins when the upstream plugins support the newer releases.

## Visual direction

Inter is loaded with `next/font/google`. White is the main background, deep green `#0B3D2E` is the text and footer colour, green `#147D52` is the primary action and accent colour, and pale green `#F1F8F4` is used for supporting surfaces. Primary buttons have white text and deepen to `#0B3D2E` on hover. Footer focus outlines use pale green to remain visible on the dark surface.
