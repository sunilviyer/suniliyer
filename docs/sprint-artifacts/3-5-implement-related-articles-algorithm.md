# Story 3.5: Implement Related Articles Algorithm

Status: ready-for-dev

## Story

As a **reader**,
I want **to see algorithmically-matched related articles at the end of content**,
so that **I can discover relevant content without manual curation**.

## Acceptance Criteria

**Given** article utilities exist
**When** I create `lib/related-articles.ts`
**Then** `getRelatedArticles(article: Article)` returns 3-4 related articles
**And** Algorithm uses string-similarity library to compare tags and related_context fields
**And** Same category articles are weighted higher
**And** string-similarity is a dev dependency (build-time only, not shipped to client)
**And** Related articles are pre-computed during build, not runtime
**And** If fewer than 3 articles match, return what's available

## Tasks / Subtasks

- [ ] Install string-similarity as dev dependency (AC: #2, #4)
  - [ ] Run `npm install --save-dev string-similarity`
  - [ ] Run `npm install --save-dev @types/string-similarity`
  - [ ] Verify added to devDependencies (not dependencies) in package.json
  - [ ] Confirm exact version pinning (no ^ or ~)

- [ ] Create lib/related-articles.ts file (AC: #1)
  - [ ] Create file with proper imports
  - [ ] Import `stringSimilarity` from 'string-similarity'
  - [ ] Import `Article`, `CompiledArticle` types from '@/types/article'
  - [ ] Add file-level JSDoc documenting the algorithm

- [ ] Implement getRelatedArticles function (AC: #1, #5)
  - [ ] Function signature: `export function getRelatedArticles(currentArticle: Article, allArticles: Article[]): Article[]`
  - [ ] Filter out current article from allArticles
  - [ ] Compute similarity score for each remaining article
  - [ ] Sort articles by score (descending - highest match first)
  - [ ] Return top 3-4 articles
  - [ ] If fewer than 3 articles available, return all that match

- [ ] Implement tag intersection scoring (AC: #2)
  - [ ] Find common tags between currentArticle.tags and each article.tags
  - [ ] Award 3 points for each exact tag match
  - [ ] Example: current tags ["llm", "transformer"], article tags ["llm", "attention"] → 1 match → +3 points
  - [ ] Use array intersection logic: `tags.filter(tag => currentTags.includes(tag))`

- [ ] Implement keyword similarity scoring (AC: #2)
  - [ ] Use string-similarity library to compare related_context fields
  - [ ] `const similarity = stringSimilarity.compareTwoStrings(currentArticle.related_context || '', article.related_context || '')`
  - [ ] Similarity returns 0.0 to 1.0 (0% to 100% match)
  - [ ] Award similarity score × 2 points (max 2 points for perfect match)
  - [ ] Handle missing related_context gracefully (treat as empty string)

- [ ] Implement category bonus scoring (AC: #3)
  - [ ] If `currentArticle.category === article.category`, add 1 bonus point
  - [ ] Same-category articles get slight preference
  - [ ] Helps group related AI governance topics together

- [ ] Combine scoring logic (AC: #1)
  - [ ] Total score = (tag matches × 3) + (keyword similarity × 2) + (category bonus)
  - [ ] Example scoring:
    - 2 matching tags: 6 points
    - 80% keyword similarity: 1.6 points
    - Same category: 1 point
    - Total: 8.6 points
  - [ ] Store score with each article for sorting

- [ ] Return top 3-4 related articles (AC: #1, #6)
  - [ ] Sort articles by score (descending)
  - [ ] Return top 3 articles if available
  - [ ] Return 4 articles if there are many high-scoring matches
  - [ ] Return fewer than 3 if not enough articles exist
  - [ ] Return empty array if no other articles exist

- [ ] Integrate with article-utils.ts (AC: #5)
  - [ ] Update `getAllArticles()` in article-utils.ts to compute related articles
  - [ ] For each article, call `getRelatedArticles(article, allArticles)`
  - [ ] Store related article slugs in `article.related_articles` field
  - [ ] Computation happens once at build time
  - [ ] Related articles are pre-computed, not calculated at runtime

- [ ] Test related articles algorithm
  - [ ] Create 5-6 test articles with varied tags and categories
  - [ ] Run `getRelatedArticles()` on each article
  - [ ] Verify related articles make sense (similar topics)
  - [ ] Verify scoring logic works (same category gets bonus)
  - [ ] Verify tag matching works (exact matches get points)
  - [ ] Verify keyword similarity works (related_context field comparison)
  - [ ] Test edge case: only 1 article exists (returns empty array)
  - [ ] Test edge case: no matching tags or keywords (returns low-score matches)

## Dev Notes

**Architecture Patterns:**
- **Dev Dependency**: string-similarity is build-time only (ARCH-8)
- **Build-Time Computation**: Related articles computed during build, not runtime (ARCH-8)
- **Pure Function**: Deterministic algorithm (same inputs = same outputs)
- **File Naming**: kebab-case - `related-articles.ts` (ARCH-9)

**string-similarity Library:**
- Lightweight library for comparing string similarity
- Uses Dice's Coefficient algorithm
- Returns score from 0.0 (no match) to 1.0 (perfect match)
- ~2 KB size, but not shipped to client (dev dependency)
- GitHub: https://github.com/aceakash/string-similarity

**Scoring Algorithm:**

| Factor | Weight | Max Points | Example |
|--------|--------|------------|---------|
| Tag Exact Match | 3 per tag | ∞ | 2 matching tags = 6 points |
| Keyword Similarity | 2 × ratio | 2 | 80% similarity = 1.6 points |
| Same Category | 1 | 1 | Same category = 1 point |

**Example Scoring:**

Article A (current): "Large Language Models"
- Category: AI Fundamentals
- Tags: ["llm", "transformer", "neural-networks"]
- Related context: "transformer architecture attention mechanism pretraining"

Article B: "Transformer Architecture"
- Category: AI Fundamentals
- Tags: ["transformer", "attention", "neural-networks"]
- Related context: "transformer encoder decoder attention heads"

Score Calculation:
- Tag matches: 2 ("transformer", "neural-networks") → 2 × 3 = 6 points
- Keyword similarity: ~70% → 0.7 × 2 = 1.4 points
- Same category: Yes → 1 point
- **Total: 8.4 points** (very related!)

Article C: "EU AI Act Overview"
- Category: Legal Frameworks
- Tags: ["regulation", "compliance", "eu"]
- Related context: "european union artificial intelligence act legislation"

Score Calculation:
- Tag matches: 0 → 0 points
- Keyword similarity: ~15% → 0.15 × 2 = 0.3 points
- Same category: No → 0 points
- **Total: 0.3 points** (not very related)

**Build-Time Integration:**
```typescript
// In lib/article-utils.ts
export async function getAllArticles(): Promise<CompiledArticle[]> {
  // ... parse all articles ...

  // Compute related articles for each article
  const articlesWithRelated = articles.map(article => ({
    ...article,
    related_articles: getRelatedArticles(article, articles).map(r => r.slug)
  }));

  return articlesWithRelated;
}
```

**Performance:**
- O(n²) complexity: For each article, compare against all other articles
- For 13 articles (MVP): ~169 comparisons (fast)
- For 158 articles (vision): ~24,964 comparisons (still acceptable for build-time)
- Runs once at build, results cached in static files

### Project Structure Notes

**File Location:**
- `lib/related-articles.ts` (new file)
- Aligns with architecture: `/lib` for utility functions

**Dependencies:**
- `string-similarity` - Dev dependency (build-time only)
- `@types/string-similarity` - TypeScript types
- `@/types/article` - Article interface

**Integration Points:**
- Called by `lib/article-utils.ts` during `getAllArticles()`
- Pre-computed related articles stored in CompiledArticle.related_articles
- Displayed in Epic 6 (Story 6.4: Add Related Articles Section)

**No Conflicts Detected:**
- Story builds on 3.1 (uses Article interface)
- Story builds on 3.4 (integrates with article-utils.ts)
- Prepares related content discovery for Epic 6

### References

- [Source: docs/architecture.md#Core Architectural Decisions] - Related Article Algorithm with string-similarity
- [Source: docs/architecture.md#Related Article Algorithm] - Scoring algorithm details
- [Source: docs/epics.md#Story 3.5] - Full acceptance criteria
- [Source: docs/prd.md#FR12] - Related articles at end of content
- [Source: docs/prd.md#FR59] - Pre-compute relationships at build time
- [Source: docs/architecture.md#Decision Summary] - Build-time computation decision

## Dev Agent Record

### Context Reference

<!-- Path(s) to story context XML will be added here by context workflow -->

### Agent Model Used

Claude Sonnet 4.5 (claude-sonnet-4-5-20250929)

### Debug Log References

### Completion Notes List

### File List
