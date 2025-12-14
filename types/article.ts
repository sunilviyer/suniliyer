// types/article.ts

import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

/**
 * Article Type Definition
 *
 * This interface defines the structure of article data used throughout AIDefence.
 * Articles are created from markdown files with YAML frontmatter.
 *
 * Naming Conventions:
 * - Interface name: PascalCase (Article, not IArticle)
 * - Frontmatter fields: snake_case (reading_time, not readingTime)
 * - Date format: YYYY-MM-DD
 *
 * This is a STUB file that will be fully implemented in Epic 3: Content Management Pipeline.
 */

/**
 * Valid article categories (must match exactly - Title Case)
 */
export const VALID_CATEGORIES = [
  "AI Fundamentals",
  "Risks & Principles",
  "Legal Frameworks",
  "AI Laws",
  "Risk Frameworks",
  "Development Lifecycle",
  "Governance",
  "Auditing & Assessment",
  "Industry Perspectives",
  "Explainability",
  "Videos",
] as const;

export type Category = typeof VALID_CATEGORIES[number];

/**
 * Article interface representing a single article with metadata and content
 */
export interface Article {
  // Required fields (from frontmatter)
  title: string;                    // Article title
  slug: string;                     // URL-friendly slug (derived from filename)
  category: Category;               // Must match one of VALID_CATEGORIES
  tags: string[];                   // Array of tags for filtering and related articles
  date: string;                     // Publication date in YYYY-MM-DD format
  reading_time: number;             // Estimated reading time in minutes (integer)

  // Optional SEO fields (from frontmatter)
  meta_description?: string;        // SEO description for search engines
  seo_title?: string;              // Custom SEO title (defaults to title)
  related_context?: string;        // Keywords for related article algorithm
  video_url?: string;              // Optional YouTube video URL

  // Computed fields (added during build processing)
  related_articles?: string[];     // Array of related article slugs (computed by algorithm)
  content?: MDXRemoteSerializeResult;  // Compiled MDX content from next-mdx-remote
}

/**
 * Partial article metadata for preview cards (grid display)
 */
export interface ArticlePreview {
  title: string;
  slug: string;
  category: Category;
  date: string;
  reading_time: number;
}
