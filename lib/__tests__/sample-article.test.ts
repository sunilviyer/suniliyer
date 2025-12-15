/**
 * End-to-end tests for sample article
 * Story 3.8: Validate complete content pipeline with sample-article.md
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getAllArticles, getArticleBySlug } from '../article-utils';
import { getRelatedArticles } from '../related-articles';
import { generateMetadata, generateArticleJsonLd } from '../seo-metadata';
import type { Article } from '@/types/article';

describe('Sample Article End-to-End Tests', () => {
  let sampleArticleContent: string;
  let sampleArticle: Article;

  beforeAll(() => {
    // Read the sample article file
    const articlePath = path.join(process.cwd(), 'content/articles/sample-article.md');
    expect(fs.existsSync(articlePath)).toBe(true);

    sampleArticleContent = fs.readFileSync(articlePath, 'utf8');
    const { data } = matter(sampleArticleContent);

    sampleArticle = {
      title: data.title,
      slug: 'sample-article',
      category: data.category,
      tags: data.tags,
      date: data.date,
      reading_time: data.reading_time,
      excerpt: data.excerpt,
      seo_title: data.seo_title,
      seo_description: data.seo_description,
      related_context: data.related_context,
    };
  });

  describe('File Structure', () => {
    it('should exist at correct path', () => {
      const articlePath = path.join(process.cwd(), 'content/articles/sample-article.md');
      expect(fs.existsSync(articlePath)).toBe(true);
    });

    it('should be a valid markdown file', () => {
      expect(sampleArticleContent).toContain('---'); // Frontmatter delimiters
      expect(sampleArticleContent).toContain('# Understanding Large Language Models');
    });
  });

  describe('Frontmatter Validation', () => {
    it('should have all required frontmatter fields', () => {
      // Required fields
      expect(sampleArticle.title).toBe('Understanding Large Language Models');
      expect(sampleArticle.slug).toBe('sample-article');
      expect(sampleArticle.category).toBe('AI Fundamentals');
      expect(sampleArticle.tags).toEqual(['llm', 'transformer', 'neural-networks']);
      expect(sampleArticle.date).toBe('2025-12-14');
      expect(sampleArticle.reading_time).toBe(8);
      expect(sampleArticle.excerpt).toBe(
        'A comprehensive guide to understanding large language models and how they power modern AI applications.'
      );
    });

    it('should have optional SEO fields', () => {
      // Optional SEO fields
      expect(sampleArticle.seo_title).toBe('LLMs Explained - Complete Guide to Large Language Models');
      expect(sampleArticle.seo_description).toBe(
        'Learn about large language models, transformer architecture, and neural networks in this comprehensive guide.'
      );
      expect(sampleArticle.related_context).toBe(
        'transformer architecture attention mechanism pretraining fine-tuning neural networks deep learning'
      );
    });

    it('should have valid date format (YYYY-MM-DD)', () => {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      expect(dateRegex.test(sampleArticle.date)).toBe(true);
    });

    it('should have valid reading_time as number', () => {
      expect(typeof sampleArticle.reading_time).toBe('number');
      expect(Number.isInteger(sampleArticle.reading_time)).toBe(true);
      expect(sampleArticle.reading_time).toBeGreaterThan(0);
    });
  });

  describe('Markdown Content Validation', () => {
    it('should contain H1 heading', () => {
      expect(sampleArticleContent).toContain('# Understanding Large Language Models');
    });

    it('should contain H2 headings', () => {
      expect(sampleArticleContent).toContain('## What are Large Language Models?');
      expect(sampleArticleContent).toContain('## How LLMs Work');
    });

    it('should contain H3 headings', () => {
      expect(sampleArticleContent).toContain('### Key Components');
      expect(sampleArticleContent).toContain('### Pretraining');
    });

    it('should contain unordered list', () => {
      expect(sampleArticleContent).toContain('- **');
    });

    it('should contain ordered list', () => {
      expect(sampleArticleContent).toContain('1. **');
      expect(sampleArticleContent).toContain('2. **');
      expect(sampleArticleContent).toContain('3. **');
    });

    it('should contain TypeScript code block', () => {
      expect(sampleArticleContent).toContain('```typescript');
      expect(sampleArticleContent).toContain('interface Article');
    });

    it('should contain Python code block', () => {
      expect(sampleArticleContent).toContain('```python');
      expect(sampleArticleContent).toContain('def train_model');
    });

    it('should contain Bash code block', () => {
      expect(sampleArticleContent).toContain('```bash');
      expect(sampleArticleContent).toContain('npm install');
    });

    it('should contain table', () => {
      expect(sampleArticleContent).toContain('| Model | Parameters |');
      expect(sampleArticleContent).toContain('|-------|');
      expect(sampleArticleContent).toContain('| GPT-3 |');
      expect(sampleArticleContent).toContain('| GPT-4 |');
    });

    it('should contain blockquote', () => {
      expect(sampleArticleContent).toContain('> "Large language models represent');
    });

    it('should contain external links', () => {
      expect(sampleArticleContent).toContain('[Hugging Face documentation]');
      expect(sampleArticleContent).toContain('(https://');
    });

    it('should contain bold text', () => {
      expect(sampleArticleContent).toContain('**');
    });

    it('should contain inline code', () => {
      expect(sampleArticleContent).toContain('`');
    });
  });

  describe('Integration Tests - getAllArticles() (AC #4)', () => {
    it('should return sample-article in the articles list', async () => {
      const articles = await getAllArticles();

      const found = articles.find(a => a.slug === 'sample-article');
      expect(found).toBeDefined();
    });

    it('should have all required frontmatter fields from getAllArticles()', async () => {
      const articles = await getAllArticles();
      const found = articles.find(a => a.slug === 'sample-article');

      expect(found).toBeDefined();
      if (!found) return;

      expect(found.title).toBe('Understanding Large Language Models');
      expect(found.slug).toBe('sample-article');
      expect(found.category).toBe('AI Fundamentals');
      expect(found.tags).toEqual(['llm', 'transformer', 'neural-networks']);
      expect(found.date).toBe('2025-12-14');
      expect(found.reading_time).toBe(8);
      expect(found.excerpt).toBe(
        'A comprehensive guide to understanding large language models and how they power modern AI applications.'
      );
    });

    it('should have optional SEO fields from getAllArticles()', async () => {
      const articles = await getAllArticles();
      const found = articles.find(a => a.slug === 'sample-article');

      expect(found).toBeDefined();
      if (!found) return;

      expect(found.seo_title).toBe('LLMs Explained - Complete Guide to Large Language Models');
      expect(found.seo_description).toBe(
        'Learn about large language models, transformer architecture, and neural networks in this comprehensive guide.'
      );
      expect(found.related_context).toBe(
        'transformer architecture attention mechanism pretraining fine-tuning neural networks deep learning'
      );
    });
  });

  describe('Integration Tests - getArticleBySlug() (AC #5)', () => {
    it('should return compiled article for sample-article slug', async () => {
      const article = await getArticleBySlug('sample-article');

      expect(article).toBeDefined();
      expect(article.slug).toBe('sample-article');
    });

    it('should have compiled MDX content', async () => {
      const article = await getArticleBySlug('sample-article');

      expect(article.content).toBeDefined();
      expect(article.content.compiledSource).toBeDefined();
      expect(typeof article.content.compiledSource).toBe('string');
      expect(article.content.compiledSource.length).toBeGreaterThan(0);
    });

    it('should have frontmatter data in content', async () => {
      const article = await getArticleBySlug('sample-article');

      expect(article.content.frontmatter).toBeDefined();
      expect(typeof article.content.frontmatter).toBe('object');
    });

    it('should have related_articles array', async () => {
      const article = await getArticleBySlug('sample-article');

      expect(article.related_articles).toBeDefined();
      expect(Array.isArray(article.related_articles)).toBe(true);
    });

    it('should compile without errors', async () => {
      await expect(getArticleBySlug('sample-article')).resolves.toBeDefined();
    });
  });

  describe('Integration Tests - Related Articles Algorithm (AC #6)', () => {
    it('should run successfully with sample article', async () => {
      const articles = await getAllArticles();
      const found = articles.find(a => a.slug === 'sample-article');

      expect(found).toBeDefined();
      if (!found) return;

      const related = getRelatedArticles(found, articles);

      expect(Array.isArray(related)).toBe(true);
      expect(related.length).toBeGreaterThanOrEqual(0);
    });

    it('should not include self in related articles', async () => {
      const articles = await getAllArticles();
      const found = articles.find(a => a.slug === 'sample-article');

      expect(found).toBeDefined();
      if (!found) return;

      const related = getRelatedArticles(found, articles);

      const selfIncluded = related.some(slug => slug === 'sample-article');
      expect(selfIncluded).toBe(false);
    });

    it('should limit results to max 3 articles', async () => {
      const articles = await getAllArticles();
      const found = articles.find(a => a.slug === 'sample-article');

      expect(found).toBeDefined();
      if (!found) return;

      const related = getRelatedArticles(found, articles);

      expect(related.length).toBeLessThanOrEqual(3);
    });
  });

  describe('Integration Tests - SEO Metadata Generation (AC #7)', () => {
    it('should generate valid metadata object', async () => {
      const articles = await getAllArticles();
      const found = articles.find(a => a.slug === 'sample-article');

      expect(found).toBeDefined();
      if (!found) return;

      const metadata = generateMetadata(found);

      expect(metadata).toBeDefined();
      expect(typeof metadata).toBe('object');
    });

    it('should use seo_title instead of default title', async () => {
      const articles = await getAllArticles();
      const found = articles.find(a => a.slug === 'sample-article');

      expect(found).toBeDefined();
      if (!found) return;

      const metadata = generateMetadata(found);

      expect(metadata.title).toBe('LLMs Explained - Complete Guide to Large Language Models');
      expect(metadata.title).not.toBe(found.title);
    });

    it('should use seo_description instead of default excerpt', async () => {
      const articles = await getAllArticles();
      const found = articles.find(a => a.slug === 'sample-article');

      expect(found).toBeDefined();
      if (!found) return;

      const metadata = generateMetadata(found);

      expect(metadata.description).toBe(
        'Learn about large language models, transformer architecture, and neural networks in this comprehensive guide.'
      );
      expect(metadata.description).not.toBe(found.excerpt);
    });

    it('should generate Open Graph metadata', async () => {
      const articles = await getAllArticles();
      const found = articles.find(a => a.slug === 'sample-article');

      expect(found).toBeDefined();
      if (!found) return;

      const metadata = generateMetadata(found);

      expect(metadata.openGraph).toBeDefined();
      expect(metadata.openGraph?.title).toBe('LLMs Explained - Complete Guide to Large Language Models');
      expect(metadata.openGraph?.url).toBe('/articles/sample-article');
      expect(metadata.openGraph?.siteName).toBe('AIDefence');
    });

    it('should set canonical URL', async () => {
      const articles = await getAllArticles();
      const found = articles.find(a => a.slug === 'sample-article');

      expect(found).toBeDefined();
      if (!found) return;

      const metadata = generateMetadata(found);

      expect(metadata.alternates?.canonical).toBe('/articles/sample-article');
    });

    it('should generate valid JSON-LD structured data', async () => {
      const articles = await getAllArticles();
      const found = articles.find(a => a.slug === 'sample-article');

      expect(found).toBeDefined();
      if (!found) return;

      const jsonLd = generateArticleJsonLd(found);

      expect(jsonLd).toBeDefined();
      expect(jsonLd['@context']).toBe('https://schema.org');
      expect(jsonLd['@type']).toBe('Article');
      expect(jsonLd.headline).toBe('Understanding Large Language Models');
      expect(jsonLd.datePublished).toBe('2025-12-14');
    });
  });
});
