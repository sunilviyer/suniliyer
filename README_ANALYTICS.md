# Analytics & Monitoring Guide

## Overview

This document describes the analytics infrastructure implemented for suniliyer.ca, including tracking setup, event definitions, and usage guidelines.

## Analytics Stack

- **Google Analytics 4 (GA4)**: G-XZW8P22P77
- **Vercel Analytics**: Real User Monitoring (RUM)
- **Vercel Speed Insights**: Core Web Vitals tracking
- **Custom Event Tracking**: User interactions and conversions

## Implementation

### Core Files

- `lib/analytics.ts` - Analytics tracking utilities
- `hooks/useAnalytics.ts` - React hooks for analytics
- `lib/performance.ts` - Web Vitals tracking
- `components/CookieBanner.tsx` - Cookie consent management

### Already Configured

✅ Google Analytics installed with cookie consent
✅ Vercel Analytics for RUM
✅ Speed Insights for Core Web Vitals
✅ Performance tracking (LCP, FID, CLS, FCP, TTFB, INP)

## Event Tracking

### Homepage Events

```typescript
// Mode toggle tracking
trackModeToggle(
  'vidya',      // from mode
  'leela',      // to mode
  false         // isAutomatic
);

// Card click tracking
trackCardClick(
  'vidya',                  // current mode
  'builds',                 // card ID
  'Builds'                  // card title
);

// Modal tracking
trackModalOpen('Builds');
trackModalOpen('Credits');

// External link tracking
trackExternalLink('LinkedIn', 'https://linkedin.com/in/sunilviyer');
trackExternalLink('GitHub', 'https://github.com/sunilviyer');
trackExternalLink('Resume', '/downloads/Sunil_Iyer_Resume.pdf');

// Contact widget tracking
trackContactInteraction('Open');
trackContactInteraction('Submit');
trackContactInteraction('Close');
```

### Article/Content Events

```typescript
// Article view tracking
trackArticleView(
  '/history/what-ai-actually-is',
  'What AI Actually Is',
  'History'
);

// Learning path progress
trackLearningPathProgress(
  'History',  // path name
  5,          // current article number
  8           // total articles in path
);

// Constitution tracking
trackConstitutionView('part-1', 'Part I: Rights');

// Portfolio tracking
trackPortfolioView('Gita');
```

### Engagement Events

```typescript
// Scroll depth (automatically tracked at 25%, 50%, 75%, 90%, 100%)
trackScrollDepth(75);

// Time on page (automatically tracked at 30s, 1m, 2m, 5m)
trackTimeOnPage(120);

// Outbound links (automatically tracked)
setupOutboundTracking();
```

## React Hooks Usage

### Basic Page Tracking

```typescript
'use client';

import { usePageTracking } from '@/hooks/useAnalytics';

export default function MyPage() {
  usePageTracking(); // Automatically tracks page views on route change

  return <div>My Page Content</div>;
}
```

### Engagement Tracking

```typescript
'use client';

import { useEngagementTracking } from '@/hooks/useAnalytics';

export default function ArticlePage() {
  // Sets up scroll depth, time tracking, and outbound link tracking
  useEngagementTracking();

  return <article>...</article>;
}
```

### Component Mount Tracking

```typescript
'use client';

import { useComponentMount } from '@/hooks/useAnalytics';

export default function Modal() {
  useComponentMount('Modal Open', { modalName: 'Contact' });

  return <div>...</div>;
}
```

## Manual Event Tracking

### From Components

```typescript
import { trackEvent } from '@/lib/analytics';

function MyButton() {
  const handleClick = () => {
    trackEvent({
      category: 'User Actions',
      action: 'Button Click',
      label: 'Sign Up',
    });
  };

  return <button onClick={handleClick}>Sign Up</button>;
}
```

### From Event Handlers

```typescript
import {
  trackModeToggle,
  trackCardClick,
  trackModalOpen,
  trackExternalLink,
} from '@/lib/analytics';

// Mode toggle
const handleModeToggle = (fromMode, toMode, isAuto) => {
  trackModeToggle(fromMode, toMode, isAuto);
  // ... rest of toggle logic
};

// Card click
const handleCardClick = (mode, cardId, cardTitle) => {
  trackCardClick(mode, cardId, cardTitle);
  router.push(`/${cardId}`);
};

// Modal open
const openModal = (modalName) => {
  trackModalOpen(modalName);
  setShowModal(true);
};

// External link
<a
  href="https://linkedin.com"
  onClick={() => trackExternalLink('LinkedIn', 'https://linkedin.com')}
>
  LinkedIn
</a>
```

## Google Search Console Setup

### Step 1: Verify Site Ownership

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Enter `https://www.suniliyer.ca`
4. Choose verification method: **HTML tag**
5. Add the meta tag to `app/layout.tsx`:

```tsx
<head>
  <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
</head>
```

6. Click "Verify"

### Step 2: Submit Sitemap

