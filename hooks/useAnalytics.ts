/**
 * React hooks for analytics tracking
 * Provides easy-to-use hooks for tracking page views, events, and user engagement
 */

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import {
  trackPageView,
  setupScrollTracking,
  setupTimeTracking,
  setupOutboundTracking,
} from '@/lib/analytics';

/**
 * Automatically track page views on route changes
 */
export function usePageTracking() {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    // Only track if path actually changed (not on initial mount if same path)
    if (pathname && pathname !== previousPath.current) {
      trackPageView(pathname);
      previousPath.current = pathname;
    }
  }, [pathname]);
}

/**
 * Set up scroll depth tracking for a page
 * Returns cleanup function
 */
export function useScrollTracking() {
  useEffect(() => {
    const cleanup = setupScrollTracking();
    return cleanup;
  }, []);
}

/**
 * Set up time on page tracking
 * Returns cleanup function
 */
export function useTimeTracking() {
  useEffect(() => {
    const cleanup = setupTimeTracking();
    return cleanup;
  }, []);
}

/**
 * Set up automatic outbound link tracking
 * Returns cleanup function
 */
export function useOutboundTracking() {
  useEffect(() => {
    const cleanup = setupOutboundTracking();
    return cleanup;
  }, []);
}

/**
 * Combined hook for comprehensive engagement tracking
 * Sets up scroll depth, time tracking, and outbound link tracking
 */
export function useEngagementTracking() {
  useScrollTracking();
  useTimeTracking();
  useOutboundTracking();
}

/**
 * Hook for tracking when a component mounts (e.g., modal opens)
 */
export function useComponentMount(eventName: string, data?: Record<string, unknown>) {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (!hasTracked.current) {
      hasTracked.current = true;

      // Track with window.gtag directly
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, data);
      }

      if (process.env.NODE_ENV === 'development') {
        console.log('📊 Component Mount:', eventName, data);
      }
    }
  }, [eventName, data]);
}
