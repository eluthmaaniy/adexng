import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { isPreview } from '@/lib/metadata';
export default function robots(): MetadataRoute.Robots {
  return isPreview ? { rules: { userAgent: '*', disallow: '/' } } : { rules: { userAgent: '*', allow: '/' }, sitemap: `${site.url}/sitemap.xml` };
}
