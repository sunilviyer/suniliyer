# Article Migration Progress Tracker

## Status Legend
- ✅ DONE: Fully migrated and verified
- 🔄 IN PROGRESS: Currently working on
- ⏳ PENDING: Not started yet
- ⚠️ ISSUES: Has problems that need fixing

---

## Overall Progress: 1/12 Complete (8%)

---

## Articles

### 1. ai-history (what-ai-actually-is) ✅
- **Status**: DONE
- **article_id**: history-01
- **slug**: what-ai-actually-is
- **Date Completed**: 2025-01-16
- **Cards**: 5 cards
- **Verification**: All checks passed
- **Notes**: Reference implementation for other articles

---

### 2. ai-vs-automation ⏳
- **Status**: READY TO MIGRATE (script created)
- **article_id**: term-02
- **slug**: ai-vs-automation
- **Cards**: 4 cards
- **Script**: `/scripts/upload-ai-vs-automation.ts` ✅
- **Next Steps**:
  1. Run upload script
  2. Update page.tsx
  3. Test and verify

**Upload Command:**
```bash
DATABASE_URL='postgresql://neondb_owner:npg_FK1BryMHQGO0@ep-weathered-shadow-ahqptvcp-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require' npx tsx scripts/upload-ai-vs-automation.ts
```

---

### 3. data-behind-ai ⏳
- **Status**: PENDING
- **article_id**: term-03
- **slug**: data-behind-ai
- **Steps Needed**:
  1. [ ] Extract content from page.tsx
  2. [ ] Convert InlineContextCard to {{CARD|...}} format
  3. [ ] Create upload script
  4. [ ] Upload to database
  5. [ ] Update page.tsx
  6. [ ] Test and verify

---

### 4. ai-technology-stack ⏳
- **Status**: PENDING
- **article_id**: term-01
- **slug**: ai-technology-stack

---

### 5. foundation-models ⏳
- **Status**: PENDING
- **article_id**: term-04
- **slug**: foundation-models

---

### 6. how-machines-learn ⏳
- **Status**: PENDING
- **article_id**: history-04
- **slug**: how-machines-learn

---

### 7. types-of-ai-intelligence ⏳
- **Status**: PENDING
- **article_id**: history-03
- **slug**: types-of-ai-intelligence

---

### 8. deep-learning-decoded ⏳
- **Status**: PENDING
- **article_id**: history-05
- **slug**: deep-learning-decoded

---

### 9. generative-ai-explained ⏳
- **Status**: PENDING
- **article_id**: history-06
- **slug**: generative-ai-explained

---

### 10. large-language-models ⏳
- **Status**: PENDING
- **article_id**: history-07
- **slug**: large-language-models

---

### 11. ai-family-tree ⏳
- **Status**: PENDING
- **article_id**: history-02
- **slug**: ai-family-tree

---

### 12. what-ai-actually-is ✅
- **Status**: DONE (Alternative slug/page)
- **Note**: May be duplicate of ai-history
- **Action**: Verify if this needs separate migration

---

## Migration Checklist Template

Copy this for each article:

