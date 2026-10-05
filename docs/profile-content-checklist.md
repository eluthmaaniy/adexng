# Profile facts and content checklist

Confirmed by owner: Nigeria, English, Africa/Lagos timezone, Upwork Academy as an education/training provider. No programme, degree, accreditation, attendance date or completion status is claimed.

## Credentials awaiting confirmation

- Owner-supplied title: “Udemy newbie of the year”. Confirm the exact wording, issuer, and whether this is a course certificate or award. Supply a certificate image or verifiable URL if available. This is not currently published as an official Udemy award.
- Proposed training areas: Shopify theme development, Ecommerce conversion optimisation, Google Ads, Meta Ads. These are proposed, not earned credentials. For each actually earned certificate supply exact title, issuer, confirmation of completion, optional date and verified link. Do not add proposed training to structured data.

`profile.proposedTraining` keeps the proposed areas typed, separate from earned certifications. Certifications stays visible with “Certificate details will be added here.” until confirmed entries are supplied.

## Skills awaiting owner confirmation

Product listing, app integration, landing pages, conversion optimisation, email marketing, Meta Ads, Google Ads and ecommerce marketing are configurable with `confirmed: false`. Confirm that Adex offers each skill before publishing it; do not infer expertise from proposed training. Seven established Shopify/store-experience skills are published. Group descriptions are editable centrally. The marketing group remains an honest focus statement with no unconfirmed skill list.

## Reviews

Supply genuine client display name, stable ID, review text, actual rating out of five, confirmation it is genuine client feedback and explicit publication approval. Optional country, store and service require confirmation. Never infer a country from a client name. See reviews.md. No genuine reviews have been supplied.

## Configuration

Edit `profile` in `src/data/site.ts`. Africa/Lagos is explicitly configured; change the timezone and WAT label together if required. Availability is configurable, not live presence. Education/training and Certifications remain visible when empty. The supplied banner is shown intact; embedded numbers are not used as verified project results.

Reviews is noindex and excluded from sitemap while empty. Faith Forged Designs remains link-only, with its former detail route redirected to Work. Main pushes can trigger the existing Vercel deployment; no hosting changes are needed.
