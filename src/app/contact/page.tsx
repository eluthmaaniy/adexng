import { PageShell } from '@/components/page-shell';
import { ContactForm } from '@/components/contact-form';
import { ContactLinks } from '@/components/contact-links';
import { site } from '@/data/site';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('Contact me | Adex', 'Tell me about your Shopify store. Prepare an enquiry for WhatsApp or email, or contact me directly.', '/contact');
export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string | string[] }> }) {
  const query = await searchParams;
  const service = typeof query.service === 'string' && site.contact.services.includes(query.service) ? query.service : '';
  return <PageShell className="contact-page"><section id="contact" className="contact-grid"><div className="contact-copy"><h1>{site.contact.title}</h1><p>{site.contact.description}</p><ContactLinks /></div><ContactForm initialService={service} /></section></PageShell>;
}
