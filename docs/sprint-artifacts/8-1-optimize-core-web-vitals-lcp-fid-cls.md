# Story 8.1: Optimize Core Web Vitals (LCP, FID, CLS)

**Epic:** 8 - Performance & Quality Assurance
**Story:** 8.1
**Status:** ready-for-dev

---

## Story

As a **user**,
I want **fast page loads and smooth interactions**,
So that **I have a responsive, frustration-free experience**.

---

## Acceptance Criteria

**Given** the site is fully built
**When** I measure Core Web Vitals
**Then** Largest Contentful Paint (LCP) is <2.5 seconds on 3G network
**And** First Input Delay (FID) is <100 milliseconds (or INP ≤200ms per 2025 standards)
**And** Cumulative Layout Shift (CLS) is <0.1
**And** Time to Interactive (TTI) is <3.5 seconds
**And** Next.js Image component is used for all images (lazy loading, optimization)
**And** Fonts are preloaded and use `font-display: swap`
**And** CSS is minified and critical CSS is inlined
**And** JavaScript bundle is code-split and tree-shaken

---

## Tasks / Subtasks

### Task 1: Audit Current Performance Baseline ✓
**Estimated:** 30 min

- [ ] Run Lighthouse audit on homepage (/)
- [ ] Run Lighthouse audit on articles page (/articles)
- [ ] Document current Core Web Vitals scores:
  - [ ] LCP (Largest Contentful Paint)
  - [ ] INP (Interaction to Next Paint) - replaced FID in March 2024
  - [ ] CLS (Cumulative Layout Shift)
  - [ ] TTI (Time to Interactive)
- [ ] Identify LCP elements on each page
- [ ] Document current bundle sizes

**Expected Baseline:**
- Build successful (zero errors from Epic 7)
- Static generation working (9 routes)
- No images currently in codebase
- Text-based application

### Task 2: Optimize Font Loading (next/font Migration)
**Estimated:** 45 min

- [ ] Audit current font loading strategy
- [ ] Migrate to next/font if using system fonts
- [ ] Configure font-display: swap (default in next/font)
- [ ] Enable automatic preloading (default in next/font)
- [ ] Verify fonts load without CLS
- [ ] Test font rendering in both dark and light modes

**Implementation:**
```typescript
// app/layout.tsx
import { Inter } from 'next/font/google'
// OR for system fonts:
import localFont from 'next/font/local'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',  // Default: prevents FOIT (flash of invisible text)
  preload: true,    // Default: preloads font at build time
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      {children}
    </html>
  )
}
```

**Success Criteria:**
- Fonts load without blocking render
- No FOIT or FOUT (flash of unstyled text)
- CLS score not impacted by font loading
- Fonts cached at build time

### Task 3: Optimize Images with Next.js Image Component
**Estimated:** 60 min

- [ ] Audit all image usage in codebase
- [ ] Replace any <img> tags with next/image
- [ ] Set priority={true} for LCP images (hero images)
- [ ] Specify width and height for all images (prevents CLS)
- [ ] Configure lazy loading for below-fold images (default)
- [ ] Add placeholder="blur" for progressive loading
- [ ] Test image loading on slow 3G network

**Implementation:**
```typescript
// For LCP images (hero, above-fold)
import Image from 'next/image'

<Image
  src="/images/hero.png"
  alt="Description"
  width={1200}
  height={600}
  priority={true}  // Preloads for LCP optimization
  placeholder="blur"
  blurDataURL="data:image/..." // Optional blur placeholder
/>

// For below-fold images (lazy loaded by default)
<Image
  src="/images/article.png"
  alt="Description"
  width={800}
  height={400}
  loading="lazy"  // Default behavior
/>
```

**Current State Note:**
- Epic 7 audit found NO images in codebase
- Application is text-based
- Future images will need this optimization

**Success Criteria:**
- All images use next/image component
- Hero images preload with priority={true}
- Below-fold images lazy load
- No layout shifts from image loading (width/height specified)
- WebP format served automatically

