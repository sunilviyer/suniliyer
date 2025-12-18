# Story 8.2: Achieve Lighthouse Performance Score ≥90

**Epic:** 8 - Performance & Quality Assurance
**Story:** 8.2
**Depends On:** Story 8.1 (Optimize Core Web Vitals)
**Status:** ready-for-dev

---

## Story

As a **developer**,
I want **Lighthouse Performance score of 90 or higher**,
So that **the site meets industry best practices for performance**.

---

## Acceptance Criteria

**Given** Core Web Vitals are optimized
**When** I run Lighthouse audit
**Then** Performance score is ≥90
**And** Best Practices score is ≥90
**And** SEO score is ≥90
**And** Accessibility score is 100 (from Epic 7)
**And** All recommendations with "High" impact are addressed
**And** Unused JavaScript is eliminated or lazy-loaded
**And** Images are properly sized and compressed

---

## Tasks / Subtasks

### Task 1: Run Baseline Lighthouse Audit (Post-8.1)
**Estimated:** 30 min

- [ ] Run Lighthouse audit on homepage (/)
- [ ] Run Lighthouse audit on articles page (/articles)
- [ ] Run Lighthouse audit on individual article (/articles/[slug])
- [ ] Document all 4 category scores:
  - [ ] Performance (target: ≥90)
  - [ ] Accessibility (target: 100 from Epic 7)
  - [ ] Best Practices (target: ≥90)
  - [ ] SEO (target: ≥90)
- [ ] Document all "High" impact recommendations
- [ ] Identify specific failing audits

**Expected Baseline (After Story 8.1):**
- Performance: 85-95 (improved from Core Web Vitals work)
- Accessibility: 100 (achieved in Epic 7)
- Best Practices: 90+ (clean codebase)
- SEO: 85-95 (meta tags from Epic 3)

### Task 2: Address "High" Impact Performance Recommendations
**Estimated:** 90 min

- [ ] Review all "High" impact recommendations from Lighthouse
- [ ] Prioritize by impact on score
- [ ] Implement fixes for each recommendation:
  - [ ] Eliminate render-blocking resources
  - [ ] Properly size images (if any added)
  - [ ] Defer offscreen images
  - [ ] Minify CSS/JavaScript
  - [ ] Remove unused CSS/JavaScript
  - [ ] Use efficient cache policy
  - [ ] Avoid enormous network payloads
  - [ ] Minimize main-thread work
  - [ ] Reduce JavaScript execution time
- [ ] Re-run Lighthouse after each major fix
- [ ] Document improvements

**Common Recommendations:**
1. **Render-Blocking Resources**: Already handled by Next.js 15
2. **Unused JavaScript**: Tree-shaking from Story 8.1
3. **Unused CSS**: Tailwind purging from Story 8.1
4. **Image Optimization**: next/image from Story 8.1
5. **Cache Policy**: Vercel handles automatically

**Implementation Notes:**
```javascript
// next.config.js - Ensure production optimizations enabled
module.exports = {
  reactStrictMode: true,
  swcMinify: true,  // Default in Next.js 15
  compress: true,   // Gzip compression

  // Optional: Additional optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Image optimization config
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}
```

**Success Criteria:**
- All "High" impact recommendations resolved
- Performance score improved
- No new issues introduced

### Task 3: Optimize Best Practices Score
**Estimated:** 60 min

- [ ] Review Best Practices audit results
- [ ] Address security recommendations:
  - [ ] Use HTTPS (Vercel default)
  - [ ] No browser errors in console
  - [ ] No deprecated APIs
  - [ ] Secure external resources
- [ ] Address modern web standards:
  - [ ] Use HTTP/2 (Vercel default)
  - [ ] Avoid document.write()
  - [ ] Use passive event listeners
  - [ ] Avoid mutation events
- [ ] Fix any CSP (Content Security Policy) issues
- [ ] Verify no mixed content warnings

