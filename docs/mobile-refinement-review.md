# Mobile, colour and review refinement — 5 October 2026

No repository AGENTS.md was found. The existing Next.js multi-page portfolio, Inter, Remix Icon, photos, project screenshots/frames and enquiry composer were extended in place. The supplied mobile image paths were unavailable; the live production homepage was inspected and its unconditional mobile clearance rule confirmed, then the issue reproduced and tested locally.

## Footer cause and fix
The body always reserved 76px plus the device safe area for the fixed contact bar, including when the bar hid at the footer or on /contact. That white body padding remained after the footer. The bar now synchronises a body visibility attribute; only its visible mobile state reserves its actual 69px height plus safe area. Hidden/desktop states remove the reservation. Footer safe-area padding is inside its existing dark background. No negative margins, overflow hiding or painted spacer was added.

## Identity and colours
The mobile 120px overlapping portrait remains. Name 32px, title 18px, bio 14px, balanced 46px contact buttons and compact secondary links reduce profile spacing. Nigeria/English occupy row one; local time/Online occupy row two. The actual Africa/Lagos clock retains an accessible label. Desktop composition is preserved. Bio: “Shopify design, development and marketing.” Supporting profile/training icons are grey; primary buttons use #95BF47 with #142A18 text, hover #85AB3D. Footer remains #0B3D2E; stars remain yellow.

Calculated WCAG contrast ratios: primary label 7.15:1, hover 5.74:1, disabled label 5.97:1, dark links on white 7.05:1, grey secondary text on white 4.83:1. Dark focus outline contrasts 7.05:1 against white and 3.30:1 against the accent. Secondary text on pale surfaces was darkened after an accessibility check caught the lower contrast.

## Reviews
Added 13 supplied records: nine public and four attribution-pending. Total 17 published and eight pending. Homepage retains the original eight in the same order. /reviews sorts by absolute date descending with an ID tie-breaker and uses six-record pagination (6/6/5). Deduplication checks IDs and client/date/quote identity. Henry and Cameron each remain a single record. Category ratings, countries and original wording remain; no overall score, unsupported aggregate or verification badge was created. Requested other-person name corrections now read Adex, including pending quotes. Renaming does not resolve attribution: pending records stay outside application imports, public HTML, metadata and bundles. Conflicting service labels remain stored but hidden; see reviews.md and review-attribution-pending.json.

## Checks
- npm run lint; npm run typecheck; clean npm run build: passed.
- node scripts/check-enquiry.mjs; node scripts/check-reviews.mjs: passed, including isolated 30/40-record fixtures, homepage selection, identity deduplication and date ordering.
- Local production Chromium: Home, About, Services, Work, Reviews, Contact and four project routes at 320, 375, 390, 768 and 1440px; no horizontal overflow. All mobile route footers reach the document bottom with zero body padding when the bar hides; visible bars reserve 69px (desktop safe-area environment is zero).
- Axe WCAG A/AA checks on ten desktop routes: no violations after refinement. Remix font glyphs, metadata, image proportions, heading/navigation presence, yellow category stars and publication counts checked.
- Enquiry validation, special characters, URL normalisation, 2,000-character descriptions, clipboard success/failure fallback, state retention and correct decoded destinations checked without sending. Mobile contact-page bar hidden. Menu Escape/focus, history, fragment redirects, Faith Forged Designs 308 to /work, unknown 404, sitemap, attribution link and cached-page year rollover checked.
- Reviews pages 1–3 display 6/6/5 records and working pagination. Pending records remain excluded; internal JSON route returns 404.
- Updated mobile profile, actual footer-bottom viewport, mobile reviews and desktop homepage screenshots captured and inspected. Full-page captures suppress the fixed bar and its matching clearance to avoid repeated overlay artefacts; viewport captures use normal live visibility.

These are local Chromium viewport checks, not physical iPhone/Android, Safari, real safe-area or keyboard tests. Those remain post-deployment checks. No hosting or DNS settings changed; pushing main can trigger the existing Vercel workflow.
