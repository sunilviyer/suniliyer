# V1 to V2 Content Migration Plan

**Created**: 2025-12-23
**Purpose**: Complete audit and migration strategy for existing 140+ articles from V1 to V2 structure
**Status**: Ready for execution

---

## 📊 Current State Assessment

### V1 Content Location
- **Path**: `/Volumes/External/AIDefence/OLD/v1-complete/content/`
- **Total Files**: 167 markdown files in `/articles/final/`
- **Knowledge Graph**: `content/knowledge-graph.yaml` (63KB)
- **Folder Structure**:
  ```
  /content/
    /articles/
      /final/          ← 167 .md files
      /clean/          ← Cleaned/processed
      /review/         ← Under review
      /articleprocessing/
      /drafts/
    knowledge-graph.yaml
    /learn/           ← Additional learning resources
  ```

### V1 Frontmatter Structure (Example: ai-hallucinations.md)

```yaml
---
title: AI Hallucinations – When Machines Confidently Lie
tldr: ''  # EMPTY in V1
category: AI Risks & Principles
learning_objectives:
  - Understand the key concepts and principles of ai governance principles
  - Implement implementation strategies in real-world scenarios
  - Evaluate compliance frameworks for organizational compliance
seo_keywords:
  - hallucinations
  - when
  - artificial intelligence
  - when machines confidently lie
  - this
components:
  - type: image_prompt
    label: Article Hero Image
    section: Header
    id: image-prompt-hero
    prompt: balanced composition showing...
  - type: flowchart
    label: Sources Process
    section: Sources
    id: flowchart-sources
  - type: template
    label: 'Example: The Fake Professor'
    section: What Are AI Hallucinations?
    id: template-what-are-ai-hallucinations
    template_link: /templates/example-the-fake-professor.md
topic_fingerprint:
  - large language model
  - llm
  - foundation model
named_examples:
  - anthropic
  - openai
  - stanford
word_count: 2873
processed_date: '2025-12-18T20:04:26.710Z'
---
```

**V1 Issues**:
- ❌ `tldr` field empty (critical for card fronts)
- ❌ No `slug` field (URL routing issue)
- ❌ No `path` field (learning path assignment missing)
- ❌ No `relatedConcepts` array (cross-referencing broken)
- ❌ No `crossPathRefs` object (knowledge graph incomplete)
- ❌ No `tags` array (taxonomy missing)
- ❌ No `image` field (asset linking broken)
- ❌ `learning_objectives` generic, not article-specific
- ❌ `seo_keywords` auto-generated (poor quality)
- ❌ `components` array V1-specific (not in V2 spec)
- ❌ `topic_fingerprint` and `named_examples` V1-specific

---

## 🎯 V2 Required Structure

### V2 Frontmatter (from article-structure-spec.md)

```yaml
---
# CORE METADATA
title: "Article Title (60 characters max)"
slug: "url-friendly-slug"
path: history | terminology | risk | responsibility | future

# CONTENT PREVIEW
tldr: "1-2 sentence summary (120-150 characters)"

# CONTENT ORGANIZATION
contentSections:
  - "What You'll Learn Section 1"
  - "What You'll Learn Section 2"
  - "What You'll Learn Section 3"

# RELATIONSHIPS
relatedConcepts: [concept-id-1, concept-id-2, concept-id-3]
crossPathRefs:
  terminology: [term-1, term-2]
  risk: [risk-5]

# TAXONOMY
tags: [tag1, tag2, tag3]  # 3-5 tags max
category: "Primary Category"

# ASSETS
image: "slug.jpg"
imageAlt: "Descriptive alt text"

# PUBLISHING
author: "Sunil Iyer"
publishDate: "2025-01-15"
updatedDate: "2025-01-20"  # If different
readingTime: "8"  # Minutes

# SEO
seoTitle: "SEO-optimized title (60 chars)"
seoDescription: "Meta description (155 chars)"
---
```

**V2 Improvements**:
- ✅ Required `slug` for URL routing
- ✅ Required `path` for learning path assignment
- ✅ Required `tldr` for card fronts
- ✅ Structured `relatedConcepts` and `crossPathRefs`
- ✅ Specific `tags` (not auto-generated keywords)
- ✅ Direct `image` field matching slug
- ✅ Reading time calculated explicitly
- ✅ Clean SEO fields (title + description only)

---

## 🔄 Migration Strategy

### Phase 1: Folder Structure Setup ✅

**Create V2 folder structure in working directory:**

```bash
mkdir -p /Volumes/External/AIDefence/content
mkdir -p /Volumes/External/AIDefence/content/articles
mkdir -p /Volumes/External/AIDefence/content/articles/final
mkdir -p /Volumes/External/AIDefence/content/articles/staging
mkdir -p /Volumes/External/AIDefence/content/articles/needs-review
```

