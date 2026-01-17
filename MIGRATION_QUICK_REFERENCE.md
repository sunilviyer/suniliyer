# Quick Reference: Article Migration

## 🚀 Quick Start (Copy-Paste Ready)

### 1. Upload Article to Database
```bash
DATABASE_URL='postgresql://neondb_owner:npg_FK1BryMHQGO0@ep-weathered-shadow-ahqptvcp-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require' npx tsx scripts/upload-ARTICLE-SLUG.ts
```

### 2. Verify Upload
```bash
psql 'postgresql://neondb_owner:npg_FK1BryMHQGO0@ep-weathered-shadow-ahqptvcp-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require' -c "SELECT article_id, slug, status, CASE WHEN yaml_content IS NULL THEN 'Empty' ELSE 'Has content' END FROM articles WHERE slug = 'ARTICLE-SLUG';"
```

### 3. Check Cards
```bash
psql 'postgresql://neondb_owner:npg_FK1BryMHQGO0@ep-weathered-shadow-ahqptvcp-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require' -c "SELECT card_id, title, status FROM cards WHERE 'ARTICLE-SLUG' = ANY(used_in_articles);"
```

### 4. Publish Draft Cards (if needed)
```bash
psql 'postgresql://neondb_owner:npg_FK1BryMHQGO0@ep-weathered-shadow-ahqptvcp-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require' -c "UPDATE cards SET status = 'published' WHERE card_id = 'CARD-ID';"
```

---

## 📝 Card Conversion Cheat Sheet

### Before (JSX):
```jsx
<InlineContextCard cardId="concept-model-drift" trigger="model drift" />
```

### After (Marker):
```
{{CARD|concept-model-drift|model drift}}
```

### Common Patterns:

| JSX | Marker |
|-----|--------|
| `<InlineContextCard cardId="ex-alphago" trigger="AlphaGo" />` | `{{CARD|ex-alphago|AlphaGo}}` |
| `<InlineContextCard cardId="ms-dartmouth" trigger="Dartmouth Workshop" />` | `{{CARD|ms-dartmouth|Dartmouth Workshop}}` |
| `{' '}<InlineContextCard ... />{' '}` | Just spaces before/after marker |

---

## 🔧 page.tsx Template

```typescript
import { getCardsByArticle, getArticleBySlug } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { DatabaseArticleRenderer } from '@/components/articles/DatabaseArticleRenderer';
import { notFound } from 'next/navigation';

export default async function ArticlePage() {
  const [article, cards] = await Promise.all([
    getArticleBySlug('ARTICLE-SLUG'),
    getCardsByArticle('ARTICLE-SLUG'),
  ]);

  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  return (
    <ArticlePageWrapper
      path="PATH-NAME"
      pathTitle="Path Title"
      articleTitle="Article Title"
      tldr={content.tldr}
      tags={content.tags}
      readTime={content.readTime}
      updatedDate={content.updatedDate}
      headerImage={content.headerImage}
      currentIndex={INDEX}
      totalArticles={TOTAL}
      prevArticle={PREV ? { slug: '/articles/prev-slug', title: 'Prev Title' } : undefined}
      nextArticle={NEXT ? { slug: '/articles/next-slug', title: 'Next Title' } : undefined}
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

---

## 📋 Upload Script Template

```typescript
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

const articleContent = {
  tldr: "YOUR TLDR HERE",
  tags: ['Tag1', 'Tag2', 'Tag3'],
  readTime: 'X min read',
  updatedDate: 'January 2025',
  headerImage: '/images/path/to/image.webp',
  content: `PASTE HTML HERE WITH {{CARD|cardId|trigger}} MARKERS`,
  keyLearnings: [
    'Learning 1',
    'Learning 2',
  ],
  additionalResources: [
    'Resource 1',
    'Resource 2',
  ],
  sources: [
    'Source 1',
    'Source 2',
  ]
};

