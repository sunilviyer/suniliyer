import {
  getAllArticles,
  getArticleBySlug,
  getArticlesByCategory,
} from '../article-utils';

// Mock next-mdx-remote to avoid ESM issues in Jest
jest.mock('next-mdx-remote/serialize', () => ({
  serialize: jest.fn().mockImplementation(async (content: string) => ({
    compiledSource: `function MDXContent() { return "${content.substring(0, 20)}..." }`,
    scope: {},
  })),
}));

// Mock rehype-prism to avoid ESM issues
jest.mock('rehype-prism', () => ({}));

describe('article-utils', () => {
  describe('getAllArticles', () => {
    it('should return an array of all articles', async () => {
      const articles = await getAllArticles();
      expect(Array.isArray(articles)).toBe(true);
      expect(articles.length).toBeGreaterThan(0);
    });

    it('should return articles sorted by date', async () => {
      const articles = await getAllArticles();
      for (let i = 0; i < articles.length - 1; i++) {
        // Use same date parsing as implementation (with timezone)
        const currentDate = new Date(articles[i].date + 'T00:00:00').getTime();
        const nextDate = new Date(articles[i + 1].date + 'T00:00:00').getTime();
        expect(currentDate).toBeGreaterThanOrEqual(nextDate);
      }
    });

    it('should return CompiledArticle objects', async () => {
      const articles = await getAllArticles();
      articles.forEach((article) => {
        expect(article).toHaveProperty('title');
        expect(article).toHaveProperty('slug');
        expect(article).toHaveProperty('content');
      });
    });
  });

  describe('getArticleBySlug', () => {
    it('should return a single article by slug', async () => {
      const article = await getArticleBySlug('test-neural-networks');
      expect(article).toBeDefined();
      expect(article.slug).toBe('test-neural-networks');
    });

    it('should throw error for non-existent article', async () => {
      await expect(getArticleBySlug('non-existent')).rejects.toThrow('Article not found');
    });

    it('should throw error for invalid slug format (path traversal protection)', async () => {
      await expect(getArticleBySlug('../../../etc/passwd')).rejects.toThrow('Invalid slug format');
      await expect(getArticleBySlug('../../package.json')).rejects.toThrow('Invalid slug format');
      await expect(getArticleBySlug('article/subdir')).rejects.toThrow('Invalid slug format');
    });

    it('should throw error for slug with uppercase letters', async () => {
      await expect(getArticleBySlug('My-Article')).rejects.toThrow('Invalid slug format');
    });

    it('should throw error for slug with special characters', async () => {
      await expect(getArticleBySlug('my_article')).rejects.toThrow('Invalid slug format');
      await expect(getArticleBySlug('my.article')).rejects.toThrow('Invalid slug format');
    });
  });

  describe('getArticlesByCategory', () => {
    it('should return only articles in specified category', async () => {
      const articles = await getArticlesByCategory('AI Fundamentals');
      expect(Array.isArray(articles)).toBe(true);
      articles.forEach((article) => {
        expect(article.category).toBe('AI Fundamentals');
      });
    });

    it('should throw error for invalid category (typo detection)', async () => {
      await expect(getArticlesByCategory('ai fundamentals')).rejects.toThrow('Invalid category');
      await expect(getArticlesByCategory('AI-Fundamentals')).rejects.toThrow('Invalid category');
      await expect(getArticlesByCategory('NonexistentCategory')).rejects.toThrow('Invalid category');
    });

    it('should accept all valid categories', async () => {
      // Test that all valid categories work without throwing
      const validCategories = [
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

      for (const category of validCategories) {
        // Should not throw error
        const articles = await getArticlesByCategory(category);
        expect(Array.isArray(articles)).toBe(true);
      }
    });
  });
});
