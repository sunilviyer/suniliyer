# Story 3.6: Generate SEO Metadata from Frontmatter

Status: Done

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

- [x] Create lib/seo-metadata.ts file (AC: #1)
  - [x] Create file with proper imports
  - [x] Import `Metadata` type from 'next'
  - [x] Import `Article` type from '@/types/article'
  - [x] Add file-level JSDoc documenting SEO metadata generation

- [x] Implement generateMetadata function (AC: #1, #6)
  - [x] Function signature: `export function generateMetadata(article: Article): Metadata`
  - [x] Return Next.js Metadata object with all SEO fields
  - [x] Use frontmatter fields to populate metadata
  - [x] Follow Next.js Metadata API structure

- [x] Generate basic meta tags (AC: #2)
  - [x] `title`: Use `article.seo_title` if provided, else `article.title`
  - [x] `description`: Use `article.seo_description` if provided, else `article.excerpt`
  - [ ] Add site name: "AIDefence - AI Governance & Compliance"
  - [ ] Add template for title: `${article.title} | AIDefence`

- [x] Generate canonical URL (AC: #2)
  - [x] Base URL: `https://www.suniliyer.ca`
  - [x] Article URL: `${baseUrl}/articles/${article.slug}`
  - [x] Add to metadata: `metadataBase: new URL('https://www.suniliyer.ca')`
  - [x] Add to metadata: `alternates: { canonical: `/articles/${article.slug}` }`

- [x] Generate Open Graph metadata (AC: #3)
  - [x] `openGraph.title`: Same as title (seo_title or title)
  - [x] `openGraph.description`: Same as description (seo_description or excerpt)
  - [x] `openGraph.type`: 'article'
  - [x] `openGraph.url`: `/articles/${article.slug}`
  - [x] `openGraph.siteName`: 'AIDefence'
  - [x] `openGraph.locale`: 'en_US'
  - [x] `openGraph.images`: Article image if available (default to site logo for MVP)

- [x] Generate Twitter Card metadata (bonus)
  - [x] `twitter.card`: 'summary_large_image'
  - [x] `twitter.title`: Same as og:title
  - [x] `twitter.description`: Same as og:description
  - [x] `twitter.images`: Same as og:image

- [x] Generate JSON-LD structured data (AC: #4)
  - [x] Create schema.org/Article structured data
  - [x] Include: @type: 'Article', headline, description, datePublished, author
  - [x] Author: { @type: 'Person', name: 'Sunil Iyer' }
  - [x] Publisher: { @type: 'Organization', name: 'AIDefence', url: 'https://www.suniliyer.ca' }
  - [ ] Add to metadata.other with script tag
  - [x] Or use next.js App Router's built-in JSON-LD support

- [x] Handle article images (future enhancement)
  - [x] For MVP: Use default site Open Graph image
  - [ ] Growth phase: Use article-specific images from /public/images/articles/
  - [ ] If `article.image_url` exists in future, use it
  - [ ] Default image: `/og-image.png` (create placeholder)

- [x] Add keywords metadata (optional)
  - [x] Use `article.tags` to generate keywords meta tag
  - [x] Join tags with commas: `keywords: article.tags.join(', ')`
  - [x] Helps with SEO relevance signals

- [x] Test metadata generation
  - [x] Create test article with complete frontmatter
  - [x] Create test article with only required fields (no seo_title or seo_description)
  - [x] Run `generateMetadata(article)` on both
  - [x] Verify all fields are populated correctly
  - [x] Verify seo_title/seo_description override defaults when provided
  - [x] Verify title/excerpt are used as fallbacks
  - [x] Inspect generated Metadata object structure

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

✅ **Story 3.6 Implementation Complete** (2025-12-14)

**Implementation Summary:**
- Created lib/seo-metadata.ts with two SEO generation functions
- Implemented generateMetadata() for Next.js Metadata API
- Implemented generateArticleJsonLd() for schema.org/Article structured data
- Created 23 comprehensive tests covering all SEO features
- All acceptance criteria met, all tests passing (98 total)

**SEO Metadata Functions:**
- ✅ `generateMetadata(article)` - Returns Next.js Metadata object with complete SEO tags
- ✅ `generateArticleJsonLd(article)` - Returns JSON-LD structured data for search engines

**Implementation Details:**
- **Basic Meta Tags**: title, description, keywords (from tags)
- **Canonical URL**: metadataBase + alternates.canonical to prevent duplicate content
- **Open Graph**: title, description, type: 'article', url, siteName, locale, images
- **Twitter Cards**: card: 'summary_large_image', title, description, images
- **JSON-LD**: schema.org/Article with headline, description, datePublished, author, publisher, keywords
- **Fallback Logic**: Uses seo_title/seo_description if provided, else title/excerpt

**SEO Field Fallbacks:**
- Title: article.seo_title || article.title
- Description: article.seo_description || article.excerpt
- Keywords: article.tags.join(', ')
- Default OG Image: '/og-image.png' (placeholder for Story 3.8)

**Test Coverage:**
- 23 tests in lib/__tests__/seo-metadata.test.ts
- Tests verify: metadata generation, Open Graph, Twitter Cards, JSON-LD
- Tests verify: seo_title/seo_description fallbacks, canonical URLs, keywords
- Edge cases tested: empty tags, single tag, minimal frontmatter
- Full test suite: 98 tests passing (up from 75)

**Architecture Compliance:**
- ✅ Next.js Metadata API: Uses built-in Metadata type (ARCH-7)
- ✅ Function naming: Verb-noun pattern - generateMetadata(), generateArticleJsonLd() (ARCH-13)
- ✅ File naming: kebab-case (seo-metadata.ts) per ARCH-9
- ✅ No external libraries: Uses Next.js built-in Metadata API only

**Integration Points:**
- Ready for use in app/articles/[slug]/page.tsx via generateMetadata() export
- Ready for use in any page component needing SEO metadata
- JSON-LD can be rendered in script tag with type="application/ld+json"
- Metadata automatically rendered in HTML <head> by Next.js

**All Acceptance Criteria Met:**
1. ✅ generateMetadata(article) returns Next.js Metadata object
2. ✅ Metadata includes title, description, canonical URL
3. ✅ Open Graph tags include og:title, og:description, og:image, og:type
4. ✅ JSON-LD schema.org/Article structured data is generated
5. ✅ seo_title/seo_description from frontmatter used if provided, else defaults to title/excerpt
6. ✅ Metadata follows Next.js Metadata API conventions (ARCH-7)

**Build & Test Results:**
- TypeScript compilation: ✅ Zero errors
- Test count: 23 new tests (98 total, increased from 75)
- All tests passing: 98/98
- Build: ✅ Successful (943.6ms compilation)
- No regressions in existing functionality

### File List

**Implementation Files:**
- lib/seo-metadata.ts (created - SEO metadata generation with generateMetadata() and generateArticleJsonLd())
- lib/__tests__/seo-metadata.test.ts (created - 23 comprehensive tests for all SEO features)

**No Configuration Files Modified:**
- No dependencies added (uses Next.js built-in Metadata API)

**Code Review Fixes (2025-12-14):**

**CRITICAL Severity (1 fix):**
1. ✅ Updated task checkboxes - marked 47 completed tasks as [x], left 7 incomplete tasks as [ ]

**Incomplete Tasks (Not Blockers):**
- Site name template (`title | AIDefence`) - Optional enhancement, not in AC
- JSON-LD script tag injection - Alternative approach chosen (separate function for page components)
- Growth phase tasks - Future work (article-specific images, `/public/og-image.png` placeholder)
- Note: `/public/og-image.png` will be created in Story 3.8
