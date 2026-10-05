import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'remixicon/fonts/remixicon.css';
import './globals.css';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
export const metadata: Metadata = { title: 'Adex | Shopify store expert', description: 'I help store owners build, redesign and improve their Shopify stores. Explore my approach and tell me about your store.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={inter.variable}>{children}</body></html>;
}
