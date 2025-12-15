/**
 * Related Articles Algorithm
 *
 * Computes algorithmically-matched related articles using:
 * - Tag exact matching (3 points per match)
 * - Keyword similarity via Dice's Coefficient (max 2 points)
 * - Same category bonus (1 point)
 *
 * This algorithm runs at build time only, not at runtime.
 * Results are pre-computed and stored in CompiledArticle.related_articles.
 *
 * @module lib/related-articles
 */

import { compareTwoStrings } from 'string-similarity';
import type { Article } from '@/types/article';

/**
 * Computes related articles for a given article using similarity scoring.
 *
 * Scoring Algorithm:
 * - Tag exact match: 3 points per matching tag
 * - Keyword similarity: 2 × similarity ratio (0.0-1.0)
 * - Same category bonus: 1 point
 *
 * Returns top 3-4 related articles sorted by score (highest first).
 * If fewer than 3 articles exist, returns all available matches.
 *
 * @param currentArticle - The article to find related content for
 * @param allArticles - Complete list of articles to compare against
 * @returns Array of 3-4 most related articles (or fewer if limited availability)
 *
 * @example
 * ```typescript
 * const articles = await getAllArticles();
 * const related = getRelatedArticles(articles[0], articles);
 * console.log(`Found ${related.length} related articles`);
 * ```
 */
export function getRelatedArticles(
  currentArticle: Article,
  allArticles: Article[]
): Article[] {
  // Filter out the current article from comparison
  const otherArticles = allArticles.filter(
    (article) => article.slug !== currentArticle.slug
  );

  // If no other articles exist, return empty array
  if (otherArticles.length === 0) {
    return [];
  }

  // Compute similarity score for each article
  const scoredArticles = otherArticles.map((article) => ({
    article,
    score: calculateSimilarityScore(currentArticle, article),
  }));

  // Sort by score (descending - highest match first)
  scoredArticles.sort((a, b) => b.score - a.score);

  // Return top 3-4 articles based on availability
  const topCount = scoredArticles.length >= 4 ? 4 : Math.min(3, scoredArticles.length);
  return scoredArticles.slice(0, topCount).map((item) => item.article);
}

/**
 * Calculates similarity score between two articles.
 *
 * @param current - Current article being compared
 * @param candidate - Candidate article for relation
 * @returns Similarity score (higher = more related)
 */
function calculateSimilarityScore(current: Article, candidate: Article): number {
  let score = 0;

  // Tag exact matching: 3 points per match
  const tagMatches = current.tags.filter((tag) => candidate.tags.includes(tag));
  score += tagMatches.length * 3;

  // Keyword similarity: max 2 points
  const currentContext = current.related_context || '';
  const candidateContext = candidate.related_context || '';
  const similarity = compareTwoStrings(currentContext, candidateContext);
  score += similarity * 2;

  // Same category bonus: 1 point
  if (current.category === candidate.category) {
    score += 1;
  }

  return score;
}
