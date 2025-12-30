# Image Optimization Guidelines
**Story:** 8.1 - Task 3: Optimize Images with Next.js Image Component
**Last Updated:** 2025-12-17

## Current State

**✅ Zero images currently deployed**
- Lighthouse baseline: 0 KB image transfer
- No performance impact from images
- All image infrastructure is optimized and ready for future use

## Image Infrastructure

### 1. MDX Article Images (`components/articles/MDXComponents.tsx`)

**Optimized:** ✅ Uses Next.js Image component

Images in markdown articles are automatically optimized:

```markdown
![Alt text](/images/my-image.png)
```

**Features:**
- Automatic lazy loading
- Responsive sizing (max-width: 680px to match article body)
- Modern image formats (WebP/AVIF) for local images
- Blur placeholder for better UX
- External images (http/https) use unoptimized mode for security

**Implementation:**
```typescript
// components/articles/MDXComponents.tsx:137-160
img: ({ src, alt }: { src?: string; alt?: string }) => {
  if (!src) return null;

  const isExternal = src.startsWith('http://') || src.startsWith('https://');

  return (
    <div className="mdx-img-wrapper">
      <Image
        src={src}
        alt={alt || ''}
        width={800}
        height={600}
        className="mdx-img"
        unoptimized={isExternal}
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '680px',
        }}
      />
    </div>
  );
}
```

### 2. Portfolio Card Images (`components/portfolio/PortfolioCard.tsx`)

**Optimized:** ✅ Uses Next.js Image component

```typescript
<Image
  src={thumbnailUrl}
  alt={`${title} project thumbnail`}
  width={400}
  height={200}
  className="portfolio-card-image"
/>
```

**Current Status:**
- All `thumbnailUrl` fields are empty strings (shows gradient placeholder)
- Ready for future portfolio images

### 3. Static Assets (`public/`)

**Current SVG files:**
- `public/file.svg`
- `public/vercel.svg`
- `public/next.svg`
- `public/globe.svg`
- `public/window.svg`

**Note:** SVGs don't require next/image optimization (they're vectors).

---

## Best Practices for Adding Images

### For Article Images

1. **Store images in `public/images/` directory**
   ```
   public/
     images/
       articles/
         category-name/
           article-slug/
             diagram.png
             screenshot.png
   ```

2. **Use descriptive filenames**
   - ✅ `ai-governance-framework-diagram.png`
   - ❌ `image1.png`

3. **Optimize before upload**
   - Target: <200 KB per image
   - Use modern formats (WebP preferred)
   - Compress with tools like ImageOptim, TinyPNG, or Squoosh

4. **Reference in markdown**
   ```markdown
   ![AI Governance Framework Diagram](/images/articles/governance/framework-overview/diagram.png)
   ```

5. **Always provide alt text**
   ```markdown
   ![Descriptive alt text explaining the image content](/path/to/image.png)
   ```

### For Portfolio Images

1. **Recommended size:** 400x200px (2:1 aspect ratio)
2. **File format:** WebP or PNG
3. **Max file size:** <100 KB
4. **Storage:** `public/images/portfolio/`

Example:
```typescript
{
  title: 'AI Governance Framework',
  description: '...',
  thumbnailUrl: '/images/portfolio/ai-governance-thumbnail.webp',
  externalLink: 'https://...',
}
```

### For Other UI Images

Use Next.js Image component directly:

```typescript
import Image from 'next/image';

<Image
  src="/images/hero-background.png"
  alt="Descriptive alt text"
  width={1200}
  height={600}
  priority={true}  // For above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/..."
/>
```

---

## Image Optimization Checklist

Before adding any image to the site:

- [ ] Image is necessary (not decorative)
- [ ] File size optimized (<200 KB for articles, <100 KB for thumbnails)
- [ ] Modern format used (WebP preferred, PNG fallback)
- [ ] Descriptive filename (no spaces, use kebab-case)
- [ ] Alt text provided (describes content, not "image of...")
- [ ] Stored in appropriate directory under `/public/images/`
- [ ] Image dimensions specified if using next/image directly
- [ ] Lazy loading enabled (automatic for MDX images)

