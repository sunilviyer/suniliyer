'use client';

import { useRef } from 'react';
import { Fraunces, Archivo } from 'next/font/google';
import TopNav from '@/components/hero-kit/TopNav';
import { MENU_GROUPS } from '@/components/hero-kit/menu-groups';
import '@/app/hero-kit.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400', '500'],
  variable: '--font-fraunces',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  variable: '--font-archivo',
  display: 'swap',
});

/**
 * Site-wide hero-kit TopNav, extracted from the constitution layout.
 * The kit-navonly wrapper supplies the kit-root design tokens the fixed
 * nav needs without painting the homepage background on interior pages.
 */
export default function SiteTopNav() {
  const mountedAt = useRef(Date.now());

  const handleConnectSubmit = async (fd: FormData) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: fd.get('name'),
        email: fd.get('email'),
        subject: fd.get('subject'),
        message: fd.get('message'),
        _timestamp: String(mountedAt.current),
      }),
    });
    if (!res.ok) throw new Error('contact failed');
  };

  return (
    <div className={`kit-root kit-navonly ${fraunces.variable} ${archivo.variable}`}>
      <TopNav menuGroups={MENU_GROUPS} onConnectSubmit={handleConnectSubmit} />
    </div>
  );
}
