# Database-Driven Article Migration Guide

## Overview
This guide provides step-by-step instructions for migrating the remaining 11 articles from hardcoded JSX to database-driven content stored in Neon DB.

## Migration Status
- ✅ **COMPLETED**: `ai-history` (what-ai-actually-is)
- 🔄 **PENDING**: 11 articles

---

## General Migration Steps

For each article, follow these steps:

### Step 1: Extract Article Content
1. Open the article's `page.tsx` file
2. Identify and copy:
   - Article metadata (tldr, tags, readTime, updatedDate, headerImage)
   - Main content HTML (all `<h2>`, `<div className="content-p">`, etc.)
   - KeyLearnings array
   - AdditionalResources array
   - Sources array

### Step 2: Convert InlineContextCard Components to Markers
Replace all JSX card components with the `{{CARD|cardId|trigger}}` format:

**FROM:**
```jsx
<InlineContextCard cardId="concept-rpa-vs-ai" trigger="Robotic Process Automation" />
```

**TO:**
```
{{CARD|concept-rpa-vs-ai|Robotic Process Automation}}
```

**Important Notes:**
- Remove the `{' '}` spacing components - just use regular spaces
- Keep all HTML tags intact (`<h2>`, `<div>`, `<span>`, etc.)
- Preserve all className attributes
- Convert `&apos;` to `'` and `&quot;` to `"` in the HTML

### Step 3: Create Upload Script
1. Create a new file: `scripts/upload-[article-slug].ts`
2. Use the template below
3. Fill in all the extracted content

### Step 4: Upload to Database
```bash
DATABASE_URL='postgresql://neondb_owner:npg_FK1BryMHQGO0@ep-weathered-shadow-ahqptvcp-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require' npx tsx scripts/upload-[article-slug].ts
```

### Step 5: Update page.tsx
Replace the hardcoded content with DatabaseArticleRenderer:

**FROM:**
```tsx
<ArticlePageWrapper {...props} cards={cards}>
  <ArticleContent />
</ArticlePageWrapper>
```

**TO:**
```tsx
const [article, cards] = await Promise.all([
  getArticleBySlug('article-slug'),
  getCardsByArticle('article-slug'),
]);

if (!article || !article.content) {
  notFound();
}

return (
  <ArticlePageWrapper {...props} cards={cards}>
    <DatabaseArticleRenderer
      content={article.content.content}
      keyLearnings={article.content.keyLearnings}
      additionalResources={article.content.additionalResources}
      sources={article.content.sources}
    />
  </ArticlePageWrapper>
);
```

### Step 6: Verify
1. Start dev server: `npm run dev`
2. Navigate to the article page
3. Check:
   - ✅ Header image displays
   - ✅ All inline cards are visible and clickable
   - ✅ Cards render inline (not on new lines)
   - ✅ Key Learnings section displays
   - ✅ Accordions (Additional Resources, Sources) work
   - ✅ No console errors

---

## Upload Script Template

```typescript
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

const articleContent = {
  tldr: "YOUR_TLDR_HERE",
  tags: ['Tag1', 'Tag2', 'Tag3'],
  readTime: 'X min read',
  updatedDate: 'January 2025',
  headerImage: '/images/path/to/image.webp',
  content: `PASTE_YOUR_HTML_CONTENT_HERE`,
  keyLearnings: [
    'Learning point 1',
    'Learning point 2',
    // ... more learnings
  ],
  additionalResources: [
    'Resource 1',
    'Resource 2',
    // ... more resources
  ],
  sources: [
    'Source 1',
    'Source 2',
    // ... more sources
  ]
};

async function uploadArticle() {
  try {
    console.log('Uploading [ARTICLE_NAME] article content...');

    const result = await sql`
      UPDATE articles
      SET yaml_content = ${JSON.stringify(articleContent)},
          status = 'published',
          updated_at = NOW()
      WHERE slug = 'article-slug'
      RETURNING article_id, slug, title
    `;

    console.log('Article uploaded successfully:', result[0]);
  } catch (error) {
    console.error('Error uploading article:', error);
    throw error;
  }
}

uploadArticle();
```