### Task 4: Optimize CSS Delivery
**Estimated:** 45 min

- [ ] Audit current CSS loading strategy
- [ ] Ensure critical CSS is inlined (Next.js default)
- [ ] Verify CSS is minified in production build
- [ ] Remove unused CSS (Tailwind purge working)
- [ ] Optimize app/globals.css size
- [ ] Test CSS render-blocking behavior

**Implementation:**
```javascript
// next.config.js
module.exports = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Tailwind CSS purging is automatic with content paths
}

// tailwind.config.ts
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Unused classes automatically removed
}
```

**Success Criteria:**
- Critical CSS inlined in <head>
- CSS minified in production
- No unused Tailwind classes in bundle
- No render-blocking CSS

### Task 5: Optimize JavaScript Bundle
**Estimated:** 60 min

- [ ] Analyze current bundle size (npx @next/bundle-analyzer)
- [ ] Verify automatic code splitting working
- [ ] Ensure dynamic imports for heavy components
- [ ] Tree-shake unused dependencies
- [ ] Verify Turbopack production build
- [ ] Test bundle size <200KB gzipped (target)

**Implementation:**
```typescript
// Dynamic imports for heavy components
import dynamic from 'next/dynamic'

const ArticleExpanded = dynamic(() => import('@/components/articles/ArticleExpanded'), {
  loading: () => <div>Loading...</div>,
  ssr: false, // Optional: disable SSR if not needed
})

// Code splitting happens automatically per page in App Router
```

**Bundle Analysis:**
```bash
# Install bundle analyzer
npm install --save-dev @next/bundle-analyzer

# Update next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // ... other config
})

# Run analysis
ANALYZE=true npm run build
```

**Success Criteria:**
- Total bundle <200KB gzipped
- No duplicate dependencies
- Heavy components dynamically imported
- Code splitting per route working

### Task 6: Optimize Third-Party Scripts
**Estimated:** 30 min

- [ ] Audit all third-party scripts
- [ ] Use next/script for async loading
- [ ] Defer non-critical scripts
- [ ] Verify no render-blocking scripts
- [ ] Test script loading impact on INP

**Implementation:**
```typescript
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}

        {/* Analytics or other third-party scripts */}
        <Script
          src="https://example.com/script.js"
          strategy="afterInteractive" // Loads after page is interactive
          // OR strategy="lazyOnload" for non-critical scripts
        />
      </body>
    </html>
  )
}
```

**Current State Note:**
- No third-party scripts detected in Epic 7 audit
- May not be applicable for MVP

**Success Criteria:**
- No render-blocking third-party scripts
- Scripts load asynchronously
- No impact on INP score

### Task 7: Optimize CLS (Cumulative Layout Shift)
**Estimated:** 45 min

- [ ] Audit all sources of layout shift
- [ ] Verify image dimensions specified (from Task 3)
- [ ] Verify font loading optimized (from Task 2)
- [ ] Check animation properties (use transform/opacity only)
- [ ] Verify no dynamic content insertion without space reservation
- [ ] Test CLS on slow connections

**CLS Prevention Checklist:**
- ✅ Images have width/height attributes
- ✅ Fonts use font-display: swap
- ✅ Animations use transform/opacity (not width/height/margin)
- ✅ No ads or embeds without reserved space
- ✅ No dynamic content insertion at top of page
- ✅ Theme toggle doesn't cause layout shift

**Architecture Note:**
- Current animations use FLIP technique (lib/animations.ts)
- Uses transform/opacity only (GPU-accelerated)
- Respects prefers-reduced-motion

**Success Criteria:**
- CLS <0.1 on all pages
- No layout shifts from fonts, images, or animations
- Theme toggle doesn't cause shifts

### Task 8: Run Final Performance Audit
**Estimated:** 45 min

- [ ] Run Lighthouse audit on all pages
- [ ] Verify all Core Web Vitals targets met:
  - [ ] LCP <2.5s
  - [ ] INP ≤200ms (replaced FID)
  - [ ] CLS <0.1
  - [ ] TTI <3.5s
