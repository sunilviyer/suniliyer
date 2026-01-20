# AIDefence Documentation

Complete documentation for managing content in the AIDefence database-driven article system.

---

## 📚 Documentation Index

### Getting Started

1. **[QUICK-REFERENCE.md](./QUICK-REFERENCE.md)** - Start here!
   - Cheat sheet for common operations
   - Fast lookup for syntax and commands
   - Perfect for daily reference

2. **[ARTICLES-TABLE-GUIDE.md](./ARTICLES-TABLE-GUIDE.md)** - Complete Guide
   - Database schema documentation
   - Content structure specification
   - HTML formatting rules
   - Card marker system
   - Full examples and best practices
   - ~500 lines of detailed documentation

3. **[RESOURCE-STRUCTURE-GUIDE.md](./RESOURCE-STRUCTURE-GUIDE.md)** - Resources
   - Rich media resource system (PDFs, Excel, videos)
   - Type icons and formatting
   - Academic citation support
   - Template for all 5 risk articles

---

## 🚀 Quick Start

### Adding Your First Article

1. **Copy the template:**
   ```bash
   cp scripts/templates/add-single-article-template.ts scripts/add-my-article.ts
   ```

2. **Edit the template:**
   - Update metadata (article_id, title, slug, path, position)
   - Add your content following HTML rules
   - Include card markers where needed
   - Add resources and sources

3. **Run the script:**
   ```bash
   npx tsx scripts/add-my-article.ts
   ```

4. **View locally:**
   ```bash
   npm run dev
   # Visit: http://localhost:3006/articles/your-slug
   ```

### Adding Multiple Articles

Use `scripts/templates/batch-add-articles-template.ts` for adding multiple articles to the same learning path.

---

## 📖 Documentation Structure

```
docs/
├── README.md                          # This file - Overview
├── QUICK-REFERENCE.md                 # Cheat sheet
├── ARTICLES-TABLE-GUIDE.md            # Complete guide
├── RESOURCE-STRUCTURE-GUIDE.md        # Resources guide
├── resource-structure-proposal.md     # Technical spec
└── risk-article-resources-template.json  # Example data

scripts/templates/
├── add-single-article-template.ts     # Single article template
└── batch-add-articles-template.ts     # Batch template
```

---

## 🎯 Common Tasks

### Task: Add a New Article

1. Read: [ARTICLES-TABLE-GUIDE.md](./ARTICLES-TABLE-GUIDE.md) - Database Schema section
2. Use: `scripts/templates/add-single-article-template.ts`
3. Reference: [QUICK-REFERENCE.md](./QUICK-REFERENCE.md) - HTML Templates

### Task: Add Resources to Existing Article

1. Read: [RESOURCE-STRUCTURE-GUIDE.md](./RESOURCE-STRUCTURE-GUIDE.md)
2. Reference: `docs/risk-article-resources-template.json`
3. Create update script to modify `yaml_content`

### Task: Fix Card Errors

1. Reference: [QUICK-REFERENCE.md](./QUICK-REFERENCE.md) - Common Issues
2. Check card exists and is published
3. Ensure card is linked to article

### Task: Validate Content

1. Read: [ARTICLES-TABLE-GUIDE.md](./ARTICLES-TABLE-GUIDE.md) - Validation Script
2. Create validation script for your article
3. Fix any issues found

---

## 📋 Content Structure Overview

### Articles Table

Every article has:
- **Metadata**: article_id, title, slug, path, position, status
- **Content**: JSON in `yaml_content` field with:
  - Required: tldr, tags, content, keyLearnings
  - Recommended: readTime, updatedDate, headerImage
  - Optional: additionalResources, sources

### HTML Content Rules

```html
<!-- Section Header -->
<h2 class="content-h2"><span class="heading-decoration"></span>Title</h2>

<!-- Paragraph -->
<div class="content-p">Text with {{CARD|card-id|trigger}} inline.</div>

<!-- List -->
<ul class="content-ul">
  <li>Item</li>
</ul>

<!-- Emphasis -->
<em>emphasized text</em>
```

### Card Markers

```
{{CARD|card-id|trigger text}}
```

Cards must:
- Exist in cards table
- Have `status = 'published'`
- Include article slug in `used_in_articles`

### Resources

Supports both simple strings and rich objects:

```json
{
  "additionalResources": [
    "Simple String Resource",
    {
      "title": "Rich Resource",
      "url": "https://example.com",
      "type": "pdf",
      "description": "Description here"
    }
  ]
}
```

---

## 🔍 Finding Information

| What You Need | Where to Look |
|---------------|---------------|
| Quick syntax lookup | [QUICK-REFERENCE.md](./QUICK-REFERENCE.md) |
| Database schema | [ARTICLES-TABLE-GUIDE.md](./ARTICLES-TABLE-GUIDE.md) - Database Schema |
| HTML formatting | [ARTICLES-TABLE-GUIDE.md](./ARTICLES-TABLE-GUIDE.md) - HTML Formatting Rules |
| Card markers | [ARTICLES-TABLE-GUIDE.md](./ARTICLES-TABLE-GUIDE.md) - Card Markers |
| Resource types | [RESOURCE-STRUCTURE-GUIDE.md](./RESOURCE-STRUCTURE-GUIDE.md) |
| Complete examples | [ARTICLES-TABLE-GUIDE.md](./ARTICLES-TABLE-GUIDE.md) - Examples |
| Templates | `scripts/templates/` |
| Resource examples | `docs/risk-article-resources-template.json` |

---

## 💡 Best Practices

1. **Always validate before inserting**
   - Check article_id and slug are unique
   - Verify all cards exist and are published
   - Validate JSON structure

2. **Test locally first**
   - Insert to database
   - View at localhost:3006
   - Check cards work
   - Verify resources render

3. **Follow HTML rules strictly**
   - Use `content-h2`, `content-p`, `content-ul` classes
   - Include `heading-decoration` span in h2
   - No `<strong>` or `<b>` tags
   - Use `<em>` for emphasis

4. **Document your changes**
   - Commit scripts used to add articles
   - Include article metadata in commit message
   - Note any new cards created

---

## 🛠️ Tools and Scripts

### Templates
- `scripts/templates/add-single-article-template.ts` - Add one article
- `scripts/templates/batch-add-articles-template.ts` - Add multiple articles

### Utilities (create as needed)
- Validation script - Check article structure
- Migration script - Convert YAML to JSON
- Update script - Modify existing articles
- Card linker - Link cards to articles

---

## 🎓 Learning Path

### Beginner
1. Read [QUICK-REFERENCE.md](./QUICK-REFERENCE.md)
2. Review existing articles in database
3. Try adding a simple article using template

### Intermediate
1. Read [ARTICLES-TABLE-GUIDE.md](./ARTICLES-TABLE-GUIDE.md) completely
2. Add articles with cards
3. Include rich resources

### Advanced
1. Read [RESOURCE-STRUCTURE-GUIDE.md](./RESOURCE-STRUCTURE-GUIDE.md)
2. Create custom scripts for batch operations
3. Implement validation and migration tools

---

## 📊 Current Status

### Articles by Path

| Path | Count | Status |
|------|-------|--------|
| history | 8 | ✅ Complete with resources |
| risk | 8 | ⚠️ Missing resources (5 articles) |
| terminology | 8 | ✅ Published |
| responsibility | 8 | ✅ Published |
| future | 8 | ✅ Published |

### Resources Needed

All **5 risk articles** need additionalResources and sources:
- when-ai-goes-wrong
- algorithmic-bias
- ai-hallucinations
- ai-privacy
- deepfakes-synthetic-media

See: [risk-article-resources-template.json](./risk-article-resources-template.json)

---

## 🔗 Related Documentation

- **Database**: Check database schema with `scripts/inspect-articles-table-structure.ts`
- **Cards**: See cards documentation (to be created)
- **Deployment**: See deployment guide (to be created)

---

## 📝 Notes

- Articles use database-driven content (stored in `yaml_content` JSON field)
- No file-based article content (all in database)
- Rich resource system supports PDFs, Excel, videos, links
- Card system provides interactive inline context
- All paths have 8 articles each (40 total articles)

---

## 🆘 Getting Help

1. Check [QUICK-REFERENCE.md](./QUICK-REFERENCE.md) first
2. Search [ARTICLES-TABLE-GUIDE.md](./ARTICLES-TABLE-GUIDE.md) for topic
3. Review existing articles in database as examples
4. Check templates in `scripts/templates/`

---

**Last Updated**: January 2025
**Version**: 2.0 (Database-driven)
