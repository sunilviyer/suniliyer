# Story 3.3: Implement MDX Compilation with Syntax Highlighting

Status: ready-for-dev

## Story

As a **reader**,
I want **markdown content rendered as HTML with syntax-highlighted code blocks**,
so that **I can read formatted articles with beautiful code examples**.

## Acceptance Criteria

**Given** markdown parsing is implemented
**When** I integrate next-mdx-remote and rehype-prism
**Then** MDX content compiles to React components
**And** Code blocks are syntax-highlighted using Prism.js
**And** Prism theme uses earth-tone colors (Moss Green background, Beige Ivory text)
**And** MDX supports all standard markdown elements (headings, lists, links, images, tables, blockquotes)
**And** The compilation happens at build time (SSG), not runtime
**And** Compiled MDX is returned for rendering in article components

## Tasks / Subtasks

- [ ] Install next-mdx-remote and rehype-prism dependencies (AC: #1, #2)
  - [ ] Run `npm install next-mdx-remote`
  - [ ] Run `npm install rehype-prism prismjs`
  - [ ] Run `npm install --save-dev @types/prismjs`
  - [ ] Verify exact versions in package.json (no ^ or ~)

- [ ] Update lib/markdown-parser.ts to compile MDX (AC: #1, #3)
  - [ ] Import `serialize` from 'next-mdx-remote/serialize'
  - [ ] Import `rehypePrism` from 'rehype-prism'
  - [ ] Import `MDXRemoteSerializeResult` type
  - [ ] Create new function: `compileMarkdownToMDX(content: string): Promise<MDXRemoteSerializeResult>`
  - [ ] Call `serialize(content, { mdxOptions: { rehypePlugins: [rehypePrism] } })`
  - [ ] Return the serialized MDX result

- [ ] Integrate MDX compilation into parseMarkdownFile (AC: #5, #6)
  - [ ] Update `parseMarkdownFile()` to call `compileMarkdownToMDX(content)`
  - [ ] Return type becomes: `Promise<{ frontmatter: Article; compiledContent: MDXRemoteSerializeResult }>`
  - [ ] Compilation happens at build time during file parsing
  - [ ] Store compiled MDX in CompiledArticle object (from types/article.ts)

- [ ] Create custom Prism theme with earth-tone colors (AC: #3)
  - [ ] Open `app/globals.css`
  - [ ] Add Prism theme section after design tokens
  - [ ] Define code block styling with Moss Green background (#8A9A5B or similar)
  - [ ] Define text color as Beige Ivory (#F5F5DC)
  - [ ] Define syntax highlighting colors using earth-tone palette:
    - Keywords: Dry Sage or Khaki Beige
    - Strings: Camel or Tan
    - Comments: Tertiary text color (muted)
    - Functions: Risk Frameworks color
    - Numbers: AI Laws color
  - [ ] Ensure theme works in both dark and light modes
  - [ ] Test code block readability and contrast

- [ ] Support all standard markdown elements (AC: #4)
  - [ ] Test headings (H1-H6) render correctly
  - [ ] Test lists (ordered, unordered, nested) render correctly
  - [ ] Test links render correctly with proper styling
  - [ ] Test images render correctly (will use Next.js Image component later)
  - [ ] Test tables render correctly with proper borders and spacing
  - [ ] Test blockquotes render correctly with left border accent
  - [ ] Test code blocks render with syntax highlighting
  - [ ] Test inline code renders with subtle background

- [ ] Add MDX component customization (optional enhancement)
  - [ ] Create custom components for markdown elements if needed
  - [ ] Example: Custom link component with external link indicator
  - [ ] Example: Custom heading component with anchor links
  - [ ] Pass custom components to serialize if implementing
  - [ ] Keep default components for MVP, defer customization to growth phase

- [ ] Test MDX compilation with sample content
  - [ ] Create test markdown file with all element types
  - [ ] Include code blocks in multiple languages (TypeScript, Python, bash, YAML)
  - [ ] Run compileMarkdownToMDX() on test content
  - [ ] Verify MDXRemoteSerializeResult is returned
  - [ ] Verify no compilation errors for valid markdown
  - [ ] Test with malformed markdown (verify error handling)

- [ ] Verify build-time compilation (AC: #5)
  - [ ] Ensure compilation happens during build, not on page load
  - [ ] Check that serialized MDX is static (no runtime MDX processing)
  - [ ] Verify bundle size impact is minimal (<200KB budget)

## Dev Notes

**Architecture Patterns:**
- **Library Selection**: next-mdx-remote + rehype-prism (ARCH-5)
- **Build-Time Processing**: Compilation happens during build, not runtime
- **File Naming**: kebab-case for utilities - `markdown-parser.ts` (ARCH-9)
- **Earth-Tone Prism Theme**: Custom theme using category colors from Story 2.1

**next-mdx-remote Library:**
- Official Next.js MDX solution for static content
- Compiles MDX at build time (SSG-friendly)
- Returns serializable JSON (no runtime compilation overhead)
- Supports rehype/remark plugins for extensibility

**rehype-prism Plugin:**
- Adds Prism.js syntax highlighting to code blocks
- Works with next-mdx-remote's rehype plugin system
- Applies highlighting at build time (no client-side JS for highlighting)
- Supports 200+ programming languages

**Custom Prism Theme (Earth-Tone Palette):**

Based on category colors from Story 2.1:
```css
/* Prism theme using earth-tone palette */
pre[class*="language-"] {
  background: var(--color-cat-auditing-assessment); /* Moss Green #8A9A5B */
  color: var(--color-text-primary); /* Beige Ivory in dark mode */
  padding: var(--space-md);
  border-radius: 4px;
  overflow-x: auto;
}

.token.keyword {
  color: var(--color-cat-risk-frameworks); /* Dry Sage #9FA99F */
}

.token.string {
  color: var(--color-cat-ai-laws); /* Camel #C19A6B */
}

.token.comment {
  color: var(--color-text-tertiary);
  font-style: italic;
}

.token.function {
  color: var(--color-cat-development-lifecycle); /* Khaki Beige #C3B091 */
}

.token.number {
  color: var(--color-cat-governance); /* Tan #D2B48C */
}
```

**MDX Compilation Flow:**
1. markdown-parser.ts reads file with gray-matter
2. Extracts frontmatter and content
3. Passes content to next-mdx-remote's `serialize()`
4. rehype-prism plugin runs during serialization
5. Returns MDXRemoteSerializeResult (serializable JSON)
6. Stored in CompiledArticle object for later rendering

**Rendering (Future Stories):**
- Story 6.3 will use `<MDXRemote>` component to render compiled MDX
- No compilation happens at runtime - just hydration of pre-compiled content
- Fast page loads, minimal JavaScript bundle

**TypeScript Integration:**
- Import `MDXRemoteSerializeResult` type from 'next-mdx-remote'
- Use in CompiledArticle interface (from types/article.ts)
- Type safety for compiled MDX content

### Project Structure Notes

**File Locations:**
- `lib/markdown-parser.ts` (modified from Story 3.2)
- `app/globals.css` (modified - add Prism theme section)

**Dependencies:**
- `next-mdx-remote` - MDX compilation for Next.js
- `rehype-prism` - Prism.js integration for rehype
- `prismjs` - Syntax highlighting library
- `@types/prismjs` - TypeScript types

**Integration Points:**
- Used by `lib/article-utils.ts` (Story 3.4) when building article objects
- Compiled MDX rendered by article pages (Epic 6)
- Prism theme defined in globals.css applies automatically

**No Conflicts Detected:**
- Story builds on 3.2 (enhances markdown-parser.ts)
- Uses CSS custom properties from Story 2.1 (category colors)
- Prepares rendering foundation for Epic 6

### References

- [Source: docs/architecture.md#Content Processing Pipeline] - next-mdx-remote + rehype-prism decision
- [Source: docs/architecture.md#Core Architectural Decisions] - MDX compilation approach
- [Source: docs/epics.md#Story 3.3] - Full acceptance criteria
- [Source: docs/prd.md#FR10] - Formatted markdown content requirement
- [Source: docs/prd.md#UX-1] - Earth-tone color palette for code blocks
- [Source: docs/prd.md#NFR-PERF-13] - Bundle size <200KB constraint

## Dev Agent Record

### Context Reference

<!-- Path(s) to story context XML will be added here by context workflow -->

### Agent Model Used

Claude Sonnet 4.5 (claude-sonnet-4-5-20250929)

### Debug Log References

### Completion Notes List

### File List
