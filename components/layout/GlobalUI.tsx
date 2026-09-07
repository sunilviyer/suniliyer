'use client';

import SiteTopNav from '@/components/hero-kit/SiteTopNav';
import { ContactWidget } from '@/components/contact/ContactWidget';

/**
 * GlobalUI — mounts the site-wide hero-kit TopNav and ContactWidget on
 * every page, the homepage included. The homepage used to render its own
 * nav and was excluded here; it now shares this one, so there is a single
 * nav and a single theme toggle across the site.
 */
export function GlobalUI() {
  return (
    <>
      <SiteTopNav />
      <ContactWidget hideButton />
    </>
  );
}