```markdown
### Article: [article-name]

#### Phase 1: Preparation
- [ ] Read current page.tsx
- [ ] Identify all InlineContextCard usages
- [ ] Extract metadata (tldr, tags, etc.)
- [ ] Extract keyLearnings array
- [ ] Extract additionalResources array
- [ ] Extract sources array

#### Phase 2: Content Conversion
- [ ] Copy main HTML content
- [ ] Convert all `<InlineContextCard cardId="..." trigger="..." />` to `{{CARD|...|...}}`
- [ ] Remove `{' '}` spacing components
- [ ] Verify HTML structure is intact
- [ ] Check for special characters

#### Phase 3: Script Creation
- [ ] Create `scripts/upload-[slug].ts`
- [ ] Paste converted content
- [ ] Verify all fields populated
- [ ] Check articleContent structure

#### Phase 4: Database Upload
- [ ] Run upload script
- [ ] Verify success message
- [ ] Check database content
- [ ] Verify cards are published

#### Phase 5: Page Update
- [ ] Add `getArticleBySlug` import
- [ ] Add `DatabaseArticleRenderer` import
- [ ] Update page component to fetch article
- [ ] Replace content component with DatabaseArticleRenderer
- [ ] Keep navigation and metadata

#### Phase 6: Testing
- [ ] Start dev server
- [ ] Navigate to article
- [ ] Check header image
- [ ] Check all cards visible
- [ ] Test card interactions
- [ ] Verify inline rendering
- [ ] Check Key Learnings
- [ ] Check accordions
- [ ] Test prev/next navigation
- [ ] Check console for errors

#### Phase 7: Documentation
- [ ] Update this progress tracker
- [ ] Note any issues encountered
- [ ] Document card status fixes if needed
```

---

## Common Issues Log

### Issue: Card Not Found
- **Article**: [article-name]
- **Card ID**: [card-id]
- **Solution**: `UPDATE cards SET status = 'published' WHERE card_id = '[card-id]';`

### Issue: Image Not Found
- **Article**: [article-name]
- **Expected Path**: [path]
- **Actual Path**: [path]
- **Solution**: Updated headerImage in upload script

---

## Time Estimates

- **Per Article**: 15-30 minutes
- **Total Remaining**: 2.5-5 hours for 10 articles
- **Recommended**: 2-3 articles per session

---

## Next Session Plan

1. Complete ai-vs-automation (easiest, script ready)
2. Complete data-behind-ai
3. Complete ai-technology-stack

---

## Database Verification Queries

### Check all article statuses
```sql
SELECT article_id, slug, status,
       CASE WHEN yaml_content IS NULL THEN 'No content' ELSE 'Has content' END as content_status
FROM articles
WHERE article_id IN ('term-01', 'term-02', 'term-03', 'term-04', 'history-02', 'history-03', 'history-04', 'history-05', 'history-06', 'history-07', 'history-01')
ORDER BY article_id;
```

### Check card counts per article
```sql
SELECT
  article_slugs.slug,
  COUNT(c.card_id) as card_count
FROM
  (VALUES ('ai-vs-automation'), ('data-behind-ai'), ('ai-technology-stack'),
          ('foundation-models'), ('how-machines-learn'), ('types-of-ai-intelligence'),
          ('deep-learning-decoded'), ('generative-ai-explained'), ('large-language-models'),
          ('ai-family-tree'), ('what-ai-actually-is')) AS article_slugs(slug)
LEFT JOIN cards c ON article_slugs.slug = ANY(c.used_in_articles)
WHERE c.status = 'published' OR c.status IS NULL
GROUP BY article_slugs.slug
ORDER BY article_slugs.slug;
```

---

## Success Criteria

An article is considered "complete" when:

1. ✅ Upload script runs without errors
2. ✅ Database contains article content
3. ✅ page.tsx uses DatabaseArticleRenderer
4. ✅ Page loads without errors
5. ✅ All cards display and work
6. ✅ Cards render inline
7. ✅ Key Learnings displays
8. ✅ Accordions work
9. ✅ No console errors
10. ✅ Progress tracker updated

---

## Batch Processing Strategy

### Batch 1: Terminology (Priority)
- ai-vs-automation
- data-behind-ai
- ai-technology-stack
- foundation-models

### Batch 2: History
- how-machines-learn
- types-of-ai-intelligence
- deep-learning-decoded

### Batch 3: Advanced History
- generative-ai-explained
- large-language-models
- ai-family-tree

---

## Notes

- **Reference**: ai-history (what-ai-actually-is) is the working example
- **Pattern**: All scripts follow same structure
- **Database**: Using Neon PostgreSQL
- **Renderer**: DatabaseArticleRenderer handles parsing
- **Cards**: Must be `status = 'published'` to show
