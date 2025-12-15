/**
 * Article Discovery Utilities
 *
 * Provides functions to retrieve articles from the filesystem.
 * These functions run at build time during static site generation.
 *
 * @module lib/article-utils
 */

import fs from 'fs/promises';
import path from 'path';
import { parseAndCompileMarkdown } from '@/lib/markdown-parser';
import { VALID_CATEGORIES } from '@/lib/constants';
import { getRelatedArticles } from '@/lib/related-articles';
import type { Article, CompiledArticle } from '@/types/article';

/**
 * Directory containing markdown article files
 */
const ARTICLES_DIR = path.join(process.cwd(), 'content', 'articles');

/**
 * Retrieves all articles from the content directory.
 *
 * Articles are sorted by publication date (newest first).
 * Related articles are pre-computed at build time using similarity algorithm.
 * Runs at build time during static site generation.
 *
 * @returns Promise resolving to array of CompiledArticle objects with related articles
 *
 * @throws {Error} When articles directory cannot be read
 * @throws {Error} When article file parsing fails
 *
 * @example
 * ```typescript
 * const articles = await getAllArticles();
 * console.log(`Found ${articles.length} articles`);
 * console.log(`Latest: ${articles[0].title}`);
 * console.log(`Related: ${articles[0].related_articles.length}`);
 * ```
 */
export async function getAllArticles(): Promise<CompiledArticle[]> {
  // Read all files from articles directory
  let files: string[];
  try {
    files = await fs.readdir(ARTICLES_DIR);
  } catch (error) {
    const err = error as NodeJS.ErrnoException;
    if (err.code === 'ENOENT') {
      throw new Error(`Articles directory not found: ${ARTICLES_DIR}. Create the directory and add markdown files.`);
    }
    throw new Error(`Failed to read articles directory: ${err.message}`);
  }

  // Filter for .md files only (exclude .gitkeep, README, etc.)
  const markdownFiles = files.filter(file => file.endsWith('.md'));

  // Parse each markdown file and compile to MDX
  const articles: CompiledArticle[] = [];

  for (const file of markdownFiles) {
    const filePath = path.join(ARTICLES_DIR, file);
    const { frontmatter, content } = await parseAndCompileMarkdown(filePath);

    // Build CompiledArticle object (without related articles yet)
    const compiledArticle: CompiledArticle = {
      ...frontmatter,
      content,
      related_articles: [], // Populated below after all articles are loaded
    };

    articles.push(compiledArticle);
  }

  // Sort by date (newest first)
  articles.sort((a, b) => {
    const dateA = new Date(a.date + 'T00:00:00');
    const dateB = new Date(b.date + 'T00:00:00');
    return dateB.getTime() - dateA.getTime();
  });

  // Pre-compute related articles for each article (build-time only)
  // Extract Article frontmatter (without MDX content) for similarity computation
  const articleFrontmatters: Article[] = articles.map((article) => ({
    title: article.title,
    slug: article.slug,
    date: article.date,
    category: article.category,
    tags: article.tags,
    reading_time: article.reading_time,
    excerpt: article.excerpt,
    related_context: article.related_context,
    video_url: article.video_url,
    seo_title: article.seo_title,
    seo_description: article.seo_description,
  }));

  // Compute related articles for each article and store slugs
  const articlesWithRelated = articles.map((article) => {
    const relatedArticles = getRelatedArticles(article, articleFrontmatters);
    return {
      ...article,
      related_articles: relatedArticles.map((r) => r.slug),
    };
  });

  return articlesWithRelated;
}

/**
 * Retrieves a single article by its slug.
 *
 * The slug is derived from the markdown filename (without .md extension).
 * For example, 'my-article.md' has slug 'my-article'.
 *
 * Related articles are included (pre-computed at build time).
 *
 * @param slug - Article slug (filename without .md extension)
 * @returns Promise resolving to CompiledArticle object with related articles
 *
 * @throws {Error} When article file is not found
 * @throws {Error} When article file parsing fails
 * @throws {Error} When slug format is invalid
 *
 * @example
 * ```typescript
 * const article = await getArticleBySlug('neural-networks');
 * console.log(article.title);
 * console.log(`Related: ${article.related_articles.length}`);
 * ```
 */
export async function getArticleBySlug(slug: string): Promise<CompiledArticle> {
  // Validate slug format to prevent path traversal attacks
  const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  if (!slugPattern.test(slug)) {
    throw new Error(`Invalid slug format: ${slug}. Slug must be lowercase kebab-case (e.g., "my-article")`);
  }

  // Load all articles (with related articles pre-computed)
  const allArticles = await getAllArticles();

  // Find the article with matching slug
  const article = allArticles.find((a) => a.slug === slug);

  if (!article) {
    throw new Error(`Article not found: ${slug}`);
  }

  return article;
}

/**
 * Retrieves all articles in a specific category.
 *
 * Articles are filtered by category and sorted by publication date (newest first).
 * Related articles are included (pre-computed at build time).
 * Returns empty array if no articles match the category.
 *
 * @param category - Category name to filter by
 * @returns Promise resolving to array of CompiledArticle objects with related articles
 *
 * @throws {Error} When category is invalid
 *
 * @example
 * ```typescript
 * const articles = await getArticlesByCategory('AI Fundamentals');
 * console.log(`Found ${articles.length} articles in AI Fundamentals`);
 * ```
 */
export async function getArticlesByCategory(category: string): Promise<CompiledArticle[]> {
  // Validate category to catch typos early
  if (!(VALID_CATEGORIES as readonly string[]).includes(category)) {
    throw new Error(
      `Invalid category "${category}". Must be one of: ${VALID_CATEGORIES.join(', ')}`
    );
  }

  // Load all articles (with related articles pre-computed)
  const allArticles = await getAllArticles();

  // Filter by category (already sorted by date from getAllArticles)
  return allArticles.filter((article) => article.category === category);
}
