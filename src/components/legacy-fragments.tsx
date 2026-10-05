"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
export function LegacyFragments() {
  const router = useRouter();
  useEffect(() => {
    const redirect = () => { const routes: Record<string, string> = { '#about': '/about', '#services': '/services', '#contact': '/contact', '#work': '/work', '#reviews': '/reviews' }; const target = routes[window.location.hash]; if (target) router.replace(target); };
    redirect(); window.addEventListener('hashchange', redirect);
    return () => window.removeEventListener('hashchange', redirect);
  }, [router]);
  return null;
}