**Best Practices Checklist:**
- ✅ HTTPS everywhere (Vercel enforced)
- ✅ No console errors
- ✅ No deprecated APIs
- ✅ Secure cookies (if using)
- ✅ Valid DOCTYPE
- ✅ Charset declaration
- ✅ No vulnerable libraries

**Current State Note:**
- Clean Next.js 15 build
- No third-party libraries with known vulnerabilities
- No console errors (from Epic 7 build)

**Success Criteria:**
- Best Practices score ≥90
- No security warnings
- No deprecated API usage

### Task 4: Optimize SEO Score
**Estimated:** 60 min

- [ ] Review SEO audit results
- [ ] Verify meta tags present on all pages
- [ ] Verify Open Graph tags working
- [ ] Check structured data (JSON-LD)
- [ ] Verify robots.txt accessible
- [ ] Verify sitemap.xml accessible
- [ ] Check canonical URLs
- [ ] Verify hreflang tags (if multilingual)
- [ ] Ensure descriptive page titles
- [ ] Ensure meta descriptions present
- [ ] Check image alt text (future images)
- [ ] Verify mobile-friendly viewport
- [ ] Check font sizes (≥16px on mobile)

**SEO Requirements from Architecture:**
- ✅ Auto-generated sitemap.xml (Epic 3)
- ✅ Meta tags from frontmatter (Epic 3)
- ✅ Open Graph metadata (Epic 3)
- ✅ JSON-LD structured data (Epic 3)
- ✅ robots.txt (Epic 3)
- ✅ Semantic HTML (Epic 7)

**Implementation Verification:**
```typescript
// Verify generateMetadata() in all pages
// app/articles/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

  return {
    title: article.seo_title || `${article.title} | AIDefence`,
    description: article.seo_description || article.excerpt,

    // Open Graph
    openGraph: {
      title: article.seo_title || article.title,
      description: article.seo_description || article.excerpt,
      type: 'article',
      publishedTime: article.date,
      tags: article.tags,
    },

    // Canonical URL
    alternates: {
      canonical: `https://www.suniliyer.ca/articles/${article.slug}`,
    },
  };
}
```

**Common SEO Issues:**
1. **Missing meta descriptions**: Check all pages have descriptions
2. **Missing alt text**: Epic 7 confirmed no images yet
3. **Small font sizes**: Epic 7 confirmed ≥16px
4. **Non-crawlable links**: Check all <Link> components
5. **Missing structured data**: Verify JSON-LD working

**Success Criteria:**
- SEO score ≥90
- All meta tags present
- sitemap.xml accessible
- robots.txt accessible
- Structured data valid

### Task 5: Eliminate Unused JavaScript
**Estimated:** 60 min

- [ ] Run Lighthouse "Unused JavaScript" audit
- [ ] Analyze bundle with @next/bundle-analyzer
- [ ] Identify large unused chunks
- [ ] Implement dynamic imports for heavy components
- [ ] Remove unused dependencies
- [ ] Verify tree-shaking working
- [ ] Re-audit bundle size

**Dynamic Import Strategy:**
```typescript
// For heavy components that aren't immediately needed
import dynamic from 'next/dynamic'

// Example: ArticleExpanded only loads when user clicks card
const ArticleExpanded = dynamic(
  () => import('@/components/articles/ArticleExpanded'),
  {
    loading: () => <div className="loading-skeleton" />,
    ssr: false  // Optional: client-only if not needed for SEO
  }
)

// Example: Heavy third-party libraries
const HeavyChart = dynamic(
  () => import('recharts').then(mod => mod.LineChart),
  { ssr: false }
)
```

**Bundle Analysis:**
```bash
# Run bundle analyzer
ANALYZE=true npm run build