**Rationale**:
- `/final/` = Production-ready articles with correct V2 frontmatter
- `/staging/` = Articles being migrated/updated
- `/needs-review/` = Articles with frontmatter issues flagged for manual review

### Phase 2: Knowledge Graph Migration ✅

**Copy and validate knowledge graph:**

```bash
cp /Volumes/External/AIDefence/OLD/v1-complete/content/knowledge-graph.yaml \
   /Volumes/External/AIDefence/content/
```

**Validate structure:**
- Verify all `concept_cards_*` sections present
- Check `id`, `slug`, `title` consistency
- Validate `related_concepts` and `cross_path_refs` arrays

### Phase 3: Article-by-Article Migration 🔄

**Automated Migration Script** (create `/docs/scripts/migrate-v1-to-v2.js`):

```javascript
// Pseudocode for migration script
const fs = require('fs');
const matter = require('gray-matter');
const yaml = require('js-yaml');

const knowledgeGraph = yaml.load(
  fs.readFileSync('/Volumes/External/AIDefence/content/knowledge-graph.yaml', 'utf8')
);

function getSlugFromFilename(filename) {
  return filename.replace('.md', '');
}

function findConceptInKG(slug) {
  // Search knowledge graph for concept by slug
  const allConcepts = [
    ...knowledgeGraph.concept_cards_history || [],
    ...knowledgeGraph.concept_cards_terminology || [],
    ...knowledgeGraph.concept_cards_risk || [],
    ...knowledgeGraph.concept_cards_responsibility || [],
    ...knowledgeGraph.concept_cards_future || []
  ];

  return allConcepts.find(c => c.slug === slug);
}

function migrateArticle(filename) {
  const v1Path = `/Volumes/External/AIDefence/OLD/v1-complete/content/articles/final/${filename}`;
  const content = fs.readFileSync(v1Path, 'utf8');
  const { data: v1Front, content: articleBody } = matter(content);

  const slug = getSlugFromFilename(filename);
  const concept = findConceptInKG(slug);

  if (!concept) {
    console.warn(`⚠️  No knowledge graph entry for ${slug}`);
    return { status: 'needs-review', slug };
  }

  // Build V2 frontmatter
  const v2Front = {
    // CORE METADATA
    title: v1Front.title || concept.title,
    slug: slug,
    path: concept.path,

    // CONTENT PREVIEW
    tldr: concept.tldr || extractFirstSentence(articleBody), // Fallback to first sentence

    // CONTENT ORGANIZATION
    contentSections: extractSections(articleBody), // Parse H2 headings

    // RELATIONSHIPS (from knowledge graph)
    relatedConcepts: concept.related_concepts || [],
    crossPathRefs: concept.cross_path_refs || {},

    // TAXONOMY
    tags: concept.tags || inferTagsFromCategory(v1Front.category),
    category: concept.path, // Use path as primary category

    // ASSETS
    image: `${slug}.jpg`,
    imageAlt: `${concept.title} - Concept visualization`,

    // PUBLISHING
    author: "Sunil Iyer",
    publishDate: extractPublishDate(v1Front.processed_date),
    readingTime: calculateReadingTime(v1Front.word_count || articleBody),

    // SEO
    seoTitle: truncate(v1Front.title, 60),
    seoDescription: truncate(concept.tldr || extractFirstSentence(articleBody), 155)
  };

  // Write V2 article
  const v2Content = matter.stringify(articleBody, v2Front);
  const v2Path = `/Volumes/External/AIDefence/content/articles/staging/${filename}`;
  fs.writeFileSync(v2Path, v2Content);

  return { status: 'migrated', slug };
}

// Helper functions
function extractFirstSentence(content) {
  const match = content.match(/^##?\s+[A-Z].*?[.!?]/);
  return match ? match[0] : '';
}

function extractSections(content) {
  const headings = content.match(/^##\s+(.+)$/gm);
  return headings ? headings.map(h => h.replace('## ', '')) : [];
}

function calculateReadingTime(wordCountOrContent) {
  const wordCount = typeof wordCountOrContent === 'number'
    ? wordCountOrContent
    : wordCountOrContent.split(/\s+/).length;
  return Math.ceil(wordCount / 250); // 250 words/min
}

function inferTagsFromCategory(category) {
  const tagMap = {
    'AI Risks & Principles': ['AI Safety', 'AI Ethics', 'Risk Management'],
    'AI Fundamentals': ['AI Technology', 'Machine Learning', 'AI Basics'],
    'Legal Frameworks': ['AI Regulation', 'Compliance', 'Legal'],
    // ... etc
  };
  return tagMap[category] || ['AI Governance'];
}

// Run migration
const articles = fs.readdirSync('/Volumes/External/AIDefence/OLD/v1-complete/content/articles/final/');
const results = articles.map(migrateArticle);

console.log(`✅ Migrated: ${results.filter(r => r.status === 'migrated').length}`);
console.log(`⚠️  Needs Review: ${results.filter(r => r.status === 'needs-review').length}`);
```

