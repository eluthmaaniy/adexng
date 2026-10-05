'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { site } from '@/data/site';
import { Icon } from './icon';
export function Header() {
  const pathname = usePathname();
  const active = (href: string) => pathname === href || (href === "/work" && pathname.startsWith("/work/"));
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
    <Link className="wordmark" href="/" aria-label="Adex homepage">{site.name}<span aria-hidden="true">.</span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{site.navigation.map(link => <Link key={link.href} href={link.href} aria-current={active(link.href) ? "page" : undefined}>{link.label}</Link>)}</nav>
    <Link className="button header-cta" href="/contact">{site.ui.talk} <Icon name="ri-arrow-right-up-line" /></Link>
    <button ref={button} className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}><Icon name={open ? 'ri-close-line' : 'ri-menu-line'} /></button>
    <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>{site.navigation.map(link => <Link key={link.href} href={link.href} aria-current={active(link.href) ? "page" : undefined} onClick={() => setOpen(false)}>{link.label}<Icon name="ri-arrow-right-line" /></Link>)}<Link href="/contact" onClick={() => setOpen(false)}>{site.ui.talk}<Icon name="ri-arrow-right-up-line" /></Link></nav>
  </div></header>;
}
