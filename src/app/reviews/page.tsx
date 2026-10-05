import Link from 'next/link';
import { notFound } from 'next/navigation';
import { publishedReviews } from '@/data/site';
import { pageMetadata } from '@/lib/metadata';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Testimonials } from '@/components/testimonials';
export function generateMetadata() { return publishedReviews.length ? pageMetadata('Client reviews | Adex', 'Read genuine client feedback about working with me on Shopify stores.', '/reviews') : {}; }
export default async function ReviewsPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  if (!publishedReviews.length) notFound();
  const query = await searchParams;
  const page = Number(query.page || '1');
  const pages = Math.ceil(publishedReviews.length / 6);
  if (!Number.isInteger(page) || page < 1 || page > pages) notFound();
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main" className="container section reviews-page"><h1>What my clients say</h1><Testimonials reviews={publishedReviews.slice((page - 1) * 6, page * 6)} />{pages > 1 && <nav className="review-pagination" aria-label="Review pages">{page > 1 && <Link className="text-link" href={page === 2 ? '/reviews' : `/reviews?page=${page - 1}`}>Previous reviews</Link>}<span>Page {page} of {pages}</span>{page < pages && <Link className="text-link" href={`/reviews?page=${page + 1}`}>More reviews</Link>}</nav>}</main><Footer /></>;
}
