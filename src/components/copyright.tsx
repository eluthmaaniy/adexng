"use client";
import { useEffect, useState } from 'react';
export function Copyright({ initialYear }: { initialYear: string }) {
  const [year, setYear] = useState(initialYear);
  useEffect(() => {
    const update = () => setYear(new Intl.DateTimeFormat('en', { timeZone: 'Africa/Lagos', year: 'numeric' }).format(new Date()));
    // Synchronise on hydration and while the page is open across a year boundary.
    update(); const timer = window.setInterval(update, 60000);
    window.addEventListener('focus', update);
    return () => { window.clearInterval(timer); window.removeEventListener('focus', update); };
  }, []);
  return <p>© {year} Adex. All rights reserved.</p>;
}