---

## Article 1: ai-vs-automation

### File Locations
- Page: `/app/articles/ai-vs-automation/page.tsx`
- Script: `/scripts/upload-ai-vs-automation.ts`

### Database Details
- **article_id**: `term-02`
- **slug**: `ai-vs-automation`
- **Cards**: Already fetched via `getCardsByArticle('ai-vs-automation')`

### Card Conversions
```jsx
// BEFORE:
<InlineContextCard cardId="article-link-what-ai-actually-is" trigger="artificial intelligence" />
<InlineContextCard cardId="res-ai-vs-automation-decision-tree" trigger="classification decision tree" />
<InlineContextCard cardId="concept-rpa-vs-ai" trigger="Robotic Process Automation (RPA)" />
<InlineContextCard cardId="concept-model-drift" trigger="model drift" />

// AFTER:
{{CARD|article-link-what-ai-actually-is|artificial intelligence}}
{{CARD|res-ai-vs-automation-decision-tree|classification decision tree}}
{{CARD|concept-rpa-vs-ai|Robotic Process Automation (RPA)}}
{{CARD|concept-model-drift|model drift}}
```

### Metadata
- **tldr**: "Automation follows human-written 'if-then' rules, while AI learns to recognize patterns from data. Understanding this distinction is crucial for proper governance and risk management."
- **tags**: ['AI Fundamentals', 'Automation', 'RPA', 'Governance Basics']
- **readTime**: "8 min read"
- **headerImage**: "/images/history/ai-vs-automation.webp"

---

## Article 2: data-behind-ai

### File Locations
- Page: `/app/articles/data-behind-ai/page.tsx`
- Script: `/scripts/upload-data-behind-ai.ts`

### Database Details
- **article_id**: `term-03`
- **slug**: `data-behind-ai`

### Steps
1. Extract content from `DataBehindAIContent()` function
2. Convert all InlineContextCard to {{CARD|...}} format
3. Extract KeyLearnings from `DataBehindAIFooter()`
4. Create upload script
5. Run upload
6. Update page.tsx to use `getArticleBySlug('data-behind-ai')` and `DatabaseArticleRenderer`

---

## Article 3: ai-technology-stack

### File Locations
- Page: `/app/articles/ai-technology-stack/page.tsx`
- Script: `/scripts/upload-ai-technology-stack.ts`

### Database Details
- **article_id**: `term-01`
- **slug**: `ai-technology-stack`

### Steps
1. Extract content from component
2. Convert cards to marker format
3. Create upload script
4. Upload to database
5. Update page.tsx

---

## Article 4: foundation-models

### File Locations
- Page: `/app/articles/foundation-models/page.tsx`
- Script: `/scripts/upload-foundation-models.ts`

### Database Details
- **article_id**: `term-04`
- **slug**: `foundation-models`

---

## Article 5: how-machines-learn

### File Locations
- Page: `/app/articles/how-machines-learn/page.tsx`
- Script: `/scripts/upload-how-machines-learn.ts`

### Database Details
- **article_id**: `history-04`
- **slug**: `how-machines-learn`

---

## Article 6: types-of-ai-intelligence

### File Locations
- Page: `/app/articles/types-of-ai-intelligence/page.tsx`
- Script: `/scripts/upload-types-of-ai-intelligence.ts`

### Database Details
- **article_id**: `history-03`
- **slug**: `types-of-ai-intelligence`

---

## Article 7: deep-learning-decoded

### File Locations
- Page: `/app/articles/deep-learning-decoded/page.tsx`
- Script: `/scripts/upload-deep-learning-decoded.ts`

### Database Details
- **article_id**: `history-05`
- **slug**: `deep-learning-decoded`

---

## Article 8: generative-ai-explained

### File Locations
- Page: `/app/articles/generative-ai-explained/page.tsx`
- Script: `/scripts/upload-generative-ai-explained.ts`

