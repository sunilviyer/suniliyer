# Story 3.2: Implement Markdown Parsing with Frontmatter Extraction

Status: ready-for-dev

## Story

As a **content administrator**,
I want **markdown files with YAML frontmatter to be parsed automatically**,
so that **article metadata and content are separated and accessible**.

## Acceptance Criteria

**Given** the Article interface is defined
**When** I create `lib/markdown-parser.ts`
**Then** the library uses gray-matter to parse markdown files
**And** Frontmatter is extracted and validated against Article interface
**And** Markdown content body is separated from frontmatter
**And** Malformed frontmatter produces clear error messages (NFR-MAIN-6)
**And** Function naming follows verb-noun pattern: `parseMarkdownFile()`
**And** Errors are thrown from utilities (ARCH-14) for calling code to catch

## Tasks / Subtasks

- [ ] Install gray-matter dependency (AC: #1)
  - [ ] Run `npm install gray-matter`
  - [ ] Verify exact version is added to package.json (no ^ or ~)
  - [ ] Install types: `npm install --save-dev @types/gray-matter`

- [ ] Create lib/markdown-parser.ts file (AC: #2)
  - [ ] Create file with proper imports (gray-matter, Article type from @/types/article)
  - [ ] Add file-level JSDoc documenting the module's purpose

- [ ] Implement parseMarkdownFile function (AC: #1-3)
  - [ ] Function signature: `parseMarkdownFile(filePath: string): Promise<{ frontmatter: Article; content: string }>`
  - [ ] Read file from filesystem using `fs.readFileSync()` or `fs.promises.readFile()`
  - [ ] Parse with gray-matter: `matter(fileContent)`
  - [ ] Extract `data` (frontmatter) and `content` (markdown body)
  - [ ] Return both frontmatter and content as separate values

- [ ] Validate frontmatter against Article interface (AC: #2)
  - [ ] Check all required fields exist: title, category, tags, date, reading_time, excerpt
  - [ ] Validate category matches one of VALID_CATEGORIES (import from @/lib/constants)
  - [ ] Validate date format is YYYY-MM-DD using regex or Date parsing
  - [ ] Validate reading_time is a number
  - [ ] Validate tags is an array
  - [ ] Type the frontmatter data as Article (TypeScript will help catch issues)

- [ ] Add slug generation from filename (AC: #2)
  - [ ] Extract filename from filePath (remove .md extension)
  - [ ] Convert to lowercase kebab-case (already done by filename convention)
  - [ ] Add slug to returned frontmatter object
  - [ ] Example: "large-language-models.md" → slug: "large-language-models"

- [ ] Implement clear error messages for malformed frontmatter (AC: #4, NFR-MAIN-6)
  - [ ] If required field missing: `throw new Error('Missing required frontmatter field: ${field} in ${filePath}')`
  - [ ] If invalid category: `throw new Error('Invalid category "${category}" in ${filePath}. Must be one of: ${VALID_CATEGORIES.join(', ')}')`
  - [ ] If invalid date format: `throw new Error('Invalid date format "${date}" in ${filePath}. Must be YYYY-MM-DD')`
  - [ ] If reading_time not a number: `throw new Error('Invalid reading_time "${reading_time}" in ${filePath}. Must be a number')`
  - [ ] Include file path in all error messages for debugging

- [ ] Follow error handling pattern (AC: #6, ARCH-14)
  - [ ] Throw errors from utility functions (don't catch or console.error)
  - [ ] Let calling code (article-utils.ts) decide how to handle errors
  - [ ] Add JSDoc @throws annotations documenting possible errors

- [ ] Follow function naming pattern (AC: #5, ARCH-13)
  - [ ] Use verb-noun pattern: `parseMarkdownFile()` ✅
  - [ ] Avoid: `parse()`, `markdown()`, `getMarkdown()`, `parseMarkdownFileFromFilesystem()` ❌

- [ ] Test with sample markdown file
  - [ ] Create a test markdown file in /content/articles/ with complete frontmatter
  - [ ] Run parseMarkdownFile() on the test file
  - [ ] Verify frontmatter is extracted correctly
  - [ ] Verify content body is separated correctly
  - [ ] Test with malformed frontmatter (missing field, invalid category, etc.)
  - [ ] Verify error messages are clear and actionable

## Dev Notes

**Architecture Patterns:**
- **Function Naming**: Verb-noun pattern - `parseMarkdownFile()` (ARCH-13)
- **Error Handling**: Throw from utilities for calling code to catch (ARCH-14)
- **Frontmatter Validation**: Must match Article interface from Story 3.1
- **File Naming**: kebab-case for utilities - `markdown-parser.ts` (ARCH-9)

**gray-matter Library:**
- Industry-standard library for parsing YAML frontmatter
- Used by Next.js, Gatsby, and other static site generators
- Simple API: `matter(fileContent)` returns `{ data, content }`
- Handles edge cases: multiple frontmatter formats, empty frontmatter, etc.

**Frontmatter Validation Strategy:**
- **Required Field Check**: Verify all required fields exist before proceeding
- **Type Validation**: Check that field types match expectations (string, number, array)
- **Category Validation**: Must match VALID_CATEGORIES exactly (case-sensitive)
- **Date Format Validation**: Use regex `/^\d{4}-\d{2}-\d{2}$/` to validate YYYY-MM-DD
- **Clear Error Messages**: Include file path and specific issue for debugging (NFR-MAIN-6)

**Slug Generation:**
- Derive slug from filename (remove .md extension)
- Filenames already follow kebab-case convention (e.g., "large-language-models.md")
- No transformation needed - just remove extension
- Slug added to frontmatter object for convenience

**Error Message Examples:**
```typescript
// Missing field
throw new Error('Missing required frontmatter field: excerpt in /content/articles/my-article.md');

// Invalid category
throw new Error('Invalid category "ai fundamentals" in /content/articles/my-article.md. Must be one of: AI Fundamentals, Risks & Principles, ...');

// Invalid date
throw new Error('Invalid date format "12/14/2025" in /content/articles/my-article.md. Must be YYYY-MM-DD');
```

**TypeScript Type Safety:**
- Import Article interface from `@/types/article`
- Return type: `Promise<{ frontmatter: Article; content: string }>`
- TypeScript will catch missing or incorrect fields at compile time

### Project Structure Notes

**File Location:**
- `lib/markdown-parser.ts` (new file)
- Aligns with architecture: `/lib` for utility functions

**Dependencies:**
- `gray-matter` - YAML frontmatter parsing
- `@types/gray-matter` - TypeScript types
- `fs` or `fs/promises` - Node.js file system (built-in)
- `@/types/article` - Article interface (from Story 3.1)
- `@/lib/constants` - VALID_CATEGORIES for validation

**Integration Points:**
- Will be called by `lib/article-utils.ts` (Story 3.4) to parse all articles
- Used during build time to process markdown files
- Errors bubble up to build process (fail fast on invalid content)

**No Conflicts Detected:**
- Story builds on 3.1 (uses Article interface)
- Prepares parsing foundation for 3.3 (MDX compilation)

### References

- [Source: docs/architecture.md#Naming Patterns] - Function naming (verb-noun pattern)
- [Source: docs/architecture.md#Process Patterns] - Error handling (throw from utilities)
- [Source: docs/architecture.md#Naming Patterns] - Frontmatter schema (snake_case, YYYY-MM-DD)
- [Source: docs/architecture.md#Content Processing Pipeline] - gray-matter library decision
- [Source: docs/epics.md#Story 3.2] - Full acceptance criteria
- [Source: docs/prd.md#FR23] - Markdown files with frontmatter requirement
- [Source: docs/prd.md#NFR-MAIN-6] - Clear error messages for malformed frontmatter

## Dev Agent Record

### Context Reference

<!-- Path(s) to story context XML will be added here by context workflow -->

### Agent Model Used

Claude Sonnet 4.5 (claude-sonnet-4-5-20250929)

### Debug Log References

### Completion Notes List

### File List
