# Third-Party Scripts Audit
**Story:** 8.1 - Task 6: Optimize Third-Party Scripts
**Date:** 2025-12-17

## Current State: Zero Third-Party Scripts ✅

**Lighthouse Baseline:** 0 KB third-party transfer

The AIDefence site is completely free of third-party scripts, providing optimal performance, privacy, and security.

## Verification

### Code Scan Results

**No third-party scripts found in:**
- ✅ Analytics platforms (Google Analytics, Plausible, Matomo, etc.)
- ✅ Social media widgets (Facebook, Twitter, LinkedIn embeds)
- ✅ Advertising networks (Google Ads, etc.)
- ✅ Tag managers (Google Tag Manager, etc.)
- ✅ Chat widgets (Intercom, Drift, etc.)
- ✅ CDN-loaded libraries (jQuery, Bootstrap, etc.)
- ✅ External fonts (Google Fonts, Adobe Fonts) - using system fonts
- ✅ Video players (YouTube embeds, Vimeo, etc.)
- ✅ Maps (Google Maps, Mapbox, etc.)
- ✅ Payment processors (Stripe, PayPal widgets, etc.)
- ✅ A/B testing tools (Optimizely, VWO, etc.)
- ✅ Error tracking (Sentry, Bugsnag, etc.)
- ✅ Session replay (Hotjar, FullStory, etc.)

### HTML Output Verification

**Scanned production HTML for:**
```bash
<script src="https://...">
<link href="https://...">
<iframe src="https://...">
```

**Result:** Zero external resources loaded.

## Benefits

### Performance ✅

1. **Zero Network Overhead:**
   - No external script downloads
   - No third-party DNS lookups
   - No third-party SSL handshakes
   - No third-party server latency

2. **Faster Page Loads:**
   - LCP not delayed by external scripts
   - TTI not blocked by third-party JavaScript
   - FCP not delayed by external fonts

3. **Reduced Bundle Size:**
   - No analytics libraries (~50 KB typical)
   - No social widgets (~100 KB typical)
   - No tag managers (~30 KB typical)

### Privacy ✅

1. **No User Tracking:**
   - No cookies set by third parties
   - No user behavior tracking
   - No cross-site tracking
   - No fingerprinting scripts

2. **GDPR Compliance:**
   - No consent banners needed
   - No cookie policies required
   - No data processing agreements with third parties
   - No user data shared with external services

3. **User Trust:**
   - Transparent, privacy-first approach
   - No hidden tracking
   - No data monetization

### Security ✅

1. **Reduced Attack Surface:**
   - No third-party script vulnerabilities
   - No supply chain attacks from compromised CDNs
   - No XSS via third-party widgets

2. **Content Security Policy (CSP) Friendly:**
   - Can use strict CSP without third-party allowlist
   - No need for `unsafe-inline` or `unsafe-eval`
   - Reduced CSP bypass risk

3. **No Dependency on External Services:**
   - Site remains functional if third-party services are down
   - No single point of failure

### Reliability ✅

1. **No Third-Party Downtime:**
   - Site loads even if CDNs are down
   - No broken widgets or missing resources
   - Consistent user experience

2. **Predictable Performance:**
   - No variability from third-party server performance
   - No spikes in load time due to external issues

## Guidelines for Future Third-Party Integration

**If third-party scripts must be added in the future, follow these guidelines:**

### Evaluation Criteria

**Before adding any third-party script, ask:**

1. **Is it necessary?**
   - Can the functionality be implemented in-house?
   - Is the value worth the performance/privacy cost?

2. **What is the performance impact?**
   - Script size (target: <50 KB gzipped)
   - Load time impact on LCP/TTI
   - Network requests generated

3. **What data does it collect?**
   - User tracking/cookies
   - GDPR/CCPA compliance requirements
   - Privacy policy updates needed

4. **What are the security risks?**
   - Script integrity (SRI)
   - CSP compatibility
   - Vendor security practices

### Implementation Best Practices

**If a third-party script is deemed necessary:**

1. **Use next/script with Performance Optimization**

   ```typescript
   import Script from 'next/script';

   // Load after page is interactive (recommended for most third-party scripts)
   <Script
     src="https://example.com/script.js"
     strategy="lazyOnload"
     onLoad={() => console.log('Script loaded')}
   />

   // Or load after hydration for interactive widgets
   <Script
     src="https://example.com/widget.js"
     strategy="afterInteractive"
   />
   ```

2. **Loading Strategies**

   | Strategy | When to Use | Impact on LCP/TTI |
   |----------|-------------|-------------------|
   | `beforeInteractive` | Critical scripts only (payment processing) | HIGH - delays interactivity |
   | `afterInteractive` | Interactive widgets (chat, analytics) | MEDIUM - loads after hydration |
   | `lazyOnload` | Non-critical scripts (social sharing) | LOW - loads after page idle |
   | `worker` | Heavy scripts (analytics processing) | LOWEST - runs in Web Worker |

3. **Implement Subresource Integrity (SRI)**

   ```typescript
   <Script
     src="https://example.com/script.js"
     integrity="sha384-..."
     crossOrigin="anonymous"
   />
   ```

4. **Use Consent Management**

   ```typescript
   // Only load analytics after user consent
   const [hasConsent, setHasConsent] = useState(false);

   {hasConsent && (
     <Script src="https://analytics.example.com/script.js" strategy="lazyOnload" />
   )}
   ```

5. **Monitor Performance Impact**

   - Run Lighthouse before and after adding script
   - Ensure Performance score remains ≥90
   - Verify LCP remains <2.5s

6. **Update CSP Headers**

   ```typescript
   // next.config.ts
   async headers() {
     return [
       {
         source: '/(.*)',
         headers: [
           {
             key: 'Content-Security-Policy',
             value: "script-src 'self' https://trusted-domain.com; ..."
           }
         ]
       }
     ]
   }
   ```

### Common Third-Party Scripts to Consider

**Analytics (if needed):**
- ❌ Google Analytics (heavy, privacy concerns)
- ✅ Plausible Analytics (lightweight, privacy-first, ~1 KB)
- ✅ Self-hosted Matomo (privacy-first, GDPR compliant)

**Recommendation:** If analytics are needed, use Plausible with `strategy="lazyOnload"`

**Error Tracking (if needed):**
- ✅ Sentry (useful for production debugging, ~30 KB)

**Recommendation:** Use Sentry with `strategy="afterInteractive"` and error sampling

**Social Sharing:**
- ❌ Facebook SDK (heavy, privacy concerns, ~100 KB)
- ❌ Twitter widgets (medium, privacy concerns, ~50 KB)
- ✅ Custom share buttons using Web Share API (0 KB, native)

**Recommendation:** Use Web Share API for mobile, simple links for desktop

```typescript
// Custom social sharing (0 KB)
const handleShare = async () => {
  if (navigator.share) {
    await navigator.share({
      title: 'Article Title',
      url: window.location.href,
    });
  } else {
    // Fallback: copy link or open share dialog
  }
};
```

## Monitoring

### Lighthouse Audits

**Run before adding any third-party script:**

```bash
npx lighthouse http://localhost:3000 --only-categories=performance