### Database Details
- **article_id**: `history-06`
- **slug**: `generative-ai-explained`

---

## Article 9: large-language-models

### File Locations
- Page: `/app/articles/large-language-models/page.tsx`
- Script: `/scripts/upload-large-language-models.ts`

### Database Details
- **article_id**: `history-07`
- **slug**: `large-language-models`

---

## Article 10: ai-family-tree

### File Locations
- Page: `/app/articles/ai-family-tree/page.tsx`
- Script: `/scripts/upload-ai-family-tree.ts`

### Database Details
- **article_id**: `history-02`
- **slug**: `ai-family-tree`

---

## Article 11: what-ai-actually-is

### File Locations
- Page: `/app/articles/what-ai-actually-is/page.tsx`
- Script: `/scripts/upload-what-ai-actually-is.ts`

### Database Details
- **article_id**: `history-01`
- **slug**: `what-ai-actually-is`

### Note
This article might already be using the new pattern. Check the page.tsx to see if it uses DatabaseArticleRenderer. If not, follow the standard migration steps.

---

## Common Issues & Solutions

### Issue 1: Cards Not Showing
**Cause**: Card status is 'draft' instead of 'published'
**Solution**:
```sql
UPDATE cards SET status = 'published' WHERE card_id = 'your-card-id';
```

### Issue 2: Cards on New Lines
**Cause**: Breaking HTML structure when splitting content
**Solution**: Use the DOM parser approach in DatabaseArticleRenderer (already implemented)

### Issue 3: Hydration Errors
**Cause**: SSR/Client mismatch
**Solution**: Add `suppressHydrationWarning` to DatabaseArticleRenderer wrapper (already added)

### Issue 4: Wrong Image Path
**Cause**: Image in different directory than expected
**Solution**: Check actual image location and update headerImage path

### Issue 5: Special Characters Breaking
**Cause**: Unescaped quotes or apostrophes
**Solution**: Use template literals (backticks) for content string, no need to escape

---

## Verification Checklist

After migrating each article, verify:

- [ ] Article displays without errors
- [ ] Header image shows correctly
- [ ] All inline cards are visible
- [ ] Cards are clickable and expand properly
- [ ] Cards render inline with text (not on new lines)
- [ ] Card data is correct (title, summary, etc.)
- [ ] Key Learnings section displays
- [ ] Additional Resources accordion works
- [ ] Sources accordion works
- [ ] Navigation (prev/next) works
- [ ] No console errors
- [ ] No hydration warnings

---

## Database Query Reference

### Check article status
```sql
SELECT article_id, slug, status
FROM articles
WHERE slug = 'your-slug';
```

### Check article content
```sql
SELECT yaml_content::json->>'content' as content_preview
FROM articles
WHERE slug = 'your-slug';
```

### Check cards for article
```sql
SELECT card_id, title, status
FROM cards
WHERE 'article-slug' = ANY(used_in_articles);
```

### Update article status
```sql
UPDATE articles
SET status = 'published'
WHERE slug = 'your-slug';
```

---

## Example: Complete Migration of ai-vs-automation

### 1. Create Upload Script

File: `scripts/upload-ai-vs-automation.ts`

