import type { ReactNode } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { Profile } from './profile';
export function PageShell({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main" className={`container inner-page ${className}`}><Profile />{children}</main><Footer /></>;
}
