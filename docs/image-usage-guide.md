# Image Usage Guide - AIDefence V2

**Last Updated**: 2025-12-30
**Epic**: 0 - Image Generation Strategy
**Status**: Complete

---

## Overview

This guide provides comprehensive instructions for using images in the AIDefence V2 platform. All 179 production images have been created, optimized, and converted to WebP format for optimal performance.

---

## Directory Structure

```
/public/images/
  /history/           ← 15 History concept cards
  /terminology/       ← 14 Terminology concept cards
  /risk/              ← 20 Risk concept cards
  /responsibility/    ← 20 Responsibility concept cards
  /future/            ← 20 Future concept cards
  /heroes/            ← 5 Learning path hero images
  /breaks/            ← 2 Section break cards
  /resources/         ← 10 Resource cards
  /examples/          ← 28 Example cards
  /extra/             ← Bonus/experimental images (not for production)
```

---

## Image Formats

### Source Files (PNG/JPG)
- **Purpose**: Source images for reference and regeneration
- **Format**: PNG (for transparency) or JPG (for photos)
- **Size**: Original quality (optimized but not compressed)

### Production Files (WebP)
- **Purpose**: Web-optimized images for production use
- **Format**: WebP
- **Quality**: 85
- **Average Savings**: 96.8% smaller than PNG
- **Browser Support**: All modern browsers (95%+ coverage)

**Always use WebP in production with PNG/JPG fallback for older browsers.**

---

## Image Specifications

### Concept Cards (120 images)

| Category | Count | Resolution | Aspect Ratio | Color Palette |
|----------|-------|------------|--------------|---------------|
| History | 15 | 1920×1280 | 3:2 | Toffee Brown #936639 |
| Terminology | 14 | 1920×1280 | 3:2 | Camel #a68a64 |
| Risk | 20 | 1920×1280 | 3:2 | Dark Walnut #582f0e |
| Responsibility | 20 | 1920×1280 | 3:2 | Dry Sage #a4ac86 |
| Future | 20 | 1920×1280 | 3:2 | Blue #4285F4 + Yellow #FBBC04 |

### Hero Images (5 images)

| Path | Filename | Resolution | Gradient |
|------|----------|------------|----------|
| History | `history-hero.webp` | 1920×1080 (16:9) | Toffee Brown → Saddle Brown |
| Terminology | `terminology-hero.webp` | 1920×1080 (16:9) | Camel → Fern |
| Risk | `risk-hero.webp` | 1920×1080 (16:9) | Dark Walnut → Charcoal |
| Responsibility | `responsibility-hero.webp` | 1920×1080 (16:9) | Dry Sage → Fern |
| Future | `future-hero.webp` | 1920×1080 (16:9) | Blue → Yellow |

### Break Cards (2 images)

| Name | Filename | Purpose | Resolution |
|------|----------|---------|------------|
| Learning Paths | `learning-paths-break.webp` | Section divider | 1920×1080 (16:9) |
| About Me | `about-me-page-break.webp` | Section divider | 1920×1080 (16:9) |

### Resource Cards (10 images)

| Type | Resolution | Color | Target Size |
|------|------------|-------|-------------|
| Templates, Guides, Tools | 1200×800 (3:2) | Mixed (category-based) | <200KB |

### Example Cards (28 images)

| Type | Resolution | Color | Target Size |
|------|------------|-------|-------------|
| Company/Case Studies | 1200×800 (3:2) | Company brand colors | <200KB |

---

## Usage in Next.js

### 1. Using Next.js Image Component (Recommended)

```tsx
import Image from 'next/image';

// Concept Card
<Image
  src="/images/history/ai-definition.webp"
  alt="What AI Actually Is - OECD Definition"
  width={1920}
  height={1280}
  quality={85}
  className="concept-card-image"
/>

// Hero Image
<Image
  src="/images/heroes/history-hero.webp"
  alt="History & Foundations Learning Path"
  width={1920}
  height={1080}
  priority={true}
  className="path-hero-image"
/>

// Example Card
<Image
  src="/images/examples/amazon-hiring-bias.webp"
  alt="Amazon Hiring Algorithm Bias Case Study"
  width={1200}
  height={800}
  quality={85}
  className="example-card-image"
/>
```

### 2. Responsive Images with Fallback

```tsx
<picture>
  <source srcSet="/images/history/ai-definition.webp" type="image/webp" />
  <img
    src="/images/history/ai-definition.png"
    alt="What AI Actually Is"
    width={1920}
    height={1280}
    className="concept-card-image"
  />
</picture>
```

