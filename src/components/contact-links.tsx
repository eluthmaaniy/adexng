import { site } from '@/data/site';
import { Icon } from './icon';
export function ContactLinks() {
  return <div className="contact-links"><a className="button" href={site.identity.whatsappUrl}><Icon name="ri-whatsapp-line" />Let’s talk on WhatsApp</a><a className="text-link" href={site.identity.emailUrl}><Icon name="ri-mail-line" />Email: {site.identity.email}</a><a className="text-link" href={site.identity.instagramUrl} target="_blank" rel="noopener noreferrer"><Icon name="ri-instagram-line" />Instagram: {site.identity.instagramHandle}<span className="sr-only"> (opens in a new tab)</span></a></div>;
}
