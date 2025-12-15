# Story 3.1: Define Article TypeScript Interface and Frontmatter Schema

Status: ready-for-dev

## Story

As a **developer**,
I want **a TypeScript interface defining the Article data structure**,
so that **all code has type safety and the frontmatter schema is clearly documented**.

## Acceptance Criteria

**Given** the project structure exists
**When** I create `types/article.ts`
**Then** the Article interface includes all required fields (title, slug, category, tags, date, reading_time, excerpt)
**And** Optional fields are defined (video_url, seo_title, seo_description, related_context)
**And** Frontmatter field naming uses snake_case (reading_time, not readingTime)
**And** Date format is documented as YYYY-MM-DD
**And** Category must be one of 11 valid categories (enforced by type union)
**And** The interface is exported for use across the application

## Tasks / Subtasks

- [ ] Create types directory and article.ts file (AC: #1)
  - [ ] Create `/types` directory if it doesn't exist
  - [ ] Create `/types/article.ts` file
  - [ ] Add file-level JSDoc comment documenting the purpose

- [ ] Import Category type from lib/constants (AC: #5)
  - [ ] Import `Category` type from `@/lib/constants`
  - [ ] This provides the 11 valid categories type union created in Story 2.4
  - [ ] Ensures category validation is centralized

- [ ] Define Article interface with required fields (AC: #2)
  - [ ] `title: string` - Article title from frontmatter
  - [ ] `slug: string` - URL-safe slug derived from filename
  - [ ] `category: Category` - One of 11 valid categories (from VALID_CATEGORIES)
  - [ ] `tags: string[]` - Array of tags for filtering and related articles
  - [ ] `date: string` - Publication date in YYYY-MM-DD format
  - [ ] `reading_time: number` - Estimated reading time in minutes (integer)
  - [ ] `excerpt: string` - Short description for article cards
  - [ ] Add JSDoc comments for each required field

- [ ] Define optional fields for SEO and videos (AC: #2)
  - [ ] `video_url?: string` - YouTube video URL if article has companion video
  - [ ] `seo_title?: string` - Custom SEO title (defaults to title if not provided)
  - [ ] `seo_description?: string` - Custom SEO description (defaults to excerpt if not provided)
  - [ ] `related_context?: string` - Keywords for algorithmic related article matching
  - [ ] Add JSDoc comments explaining when to use each optional field

- [ ] Document frontmatter schema in comments (AC: #3, #4)
  - [ ] Add comprehensive JSDoc block showing example frontmatter YAML
  - [ ] Document snake_case naming requirement (reading_time, not readingTime)
  - [ ] Document YYYY-MM-DD date format requirement
  - [ ] Document that category must match VALID_CATEGORIES exactly (Title Case)
  - [ ] Provide examples of valid and invalid frontmatter

- [ ] Export interface for application-wide use (AC: #6)
  - [ ] Export `Article` interface as named export
  - [ ] Ensure interface can be imported with `import { Article } from '@/types/article'`
  - [ ] Verify TypeScript path alias `@/*` is configured in tsconfig.json

- [ ] Add type for compiled article with MDX content
  - [ ] Import `MDXRemoteSerializeResult` from 'next-mdx-remote'
  - [ ] Create `CompiledArticle` interface extending `Article`
  - [ ] Add `content: MDXRemoteSerializeResult` field for compiled MDX
  - [ ] Add `related_articles: string[]` field for slugs of related articles (computed at build time)
  - [ ] This will be used by article-utils.ts and article pages

- [ ] Validate TypeScript compilation
  - [ ] Run `npx tsc --noEmit` to check for type errors
  - [ ] Ensure no errors in types/article.ts
  - [ ] Verify Category type import resolves correctly

## Dev Notes

**Architecture Patterns:**
- **TypeScript Interface Naming**: No prefix - use `Article`, not `IArticle` or `TArticle` (ARCH-12)
- **Frontmatter Naming**: snake_case for all fields (ARCH-10)
  - ✅ `reading_time`, `video_url`, `seo_title`
  - ❌ `readingTime`, `videoUrl`, `seoTitle`
- **Date Format**: YYYY-MM-DD in frontmatter (ARCH-15)
- **Category Validation**: Must match one of 11 categories exactly (ARCH-11)
- **Type Safety**: Use TypeScript unions and `as const` for strict validation

**Category Integration:**
- VALID_CATEGORIES array and Category type already exist in `lib/constants.ts` (from Story 2.4)
- Import and reuse the Category type - do NOT duplicate the category list
- This ensures single source of truth for category validation
- Categories: "AI Fundamentals", "Risks & Principles", "Legal Frameworks", "AI Laws", "Risk Frameworks", "Development Lifecycle", "Governance", "Auditing & Assessment", "Industry Perspectives", "Explainability", "Videos"

**Frontmatter Schema Documentation:**

The interface should include this JSDoc example:
```typescript
/**
 * Article interface representing a parsed markdown article with frontmatter.
 *
 * Frontmatter fields use snake_case naming (reading_time, not readingTime).
 * Date must be in YYYY-MM-DD format.
 * Category must match one of 11 valid categories exactly (Title Case).
 *
 * Example frontmatter:
 * ```yaml
 * title: "Large Language Models Explained"
 * category: "AI Fundamentals"
 * tags: ["llm", "transformer", "neural-networks"]
 * date: "2025-12-14"
 * reading_time: 8
 * excerpt: "A comprehensive guide to understanding large language models"
 * video_url: "https://youtube.com/watch?v=..."
 * seo_title: "LLMs Explained - Complete Guide"
 * seo_description: "Learn about LLMs, transformers, and neural networks"
 * related_context: "transformer architecture attention mechanism"
 * ```
 */
```

**MDX Integration:**
- `CompiledArticle` interface will extend `Article` with compiled MDX content
- Uses `MDXRemoteSerializeResult` from next-mdx-remote library (selected in architecture)
- This type will be used by:
  - `lib/markdown-parser.ts` (returns CompiledArticle after parsing)
  - `lib/article-utils.ts` (getAllArticles returns CompiledArticle[])
  - `app/articles/[slug]/page.tsx` (receives CompiledArticle for rendering)

**Build-Time Fields:**
- `related_articles` field added at build time by related-articles.ts
- Contains array of slugs for algorithmically-matched related articles
- Not in frontmatter - computed from tags and related_context fields

### Project Structure Notes

**File Location:**
- `types/article.ts` (new file in new directory)
- Aligns with architecture decision: `/types` for shared TypeScript interfaces

**Dependencies:**
- `lib/constants.ts` - Import Category type (already exists from Story 2.4)
- `next-mdx-remote` - Import MDXRemoteSerializeResult type (will be installed in Story 3.3)
- No runtime dependencies - this is purely type definitions

**Integration Points:**
- Will be used by `lib/markdown-parser.ts` (Story 3.2) for frontmatter parsing
- Will be used by `lib/article-utils.ts` (Story 3.4) for article CRUD operations
- Will be used by all article pages and components for type safety

**No Conflicts Detected:**
- Story builds on 2.4 (reuses VALID_CATEGORIES and Category type from lib/constants.ts)
- Prepares type foundation for Epic 3 content processing stories

**Path Alias Configuration:**
- Verify `tsconfig.json` has path alias `"@/*": ["./*"]` configured
- Enables clean imports: `import { Article } from '@/types/article'`

### References

- [Source: docs/architecture.md#Naming Patterns] - TypeScript interfaces (no prefix, PascalCase)
- [Source: docs/architecture.md#Naming Patterns] - Frontmatter schema (snake_case fields)
- [Source: docs/architecture.md#Format Patterns] - Date format (YYYY-MM-DD)
- [Source: docs/architecture.md#Naming Patterns] - Category values (11 defined, Title Case)
- [Source: docs/architecture.md#Format Patterns] - Article Metadata Structure (required/optional fields)
- [Source: docs/epics.md#Story 3.1] - Full acceptance criteria and story details
- [Source: docs/prd.md#FR24] - Frontmatter metadata specification requirement
- [Source: docs/prd.md#NFR-MAIN-5] - Frontmatter as single source of truth
- [Source: docs/prd.md#NFR-MAIN-8] - Frontmatter schema documentation requirement

## Dev Agent Record

### Context Reference

<!-- Path(s) to story context XML will be added here by context workflow -->

### Agent Model Used

Claude Sonnet 4.5 (claude-sonnet-4-5-20250929)

### Debug Log References

### Completion Notes List

### File List
