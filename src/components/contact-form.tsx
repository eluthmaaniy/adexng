'use client';
import { useRef, useState, type FormEvent } from 'react';
import { site } from '@/data/site';
import { composeEnquiry, validateEnquiry, type Enquiry, type EnquiryErrors } from '@/lib/enquiry';
import { Icon } from './icon';
export function ContactForm() {
  const [values, setValues] = useState<Enquiry>({ name: '', email: '', store: '', service: '', description: '' });
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [feedback, setFeedback] = useState('');
  const [copyFallback, setCopyFallback] = useState('');
  const form = useRef<HTMLFormElement>(null);
  const content = site.contact;
  function update(key: keyof Enquiry, value: string) {
    setValues(current => ({ ...current, [key]: value }));
    setErrors(current => ({ ...current, [key]: undefined }));
    setFeedback(''); setCopyFallback('');
  }
  async function act(action: 'whatsapp' | 'email' | 'copy') {
    const result = validateEnquiry(values);
    if (form.current?.elements.namedItem('email') instanceof HTMLInputElement && (form.current.elements.namedItem('email') as HTMLInputElement).validity.typeMismatch) result.errors.email = 'Enter a valid email address.';
    setErrors(result.errors); setFeedback(''); setCopyFallback('');
    const first = (['name', 'email', 'store', 'service', 'description'] as const).find(key => result.errors[key]);
    if (first) { (form.current?.elements.namedItem(first) as HTMLElement)?.focus(); return; }
    setValues(result.values);
    const message = composeEnquiry(result.values);
    if (action === 'copy') {
      try { await navigator.clipboard.writeText(message.body); setFeedback('Enquiry copied. Paste it into WhatsApp or your email app.'); }
      catch { setCopyFallback(message.body); setFeedback('Copy didn’t work. Select and copy the enquiry below, or use the direct email link.'); }
    } else if (action === 'whatsapp') {
      window.open(message.whatsapp, '_blank', 'noopener,noreferrer');
    } else { window.location.href = message.email; }
  }
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); void act('whatsapp'); }
  const attributes = (key: keyof Enquiry) => ({ id: key, name: key, value: values[key], 'aria-invalid': !!errors[key], 'aria-describedby': errors[key] ? `${key}-error` : undefined, onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => update(key, event.target.value) });
  const error = (key: keyof Enquiry) => errors[key] && <p className="field-error" id={`${key}-error`}>{errors[key]}</p>;
  return <form ref={form} className="contact-form" onSubmit={submit} noValidate aria-describedby="enquiry-review">
    <div className="form-row"><div className="field"><label htmlFor="name">{content.labels.name} (required)</label><input {...attributes('name')} autoComplete="name" maxLength={content.limits.name} required />{error('name')}</div><div className="field"><label htmlFor="email">{content.labels.email} (required)</label><input {...attributes('email')} type="email" autoComplete="email" maxLength={content.limits.email} required />{error('email')}</div></div>
    <div className="field"><label htmlFor="store">{content.labels.store}</label><input {...attributes('store')} type="text" inputMode="url" autoComplete="url" maxLength={content.limits.store} placeholder={site.ui.placeholders.store} />{error('store')}</div>
    <div className="field"><label htmlFor="service">{content.labels.service} (required)</label><select {...attributes('service')} required><option value="">Choose a service</option>{content.services.map(service => <option key={service} value={service}>{service}</option>)}</select>{error('service')}</div>
    <div className="field"><label htmlFor="description">{content.labels.description} (required)</label><textarea {...attributes('description')} rows={5} maxLength={content.limits.description} placeholder={site.ui.placeholders.description} required />{error('description')}<p className="field-note">Up to {content.limits.description.toLocaleString()} characters.</p></div>
    <p id="enquiry-review" className="field-note">{content.reviewNote}</p><div className="enquiry-actions"><button className="button" type="submit"><Icon name="ri-whatsapp-line" />Continue on WhatsApp</button><button className="button button-secondary" type="button" onClick={() => void act('email')}><Icon name="ri-mail-line" />Open email draft</button></div>
    <div className="enquiry-alternatives"><button className="text-link" type="button" onClick={() => void act('copy')}><Icon name="ri-file-copy-line" />Copy enquiry</button><a className="text-link" href={site.identity.emailUrl}>Email me directly: {site.identity.email}</a></div><p role="status" className="copy-feedback">{feedback}</p>
    {copyFallback && <div className="field"><label htmlFor="copy-enquiry">Your enquiry — select and copy</label><textarea id="copy-enquiry" readOnly value={copyFallback} rows={8} onFocus={event => event.target.select()} /></div>}
  </form>;
}