async function uploadArticle() {
  try {
    console.log('Uploading ARTICLE-NAME article...');
    const result = await sql`
      UPDATE articles
      SET yaml_content = ${JSON.stringify(articleContent)},
          status = 'published',
          updated_at = NOW()
      WHERE slug = 'ARTICLE-SLUG'
      RETURNING article_id, slug, title
    `;
    console.log('Success:', result[0]);
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

uploadArticle();
```

---

## ✅ Testing Checklist (Quick)

```
□ npm run dev
□ Open http://localhost:3006/articles/ARTICLE-SLUG
□ Header image shows
□ All cards visible and inline
□ Cards clickable
□ Key Learnings displays
□ Accordions work
□ No console errors
```

---

## 🐛 Common Fixes

### Card Not Showing
```sql
-- Check status
SELECT card_id, status FROM cards WHERE card_id = 'CARD-ID';

-- Fix if draft
UPDATE cards SET status = 'published' WHERE card_id = 'CARD-ID';
```

### Wrong Image Path
```typescript
// Common paths:
headerImage: '/images/history/filename.webp'
headerImage: '/images/terminology/filename.webp'
```

### Cards on New Lines
✅ Fixed in DatabaseArticleRenderer - no action needed

### Hydration Error
✅ Fixed with suppressHydrationWarning - no action needed

---

## 📊 Article Slugs Quick Map

| Article | Slug | ID |
|---------|------|-----|
| AI History | what-ai-actually-is | history-01 |
| AI vs Automation | ai-vs-automation | term-02 |
| Data Behind AI | data-behind-ai | term-03 |
| AI Tech Stack | ai-technology-stack | term-01 |
| Foundation Models | foundation-models | term-04 |
| How Machines Learn | how-machines-learn | history-04 |
| Types of Intelligence | types-of-ai-intelligence | history-03 |
| Deep Learning | deep-learning-decoded | history-05 |
| Generative AI | generative-ai-explained | history-06 |
| LLMs | large-language-models | history-07 |
| AI Family Tree | ai-family-tree | history-02 |

---

## ⚡ Speed Run (Complete Article in 20 mins)

1. **Extract (5 min)**
   - Copy content from page.tsx
   - Convert cards to {{CARD|...}} format

2. **Upload (2 min)**
   - Create script
   - Run upload command

3. **Update (3 min)**
   - Update page.tsx with template
   - Replace placeholders

4. **Test (10 min)**
   - Load page
   - Test all features
   - Fix any issues

---

## 🎯 Current Priority Order

1. ✅ ai-history (DONE)
2. 🔄 ai-vs-automation (Script ready)
3. ⏳ data-behind-ai
4. ⏳ ai-technology-stack
5. ⏳ foundation-models
6. ⏳ how-machines-learn
7. ⏳ types-of-ai-intelligence
8. ⏳ deep-learning-decoded
9. ⏳ generative-ai-explained
10. ⏳ large-language-models
11. ⏳ ai-family-tree

---

## 💡 Pro Tips

1. **Keep dev server running** - Hot reload saves time
2. **Do cards check first** - Avoid upload/test cycles
3. **Copy from ai-history** - Working example
4. **Test as you go** - Don't batch test at end
5. **Use template literals** - Backticks handle quotes
6. **Update progress tracker** - Stay organized
7. **Batch by path** - All terminology, then history
8. **Keep notes** - Document issues for later articles

---

## 🔗 File Locations

- Migration Guide: `/ARTICLE_MIGRATION_GUIDE.md`
- Progress Tracker: `/MIGRATION_PROGRESS.md`
- Upload Scripts: `/scripts/upload-*.ts`
- Article Pages: `/app/articles/*/page.tsx`
- Renderer: `/components/articles/DatabaseArticleRenderer.tsx`

---

## ⏰ Time Savers

### Multi-card Fix
```sql
-- Publish multiple cards at once
UPDATE cards SET status = 'published'
WHERE card_id IN ('card1', 'card2', 'card3');
```

### Quick Content Check
```sql
-- See first 200 chars
SELECT LEFT(yaml_content::json->>'content', 200)
FROM articles WHERE slug = 'SLUG';
```

### Find All Draft Cards
```sql
SELECT card_id, title FROM cards
WHERE status = 'draft'
AND used_in_articles && ARRAY['your-slug'];
```

---

## 📞 Need Help?

1. Check `/ARTICLE_MIGRATION_GUIDE.md` for detailed steps
2. Compare with ai-history working example
3. Check browser console for errors
4. Verify card status in database
5. Check image paths exist

---

## 🎉 Success Markers

- No errors in browser console
- All cards clickable and expand
- Cards render inline with text
- Page looks identical to before
- All navigation works

---

**Last Updated**: 2025-01-16
**Working Example**: ai-history (what-ai-actually-is)
**Status**: 1/12 Complete