# Check output for:
# - Duplicate dependencies
# - Large unused chunks
# - Tree-shaking opportunities
```

**Current Dependencies (Estimated Sizes):**
- next-mdx-remote: ~10-15 KB
- next-themes: ~2 KB
- @radix-ui/react-dialog: ~15-20 KB
- rehype-prism: ~5-10 KB
- **Total**: ~32-47 KB (well under 200 KB budget)

**Success Criteria:**
- Unused JavaScript reduced
- Bundle size <200 KB gzipped
- No duplicate dependencies
- Tree-shaking verified

### Task 6: Optimize Image Delivery (Future-Proofing)
**Estimated:** 30 min

- [ ] Verify next/image configuration
- [ ] Check image formats (AVIF > WebP > JPEG)
- [ ] Verify responsive images working
- [ ] Check image lazy loading
- [ ] Verify image sizing (no oversized images)
- [ ] Test image compression quality

**Image Optimization Configuration:**
```javascript
// next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],  // Modern formats first
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,  // Cache images for 60 seconds minimum
    dangerouslyAllowSVG: false,  // Security: block SVG uploads
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}
```

**Current State Note:**
- Epic 7 audit: NO images in codebase
- Task becomes verification/documentation
- Prepare for future image additions

**Success Criteria:**
- Image configuration optimal
- Documentation ready for future images
- No image-related audit failures

### Task 7: Optimize Cache Policy
**Estimated:** 30 min

- [ ] Review Lighthouse cache policy recommendations
- [ ] Verify Vercel cache headers
- [ ] Check static asset caching
- [ ] Verify immutable assets cached
- [ ] Check cache-control headers
- [ ] Test cache behavior

**Vercel Default Caching:**
- Static files: 1 year (immutable)
- Dynamic routes: No cache (revalidate)
- Build artifacts: Infinite cache

**Custom Cache Headers (if needed):**
```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
}
```

**Current State Note:**
- Vercel handles caching automatically
- Static generation (SSG) enables optimal caching
- May not need custom headers

**Success Criteria:**
- Cache policy score passes
- Static assets cached appropriately
- No cache-related warnings

### Task 8: Run Final Lighthouse Audit
**Estimated:** 45 min

- [ ] Run Lighthouse audit on all pages (Desktop)
- [ ] Run Lighthouse audit on all pages (Mobile)
- [ ] Verify all 4 category scores meet targets:
  - [ ] Performance ≥90
  - [ ] Accessibility 100
  - [ ] Best Practices ≥90
  - [ ] SEO ≥90
- [ ] Document final scores
- [ ] Take screenshots of passing audits
- [ ] Create Lighthouse Performance Report
- [ ] Compare before/after improvements

**Testing Checklist:**

**Desktop Testing:**
- [ ] Homepage (/) - All 4 categories
- [ ] Articles page (/articles) - All 4 categories
- [ ] Individual article (/articles/[slug]) - All 4 categories

**Mobile Testing (Throttled):**
- [ ] Homepage (/) - All 4 categories
- [ ] Articles page (/articles) - All 4 categories
- [ ] Individual article (/articles/[slug]) - All 4 categories

**Lighthouse Report Format:**
```markdown
# Lighthouse Performance Report - Story 8.2

## Executive Summary
- ✅ All 4 categories meet or exceed targets
- ✅ Zero high-impact issues remaining
- ✅ Performance optimized for production

## Desktop Results
### Homepage (/)
- Performance: 95 (✅ Target: ≥90)
- Accessibility: 100 (✅ Target: 100)
- Best Practices: 95 (✅ Target: ≥90)
- SEO: 95 (✅ Target: ≥90)

### Articles Page (/articles)
[... similar format ...]

### Individual Article (/articles/sample-article)
[... similar format ...]

## Mobile Results
[... same structure as desktop ...]

## Improvements from Story 8.1
- Performance: +10 points (85 → 95)
- Best Practices: +5 points (90 → 95)
- SEO: +8 points (87 → 95)

