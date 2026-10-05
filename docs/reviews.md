# Owner-supplied client feedback

Twenty-five unique records have been supplied; Greta Fernández, Henry Müller and Cameron Weber are each stored once. Seventeen records are approved for public presentation, without independent verification labels. Eight attribution-pending records remain only in docs/review-attribution-pending.json and are not imported into application code:

- Cameron Weber
- Chloé Walsh
- Saga García
- Charlotte Christensen
- Samuel Neumann
- Edward Harrington
- Paula Wagner
- Alva Russell

The latest direct owner instruction replaced the other-person name in all eight quotes with Adex. That text edit does not resolve the attachment's pending-attribution status. Do not publish these records until attribution is confirmed. Their quotes, names and ratings must stay out of rendered pages, client bundles and metadata.

Public feedback keeps original supplied wording, country, absolute date and repeat-client flag. Only Quality of work and Communication ratings were supplied: show each category separately, never manufacture an overall per-review rating. Performance statements remain quotations, not portfolio results or independently established claims.

Henry Müller's launch quote and Product listing optimization label, and Sienna Berg's TikTok ads quote and Store settings configuration label, do not align clearly. Their supplied service values are retained but not rendered. Pending records also contain service/quote mismatches; preserve the original labels internally and clarify before publication. Do not invent replacements.

## Typed records
Stable id, clientDisplayName, reviewText, categoryRatings (qualityOfWork and communication, each 0–5), date (YYYY-MM-DD), supplied country with countryConfirmed, optional service with serviceConfirmed, optional confirmed store, repeatClient, genuineClientFeedback, approvedForPublication and publicationStatus. Legacy overall rating is supported only when explicitly supplied; the current seventeen records have none. Confirm both genuine feedback and permission before adding records. Duplicate IDs, duplicate client/date/quote identities and attribution-pending records are excluded by the publication filter.

Home preserves the original eight approved records in their existing order. The full collection is sorted by absolute date descending, then stable ID. Reviews shows six per page with accessible pagination and supports more than thirty records without component changes. Only published records count towards its visible total. Reviews is now indexable in production and is in the sitemap. Vercel preview protections remain in force. No aggregate-rating structured data is generated.

## Aggregate pending
The supplied distribution is 5:219, 4:13, 3:5, 2:2, 1:0. It totals 239 and yields approximately 4.88, conflicting with the supplied 4.8 summary. Neither aggregate/count is currently supported by the seventeen public records. Obtain the correct source/summary before enabling profile.aggregateRating. No distribution or verification badge is public.

Run node scripts/check-reviews.mjs. Synthetic fixtures are test-only and never production records.

The nine new public records retain supplied wording and category ratings. Conflicting service labels for Elise Hayes, Brandon Cooper, Finn Harrington, Maja Hayes, James Neumann, Lara Morgan and Ivy García remain internal in the typed record (serviceConfirmed=false). Iris Howard and Edward Ward retain their non-conflicting supplied labels. No new repeat-client flags or overall scores were inferred. All name corrections were requested directly by the owner; attribution approval remains a separate requirement.
