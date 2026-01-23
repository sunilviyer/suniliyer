# Complete Article Page Template

This document provides ready-to-use templates for creating articles in the AIDefence database-driven system.

---

## Table of Contents

1. [Single Article Template](#single-article-template)
2. [Batch Article Template](#batch-article-template)
3. [HTML Content Examples](#html-content-examples)
4. [Resource Examples](#resource-examples)
5. [Card Marker Examples](#card-marker-examples)
6. [Quick Reference](#quick-reference)

---

## Single Article Template

**Use this for adding one article at a time.**

### File: `scripts/add-my-article.ts`

```typescript
import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';
import { resolve } from 'path';

// Load .env.local manually
const envFile = readFileSync(resolve(process.cwd(), '.env.local'), 'utf-8');
const dbUrlMatch = envFile.match(/DATABASE_URL=["']?([^"'\n]+)["']?/);
if (!dbUrlMatch) {
  throw new Error('DATABASE_URL not found in .env.local');
}
const DATABASE_URL = dbUrlMatch[1];

const sql = neon(DATABASE_URL);

async function addArticle() {
  try {
    // ============================================
    // ARTICLE METADATA
    // ============================================
    const metadata = {
      article_id: 'history-09',           // Format: path-##
      title: 'Your Article Title',        // Display title
      slug: 'your-article-slug',          // URL slug (lowercase, hyphens)
      path: 'history',                    // history | risk | terminology | responsibility | future
      position: 9,                        // Order in path (1-indexed)
    };

    // ============================================
    // ARTICLE CONTENT
    // ============================================
    const content = {
      // Required: One-sentence summary
      tldr: "Brief summary of what readers will learn from this article",

      // Required: Category tags (3-4 recommended)
      tags: [
        "Category 1",
        "Category 2",
        "Category 3"
      ],

      // Recommended: Reading time
      readTime: "8 min read",

      // Recommended: Update date
      updatedDate: "January 2025",

      // Recommended: Header image path
      headerImage: "/images/history/your-article-slug.webp",

      // Required: HTML content with card markers
      content: `<h2 class="content-h2"><span class="heading-decoration"></span>First Section Title</h2>

<div class="content-p">Opening paragraph introducing the topic. You can reference {{CARD|card-id-here|clickable trigger text}} inline within sentences.</div>

<div class="content-p">Second paragraph building on the first. Keep paragraphs focused on one main idea.</div>

<h2 class="content-h2"><span class="heading-decoration"></span>Second Section Title</h2>

<div class="content-p">Continue developing your argument or explanation here.</div>

<ul class="content-ul">
  <li>Bullet point one</li>
  <li>Bullet point with {{CARD|another-card-id|inline reference}}</li>
  <li>Bullet point three</li>
</ul>

<div class="content-p">Final thoughts with <em>emphasized text</em> for subtle highlighting.</div>`,

      // Required: Key learnings (3-5 points)
      keyLearnings: [
        "First key takeaway that readers should remember",
        "Second important learning point",
        "Third critical insight",
        "Optional fourth point"
      ],

      // Optional: Additional resources
      additionalResources: [
        // Simple string format
        "Resource Title - Brief Description",

        // Rich object format with link
        {
          title: "NIST AI Risk Management Framework",
          url: "https://www.nist.gov/ai-rmf",
          type: "pdf",
          description: "Official framework for managing AI risks"
        }
      ],

      // Optional: Sources and references
      sources: [
        // Simple citation string
        "Author, A. (2023). Title of Work. Publisher.",

        // Rich academic citation
        {
          title: "Concrete Problems in AI Safety",
          author: "Amodei, D., Olah, C., et al.",
          year: 2016,
          url: "https://arxiv.org/abs/1606.06565",
          type: "article",
          description: "Foundational paper on AI safety research"
        }
      ]
    };

    // ============================================
    // VALIDATION
    // ============================================
    console.log('Validating article data...\n');

    const existing = await sql`
      SELECT article_id FROM articles WHERE article_id = ${metadata.article_id}
    `;

    if (existing.length > 0) {
      throw new Error(`Article ID ${metadata.article_id} already exists!`);
    }

    const slugExists = await sql`
      SELECT slug FROM articles WHERE slug = ${metadata.slug}
    `;

    if (slugExists.length > 0) {
      throw new Error(`Slug ${metadata.slug} already exists!`);
    }

    // Extract and validate card IDs
    const cardMatches = content.content.match(/\{\{CARD\|([^|]+)\|[^}]+\}\}/g);
    if (cardMatches) {
      console.log(`Found ${cardMatches.length} card markers:`);

      for (const match of cardMatches) {
        const cardId = match.match(/\{\{CARD\|([^|]+)\|/)?.[1];
        if (!cardId) continue;

        const card = await sql`
          SELECT card_id, status FROM cards WHERE card_id = ${cardId}
        `;

        if (card.length === 0) {
          throw new Error(`Card not found: ${cardId}`);
        }

        if (card[0].status !== 'published') {
          console.warn(`  ⚠️  Card ${cardId} is not published`);
        } else {
          console.log(`  ✓ ${cardId}`);
        }
      }
    }

    console.log('\n✓ Validation complete\n');

    // ============================================
    // INSERT ARTICLE
    // ============================================
    console.log('Inserting article...');

    await sql`
      INSERT INTO articles (
        article_id,
        title,
        slug,
        path,
        position,
        status,
        yaml_content,
        published_at,
        created_at,
        updated_at
      ) VALUES (
        ${metadata.article_id},
        ${metadata.title},
        ${metadata.slug},
        ${metadata.path},
        ${metadata.position},
        'published',
        ${JSON.stringify(content)},
        NOW(),
        NOW(),
        NOW()
      )
    `;

    console.log('\n✅ Article added successfully!');
    console.log(`   Article ID: ${metadata.article_id}`);
    console.log(`   Slug: ${metadata.slug}`);
    console.log(`   URL: http://localhost:3006/articles/${metadata.slug}`);

    // ============================================
    // UPDATE CARD LINKS
    // ============================================
    if (cardMatches) {
      console.log('\nUpdating card links...');

      const uniqueCardIds = [...new Set(
        cardMatches.map(m => m.match(/\{\{CARD\|([^|]+)\|/)?.[1]).filter(Boolean)
      )];

      for (const cardId of uniqueCardIds) {
        const card = await sql`
          SELECT used_in_articles FROM cards WHERE card_id = ${cardId}
        `;

        if (card.length > 0) {
          let usedIn: string[] = [];
          if (card[0].used_in_articles) {
            usedIn = Array.isArray(card[0].used_in_articles)
              ? card[0].used_in_articles
              : [];
          }

          if (!usedIn.includes(metadata.slug)) {
            usedIn.push(metadata.slug);

            await sql`
              UPDATE cards
              SET used_in_articles = ${usedIn}
              WHERE card_id = ${cardId}
            `;

            console.log(`  ✓ Linked ${cardId} to ${metadata.slug}`);
          }
        }
      }
    }

    console.log('\n🎉 All done! Visit: http://localhost:3006/articles/${metadata.slug}\n');

  } catch (error) {
    console.error('\n❌ Error:', error);
    throw error;
  }
}

addArticle();
```

### Usage

```bash
# 1. Copy template
cp scripts/templates/add-single-article-template.ts scripts/add-my-article.ts

# 2. Edit your content in scripts/add-my-article.ts

# 3. Run it
npx tsx scripts/add-my-article.ts

# 4. View locally
npm run dev
# Visit: http://localhost:3006/articles/your-slug
```

---

## Batch Article Template

**Use this for adding multiple articles to the same learning path.**

### File: `scripts/batch-add-my-articles.ts`

```typescript
import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const envFile = readFileSync(resolve(process.cwd(), '.env.local'), 'utf-8');
const dbUrlMatch = envFile.match(/DATABASE_URL=["']?([^"'\n]+)["']?/);
if (!dbUrlMatch) {
  throw new Error('DATABASE_URL not found in .env.local');
}
const DATABASE_URL = dbUrlMatch[1];

const sql = neon(DATABASE_URL);

interface ArticleData {
  article_id: string;
  title: string;
  slug: string;
  content: {
    tldr: string;
    tags: string[];
    readTime: string;
    updatedDate: string;
    headerImage: string;
    content: string;
    keyLearnings: string[];
    additionalResources: any[];
    sources: any[];
  };
}

async function batchAddArticles() {
  try {
    // ============================================
    // PATH CONFIGURATION
    // ============================================
    const pathConfig = {
      path: 'responsibility',  // Learning path name
      startPosition: 1,        // Starting position number
    };

    // ============================================
    // ARTICLES DATA
    // ============================================
    const articles: ArticleData[] = [
      // Article 1
      {
        article_id: 'resp-01',
        title: 'AI Ethics Fundamentals',
        slug: 'ai-ethics-fundamentals',
        content: {
          tldr: "Introduction to ethical considerations in AI development",
          tags: ["Ethics", "Governance", "Responsibility"],
          readTime: "7 min read",
          updatedDate: "January 2025",
          headerImage: "/images/responsibility/ai-ethics-fundamentals.webp",
          content: `<h2 class="content-h2"><span class="heading-decoration"></span>Why Ethics Matters</h2>

<div class="content-p">AI systems make decisions that affect real people's lives.</div>`,
          keyLearnings: [
            "AI ethics requires balancing innovation with human welfare",
            "Core principles include autonomy, fairness, and transparency"
          ],
          additionalResources: [],
          sources: []
        }
      },

      // Article 2
      {
        article_id: 'resp-02',
        title: 'Second Article Title',
        slug: 'second-article-slug',
        content: {
          tldr: "Brief summary of second article",
          tags: ["Tag1", "Tag2", "Tag3"],
          readTime: "8 min read",
          updatedDate: "January 2025",
          headerImage: "/images/responsibility/second-article.webp",
          content: `<h2 class="content-h2"><span class="heading-decoration"></span>Section Title</h2>

<div class="content-p">Content here.</div>`,
          keyLearnings: [
            "First learning point",
            "Second learning point"
          ],
          additionalResources: [],
          sources: []
        }
      },

      // Add more articles...
    ];

    // ============================================
    // VALIDATION & INSERTION
    // ============================================
    console.log(`\n=== BATCH ADD TO '${pathConfig.path}' ===\n`);

    for (const article of articles) {
      console.log(`Validating: ${article.title}`);

      const existing = await sql`
        SELECT article_id FROM articles WHERE article_id = ${article.article_id}
      `;
      if (existing.length > 0) {
        throw new Error(`Article ID ${article.article_id} exists!`);
      }

      const slugExists = await sql`
        SELECT slug FROM articles WHERE slug = ${article.slug}
      `;
      if (slugExists.length > 0) {
        throw new Error(`Slug ${article.slug} exists!`);
      }

      console.log(`  ✓ Validated\n`);
    }

    console.log('Inserting articles...\n');

    for (let i = 0; i < articles.length; i++) {
      const article = articles[i];
      const position = pathConfig.startPosition + i;

      await sql`
        INSERT INTO articles (
          article_id, title, slug, path, position, status,
          yaml_content, published_at, created_at, updated_at
        ) VALUES (
          ${article.article_id}, ${article.title}, ${article.slug},
          ${pathConfig.path}, ${position}, 'published',
          ${JSON.stringify(article.content)},
          NOW(), NOW(), NOW()
        )
      `;

      console.log(`✓ Added: ${article.title} (position ${position})`);
    }

    console.log('\n✅ Successfully added', articles.length, 'articles\n');

  } catch (error) {
    console.error('\n❌ Error:', error);
    throw error;
  }
}

batchAddArticles();
```

---

## HTML Content Examples

### Complete Article Example

```html
<h2 class="content-h2"><span class="heading-decoration"></span>The Dawn of Artificial Intelligence</h2>

<div class="content-p">The field of artificial intelligence began formally at {{CARD|ex-dartmouth-workshop|the 1956 Dartmouth workshop}}, where researchers gathered with the ambitious goal of creating machines that could think.</div>

<div class="content-p">Early pioneers believed that human-level intelligence could be achieved within a generation. While this prediction proved overly optimistic, their work laid the foundation for modern AI.</div>

<h2 class="content-h2"><span class="heading-decoration"></span>Key Milestones</h2>

<div class="content-p">Several breakthrough moments shaped AI's evolution:</div>

<ul class="content-ul">
  <li>{{CARD|ex-deep-blue|Deep Blue's chess victory}} demonstrated the power of computational reasoning</li>
  <li>The development of {{CARD|concept-neural-networks|neural networks}} enabled pattern recognition at scale</li>
  <li>Modern {{CARD|concept-transformer-architecture|transformer models}} revolutionized natural language processing</li>
</ul>

<div class="content-p">Each milestone built upon previous discoveries, creating the <em>cumulative progress</em> that defines AI research.</div>

<h2 class="content-h2"><span class="heading-decoration"></span>Looking Forward</h2>

<div class="content-p">Today's AI systems exceed early expectations in some areas while falling short in others. Understanding this history helps us appreciate both AI's capabilities and its fundamental limitations.</div>
```

### Sections with Subsections

```html
<h2 class="content-h2"><span class="heading-decoration"></span>Understanding Machine Learning</h2>

<div class="content-p">Machine learning represents a fundamental shift from rule-based programming to pattern-based learning.</div>

<h3 class="content-h3">Supervised Learning</h3>

<div class="content-p">In {{CARD|concept-supervised-learning|supervised learning}}, algorithms learn from labeled examples, much like a student learning from a teacher.</div>

<ul class="content-ul">
  <li>Requires large datasets with correct answers</li>
  <li>Excels at classification and prediction tasks</li>
  <li>Powers applications from email spam filters to medical diagnosis</li>
</ul>

<h3 class="content-h3">Unsupervised Learning</h3>

<div class="content-p">{{CARD|concept-unsupervised-learning|Unsupervised learning}} discovers patterns without explicit labels, identifying structure in raw data.</div>

<div class="content-p">This approach proves valuable when labeled data is scarce or expensive to obtain.</div>
```

### Lists and Emphasized Text

```html
<h2 class="content-h2"><span class="heading-decoration"></span>Critical Success Factors</h2>

<div class="content-p">Successful AI deployment requires attention to several key areas:</div>

<ul class="content-ul">
  <li><em>Data quality</em> - Models are only as good as their training data</li>
  <li><em>Clear objectives</em> - Well-defined goals prevent scope creep</li>
  <li><em>Stakeholder buy-in</em> - Success requires organizational alignment</li>
  <li><em>Continuous monitoring</em> - Performance degrades without active maintenance</li>
</ul>

<div class="content-p">Organizations that neglect these factors often face {{CARD|sc-model-drift|model drift}} and declining performance over time.</div>
```

### Complex Content with Multiple Cards

```html
<h2 class="content-h2"><span class="heading-decoration"></span>The AI Risk Landscape</h2>

<div class="content-p">AI systems introduce risks across multiple dimensions. {{CARD|concept-algorithmic-bias|Algorithmic bias}} can amplify existing societal inequalities, while {{CARD|concept-ai-hallucination|hallucinations}} undermine trust in AI-generated content.</div>

<div class="content-p">Beyond technical failures, organizations face {{CARD|fw-gdpr|privacy compliance}} challenges and questions of {{CARD|concept-ai-accountability|accountability}} when systems make consequential decisions.</div>

<h2 class="content-h2"><span class="heading-decoration"></span>Mitigation Strategies</h2>

<div class="content-p">Effective risk management requires a comprehensive approach:</div>

<ul class="content-ul">
  <li>Implement {{CARD|res-ai-red-teaming|red teaming exercises}} to discover vulnerabilities before deployment</li>
  <li>Establish clear {{CARD|fw-nist-ai-rmf|governance frameworks}} aligned with industry standards</li>
  <li>Deploy continuous monitoring to detect {{CARD|sc-model-drift|drift}} and performance degradation</li>
  <li>Maintain human oversight for high-stakes decisions</li>
</ul>

<div class="content-p">Organizations that treat AI risk management as an afterthought rather than a <em>core design principle</em> expose themselves to significant liability.</div>
```

---

## Resource Examples

### PDF Document

```javascript
{
  title: "NIST AI Risk Management Framework",
  url: "https://www.nist.gov/itl/ai-risk-management-framework",
  type: "pdf",
  description: "Comprehensive framework for identifying and managing AI risks across the development lifecycle"
}
```

### Excel Template

```javascript
{
  title: "AI Risk Assessment Template",
  url: "/downloads/ai-risk-assessment-template.xlsx",
  type: "excel",
  description: "Structured spreadsheet for evaluating AI system risks across technical, ethical, and operational dimensions"
}
```

### Video Tutorial

```javascript
{
  title: "Introduction to Responsible AI",
  url: "https://www.youtube.com/watch?v=example",
  type: "video",
  description: "45-minute overview of ethical AI principles and practical implementation strategies"
}
```

### Academic Paper

```javascript
{
  title: "Attention Is All You Need",
  author: "Vaswani, A., Shazeer, N., et al.",
  year: 2017,
  url: "https://arxiv.org/abs/1706.03762",
  type: "article",
  description: "Foundational paper introducing the transformer architecture that revolutionized NLP"
}
```

### Government Report

```javascript
{
  title: "EU AI Act - Full Text",
  author: "European Commission",
  year: 2024,
  url: "https://artificialintelligenceact.eu/",
  type: "document",
  description: "Complete text of the European Union's comprehensive AI regulation framework"
}
```

### Mixed Resources Example

```javascript
additionalResources: [
  // Simple string
  "AI Ethics Guidelines - IEEE Global Initiative",

  // Interactive tool
  {
    title: "AI Incident Database",
    url: "https://incidentdatabase.ai/",
    type: "tool",
    description: "Searchable database of real-world AI failures and harms"
  },

  // Research paper
  {
    title: "Model Cards for Model Reporting",
    author: "Mitchell, M., et al.",
    year: 2019,
    url: "https://arxiv.org/abs/1810.03993",
    type: "article",
    description: "Framework for transparent AI model documentation"
  },

  // Website
  {
    title: "Partnership on AI",
    url: "https://partnershiponai.org/",
    type: "website",
    description: "Multi-stakeholder organization developing AI best practices"
  }
]
```

---

## Card Marker Examples

### Basic Card Reference

```html
<div class="content-p">The {{CARD|ex-dartmouth-workshop|1956 Dartmouth workshop}} marked AI's formal beginning.</div>
```

### Multiple Cards in One Paragraph

```html
<div class="content-p">Modern {{CARD|concept-llm|large language models}} build on decades of research in {{CARD|concept-neural-networks|neural networks}} and {{CARD|concept-attention-mechanism|attention mechanisms}}.</div>
```

### Card in List Item

```html
<ul class="content-ul">
  <li>{{CARD|ex-deep-blue|Deep Blue}} defeated world chess champion in 1997</li>
  <li>{{CARD|ex-watson-jeopardy|Watson}} won Jeopardy! in 2011</li>
  <li>{{CARD|ex-alphago|AlphaGo}} mastered Go in 2016</li>
</ul>
```

### Card Types Reference

| Prefix | Type | Example |
|--------|------|---------|
| `ex-` | Example | `{{CARD|ex-deep-blue|Deep Blue's victory}}` |
| `concept-` | Concept | `{{CARD|concept-machine-learning|machine learning}}` |
| `fw-` | Framework | `{{CARD|fw-nist-ai-rmf|NIST framework}}` |
| `res-` | Resource | `{{CARD|res-ai-incident-db|incident database}}` |
| `sc-` | Scenario | `{{CARD|sc-hiring-bias|biased hiring}}` |

---

## Quick Reference

### Required Fields

```javascript
{
  tldr: "One-sentence summary",
  tags: ["Tag1", "Tag2", "Tag3"],
  content: "<h2>...</h2><div>...</div>",
  keyLearnings: ["Point 1", "Point 2", "Point 3"]
}
```

### Recommended Fields

```javascript
{
  readTime: "8 min read",
  updatedDate: "January 2025",
  headerImage: "/images/path/image.webp"
}
```

### Optional Fields

```javascript
{
  additionalResources: [...],
  sources: [...]
}
```

### HTML Classes

```html
<h2 class="content-h2"><span class="heading-decoration"></span>Title</h2>
<h3 class="content-h3">Subtitle</h3>
<div class="content-p">Paragraph</div>
<ul class="content-ul">
  <li>List item</li>
</ul>
<em>emphasis</em>
```

### Learning Paths

- `history` - AI history and evolution
- `terminology` - Key concepts and definitions
- `risk` - AI risks and failures
- `responsibility` - Ethics and governance
- `future` - Future trends and implications

### Image Locations

```
/public/images/history/
/public/images/terminology/
/public/images/risk/
/public/images/responsibility/
/public/images/future/
```

---

## Validation Checklist

Before running your script:

- [ ] `article_id` is unique and follows `path-##` format
- [ ] `slug` is unique, lowercase, uses hyphens
- [ ] `path` is one of: history, risk, terminology, responsibility, future
- [ ] `position` is correct for the learning path
- [ ] All card IDs exist in cards table
- [ ] All cards referenced have `status = 'published'`
- [ ] HTML uses correct classes (`content-h2`, `content-p`, etc.)
- [ ] Header image exists at specified path
- [ ] All required fields present: `tldr`, `tags`, `content`, `keyLearnings`
- [ ] JSON is valid (test with `JSON.parse()`)

---

## Common Commands

```bash
# Create new article script
cp scripts/templates/add-single-article-template.ts scripts/add-my-article.ts

# Run single article
npx tsx scripts/add-my-article.ts

# Run batch articles
npx tsx scripts/batch-add-my-articles.ts

# Check if article was added
psql $DATABASE_URL -c "SELECT article_id, title, slug FROM articles WHERE slug = 'your-slug';"

# View locally
npm run dev
# Visit: http://localhost:3006/articles/your-slug
```

---

**Last Updated**: January 2025
**Version**: 1.0