## Remaining Recommendations
- [List any "Medium" or "Low" impact items for future optimization]
```

**Success Criteria:**
- All pages score ≥90 on Performance
- All pages score ≥90 on Best Practices
- All pages score ≥90 on SEO
- All pages score 100 on Accessibility
- Report documented and committed

---

## Dev Notes

### Story Dependencies

**Requires Story 8.1 Complete:**
- Core Web Vitals optimized (LCP, INP, CLS)
- Font loading optimized (next/font)
- Bundle analyzed and optimized
- CLS sources eliminated

**Why Sequential:**
Story 8.1 fixes foundational performance issues. Story 8.2 focuses on comprehensive Lighthouse compliance across all 4 categories.

### Lighthouse Scoring Categories

**Performance (≥90):**
- Core Web Vitals (50% weight): LCP, INP, CLS
- First Contentful Paint (FCP)
- Speed Index
- Total Blocking Time (TBT)
- Time to Interactive (TTI)

**Accessibility (100 from Epic 7):**
- ARIA attributes
- Color contrast
- Semantic HTML
- Keyboard navigation
- Focus management
- Screen reader support

**Best Practices (≥90):**
- HTTPS usage
- No browser errors
- Secure cookies
- No deprecated APIs
- Valid DOCTYPE
- No vulnerable libraries

**SEO (≥90):**
- Meta descriptions
- Page titles
- Viewport configuration
- Font sizes
- Crawlable links
- robots.txt
- sitemap.xml
- Structured data

### Architecture Compliance

**From `/docs/architecture.md`:**

**Performance Targets:**
- Lighthouse Performance: ≥90 (NFR-PERF-6)
- Lighthouse Best Practices: ≥90 (NFR-PERF-7)
- Lighthouse SEO: ≥90 (NFR-PERF-8)
- Accessibility: 100 (achieved Epic 7)

**SEO Infrastructure:**
- Next.js Metadata API (ARCH-7)
- Custom sitemap generation (Epic 3)
- Frontmatter as single source of truth (ARCH-10)
- Meta tags, Open Graph, JSON-LD (Epic 3)

**Build Configuration:**
- Static Site Generation (SSG)
- Vercel deployment
- Exact dependency pinning
- Next.js 15.5.9+ (security patches)

### Previous Story Learnings

**From Story 8.1:**
- Core Web Vitals targets met
- Font optimization via next/font
- Bundle size <200 KB
- No images in codebase (text-based)
- CLS optimized (FLIP animations use transform/opacity)

**From Epic 7:**
- Accessibility 100/100 (all WCAG AA requirements met)
- Zero automated violations
- Full keyboard navigation
- Screen reader support
- Progressive enhancement working

**From Epic 3:**
- SEO metadata pipeline working
- Auto-generated sitemap.xml
- Meta tags from frontmatter
- Open Graph implemented
- JSON-LD structured data

### Lighthouse Testing Best Practices

**1. Use Incognito Mode:**
- Prevents browser extensions from interfering
- Clean environment for testing

**2. Multiple Test Runs:**
- Run 3-5 times, take median score
- Performance scores can vary ±5 points

**3. Desktop vs Mobile:**
- Mobile typically scores lower (throttled network)
- Ensure both environments pass

**4. Production Environment:**
- Test on deployed Vercel URL (not localhost)
- Vercel optimizations only active in production

**5. Clear Cache:**
- Test with clear cache for accurate results
- Also test with cache to verify caching working

### Common Lighthouse Issues & Fixes

**Issue: Low Performance Score**
- **Cause**: Render-blocking resources
- **Fix**: Next.js 15 handles automatically, verify config

**Issue: Unused JavaScript**
- **Cause**: Heavy components loaded upfront
- **Fix**: Dynamic imports with next/dynamic

**Issue: Missing Meta Tags**
- **Cause**: generateMetadata() not exported
- **Fix**: Add export to all page.tsx files

**Issue: Low SEO Score**
- **Cause**: Missing sitemap or robots.txt
- **Fix**: Verify /public/sitemap.xml and /public/robots.txt exist

**Issue: Best Practices Warnings**
- **Cause**: Console errors or deprecated APIs
- **Fix**: Check browser console, update code

### Web Research Insights (2025)

**Lighthouse Updates:**
- INP replaced FID in scoring (March 2024)
- AVIF images now recommended over WebP
- Performance scoring weights updated
- 75% of visits must meet "good" threshold

**Next.js 15 Optimizations:**
- Automatic code splitting per route
- Built-in image optimization (next/image)
- Font optimization (next/font)
- Script optimization (next/script)
- Turbopack for faster builds

**Vercel Platform Benefits:**
- Automatic HTTPS
- Global CDN
- Optimal cache headers
- Edge network delivery
- 99.9% uptime SLA

### Performance Budget Monitoring

**Current Bundle Budget:**
- Total JS: <200 KB gzipped (target)
- Current: ~32-47 KB (from Story 8.1)
- Remaining: 153-168 KB headroom

**Asset Budget:**
- Images: Not applicable (no images yet)
- Fonts: Inlined via next/font (zero network cost)
- CSS: Minimal (Tailwind purged)

**Performance Metrics:**
- LCP: <2.5s (Story 8.1 target)
- INP: ≤200ms (Story 8.1 target)
- CLS: <0.1 (Story 8.1 target)
- FCP: <1.8s (Lighthouse target)
- TTI: <3.5s (Epic 8 target)

### Success Metrics Dashboard

**Lighthouse Scores (Target vs Actual):**

| Category | Target | Expected | Status |
|----------|--------|----------|--------|
| Performance | ≥90 | 85-95 | 🟡 Needs verification |
| Accessibility | 100 | 100 | ✅ Achieved (Epic 7) |
| Best Practices | ≥90 | 90+ | 🟡 Needs verification |
| SEO | ≥90 | 85-95 | 🟡 Needs verification |

**Core Web Vitals (from Story 8.1):**

| Metric | Target | Status |
|--------|--------|--------|
| LCP | <2.5s | ✅ Optimized |
| INP | ≤200ms | ✅ Optimized |
| CLS | <0.1 | ✅ Optimized |

**Bundle Size:**

| Asset | Budget | Current | Status |
|-------|--------|---------|--------|
| JS (gzipped) | <200 KB | ~47 KB | ✅ Under budget |
| CSS | Minimal | Purged | ✅ Optimized |

### Testing Workflow

**Step 1: Local Testing**
```bash
# Build production bundle
npm run build

