'use client';

import { usePathname } from 'next/navigation';
import SiteTopNav from '@/components/hero-kit/SiteTopNav';
import { ContactWidget } from '@/components/contact/ContactWidget';

/**
 * GlobalUI — mounts the site-wide hero-kit TopNav and ContactWidget on
 * every page. The homepage renders the hero-kit nav inside its own
 * kit-root, so global chrome stays off there.
 */
export function GlobalUI() {
  const pathname = usePathname();
  if (pathname === '/') return null;

  return (
    <>
      <SiteTopNav />
      <ContactWidget hideButton />
    </>
  );
}
