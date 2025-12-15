/**
 * SEO Metadata Generation
 *
 * Generates Next.js Metadata objects from Article frontmatter.
 * Provides comprehensive SEO optimization including:
 * - Meta tags (title, description, keywords)
 * - Open Graph metadata for social sharing
 * - Twitter Card metadata
 * - Canonical URLs
 *
 * Uses custom seo_title/seo_description if provided,
 * otherwise falls back to title/excerpt.
 *
 * @module lib/seo-metadata
 */

import type { Metadata } from 'next';
import type { Article } from '@/types/article';

/**
 * Base URL for the AIDefence website.
 * Used for canonical URLs and Open Graph metadata.
 */
const SITE_URL = 'https://www.suniliyer.ca';

/**
 * Site name for Open Graph metadata.
 */
const SITE_NAME = 'AIDefence';

/**
 * Default Open Graph image path.
 * Placeholder image created in Story 3.8.
 */
const DEFAULT_OG_IMAGE = '/og-image.png';

/**
 * Author name for JSON-LD structured data.
 */
const AUTHOR_NAME = 'Sunil Iyer';

/**
 * Generates Next.js Metadata object from Article frontmatter.
 *
 * Provides comprehensive SEO optimization:
 * - Uses seo_title if provided, else falls back to title
 * - Uses seo_description if provided, else falls back to excerpt
 * - Generates canonical URL from article slug
 * - Creates Open Graph metadata for Facebook/LinkedIn sharing
 * - Creates Twitter Card metadata for Twitter sharing
 * - Includes keywords from article tags
 *
 * @param article - Article object with frontmatter
 * @returns Next.js Metadata object for use in generateMetadata() in app/articles/[slug]/page.tsx
 *
 * @example
 * ```typescript
 * // In app/articles/[slug]/page.tsx
 * import { generateMetadata } from '@/lib/seo-metadata';
 * import { getArticleBySlug } from '@/lib/article-utils';
 *
 * export async function generateMetadata({ params }: { params: { slug: string } }) {
 *   const article = await getArticleBySlug(params.slug);
 *   return generateMetadata(article);
 * }
 * ```
 */
export function generateMetadata(article: Article): Metadata {
  // Use custom SEO fields if provided, else fall back to defaults
  const title = article.seo_title || article.title;
  const description = article.seo_description || article.excerpt;
  const canonicalPath = `/articles/${article.slug}`;

  // Convert tags array to comma-separated keywords string
  const keywords = article.tags.join(', ');

  return {
    // Basic meta tags
    title,
    description,
    keywords,

    // Metadata base for absolute URLs
    metadataBase: new URL(SITE_URL),

    // Canonical URL (prevents duplicate content issues)
    alternates: {
      canonical: canonicalPath,
    },

    // Open Graph metadata (Facebook, LinkedIn, etc.)
    openGraph: {
      title,
      description,
      type: 'article',
      url: canonicalPath,
      siteName: SITE_NAME,
      locale: 'en_US',
      images: [DEFAULT_OG_IMAGE],
    },

    // Twitter Card metadata
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

/**
 * JSON-LD Article structured data interface.
 *
 * Follows schema.org/Article specification.
 */
interface ArticleJsonLd {
  '@context': string;
  '@type': string;
  headline: string;
  description: string;
  datePublished: string;
  author: {
    '@type': string;
    name: string;
    url: string;
  };
  publisher: {
    '@type': string;
    name: string;
    url: string;
  };
  keywords: string;
}

/**
 * Generates JSON-LD structured data for schema.org/Article.
 *
 * Provides search engines with structured information about the article:
 * - Article headline and description
 * - Publication date
 * - Author information (Sunil Iyer)
 * - Publisher information (AIDefence)
 * - Keywords from article tags
 *
 * The JSON-LD object should be rendered in a script tag with type="application/ld+json"
 * in the article page component.
 *
 * @param article - Article object with frontmatter
 * @returns JSON-LD structured data object following schema.org/Article
 *
 * @example
 * ```typescript
 * // In app/articles/[slug]/page.tsx
 * import { generateArticleJsonLd } from '@/lib/seo-metadata';
 *
 * export default async function ArticlePage({ params }) {
 *   const article = await getArticleBySlug(params.slug);
 *   const jsonLd = generateArticleJsonLd(article);
 *
 *   // Render script tag with JSON.stringify(jsonLd)
 *   // type="application/ld+json" in page component
 * }
 * ```
 */
export function generateArticleJsonLd(article: Article): ArticleJsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    keywords: article.tags.join(', '),
  };
}
