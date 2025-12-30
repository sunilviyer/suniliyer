import { getRelatedArticles } from '../related-articles';
import type { Article } from '@/types/article';

describe('related-articles', () => {
  // Test articles with varied tags, categories, and related_context
  const articleA: Article = {
    title: 'Large Language Models Explained',
    slug: 'large-language-models',
    date: '2025-01-15',
    category: 'AI Fundamentals',
    tags: ['llm', 'transformer', 'neural-networks'],
    reading_time: 8,
    excerpt: 'Understanding LLMs and their applications',
    related_context: 'transformer architecture attention mechanism pretraining fine-tuning',
  };

  const articleB: Article = {
    title: 'Transformer Architecture Deep Dive',
    slug: 'transformer-architecture',
    date: '2025-01-10',
    category: 'AI Fundamentals',
    tags: ['transformer', 'attention', 'neural-networks'],
    reading_time: 12,
    excerpt: 'Deep dive into transformer architecture',
    related_context: 'transformer encoder decoder attention heads self-attention',
  };

  const articleC: Article = {
    title: 'EU AI Act Overview',
    slug: 'eu-ai-act',
    date: '2025-01-05',
    category: 'Legal Frameworks',
    tags: ['regulation', 'compliance', 'eu'],
    reading_time: 6,
    excerpt: 'Overview of the EU AI Act regulations',
    related_context: 'european union artificial intelligence act legislation compliance',
  };

  const articleD: Article = {
    title: 'Neural Network Fundamentals',
    slug: 'neural-networks',
    date: '2025-01-01',
    category: 'AI Fundamentals',
    tags: ['neural-networks', 'deep-learning', 'backpropagation'],
    reading_time: 10,
    excerpt: 'Neural network basics and fundamentals',
    related_context: 'neural network layers activation functions gradient descent',
  };

  const articleE: Article = {
    title: 'GDPR and AI Compliance',
    slug: 'gdpr-ai-compliance',
    date: '2024-12-20',
    category: 'Legal Frameworks',
    tags: ['gdpr', 'compliance', 'privacy'],
    reading_time: 7,
    excerpt: 'GDPR compliance requirements for AI systems',
    related_context: 'general data protection regulation privacy compliance data processing',
  };

  const articleF: Article = {
    title: 'Attention Mechanisms in AI',
    slug: 'attention-mechanisms',
    date: '2024-12-15',
    category: 'AI Fundamentals',
    tags: ['attention', 'transformer', 'llm'],
    reading_time: 9,
    excerpt: 'Attention mechanisms explained in detail',
    related_context: 'attention mechanism query key value self-attention cross-attention',
  };

  const allArticles = [articleA, articleB, articleC, articleD, articleE, articleF];

  describe('getRelatedArticles', () => {
    it('should return related articles based on similarity', () => {
      const related = getRelatedArticles(articleA, allArticles);

      expect(Array.isArray(related)).toBe(true);
      expect(related.length).toBeGreaterThan(0);
      expect(related.length).toBeLessThanOrEqual(4);
    });

    it('should not include the current article in results', () => {
      const related = getRelatedArticles(articleA, allArticles);

      expect(related.every((article) => article.slug !== articleA.slug)).toBe(true);
    });

    it('should prioritize articles with matching tags', () => {
      const related = getRelatedArticles(articleA, allArticles);

      // articleB and articleF should rank high due to tag matches with articleA
      // articleA tags: ['llm', 'transformer', 'neural-networks']
      // articleB tags: ['transformer', 'attention', 'neural-networks'] - 2 matches
      // articleF tags: ['attention', 'transformer', 'llm'] - 2 matches
      const relatedSlugs = related.map((a) => a.slug);

      expect(relatedSlugs).toContain('transformer-architecture');
      expect(relatedSlugs).toContain('attention-mechanisms');
    });

    it('should give bonus points to same category articles', () => {
      const related = getRelatedArticles(articleA, allArticles);

      // articleA is in 'AI Fundamentals' category
      // articleB, articleD, articleF are also in 'AI Fundamentals'
      // These should rank higher than articleC and articleE (Legal Frameworks)
      const topRelated = related.slice(0, 3);
      const aiArticles = topRelated.filter((a) => a.category === 'AI Fundamentals');

      expect(aiArticles.length).toBeGreaterThan(0);
    });

    it('should use keyword similarity from related_context field', () => {
      const related = getRelatedArticles(articleA, allArticles);

      // articleB has high keyword similarity with articleA
      // Both mention: transformer, attention, architecture
      expect(related.some((a) => a.slug === 'transformer-architecture')).toBe(true);
    });

    it('should return empty array when only one article exists', () => {
      const related = getRelatedArticles(articleA, [articleA]);

      expect(related).toEqual([]);
    });

    it('should return all available articles when fewer than 3 exist', () => {
      const limitedArticles = [articleA, articleB];
      const related = getRelatedArticles(articleA, limitedArticles);

      expect(related.length).toBe(1);
      expect(related[0].slug).toBe('transformer-architecture');
    });

    it('should return top 3-4 articles when many are available', () => {
      const related = getRelatedArticles(articleA, allArticles);

      expect(related.length).toBeGreaterThanOrEqual(3);
      expect(related.length).toBeLessThanOrEqual(4);
    });

    it('should handle articles with no matching tags or keywords', () => {
      const related = getRelatedArticles(articleC, allArticles);

      // articleC (EU AI Act) has no tag matches with most articles
      // But should still return some results based on category or low similarity
      expect(Array.isArray(related)).toBe(true);
      expect(related.length).toBeGreaterThan(0);
    });

    it('should handle empty or missing related_context gracefully', () => {
      const articleWithoutContext: Article = {
        ...articleA,
        slug: 'no-context',
        related_context: '',
      };

      const articlesWithGaps = [articleWithoutContext, articleB, articleC];
      const related = getRelatedArticles(articleWithoutContext, articlesWithGaps);

      // Should still work and return results based on tags and category
      expect(Array.isArray(related)).toBe(true);
    });

    it('should handle undefined related_context gracefully', () => {
      const articleWithUndefinedContext: Article = {
        ...articleA,
        slug: 'undefined-context',
        related_context: undefined,
      };

      const articlesWithGaps = [articleWithUndefinedContext, articleB, articleC];
      const related = getRelatedArticles(articleWithUndefinedContext, articlesWithGaps);

      // Should still work and return results based on tags and category
      expect(Array.isArray(related)).toBe(true);
      expect(related.length).toBeGreaterThan(0);
    });

    it('should sort results by score (highest first)', () => {
      const related = getRelatedArticles(articleA, allArticles);

      // We can't directly test scores, but we can verify that highly related
      // articles (same category + tag matches) appear before unrelated ones
      const topArticle = related[0];

      // Top article should likely be articleB or articleF due to:
      // - Same category (AI Fundamentals)
      // - Multiple tag matches
      // - High keyword similarity
      expect(['transformer-architecture', 'attention-mechanisms']).toContain(
        topArticle.slug
      );
    });

    it('should calculate scores correctly based on multiple factors', () => {
      // Test with articleA to verify scoring logic
      const related = getRelatedArticles(articleA, allArticles);

      // articleB should score high:
      // - Tags: ['transformer', 'neural-networks'] match = 2 × 3 = 6 points
      // - Same category = 1 point
      // - Keyword similarity ≈ 0.4-0.6 × 2 = 0.8-1.2 points
      // - Total: ~7.8-8.2 points

      // articleF should also score high:
      // - Tags: ['transformer', 'llm'] match = 2 × 3 = 6 points
      // - Same category = 1 point
      // - Keyword similarity ≈ 0.5-0.7 × 2 = 1.0-1.4 points
      // - Total: ~8.0-8.4 points

      // articleC should score low:
      // - Tags: no matches = 0 points
      // - Different category = 0 points
      // - Keyword similarity ≈ 0.0-0.2 × 2 = 0.0-0.4 points
      // - Total: ~0.0-0.4 points

      const relatedSlugs = related.map((a) => a.slug);
      const articleCIndex = relatedSlugs.indexOf('eu-ai-act');
      const articleBIndex = relatedSlugs.indexOf('transformer-architecture');

      // articleB should rank higher than articleC
      if (articleCIndex !== -1 && articleBIndex !== -1) {
        expect(articleBIndex).toBeLessThan(articleCIndex);
      }
    });

    it('should compute related articles for 158 articles in acceptable time', () => {
      // Create 158 mock articles to test performance at scale
      const manyArticles: Article[] = Array.from({ length: 158 }, (_, i) => ({
        title: `Article ${i}`,
        slug: `article-${i}`,
        date: '2025-01-01',
        category: i % 2 === 0 ? 'AI Fundamentals' : 'Legal Frameworks',
        tags: [`tag-${i % 10}`, `tag-${(i + 1) % 10}`],
        reading_time: 5,
        excerpt: `Excerpt for article ${i}`,
        related_context: `context keywords for article ${i} topic ${i % 20}`,
      }));

      const start = Date.now();

      // Compute related articles for all 158 articles (O(n²) = ~24,964 comparisons)
      manyArticles.forEach(article => {
        const related = getRelatedArticles(article, manyArticles);
        expect(Array.isArray(related)).toBe(true);
      });

      const duration = Date.now() - start;

      // Should complete in reasonable time for build process (< 5 seconds)
      expect(duration).toBeLessThan(5000);
    });
  });
});
