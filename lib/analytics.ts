/**
 * Analytics tracking utilities for user interactions and conversions
 * Integrates with Google Analytics (GA4) and Vercel Analytics
 */

// Type definitions for custom events
export interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
}

export interface ConversionEvent {
  conversionId: string;
  value?: number;
  currency?: string;
  transactionId?: string;
}

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    va?: (command: string, eventName: string, data?: Record<string, unknown>) => void;
  }
}

/**
 * Track a custom event to Google Analytics and Vercel Analytics
 */
export function trackEvent({
  category,
  action,
  label,
  value,
  nonInteraction = false,
}: AnalyticsEvent): void {
  // Only track in production or when explicitly enabled
  if (typeof window === 'undefined') return;

  // Google Analytics (GA4)
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
      non_interaction: nonInteraction,
    });
  }

  // Vercel Analytics
  if (window.va) {
    window.va('track', `${category}: ${action}`, {
      label,
      value,
    });
  }

  // Console log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Analytics Event:', {
      category,
      action,
      label,
      value,
    });
  }
}

/**
 * Track a page view
 */
export function trackPageView(url: string, title?: string): void {
  if (typeof window === 'undefined') return;

  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: url,
      page_title: title || document.title,
    });
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('📄 Page View:', url, title);
  }
}

/**
 * Track a conversion event
 */
export function trackConversion({
  conversionId,
  value,
  currency = 'USD',
  transactionId,
}: ConversionEvent): void {
  if (typeof window === 'undefined') return;

  if (window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value,
      currency,
      transaction_id: transactionId,
    });
  }

  if (window.va) {
    window.va('track', 'Conversion', {
      conversionId,
      value,
    });
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('💰 Conversion:', conversionId, value);
  }
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(percentage: number): void {
  trackEvent({
    category: 'Engagement',
    action: 'Scroll Depth',
    label: `${percentage}%`,
    value: percentage,
    nonInteraction: true,
  });
}

/**
 * Track time on page
 */
export function trackTimeOnPage(seconds: number): void {
  const minutes = Math.floor(seconds / 60);
  const bucket = minutes < 1 ? '0-1' : minutes < 3 ? '1-3' : minutes < 5 ? '3-5' : '5+';

  trackEvent({
    category: 'Engagement',
    action: 'Time on Page',
    label: `${bucket} minutes`,
    value: seconds,
    nonInteraction: true,
  });
}

// ==========================================
// HOMEPAGE SPECIFIC TRACKING
// ==========================================

/**
 * Track Vidya/Leela mode toggle
 */
export function trackModeToggle(
  fromMode: 'vidya' | 'leela',
  toMode: 'vidya' | 'leela',
  isAutomatic: boolean
): void {
  trackEvent({
    category: 'Homepage',
    action: isAutomatic ? 'Auto Mode Toggle' : 'Manual Mode Toggle',
    label: `${fromMode} → ${toMode}`,
  });
}

/**
 * Track bento card clicks
 */
export function trackCardClick(
  mode: 'vidya' | 'leela',
  cardId: string,
  cardTitle: string
): void {
  trackEvent({
    category: 'Navigation',
    action: 'Card Click',
    label: `${mode}: ${cardTitle}`,
  });
}

/**
 * Track modal opens
 */
export function trackModalOpen(modalName: string): void {
  trackEvent({
    category: 'Engagement',
    action: 'Modal Open',
    label: modalName,
  });
}

/**
 * Track external link clicks
 */
export function trackExternalLink(
  linkType: 'LinkedIn' | 'GitHub' | 'Resume' | 'Project' | 'Other',
  destination: string
): void {
  trackEvent({
    category: 'Outbound Links',
    action: `${linkType} Click`,
    label: destination,
  });
}

/**
 * Track contact widget interactions
 */
export function trackContactInteraction(action: 'Open' | 'Submit' | 'Close'): void {
  trackEvent({
    category: 'Contact',
    action: `Contact Widget ${action}`,
  });
}

/**
 * Track article views
 */
export function trackArticleView(
  articlePath: string,
  articleTitle: string,
  category: string
): void {
  trackEvent({
    category: 'Content',
    action: 'Article View',
    label: `${category}: ${articleTitle}`,
  });
}

/**
 * Track learning path progression
 */
export function trackLearningPathProgress(
  pathName: string,
  articleNumber: number,
  totalArticles: number
): void {
  const progressPercent = Math.round((articleNumber / totalArticles) * 100);

  trackEvent({
    category: 'Learning Paths',
    action: 'Progress',
    label: pathName,
    value: progressPercent,
  });
}

/**
 * Track constitution page views
 */
export function trackConstitutionView(partId: string, partTitle: string): void {
  trackEvent({
    category: 'Constitution',
    action: 'Part View',
    label: `${partId}: ${partTitle}`,
  });
}

/**
 * Track portfolio project views
 */
export function trackPortfolioView(projectName: string): void {
  trackEvent({
    category: 'Portfolio',
    action: 'Project View',
    label: projectName,
  });
}

// ==========================================
// ENGAGEMENT TRACKING UTILITIES
// ==========================================

/**
 * Set up scroll depth tracking
 */
export function setupScrollTracking(): () => void {
  if (typeof window === 'undefined') return () => {};

  const thresholds = [25, 50, 75, 90, 100];
  const trackedThresholds = new Set<number>();

  const handleScroll = () => {
    const scrollPercent =
      ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100;

    thresholds.forEach((threshold) => {
      if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
        trackedThresholds.add(threshold);
        trackScrollDepth(threshold);
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => window.removeEventListener('scroll', handleScroll);
}

/**
 * Set up time on page tracking
 */
export function setupTimeTracking(): () => void {
  if (typeof window === 'undefined') return () => {};

  const startTime = Date.now();
  const intervals = [30, 60, 120, 300]; // 30s, 1m, 2m, 5m
  const trackedIntervals = new Set<number>();

  const checkInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);

    intervals.forEach((interval) => {
      if (elapsed >= interval && !trackedIntervals.has(interval)) {
        trackedIntervals.add(interval);
        trackTimeOnPage(interval);
      }
    });
  }, 5000); // Check every 5 seconds

  return () => clearInterval(checkInterval);
}

/**
 * Track outbound link clicks automatically
 */
export function setupOutboundTracking(): () => void {
  if (typeof window === 'undefined') return () => {};

  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a');

    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

    // Track external links
    if (href.startsWith('http') && !href.includes(window.location.hostname)) {
      const linkText = link.textContent?.trim() || href;
      trackExternalLink('Other', `${linkText} (${href})`);
    }

    // Track downloads
    if (link.hasAttribute('download')) {
      trackExternalLink('Resume', href);
    }
  };

  document.addEventListener('click', handleClick);

  return () => document.removeEventListener('click', handleClick);
}

// ==========================================
// PERFORMANCE TRACKING
// ==========================================

/**
 * Track Core Web Vitals (already handled in lib/performance.ts)
 * This is a placeholder for consistency
 */
export { reportWebVitals } from './performance';