- [ ] Verify Lighthouse Performance score ≥90
- [ ] Test on slow 3G network
- [ ] Document final scores
- [ ] Create performance optimization report

**Testing Environment:**
- Desktop: Chrome DevTools Lighthouse
- Mobile: Chrome DevTools (throttled to slow 3G)
- Network: Slow 3G (400ms RTT, 400kbps down)

**Success Criteria:**
- All Core Web Vitals targets met
- Lighthouse Performance ≥90
- No performance regressions from Epic 7

---

## Dev Notes

### 2025 Core Web Vitals Update

**CRITICAL:** Google replaced First Input Delay (FID) with Interaction to Next Paint (INP) in March 2024.

**New Targets (2025):**
- **LCP** (Largest Contentful Paint): <2.5s (unchanged)
- **INP** (Interaction to Next Paint): ≤200ms (replaces FID)
- **CLS** (Cumulative Layout Shift): <0.1 (unchanged)

**INP vs FID:**
- FID only measured first interaction
- INP measures ALL interactions throughout page lifecycle
- INP reports the worst interaction
- More comprehensive responsiveness metric

### Next.js 15 Built-in Optimizations

Next.js 15 provides automatic optimizations for Core Web Vitals:

1. **Automatic Code Splitting**: JavaScript split per route
2. **Image Optimization**: next/image handles lazy loading, sizing, WebP conversion
3. **Font Optimization**: next/font inlines CSS, eliminates network requests
4. **Script Loading**: next/script enables async/defer loading
5. **Turbopack**: Faster builds in development

### Architecture Compliance

**From `/docs/architecture.md`:**

**Performance Constraints:**
- Build time: ≤3 minutes for 158 articles
- Animation performance: 60fps (16ms frame time)
- Bundle size: <200KB gzipped
- Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1

**Animation Patterns:**
- Custom FLIP utilities (lib/animations.ts)
- GPU-accelerated properties only (transform, opacity)
- Honor prefers-reduced-motion
- Timing: 250ms expansion, 150ms collapse

**Font Loading:**
- System font stack (currently)
- Migrate to next/font for optimization
- font-display: swap (prevents FOIT)
- Preload at build time

**Image Strategy:**
- No images currently in codebase (Epic 7 audit)
- Future images: Next.js Image component required
- Lazy loading by default
- priority={true} for LCP images

### Previous Story Learnings (Epic 7)

**From Story 7.8 (Accessibility Audit):**
- Build successful: zero errors
- 9 routes generated successfully (SSG working)
- No images present in codebase
- Application is text-based
- Progressive enhancement working (/articles/[slug] pages)

**From Story 7.6 (Progressive Enhancement):**
- Static article pages created at /articles/[slug]
- Server-side rendering working
- MDX content renders without JavaScript
- Build generates 4 static HTML pages

**TypeScript Learnings:**
- Watch for export conflicts (interface vs implementation)
- Pattern: Rename implementation exports (ComponentDetectorImpl)

### Git Intelligence (Recent Commits)

```
393bf32 Replace Amatic SC font with system font for simpler look
46aa454 Add under construction page with pancake flipper animation
bffb812 Mark Epic 4 as done in sprint status
1478c34 Complete Epic 3 & Epic 4: Content Management Pipeline and Homepage
```

**Relevant Patterns:**
- Font strategy: Switched from Amatic SC to system fonts (commit 393bf32)
- Animations implemented (commit 46aa454)
- Build pipeline working end-to-end

### LCP Optimization Strategies

**Identify LCP Element:**
- Homepage: Likely hero section text or background
- Articles page: Likely article cards or grid
- Individual article: Likely article title or header

**Optimization Tactics:**
1. **For Text LCP**: Optimize font loading (next/font)
2. **For Image LCP**: Use next/image with priority={true}
3. **For Background LCP**: Inline critical CSS
4. **Server-Side**: Ensure fast TTFB (Vercel handles this)

