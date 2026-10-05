import Link from 'next/link';
import { site } from '@/data/site';
import { Icon } from './icon';
export function Footer() {
  return <footer className="footer"><div><Link className="wordmark" href="/">{site.name}<span aria-hidden="true">.</span></Link><p>{site.footer.specialism}</p></div><nav aria-label="Footer navigation">{site.navigation.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav><nav className="footer-contact" aria-label="Contact links"><a href={site.identity.whatsappUrl}><Icon name="ri-whatsapp-line" />WhatsApp</a><a href={site.identity.emailUrl}><Icon name="ri-mail-line" />Email</a><a href={site.identity.instagramUrl} target="_blank" rel="noopener noreferrer"><Icon name="ri-instagram-line" />Instagram<span className="sr-only"> (opens in a new tab)</span></a></nav></footer>;
}