### Phase 4: Manual Review 👁️

**Articles requiring manual review:**

1. **Missing TLDR**: Articles where knowledge graph `tldr` is empty
   - Extract from article introduction
   - Write 1-2 sentence summary (120-150 chars)

2. **Missing Knowledge Graph Entry**: Articles not in knowledge-graph.yaml
   - Manually add to appropriate `concept_cards_*` section
   - Assign `path`, `related_concepts`, `cross_path_refs`, `tags`

3. **Content Sections Mismatch**: Articles where H2 headings don't match V2 spec
   - Verify section structure follows template
   - Rewrite headings if needed

4. **Image Mismatch**: Articles where slug doesn't match existing image filename
   - Rename image files to match slug
   - OR update `image` field to match existing filename

### Phase 5: Content Quality Validation ✅

**Run validation script on all migrated articles:**

```javascript
// Validation checklist (from article-structure-spec.md)
function validateArticle(filename) {
  const content = fs.readFileSync(filename, 'utf8');
  const { data: front, content: body } = matter(content);

  const errors = [];

  // Required frontmatter fields
  if (!front.title) errors.push('Missing title');
  if (!front.slug) errors.push('Missing slug');
  if (!front.path) errors.push('Missing path');
  if (!front.tldr) errors.push('Missing tldr');
  if (!front.contentSections || front.contentSections.length === 0)
    errors.push('Missing contentSections');
  if (!front.relatedConcepts || front.relatedConcepts.length === 0)
    errors.push('Missing relatedConcepts');
  if (!front.tags || front.tags.length === 0)
    errors.push('Missing tags');
  if (!front.image) errors.push('Missing image');
  if (!front.author) errors.push('Missing author');
  if (!front.readingTime) errors.push('Missing readingTime');

  // Content validation
  const wordCount = body.split(/\s+/).length;
  if (wordCount < 1500) errors.push(`Word count too low: ${wordCount}`);
  if (wordCount > 4000) errors.push(`Word count too high: ${wordCount}`);

  const h2Count = (body.match(/^##\s+/gm) || []).length;
  if (h2Count < 4) errors.push(`Too few sections: ${h2Count}`);
  if (h2Count > 10) errors.push(`Too many sections: ${h2Count}`);

  // Summary block validation
  if (!body.includes('## Summary')) errors.push('Missing summary block');

  return { filename, errors };
}

const results = migratedArticles.map(validateArticle);
const failedArticles = results.filter(r => r.errors.length > 0);

console.log(`✅ Valid: ${results.length - failedArticles.length}`);
console.log(`❌ Failed: ${failedArticles.length}`);
failedArticles.forEach(f => {
  console.log(`\n${f.filename}:`);
  f.errors.forEach(e => console.log(`  - ${e}`));
});
```

### Phase 6: Promotion to Final 🚀

**Move validated articles from `/staging/` to `/final/`:**

```bash
# Only move articles with zero validation errors
for article in staging/*.md; do
  if validate_article "$article"; then
    mv "$article" final/
    echo "✅ Promoted: $(basename $article)"
  else
    mv "$article" needs-review/
    echo "⚠️  Needs Review: $(basename $article)"
  fi
done
```

---

## 📋 Migration Checklist

### Pre-Migration ✅
- [x] Create V2 folder structure
- [x] Copy knowledge-graph.yaml to V2
- [x] Validate knowledge graph structure
- [x] Create migration script
- [x] Create validation script

### Migration Execution 🔄
- [ ] Run automated migration on all 167 articles
- [ ] Review migration results (count migrated vs needs-review)
- [ ] Manually fix articles with missing knowledge graph entries
- [ ] Manually write TLDR for articles with empty tldr field
- [ ] Validate all article filenames match slugs
- [ ] Ensure all images exist for image fields

### Post-Migration Validation 🔍
- [ ] Run content quality validation on all articles
- [ ] Check all `relatedConcepts` IDs exist in knowledge graph
- [ ] Check all `crossPathRefs` IDs exist in respective paths
- [ ] Verify reading time calculations reasonable (5-15 min range)
- [ ] Spot-check 10 random articles for frontmatter correctness
- [ ] Test all slugs in Next.js dynamic routes

