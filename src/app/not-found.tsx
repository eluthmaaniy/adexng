import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
export default function NotFound() {
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main" className="section container not-found"><p className="eyebrow">Page not found</p><h1>Let’s get you back to my portfolio.</h1><p>I couldn’t find that page. You can explore my work or tell me about your store.</p><div className="hero-actions"><Link className="button" href="/">Back to homepage</Link><Link className="text-link" href="/work">Explore my work</Link></div></main><Footer /></>;
}
