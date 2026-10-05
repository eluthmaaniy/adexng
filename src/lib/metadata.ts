import type { Metadata } from 'next';
import { site } from '@/data/site';
export const isPreview = !!process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production';
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const image = { url: site.socialPreview.src, width: 1200, height: 630, alt: site.socialPreview.alt };
  return { title, description, alternates: { canonical: path }, openGraph: { title, description, url: path, siteName: site.name, type: 'website', images: [image] }, twitter: { card: 'summary_large_image', title, description, images: [{ url: image.url, alt: image.alt }] } };
}
