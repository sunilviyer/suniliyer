/**
 * Article Type Definitions
 *
 * Defines TypeScript interfaces for article data structures used throughout the application.
 * Provides type safety for frontmatter parsing, article processing, and rendering.
 */

import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import type { Category } from '@/lib/constants';

/**
 * Article interface representing a parsed markdown article with frontmatter.
 *
 * **Naming Conventions:**
 * - Frontmatter fields use snake_case naming (reading_time, not readingTime)
 * - Date must be in YYYY-MM-DD format
 * - Category must match one of 11 valid categories exactly (Title Case)
 *
 * **Runtime Validation:**
 * ⚠️ TypeScript types are compile-time only. Implement runtime validation in
 * markdown parsing (Story 3.2) to catch invalid frontmatter at build time.
 *
 * **Valid Frontmatter Example:**
 * ```yaml
 * title: "Large Language Models Explained"
 * category: "AI Fundamentals"
 * tags: ["llm", "transformer", "neural-networks"]
 * date: "2025-12-14"
 * reading_time: 8
 * excerpt: "A comprehensive guide to understanding large language models"
 * video_url: "https://youtube.com/watch?v=..."
 * seo_title: "LLMs Explained - Complete Guide"
 * seo_description: "Learn about LLMs, transformers, and neural networks"
 * related_context: "transformer architecture attention mechanism"
 * ```
 *
 * **Invalid Frontmatter Examples (will cause runtime errors):**
 * ```yaml
 * # ❌ INVALID - Wrong category (not in VALID_CATEGORIES)
 * category: "Machine Learning"
 *
 * # ❌ INVALID - Wrong date format (must be YYYY-MM-DD)
 * date: "12/14/2025"
 *
 * # ❌ INVALID - reading_time as string (must be number)
 * reading_time: "8 minutes"
 *
 * # ❌ INVALID - camelCase field names (must be snake_case)
 * readingTime: 8
 * videoUrl: "https://..."
 *
 * # ❌ INVALID - missing required fields
 * title: "Test"
 * # Missing: category, tags, date, reading_time, excerpt, slug
 * ```
 */
export interface Article {
  /** Article title from frontmatter */
  title: string;

  /** URL-safe slug derived from filename */
  slug: string;

  /** One of 11 valid categories (from VALID_CATEGORIES) */
  category: Category;

  /** Array of tags for filtering and related articles */
  tags: string[];

  /**
   * Publication date in YYYY-MM-DD format
   *
   * ⚠️ Type is `string` but must match regex: /^\d{4}-\d{2}-\d{2}$/
   * Example: "2025-12-14"
   * Runtime validation required to enforce format
   */
  date: string;

  /**
   * Estimated reading time in minutes
   *
   * ⚠️ Type is `number` but should be positive integer
   * TypeScript accepts floats (e.g., 5.7) but application expects integers
   * Runtime validation should enforce: Math.floor(reading_time) === reading_time
   */
  reading_time: number;

  /** Short description for article cards */
  excerpt: string;

  /** YouTube video URL if article has companion video */
  video_url?: string;

  /** Custom SEO title (defaults to title if not provided) */
  seo_title?: string;

  /** Custom SEO description (defaults to excerpt if not provided) */
  seo_description?: string;

  /** Keywords for algorithmic related article matching */
  related_context?: string;
}

/**
 * Compiled Article with MDX content and computed fields.
 *
 * Extends Article interface with:
 * - Compiled MDX content ready for rendering
 * - Related articles computed at build time
 *
 * Used by:
 * - lib/markdown-parser.ts (returns CompiledArticle after parsing)
 * - lib/article-utils.ts (getAllArticles returns CompiledArticle[])
 * - app/articles/[slug]/page.tsx (receives CompiledArticle for rendering)
 */
export interface CompiledArticle extends Article {
  /** Compiled MDX content ready for rendering with next-mdx-remote */
  content: MDXRemoteSerializeResult;

  /** Slugs of related articles (computed at build time by related-articles.ts) */
  related_articles: string[];
}
