/**
 * Tests for Article TypeScript interfaces
 * Story 3.1: Validate Article and CompiledArticle type safety
 */

import type { Article, CompiledArticle } from '../article';
import type { Category } from '@/lib/constants';

describe('Article Type Definitions', () => {
  describe('Article interface', () => {
    it('should accept valid article with all required fields', () => {
      const validArticle: Article = {
        title: 'Large Language Models Explained',
        slug: 'large-language-models-explained',
        category: 'AI Fundamentals' as Category,
        tags: ['llm', 'transformer', 'neural-networks'],
        date: '2025-12-14',
        reading_time: 8,
        excerpt: 'A comprehensive guide to understanding large language models',
      };

      expect(validArticle.title).toBe('Large Language Models Explained');
      expect(validArticle.category).toBe('AI Fundamentals');
      expect(validArticle.tags).toHaveLength(3);
    });

    it('should accept article with all optional fields', () => {
      const articleWithOptionals: Article = {
        title: 'Test Article',
        slug: 'test-article',
        category: 'Videos' as Category,
        tags: ['test'],
        date: '2025-12-14',
        reading_time: 5,
        excerpt: 'Test excerpt',
        video_url: 'https://youtube.com/watch?v=test123',
        seo_title: 'Custom SEO Title',
        seo_description: 'Custom SEO Description',
        related_context: 'test context keywords',
      };

      expect(articleWithOptionals.video_url).toBe('https://youtube.com/watch?v=test123');
      expect(articleWithOptionals.seo_title).toBe('Custom SEO Title');
      expect(articleWithOptionals.seo_description).toBe('Custom SEO Description');
      expect(articleWithOptionals.related_context).toBe('test context keywords');
    });

    it('should enforce Category type union', () => {
      // This test validates that only valid categories are accepted
      const validCategories: Category[] = [
        'AI Fundamentals',
        'Risks & Principles',
        'Legal Frameworks',
        'AI Laws',
        'Risk Frameworks',
        'Development Lifecycle',
        'Governance',
        'Auditing & Assessment',
        'Industry Perspectives',
        'Explainability',
        'Videos',
      ];

      validCategories.forEach((category) => {
        const article: Article = {
          title: 'Test',
          slug: 'test',
          category,
          tags: [],
          date: '2025-12-14',
          reading_time: 1,
          excerpt: 'Test',
        };
        expect(article.category).toBe(category);
      });
    });

    it('should enforce required fields at compile time', () => {
      // TypeScript compile-time test - this won't compile if required fields are missing
      // @ts-expect-error - missing required fields should cause error
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const invalidArticle: Article = {
        title: 'Test',
        // Missing: slug, category, tags, date, reading_time, excerpt
      };
    });

    it('should accept snake_case field names', () => {
      const article: Article = {
        title: 'Test',
        slug: 'test',
        category: 'AI Fundamentals' as Category,
        tags: ['test'],
        date: '2025-12-14',
        reading_time: 5, // snake_case ✓
        excerpt: 'Test',
        video_url: 'https://youtube.com/test', // snake_case ✓
        seo_title: 'SEO Title', // snake_case ✓
        seo_description: 'SEO Description', // snake_case ✓
        related_context: 'context', // snake_case ✓
      };

      expect(article.reading_time).toBe(5);
      expect(article.video_url).toBe('https://youtube.com/test');
    });

    it('should validate date format at runtime (YYYY-MM-DD)', () => {
      const validDate = '2025-12-14';
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

      expect(dateRegex.test(validDate)).toBe(true);

      // These would pass TypeScript but fail runtime validation
      const invalidDates = [
        '12/14/2025',
        '2025.12.14',
        '14-12-2025',
        'not a date',
      ];

      invalidDates.forEach((date) => {
        expect(dateRegex.test(date)).toBe(false);
      });
    });

    it('should validate reading_time is a number', () => {
      const article: Article = {
        title: 'Test',
        slug: 'test',
        category: 'AI Fundamentals' as Category,
        tags: [],
        date: '2025-12-14',
        reading_time: 8,
        excerpt: 'Test',
      };

      expect(typeof article.reading_time).toBe('number');
      expect(Number.isInteger(article.reading_time)).toBe(true);
    });
  });

  describe('CompiledArticle interface', () => {
    it('should extend Article with content and related_articles', () => {
      const compiledArticle: CompiledArticle = {
        // Article fields
        title: 'Test Article',
        slug: 'test-article',
        category: 'AI Fundamentals' as Category,
        tags: ['test'],
        date: '2025-12-14',
        reading_time: 5,
        excerpt: 'Test excerpt',

        // CompiledArticle fields
        content: {
          compiledSource: 'test compiled source',
          scope: {},
          frontmatter: {},
        },
        related_articles: ['article-1', 'article-2', 'article-3'],
      };

      expect(compiledArticle.content).toBeDefined();
      expect(compiledArticle.related_articles).toHaveLength(3);
      expect(compiledArticle.title).toBe('Test Article');
    });

    it('should accept MDXRemoteSerializeResult shape for content', () => {
      const compiledArticle: CompiledArticle = {
        title: 'Test',
        slug: 'test',
        category: 'AI Fundamentals' as Category,
        tags: [],
        date: '2025-12-14',
        reading_time: 1,
        excerpt: 'Test',
        content: {
          compiledSource: '<h1>Test</h1>',
          scope: { customData: 'test' },
          frontmatter: { title: 'Test' },
        },
        related_articles: [],
      };

      expect(compiledArticle.content.compiledSource).toBe('<h1>Test</h1>');
      expect(compiledArticle.content.scope).toHaveProperty('customData');
    });

    it('should accept empty related_articles array', () => {
      const compiledArticle: CompiledArticle = {
        title: 'Test',
        slug: 'test',
        category: 'Videos' as Category,
        tags: [],
        date: '2025-12-14',
        reading_time: 1,
        excerpt: 'Test',
        content: {
          compiledSource: 'test',
          scope: {},
          frontmatter: {},
        },
        related_articles: [], // Empty array is valid
      };

      expect(compiledArticle.related_articles).toEqual([]);
    });
  });

  describe('Type safety edge cases', () => {
    it('should handle articles with empty tags array', () => {
      const article: Article = {
        title: 'Test',
        slug: 'test',
        category: 'AI Fundamentals' as Category,
        tags: [], // Empty array is valid
        date: '2025-12-14',
        reading_time: 1,
        excerpt: 'Test',
      };

      expect(article.tags).toEqual([]);
    });

    it('should handle articles with many tags', () => {
      const article: Article = {
        title: 'Test',
        slug: 'test',
        category: 'AI Fundamentals' as Category,
        tags: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'],
        date: '2025-12-14',
        reading_time: 1,
        excerpt: 'Test',
      };

      expect(article.tags.length).toBeGreaterThan(3);
    });

    it('should handle optional fields being undefined', () => {
      const article: Article = {
        title: 'Test',
        slug: 'test',
        category: 'AI Fundamentals' as Category,
        tags: [],
        date: '2025-12-14',
        reading_time: 1,
        excerpt: 'Test',
        video_url: undefined,
        seo_title: undefined,
      };

      expect(article.video_url).toBeUndefined();
      expect(article.seo_title).toBeUndefined();
    });
  });
});
