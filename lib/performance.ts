/**
 * Performance monitoring utilities for Core Web Vitals
 * Tracks LCP, FID, CLS, FCP, TTFB
 */

export interface WebVitalsMetric {
  id: string;
  name: 'CLS' | 'FCP' | 'FID' | 'LCP' | 'TTFB' | 'INP';
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  navigationType: string;
}

/**
 * Report Web Vitals to analytics
 * Called automatically by Next.js when using reportWebVitals in _app
 */
export function reportWebVitals(metric: WebVitalsMetric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Web Vital:', metric.name, metric.value, metric.rating);
  }

  // Send to analytics in production
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // Send to Vercel Analytics
  if (typeof window !== 'undefined' && window.va) {
    window.va('track', `Web Vital: ${metric.name}`, {
      value: metric.value,
      rating: metric.rating,
    });
  }
}

/**
 * Performance thresholds based on Google's recommendations
 */
export const PERFORMANCE_THRESHOLDS = {
  LCP: {
    good: 2500,
    needsImprovement: 4000,
  },
  FID: {
    good: 100,
    needsImprovement: 300,
  },
  CLS: {
    good: 0.1,
    needsImprovement: 0.25,
  },
  FCP: {
    good: 1800,
    needsImprovement: 3000,
  },
  TTFB: {
    good: 800,
    needsImprovement: 1800,
  },
  INP: {
    good: 200,
    needsImprovement: 500,
  },
};

/**
 * Get performance rating based on metric value
 */
export function getPerformanceRating(
  metricName: keyof typeof PERFORMANCE_THRESHOLDS,
  value: number
): 'good' | 'needs-improvement' | 'poor' {
  const thresholds = PERFORMANCE_THRESHOLDS[metricName];
  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.needsImprovement) return 'needs-improvement';
  return 'poor';
}

/**
 * Performance observer for tracking custom metrics
 */
export function observePerformance() {
  if (typeof window === 'undefined') return;

  // Observe long tasks (> 50ms)
  if ('PerformanceObserver' in window) {
    try {
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            console.warn('⚠️ Long task detected:', entry.duration, 'ms');
          }
        }
      });

      longTaskObserver.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      // Long task API not supported
    }
  }
}

// Type declarations for global analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    va?: (...args: any[]) => void;
  }
}