### INP Optimization Strategies (Replaces FID)

**INP Measures:**
- Click latency
- Keyboard input responsiveness
- Scroll responsiveness

**Optimization Tactics:**
1. **Code Splitting**: Reduce main thread work
2. **Defer Heavy Scripts**: Use next/script with afterInteractive
3. **Optimize Event Handlers**: Debounce/throttle where appropriate
4. **Web Workers**: Move heavy computation off main thread (if needed)

### CLS Optimization Strategies

**Common Causes:**
1. Images without dimensions → Use next/image with width/height
2. Late-loading fonts → Use next/font with font-display: swap
3. Dynamic content insertion → Reserve space with min-height
4. Animations on layout properties → Use transform/opacity only

**AIDefence Specific:**
- No images currently (future-proof with next/image)
- Fonts need optimization (migrate to next/font)
- Animations already use transform/opacity (lib/animations.ts)
- Theme toggle must not cause layout shifts

### Performance Testing Workflow

1. **Local Development:**
   ```bash
   npm run build
   npm start
   # Open Chrome DevTools → Lighthouse
   # Run audit on localhost:3000
   ```

2. **Production Testing:**
   ```bash
   # Deploy to Vercel
   git push origin main

   # Test production URL
   # Open Chrome DevTools → Lighthouse
   # Run audit on www.suniliyer.ca
   ```

3. **Network Throttling:**
   - Chrome DevTools → Network tab
   - Throttling: Slow 3G (400ms RTT, 400kbps down)
   - Verify LCP <2.5s on slow network

### Common Pitfalls to Avoid

1. **Don't optimize prematurely**: Run baseline audit first
2. **Don't skip width/height**: Images without dimensions cause CLS
3. **Don't animate width/height**: Use transform scale instead
4. **Don't block render**: Defer non-critical scripts
5. **Don't ignore font loading**: Late fonts cause CLS
6. **Don't forget mobile**: Test on throttled connection

### Success Metrics

**Lighthouse Targets:**
- Performance: ≥90
- Accessibility: 100 (from Epic 7)
- Best Practices: ≥90 (Story 8.2)
- SEO: ≥90 (Story 8.2)

**Core Web Vitals:**
- LCP: <2.5s (must achieve)
- INP: ≤200ms (must achieve)
- CLS: <0.1 (must achieve)

**Bundle Budget:**
- Total JS: <200KB gzipped
- Total CSS: Minimal (Tailwind purged)

### Web Research Insights (2025)

**Font Optimization:**
- next/font automatically inlines CSS
- Eliminates extra network requests
- Caches fonts at build time
- Default display: 'swap' prevents FOIT
- Default preload: true

**Image Optimization:**
- next/image uses native browser lazy loading
- Automatic WebP conversion
- Responsive sizing per device
- priority={true} disables lazy loading for LCP images
- placeholder="blur" provides progressive loading

**Code Splitting:**
- Automatic per-route splitting in App Router
- Dynamic imports for heavy components
- Tree-shaking removes unused code
- Reduces main thread work (improves INP)

### References

- [Source: docs/epics.md - Epic 8, Story 8.1, Lines 1172-1189]
- [Source: docs/architecture.md - Performance Constraints, Lines 44-49]
- [Source: docs/architecture.md - Animation Patterns, Lines 390-413]
- [Source: docs/sprint-artifacts/7-8-run-accessibility-audit-and-fix-violations.md - Epic 7 Completion]
- [Source: Web Research - Next.js 15 Core Web Vitals 2025]
- [Source: Web Research - Next.js 15 Font Optimization]
- [Source: Web Research - Next.js 15 Image Component]

---

## Dev Agent Record

### Context Reference

*Context files will be linked here by the context workflow when available*

### Agent Model Used

claude-sonnet-4-5-20250929

### Completion Notes

#### Note 1: Critical 2025 Update - FID → INP

**Context:** Google replaced FID with INP in March 2024. This impacts acceptance criteria.

