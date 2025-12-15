# Story 3.6: Generate SEO Metadata from Frontmatter

Status: ready-for-dev

## Story

As a **search engine**,
I want **HTML meta tags, Open Graph data, and JSON-LD structured data**,
so that **I can properly index and display articles in search results**.

## Acceptance Criteria

**Given** article utilities exist
**When** I create `lib/seo-metadata.ts`
**Then** `generateMetadata(article: Article)` returns Next.js Metadata object
**And** Metadata includes title, description, canonical URL
**And** Open Graph tags include og:title, og:description, og:image, og:type
**And** JSON-LD schema.org/Article structured data is generated
**And** seo_title and seo_description from frontmatter are used if provided, else defaults to title/excerpt
**And** Metadata follows Next.js Metadata API conventions (ARCH-7)

## Tasks / Subtasks

- [ ] Create lib/seo-metadata.ts file (AC: #1)
  - [ ] Create file with proper imports
  - [ ] Import `Metadata` type from 'next'
  - [ ] Import `Article` type from '@/types/article'
  - [ ] Add file-level JSDoc documenting SEO metadata generation

- [ ] Implement generateMetadata function (AC: #1, #6)
  - [ ] Function signature: `export function generateMetadata(article: Article): Metadata`
  - [ ] Return Next.js Metadata object with all SEO fields
  - [ ] Use frontmatter fields to populate metadata
  - [ ] Follow Next.js Metadata API structure

- [ ] Generate basic meta tags (AC: #2)
  - [ ] `title`: Use `article.seo_title` if provided, else `article.title`
  - [ ] `description`: Use `article.seo_description` if provided, else `article.excerpt`
  - [ ] Add site name: "AIDefence - AI Governance & Compliance"
  - [ ] Add template for title: `${article.title} | AIDefence`

- [ ] Generate canonical URL (AC: #2)
  - [ ] Base URL: `https://www.suniliyer.ca`
  - [ ] Article URL: `${baseUrl}/articles/${article.slug}`
  - [ ] Add to metadata: `metadataBase: new URL('https://www.suniliyer.ca')`
  - [ ] Add to metadata: `alternates: { canonical: `/articles/${article.slug}` }`

- [ ] Generate Open Graph metadata (AC: #3)
  - [ ] `openGraph.title`: Same as title (seo_title or title)
  - [ ] `openGraph.description`: Same as description (seo_description or excerpt)
  - [ ] `openGraph.type`: 'article'
  - [ ] `openGraph.url`: `/articles/${article.slug}`
  - [ ] `openGraph.siteName`: 'AIDefence'
  - [ ] `openGraph.locale`: 'en_US'
  - [ ] `openGraph.images`: Article image if available (default to site logo for MVP)

- [ ] Generate Twitter Card metadata (bonus)
  - [ ] `twitter.card`: 'summary_large_image'
  - [ ] `twitter.title`: Same as og:title
  - [ ] `twitter.description`: Same as og:description
  - [ ] `twitter.images`: Same as og:image

- [ ] Generate JSON-LD structured data (AC: #4)
  - [ ] Create schema.org/Article structured data
  - [ ] Include: @type: 'Article', headline, description, datePublished, author
  - [ ] Author: { @type: 'Person', name: 'Sunil Iyer' }
  - [ ] Publisher: { @type: 'Organization', name: 'AIDefence', url: 'https://www.suniliyer.ca' }
  - [ ] Add to metadata.other with script tag
  - [ ] Or use next.js App Router's built-in JSON-LD support

- [ ] Handle article images (future enhancement)
  - [ ] For MVP: Use default site Open Graph image
  - [ ] Growth phase: Use article-specific images from /public/images/articles/
  - [ ] If `article.image_url` exists in future, use it
  - [ ] Default image: `/og-image.png` (create placeholder)

- [ ] Add keywords metadata (optional)
  - [ ] Use `article.tags` to generate keywords meta tag
  - [ ] Join tags with commas: `keywords: article.tags.join(', ')`
  - [ ] Helps with SEO relevance signals

- [ ] Test metadata generation
  - [ ] Create test article with complete frontmatter
  - [ ] Create test article with only required fields (no seo_title or seo_description)
  - [ ] Run `generateMetadata(article)` on both
  - [ ] Verify all fields are populated correctly
  - [ ] Verify seo_title/seo_description override defaults when provided
  - [ ] Verify title/excerpt are used as fallbacks
  - [ ] Inspect generated Metadata object structure

## Dev Notes

**Architecture Patterns:**
- **Next.js Metadata API**: Use built-in Metadata type (ARCH-7)
- **SEO Management**: Next.js Metadata API + custom metadata generation (Architecture decision)
- **Function Naming**: Verb-noun pattern - `generateMetadata()` (ARCH-13)
- **File Naming**: kebab-case - `seo-metadata.ts` (ARCH-9)

**Next.js Metadata API:**
- Next.js 13+ App Router provides built-in Metadata API
- Export `generateMetadata()` function from page.tsx
- Metadata object automatically generates HTML meta tags
- Type-safe with TypeScript Metadata type
- No need for external SEO library (next-seo not needed)

**Metadata Object Structure:**
```typescript
import { Metadata } from 'next';

export function generateMetadata(article: Article): Metadata {
  return {
    title: article.seo_title || article.title,
    description: article.seo_description || article.excerpt,
    metadataBase: new URL('https://www.suniliyer.ca'),
    alternates: {
      canonical: `/articles/${article.slug}`
    },
    openGraph: {
      title: article.seo_title || article.title,
      description: article.seo_description || article.excerpt,
      type: 'article',
      url: `/articles/${article.slug}`,
      siteName: 'AIDefence',
      locale: 'en_US',
      images: ['/og-image.png'] // Default site image for MVP
    },
    twitter: {
      card: 'summary_large_image',
      title: article.seo_title || article.title,
      description: article.seo_description || article.excerpt,
      images: ['/og-image.png']
    },
    keywords: article.tags.join(', ')
  };
}
```

**JSON-LD Structured Data:**
```typescript
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.excerpt,
  datePublished: article.date,
  author: {
    '@type': 'Person',
    name: 'Sunil Iyer',
    url: 'https://www.suniliyer.ca'
  },
  publisher: {
    '@type': 'Organization',
    name: 'AIDefence',
    url: 'https://www.suniliyer.ca'
  }
};
```

**SEO Field Defaults:**
- If `seo_title` provided in frontmatter → use it
- Else → use `title` field
- If `seo_description` provided → use it
- Else → use `excerpt` field
- This allows custom SEO optimization while having sensible defaults

**Open Graph Image:**
- For MVP: Create default `/public/og-image.png` (1200×630px recommended)
- Show AIDefence branding and tagline
- Growth phase: Generate article-specific images using Stable Diffusion
- Future frontmatter field: `image_url: /images/articles/article-slug.png`

**Usage in Pages:**
```typescript
// app/articles/[slug]/page.tsx
import { generateMetadata as generateSEOMetadata } from '@/lib/seo-metadata';
import { getArticleBySlug } from '@/lib/article-utils';
import { Metadata } from 'next';

export async function generateMetadata({ params }): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  return generateSEOMetadata(article);
}
```

### Project Structure Notes

**File Location:**
- `lib/seo-metadata.ts` (new file)
- Aligns with architecture: `/lib` for utility functions

**Dependencies:**
- `next` - Metadata type (already installed)
- `@/types/article` - Article interface
- No external SEO libraries needed

**Assets Needed:**
- `/public/og-image.png` - Default Open Graph image (create placeholder)
- 1200×630px recommended size for social sharing

**Integration Points:**
- Used by article pages (`app/articles/[slug]/page.tsx`) via `generateMetadata()` export
- Used by homepage (`app/page.tsx`) for site-level metadata
- Metadata automatically rendered in HTML <head> by Next.js

**No Conflicts Detected:**
- Story builds on 3.1 (uses Article interface)
- Story builds on 3.4 (uses article data from article-utils)
- Prepares SEO foundation for all pages

### References

- [Source: docs/architecture.md#SEO & Discoverability] - Next.js Metadata API decision
- [Source: docs/architecture.md#Core Architectural Decisions] - SEO Management approach
- [Source: docs/epics.md#Story 3.6] - Full acceptance criteria
- [Source: docs/prd.md#FR31] - HTML meta tags requirement
- [Source: docs/prd.md#FR32] - Open Graph metadata requirement
- [Source: docs/prd.md#FR33] - JSON-LD structured data requirement
- [Source: docs/prd.md#FR58] - Populate SEO metadata from frontmatter

## Dev Agent Record

### Context Reference

<!-- Path(s) to story context XML will be added here by context workflow -->

### Agent Model Used

Claude Sonnet 4.5 (claude-sonnet-4-5-20250929)

### Debug Log References

### Completion Notes List

### File List
