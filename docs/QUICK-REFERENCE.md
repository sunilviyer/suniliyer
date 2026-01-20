# Quick Reference Card

Fast lookup for common article operations.

---

## Article Structure Cheat Sheet

### Required Fields
```json
{
  "tldr": "One-sentence summary",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "content": "<h2>...</h2><div>...</div>",
  "keyLearnings": ["Point 1", "Point 2"],
  "readTime": "8 min read",
  "updatedDate": "January 2025",
  "headerImage": "/images/path/image.webp",
  "additionalResources": [],
  "sources": []
}
```

### HTML Templates

**Section Header**
```html
<h2 class="content-h2"><span class="heading-decoration"></span>Section Title</h2>
```

**Paragraph**
```html
<div class="content-p">Your text here with {{CARD|card-id|trigger}} inline.</div>
```

**List**
```html
<ul class="content-ul">
  <li>Item one</li>
  <li>Item two</li>
</ul>
```

**Emphasis**
```html
<em>emphasized text</em>
```

### Card Marker Syntax
```
{{CARD|card-id|trigger text}}
```

Example:
```
{{CARD|ex-dartmouth-workshop|the 1956 Dartmouth workshop}}
```

---

## Common Commands

### Add Single Article
```bash
npx tsx scripts/templates/add-single-article-template.ts
```

### Add Multiple Articles
```bash
npx tsx scripts/templates/batch-add-articles-template.ts
```

### Validate Article
```typescript
const article = await sql`
  SELECT yaml_content FROM articles WHERE slug = 'your-slug'
`;
const content = JSON.parse(article[0].yaml_content);
console.log(Object.keys(content));
```

### Check Card Exists
```typescript
const card = await sql`
  SELECT card_id, status FROM cards WHERE card_id = 'card-id'
`;
console.log(card[0].status); // Should be 'published'
```

### Publish Card
```typescript
await sql`
  UPDATE cards SET status = 'published' WHERE card_id = 'card-id'
`;
```

### Link Card to Article
```typescript
await sql`
  UPDATE cards
  SET used_in_articles = array_append(used_in_articles, 'article-slug')
  WHERE card_id = 'card-id'
`;
```

---

## Database Queries

### List All Articles in Path
```sql
SELECT article_id, title, slug, position, status
FROM articles
WHERE path = 'history'
ORDER BY position;
```

### Get Article Content
```sql
SELECT yaml_content
FROM articles
WHERE slug = 'article-slug';
```

### Update Article Content
```sql
UPDATE articles
SET yaml_content = '{"tldr":"..."}',
    updated_at = NOW()
WHERE slug = 'article-slug';
```

### Check Article Exists
```sql
SELECT COUNT(*) FROM articles WHERE article_id = 'path-##';
```

---

## Card Types Reference

| Prefix | Type | Example |
|--------|------|---------|
| `ex-` | Example | `ex-deep-blue` |
| `concept-` | Concept | `concept-machine-learning` |
| `fw-` | Framework | `fw-oecd-ai-principles` |
| `res-` | Resource | `res-ai-incident-database` |
| `sc-` | Scenario | `sc-fake-professor-bio` |

---

## Resource Types

| Type | Icon | Use For |
|------|------|---------|
| `pdf` | 📄 | PDF documents |
| `excel` | 📊 | Spreadsheets |
| `video` | 🎥 | Videos |
| `article` | 📰 | Articles |
| `website` | 🌐 | Websites |
| `tool` | 🔧 | Tools |
| `document` | 📝 | Documents |

---

## Learning Paths

| Path | Theme |
|------|-------|
| `history` | AI history and evolution |
| `terminology` | Key concepts and definitions |
| `risk` | AI risks and failures |
| `responsibility` | Ethics and governance |
| `future` | Future trends and implications |

---

## File Locations

```
/docs/
  ├── ARTICLES-TABLE-GUIDE.md          # Full guide
  ├── RESOURCE-STRUCTURE-GUIDE.md      # Resources guide
  └── QUICK-REFERENCE.md               # This file

/scripts/templates/
  ├── add-single-article-template.ts   # Single article
  └── batch-add-articles-template.ts   # Batch add

/public/images/
  ├── history/        # History images
  ├── risk/          # Risk images
  ├── terminology/   # Terminology images
  ├── responsibility/
  └── future/

/public/downloads/   # PDFs, Excel files
```

---

## Common Issues

**Card not showing**
```typescript
// 1. Check card exists
// 2. Check status is 'published'
// 3. Check used_in_articles includes article slug
```

**JSON parsing error**
```typescript
// Validate JSON before insert
JSON.parse(yourContentString);
```

**Article not appearing**
```typescript
// Check: article_id, slug, status, yaml_content all set
```

---

## Validation Checklist

Before inserting article:

- [ ] `article_id` is unique
- [ ] `slug` is unique and lowercase with hyphens
- [ ] `path` is valid learning path
- [ ] `position` is correct
- [ ] All card IDs exist in cards table
- [ ] All cards are published
- [ ] JSON is valid
- [ ] Images exist at specified paths
- [ ] HTML follows formatting rules
- [ ] `tldr`, `tags`, `content`, `keyLearnings` are present

---

## Quick Links

- Full Guide: [ARTICLES-TABLE-GUIDE.md](./ARTICLES-TABLE-GUIDE.md)
- Resources: [RESOURCE-STRUCTURE-GUIDE.md](./RESOURCE-STRUCTURE-GUIDE.md)
- Template: [risk-article-resources-template.json](./risk-article-resources-template.json)
