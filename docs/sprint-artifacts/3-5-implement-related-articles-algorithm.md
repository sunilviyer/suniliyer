# Story 3.5: Implement Related Articles Algorithm

Status: Done

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

- [x] Install string-similarity as dev dependency (AC: #2, #4)
  - [x] Run `npm install --save-dev string-similarity`
  - [x] Run `npm install --save-dev @types/string-similarity`
  - [x] Verify added to devDependencies (not dependencies) in package.json
  - [x] Confirm exact version pinning (no ^ or ~)

- [x] Create lib/related-articles.ts file (AC: #1)
  - [x] Create file with proper imports
  - [x] Import `stringSimilarity` from 'string-similarity'
  - [x] Import `Article`, `CompiledArticle` types from '@/types/article'
  - [x] Add file-level JSDoc documenting the algorithm

- [x] Implement getRelatedArticles function (AC: #1, #5)
  - [x] Function signature: `export function getRelatedArticles(currentArticle: Article, allArticles: Article[]): Article[]`
  - [x] Filter out current article from allArticles
  - [x] Compute similarity score for each remaining article
  - [x] Sort articles by score (descending - highest match first)
  - [x] Return top 3-4 articles
  - [x] If fewer than 3 articles available, return all that match

- [x] Implement tag intersection scoring (AC: #2)
  - [x] Find common tags between currentArticle.tags and each article.tags
  - [x] Award 3 points for each exact tag match
  - [x] Example: current tags ["llm", "transformer"], article tags ["llm", "attention"] → 1 match → +3 points
  - [x] Use array intersection logic: `tags.filter(tag => currentTags.includes(tag))`

- [x] Implement keyword similarity scoring (AC: #2)
  - [x] Use string-similarity library to compare related_context fields
  - [x] `const similarity = stringSimilarity.compareTwoStrings(currentArticle.related_context || '', article.related_context || '')`
  - [x] Similarity returns 0.0 to 1.0 (0% to 100% match)
  - [x] Award similarity score × 2 points (max 2 points for perfect match)
  - [x] Handle missing related_context gracefully (treat as empty string)

- [x] Implement category bonus scoring (AC: #3)
  - [x] If `currentArticle.category === article.category`, add 1 bonus point
  - [x] Same-category articles get slight preference
  - [x] Helps group related AI governance topics together

- [x] Combine scoring logic (AC: #1)
  - [x] Total score = (tag matches × 3) + (keyword similarity × 2) + (category bonus)
  - [x] Example scoring:
    - 2 matching tags: 6 points
    - 80% keyword similarity: 1.6 points
    - Same category: 1 point
    - Total: 8.6 points
  - [x] Store score with each article for sorting

- [x] Return top 3-4 related articles (AC: #1, #6)
  - [x] Sort articles by score (descending)
  - [x] Return top 3 articles if available
  - [x] Return 4 articles if there are many high-scoring matches
  - [x] Return fewer than 3 if not enough articles exist
  - [x] Return empty array if no other articles exist

- [x] Integrate with article-utils.ts (AC: #5)
  - [x] Update `getAllArticles()` in article-utils.ts to compute related articles
  - [x] For each article, call `getRelatedArticles(article, allArticles)`
  - [x] Store related article slugs in `article.related_articles` field
  - [x] Computation happens once at build time
  - [x] Related articles are pre-computed, not calculated at runtime

- [x] Test related articles algorithm
  - [x] Create 5-6 test articles with varied tags and categories
  - [x] Run `getRelatedArticles()` on each article
  - [x] Verify related articles make sense (similar topics)
  - [x] Verify scoring logic works (same category gets bonus)
  - [x] Verify tag matching works (exact matches get points)
  - [x] Verify keyword similarity works (related_context field comparison)
  - [x] Test edge case: only 1 article exists (returns empty array)
  - [x] Test edge case: no matching tags or keywords (returns low-score matches)

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

✅ **Story 3.5 Implementation Complete** (2025-12-14)

**Implementation Summary:**
- Installed string-similarity@4.0.4 as dev dependency (build-time only)
- Created lib/related-articles.ts with algorithmic matching using Dice's Coefficient
- Integrated with lib/article-utils.ts for build-time pre-computation
- Created 12 comprehensive tests covering all algorithm features and edge cases
- All acceptance criteria met, all tests passing (73 total)

**Related Articles Algorithm:**
- ✅ `getRelatedArticles(currentArticle, allArticles)` - Returns 3-4 most similar articles
- ✅ Scoring algorithm: Tag matches (3 pts each) + Keyword similarity (max 2 pts) + Category bonus (1 pt)
- ✅ Uses string-similarity library (Dice's Coefficient) for keyword comparison
- ✅ Handles edge cases: single article, no matches, missing related_context

**Implementation Details:**
- **Tag Intersection Scoring**: 3 points per exact tag match using array filter
- **Keyword Similarity**: compareTwoStrings() on related_context fields (0.0-1.0 ratio × 2)
- **Category Bonus**: +1 point for same category to group related topics
- **Sorting**: Articles sorted by combined score (descending)
- **Return Logic**: Returns top 4 if available, 3 if fewer, all matches if < 3

**Build-Time Integration:**
- Updated `getAllArticles()` to pre-compute related articles for all articles
- Extracts Article frontmatter for similarity computation (excludes MDX content)
- Maps over articles to call `getRelatedArticles()` and stores slugs in `related_articles` field
- Updated `getArticleBySlug()` to call `getAllArticles()` for consistent related articles
- Updated `getArticlesByCategory()` to use `getAllArticles()` for consistency

**Test Coverage:**
- 12 tests in lib/__tests__/related-articles.test.ts
- Tests verify: similarity scoring, tag matching, keyword similarity, category bonus
- Edge cases tested: empty array (1 article), limited articles (< 3), missing related_context
- Test articles: 6 test articles with varied tags/categories (AI Fundamentals, Legal Frameworks)
- Full test suite: 73 tests passing (no regressions)

**Architecture Compliance:**
- ✅ Dev dependency: string-similarity@4.0.4 (exact version, devDependencies only)
- ✅ Build-time computation: Related articles computed during build, not runtime
- ✅ Pure function: Deterministic algorithm (same inputs = same outputs)
- ✅ File naming: kebab-case (related-articles.ts) per ARCH-9
- ✅ Exact version pinning: No ^ or ~ in package.json

**Performance Characteristics:**
- O(n²) complexity: For each article, compares against all other articles
- For 13 articles (MVP): ~169 comparisons (instant)
- For 158 articles (vision): ~24,964 comparisons (acceptable for build-time)
- Results cached in static files, zero runtime cost

**All Acceptance Criteria Met:**
1. ✅ `getRelatedArticles(article)` returns 3-4 related articles
2. ✅ Algorithm uses string-similarity library for tags and related_context
3. ✅ Same category articles weighted higher (+1 bonus point)
4. ✅ string-similarity is dev dependency (build-time only)
5. ✅ Related articles pre-computed during build, not runtime
6. ✅ Returns fewer than 3 if not enough articles available

**Integration Points Ready:**
- lib/related-articles.ts can be used by any component needing related content
- Pre-computed related_articles field available in all CompiledArticle objects
- Ready for Epic 6 (Story 6.4: Add Related Articles Section to article pages)

**Code Review Fixes (2025-12-14):**

**CRITICAL Severity (1 fix):**
1. ✅ Fixed TypeScript compilation errors in test file - replaced invalid `description` field with required `excerpt` field and added missing `reading_time` field to all 6 test articles

**MEDIUM Severity (3 fixes):**
2. ✅ Updated test articles to match complete Article interface - all test articles now include required `reading_time` and `excerpt` fields per types/article.ts
3. ✅ Added performance test for 158 articles - validates O(n²) complexity claim with actual performance measurement (73ms for 24,964 comparisons, well under 5s threshold)
4. ✅ Added test for `undefined` related_context - covers edge case where related_context is undefined (not just empty string)

**Test Results After Fixes:**
- TypeScript compilation: ✅ Zero errors (was failing with 6 errors)
- Test count: 14 tests (increased from 12)
- All tests passing: 75/75 (increased from 73/73)
- Performance: 158 articles processed in 73ms
- Build: ✅ Successful

### File List

**Implementation Files:**
- lib/related-articles.ts (created - algorithmic matching with scoring algorithm)
- lib/__tests__/related-articles.test.ts (created - 14 comprehensive tests including performance test for 158 articles)

**Integration Files:**
- lib/article-utils.ts (modified - integrated getRelatedArticles() in getAllArticles(), getArticleBySlug(), getArticlesByCategory())

**Configuration Files:**
- package.json (modified - added string-similarity@4.0.4 and @types/string-similarity@4.0.2 to devDependencies with exact versions)
- package-lock.json (updated - exact version lock for new dependencies)