```typescript
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

const articleContent = {
  tldr: "Automation follows human-written 'if-then' rules, while AI learns to recognize patterns from data. Understanding this distinction is crucial for proper governance and risk management.",
  tags: ['AI Fundamentals', 'Automation', 'RPA', 'Governance Basics'],
  readTime: '8 min read',
  updatedDate: 'January 2025',
  headerImage: '/images/history/ai-vs-automation.webp',
  content: `<h2 class="content-h2"><span class="heading-decoration"></span>The Tale of Two Systems</h2><div class="content-p">Think about the last time you set an out-of-office reply on your email. You told the computer: IF an email arrives while I am away, THEN send this specific response. This is a perfect example of automation. It is reliable, predictable, and does exactly what you told it to do—nothing more and nothing less.</div><div class="content-p">Now, think about your email's spam filter. No human wrote a rule for every possible spam message. Instead, the system looked at millions of examples to learn what "spammy" patterns look like. This is {{CARD|article-link-what-ai-actually-is|artificial intelligence}}. Here is the key insight: Automation follows rules we write, but AI discovers patterns we might not even see.</div><h2 class="content-h2"><span class="heading-decoration"></span>Rules vs. Learning</h2><div class="content-p">To understand why this distinction matters for leadership, consider how these systems are built. Automation is deterministic. If you give it the same input a thousand times, you will get the exact same output a thousand times. This makes it very easy to audit. You just read the "if-then" code to see if the logic is correct.</div><div class="content-p">AI is probabilistic. It does not provide "the" answer; it provides its best guess with a certain level of confidence. Because AI behavior emerges from data rather than explicit instructions, it can handle novel situations that a rule-book might miss. However, this also means it can fail in ways that are much harder to predict.</div><div class="content-p">This difference is why we use a {{CARD|res-ai-vs-automation-decision-tree|classification decision tree}} to determine how to govern a new tool. You do not need a complex bias audit for a simple rule-engine, but you definitely need one for a system that "learns" from historical data.</div><h2 class="content-h2"><span class="heading-decoration"></span>The "Robotic" Confusion</h2><div class="content-p">You might wonder why {{CARD|concept-rpa-vs-ai|Robotic Process Automation (RPA)}} is often discussed alongside AI. Despite the name, traditional RPA is pure automation. It is essentially a software script that mimics human clicks to move data between spreadsheets and forms.</div><div class="content-p">Think of it this way: RPA takes the "robot" out of the human by handling the dreary, repetitive tasks. It only becomes "intelligent automation" when we add an AI component—like using machine learning to read a handwritten form before the RPA bot copies the data. For governance, it is vital to identify which parts of your process are following fixed rules and which parts are making inferences.</div><h2 class="content-h2"><span class="heading-decoration"></span>Why This Matters for Your Strategy</h2><div class="content-p">Mislabeling automation as AI can lead to "AI washing," where capabilities are exaggerated to stakeholders. More importantly, it creates a governance gap. Automation risks usually stem from simple logic errors or "brittleness" when a system it depends on changes. AI risks are different; they involve {{CARD|concept-model-drift|model drift}} and hidden biases.</div><div class="content-p">When you evaluate a new initiative, ask your team: "Does this system learn from data, or does it follow a set of instructions we provided?" By getting the label right, you can match your oversight to the actual risk. Now that we understand the difference between rules and learning, we are ready to look at the most important part of any AI system: the data it uses to learn those patterns.</div><div class="content-p"><i>Analogy: Automation is like a train following a fixed track; it is fast and efficient, but it can only go where the rails are laid. AI is more like a driver in a car; it can navigate new roads and handle obstacles, but it requires much more constant monitoring to ensure it stays on the right path.</i></div>`,
  keyLearnings: [
    'Automation follows explicit "if-then" rules written by humans, making it deterministic and predictable.',
    'AI learns patterns from data and makes probabilistic predictions, which can handle novel situations but also fail unpredictably.',
    'RPA (Robotic Process Automation) is pure automation unless combined with AI components like machine learning or OCR.',
    'Model drift occurs when real-world data patterns change over time, degrading AI performance without continuous monitoring.',
    'Proper classification of systems as AI vs automation is essential for matching governance oversight to actual risk levels.'
  ],
  additionalResources: [
    'UiPath - Introduction to RPA and Intelligent Automation',
    'Gartner - AI vs Automation: Classification Framework',
    'MIT Sloan - Model Drift Detection and Mitigation Strategies',
    'IEEE - Standards for Autonomous and Intelligent Systems',
    'McKinsey - AI Washing: Identifying Genuine AI Capabilities'
  ],
  sources: [
    'OECD (2024). OECD AI Principles - Defining AI Systems',
    'Gartner (2024). Magic Quadrant for Robotic Process Automation',
    'Russell, S., Norvig, P. (2020). Artificial Intelligence: A Modern Approach - Chapter on Learning',
    'MIT (2023). Model Monitoring and Drift Detection Best Practices',
    'European Commission (2024). EU AI Act - Classification of AI Systems vs Traditional Software'
  ]
};

