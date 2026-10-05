import { site } from '@/data/site';
export type Enquiry = { name: string; email: string; store: string; service: string; description: string };
export type EnquiryErrors = Partial<Record<keyof Enquiry, string>>;
export function normaliseStoreUrl(value: string): string {
  const raw = value.trim();
  if (!raw) return '';
  if (/\s/.test(raw)) throw new Error('Enter a store URL without spaces.');
  const url = new URL(/^[a-z][a-z\d+.-]*:/i.test(raw) ? raw : `https://${raw}`);
  if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password || !url.hostname.includes('.')) throw new Error('Enter a valid http or https store URL.');
  return url.href;
}
export function validateEnquiry(values: Enquiry): { errors: EnquiryErrors; values: Enquiry } {
  const clean = Object.fromEntries(Object.entries(values).map(([key, value]) => [key, value.trim()])) as Enquiry;
  const errors: EnquiryErrors = {};
  for (const key of ['name', 'email', 'description'] as const) {
    if (!clean[key]) errors[key] = `Please enter your ${key === 'description' ? 'project description' : key}.`;
    else if (clean[key].length > site.contact.limits[key]) errors[key] = `Use ${site.contact.limits[key]} characters or fewer.`;
  }
  if (clean.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email)) errors.email = 'Enter a valid email address.';
  if (!site.contact.services.includes(clean.service)) errors.service = 'Please choose a service.';
  if (clean.store.length > site.contact.limits.store) errors.store = `Use ${site.contact.limits.store} characters or fewer.`;
  else { try { clean.store = normaliseStoreUrl(clean.store); } catch { errors.store = 'Enter a valid store URL, with or without https://.'; } }
  return { errors, values: clean };
}
export function composeEnquiry(values: Enquiry) {
  const body = `Hi Adex, I’d like to discuss my Shopify store.\n\nName: ${values.name}\nEmail: ${values.email}\nStore: ${values.store || 'Not provided'}\nService needed: ${values.service}\n\nProject description:\n${values.description}`;
  return { body, whatsapp: `${site.identity.whatsappBaseUrl}?text=${encodeURIComponent(body)}`, email: `${site.identity.emailUrl}?subject=${encodeURIComponent(`Shopify project enquiry — ${values.name}`)}&body=${encodeURIComponent(body)}` };
}
