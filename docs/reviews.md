# Owner-supplied client feedback

Twelve unique records were supplied; Greta Fernández is stored once. Eight records are approved for public presentation, without independent verification labels. Four attribution-pending records remain only in docs/review-attribution-pending.json and are not imported into application code:

- Cameron Weber
- Chloé Walsh
- Saga García
- Charlotte Christensen

The latest direct owner instruction replaced the other-person name in all four quotes with Adex. That text edit does not resolve the attachment's pending-attribution status. Do not publish these records until attribution is confirmed. Their quotes, names and ratings must stay out of rendered pages, client bundles and metadata.

Public feedback keeps original supplied wording, country, absolute date and repeat-client flag. Only Quality of work and Communication ratings were supplied: show each category separately, never manufacture an overall per-review rating. Performance statements remain quotations, not portfolio results or independently established claims.

Henry Müller's launch quote and Product listing optimization label, and Sienna Berg's TikTok ads quote and Store settings configuration label, do not align clearly. Their supplied service values are retained but not rendered. Pending records also contain service/quote mismatches; preserve the original labels internally and clarify before publication. Do not invent replacements.

## Typed records
Stable id, clientDisplayName, reviewText, categoryRatings (qualityOfWork and communication, each 0–5), date (YYYY-MM-DD), supplied country with countryConfirmed, optional service with serviceConfirmed, optional confirmed store, repeatClient, genuineClientFeedback, approvedForPublication and publicationStatus. Legacy overall rating is supported only when explicitly supplied; the current eight records have none. Confirm both genuine feedback and permission before adding records. Duplicate IDs and attribution-pending records are excluded by the publication filter.

Home shows up to eight approved records. Reviews shows six per page with accessible pagination and supports more than thirty records without component changes. Only published records count towards its visible total. Reviews is now indexable in production and is in the sitemap. Vercel preview protections remain in force. No aggregate-rating structured data is generated.

## Aggregate pending
The supplied distribution is 5:219, 4:13, 3:5, 2:2, 1:0. It totals 239 and yields approximately 4.88, conflicting with the supplied 4.8 summary. Neither aggregate/count is currently supported by the eight public records. Obtain the correct source/summary before enabling profile.aggregateRating. No distribution or verification badge is public.

Run node scripts/check-reviews.mjs. Synthetic fixtures are test-only and never production records.
