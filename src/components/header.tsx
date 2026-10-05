'use client';
import { useEffect, useRef, useState } from 'react';
import { site } from '@/data/site';
import { Icon } from './icon';
export function Header() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) { setOpen(false); button.current?.focus(); }
    };
    const media = window.matchMedia('(min-width: 768px)');
    const onResize = () => { if (media.matches) setOpen(false); };
    document.addEventListener('keydown', onKey);
    media.addEventListener('change', onResize);
    return () => { document.removeEventListener('keydown', onKey); media.removeEventListener('change', onResize); };
  }, [open]);
  return <header className="header"><div className="container header-inner">
    <a className="wordmark" href="#top" aria-label="Adex homepage">{site.name}<span aria-hidden="true">.</span></a>
    <nav className="desktop-nav" aria-label="Main navigation">{site.navigation.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
    <a className="button header-cta" href="#contact">{site.ui.talk} <Icon name="ri-arrow-right-up-line" /></a>
    <button ref={button} className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}><Icon name={open ? 'ri-close-line' : 'ri-menu-line'} /></button>
    <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>{site.navigation.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<Icon name="ri-arrow-right-line" /></a>)}<a href="#contact" onClick={() => setOpen(false)}>{site.ui.talk}<Icon name="ri-arrow-right-up-line" /></a></nav>
  </div></header>;
}
