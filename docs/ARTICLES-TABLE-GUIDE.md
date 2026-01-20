# Articles Table Population Guide

Complete guide for adding and managing articles in the AIDefence database.

---

## Table of Contents

1. [Database Schema](#database-schema)
2. [Content Structure](#content-structure)
3. [HTML Formatting Rules](#html-formatting-rules)
4. [Card Markers](#card-markers)
5. [Adding New Articles](#adding-new-articles)
6. [Examples](#examples)
7. [Scripts and Tools](#scripts-and-tools)
8. [Best Practices](#best-practices)

---

## Database Schema

### Articles Table Structure

```sql
CREATE TABLE articles (
  -- System Fields (Auto-generated)
  id                 UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at         TIMESTAMP DEFAULT now(),
  updated_at         TIMESTAMP DEFAULT now(),

  -- Required Fields
  article_id         VARCHAR NOT NULL UNIQUE,     -- 'history-01', 'risk-02'
  title              VARCHAR NOT NULL,             -- 'What AI Actually Is'
  slug               VARCHAR NOT NULL UNIQUE,      -- 'what-ai-actually-is'
  path               VARCHAR NOT NULL,             -- 'history', 'risk', etc.
  position           INTEGER NOT NULL,             -- 1, 2, 3... (order in path)

  -- Content Field (JSON as text)
  yaml_content       TEXT,                         -- JSON string with article content

  -- Status & Publishing
  status             VARCHAR DEFAULT 'not_started', -- 'not_started', 'draft', 'published'
  processed_at       TIMESTAMP,
  published_at       TIMESTAMP,

  -- Navigation (Optional)
  prev_article_slug  VARCHAR,
  prev_article_title VARCHAR,
  next_article_slug  VARCHAR,
  next_article_title VARCHAR,

  -- External References (Optional)
  google_doc_id      VARCHAR,
  google_doc_url     TEXT,
  github_path        VARCHAR,
  github_url         TEXT
);
```

### Field Descriptions

#### Required Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `article_id` | VARCHAR | Unique identifier for the article | `history-01`, `risk-03` |
| `title` | VARCHAR | Display title | `What AI Actually Is` |
| `slug` | VARCHAR | URL-friendly identifier | `what-ai-actually-is` |
| `path` | VARCHAR | Learning path category | `history`, `risk`, `terminology`, `responsibility`, `future` |
| `position` | INTEGER | Order within path (1-indexed) | `1`, `2`, `3` |

#### Content Field

| Field | Type | Description |
|-------|------|-------------|
| `yaml_content` | TEXT | JSON string containing all article content (see Content Structure below) |

#### Status Fields

| Field | Type | Values | Default |
|-------|------|--------|---------|
| `status` | VARCHAR | `not_started`, `draft`, `published` | `not_started` |
| `processed_at` | TIMESTAMP | When content was last processed | `null` |
| `published_at` | TIMESTAMP | When article was published | `null` |

#### Navigation Fields (Optional)

These are used to link articles in a sequence:

| Field | Description |
|-------|-------------|
| `prev_article_slug` | Slug of previous article in path |
| `prev_article_title` | Title of previous article |
| `next_article_slug` | Slug of next article in path |
| `next_article_title` | Title of next article |

---

## Content Structure

The `yaml_content` field contains a **JSON string** with the following structure:

### TypeScript Interface

```typescript
interface ArticleContent {
  // Required
  tldr: string;                          // One-sentence summary
  tags: string[];                        // Category tags
  content: string;                       // HTML content with card markers

  // Recommended
  readTime: string;                      // '8 min read'
  updatedDate: string;                   // 'January 2025'
  headerImage: string;                   // '/images/history/ai-history.webp'
  keyLearnings: string[];                // Bullet points

  // Optional (but recommended)
  additionalResources: ResourceItem[];   // See Resource Structure Guide
  sources: ResourceItem[];               // See Resource Structure Guide
}

// Resource types (from RESOURCE-STRUCTURE-GUIDE.md)
type ResourceItem = string | {
  title: string;
  url?: string;
  type?: 'article' | 'video' | 'pdf' | 'excel' | 'document' | 'website' | 'tool';
  description?: string;
  author?: string;
  year?: number;
};
```

### Complete Example

```json
{
  "tldr": "Understand what artificial intelligence actually is, moving beyond the buzzwords to examine the OECD definition.",
  "tags": ["AI Fundamentals", "OECD Framework", "Governance Basics"],
  "readTime": "8 min read",
  "updatedDate": "January 2025",
  "headerImage": "/images/history/what-ai-actually-is.webp",

  "content": "<h2 class=\"content-h2\"><span class=\"heading-decoration\"></span>Section Title</h2>\n<div class=\"content-p\">First paragraph with {{CARD|ex-dartmouth-workshop|the 1956 Dartmouth workshop}} inline.</div>\n<div class=\"content-p\">Second paragraph...</div>",

  "keyLearnings": [
    "AI is a machine-based system that makes predictions and recommendations",
    "The OECD definition is the foundation for global AI governance",
    "Understanding AI requires distinguishing it from traditional automation"
  ],

  "additionalResources": [
    "OECD AI Principles - Comprehensive Framework",
    {
      "title": "NIST AI Risk Management Framework",
      "url": "https://www.nist.gov/ai-rmf",
      "type": "pdf",
      "description": "Official US government framework for AI risk management"
    }
  ],

  "sources": [
    "OECD (2019). Recommendation of the Council on Artificial Intelligence",
    {
      "title": "A Proposal for the Dartmouth Summer Research Project",
      "author": "McCarthy, J., et al.",
      "year": 1956,
      "url": "http://jmc.stanford.edu/articles/dartmouth/dartmouth.pdf",
      "type": "pdf"
    }
  ]
}
```

---

## HTML Formatting Rules

### Content HTML Structure

The `content` field uses **custom HTML classes** for consistent styling:

#### Headings (Sections)

```html
<h2 class="content-h2"><span class="heading-decoration"></span>Section Title</h2>
```

**Rules:**
- Always use `<h2>` with `class="content-h2"`
- Always include `<span class="heading-decoration"></span>` before title text
- Use for major sections only (3-5 sections per article)

#### Paragraphs

```html
<div class="content-p">Your paragraph text here.</div>
```

**Rules:**
- Use `<div class="content-p">` instead of `<p>`
- Each paragraph is a separate div
- Can contain inline card markers (see below)

#### Lists (Bullet Points)

```html
<ul class="content-ul">
  <li>First item</li>
  <li>Second item with {{CARD|concept-ml|machine learning}} inline</li>
  <li>Third item</li>
</ul>
```

**Rules:**
- Use `<ul class="content-ul">` for lists
- Use standard `<li>` tags
- Can include card markers in list items

#### Emphasis

```html
<div class="content-p">This is <em>emphasized text</em> for subtle highlighting.</div>
```

**Rules:**
- Use `<em>` for emphasis (renders as italic)
- **DO NOT** use `<strong>` or `<b>` tags
- Keep emphasis minimal and purposeful

#### Complete Example

```html
<h2 class="content-h2"><span class="heading-decoration"></span>What Everyone Gets Wrong About AI</h2>

<div class="content-p">Think about the last time you asked your phone a question. Behind that simple interaction lies something remarkable: a system trained on billions of examples. This is artificial intelligence at work.</div>

<div class="content-p">The {{CARD|fw-oecd-ai-principles|OECD definition}} provides clarity: AI is a machine-based system that can make predictions, recommendations, or decisions influencing real or virtual environments.</div>

<h2 class="content-h2"><span class="heading-decoration"></span>Why Definitions Matter</h2>

<div class="content-p">Governance requires precision. Here are the key components:</div>

<ul class="content-ul">
  <li>Machine-based systems (not human intelligence)</li>
  <li>Pattern recognition from data</li>
  <li>Autonomous decision-making capabilities</li>
</ul>

<div class="content-p">Understanding these distinctions helps leaders make <em>informed decisions</em> about AI deployment.</div>
```

---

## Card Markers

### Syntax

```
{{CARD|card-id|trigger text}}
```

**Components:**
- `CARD` - Marker type (always uppercase)
- `card-id` - The card's ID from the cards table
- `trigger text` - Text that appears as clickable/hoverable in the article

### Examples

```html
<div class="content-p">The {{CARD|ex-dartmouth-workshop|1956 Dartmouth workshop}} marked the birth of AI as a field.</div>

<div class="content-p">Modern systems use {{CARD|concept-deep-learning|deep learning}} to achieve unprecedented accuracy.</div>

<div class="content-p">Organizations should follow {{CARD|fw-oecd-ai-principles|the OECD AI Principles}} for responsible deployment.</div>
```

### Card Types

Cards are prefixed by type:

| Prefix | Type | Example |
|--------|------|---------|
| `ex-` | Example/Case Study | `ex-deep-blue`, `ex-uber-arizona-fatality` |
| `concept-` | Concept/Definition | `concept-machine-learning`, `concept-rag` |
| `fw-` | Framework/Standard | `fw-oecd-ai-principles`, `fw-nist-rmf` |
| `res-` | Resource/Tool | `res-ai-incident-database` |
| `sc-` | Scenario | `sc-fake-professor-bio` |

### Important Rules

1. **Card must exist** - The `card-id` must exist in the `cards` table
2. **Card must be published** - Set `status = 'published'` in cards table
3. **Card must be linked** - The article slug must be in the card's `used_in_articles` array
4. **No HTML in trigger** - Keep trigger text plain (no tags)
5. **Keep triggers short** - 2-6 words ideal for readability

### Checking Cards

Before using a card marker, verify it exists:

```typescript
const card = await sql`
  SELECT card_id, status
  FROM cards
  WHERE card_id = 'ex-dartmouth-workshop'
`;

if (card.length === 0) {
  console.error('Card does not exist!');
} else if (card[0].status !== 'published') {
  console.error('Card is not published!');
}
```

---

## Adding New Articles

### Method 1: Script with Full Content

```typescript
import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';

const envFile = readFileSync('.env.local', 'utf-8');
const dbUrlMatch = envFile.match(/DATABASE_URL=["']?([^"'\n]+)["']?/);
const DATABASE_URL = dbUrlMatch![1];
const sql = neon(DATABASE_URL);

async function addArticle() {
  const content = {
    tldr: "Your one-sentence summary here",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    readTime: "8 min read",
    updatedDate: "January 2025",
    headerImage: "/images/history/your-image.webp",

    content: `<h2 class="content-h2"><span class="heading-decoration"></span>First Section</h2>
<div class="content-p">Opening paragraph with {{CARD|card-id|trigger text}} inline.</div>
<div class="content-p">Second paragraph...</div>

<h2 class="content-h2"><span class="heading-decoration"></span>Second Section</h2>
<div class="content-p">More content here.</div>`,

    keyLearnings: [
      "First key learning point",
      "Second key learning point",
      "Third key learning point"
    ],

    additionalResources: [
      "Resource 1 - Simple String",
      {
        title: "Resource 2 - With Link",
        url: "https://example.com",
        type: "website",
        description: "Description here"
      }
    ],

    sources: [
      "Author (Year). Title of Source",
      {
        title: "Academic Paper",
        author: "Smith, J., et al.",
        year: 2023,
        url: "https://arxiv.org/...",
        type: "article"
      }
    ]
  };

  await sql`
    INSERT INTO articles (
      article_id,
      title,
      slug,
      path,
      position,
      status,
      yaml_content,
      published_at
    ) VALUES (
      'history-09',
      'Your Article Title',
      'your-article-slug',
      'history',
      9,
      'published',
      ${JSON.stringify(content)},
      NOW()
    )
  `;

  console.log('✓ Article added successfully!');
}

addArticle();
```

### Method 2: Update Existing Article

```typescript
async function updateArticle() {
  // Get existing content
  const result = await sql`
    SELECT yaml_content FROM articles WHERE slug = 'your-slug'
  `;

  const content = JSON.parse(result[0].yaml_content);

  // Modify content
  content.keyLearnings = ["New learning 1", "New learning 2"];
  content.additionalResources = [...content.additionalResources, "New resource"];

  // Update database
  await sql`
    UPDATE articles
    SET yaml_content = ${JSON.stringify(content)},
        updated_at = NOW()
    WHERE slug = 'your-slug'
  `;

  console.log('✓ Article updated!');
}
```

### Method 3: Batch Insert from JSON

```typescript
interface ArticleData {
  article_id: string;
  title: string;
  slug: string;
  content: any;
}

async function batchInsert(articles: ArticleData[], path: string) {
  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];

    await sql`
      INSERT INTO articles (
        article_id, title, slug, path, position,
        status, yaml_content, published_at
      ) VALUES (
        ${article.article_id},
        ${article.title},
        ${article.slug},
        ${path},
        ${i + 1},
        'published',
        ${JSON.stringify(article.content)},
        NOW()
      )
    `;

    console.log(`✓ Added: ${article.title}`);
  }
}

// Usage
const responsibilityArticles = [
  {
    article_id: 'resp-01',
    title: 'AI Ethics Fundamentals',
    slug: 'ai-ethics-fundamentals',
    content: { /* content object */ }
  },
  // ... more articles
];

await batchInsert(responsibilityArticles, 'responsibility');
```

---

## Examples

### Minimal Article

```json
{
  "tldr": "Brief one-sentence summary of what readers will learn",
  "tags": ["Category 1", "Category 2"],
  "content": "<h2 class=\"content-h2\"><span class=\"heading-decoration\"></span>Main Section</h2>\n<div class=\"content-p\">Your content here.</div>",
  "keyLearnings": [
    "Key point 1",
    "Key point 2"
  ],
  "readTime": "5 min read",
  "updatedDate": "January 2025",
  "headerImage": "/images/path/image.webp",
  "additionalResources": [],
  "sources": []
}
```

### Complete Article with Rich Resources

```json
{
  "tldr": "Comprehensive look at algorithmic bias, from hiring algorithms to facial recognition disparities",
  "tags": ["AI Risks", "Fairness", "Ethics", "Bias"],
  "readTime": "12 min read",
  "updatedDate": "January 2025",
  "headerImage": "/images/risk/algorithmic-bias.webp",

  "content": "<h2 class=\"content-h2\"><span class=\"heading-decoration\"></span>The Hidden Patterns</h2>\n<div class=\"content-p\">When {{CARD|ex-amazon-hiring|Amazon's hiring algorithm}} systematically downranked women's resumes, it revealed a fundamental truth: AI systems learn our biases from historical data.</div>\n\n<h2 class=\"content-h2\"><span class=\"heading-decoration\"></span>Types of Bias</h2>\n<div class=\"content-p\">Understanding {{CARD|concept-representation-bias|representation bias}} helps organizations identify where their data may be skewed.</div>\n\n<ul class=\"content-ul\">\n  <li>Historical bias from past discrimination</li>\n  <li>Measurement bias from flawed proxies</li>\n  <li>Aggregation bias from combining disparate groups</li>\n</ul>\n\n<h2 class=\"content-h2\"><span class=\"heading-decoration\"></span>Mitigation Strategies</h2>\n<div class=\"content-p\">Leaders must implement <em>proactive measures</em> rather than reactive fixes.</div>",

  "keyLearnings": [
    "AI bias stems from historical data that reflects past discrimination",
    "Multiple types of bias exist: representation, measurement, and aggregation",
    "Mitigation requires both technical fixes and organizational policy changes",
    "Regular audits are essential for detecting emerging bias patterns"
  ],

  "additionalResources": [
    {
      "title": "Gender Shades Project",
      "url": "http://gendershades.org/",
      "type": "website",
      "description": "Research on bias in facial recognition systems"
    },
    {
      "title": "Algorithmic Bias Audit Checklist",
      "url": "/downloads/bias-audit-checklist.pdf",
      "type": "pdf",
      "description": "Step-by-step guide to auditing algorithms for bias"
    },
    {
      "title": "Fairness in Machine Learning Tutorial",
      "url": "https://www.youtube.com/watch?v=example",
      "type": "video",
      "description": "90-minute tutorial on fairness metrics and bias mitigation"
    }
  ],

  "sources": [
    {
      "title": "Gender Shades: Intersectional Accuracy Disparities",
      "author": "Buolamwini, J., & Gebru, T.",
      "year": 2018,
      "url": "http://proceedings.mlr.press/v81/buolamwini18a.html",
      "type": "article"
    },
    {
      "title": "Discrimination in the Age of Algorithms",
      "author": "Kleinberg, J., et al.",
      "year": 2018,
      "url": "https://arxiv.org/abs/1902.03731",
      "type": "article",
      "description": "Foundational paper on algorithmic fairness"
    },
    "ProPublica (2016). Machine Bias: Risk Assessments in Criminal Sentencing"
  ]
}
```

---

## Scripts and Tools

### Validation Script

```typescript
// scripts/validate-article-content.ts
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function validateArticle(slug: string) {
  const article = await sql`
    SELECT yaml_content FROM articles WHERE slug = ${slug}
  `;

  if (article.length === 0) {
    console.error('❌ Article not found');
    return;
  }

  try {
    const content = JSON.parse(article[0].yaml_content);

    // Check required fields
    const required = ['tldr', 'tags', 'content', 'keyLearnings'];
    const missing = required.filter(field => !content[field]);

    if (missing.length > 0) {
      console.error('❌ Missing required fields:', missing);
      return;
    }

    // Check for card markers
    const cardMatches = content.content.match(/\{\{CARD\|([^|]+)\|[^}]+\}\}/g);
    if (cardMatches) {
      console.log(`✓ Found ${cardMatches.length} card markers`);

      // Validate each card exists
      for (const match of cardMatches) {
        const cardId = match.match(/\{\{CARD\|([^|]+)\|/)?.[1];
        const card = await sql`
          SELECT status FROM cards WHERE card_id = ${cardId}
        `;

        if (card.length === 0) {
          console.error(`❌ Card not found: ${cardId}`);
        } else if (card[0].status !== 'published') {
          console.warn(`⚠️  Card not published: ${cardId}`);
        } else {
          console.log(`  ✓ ${cardId}`);
        }
      }
    }

    console.log('\n✓ Article validation complete!');
  } catch (error) {
    console.error('❌ Invalid JSON:', error);
  }
}

// Run: npx tsx scripts/validate-article-content.ts
validateArticle('your-article-slug');
```

### Content Formatter

```typescript
// scripts/format-article-html.ts

function formatContentHTML(rawHTML: string): string {
  let formatted = rawHTML;

  // Ensure h2 tags have correct structure
  formatted = formatted.replace(
    /<h2>/g,
    '<h2 class="content-h2"><span class="heading-decoration"></span>'
  );

  // Convert p tags to content-p divs
  formatted = formatted.replace(/<p>/g, '<div class="content-p">');
  formatted = formatted.replace(/<\/p>/g, '</div>');

  // Add class to ul
  formatted = formatted.replace(/<ul>/g, '<ul class="content-ul">');

  // Remove any strong/b tags (not allowed)
  formatted = formatted.replace(/<strong>([^<]*)<\/strong>/g, '$1');
  formatted = formatted.replace(/<b>([^<]*)<\/b>/g, '$1');

  return formatted;
}

// Usage
const rawHTML = `<h2>Section Title</h2>
<p>First paragraph.</p>
<p>Second with <strong>bold</strong> text.</p>`;

const formatted = formatContentHTML(rawHTML);
console.log(formatted);
```

---

## Best Practices

### Content Writing

1. **TLDR First**
   - Write TLDR before writing article
   - Keep to one clear sentence
   - Focus on what readers will *learn*, not what article *covers*

2. **Section Structure**
   - 3-5 major sections per article
   - Each section should build on previous
   - Use clear, action-oriented headings

3. **Paragraph Length**
   - Keep paragraphs 2-4 sentences
   - One main idea per paragraph
   - Break up long explanations

4. **Card Usage**
   - 3-8 cards per article ideal
   - Place cards at first mention of concept
   - Don't over-use (dilutes impact)

### Database Operations

1. **Always Validate**
   ```typescript
   // Before insert
   - Check article_id doesn't exist
   - Verify path is valid
   - Confirm position isn't taken
   - Validate JSON structure
   ```

2. **Use Transactions**
   ```typescript
   await sql.begin(async (sql) => {
     await sql`INSERT INTO articles ...`;
     await sql`UPDATE cards SET used_in_articles ...`;
   });
   ```

3. **Test Locally First**
   - Insert to dev database
   - View at localhost:3006
   - Check all cards work
   - Verify resources render
   - Then deploy to production

### File Organization

```
/public/images/
  ├── history/       # History path images
  ├── risk/          # Risk path images
  ├── terminology/   # Terminology path images
  ├── responsibility/
  └── future/

/public/downloads/   # PDFs, Excel files
  ├── frameworks/
  ├── reports/
  └── tools/

/scripts/           # Database scripts
  ├── add-article.ts
  ├── validate-article.ts
  └── update-resources.ts
```

### Image Guidelines

1. **Format**: WebP (preferred) or PNG
2. **Size**: 1200x630px (social media optimized)
3. **Naming**: `article-slug.webp` (matches slug)
4. **Path**: `/images/{path}/{article-slug}.webp`

### Version Control

```bash
# Before database changes
git checkout -b add-article-your-topic

# After testing locally
git add scripts/add-your-article.ts
git commit -m "Add article: Your Article Title"

# Document in commit
- Article ID
- Path and position
- Number of cards used
- Any new cards created
```

---

## Troubleshooting

### Common Issues

**Issue: Card not showing**
```typescript
// Check card exists and is published
const card = await sql`
  SELECT card_id, status, used_in_articles
  FROM cards
  WHERE card_id = 'your-card-id'
`;

// Fix: Publish card
await sql`
  UPDATE cards
  SET status = 'published'
  WHERE card_id = 'your-card-id'
`;
```

**Issue: JSON parsing error**
```typescript
// Validate JSON before insert
try {
  JSON.parse(yourContentString);
  console.log('✓ Valid JSON');
} catch (error) {
  console.error('❌ Invalid JSON:', error);
}
```

**Issue: Article not appearing**
```typescript
// Check all required fields present
const article = await sql`
  SELECT article_id, slug, status, yaml_content
  FROM articles
  WHERE slug = 'your-slug'
`;

if (!article[0].yaml_content) {
  console.error('Missing yaml_content!');
}
```

---

## Migration from YAML Files

If you have content in YAML files:

```typescript
import * as yaml from 'js-yaml';
import { readFileSync } from 'fs';

const yamlContent = readFileSync('article.yaml', 'utf-8');
const parsed = yaml.load(yamlContent);

// Convert to JSON structure
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

// Insert to database
await sql`
  INSERT INTO articles (...)
  VALUES (..., ${JSON.stringify(content)}, ...)
`;
```

---

## Quick Reference

### Insert New Article
```sql
INSERT INTO articles (
  article_id, title, slug, path, position,
  status, yaml_content, published_at
) VALUES (
  'path-##',
  'Article Title',
  'article-slug',
  'path_name',
  position_number,
  'published',
  '{"tldr":"...","tags":[],"content":"..."}',
  NOW()
);
```

### Update Content
```sql
UPDATE articles
SET yaml_content = '{"tldr":"Updated..."}',
    updated_at = NOW()
WHERE slug = 'article-slug';
```

### Check Article
```sql
SELECT article_id, title, slug, path, position, status
FROM articles
WHERE path = 'history'
ORDER BY position;
```

---

## Next Steps

1. ✅ Read this guide thoroughly
2. ✅ Review existing articles in database
3. ✅ Check [RESOURCE-STRUCTURE-GUIDE.md](./RESOURCE-STRUCTURE-GUIDE.md) for resources
4. ✅ Use [risk-article-resources-template.json](./risk-article-resources-template.json) as reference
5. ✅ Create your content following HTML formatting rules
6. ✅ Validate cards exist and are published
7. ✅ Test locally before deploying
8. ✅ Document your changes in git commits

For questions or issues, refer to existing articles in the database as working examples.
