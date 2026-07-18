'use client';

import { usePathname } from 'next/navigation';
import TopNav from './TopNav';
import { ContactWidget } from '@/components/contact/ContactWidget';

/**
 * GlobalUI — mounts the TopNav and ContactWidget on every page.
 * Theme toggle and contact button are integrated into the TopNav component.
 * The homepage (hero redesign) ships its own nav, so global chrome stays off there.
 */
export function GlobalUI() {
  const pathname = usePathname();
  // The homepage and the Constitution pages ship the hero-kit nav themselves.
  if (pathname === '/' || pathname === '/hero-preview' || pathname?.startsWith('/constitution')) return null;

  return (
    <>
      <TopNav />
      <ContactWidget hideButton />
    </>
  );
}
