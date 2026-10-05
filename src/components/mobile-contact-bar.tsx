'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Icon } from './icon';
export function MobileContactBar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    function update() {
      const visible = (selector: string) => { const rect = document.querySelector(selector)?.getBoundingClientRect(); return !!rect && rect.top < window.innerHeight && rect.bottom > 0; };
      const editing = document.activeElement?.matches('input, textarea, select');
      const keyboard = !!window.visualViewport && window.visualViewport.height < window.innerHeight * .8;
      const hide = window.innerWidth >= 768 || pathname === '/contact' || visible('#contact') || visible('.footer') || !!editing || keyboard;
      document.body.toggleAttribute('data-contact-bar-visible', !hide);
      setHidden(hide);
    }
    update();
    const observer = new IntersectionObserver(update);
    for (const selector of ['#contact', '.footer']) { const element = document.querySelector(selector); if (element) observer.observe(element); }
    window.addEventListener('scroll', update, { passive: true }); window.addEventListener('resize', update);
    document.addEventListener('focusin', update); document.addEventListener('focusout', update); window.visualViewport?.addEventListener('resize', update);
    return () => { document.body.removeAttribute("data-contact-bar-visible"); observer.disconnect(); window.removeEventListener('scroll', update); window.removeEventListener('resize', update); document.removeEventListener('focusin', update); document.removeEventListener('focusout', update); window.visualViewport?.removeEventListener('resize', update); };
  }, [pathname]);
  return <div className="mobile-contact-bar" hidden={hidden}><Link className="button" href="/contact">Discuss your store<Icon name="ri-arrow-right-line" /></Link></div>;
}
