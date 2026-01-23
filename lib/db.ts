import { neon } from '@neondatabase/serverless';

export type CardType =
  | 'concept'
  | 'example'
  | 'milestone'
  | 'framework'
  | 'resource'
  | 'insight'
  | 'scenario'
  | 'operational-pattern'
  | 'market-insight'
  | 'technical-concept'
  | 'article-link'
  | 'trend'
  | 'quote';

export interface Card {
  id: string;
  card_id: string;
  card_type: CardType;
  title: string;
  trigger_text?: string;
  summary?: string;
  color?: string;
  full_content?: Record<string, unknown>;
  used_in_articles?: string[];
  usage_count?: number;
  status?: string;
  articleSlug?: string; // For article-link type
  tags?: string[];
  download_url?: string; // For downloadable resources
  learn_more?: string; // Article slug for "Learn More" link
}

export interface ArticleContent {
  tldr?: string;
  tags?: string[];
  readTime?: string;
  updatedDate?: string;
  headerImage?: string;
  content: string;
  keyLearnings?: string[];
  additionalResources?: string[];
  sources?: string[];
}

export interface Article {
  id: string;
  article_id: string;
  title: string;
  slug: string;
  path: string;
  position: number;
  prev_article_slug?: string;
  prev_article_title?: string;
  next_article_slug?: string;
  next_article_title?: string;
  status: string;
  content?: ArticleContent;
}

// Create a connection to the database
const sql = neon(process.env.DATABASE_URL!);

/**
 * Fetch cards by their card_ids
 */
export async function getCardsByIds(cardIds: string[]): Promise<Card[]> {
  if (!cardIds || cardIds.length === 0) {
    return [];
  }

  try {
    const result = await sql`
      SELECT
        id,
        card_id,
        card_type,
        title,
        trigger_text,
        summary,
        color,
        full_content,
        used_in_articles,
        usage_count,
        status,
        download_url,
        learn_more
      FROM cards
      WHERE card_id = ANY(${cardIds})
      AND status = 'published'
      ORDER BY array_position(${cardIds}, card_id)
    `;

    return result.map(row => ({
      id: row.id as string,
      card_id: row.card_id as string,
      card_type: row.card_type as CardType,
      title: row.title as string,
      trigger_text: row.trigger_text as string | undefined,
      summary: row.summary as string | undefined,
      color: row.color as string | undefined,
      full_content: row.full_content as Record<string, unknown> | undefined,
      used_in_articles: row.used_in_articles as string[] | undefined,
      usage_count: row.usage_count as number | undefined,
      status: row.status as string | undefined,
      tags: (row.full_content as Record<string, unknown>)?.tags as string[] || [],
      articleSlug: (row.full_content as Record<string, unknown>)?.articleSlug as string | undefined,
      download_url: row.download_url as string | undefined,
      learn_more: row.learn_more as string | undefined
    }));
  } catch (error) {
    console.error('Error fetching cards:', error);
    throw error;
  }
}

/**
 * Fetch all cards used in a specific article
 */
export async function getCardsByArticle(articleSlug: string): Promise<Card[]> {
  try {
    const result = await sql`
      SELECT
        id,
        card_id,
        card_type,
        title,
        trigger_text,
        summary,
        color,
        full_content,
        used_in_articles,
        usage_count,
        status,
        download_url,
        learn_more
      FROM cards
      WHERE ${articleSlug} = ANY(used_in_articles)
      AND status = 'published'
      ORDER BY card_id
    `;

    return result.map(row => ({
      id: row.id as string,
      card_id: row.card_id as string,
      card_type: row.card_type as CardType,
      title: row.title as string,
      trigger_text: row.trigger_text as string | undefined,
      summary: row.summary as string | undefined,
      color: row.color as string | undefined,
      full_content: row.full_content as Record<string, unknown> | undefined,
      used_in_articles: row.used_in_articles as string[] | undefined,
      usage_count: row.usage_count as number | undefined,
      status: row.status as string | undefined,
      tags: (row.full_content as Record<string, unknown>)?.tags as string[] || [],
      articleSlug: (row.full_content as Record<string, unknown>)?.articleSlug as string | undefined,
      download_url: row.download_url as string | undefined,
      learn_more: row.learn_more as string | undefined
    }));
  } catch (error) {
    console.error('Error fetching cards by article:', error);
    throw error;
  }
}

/**
 * Fetch a single card by card_id
 */
export async function getCardById(cardId: string): Promise<Card | null> {
  try {
    const result = await sql`
      SELECT
        id,
        card_id,
        card_type,
        title,
        trigger_text,
        summary,
        color,
        full_content,
        used_in_articles,
        usage_count,
        status,
        download_url,
        learn_more
      FROM cards
      WHERE card_id = ${cardId}
      AND status = 'published'
      LIMIT 1
    `;

    if (result.length === 0) {
      return null;
    }

    const row = result[0];
    return {
      id: row.id as string,
      card_id: row.card_id as string,
      card_type: row.card_type as CardType,
      title: row.title as string,
      trigger_text: row.trigger_text as string | undefined,
      summary: row.summary as string | undefined,
      color: row.color as string | undefined,
      full_content: row.full_content as Record<string, unknown> | undefined,
      used_in_articles: row.used_in_articles as string[] | undefined,
      usage_count: row.usage_count as number | undefined,
      status: row.status as string | undefined,
      tags: (row.full_content as Record<string, unknown>)?.tags as string[] || [],
      articleSlug: (row.full_content as Record<string, unknown>)?.articleSlug as string | undefined,
      download_url: row.download_url as string | undefined,
      learn_more: row.learn_more as string | undefined
    };
  } catch (error) {
    console.error('Error fetching card by id:', error);
    throw error;
  }
}

/**
 * Update card usage count
 */
export async function incrementCardUsage(cardId: string): Promise<void> {
  try {
    await sql`
      UPDATE cards
      SET usage_count = usage_count + 1
      WHERE card_id = ${cardId}
    `;
  } catch (error) {
    console.error('Error incrementing card usage:', error);
    // Don't throw - this is a tracking feature, not critical
  }
}

/**
 * Fetch a single article by slug
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const result = await sql`
      SELECT
        id,
        article_id,
        title,
        slug,
        path,
        position,
        prev_article_slug,
        prev_article_title,
        next_article_slug,
        next_article_title,
        status,
        yaml_content
      FROM articles
      WHERE slug = ${slug}
      LIMIT 1
    `;

    if (result.length === 0) {
      return null;
    }

    const row = result[0];

    // Parse yaml_content as JSON
    let content: ArticleContent | undefined;
    if (row.yaml_content) {
      try {
        content = JSON.parse(row.yaml_content as string);
      } catch (error) {
        console.error('Error parsing article content:', error);
      }
    }

    return {
      id: row.id as string,
      article_id: row.article_id as string,
      title: row.title as string,
      slug: row.slug as string,
      path: row.path as string,
      position: row.position as number,
      prev_article_slug: row.prev_article_slug as string | undefined,
      prev_article_title: row.prev_article_title as string | undefined,
      next_article_slug: row.next_article_slug as string | undefined,
      next_article_title: row.next_article_title as string | undefined,
      status: row.status as string,
      content,
    };
  } catch (error) {
    console.error('Error fetching article by slug:', error);
    throw error;
  }
}
