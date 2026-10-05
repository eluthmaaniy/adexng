import type { MetadataRoute } from 'next';
import { site, publishedReviews } from '@/data/site';
export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/work', ...site.projects.map(project => `/work/${project.slug}`), ...(publishedReviews.length ? ['/reviews'] : [])].map(path => ({ url: new URL(path, site.url).href }));
}
