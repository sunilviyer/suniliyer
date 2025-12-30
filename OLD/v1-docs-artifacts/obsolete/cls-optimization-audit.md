# Cumulative Layout Shift (CLS) Optimization Audit
**Story:** 8.1 - Task 7: Optimize CLS
**Date:** 2025-12-17

## Current CLS Scores: Excellent ✅

| Page | CLS Score | Target | Status |
|------|-----------|--------|--------|
| **Homepage (/)** | 0.002 | <0.1 | ✅ Excellent (99.8% under target) |
| **Articles (/articles)** | 0 | <0.1 | ✅ Perfect |

**Lighthouse Rating:** Both pages pass Core Web Vitals CLS threshold.

## CLS Optimization Analysis

### Sources of Layout Stability

**Why CLS is excellent (0 - 0.002):**

1. **✅ No External Fonts Loading**
   - Using system font stack (instant rendering)
   - No FOIT (Flash of Invisible Text)
   - No FOUT (Flash of Unstyled Text)
   - No font-related layout shift

2. **✅ No Images Currently**
   - 0 KB image transfer
   - No image loading causing layout shifts
   - Next.js Image component configured for future (width/height required)

3. **✅ No Dynamic Content Injection**
   - All content is static (SSG)
   - No ads or third-party embeds
   - No late-loading analytics widgets

