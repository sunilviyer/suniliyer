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
  | 'article-link';

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
        status
      FROM cards
      WHERE card_id = ANY(${cardIds})
      AND status = 'published'
      ORDER BY array_position(${cardIds}, card_id)
    `;

    return result.map(row => ({
      ...row,
      tags: row.full_content?.tags || [],
      articleSlug: row.full_content?.articleSlug
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
        status
      FROM cards
      WHERE ${articleSlug} = ANY(used_in_articles)
      AND status = 'published'
      ORDER BY card_id
    `;

    return result.map(row => ({
      ...row,
      tags: row.full_content?.tags || [],
      articleSlug: row.full_content?.articleSlug
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
        status
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
      ...row,
      tags: row.full_content?.tags || [],
      articleSlug: row.full_content?.articleSlug
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
