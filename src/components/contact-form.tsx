'use client';
import { site } from '@/data/site';
import { Icon } from './icon';
export function ContactForm() {
  const content = site.contact;
  return <form className="contact-form" onSubmit={event => event.preventDefault()} aria-describedby="form-preview form-disabled">
    <p id="form-preview" className="form-preview"><Icon name="ri-information-line" />{content.preview}</p>
    <div className="form-row"><div className="field"><label htmlFor="name">{content.labels.name}</label><input id="name" name="name" autoComplete="name" placeholder={site.ui.placeholders.name} required /></div><div className="field"><label htmlFor="email">{content.labels.email}</label><input id="email" name="email" type="email" autoComplete="email" placeholder={site.ui.placeholders.email} required /></div></div>
    <div className="field"><label htmlFor="store">{content.labels.store}</label><input id="store" name="store" type="url" placeholder={site.ui.placeholders.store} /></div>
    <div className="field"><label htmlFor="description">{content.labels.description}</label><textarea id="description" name="description" rows={4} placeholder={site.ui.placeholders.description} required /></div>
    <button className="button" type="submit" disabled>{content.button}<Icon name="ri-arrow-right-up-line" /></button><p id="form-disabled" className="disabled-note">{content.disabledNote}</p>
  </form>;
}
