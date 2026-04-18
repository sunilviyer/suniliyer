# Performance Optimization Documentation

## Overview

This document details all performance optimizations implemented for suniliyer.ca to achieve excellent Core Web Vitals scores and optimal user experience.

## Core Web Vitals Targets

Based on Google's recommendations (75th percentile):

- **LCP (Largest Contentful Paint)**: < 2.5s (Good), < 4.0s (Needs Improvement)
- **FID (First Input Delay)**: < 100ms (Good), < 300ms (Needs Improvement)
- **CLS (Cumulative Layout Shift)**: < 0.1 (Good), < 0.25 (Needs Improvement)
- **FCP (First Contentful Paint)**: < 1.8s (Good), < 3.0s (Needs Improvement)
- **TTFB (Time to First Byte)**: < 800ms (Good), < 1.8s (Needs Improvement)
- **INP (Interaction to Next Paint)**: < 200ms (Good), < 500ms (Needs Improvement)

## Implemented Optimizations

### 1. Next.js Configuration (`next.config.ts`)

#### Image Optimization
```typescript
images: {
  formats: ['image/avif', 'image/webp'], // Modern formats with better compression
  minimumCacheTTL: 31536000, // 1 year cache for images
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
}
```

**Benefits:**
- AVIF format offers 30-50% better compression than WebP
- Automatic responsive image generation
- Long-term caching reduces repeat load times

#### Compression & Security
```typescript
compress: true, // Enable gzip compression
poweredByHeader: false, // Remove X-Powered-By header for security
```

#### Package Import Optimization
```typescript
experimental: {
  optimizePackageImports: [
    'react-markdown',
    'remark-gfm',
    'rehype-raw',
  ],
}
```

**Benefits:**
- Tree-shaking for better bundle size
- Faster initial page loads

#### Console Removal in Production
```typescript
compiler: {
  removeConsole: process.env.NODE_ENV === 'production' ? {
    exclude: ['error', 'warn'],
  } : false,
}
```

**Benefits:**
- Smaller bundle size
- Better performance
- Security (no exposed debug info)

### 2. Font Optimization (`app/layout.tsx`)

#### Font Display Swap
```typescript
const funnelDisplay = Funnel_Display({
  display: 'swap', // Show fallback font immediately, swap when custom font loads
});
```

**Benefits:**
- Eliminates FOIT (Flash of Invisible Text)
- Improves FCP (First Contentful Paint)
- Better perceived performance

#### Preconnect to Google Fonts
- Already optimized via next/font/google
- Automatic subsetting
- Self-hosted font files

### 3. Resource Hints

#### Preconnect
```html
<link rel="preconnect" href="https://www.googletagmanager.com" />
<link rel="preconnect" href="https://challenges.cloudflare.com" />
<link rel="preconnect" href="https://unpkg.com" />
```

**Benefits:**
- Early DNS resolution
- Early TCP connection
- Faster third-party resource loading

#### DNS Prefetch
```html
<link rel="dns-prefetch" href="https://www.google-analytics.com" />
<link rel="dns-prefetch" href="https://vercel.live" />
```

**Benefits:**
- DNS resolution in background
- Lower latency for analytics

### 4. Viewport Optimization

```typescript
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};
```

**Benefits:**
- Proper mobile scaling
- Theme color for browser UI
- Accessibility (allows zoom)

### 5. Script Loading Strategy

#### Google Analytics
```tsx
<Script strategy="afterInteractive" />
```

#### Cloudflare Turnstile
```tsx
<Script strategy="lazyOnload" />
```

#### Phosphor Icons
```tsx
<Script strategy="beforeInteractive" />
```

**Benefits:**
- Non-blocking critical render path
- Optimized script execution order
- Better FCP and LCP scores

### 6. Image Strategy

- **Current:** 267 WebP images, 58 PNG/JPG
- **Next.js Image Component:** Automatic optimization, lazy loading, responsive sizing
- **Manual WebP Conversion:** Pre-optimized for faster delivery

### 7. Analytics & Monitoring

#### Vercel Analytics
```tsx
<Analytics />
```

#### Vercel Speed Insights
```tsx
<SpeedInsights />
```

#### Custom Web Vitals Reporting (`lib/performance.ts`)
- Automatic tracking of CLS, FCP, FID, LCP, TTFB, INP
- Google Analytics integration
- Development console logging
- Long task detection (> 50ms)

## Performance Budget

### JavaScript Budget
- **Initial Bundle:** < 200KB (gzipped)
- **Total JavaScript:** < 500KB (gzipped)
- **Third-party Scripts:** < 100KB (gzipped)

### Image Budget
- **Hero Images:** < 150KB (WebP/AVIF)
- **Thumbnails:** < 30KB (WebP/AVIF)
- **Icons:** < 5KB (SVG preferred)

### Request Budget
- **Initial Page Load:** < 50 requests
- **Total Requests:** < 100 requests

## Monitoring & Testing

### Tools
1. **Lighthouse** (Chrome DevTools)
   - Performance: Target 90+
   - Accessibility: Target 95+
   - Best Practices: Target 95+
   - SEO: Target 100

2. **WebPageTest**
   - Speed Index: < 3.0s
   - Time to Interactive: < 3.8s

3. **Google PageSpeed Insights**
   - Mobile: Target 90+
   - Desktop: Target 95+

4. **Vercel Analytics Dashboard**
   - Real User Monitoring (RUM)
   - Core Web Vitals tracking
   - Geographic performance breakdown

### Testing Checklist
- [ ] Run Lighthouse on homepage
- [ ] Run Lighthouse on article pages
- [ ] Run Lighthouse on portfolio pages
- [ ] Test on 3G network throttling
- [ ] Test on mobile devices
- [ ] Verify Core Web Vitals in Chrome UX Report
- [ ] Check bundle size with `npm run build`
- [ ] Validate image optimization

## Future Optimizations

### Short-term (Q2 2026)
- [ ] Convert remaining PNG/JPG to WebP/AVIF
- [ ] Implement critical CSS inlining
- [ ] Add service worker for offline support
- [ ] Optimize constitution markdown parsing

### Medium-term (Q3 2026)
- [ ] Implement route-based code splitting
- [ ] Add progressive image loading (blur-up)
- [ ] Optimize database queries with caching
- [ ] Add CDN for static assets

### Long-term (Q4 2026)
- [ ] Implement HTTP/3 (QUIC)
- [ ] Add prefetching for likely navigation
- [ ] Optimize for WebAssembly where beneficial
- [ ] Implement edge caching strategies

## Deployment Process

1. **Development**
   ```bash
   npm run dev
   # Monitor performance in DevTools
   ```

2. **Build Analysis**
   ```bash
   npm run build
   # Check bundle sizes in output
   ```

3. **Production Deploy**
   ```bash
   git push origin main
   # Vercel auto-deploys
   ```

4. **Post-Deploy Validation**
   - Check Vercel Analytics for Core Web Vitals
   - Run Lighthouse on production URL
   - Monitor error logs

## Performance Metrics Tracking

All performance metrics are automatically sent to:
- **Google Analytics** (via gtag)
- **Vercel Analytics** (via va)
- **Console** (development only)

View metrics:
- Vercel Dashboard: https://vercel.com/analytics
- Google Analytics: Events → Web Vitals category

## Contact

For performance questions or issues:
- **Developer:** Sunil Iyer
- **Website:** suniliyer.ca
- **Repository:** github.com/sunilviyer/suniliyer

---

**Last Updated:** April 17, 2026
**Version:** 1.0
**Next Review:** July 2026
