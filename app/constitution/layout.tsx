import React from 'react';
import './constitution.css';
import './constitution-interior.css';

/**
 * Constitution layout — styling only. The site-wide hero-kit TopNav is
 * mounted for every interior page by GlobalUI in the root layout.
 */
export default function ConstitutionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
