'use client';

import { usePageTracking, useEngagementTracking } from '@/hooks/useAnalytics';

export function HomeAnalytics() {
  usePageTracking();
  useEngagementTracking();
  return null;
}
