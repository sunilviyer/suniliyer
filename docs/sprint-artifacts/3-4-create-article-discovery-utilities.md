# Story 3.4: Create Article Discovery Utilities

Status: ready-for-dev

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

- [ ] Create lib/article-utils.ts file (AC: #2)
  - [ ] Create file with proper imports (fs, path, Article types, markdown-parser)
  - [ ] Add file-level JSDoc documenting the module's purpose
  - [ ] Import necessary Node.js modules: `fs`, `path`
  - [ ] Import `parseMarkdownFile` from `@/lib/markdown-parser`
  - [ ] Import types: `Article`, `CompiledArticle` from `@/types/article`

- [ ] Define articles directory constant (AC: #4)
  - [ ] `const ARTICLES_DIR = path.join(process.cwd(), 'content', 'articles')`
  - [ ] Centralize directory path for easy maintenance
  - [ ] Use `process.cwd()` to get project root (works in any environment)

- [ ] Implement getAllArticles function (AC: #1, #4)
  - [ ] Function signature: `export async function getAllArticles(): Promise<CompiledArticle[]>`
  - [ ] Read all files from ARTICLES_DIR using `fs.readdirSync()` or `fs.promises.readdir()`
  - [ ] Filter for .md files only
  - [ ] For each .md file:
    - Call `parseMarkdownFile(filePath)` to get frontmatter and compiled content
    - Build CompiledArticle object
  - [ ] Sort articles by date field (descending - newest first)
  - [ ] Return array of CompiledArticle objects

- [ ] Implement getArticleBySlug function (AC: #2, #4, #6)
  - [ ] Function signature: `export async function getArticleBySlug(slug: string): Promise<CompiledArticle>`
  - [ ] Construct file path: `path.join(ARTICLES_DIR, ${slug}.md)`
  - [ ] Check if file exists using `fs.existsSync(filePath)`
  - [ ] If file doesn't exist: `throw new Error(`Article not found: ${slug}`)`
  - [ ] If file exists: call `parseMarkdownFile(filePath)`
  - [ ] Return CompiledArticle object
  - [ ] Follow error handling pattern (throw errors, don't catch)

- [ ] Implement getArticlesByCategory function (AC: #3, #4)
  - [ ] Function signature: `export async function getArticlesByCategory(category: string): Promise<CompiledArticle[]>`
  - [ ] Call `getAllArticles()` to get all articles
  - [ ] Filter articles where `article.category === category`
  - [ ] Return filtered array (already sorted by date from getAllArticles)
  - [ ] Optional: validate category against VALID_CATEGORIES before filtering

- [ ] Implement date sorting logic (AC: #1)
  - [ ] Parse date strings to Date objects for comparison
  - [ ] Add timezone to prevent date shifts: `new Date(article.date + 'T00:00:00')`
  - [ ] Sort descending: `articles.sort((a, b) => new Date(b.date + 'T00:00:00').getTime() - new Date(a.date + 'T00:00:00').getTime())`
  - [ ] Most recent articles appear first in array

- [ ] Ensure functions are pure and deterministic (AC: #5)
  - [ ] No side effects (no file writes, no external API calls)
  - [ ] Same input always produces same output
  - [ ] Read-only operations on filesystem
  - [ ] No random number generation or timestamp usage
  - [ ] Functions can be called multiple times safely

- [ ] Follow function naming patterns (ARCH-13)
  - [ ] Use verb-noun pattern: ✅ `getAllArticles()`, `getArticleBySlug()`, `getArticlesByCategory()`
  - [ ] Avoid: ❌ `articles()`, `article()`, `get()`

- [ ] Add comprehensive JSDoc documentation
  - [ ] Document what each function does
  - [ ] Document parameters and return types
  - [ ] Document @throws for error conditions
  - [ ] Document example usage
  - [ ] Document that functions run at build time

- [ ] Test article discovery functions
  - [ ] Create 2-3 test markdown files in /content/articles/
  - [ ] Run `getAllArticles()` and verify all articles are returned
  - [ ] Verify articles are sorted by date (newest first)
  - [ ] Run `getArticleBySlug('test-article')` and verify correct article is returned
  - [ ] Run `getArticleBySlug('non-existent')` and verify error is thrown
  - [ ] Run `getArticlesByCategory('AI Fundamentals')` and verify filtering works
  - [ ] Verify all returned objects match CompiledArticle interface

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

### File List