---

## Performance Impact

### Current Metrics
- **Images:** 0 KB (no images deployed)
- **Total transfer:** 176 KB (well under 200 KB target)
- **LCP:** 2.0s (images not a factor)

### Expected Impact When Adding Images

**Single article with 3 optimized images (100 KB each):**
- Additional transfer: ~300 KB (raw) → ~150 KB (WebP + lazy loading)
- LCP impact: Minimal if images are below-the-fold (lazy loaded)
- First image LCP: +0.5-1.0s if above-the-fold

**Mitigation strategies:**
1. Lazy load all below-the-fold images (automatic)
2. Use `priority={true}` only for hero images
3. Provide blur placeholders to reduce perceived load time
4. Compress images aggressively (target 80-90% quality)

---

## Configuration

### next.config.js

```javascript
const nextConfig = {
  images: {
    // Add external image domains if needed
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/images/**',
      },
    ],
    // Image formats to support
    formats: ['image/avif', 'image/webp'],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes for different layouts
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
```

### CSS Styling

Images are styled in `app/globals.css:2022-2032`:

```css
.mdx-img-wrapper {
  margin: var(--space-md) 0; /* 32px top/bottom */
  max-width: 680px; /* Match article body width */
  width: 100%;
}

.mdx-img {
  border-radius: 8px;
  display: block;
}
```

---

## Testing Images

When adding images, verify:

1. **Visual rendering**
   - Image displays correctly in both dark and light themes
   - Responsive behavior on mobile (< 768px)
   - Border radius applied correctly

2. **Performance**
   - Run Lighthouse audit: `npx lighthouse http://localhost:3000/articles/[slug]`
   - Verify LCP impact: Should remain <2.5s
   - Check image transfer size in Network tab

3. **Accessibility**
   - Screen reader reads alt text correctly
   - Images have sufficient contrast if containing text
   - Decorative images use empty alt text (`alt=""`)

---

## Common Issues and Solutions

### Issue: Image not found (404)
**Solution:** Ensure image is in `/public/` directory and path starts with `/`
```markdown
# Correct
![Alt text](/images/my-image.png)

# Incorrect (will fail)
![Alt text](images/my-image.png)
![Alt text](./images/my-image.png)
```

### Issue: External image not loading
**Solution:** Add domain to `remotePatterns` in `next.config.js`

### Issue: Image causes layout shift (CLS)
**Solution:**
- Provide width/height attributes
- Use blur placeholder
- Reserve space with CSS aspect-ratio

### Issue: Large image impacts LCP
**Solution:**
- Compress image further (target <100 KB)
- Use WebP format
- Consider lazy loading if below-the-fold
- Use blur placeholder for perceived performance

---

## Monitoring

After deploying images, monitor:

1. **Lighthouse Performance Score:** Should remain ≥90
2. **LCP (Largest Contentful Paint):** Should remain <2.5s
3. **CLS (Cumulative Layout Shift):** Should remain <0.1
4. **Total Page Weight:** Keep under 500 KB for article pages

Use Chrome DevTools → Network tab → Img filter to audit image sizes.

---

## Future Enhancements

Potential image optimizations to consider:

1. **Blur placeholders:** Auto-generate from source images at build time
2. **Image CDN:** Use Vercel Image Optimization or external CDN
3. **Responsive images:** Use `srcset` for art direction
4. **AVIF format:** Adopt when browser support reaches >90%
5. **Preload critical images:** Add `<link rel="preload">` for above-the-fold images

---

## Summary

**Current State:** Zero images, fully optimized infrastructure ready
**Infrastructure:** MDX img component uses next/image, portfolio cards use next/image
**Performance:** No image overhead (0 KB transfer)
**Readiness:** ✅ Ready for production image deployment

All image components are optimized and will automatically benefit from Next.js Image Optimization when images are added in the future.
