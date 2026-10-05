import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'remixicon/fonts/remixicon.css';
import './globals.css';
import { site } from '@/data/site';
import { isPreview, pageMetadata } from '@/lib/metadata';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
export const metadata: Metadata = {
  ...pageMetadata('Adex | Personal Shopify Store Expert', 'I’m Adex. I build, redesign and improve Shopify stores. Explore my work and tell me what you’d like to improve about your store.', '/'),
  metadataBase: new URL(site.url),
  robots: { index: !isPreview, follow: !isPreview },
  icons: { icon: [{ url: '/favicon.ico', sizes: '16x16 32x32 48x48 64x64', type: 'image/x-icon' }, { url: '/icons/favicon-16.png', sizes: '16x16', type: 'image/png' }, { url: '/icons/favicon-32.png', sizes: '32x32', type: 'image/png' }, { url: '/icons/favicon-192.png', sizes: '192x192', type: 'image/png' }], apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={inter.variable}>{children}</body></html>;
}
