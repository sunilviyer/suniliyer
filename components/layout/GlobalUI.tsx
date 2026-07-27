'use client';

import { usePathname } from 'next/navigation';
import SiteTopNav from '@/components/hero-kit/SiteTopNav';
import { ContactWidget } from '@/components/contact/ContactWidget';

/**
 * GlobalUI — mounts the site-wide hero-kit TopNav and ContactWidget on
 * every page. The homepage (and its /hero-preview source) render the
 * hero-kit nav inside their own kit-root, so global chrome stays off there.
 */
export function GlobalUI() {
  const pathname = usePathname();
  if (pathname === '/' || pathname === '/hero-preview') return null;

  return (
    <>
      <SiteTopNav />
      <ContactWidget hideButton />
    </>
  );
}