async function uploadArticle() {
  try {
    console.log('Uploading ai-vs-automation article content...');

    const result = await sql`
      UPDATE articles
      SET yaml_content = ${JSON.stringify(articleContent)},
          status = 'published',
          updated_at = NOW()
      WHERE slug = 'ai-vs-automation'
      RETURNING article_id, slug, title
    `;

    console.log('Article uploaded successfully:', result[0]);
  } catch (error) {
    console.error('Error uploading article:', error);
    throw error;
  }
}

uploadArticle();
```

### 2. Upload to Database

```bash
DATABASE_URL='postgresql://neondb_owner:npg_FK1BryMHQGO0@ep-weathered-shadow-ahqptvcp-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require' npx tsx scripts/upload-ai-vs-automation.ts
```

### 3. Update page.tsx

File: `app/articles/ai-vs-automation/page.tsx`

```typescript
import { getCardsByArticle, getArticleBySlug } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { DatabaseArticleRenderer } from '@/components/articles/DatabaseArticleRenderer';
import { notFound } from 'next/navigation';

export default async function AIvsAutomationArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('ai-vs-automation'),
    getCardsByArticle('ai-vs-automation'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  return (
    <ArticlePageWrapper
      path="terminology"
      pathTitle="Terminology"
      articleTitle="AI vs Automation"
      tldr={content.tldr}
      tags={content.tags}
      readTime={content.readTime}
      updatedDate={content.updatedDate}
      headerImage={content.headerImage}
      currentIndex={2}
      totalArticles={8}
      prevArticle={{
        slug: '/articles/ai-technology-stack',
        title: 'The AI Technology Stack'
      }}
      nextArticle={{
        slug: '/articles/data-behind-ai',
        title: 'The Data Behind AI'
      }}
      cards={cards}
    >
      <DatabaseArticleRenderer
        content={content.content}
        keyLearnings={content.keyLearnings}
        additionalResources={content.additionalResources}
        sources={content.sources}
      />
    </ArticlePageWrapper>
  );
}
```

### 4. Test

```bash
npm run dev
# Open http://localhost:3006/articles/ai-vs-automation
```

### 5. Verify Checklist
- [x] Page loads without errors
- [x] All 4 cards display inline
- [x] Cards are clickable
- [x] Key learnings section shows
- [x] Accordions work

---

## Quick Reference: Article Slugs

1. `ai-vs-automation` → term-02
2. `data-behind-ai` → term-03
3. `ai-technology-stack` → term-01
4. `foundation-models` → term-04
5. `how-machines-learn` → history-04
6. `types-of-ai-intelligence` → history-03
7. `deep-learning-decoded` → history-05
8. `generative-ai-explained` → history-06
9. `large-language-models` → history-07
10. `ai-family-tree` → history-02
11. `what-ai-actually-is` → history-01 (COMPLETED)

---

## Tips & Best Practices

1. **Always test locally** before considering an article complete
2. **Check card status** - make sure all cards are `status = 'published'`
3. **Preserve HTML structure** - don't break block-level elements
4. **Use template literals** - backticks for content string (no escaping needed)
5. **Consistent formatting** - follow the ai-history example
6. **Verify navigation** - prev/next links should work
7. **Check mobile view** - cards should adapt properly
8. **Test interactions** - click, expand, close cards
9. **Monitor console** - watch for any warnings or errors
10. **Update one at a time** - don't rush through multiple articles

---

## Need Help?

If you encounter issues:
1. Check the DatabaseArticleRenderer implementation
2. Verify card data in database
3. Check browser console for errors
4. Compare with working ai-history article
5. Ensure all cards have `status = 'published'`