### 3. Background Images in CSS

```css
.hero-section {
  background-image: url('/images/heroes/history-hero.webp');
  background-size: cover;
  background-position: center;
}

/* Fallback for older browsers */
@supports not (background-image: url('/images/test.webp')) {
  .hero-section {
    background-image: url('/images/heroes/history-hero.png');
  }
}
```

---

## Naming Conventions

### Concept Cards
- **Format**: `{concept-slug}.webp`
- **Example**: `ai-definition.webp`, `algorithmic-bias.webp`
- **Rule**: Use kebab-case, match article slug exactly

### Hero Images
- **Format**: `{path-name}-hero.webp`
- **Example**: `history-hero.webp`, `risk-hero.webp`
- **Rule**: Lowercase path name + `-hero`

### Break Cards
- **Format**: `{section-name}-break.webp`
- **Example**: `learning-paths-break.webp`
- **Rule**: Descriptive section name + `-break`

### Example Cards
- **Format**: `{company-or-case}-example.webp` or `{descriptive-name}.webp`
- **Example**: `amazon-hiring-bias.webp`, `uk-grading-algorithm.webp`
- **Rule**: Clear, descriptive name

### Resource Cards
- **Format**: `{resource-type}-{descriptor}.webp`
- **Example**: `risk-assessment-template.webp`, `aigp-study-guide.webp`
- **Rule**: Type + purpose

---

## Alt Text Best Practices

### Concept Cards
```tsx
alt="[Concept Name] - [Brief Description]"
// Example: "Algorithmic Bias - Balanced vs Unbalanced Scales Visualization"
```

### Hero Images
```tsx
alt="[Path Name] Learning Path Hero Image"
// Example: "History & Foundations Learning Path Hero Image"
```

### Example Cards
```tsx
alt="[Company/Case] - [Topic] Case Study"
// Example: "Amazon Hiring Algorithm - Employment Bias Case Study"
```

### Resource Cards
```tsx
alt="[Resource Name] - [Resource Type]"
// Example: "NIST AI Risk Management Framework - Assessment Template"
```

---

## Performance Optimization

### 1. Lazy Loading

```tsx
// Load above-the-fold images eagerly
<Image src="/images/heroes/history-hero.webp" priority={true} />

// Lazy load below-the-fold images (default)
<Image src="/images/history/ai-definition.webp" loading="lazy" />
```

### 2. Responsive Sizes

```tsx
<Image
  src="/images/history/ai-definition.webp"
  alt="What AI Actually Is"
  width={1920}
  height={1280}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### 3. Blur Placeholder

```tsx
<Image
  src="/images/history/ai-definition.webp"
  alt="What AI Actually Is"
  width={1920}
  height={1280}
  placeholder="blur"
  blurDataURL="data:image/webp;base64,..." // Generated during build
/>
```

---

## File Size Guidelines

| Image Type | Target Size | Acceptable | Needs Optimization |
|------------|-------------|------------|-------------------|
| Concept Cards | <200KB | 200-300KB | >300KB |
| Hero Images | <250KB | 250-350KB | >350KB |
| Example Cards | <150KB | 150-250KB | >250KB |
| Resource Cards | <150KB | 150-250KB | >250KB |
| Break Cards | <250KB | 250-350KB | >350KB |

**Current Status**:
- ✅ 93 WebP images are over 200KB but most provide excellent quality/size balance
- ⚠️ 11 production images exceed 300KB and may benefit from further optimization

---

## Color Palette Reference

### Learning Path Colors (Earth Tones)

```css
:root {
  /* History Path */
  --color-history-primary: #936639;    /* Toffee Brown */
  --color-history-secondary: #7f4f24;  /* Saddle Brown */

  /* Terminology Path */
  --color-terminology-primary: #a68a64;  /* Camel */
  --color-terminology-secondary: #656d4a; /* Fern */

  /* Risk Path */
  --color-risk-primary: #582f0e;  /* Dark Walnut */
  --color-risk-secondary: #333d29; /* Charcoal */

  /* Responsibility Path */
  --color-responsibility-primary: #a4ac86;  /* Dry Sage */
  --color-responsibility-secondary: #656d4a; /* Fern */

  /* Future Path */
  --color-future-primary: #4285F4;  /* Blue */
  --color-future-secondary: #FBBC04; /* Yellow */
}
```

---

## Accessibility Guidelines

### 1. Always Provide Alt Text
- Descriptive, concise (150 characters max)
- Avoid "image of" or "picture of"
- Include relevant context

### 2. Text Contrast on Images
When overlaying text on images:
- Use semi-transparent overlays for readability
- Ensure WCAG AAA contrast (7:1 minimum)
- Test with both light and dark text

```css
.hero-with-text {
  position: relative;
}