1. In Google Search Console, go to "Sitemaps"
2. Enter sitemap URL: `https://www.suniliyer.ca/sitemap.xml`
3. Click "Submit"

### Step 3: Monitor Performance

- **Performance**: Track clicks, impressions, CTR, average position
- **Coverage**: Monitor indexed pages and errors
- **Core Web Vitals**: Track LCP, FID, CLS from real users
- **Mobile Usability**: Check mobile-friendliness issues

## Analytics Dashboard

### Google Analytics 4 Dashboard

Access at: https://analytics.google.com

**Key Reports:**
- **Real-time**: Current active users and events
- **Engagement**: Page views, events, conversions
- **User Acquisition**: Traffic sources and channels
- **Events**: Custom event tracking
- **Conversions**: Goal completions

**Custom Events to Monitor:**
- Homepage Mode Toggles
- Card Clicks
- Modal Opens
- Contact Form Submissions
- Resume Downloads
- External Link Clicks
- Scroll Depth
- Time on Page

### Vercel Analytics Dashboard

Access at: https://vercel.com/dashboard/analytics

**Metrics Available:**
- Real User Monitoring (RUM)
- Core Web Vitals (LCP, FID, CLS)
- Geographic distribution
- Device/browser breakdown
- Error tracking

## Event Naming Conventions

### Categories

- `Homepage` - Homepage-specific interactions
- `Navigation` - Site navigation events
- `Engagement` - User engagement metrics
- `Content` - Article and content views
- `Outbound Links` - External link clicks
- `Contact` - Contact form interactions
- `Learning Paths` - Learning path progression
- `Constitution` - Constitution page views
- `Portfolio` - Portfolio project views

### Actions

- Clear, verb-based names: `Click`, `View`, `Submit`, `Download`, `Toggle`, `Open`, `Close`
- Include context when needed: `Auto Mode Toggle`, `Manual Mode Toggle`

### Labels

- Descriptive strings with relevant context
- Format: `context: value` (e.g., `vidya: Builds`, `History: What AI Actually Is`)

## Privacy & Compliance

### Cookie Consent

- Cookie banner implemented in `components/CookieBanner.tsx`
- Analytics disabled by default until user accepts
- Respects user privacy preferences
- IP anonymization enabled: `anonymize_ip: true`

### GDPR Compliance

- Users can decline analytics cookies
- localStorage stores consent preference
- Consent required before tracking begins

## Testing Analytics

### Development

All analytics events log to console in development:

```
📊 Analytics Event: {
  category: 'Homepage',
  action: 'Mode Toggle',
  label: 'vidya → leela',
  value: undefined
}
```

### Production

1. Use [Google Tag Assistant](https://tagassistant.google.com/) to verify GA4 tags
2. Check Real-time reports in Google Analytics
3. Monitor Vercel Analytics dashboard
4. Use browser DevTools → Network tab to see analytics requests

## Performance Budget

### Analytics Impact

- **Google Analytics**: ~45KB (gzipped)
- **Vercel Analytics**: ~8KB (gzipped)
- **Total Analytics Overhead**: < 60KB
- **Performance Impact**: Minimal (loaded after page interactive)

### Best Practices

✅ Analytics scripts loaded with `strategy="afterInteractive"`
✅ Events batched to reduce requests
✅ Non-blocking implementation
✅ Cookie consent before tracking
✅ IP anonymization enabled

## Troubleshooting

### Events Not Showing in GA4

1. Check cookie consent is granted
2. Verify GA4 tracking ID: G-XZW8P22P77
3. Check browser console for errors
4. Use Google Tag Assistant to debug
5. Wait 24-48 hours for data to appear in reports

### Real-time Events Not Appearing

1. Check Real-time view in GA4 dashboard
2. Verify `window.gtag` is defined in browser console
3. Check Network tab for analytics requests
4. Ensure ad blockers are disabled for testing

### Missing Page Views

1. Verify `usePageTracking()` hook is used in layout or pages
2. Check router navigation is working
3. Verify pathname changes trigger useEffect

## Future Enhancements

### Short-term
- [ ] Add heatmap tracking (Hotjar/Microsoft Clarity)
- [ ] Implement A/B testing framework
- [ ] Add error boundary tracking
- [ ] Track search queries (if search implemented)

### Medium-term
- [ ] Custom conversion funnels
- [ ] User journey mapping
- [ ] Session replay for debugging
- [ ] Advanced segmentation

### Long-term
- [ ] Predictive analytics
- [ ] ML-based user behavior analysis
- [ ] Custom dashboards
- [ ] Automated reporting

## Support

For analytics questions or issues:
- **Documentation**: This file
- **Code Examples**: `lib/analytics.ts`, `hooks/useAnalytics.ts`
- **Google Analytics Help**: https://support.google.com/analytics
- **Vercel Analytics Docs**: https://vercel.com/docs/analytics

---

**Last Updated**: April 17, 2026
**Version**: 1.0
**Next Review**: July 2026
