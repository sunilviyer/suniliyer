# Instructions for Next Batch of Articles

## Prerequisites
✅ Database is populated with cards from existing articles
✅ YAML Content Guidelines exist at: `content/articles/YAML-Content-Guidelines.md`
✅ Database integration infrastructure is ready

## Step-by-Step Instructions

### 1. YAML Content Rules (CRITICAL)

**In JSX content (the `content:` section), ALWAYS use HTML entities:**

```yaml
content: |
  <p>It&apos;s important to understand AI&apos;s limitations.</p>
  <p>The term &quot;AI Winter&quot; refers to periods of reduced funding.</p>
  <p>Understanding &lsquo;good&rsquo; data is crucial.</p>
```

**Common Replacements:**
- `'` (apostrophe) → `&apos;` or `&rsquo;`
- `"` (double quote) → `&quot;` or `&ldquo;`/`&rdquo;`
- Single-quote emphasis → `&lsquo;` and `&rsquo;`
- Em dash → `&mdash;`

### 2. Card References in YAML

**Option A: Reference existing cards from database**
```yaml
content: |
  <p>Learn more about <card id="concept-fairness">AI Fairness</card>.</p>
```

**Option B: Define new cards inline (we'll add them to database)**
```yaml
cards:
  myNewCard:
    id: "concept-my-new-card"
    title: "My New Concept"
    type: "concept"
    summary: "This is the card summary - use regular quotes here, NOT HTML entities"
    tags:
      - AI Governance
      - Ethics

content: |
  <p>Reference the <card id="concept-my-new-card">new card</card>.</p>
```

**IMPORTANT:**
- Card `summary` uses REGULAR quotes (it's a JavaScript string, not JSX)
- Card `id` should be lowercase with hyphens
- Card `type` must be one of: concept, example, milestone, framework, resource, insight, scenario, operational-pattern, market-insight, technical-concept, article-link

### 3. Navigation Paths

**ALWAYS use `/articles/` prefix:**
```yaml
navigation:
  prev:
    slug: "/articles/previous-article-slug"  # ✅ CORRECT
    title: "Previous Article Title"
  next:
    slug: "/articles/next-article-slug"      # ✅ CORRECT
    title: "Next Article Title"
```

**DON'T use path prefixes:**
```yaml
navigation:
  prev:
    slug: "/terminology/article"  # ❌ WRONG
    slug: "/history/article"      # ❌ WRONG
```

### 4. File Format

**Save as plain text `.yaml` files, NOT `.rtf`**

Check file type:
```bash
file content/articles/complete-YAML/your-article.yaml
# Should show: ASCII text or UTF-8 Unicode text
# Should NOT show: Rich Text Format
```

### 5. Testing Before Committing

After creating article from YAML, run these commands:

```bash
# 1. Run ESLint check
npx eslint app/articles/[article-name]/page.tsx

# 2. If errors, look for unescaped quotes/apostrophes
# Common patterns to find:
grep -n "'" app/articles/[article-name]/page.tsx | grep -v "&apos;" | grep -v "&rsquo;"
grep -n '"' app/articles/[article-name]/page.tsx | grep -v "&quot;" | grep -v "&ldquo;" | grep -v "&rdquo;"

# 3. Run type check
npx tsc --noEmit

# 4. Test build locally (optional but recommended)
npm run build
```

### 6. Article Page Structure

When creating page.tsx from YAML, use this pattern:

```tsx
// NO 'use client' directive - Server Component
import { getCardsByArticle } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { InlineContextCard } from '@/components/articles/InlineContextCard';

export default async function ArticleNamePage() {
  // Fetch cards from database
  const cards = await getCardsByArticle('article-slug');

  return (
    <ArticlePageWrapper
      path="terminology"           // or "history", "risk", etc.
      pathTitle="Terminology"
      articleTitle="Article Title from YAML"
      tldr="TLDR from YAML"
      tags={['tag1', 'tag2']}
      readTime="8 min read"
      updatedDate="January 2025"
      headerImage="/images/history/article-image.webp"
      currentIndex={1}             // Position in learning path
      totalArticles={8}
      prevArticle={{ slug: '/articles/prev', title: 'Prev Title' }}
      nextArticle={{ slug: '/articles/next', title: 'Next Title' }}
      cards={cards}
    >
      {/* Article content with InlineContextCard */}
      <h2 className="content-h2">
        <span className="heading-decoration" />
        Section Title
      </h2>

      <div className="content-p">
        Article content here with{' '}
        <InlineContextCard cardId="concept-fairness" trigger="AI Fairness" />{' '}
        inline cards.
      </div>
    </ArticlePageWrapper>
  );
}
```

### 7. InlineContextCard Usage

**Old way (hardcoded):**
```tsx
<InlineContextCard trigger="AI" card={cardData.myCard} />
```

**New way (database):**
```tsx
<InlineContextCard cardId="concept-fairness" trigger="AI Fairness" />
```

Note: InlineContextCard now accepts `cardId` prop to fetch cards from the database.

### 8. After Creating Articles

Run the database population script to add any new cards:

```bash
DATABASE_URL='your-database-url' npx tsx scripts/populate-cards-database.ts
```

## Quick Checklist

Before committing new articles:

- [ ] All apostrophes in JSX use `&apos;` or `&rsquo;`
- [ ] All quotes in JSX use `&quot;`, `&ldquo;`, or `&rdquo;`
- [ ] Card summaries use REGULAR quotes (not HTML entities)
- [ ] Navigation paths use `/articles/` prefix
- [ ] YAML file is plain text, not .rtf
- [ ] ESLint passes: `npx eslint app/articles/[name]/page.tsx`
- [ ] No TypeScript errors: `npx tsc --noEmit`
- [ ] Cards added to database if new

## Example YAML Template

```yaml
article_id: "term-05"
title: "AI Explainability"
slug: "ai-explainability"
path: "terminology"
header_image: "/images/history/ai-explainability.webp"
navigation:
  prev:
    slug: "/articles/foundation-models"
    title: "Foundation Models"
  next:
    slug: "/articles/multimodal-ai"
    title: "Multimodal AI"

tags:
  - Explainability
  - Transparency
  - XAI

read_time: "7 min read"
updated_date: "January 2025"

tldr: "AI explainability ensures that AI decisions can be understood by humans. This is critical for trust, accountability, and regulatory compliance."

cards:
  blackBox:
    id: "concept-black-box"
    title: "Black Box Problem"
    type: "concept"
    summary: "When AI systems make decisions without providing reasoning that humans can understand. Common in deep neural networks."
    tags:
      - Explainability
      - Transparency

content: |
  <h2>The Mystery Box</h2>
  <p>Think about the last time someone gave you advice but couldn&apos;t explain why. It&apos;s frustrating, right? That&apos;s the <card id="concept-black-box">black box problem</card> in AI.</p>

  <p>When AI systems make high-stakes decisions&mdash;like approving loans or diagnosing diseases&mdash;we need to understand &lsquo;why&rsquo; they reached that conclusion.</p>

  <h2>Why It Matters</h2>
  <p>Explainability isn&apos;t just &quot;nice to have&quot;&mdash;it&apos;s essential for:</p>
  <ul>
    <li>Building trust with users</li>
    <li>Meeting regulatory requirements</li>
    <li>Debugging errors and bias</li>
  </ul>
```

## Common Mistakes to Avoid

❌ **DON'T:**
```yaml
content: |
  <p>It's important to understand "AI Winters"</p>
```

✅ **DO:**
```yaml
content: |
  <p>It&apos;s important to understand &quot;AI Winters&quot;</p>
```

---

❌ **DON'T:**
```yaml
cards:
  myCard:
    summary: "This is a &quot;good&quot; example"  # Wrong - HTML entities in card data
```

✅ **DO:**
```yaml
cards:
  myCard:
    summary: "This is a 'good' example"  # Correct - regular quotes in card data
```

---

❌ **DON'T:**
```yaml
navigation:
  next:
    slug: "/terminology/next-article"  # Wrong path
```

✅ **DO:**
```yaml
navigation:
  next:
    slug: "/articles/next-article"  # Correct path
```

## Need Help?

- **YAML Guidelines:** `content/articles/YAML-Content-Guidelines.md`
- **Refactoring Guide:** `docs/database-integration-refactoring.md`
- **Test locally first:** Always run ESLint and type-check before pushing

## Summary

The key difference from last batch:
1. ✅ Cards now come from database (no hardcoded cardData objects)
2. ✅ Use ArticlePageWrapper instead of individual theme/nav setup
3. ✅ InlineContextCard uses `cardId` prop instead of `card` object
4. ✅ Articles are Server Components (no 'use client')
5. ✅ Always test with ESLint before committing
