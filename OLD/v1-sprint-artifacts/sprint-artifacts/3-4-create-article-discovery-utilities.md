# Story 3.4: Create Article Discovery Utilities

Status: Done

## Story

As a **developer**,
I want **utility functions to retrieve all articles and individual articles by slug**,
so that **pages can access article data for display**.

## Acceptance Criteria

**Given** markdown parsing is implemented
**When** I create `lib/article-utils.ts`
**Then** `getAllArticles()` function returns array of all articles sorted by date (newest first)
**And** `getArticleBySlug(slug: string)` returns single article or throws error if not found
**And** `getArticlesByCategory(category: string)` returns filtered articles
**And** All functions use file system to read from `/content/articles/*.md`
**And** Functions are pure and deterministic (same input = same output)
**And** Error handling throws from utilities for components to catch

## Tasks / Subtasks

- [x] Create lib/article-utils.ts file (AC: #2)
  - [x] Create file with proper imports (fs, path, Article types, markdown-parser)
  - [x] Add file-level JSDoc documenting the module's purpose
  - [x] Import necessary Node.js modules: `fs`, `path`
  - [x] Import `parseAndCompileMarkdown` from `@/lib/markdown-parser`
  - [x] Import types: `Article`, `CompiledArticle` from `@/types/article`

- [x] Define articles directory constant (AC: #4)
  - [x] `const ARTICLES_DIR = path.join(process.cwd(), 'content', 'articles')`
  - [x] Centralize directory path for easy maintenance
  - [x] Use `process.cwd()` to get project root (works in any environment)

- [x] Implement getAllArticles function (AC: #1, #4)
  - [x] Function signature: `export async function getAllArticles(): Promise<CompiledArticle[]>`
  - [x] Read all files from ARTICLES_DIR using `fs.promises.readdir()`
  - [x] Filter for .md files only
  - [x] For each .md file:
    - Call `parseAndCompileMarkdown(filePath)` to get frontmatter and compiled content
    - Build CompiledArticle object
  - [x] Sort articles by date field (descending - newest first)
  - [x] Return array of CompiledArticle objects

- [x] Implement getArticleBySlug function (AC: #2, #4, #6)
  - [x] Function signature: `export async function getArticleBySlug(slug: string): Promise<CompiledArticle>`
  - [x] Construct file path: `path.join(ARTICLES_DIR, ${slug}.md)`
  - [x] Check if file exists using `fs.promises.access(filePath)`
  - [x] If file doesn't exist: `throw new Error(`Article not found: ${slug}`)`
  - [x] If file exists: call `parseAndCompileMarkdown(filePath)`
  - [x] Return CompiledArticle object
  - [x] Follow error handling pattern (throw errors, don't catch)

- [x] Implement getArticlesByCategory function (AC: #3, #4)
  - [x] Function signature: `export async function getArticlesByCategory(category: string): Promise<CompiledArticle[]>`
  - [x] Call `getAllArticles()` to get all articles
  - [x] Filter articles where `article.category === category`
  - [x] Return filtered array (already sorted by date from getAllArticles)
  - [x] No category validation needed - filter returns empty array for invalid categories

- [x] Implement date sorting logic (AC: #1)
  - [x] Parse date strings to Date objects for comparison
  - [x] Add timezone to prevent date shifts: `new Date(article.date + 'T00:00:00')`
  - [x] Sort descending: `articles.sort((a, b) => new Date(b.date + 'T00:00:00').getTime() - new Date(a.date + 'T00:00:00').getTime())`
  - [x] Most recent articles appear first in array

- [x] Ensure functions are pure and deterministic (AC: #5)
  - [x] No side effects (no file writes, no external API calls)
  - [x] Same input always produces same output
  - [x] Read-only operations on filesystem
  - [x] No random number generation or timestamp usage
  - [x] Functions can be called multiple times safely

- [x] Follow function naming patterns (ARCH-13)
  - [x] Use verb-noun pattern: ✅ `getAllArticles()`, `getArticleBySlug()`, `getArticlesByCategory()`
  - [x] Avoid: ❌ `articles()`, `article()`, `get()`

- [x] Add comprehensive JSDoc documentation
  - [x] Document what each function does
  - [x] Document parameters and return types
  - [x] Document @throws for error conditions
  - [x] Document example usage
  - [x] Document that functions run at build time

- [x] Test article discovery functions
  - [x] Create 2-3 test markdown files in /content/articles/
  - [x] Run `getAllArticles()` and verify all articles are returned
  - [x] Verify articles are sorted by date (newest first)
  - [x] Run `getArticleBySlug('test-article')` and verify correct article is returned
  - [x] Run `getArticleBySlug('non-existent')` and verify error is thrown
  - [x] Run `getArticlesByCategory('AI Fundamentals')` and verify filtering works
  - [x] Verify all returned objects match CompiledArticle interface

## Dev Notes

**Architecture Patterns:**
- **Function Naming**: Verb-noun pattern - `getAllArticles()`, `getArticleBySlug()` (ARCH-13)
- **Error Handling**: Throw errors from utilities for calling code to catch (ARCH-14)
- **Pure Functions**: Deterministic, no side effects (ARCH requirement)
- **File Naming**: kebab-case - `article-utils.ts` (ARCH-9)

**File System Access:**
- Use Node.js `fs` module (built-in, no installation needed)
- Read files synchronously or asynchronously based on preference
- `fs.readdirSync()` vs `fs.promises.readdir()` - either works
- Use `path.join()` for cross-platform path construction

**Content Directory Structure:**
```
content/
└── articles/
    ├── large-language-models.md
    ├── eu-ai-act-overview.md
    ├── risk-governance.md
    └── ...
```

**Date Sorting Logic:**
- Dates in frontmatter are YYYY-MM-DD strings
- Convert to Date objects for comparison
- Add 'T00:00:00' to prevent timezone shifts
- Sort descending (newest first) for `getAllArticles()`

**Error Handling Examples:**
```typescript
// File not found
throw new Error(`Article not found: ${slug}`);

// Invalid file format (caught by parseMarkdownFile)
// Error bubbles up from markdown-parser.ts
```

**Build-Time Execution:**
- These functions run during Next.js build process
- Used by `getStaticProps()` or `generateStaticParams()` in pages
- Not called at runtime (except in development mode)
- Errors fail the build, preventing deployment of broken site

**Performance Considerations:**
- `getAllArticles()` reads all articles every time it's called
- For MVP with ~13 articles, this is acceptable
- For 158 articles in production, consider caching if needed
- Build-time performance is less critical than runtime performance

### Project Structure Notes

**File Location:**
- `lib/article-utils.ts` (new file)
- Aligns with architecture: `/lib` for utility functions

**Dependencies:**
- `fs` - Node.js filesystem (built-in)
- `path` - Node.js path utilities (built-in)
- `@/lib/markdown-parser` - parseMarkdownFile() from Story 3.2
- `@/types/article` - Article, CompiledArticle interfaces from Story 3.1

**Content Directory:**
- `/content/articles/` - Markdown files with frontmatter
- Create this directory if it doesn't exist
- Add .gitkeep to preserve empty directory in git

**Integration Points:**
- Will be called by article pages in Epic 5 and Epic 6
- Used by sitemap generation script (Story 3.7)
- Used by related articles algorithm (Story 3.5)

**No Conflicts Detected:**
- Story builds on 3.1 (uses CompiledArticle interface)
- Story builds on 3.2 (uses parseMarkdownFile function)
- Story builds on 3.3 (benefits from MDX compilation)

### References

- [Source: docs/architecture.md#Naming Patterns] - Function naming (verb-noun pattern)
- [Source: docs/architecture.md#Process Patterns] - Error handling (throw from utilities)
- [Source: docs/architecture.md#Format Patterns] - Date sorting logic
- [Source: docs/architecture.md#Project Structure] - Content directory location
- [Source: docs/epics.md#Story 3.4] - Full acceptance criteria
- [Source: docs/prd.md#FR28] - Articles appear automatically after build
- [Source: docs/prd.md#FR5] - Articles organized by publication date

## Dev Agent Record

### Context Reference

<!-- Path(s) to story context XML will be added here by context workflow -->

### Agent Model Used

Claude Sonnet 4.5 (claude-sonnet-4-5-20250929)

### Debug Log References

### Completion Notes List

✅ **Story 3.4 Implementation Complete** (2025-12-14)

**Implementation Summary:**
- Created lib/article-utils.ts with 3 article discovery functions
- All functions use async/await with fs/promises for file operations
- Comprehensive JSDoc documentation with @throws and @example tags
- Created 7 passing tests covering all functions and edge cases
- All acceptance criteria met

**Article Discovery Functions:**
- ✅ `getAllArticles()` - Returns all articles sorted by date (newest first)
- ✅ `getArticleBySlug(slug)` - Returns single article or throws error if not found
- ✅ `getArticlesByCategory(category)` - Returns filtered articles by category

**Implementation Details:**
- Uses `parseAndCompileMarkdown()` from Story 3.3 for MDX compilation
- Date sorting includes timezone (`T00:00:00`) to prevent date shifts
- File existence check uses `fs.promises.access()` with try/catch
- All functions are pure and deterministic (no side effects)
- CompiledArticle objects include `related_articles: []` placeholder for Story 3.5

**Test Coverage:**
- 7 tests in lib/__tests__/article-utils.test.ts
- Tests verify: array return, date sorting, field presence, error handling, category filtering
- Created 2 test articles: test-neural-networks.md (2025-12-20), test-eu-ai-act.md (2025-11-01)
- All tests pass with mocked next-mdx-remote to avoid ESM issues
- Full test suite: 57 tests passing (no regressions)

**Architecture Compliance:**
- ✅ Function naming: verb-noun pattern (getAllArticles, getArticleBySlug) per ARCH-13
- ✅ Error handling: throw from utilities per ARCH-14
- ✅ File naming: kebab-case (article-utils.ts) per ARCH-9
- ✅ Pure functions: deterministic, no side effects per ARCH requirement

**All Acceptance Criteria Met:**
1. ✅ `getAllArticles()` returns array sorted by date (newest first)
2. ✅ `getArticleBySlug(slug)` returns single article or throws error
3. ✅ `getArticlesByCategory(category)` returns filtered articles
4. ✅ All functions read from `/content/articles/*.md`
5. ✅ Functions are pure and deterministic (same input = same output)
6. ✅ Error handling throws from utilities for components to catch

**Integration Points Ready:**
- lib/article-utils.ts can be used by article pages (Epic 5, Epic 6)
- Functions will be used by sitemap generation (Story 3.7)
- Functions will be used by related articles algorithm (Story 3.5)

**Code Review Fixes (2025-12-14):**

**HIGH Severity (2 fixes):**
1. ✅ Added slug validation to prevent path traversal attacks - regex pattern ensures lowercase kebab-case only
2. ✅ Added error handling for missing articles directory - descriptive error messages for ENOENT and other failures

**MEDIUM Severity (5 fixes):**
3. ✅ Optimized getArticlesByCategory() - now parses frontmatter first, filters, then compiles only matching articles (major performance improvement for large article counts)
4. ✅ Added category validation - throws error for invalid categories to catch typos early
5. ✅ Fixed test date parsing - tests now use same 'T00:00:00' timezone logic as implementation
6. ✅ Added comprehensive error handling tests - path traversal, invalid slugs, invalid categories, all valid categories
7. ✅ Updated File List documentation - explicitly listed markdown-parser.test.ts changes

**Bug Fixes:**
- Fixed variable shadowing in markdown-parser.test.ts (content vs compiledContent)
- Fixed lint warnings: removed `any` types, proper Article interface typing

### File List

**Implementation Files:**
- lib/article-utils.ts (created - article discovery functions with slug validation, error handling, category validation)
- lib/__tests__/article-utils.test.ts (created - 15 tests including security and error handling tests)

**Test Data Files:**
- content/articles/test-neural-networks.md (created - test article for date sorting and filtering)
- content/articles/test-eu-ai-act.md (created - test article for category filtering)

**Related Changes:**
- lib/__tests__/markdown-parser.test.ts (modified - fixed variable shadowing in parseAndCompileMarkdown tests, line 692 and 713)

**Configuration Files:**
- package.json (no changes - no new dependencies)
- package-lock.json (no changes)
