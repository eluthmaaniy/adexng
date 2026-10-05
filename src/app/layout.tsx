import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'remixicon/fonts/remixicon.css';
import './globals.css';
import { site } from '@/data/site';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
export const metadata: Metadata = { metadataBase: new URL(site.url), alternates: { canonical: '/' }, openGraph: { title: 'Adex | Shopify store expert', description: 'I help store owners build, redesign and improve their Shopify stores.', url: '/', siteName: site.name, type: 'website', images: [{ url: site.portrait.src, width: site.portrait.width, height: site.portrait.height, alt: site.portrait.alt }] }, title: 'Adex | Shopify store expert', description: 'I help store owners build, redesign and improve their Shopify stores. Explore my approach and tell me about your store.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={inter.variable}>{children}</body></html>;
}