**Actions:**
- Update target from FID <100ms to INP ≤200ms
- Understand INP measures ALL interactions (not just first)
- Optimize for worst interaction, not just initial load
- Code splitting reduces main thread work (helps INP)

**Validation:**
- Lighthouse now reports INP instead of FID
- 75% of page visits must meet "good" threshold

#### Note 2: Current Performance Baseline

**From Epic 7 Intelligence:**
- Build successful: zero errors
- 9 routes generated (SSG working)
- No images in codebase (text-based)
- Progressive enhancement working
- Static article pages at /articles/[slug]

**Expected Wins:**
- No image optimization needed (no images yet)
- Static generation already optimal
- No heavy JavaScript (small bundle)
- Server-side rendering working

**Focus Areas:**
- Font loading optimization (migrate to next/font)
- Bundle size analysis
- CLS from font loading
- LCP from text rendering

#### Note 3: Next.js 15 Built-in Optimizations

**Already Working:**
- Automatic code splitting (App Router)
- Static generation (SSG)
- Turbopack builds
- MDX compilation optimized

**Need to Add:**
- next/font (font optimization)
- next/image (future images)
- Bundle analyzer (size audit)

**Architecture Compliance:**
- FLIP animations already use transform/opacity ✅
- GPU-accelerated properties only ✅
- prefers-reduced-motion honored ✅

#### Note 4: Font Strategy

**Current State:**
- System font stack (commit 393bf32)
- Switched from Amatic SC to system fonts

**Optimization Path:**
- Migrate to next/font for system fonts
- Benefits: automatic CSS inlining, preload, swap
- Zero network requests (fonts cached at build)
- Prevents CLS from font loading

#### Note 5: No Images = Simplified Task 3

**Current State:**
- Zero <img> or <Image> tags (Epic 7 audit)
- Application is text-based

**Implementation:**
- Task 3 becomes verification/documentation
- Prepare guidelines for future images
- Ensure next/image used when images added
- No immediate optimization work needed

#### Note 6: Expected Lighthouse Scores

**Predictions:**
- Performance: 85-95 (good starting point)
- Accessibility: 100 (already achieved in Epic 7)
- Best Practices: 90+ (clean codebase)
- SEO: 90+ (meta tags working from Epic 3)

**Potential Issues:**
- Font loading without optimization (CLS)
- No font preload (LCP)
- Bundle size unknown (need audit)

#### Note 7: Testing Strategy

**Tools:**
- Chrome DevTools Lighthouse (primary)
- PageSpeed Insights (secondary validation)
- web-vitals library (programmatic monitoring)

**Environments:**
- Desktop: Default Lighthouse settings
- Mobile: Throttled Slow 3G (400ms RTT, 400kbps)

**Pages to Test:**
- Homepage (/)
- Articles page (/articles)
- Individual article (/articles/[slug])

### Debug Log References

*Debug logs will be linked here if generated during implementation*

---

## File List

**Files to Modify:**
- `app/layout.tsx` - Add next/font import and configuration
- `next.config.js` - Add bundle analyzer, optimization flags
- `tailwind.config.ts` - Verify content paths for CSS purging
- `package.json` - Add @next/bundle-analyzer dev dependency

**Files to Audit:**
- `app/globals.css` - Check size, ensure critical CSS minimal
- `lib/animations.ts` - Verify GPU-accelerated properties
- All component files - Check for potential CLS sources

**Files to Create:**
- Performance audit report (docs/sprint-artifacts/8-1-performance-audit.md)
- Bundle analysis screenshots (if needed)

**No Changes Expected:**
- No image optimization files (no images in codebase)
- No third-party script files (none detected)

---

## Story Status

**Status:** ready-for-dev
**Next Steps:**
1. Run baseline Lighthouse audit
2. Implement font optimization (next/font)
3. Analyze bundle size
4. Optimize CSS delivery
5. Run final audit and document results

**Epic 8 Progress:** 1/10 stories (10%)