### Final Cleanup 🧹
- [ ] Move validated articles to `/final/`
- [ ] Document articles in `/needs-review/` folder
- [ ] Archive V1 content (keep in `/OLD/` for reference)
- [ ] Update `articles-reference.md` with V2 file paths
- [ ] Update `content-structure.md` with V2 confirmation

---

## 🚨 Known Issues & Resolutions

### Issue 1: Empty TLDR Fields

**Problem**: V1 articles have `tldr: ''` (empty string)

**Resolution**:
1. **Automated**: Extract first sentence from article intro
2. **Manual**: Write proper 1-2 sentence summary for critical articles
3. **Knowledge Graph**: If concept exists in KG, use its `tldr` field

**Affected Articles**: ~50-70% (estimated based on sample)

### Issue 2: Missing Slug Field

**Problem**: V1 frontmatter doesn't include `slug` field

**Resolution**:
- **Automated**: Extract from filename (remove `.md` extension)
- Validate slug is kebab-case (lowercase, hyphens, no special chars)

**Affected Articles**: 100% (all V1 articles)

### Issue 3: No Path Assignment

**Problem**: V1 uses `category` instead of learning `path`

**Resolution**:
- **Automated**: Look up article in knowledge graph by slug
- Use knowledge graph's `path` field
- If not in KG, flag for manual review

**Affected Articles**: 100% (all V1 articles)

### Issue 4: Generic Learning Objectives

**Problem**: V1 `learning_objectives` are generic templates, not article-specific

**Resolution**:
- **Replace** with V2 `contentSections` extracted from H2 headings
- These describe what readers actually learn from article sections

**Affected Articles**: 100% (all V1 articles)

### Issue 5: Auto-Generated SEO Keywords

**Problem**: V1 `seo_keywords` are auto-generated (poor quality)

**Resolution**:
- **Replace** with curated `tags` (3-5 specific tags)
- Use knowledge graph `tags` if available
- Infer from V1 `category` field as fallback

**Affected Articles**: 100% (all V1 articles)

### Issue 6: V1-Specific Components Array

**Problem**: V1 has `components` array for templates, flowcharts, image prompts

**Resolution**:
- **Remove** from V2 frontmatter (not in V2 spec)
- V2 uses standard MDX components inline instead
- Image generation tracked separately in image-reference.md

**Affected Articles**: ~40% (articles with embedded components)

---

## 📊 Expected Migration Outcomes

### Success Metrics

**Automated Migration Rate**: 60-70%
- Articles with knowledge graph entries
- Articles with valid content structure
- Articles with minimal frontmatter issues

**Manual Review Rate**: 30-40%
- Articles missing knowledge graph entries
- Articles with empty TLDR
- Articles with content structure issues

**Failure Rate**: <5%
- Duplicate articles
- Corrupted files
- Articles marked for deletion

### Timeline Estimates

| Phase | Estimated Time | Status |
|-------|----------------|--------|
| Phase 1: Folder Setup | 5 minutes | ⏳ Ready |
| Phase 2: KG Migration | 10 minutes | ⏳ Ready |
| Phase 3: Automated Migration | 30 minutes | ⏳ Ready |
| Phase 4: Manual Review | 4-6 hours | ⏳ Pending |
| Phase 5: Validation | 30 minutes | ⏳ Pending |
| Phase 6: Promotion | 15 minutes | ⏳ Pending |
| **TOTAL** | **6-8 hours** | ⏳ Not Started |

---

## 🔗 Related Documentation

- **V2 Article Structure**: `/docs/aidefence-reference/article-structure-spec.md`
- **V2 Article Example**: `/docs/aidefence-reference/article-template-example.md`
- **Articles Reference**: `/docs/aidefence-reference/articles-reference.md`
- **Content Structure**: `/docs/aidefence-reference/content-structure.md`
- **Knowledge Graph**: `/content/knowledge-graph.yaml` (after migration)
- **V1 Original**: `/OLD/v1-complete/content/` (archived reference)

---

## 📝 Next Actions

**Immediate (Today)**:
1. Run Phase 1: Create V2 folder structure
2. Run Phase 2: Copy and validate knowledge graph
3. Create migration script based on pseudocode above
4. Run Phase 3: Automated migration on first 10 articles (test run)
5. Review test results, adjust script as needed

**Short-Term (This Week)**:
6. Run full automated migration on all 167 articles
7. Begin manual review of flagged articles
8. Write missing TLDRs
9. Add missing knowledge graph entries
10. Run validation on completed articles

**Before Epic 1 Implementation**:
11. Complete all migration phases
12. Validate 100% of articles meet V2 spec
13. Promote all validated articles to `/final/`
14. Update all documentation references to V2 paths
15. Archive V1 content completely

---

**Status**: ✅ Migration plan complete, ready for execution
**Owner**: Sunil + AI Development Team
**Last Updated**: 2025-12-23
