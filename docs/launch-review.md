# Phase 4 local launch review — 2026-10-05

No deployment, Vercel account connection or DNS modification was performed. Existing Next.js/TypeScript/npm stack, Inter and official Remix Icon package are retained. No AGENTS.md instructions were found in the workspace.

## Content and identity

Rounded 800×800 optimised hero portrait and circular face favicons derive from the exact supplied Cloudinary photo. Browser ICO contains 16/32/48/64px images; PNG assets include 16/32/48/192/512px and a 180px Apple icon. Transparent PNG corners were checked. Social preview is a local 1200×630 PNG composed in code with Inter, the portrait, name and Shopify Store Expert title.

The supplied cover remains in the repository but is not rendered because its dashboard/earnings artwork conflicts with the personal direction and verified-content rules. Project stories remain unchanged. Faith Forged Designs is an external link only; its legacy path has a permanent Next.js configuration redirect. Access limitations stay in the internal content review.

No genuine, approved review data exists. Public testimonial UI/navigation/sitemap entry are hidden and `/reviews` returns 404. Test-only fixtures checked 30-review capacity, six-per-page pagination, exact ratings (including fractions), permission gating and verified store names. They are never site content.

## Verification

- Lint, TypeScript, enquiry and review tests, production build and whitespace checks passed.
- Headless Chromium browser checks covered homepage, /work and all four project details at 320/375/768/1440px: no horizontal overflow, Inter, rounded cover portrait, canonical/OG/Twitter metadata, contact destinations and mobile bar visibility.
- Enquiry validation focus, missing fields, invalid email, normalised URL, encoded special characters/line breaks, 2,000-character description, state retention, clipboard success and denied-permission manual fallback passed. No enquiries were sent.
- Keyboard menu Escape/focus return, FAQ disclosures, reduced-motion CSS and focused-field bar hiding passed.
- Faith Forged Designs returns 308 with Location /work. Unknown pages and unpublished reviews return 404. Sitemap has exactly six canonical pages, excluding redirects/reviews. Production robots allows crawling.
- A separate preview build returned noindex/nofollow metadata/header and Disallow: / robots. Production build was restored after that check.
- Axe WCAG A/AA checks reported zero violations on homepage at 320px and all six canonical pages at 1440px. This is automated coverage, not a full accessibility certification.
- A 720×450 viewport checked 200%-zoom-equivalent reflow for a 1440×900 desktop viewport. Native browser zoom and a physical phone's software keyboard were not available; repeat those after deployment. Field focus and a shortened viewport were checked locally.

## Local production Lighthouse audit

Recorded in `docs/local-performance-audit.json`. Lighthouse 13.5.0, headless Chromium 153, Next production server on localhost; default simulated mobile 412×823 at 1.75 DPR, 4× CPU slowdown and approximately 1.6Mbps / 150ms RTT. Final recorded run was performed without the browser QA suite running concurrently. These are lab conditions, not live Vercel or real-user measurements.

Accessibility 100; best practices 100; SEO 100. Performance score is unavailable (null): Chromium did not emit screenshot frames for Lighthouse's trace, so Speed Index and related audits failed with NO_SCREENSHOTS. Do not report a fabricated performance score or treat this as a complete performance pass. The trace did report FCP 2.1s, LCP 3.8s, TBT 0ms and CLS 0.000353; these are partial measurements. Remaining audit opportunities include unused framework JS (~27KiB) and CSS (~19KiB, including the required icon stylesheet). Rerun a complete audit after manual deployment.

Next Image reserves intrinsic dimensions and lazy-loads project covers. Only the homepage hero portrait is prioritised. Its source WebP is ~47KiB; store covers retain the verified 1440×990 composition at ~78–149KiB. No new runtime dependencies were added. No custom Vercel JSON configuration is needed.