4. **✅ Reserved Space for UI Elements**
   - FloatingMenu has fixed positioning (doesn't affect layout)
   - Skip-to-content link uses transform (no layout impact)
   - Navigation bar has defined height

5. **✅ CSS-First Rendering**
   - Critical CSS loaded immediately
   - All layout styles defined before content
   - No JavaScript-dependent layout

## Animation Audit

### GPU-Accelerated Animations ✅

**All production animations use transform/opacity only:**

| Animation | Properties | Impact | Status |
|-----------|------------|--------|--------|
| `slideDown` | `transform: translateY()`, `opacity` | Menu bar slide-in | ✅ GPU-accelerated |
| `overlay-fade-in` | `opacity` | Dialog overlay fade | ✅ GPU-accelerated |
| `slide-up-mobile` | `transform: translateY()` | Mobile dialog slide | ✅ GPU-accelerated |
| `flip` | `transform: rotate()` | Pancake flip (temp) | ✅ GPU-accelerated |
| `switchSide` | `transform: rotateY()` | Pancake rotate (temp) | ✅ GPU-accelerated |
| `bubble` | `transform: scale()`, `opacity` | Bubbles (temp) | ✅ GPU-accelerated |
| `pulse` | `transform: scale()`, `opacity` | Pulse effect (temp) | ✅ GPU-accelerated |

### Layout-Causing Animations ⚠️ (Temporary Only)

**Under Construction page only (will be removed):**

| Animation | Properties | Impact | Status |
|-----------|------------|--------|--------|
| `jump` | `top`, `transform` | Pancake jump | ⚠️ Uses layout property (`top`) |
| `fly` | `bottom`, `transform` | Pastry fly | ⚠️ Uses layout property (`bottom`) |

**Impact:** Minimal - CLS remains 0.002 because:
- Animations are contained within `#cooking` element
- Element has reserved space (no reflow)
- Temporary (removed when homepage is restored)

**Recommendation:** When restoring the real homepage, ensure these animations are removed.

### Transition Properties Audit

**Most transitions use `transform` or `opacity`:**

✅ Good transitions (no CLS):
```css
transition: transform 200ms ease-out;           /* Line 250 */
transition: opacity 200ms var(--easing);        /* Line 1300, 1305, 1474 */
transition: width ..., left ...;                 /* Line 862 - nav underline only */
```

⚠️ Broad transitions (could cause CLS if layout properties change):
```css
transition: all var(--timing-fast) ...;          /* Lines 292, 415, 472, 493, etc. */
```

**Current Impact:** No CLS issues observed (score 0-0.002)

**Best Practice Recommendation:** Replace `transition: all` with specific properties:

```css
/* Instead of: */
transition: all var(--timing-fast) var(--easing-standard);

/* Use: */
transition: transform var(--timing-fast) var(--easing-standard),
            opacity var(--timing-fast) var(--easing-standard),
            box-shadow var(--timing-fast) var(--easing-standard);
```

**Priority:** Low (current CLS is excellent, but this would future-proof against accidental layout shifts)

## Layout Shift Prevention Checklist

### Images ✅

- [x] All images use Next.js Image component (width/height required)
- [x] No images currently deployed (0 KB transfer)
- [x] Future images will have dimensions specified (prevents CLS)
- [x] Aspect ratio containers ready (`mdx-img-wrapper`)

### Fonts ✅

- [x] System fonts only (instant rendering, no FOIT/FOUT)
- [x] No external font loading
- [x] Font stack defined in `:root` (applied before content)
- [x] `antialiased` class for smooth rendering

### Dynamic Content ✅

- [x] No ads or third-party widgets
- [x] No late-loading analytics
- [x] All content static (SSG)
- [x] No infinite scroll or dynamic content injection

### UI Elements ✅

- [x] FloatingMenu uses `position: fixed` (no layout impact)
- [x] Navigation bar has defined `height: 72px`
- [x] Skip-to-content uses `transform` (no layout impact)
- [x] Dialog overlay uses `position: fixed` (no layout impact)

### CSS Loading ✅

- [x] Critical CSS loaded before content
- [x] No CSS-in-JS that loads after hydration
- [x] All layout styles defined upfront
- [x] No JavaScript-dependent layout

## Guidelines for Maintaining 0 CLS

### When Adding Images

**Always specify dimensions:**

```typescript
// Correct ✅
<Image
  src="/images/article.png"
  alt="Description"
  width={800}
  height={600}
  className="article-image"
/>

// Incorrect ❌
<img src="/images/article.png" alt="Description" />
```

**Use aspect ratio containers:**

```css
.image-container {
  aspect-ratio: 16 / 9;
  position: relative;
}
```

### When Adding Animations

**Use GPU-accelerated properties only:**

✅ **Safe properties (no CLS):**
- `transform` (translate, rotate, scale, skew)
- `opacity`
- `filter` (blur, brightness, etc.)

❌ **Avoid (causes layout recalculation):**
- `top`, `bottom`, `left`, `right`
- `width`, `height`
- `margin`, `padding`
- `font-size`

**Example transformation:**

```css
/* Avoid ❌ */
@keyframes slideIn {
  from { left: -100px; }
  to { left: 0; }
}

/* Use instead ✅ */
@keyframes slideIn {
  from { transform: translateX(-100px); }
  to { transform: translateX(0); }
}
```

### When Adding Dynamic Content

**Reserve space before content loads:**

```typescript
// Use skeleton loaders with fixed dimensions
<div className="skeleton" style={{ width: '100%', height: '200px' }}>
  {loading ? <Skeleton /> : <ActualContent />}
</div>
```

**Set min-height for dynamic containers:**

```css
.article-container {
  min-height: 400px; /* Prevents collapse/expansion */
}
```

### When Using Fonts

**Stick with system fonts for best CLS:**

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

**If custom fonts are needed:**

```typescript
// Use next/font with font-display: swap
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',  // Prevents FOIT
  preload: true,
});
```

## Monitoring CLS

### Lighthouse Audits

**Run on all pages before deployment:**

```bash
# Homepage
npx lighthouse http://localhost:3000 --only-categories=performance

# Articles page
npx lighthouse http://localhost:3000/articles --only-categories=performance

# Individual article
npx lighthouse http://localhost:3000/articles/sample-article --only-categories=performance
```

**Expected CLS:** <0.1 (ideally 0)

### Chrome DevTools Performance Panel

**Record and analyze layout shifts:**

1. Open DevTools → Performance tab
2. Click Record
3. Load page / trigger interaction
4. Stop recording
5. Look for "Layout Shift" events (red triangles in Experience lane)
6. Click on shift events to see which elements shifted

**Target:** Zero layout shift events

### Real User Monitoring (RUM)

**If deploying to production, consider:**

- **Google Search Console:** Shows CrUX data for Core Web Vitals
- **Vercel Analytics:** Real user CLS metrics (if using Vercel)
- **web-vitals library:** Client-side CLS measurement

```typescript
// Optional: Measure CLS client-side
import { getCLS } from 'web-vitals';

getCLS(console.log); // Logs CLS to console
```

## Best Practices Summary

### Always ✅

1. Specify image dimensions (width/height)
2. Use system fonts or preload custom fonts
3. Reserve space for dynamic content (min-height, aspect-ratio)
4. Use `transform` and `opacity` for animations
5. Test with Lighthouse before deployment

### Never ❌

1. Load fonts without font-display: swap
2. Insert content without reserved space
3. Animate layout properties (width, height, top, bottom, etc.)
4. Load images without dimensions
5. Inject ads or third-party content without placeholders

## Current Status: Production-Ready ✅

**CLS Performance:**
- Homepage: 0.002 (excellent)
- Articles: 0 (perfect)
- Well under 0.1 target (Core Web Vitals passing)

**Optimization Level:** Fully optimized
- System fonts (instant rendering)
- No images (0 layout shift)
- GPU-accelerated animations
- Static content (SSG)

**Recommendations:**
1. Maintain current approach for new features
2. Replace `transition: all` with specific properties (future-proofing)
3. Remove Under Construction pancake animations when homepage is restored
4. Continue monitoring CLS with Lighthouse on new deployments

**No immediate action required** - CLS is already excellent and production-ready.
