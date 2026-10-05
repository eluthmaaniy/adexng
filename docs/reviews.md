# Publishing genuine client reviews

No genuine reviews have been supplied. No review text is published. The homepage section shows a compact honest empty state; the navigation links to a short noindex empty state at `/reviews`, which is excluded from the sitemap.

Add genuine feedback to the typed `testimonials` array in `src/data/site.ts`. Required fields:

- `id`: unique stable identifier.
- `clientDisplayName`: the client's approved public name.
- `reviewText`: their feedback, preserving its meaning. Only light grammar edits.
- `rating`: their actual numeric rating from 0 to 5, including decimal values. Never assign a default rating. Star fills reflect the supplied fraction; the rating also has a readable numeric label.
- `genuineClientFeedback`: true only after the owner confirms the feedback is genuine.
- `approvedForPublication`: true only after publication approval is confirmed.
- Optional `storeName`: render only with `storeNameVerified: true`.

Keep source/permission evidence privately; do not put private client correspondence into the public content bundle. No client portraits are used.

Publishing the first approved review automatically enables the homepage section (maximum eight), the review listing and sitemap entry. The review page shows six reviews per page with normal, keyboard-accessible pagination; 30 reviews occupy five pages. Review pages use `/reviews` as their canonical URL. No aggregate-rating structured data is generated.

Run `node scripts/check-reviews.mjs` and visually check genuine content at mobile and desktop widths before publishing it. Test fixtures exist only in the test script; they are never site data.

Optional country and service labels require `countryConfirmed` and `serviceConfirmed`; never infer them from a name. Store names require `storeNameVerified`. The collection has no fixed record cap. Homepage features the first eight publication-approved records; Reviews paginates six records at a time.
