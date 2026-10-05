import ts from 'typescript';
import fs from 'node:fs';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const nodeRequire = createRequire(import.meta.url);
function load(path, imports = {}) {
  const loaded = { exports: {} };
  const code = ts.transpileModule(fs.readFileSync(path, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX } }).outputText;
  new Function('require', 'module', 'exports', code)(name => imports[name] || nodeRequire(name), loaded, loaded.exports);
  return loaded.exports;
}
const data = load('src/data/site.ts');
const { Icon } = load('src/components/icon.tsx');
const { Testimonials } = load('src/components/testimonials.tsx', { './icon': { Icon } });
const { renderToStaticMarkup } = nodeRequire('react-dom/server');
// Synthetic fixtures for tests only. Never added to published site content.
const fixture = { id: 'test', clientDisplayName: 'Test fixture', reviewText: 'Test-only feedback & characters.', rating: 3.5, genuineClientFeedback: true, approvedForPublication: true, storeName: 'Unconfirmed test store' };
assert.equal(data.publishedReviews.length, 8);
assert.equal(data.publishedReviews.filter(r => r.clientDisplayName === 'Greta Fernández').length, 1);
const pending = JSON.parse(fs.readFileSync('docs/review-attribution-pending.json','utf8'));
assert.equal(pending.length,4);
assert.equal(data.getPublishedReviews(pending).length,0);
assert.ok(pending.every(r => !r.reviewText.includes('Sum'+'ar') && r.reviewText.includes('Adex')));
assert.equal(data.profile.aggregateRating.status,'pending');
assert.equal(data.profile.aggregateRating.value,null);
const publicHtml = renderToStaticMarkup(Testimonials({ reviews: data.publishedReviews }));
assert.equal((publicHtml.match(/class="review"/g)||[]).length,8);
assert.equal((publicHtml.match(/Quality of work:/g)||[]).length,8);
assert.equal((publicHtml.match(/Communication:/g)||[]).length,8);
assert.ok(publicHtml.includes('Quality of work: 4 out of 5 stars'));
assert.ok(publicHtml.includes('dateTime="2026-04-16"') || publicHtml.includes('datetime="2026-04-16"'));
for(const review of pending) assert.ok(!publicHtml.includes(review.clientDisplayName));
assert.ok(data.publishedReviews.every(r => r.rating === undefined));
for (const name of ['Henry Müller','Sienna Berg']) { const review = data.publishedReviews.find(r=>r.clientDisplayName===name); assert.ok(!renderToStaticMarkup(Testimonials({reviews:[review]})).includes(review.service)); }
assert.equal(data.profile.skillGroups.flatMap(g=>g.items).length,16);
assert.equal(data.profile.certifications.length,5);
assert.equal(data.profile.education[0].period,'Graduated 2023');
assert.equal(data.site.navigation.some(link => link.href === '/reviews'), true);
assert.equal(data.getPublishedReviews([{ ...fixture, approvedForPublication: false }]).length, 0);
assert.equal(data.getPublishedReviews([{ ...fixture, genuineClientFeedback: false }]).length, 0);
assert.equal(data.getPublishedReviews([{ ...fixture, rating: 6 }]).length, 0);
assert.equal(data.getPublishedReviews([{ ...fixture, rating: 3.3 }]).length, 1);
const thirty = data.getPublishedReviews(Array.from({ length: 30 }, (_, id) => ({ ...fixture, id: String(id) })));
assert.equal(thirty.length, 30);
assert.equal(Math.ceil(thirty.length / 6), 5);
const html = renderToStaticMarkup(Testimonials({ reviews: [fixture] }));
assert.ok(html.includes('Rated 3.5 out of 5 stars'));
assert.equal((html.match(/ri-star-fill/g) || []).length, 5);
assert.ok(html.includes('width:50%'));
assert.ok(html.includes('width:0%'));
assert.equal((html.match(/ri-star-line/g) || []).length, 5);
assert.ok(!html.includes(fixture.storeName));
assert.ok(renderToStaticMarkup(Testimonials({ reviews: [{ ...fixture, storeNameVerified: true }] })).includes(fixture.storeName));
console.log('PASS review publication gating, 30-review capacity, actual ratings, accessible labels and verified store names');
const React = nodeRequire('react');
const reviewsModule = load('src/app/reviews/page.tsx', {
  '@/data/site': { publishedReviews: thirty },
  '@/lib/metadata': { pageMetadata: (title, description, path) => ({ title, description, path }) },
  '@/components/profile': { Profile: () => null },
  '@/components/header': { Header: () => null },
  '@/components/footer': { Footer: () => null },
  '@/components/testimonials': { Testimonials },
  'next/navigation': { notFound: () => { throw new Error('404'); } },
  'next/link': { __esModule: true, default: props => React.createElement('a', props) },
});
const secondPage = renderToStaticMarkup(await reviewsModule.default({ searchParams: Promise.resolve({ page: '2' }) }));
assert.equal((secondPage.match(/class="review"/g) || []).length, 6);
assert.ok(secondPage.includes('Page 2 of 5'));
assert.ok(secondPage.includes('href="/reviews?page=3"'));
assert.ok(secondPage.includes('Previous reviews'));
await assert.rejects(reviewsModule.default({ searchParams: Promise.resolve({ page: '6' }) }), /404/);
console.log('PASS review route pagination with isolated fixtures (no published test data)');
const forty = data.getPublishedReviews(Array.from({ length: 40 }, (_, id) => ({ ...fixture, id: `fixture-${id}`, rating: id % 6, reviewText: id % 2 ? 'Short test-only quote.' : 'Longer test-only text for layout verification. '.repeat(8) })));
assert.equal(forty.length, 40);
const unconfirmed = { ...fixture, country: 'Test country', service: 'Test service' };
const hidden = renderToStaticMarkup(Testimonials({ reviews: [unconfirmed] }));
assert.ok(!hidden.includes('Test country') && !hidden.includes('Test service'));
const confirmed = renderToStaticMarkup(Testimonials({ reviews: [{ ...unconfirmed, countryConfirmed: true, serviceConfirmed: true }] }));
assert.ok(confirmed.includes('Test country') && confirmed.includes('Test service'));
const homeModule = load('src/app/page.tsx', {
  '@/data/site': { ...data, publishedReviews: forty },
  '@/components/header': { Header: () => null }, '@/components/footer': { Footer: () => null },
  '@/components/profile': { Profile: () => null, Skills: () => null, Credentials: () => null, ContactInvitation: () => null },
  '@/components/legacy-fragments': { LegacyFragments: () => null },
  '@/components/project-preview': { ProjectPreview: () => null },
  '@/components/testimonials': { Testimonials }, '@/components/icon': { Icon },
  'next/link': { __esModule: true, default: props => React.createElement('a', props) },
});
const homeHtml = renderToStaticMarkup(homeModule.default());
assert.equal((homeHtml.match(/class="review"/g) || []).length, 8);
assert.ok(homeHtml.includes('40 published reviews'));
assert.equal(data.profile.aboutPreview.length, 2);
assert.equal(data.profile.aboutCta, 'Have a store in mind? Let’s discuss it.');
if (process.env.REVIEW_QA_OUTPUT) fs.writeFileSync(process.env.REVIEW_QA_OUTPUT, JSON.stringify({ eight: homeHtml, thirty: renderToStaticMarkup(Testimonials({ reviews: forty.slice(0,30) })) }));
console.log('PASS eight actual homepage previews, 40-record capacity, optional fact gating and biography length');

const categoryFixture = { ...fixture, rating: undefined, categoryRatings: { qualityOfWork: 4, communication: 5 } };
assert.equal(data.getPublishedReviews([categoryFixture]).length,1);
assert.equal(data.getPublishedReviews([{...categoryFixture,categoryRatings:{qualityOfWork:6,communication:5}}]).length,0);
assert.equal(data.getPublishedReviews([{...categoryFixture,publicationStatus:'pending-attribution'}]).length,0);
assert.equal(data.getPublishedReviews([fixture,fixture]).length,1);
console.log('PASS eight supplied records, four internal pending records, category ratings, deduplication and confirmed profile facts');
