# Personal profile content checklist

The structural correction uses only the established Shopify service scope. Confirm before adding:

- Location (city/country, with permission to publish). No city inferred from phone number.
- Languages and any proficiency labels.
- Education: title, institution, optional period and verified link.
- Certifications: exact qualification, issuer, optional date and verified link.
- Any additional biography facts or expertise.
- Genuine reviews and publication approval, as documented in reviews.md.

Edit `profile` in `src/data/site.ts`. Empty credential arrays and unset location/languages stay hidden. Africa/Lagos is the explicitly requested timezone; change `profile.timezone` if necessary, and update the visible WAT label in LocalTime when changing zones. Availability is the requested configurable “Open to project enquiries”, not live presence.

The supplied banner is displayed intact as personal brand artwork. Its embedded numbers are not used as project results or structured-data claims.

## Routes
Home, About, Services, Work, Reviews and Contact have distinct routes. Empty Reviews is visible in navigation, returns 200, is noindex and is excluded from sitemap. Approved reviews enable its publication metadata and pagination. Faith Forged Designs remains link-only and its former detail route redirects to Work. Old home section bookmarks redirect client-side to the corresponding route.
