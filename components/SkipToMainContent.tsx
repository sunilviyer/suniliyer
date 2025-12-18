'use client';

import { useCallback, useRef } from 'react';

/**
 * SkipToMainContent Component
 *
 * Provides a "Skip to main content" link as the first focusable element
 * on every page, allowing keyboard-only users to bypass navigation and
 * jump directly to the main content area.
 *
 * Required by WCAG 2.4.1 (Bypass Blocks - Level A) and NFR-ACCESS-5.
 *
 * Features:
 * - First tab stop on page load
 * - Visually hidden until focused (slides on-screen with focus)
 * - Smooth scroll to main content on activation
 * - 2px focus indicator per UX-16
 * - <16ms keyboard response per NFR-PERF-4
 * - Works in all themes (light/dark)
 *
 * @returns Skip to main content link element
 */
export default function SkipToMainContent() {
  const liveRegionRef = useRef<HTMLDivElement>(null);

  /**
   * Handle skip link activation (Enter or click)
   *
   * Moves focus to <main> element and scrolls it into view smoothly.
   * Uses requestAnimationFrame for <16ms response time per NFR-PERF-4.
   * Announces to screen readers via ARIA live region.
   *
   * @param event - Mouse click event from anchor element
   */
  const handleSkipClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    requestAnimationFrame(() => {
      const mainElement = document.getElementById('main');
      if (mainElement) {
        // Move focus to main element
        mainElement.focus();

        // Scroll main element into view with smooth animation
        mainElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Announce to screen readers
        if (liveRegionRef.current) {
          liveRegionRef.current.textContent = 'Skipped to main content';
        }
      } else if (process.env.NODE_ENV === 'development') {
        console.warn('SkipToMainContent: Main element with id="main" not found');
      }
    });
  }, []);

  return (
    <>
      <a
        href="#main"
        className="skip-to-main"
        onClick={handleSkipClick}
      >
        Skip to main content
      </a>
      {/* ARIA live region for screen reader announcements */}
      <div
        ref={liveRegionRef}
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      />
    </>
  );
}