# Start production server
npm start

# Open Chrome DevTools → Lighthouse
# Run audit on localhost:3000
```

**Step 2: Production Testing**
```bash
# Deploy to Vercel
git push origin main

# Wait for deployment to complete
# Open www.suniliyer.ca

# Run Lighthouse audit on production URL
```

**Step 3: Mobile Testing**
```bash
# Chrome DevTools → Toggle device toolbar
# Select "Moto G4" or similar mobile device
# Enable "Throttling: Slow 3G"
# Run Lighthouse audit in mobile mode
```

**Step 4: Documentation**
```bash
# Take screenshots of passing audits
# Document scores in Lighthouse Report
# Commit report to docs/sprint-artifacts/
```

### References

- [Source: docs/epics.md - Epic 8, Story 8.2, Lines 1191-1208]
- [Source: docs/architecture.md - Performance Targets, NFR-PERF-6 through NFR-PERF-8]
- [Source: docs/architecture.md - SEO Management, ARCH-7]
- [Source: docs/sprint-artifacts/8-1-optimize-core-web-vitals-lcp-fid-cls.md - Story 8.1]
- [Source: docs/sprint-artifacts/7-8-run-accessibility-audit-and-fix-violations.md - Epic 7 Accessibility]
- [Source: Web Research - Lighthouse 2025 Updates]

---

## Dev Agent Record

### Context Reference

*Context files will be linked here by the context workflow when available*

### Agent Model Used

claude-sonnet-4-5-20250929

### Completion Notes

#### Note 1: Sequential Dependency on Story 8.1

**Context:** This story builds directly on Story 8.1's Core Web Vitals optimization work.

**Dependencies:**
- Font optimization (next/font) from 8.1
- Bundle analysis from 8.1
- CLS elimination from 8.1
- Performance baseline established in 8.1

**Why Important:**
Lighthouse Performance score heavily weights Core Web Vitals (50%). Story 8.1 fixes these fundamentals, enabling Story 8.2 to achieve ≥90 overall.

#### Note 2: Accessibility Already 100/100

**From Epic 7 Intelligence:**
- All WCAG AA requirements met
- Zero automated violations
- Comprehensive ARIA implementation
- Full keyboard navigation
- Screen reader support

**Impact on Story 8.2:**
- Accessibility category automatically passes
- Focus on other 3 categories (Performance, Best Practices, SEO)
- No accessibility work needed

#### Note 3: SEO Infrastructure Already Implemented

**From Epic 3 Intelligence:**
- Auto-generated sitemap.xml (Story 3.7)
- SEO metadata from frontmatter (Story 3.6)
- Open Graph tags (Story 3.6)
- JSON-LD structured data (Story 3.6)
- robots.txt configured (Story 3.7)

**Expected SEO Score:**
- Baseline: 85-95 (infrastructure working)
- Optimizations: Meta description coverage, canonical URLs
- Target: ≥90 (achievable with minor fixes)

#### Note 4: Minimal Bundle Size = High Performance

**Current State:**
- Text-based application (no images)
- Small dependency footprint (~47 KB)
- Static generation (SSG)
- No heavy third-party scripts

**Performance Advantage:**
- Well under 200 KB budget
- Fast initial load
- Minimal JavaScript execution
- Excellent TTI (Time to Interactive)

**Expected Performance Score:**
- Baseline: 85-95 (good starting point)
- Post-8.1 optimizations: 90-98
- Target: ≥90 (very achievable)

#### Note 5: Vercel Platform Benefits

**Automatic Optimizations:**
- HTTPS everywhere
- Global CDN
- Optimal cache headers
- Edge network delivery
- Compression enabled

**Best Practices Score:**
- HTTPS: ✅ Vercel enforced
- Secure headers: ✅ Vercel default
- HTTP/2: ✅ Vercel enabled
- Expected score: 90-95

#### Note 6: Testing Strategy

**Three-Phase Approach:**
1. **Baseline Audit** (Post-8.1): Identify gaps
2. **Iterative Fixes**: Address high-impact items first
3. **Final Validation**: All pages, desktop + mobile

**Key Insight:**
Run multiple Lighthouse tests (3-5 runs), take median score. Performance can vary ±5 points between runs.

#### Note 7: Bundle Analyzer Setup

**Implementation:**
```bash
npm install --save-dev @next/bundle-analyzer

