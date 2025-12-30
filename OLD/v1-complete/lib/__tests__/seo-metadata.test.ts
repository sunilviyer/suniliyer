import { generateMetadata, generateArticleJsonLd } from '../seo-metadata';
import type { Article } from '@/types/article';

describe('seo-metadata', () => {
  // Test article with all SEO fields provided
  const fullArticle: Article = {
    title: 'Large Language Models Explained',
    slug: 'large-language-models',
    date: '2025-01-15',
    category: 'AI Fundamentals',
    tags: ['llm', 'transformer', 'neural-networks'],
    reading_time: 8,
    excerpt: 'Understanding large language models and their applications in AI',
    seo_title: 'LLMs Explained - Complete Guide to Large Language Models',
    seo_description: 'Comprehensive guide to understanding LLMs, transformers, and neural networks with practical examples',
    related_context: 'transformer architecture attention mechanism pretraining',
  };

  // Test article with minimal SEO fields (uses defaults)
  const minimalArticle: Article = {
    title: 'Neural Networks Basics',
    slug: 'neural-networks-basics',
    date: '2025-01-10',
    category: 'AI Fundamentals',
    tags: ['neural-networks', 'deep-learning'],
    reading_time: 5,
    excerpt: 'Introduction to neural networks',
    // No seo_title or seo_description - should use title and excerpt
  };

  describe('generateMetadata', () => {
    it('should return a valid Next.js Metadata object', () => {
      const metadata = generateMetadata(fullArticle);

      expect(metadata).toBeDefined();
      expect(typeof metadata).toBe('object');
      expect(metadata.title).toBeDefined();
      expect(metadata.description).toBeDefined();
    });

    it('should use seo_title when provided', () => {
      const metadata = generateMetadata(fullArticle);

      expect(metadata.title).toBe('LLMs Explained - Complete Guide to Large Language Models');
    });

    it('should fall back to title when seo_title is not provided', () => {
      const metadata = generateMetadata(minimalArticle);

      expect(metadata.title).toBe('Neural Networks Basics');
    });

    it('should use seo_description when provided', () => {
      const metadata = generateMetadata(fullArticle);

      expect(metadata.description).toBe(
        'Comprehensive guide to understanding LLMs, transformers, and neural networks with practical examples'
      );
    });

    it('should fall back to excerpt when seo_description is not provided', () => {
      const metadata = generateMetadata(minimalArticle);

      expect(metadata.description).toBe('Introduction to neural networks');
    });

    it('should generate canonical URL with article slug', () => {
      const metadata = generateMetadata(fullArticle);

      expect(metadata.alternates?.canonical).toBe('/articles/large-language-models');
    });

    it('should set metadataBase for absolute URLs', () => {
      const metadata = generateMetadata(fullArticle);

      expect(metadata.metadataBase).toBeDefined();
      expect(metadata.metadataBase?.toString()).toBe('https://www.suniliyer.ca/');
    });

    it('should generate keywords from tags', () => {
      const metadata = generateMetadata(fullArticle);

      expect(metadata.keywords).toBe('llm, transformer, neural-networks');
    });

    it('should generate Open Graph metadata', () => {
      const metadata = generateMetadata(fullArticle);

      expect(metadata.openGraph).toBeDefined();
      expect(metadata.openGraph?.title).toBe('LLMs Explained - Complete Guide to Large Language Models');
      expect(metadata.openGraph?.description).toBe(
        'Comprehensive guide to understanding LLMs, transformers, and neural networks with practical examples'
      );
      // Type is set in implementation, check the whole object structure
      const og = metadata.openGraph as Record<string, unknown>;
      expect(og?.type).toBe('article');
      expect(metadata.openGraph?.url).toBe('/articles/large-language-models');
      expect(metadata.openGraph?.siteName).toBe('AIDefence');
      expect(metadata.openGraph?.locale).toBe('en_US');
    });

    it('should include default OG image in Open Graph metadata', () => {
      const metadata = generateMetadata(fullArticle);

      expect(metadata.openGraph?.images).toBeDefined();
      expect(Array.isArray(metadata.openGraph?.images)).toBe(true);
      expect(metadata.openGraph?.images).toContain('/og-image.png');
    });

    it('should generate Twitter Card metadata', () => {
      const metadata = generateMetadata(fullArticle);

      expect(metadata.twitter).toBeDefined();
      // Card type is set in implementation, check the whole object structure
      const tw = metadata.twitter as Record<string, unknown>;
      expect(tw?.card).toBe('summary_large_image');
      expect(metadata.twitter?.title).toBe('LLMs Explained - Complete Guide to Large Language Models');
      expect(metadata.twitter?.description).toBe(
        'Comprehensive guide to understanding LLMs, transformers, and neural networks with practical examples'
      );
    });

    it('should include default OG image in Twitter Card metadata', () => {
      const metadata = generateMetadata(fullArticle);

      expect(metadata.twitter?.images).toBeDefined();
      expect(Array.isArray(metadata.twitter?.images)).toBe(true);
      expect(metadata.twitter?.images).toContain('/og-image.png');
    });

    it('should use defaults when minimal article is provided', () => {
      const metadata = generateMetadata(minimalArticle);

      // Should use title instead of seo_title
      expect(metadata.title).toBe('Neural Networks Basics');
      expect(metadata.openGraph?.title).toBe('Neural Networks Basics');
      expect(metadata.twitter?.title).toBe('Neural Networks Basics');

      // Should use excerpt instead of seo_description
      expect(metadata.description).toBe('Introduction to neural networks');
      expect(metadata.openGraph?.description).toBe('Introduction to neural networks');
      expect(metadata.twitter?.description).toBe('Introduction to neural networks');
    });

    it('should handle articles with empty tags array', () => {
      const articleWithoutTags: Article = {
        ...minimalArticle,
        tags: [],
      };

      const metadata = generateMetadata(articleWithoutTags);

      expect(metadata.keywords).toBe('');
    });

    it('should handle articles with single tag', () => {
      const articleWithSingleTag: Article = {
        ...minimalArticle,
        tags: ['ai'],
      };

      const metadata = generateMetadata(articleWithSingleTag);

      expect(metadata.keywords).toBe('ai');
    });
  });

  describe('generateArticleJsonLd', () => {
    it('should generate valid schema.org Article JSON-LD', () => {
      const jsonLd = generateArticleJsonLd(fullArticle);

      expect(jsonLd).toBeDefined();
      expect(jsonLd['@context']).toBe('https://schema.org');
      expect(jsonLd['@type']).toBe('Article');
    });

    it('should include article headline', () => {
      const jsonLd = generateArticleJsonLd(fullArticle);

      expect(jsonLd.headline).toBe('Large Language Models Explained');
    });

    it('should include article description', () => {
      const jsonLd = generateArticleJsonLd(fullArticle);

      expect(jsonLd.description).toBe('Understanding large language models and their applications in AI');
    });

    it('should include datePublished', () => {
      const jsonLd = generateArticleJsonLd(fullArticle);

      expect(jsonLd.datePublished).toBe('2025-01-15');
    });

    it('should include author information', () => {
      const jsonLd = generateArticleJsonLd(fullArticle);

      expect(jsonLd.author).toBeDefined();
      expect(jsonLd.author['@type']).toBe('Person');
      expect(jsonLd.author.name).toBe('Sunil Iyer');
      expect(jsonLd.author.url).toBe('https://www.suniliyer.ca');
    });

    it('should include publisher information', () => {
      const jsonLd = generateArticleJsonLd(fullArticle);

      expect(jsonLd.publisher).toBeDefined();
      expect(jsonLd.publisher['@type']).toBe('Organization');
      expect(jsonLd.publisher.name).toBe('AIDefence');
      expect(jsonLd.publisher.url).toBe('https://www.suniliyer.ca');
    });

    it('should include keywords from tags', () => {
      const jsonLd = generateArticleJsonLd(fullArticle);

      expect(jsonLd.keywords).toBe('llm, transformer, neural-networks');
    });

    it('should handle minimal article', () => {
      const jsonLd = generateArticleJsonLd(minimalArticle);

      expect(jsonLd['@type']).toBe('Article');
      expect(jsonLd.headline).toBe('Neural Networks Basics');
      expect(jsonLd.description).toBe('Introduction to neural networks');
      expect(jsonLd.datePublished).toBe('2025-01-10');
    });
  });
});
