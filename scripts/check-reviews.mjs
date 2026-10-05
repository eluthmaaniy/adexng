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
assert.equal(data.publishedReviews.length, 0);
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
