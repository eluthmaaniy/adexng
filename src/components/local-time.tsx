"use client";
import { useEffect, useState } from 'react';
import { profile } from '@/data/site';
import { Icon } from './icon';
export function LocalTime() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat('en-GB', { timeZone: profile.timezone, hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date()));
    update(); const timer = window.setInterval(update, 60000);
    return () => window.clearInterval(timer);
  }, []);
  return <span className="profile-detail"><Icon name="ri-time-line" />Local time · WAT{time && <span className="local-time">{time}</span>}</span>;
}
