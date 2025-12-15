# Story 3.8: Create Sample Article for Testing

Status: ready-for-dev

## Story

As a **developer**,
I want **a sample markdown article with complete frontmatter**,
so that **I can test the entire content pipeline end-to-end**.

## Acceptance Criteria

**Given** all content utilities are implemented
**When** I create `/content/articles/sample-article.md`
**Then** the file includes complete frontmatter with all required fields
**And** Content includes examples of headings, lists, code blocks, tables, and blockquotes
**And** The article builds successfully without errors
**And** `getAllArticles()` returns the sample article
**And** `getArticleBySlug('sample-article')` returns the parsed article
**And** Related articles algorithm runs successfully (even if returns empty array)
**And** SEO metadata generates correctly

## Tasks / Subtasks

- [ ] Create content/articles directory (AC: #3)
  - [ ] Create `/content/articles/` directory if it doesn't exist
  - [ ] Add `.gitkeep` file to preserve directory in git (if empty)
  - [ ] This is where all markdown articles will live

- [ ] Create sample-article.md with complete frontmatter (AC: #1)
  - [ ] Create `/content/articles/sample-article.md` file
  - [ ] Add all required frontmatter fields:
    - `title`: "Understanding Large Language Models"
    - `category`: "AI Fundamentals" (must match VALID_CATEGORIES)
    - `tags`: ["llm", "transformer", "neural-networks"]
    - `date`: "2025-12-14" (YYYY-MM-DD format)
    - `reading_time`: 8 (integer)
    - `excerpt`: "A comprehensive guide to understanding large language models and how they power modern AI applications."
  - [ ] Add optional SEO fields for testing:
    - `seo_title`: "LLMs Explained - Complete Guide to Large Language Models"
    - `seo_description`: "Learn about large language models, transformer architecture, and neural networks in this comprehensive guide."
    - `related_context`: "transformer architecture attention mechanism pretraining fine-tuning neural networks deep learning"

- [ ] Add article content with markdown examples (AC: #2)
  - [ ] H1 heading: "# Understanding Large Language Models"
  - [ ] H2 heading: "## What are Large Language Models?"
  - [ ] H3 heading: "### Key Components"
  - [ ] Paragraph text with multiple sentences
  - [ ] Unordered list with 3-4 items
  - [ ] Ordered list with 3-4 items
  - [ ] Code block (TypeScript example)
  - [ ] Code block (Python example)
  - [ ] Inline code examples
  - [ ] Table with 3 columns and 3-4 rows
  - [ ] Blockquote with multi-line text
  - [ ] Links to external resources
  - [ ] Bold and italic text formatting

- [ ] Add code block examples for syntax highlighting (AC: #2)
  - [ ] TypeScript code block:
    ```typescript
    interface Article {
      title: string;
      slug: string;
      category: string;
    }
    ```
  - [ ] Python code block:
    ```python
    def train_model(data):
        model = Transformer()
        return model.fit(data)
    ```
  - [ ] Bash command example:
    ```bash
    npm install next-mdx-remote
    ```

- [ ] Add table example (AC: #2)
  - [ ] Create comparison table:
    | Model | Parameters | Release Year |
    |-------|-----------|--------------|
    | GPT-3 | 175B | 2020 |
    | GPT-4 | Unknown | 2023 |
    | Claude | Unknown | 2023 |

- [ ] Add blockquote example (AC: #2)
  - [ ] Add quote about AI:
    > "Large language models represent a paradigm shift in artificial intelligence. They demonstrate emergent capabilities that weren't explicitly programmed, showing us new possibilities for human-AI collaboration."

- [ ] Test article parsing (AC: #4, #5, #6)
  - [ ] Run `npm run build` (or test parseMarkdownFile directly)
  - [ ] Verify no errors during frontmatter parsing
  - [ ] Verify no errors during MDX compilation
  - [ ] Verify syntax highlighting works on code blocks
  - [ ] Call `getAllArticles()` and verify sample article is returned
  - [ ] Call `getArticleBySlug('sample-article')` and verify article is returned
  - [ ] Verify article.slug === 'sample-article'
  - [ ] Verify article.date === '2025-12-14'
  - [ ] Verify article.category === 'AI Fundamentals'

- [ ] Test related articles algorithm (AC: #6)
  - [ ] Run `getRelatedArticles(sampleArticle, [sampleArticle])`
  - [ ] Verify returns empty array (only 1 article exists)
  - [ ] Create second sample article with similar tags
  - [ ] Run algorithm again, verify second article is returned as related
  - [ ] Verify scoring logic works (tag matches, keyword similarity)

- [ ] Test SEO metadata generation (AC: #7)
  - [ ] Run `generateMetadata(sampleArticle)`
  - [ ] Verify seo_title is used (not default title)
  - [ ] Verify seo_description is used (not default excerpt)
  - [ ] Verify Open Graph fields are populated
  - [ ] Verify JSON-LD structured data is generated
  - [ ] Verify canonical URL is correct

- [ ] Test sitemap generation (AC: #3)
  - [ ] Run `node scripts/generate-sitemap.js`
  - [ ] Verify sample article appears in sitemap.xml
  - [ ] Verify URL is https://www.suniliyer.ca/articles/sample-article
  - [ ] Verify lastmod date is 2025-12-14

## Dev Notes

**Architecture Patterns:**
- **Content Directory**: `/content/articles/` for all markdown files
- **Filename Convention**: kebab-case slug.md (e.g., `sample-article.md`)
- **Frontmatter Format**: YAML with snake_case field names
- **Markdown Flavor**: GitHub Flavored Markdown (GFM)

**Sample Article Purpose:**
- End-to-end testing of content pipeline
- Visual verification of markdown rendering
- Testing for developers during Epic 3 implementation
- Foundation for Epic 5 and Epic 6 article display

**Content Strategy:**
- Topic: Large Language Models (fits AI Fundamentals category)
- Comprehensive enough to test all markdown features
- Real content (not Lorem Ipsum) for authentic testing
- ~600-800 words to match typical article length

**Sample Article Structure:**
```markdown
---
title: "Understanding Large Language Models"
category: "AI Fundamentals"
tags: ["llm", "transformer", "neural-networks"]
date: "2025-12-14"
reading_time: 8
excerpt: "A comprehensive guide to understanding large language models and how they power modern AI applications."
seo_title: "LLMs Explained - Complete Guide to Large Language Models"
seo_description: "Learn about large language models, transformer architecture, and neural networks in this comprehensive guide."
related_context: "transformer architecture attention mechanism pretraining fine-tuning neural networks deep learning"
---

# Understanding Large Language Models

Large language models (LLMs) have revolutionized artificial intelligence...

## What are Large Language Models?

LLMs are neural networks trained on vast amounts of text data...

### Key Components

1. **Transformer Architecture**: The foundation of modern LLMs
2. **Attention Mechanism**: Allows models to focus on relevant context
3. **Massive Scale**: Billions of parameters enable complex understanding

...
```

**Testing Checklist:**
- ✅ Frontmatter parses without errors
- ✅ All required fields present and valid
- ✅ Category matches VALID_CATEGORIES
- ✅ Date format is YYYY-MM-DD
- ✅ MDX compiles successfully
- ✅ Code blocks syntax-highlight correctly
- ✅ Tables render properly
- ✅ Blockquotes style correctly
- ✅ getAllArticles() returns article
- ✅ getArticleBySlug() returns article
- ✅ Related articles algorithm runs
- ✅ SEO metadata generates
- ✅ Sitemap includes article URL

### Project Structure Notes

**File Location:**
- `/content/articles/sample-article.md` (new file)
- First article in content directory

**Directory Creation:**
- Create `/content` directory if needed
- Create `/content/articles` subdirectory
- Add `.gitkeep` if directory will be empty initially

**Content Ownership:**
- Sample article is test content, not production content
- Can be replaced with real article in Growth phase
- Serves as template for future article authoring

**Integration Points:**
- Tests entire Epic 3 content pipeline
- Prepares for Epic 5 (article grid display)
- Prepares for Epic 6 (expandable article reading)

**No Conflicts Detected:**
- Story tests all previous Epic 3 stories (3.1-3.7)
- Validates end-to-end content pipeline
- Foundation for visual testing in Epic 5 and Epic 6

### References

- [Source: docs/architecture.md#Project Structure] - Content directory location
- [Source: docs/architecture.md#Naming Patterns] - Frontmatter schema examples
- [Source: docs/architecture.md#Format Patterns] - Article metadata structure
- [Source: docs/epics.md#Story 3.8] - Full acceptance criteria
- [Source: docs/prd.md#FR23] - Markdown files with frontmatter
- [Source: docs/prd.md#FR10] - All markdown elements (headings, lists, code, tables, blockquotes)

## Dev Agent Record

### Context Reference

<!-- Path(s) to story context XML will be added here by context workflow -->

### Agent Model Used

Claude Sonnet 4.5 (claude-sonnet-4-5-20250929)

### Debug Log References

### Completion Notes List

### File List
