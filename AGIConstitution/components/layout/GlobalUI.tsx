'use client';

import TopNav from './TopNav';
import { ContactWidget } from '@/AGIConstitution/components/contact/ContactWidget';

/**
 * GlobalUI — mounts the TopNav and ContactWidget on every page.
 * Theme toggle and contact button are integrated into the TopNav component.
 */
export function GlobalUI() {
  return (
    <>
      <TopNav />
      <ContactWidget hideButton />
    </>
  );
}
