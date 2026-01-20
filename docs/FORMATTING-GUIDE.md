# HTML & Content Formatting Guide

Complete reference for formatting article content in the AIDefence system.

---

## 📋 Table of Contents

1. [Content Format (JSON)](#content-format-json)
2. [HTML Formatting Rules](#html-formatting-rules)
3. [Card Marker Syntax](#card-marker-syntax)
4. [Resource Formatting](#resource-formatting)
5. [YAML to JSON Migration](#yaml-to-json-migration)
6. [Common Formatting Mistakes](#common-formatting-mistakes)

---

## Content Format (JSON)

### Overview

Articles are stored in the database with content as **JSON strings** in the `yaml_content` field (despite the field name, it stores JSON, not YAML).

### Complete JSON Structure

```json
{
  "tldr": "One-sentence summary of what readers will learn",

  "tags": [
    "Category 1",
    "Category 2",
    "Category 3"
  ],

  "readTime": "8 min read",
  "updatedDate": "January 2025",
  "headerImage": "/images/path/article-slug.webp",

  "content": "<h2 class=\"content-h2\">...</h2><div class=\"content-p\">...</div>",

  "keyLearnings": [
    "First key takeaway",
    "Second important point",
    "Third critical insight"
  ],

  "additionalResources": [
    "Simple string resource",
    {
      "title": "Rich resource with metadata",
      "url": "https://example.com",
      "type": "pdf",
      "description": "Optional description"
    }
  ],

  "sources": [
    "Author (Year). Citation string",
    {
      "title": "Academic paper title",
      "author": "Author, A., et al.",
      "year": 2023,
      "url": "https://doi.org/...",
      "type": "article"
    }
  ]
}
```

### Field Requirements

| Field | Required | Type | Notes |
|-------|----------|------|-------|
| `tldr` | ✅ Yes | string | Keep to 1-2 sentences |
| `tags` | ✅ Yes | string[] | 3-4 tags recommended |
| `content` | ✅ Yes | string | HTML (see rules below) |
| `keyLearnings` | ✅ Yes | string[] | 3-5 points ideal |
| `readTime` | ⚠️ Recommended | string | Format: "X min read" |
| `updatedDate` | ⚠️ Recommended | string | Format: "Month YYYY" |
| `headerImage` | ⚠️ Recommended | string | Path: /images/path/file.webp |
| `additionalResources` | Optional | array | Can be strings or objects |
| `sources` | Optional | array | Can be strings or objects |

---

## HTML Formatting Rules

### 1. Section Headers (H2)

**✅ CORRECT:**
```html
<h2 class="content-h2"><span class="heading-decoration"></span>Section Title Here</h2>
```

**❌ WRONG:**
```html
<h2>Section Title</h2>  <!-- Missing class and span -->
<h2 class="content-h2">Title</h2>  <!-- Missing decoration span -->
<h1>...</h1>  <!-- Don't use H1 -->
<h3>...</h3>  <!-- Don't use H3 -->
```

**Key Points:**
- Always use `class="content-h2"`
- Always include `<span class="heading-decoration"></span>` BEFORE the title text
- Use for major sections only (3-5 sections per article)
- Never use H1, H3, H4, etc.

---

### 2. Paragraphs

**✅ CORRECT:**
```html
<div class="content-p">Your paragraph text here. Can include {{CARD|card-id|trigger text}} markers inline.</div>
```

**❌ WRONG:**
```html
<p>Paragraph text</p>  <!-- Use div, not p -->
<div>Missing class</div>  <!-- Missing content-p class -->
<div class="content-p">
  <p>Nested paragraph</p>  <!-- No nesting -->
</div>
```

**Key Points:**
- Use `<div class="content-p">` instead of `<p>`
- Each paragraph is a separate div
- Keep paragraphs 2-4 sentences
- Can contain card markers

---

### 3. Lists

**✅ CORRECT:**
```html
<ul class="content-ul">
  <li>First bullet point</li>
  <li>Second with {{CARD|card-id|inline card}} reference</li>
  <li>Third point</li>
</ul>
```

**❌ WRONG:**
```html
<ul>  <!-- Missing class -->
  <li>Item</li>
</ul>

<ol class="content-ul">  <!-- Don't use ordered lists -->
  <li>Item</li>
</ol>
```

**Key Points:**
- Use `<ul class="content-ul">` for lists
- Use standard `<li>` tags (no special class needed)
- Unordered lists only (no `<ol>`)
- Can include card markers in list items

---

### 4. Text Emphasis

**✅ CORRECT:**
```html
<div class="content-p">Text with <em>emphasized words</em> for subtle highlighting.</div>
```

**❌ WRONG:**
```html
<strong>Bold text</strong>  <!-- Never use strong -->
<b>Bold text</b>  <!-- Never use b -->
<i>Italic</i>  <!-- Use em instead -->
```

**Key Points:**
- Use `<em>` for emphasis (renders italic)
- **NEVER** use `<strong>` or `<b>` tags
- Keep emphasis minimal and purposeful
- No other text formatting allowed

---

### 5. Complete HTML Example

```html
<h2 class="content-h2"><span class="heading-decoration"></span>Understanding AI Systems</h2>

<div class="content-p">Artificial intelligence has evolved from {{CARD|ex-dartmouth-workshop|the 1956 Dartmouth workshop}} to today's sophisticated systems. The journey reveals critical insights about how machines learn.</div>

<div class="content-p">Modern AI relies on three key components that distinguish it from traditional software:</div>

<ul class="content-ul">
  <li>Data-driven learning instead of explicit programming</li>
  <li>Pattern recognition across vast datasets</li>
  <li>Autonomous decision-making capabilities</li>
</ul>

<div class="content-p">Organizations implementing {{CARD|fw-oecd-ai-principles|the OECD AI Principles}} demonstrate <em>responsible governance</em> practices.</div>

<h2 class="content-h2"><span class="heading-decoration"></span>Practical Implications</h2>

<div class="content-p">Understanding these fundamentals helps leaders make informed decisions about AI deployment and risk management.</div>
```

---

## Card Marker Syntax

### Basic Format

```
{{CARD|card-id|trigger text}}
```

### Components

| Component | Description | Example |
|-----------|-------------|---------|
| `{{CARD\|` | Opening marker (uppercase) | `{{CARD\|` |
| `card-id` | Card's database ID | `ex-dartmouth-workshop` |
| `\|` | Separator (pipe) | `\|` |
| `trigger text` | Clickable/hoverable text | `the 1956 Dartmouth workshop` |
| `}}` | Closing marker | `}}` |

### Card Type Prefixes

| Prefix | Type | Example Use |
|--------|------|-------------|
| `ex-` | Example/Case Study | `ex-deep-blue`, `ex-uber-fatality` |
| `concept-` | Concept/Definition | `concept-machine-learning`, `concept-rag` |
| `fw-` | Framework/Standard | `fw-oecd-ai-principles`, `fw-nist-rmf` |
| `res-` | Resource/Tool | `res-ai-incident-database` |
| `sc-` | Scenario | `sc-fake-professor-bio` |

### Placement Rules

**✅ CORRECT:**
```html
<div class="content-p">The {{CARD|ex-dartmouth-workshop|1956 Dartmouth workshop}} was pivotal.</div>

<li>Modern systems use {{CARD|concept-deep-learning|deep learning}} architectures</li>
```

**❌ WRONG:**
```html
<!-- Don't use in headings -->
<h2 class="content-h2"><span class="heading-decoration"></span>{{CARD|card-id|Title}}</h2>

<!-- Don't nest HTML in trigger -->
{{CARD|card-id|<strong>trigger</strong>}}

<!-- Don't use multiple cards on same trigger -->
{{CARD|card1|text}} {{CARD|card2|text}}
```

### Card Requirements Checklist

Before using a card marker:

- [ ] Card exists in `cards` table
- [ ] Card `status = 'published'`
- [ ] Article slug is in card's `used_in_articles` array
- [ ] Trigger text is 2-6 words
- [ ] Trigger text has no HTML tags
- [ ] Card is used at first mention of concept

---

## Resource Formatting

### Simple String Format (Backward Compatible)

```json
"additionalResources": [
  "OECD AI Principles - Comprehensive Framework",
  "Stanford HAI - AI Research Timeline"
]
```

### Rich Object Format

```json
"additionalResources": [
  {
    "title": "NIST AI Risk Management Framework",
    "url": "https://www.nist.gov/ai-rmf",
    "type": "pdf",
    "description": "Official US framework for AI risk management"
  },
  {
    "title": "AI Ethics Guidelines Tutorial",
    "url": "https://www.youtube.com/watch?v=example",
    "type": "video",
    "description": "90-minute comprehensive tutorial"
  },
  {
    "title": "Risk Assessment Template",
    "url": "/downloads/risk-template.xlsx",
    "type": "excel",
    "description": "Template for organizational AI risk assessment"
  }
]
```

### Resource Types

| Type | Icon | When to Use |
|------|------|-------------|
| `pdf` | 📄 | PDF documents, white papers |
| `excel` | 📊 | Spreadsheets, templates, data files |
| `video` | 🎥 | YouTube videos, tutorials |
| `article` | 📰 | Blog posts, news articles, papers |
| `website` | 🌐 | General websites, portals |
| `tool` | 🔧 | Interactive tools, calculators |
| `document` | 📝 | Other document types |

### Academic Citations (Sources)

```json
"sources": [
  // Simple citation string
  "McCarthy, J., et al. (1956). Dartmouth Summer Research Project Proposal",

  // Rich citation object
  {
    "title": "Concrete Problems in AI Safety",
    "author": "Amodei, D., Olah, C., Steinhardt, J., et al.",
    "year": 2016,
    "url": "https://arxiv.org/abs/1606.06565",
    "type": "article",
    "description": "Foundational paper on AI safety research areas"
  }
]
```

**Rendering:**
- Simple: Displays as-is
- Rich: Formats as "Author (Year). Title" with clickable link

---

## YAML to JSON Migration

### Why Migration is Needed

The database stores content as JSON in the `yaml_content` field. If you have legacy YAML files, they must be converted.

### Field Name Changes

| YAML Field | JSON Field | Notes |
|------------|------------|-------|
| `seo.description` | `tldr` | Extract from SEO section |
| `read_time` | `readTime` | Snake to camel case |
| `updated_date` | `updatedDate` | Snake to camel case |
| `header_image` | `headerImage` | Snake to camel case |
| `key_learnings` | `keyLearnings` | Snake to camel case |
| `additional_resources` | `additionalResources` | Snake to camel case |
| `sources` | `sources` | Same name, check format |
| `content` | `content` | Check HTML format |

### Migration Script

```typescript
import * as yaml from 'js-yaml';
import { readFileSync } from 'fs';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function migrateYAMLToJSON(yamlFilePath: string, slug: string) {
  // Read YAML file
  const yamlContent = readFileSync(yamlFilePath, 'utf-8');
  const parsed = yaml.load(yamlContent) as any;

  // Transform to JSON structure
  const content = {
    tldr: parsed.seo?.description || '',
    tags: parsed.tags || [],
    readTime: parsed.read_time || '',
    updatedDate: parsed.updated_date || '',
    headerImage: parsed.header_image || '',
    content: parsed.content || '',
    keyLearnings: parsed.key_learnings || [],
    additionalResources: parsed.additional_resources || [],
    sources: parsed.sources || []
  };

  // Fix HTML formatting
  let htmlContent = content.content;

  // Add required classes
  htmlContent = htmlContent.replace(
    /<h2>/g,
    '<h2 class="content-h2"><span class="heading-decoration"></span>'
  );
  htmlContent = htmlContent.replace(/<p>/g, '<div class="content-p">');
  htmlContent = htmlContent.replace(/<\/p>/g, '</div>');
  htmlContent = htmlContent.replace(/<ul>/g, '<ul class="content-ul">');

  // Remove forbidden tags
  htmlContent = htmlContent.replace(/<strong>([^<]*)<\/strong>/g, '$1');
  htmlContent = htmlContent.replace(/<b>([^<]*)<\/b>/g, '$1');

  // Convert card tags to markers
  htmlContent = htmlContent.replace(
    /<card[^>]+id="([^"]+)"[^>]*>([^<]+)<\/card>/g,
    '{{CARD|$1|$2}}'
  );

  content.content = htmlContent;

  // Update database
  await sql`
    UPDATE articles
    SET yaml_content = ${JSON.stringify(content)},
        updated_at = NOW()
    WHERE slug = ${slug}
  `;

  console.log(`✓ Migrated ${slug}`);
}

// Usage
migrateYAMLToJSON('path/to/article.yaml', 'article-slug');
```

### Validation After Migration

```typescript
async function validateMigration(slug: string) {
  const result = await sql`
    SELECT yaml_content FROM articles WHERE slug = ${slug}
  `;

  const content = JSON.parse(result[0].yaml_content);

  console.log('Validation:');
  console.log('✓ Required fields:', {
    tldr: !!content.tldr,
    tags: !!content.tags,
    content: !!content.content,
    keyLearnings: !!content.keyLearnings
  });

  // Check HTML formatting
  const hasCorrectH2 = content.content.includes('class="content-h2"');
  const hasCorrectP = content.content.includes('class="content-p"');
  const hasForbiddenStrong = content.content.includes('<strong>');

  console.log('✓ HTML formatting:', {
    correctH2: hasCorrectH2,
    correctP: hasCorrectP,
    noStrong: !hasForbiddenStrong
  });

  // Check card markers
  const cardMatches = content.content.match(/\{\{CARD\|([^|]+)\|[^}]+\}\}/g);
  console.log(`✓ Found ${cardMatches?.length || 0} card markers`);
}
```

---

## Common Formatting Mistakes

### 1. Wrong HTML Tags

**❌ WRONG:**
```html
<p>Paragraph</p>
<h3>Subheading</h3>
<strong>Bold</strong>
```

**✅ CORRECT:**
```html
<div class="content-p">Paragraph</div>
<h2 class="content-h2"><span class="heading-decoration"></span>Heading</h2>
<em>Emphasized</em>
```

### 2. Missing Classes

**❌ WRONG:**
```html
<h2>Section Title</h2>
<div>Paragraph</div>
<ul><li>Item</li></ul>
```

**✅ CORRECT:**
```html
<h2 class="content-h2"><span class="heading-decoration"></span>Section Title</h2>
<div class="content-p">Paragraph</div>
<ul class="content-ul"><li>Item</li></ul>
```

### 3. Incorrect Card Syntax

**❌ WRONG:**
```
{CARD|card-id|trigger}  <!-- Missing second { -->
{{card|card-id|trigger}}  <!-- Lowercase CARD -->
{{CARD:card-id:trigger}}  <!-- Wrong separator -->
{{CARD|card-id}}  <!-- Missing trigger -->
```

**✅ CORRECT:**
```
{{CARD|card-id|trigger text}}
```

### 4. Invalid JSON

**❌ WRONG:**
```json
{
  "tldr": "Summary",
  "tags": ["Tag1", "Tag2",]  // Trailing comma
}
```

```json
{
  "content": "<div class="content-p">Text</div>"  // Unescaped quotes
}
```

**✅ CORRECT:**
```json
{
  "tldr": "Summary",
  "tags": ["Tag1", "Tag2"]
}
```

```json
{
  "content": "<div class=\"content-p\">Text</div>"
}
```

### 5. Malformed Resources

**❌ WRONG:**
```json
"additionalResources": [
  {
    "url": "https://example.com"  // Missing title
  }
]
```

**✅ CORRECT:**
```json
"additionalResources": [
  {
    "title": "Resource Title",
    "url": "https://example.com",
    "type": "website"
  }
]
```

---

## Validation Checklist

Before inserting article content:

### JSON Structure
- [ ] All required fields present (tldr, tags, content, keyLearnings)
- [ ] No trailing commas in arrays/objects
- [ ] Quotes properly escaped in HTML content
- [ ] Valid JSON (test with `JSON.parse()`)

### HTML Formatting
- [ ] All `<h2>` have `class="content-h2"` and decoration span
- [ ] All paragraphs use `<div class="content-p">`
- [ ] All lists use `<ul class="content-ul">`
- [ ] No `<strong>`, `<b>`, `<p>` tags
- [ ] Only `<em>` for emphasis

### Card Markers
- [ ] Correct syntax: `{{CARD|id|trigger}}`
- [ ] All cards exist in database
- [ ] All cards are published
- [ ] Trigger text is plain (no HTML)
- [ ] Cards linked to article

### Resources
- [ ] Objects have required `title` field
- [ ] URLs are valid
- [ ] Types match allowed values
- [ ] Citations have author and year (for sources)

---

## Quick Reference

**HTML Template:**
```html
<h2 class="content-h2"><span class="heading-decoration"></span>Title</h2>
<div class="content-p">Text {{CARD|id|trigger}} more text.</div>
<ul class="content-ul">
  <li>Item</li>
</ul>
<div class="content-p">Text with <em>emphasis</em>.</div>
```

**Card Marker:**
```
{{CARD|card-id|trigger text}}
```

**JSON Structure:**
```json
{
  "tldr": "Summary",
  "tags": ["Tag1", "Tag2"],
  "content": "<h2>...</h2>",
  "keyLearnings": ["Point 1"],
  "readTime": "8 min read",
  "updatedDate": "January 2025",
  "headerImage": "/images/path/file.webp",
  "additionalResources": [],
  "sources": []
}
```

---

## Related Documentation

- Complete Guide: [ARTICLES-TABLE-GUIDE.md](./ARTICLES-TABLE-GUIDE.md)
- Resources: [RESOURCE-STRUCTURE-GUIDE.md](./RESOURCE-STRUCTURE-GUIDE.md)
- Quick Reference: [QUICK-REFERENCE.md](./QUICK-REFERENCE.md)
- Templates: `scripts/templates/`

---

**Last Updated**: January 2025