# next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // ... existing config
})

# Run analysis
ANALYZE=true npm run build
```

**Purpose:**
- Identify unused JavaScript
- Find duplicate dependencies
- Verify tree-shaking working
- Optimize bundle size

#### Note 8: No Images = Simplified Task 6

**Current State:**
- Zero images in codebase (Epic 7 audit)
- next/image configuration ready (from 8.1)
- Future-proofed for image additions

**Task 6 Becomes:**
- Verification of next/image config
- Documentation for future images
- No immediate optimization work

### Debug Log References

*Debug logs will be linked here if generated during implementation*

---

## File List

**Files to Modify:**
- `next.config.js` - Add bundle analyzer, production optimizations
- `app/page.tsx` - Verify generateMetadata() exported
- `app/articles/page.tsx` - Verify generateMetadata() exported
- `app/articles/[slug]/page.tsx` - Verify generateMetadata() exported (already exists)

**Files to Verify:**
- `public/sitemap.xml` - Generated by Epic 3
- `public/robots.txt` - Created in Epic 3
- All page components - Check for console errors
- All components - Check for deprecated APIs

**Files to Create:**
- Lighthouse Performance Report (docs/sprint-artifacts/8-2-lighthouse-report.md)
- Bundle analysis screenshots (if needed)

**No Changes Expected:**
- No new components needed
- No new utilities needed
- Configuration changes only

---

## Story Status

**Status:** ready-for-dev
**Next Steps:**
1. Complete Story 8.1 (dependency)
2. Run baseline Lighthouse audit
3. Address high-impact recommendations
4. Optimize all 4 categories
5. Run final audit and document results

**Epic 8 Progress:** 2/10 stories (20%)