.hero-with-text::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4); /* Dark overlay for light text */
}

.hero-text {
  position: relative;
  z-index: 1;
  color: #F5F5DC; /* Beige Ivory - ensures contrast */
}
```

### 3. Decorative Images
For purely decorative images:
```tsx
<Image src="/images/decoration.webp" alt="" aria-hidden="true" />
```

---

## Common Patterns

### 1. Concept Card in Learning Path

```tsx
interface ConceptCardProps {
  slug: string;
  title: string;
  path: 'history' | 'terminology' | 'risk' | 'responsibility' | 'future';
}

function ConceptCard({ slug, title, path }: ConceptCardProps) {
  return (
    <div className="concept-card">
      <Image
        src={`/images/${path}/${slug}.webp`}
        alt={`${title} - Concept Visualization`}
        width={1920}
        height={1280}
        className="concept-card-image"
      />
      <h3>{title}</h3>
    </div>
  );
}
```

### 2. Hero Section with Text Overlay

```tsx
function HeroSection({ path }: { path: string }) {
  return (
    <section className="hero">
      <Image
        src={`/images/heroes/${path}-hero.webp`}
        alt={`${path} Learning Path`}
        fill
        priority
        className="hero-background"
      />
      <div className="hero-content">
        <h1>Explore {path}</h1>
        <p>Learn about AI {path} fundamentals</p>
      </div>
    </section>
  );
}
```

### 3. Example Card Grid

```tsx
function ExampleGrid({ examples }: { examples: Example[] }) {
  return (
    <div className="example-grid">
      {examples.map(ex => (
        <div key={ex.id} className="example-card">
          <Image
            src={`/images/examples/${ex.slug}.webp`}
            alt={`${ex.company} - ${ex.topic} Case Study`}
            width={1200}
            height={800}
            className="example-image"
          />
          <h4>{ex.title}</h4>
        </div>
      ))}
    </div>
  );
}
```

---

## Troubleshooting

### Image Not Loading

1. **Check file path**: Ensure `/public` is not included in src
   ```tsx
   ✅ src="/images/history/ai-definition.webp"
   ❌ src="/public/images/history/ai-definition.webp"
   ```

2. **Verify file exists**: Check `/public/images/` directory

3. **Check Next.js config**: Ensure images domain is allowed
   ```js
   // next.config.js
   module.exports = {
     images: {
       domains: ['aidefence.com'],
     },
   }
   ```

### WebP Not Supported

Provide fallback:
```tsx
<picture>
  <source srcSet="/images/hero.webp" type="image/webp" />
  <img src="/images/hero.png" alt="..." />
</picture>
```

### Image Quality Issues

1. Check original source quality
2. Adjust WebP quality (currently 85)
3. Regenerate with higher quality if needed:
   ```bash
   node scripts/convert-images-to-webp.js --quality 90
   ```

---

## Image Manifest

Complete catalog of all images available in:
- **CSV Format**: `/docs/image-manifest.csv`
- **Columns**: Filename, Category, Path, Format, Size, Color Palette, Status

---

## Scripts

### Convert to WebP
```bash
node scripts/convert-images-to-webp.js
```

### Generate Manifest
```bash
node scripts/generate-image-manifest.js
```

---

## Epic 0 Image Statistics

| Metric | Value |
|--------|-------|
| **Total Production Images** | 179 |
| **Total with WebP** | 179 (100%) |
| **Original Size** | 1.3GB |
| **WebP Size** | 42MB |
| **Space Saved** | 96.8% |
| **Images <200KB** | 86 (48%) |
| **Images 200-300KB** | 63 (35%) |
| **Images >300KB** | 30 (17%) |

---

## Next Steps

1. ✅ All 179 production images created
2. ✅ All images converted to WebP
3. ✅ Image manifest generated
4. ⏭️ Integrate images into Next.js components
5. ⏭️ Add blur placeholders during build
6. ⏭️ Implement responsive image loading
7. ⏭️ Performance testing and optimization

---

**Questions?** Refer to:
- `/docs/image-manifest.csv` - Complete image catalog
- `/docs/learning-paths-color-system.md` - Color specifications
- `/docs/epic-0-image-generation-strategy.md` - Image strategy overview
