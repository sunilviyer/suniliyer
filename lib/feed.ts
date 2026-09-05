import { constitutionParts } from '@/app/constitution/data/reading-order';
import { learningPathArticles } from '@/lib/data/learning-path-articles';

export const SITE_URL = 'https://www.suniliyer.ca';
export const SITE_NAME = 'Sunil Iyer';
export const SITE_DESCRIPTION =
  'AI governance, responsible AI curriculum, frameworks, and the AGI Constitution.';
export const AUTHOR_NAME = 'Sunil Iyer';
export const FEED_PATH = '/rss.xml';

/**
 * Learning-path articles carry their own publishDate in the shared index, so
 * the feed, the Article schema and og:published_time all report the same day.
 *
 * The constitution has no per-part dates. It keeps the site's declared
 * 2026-03-01 publication date, spaced one day per part in reading order, so
 * feed readers have something stable to sort on. Weekly spacing was
 * considered and rejected: 33 parts a week apart from that base runs past
 * today's date, and feed readers hide items dated in the future.
 */
const CONSTITUTION_BASE_DATE = Date.UTC(2026, 2, 1);
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

export interface FeedItem {
  /** site-absolute path, e.g. /history/ai-history */
  path: string;
  title: string;
  description: string;
  categories: string[];
  pubDate: Date;
}

/**
 * Every long-form piece on the site, newest first: the AGI Constitution
 * followed by the learning-path articles.
 */
export function getFeedItems(): FeedItem[] {
  const constitution: FeedItem[] = constitutionParts.map((part, index) => ({
    path: `/constitution/${part.id}`,
    title: part.title,
    description: [part.subtitle, part.story]
      .filter(Boolean)
      .join(' - ') ||
      `${part.title} - part of the AGI Constitution: Dharma Sanhita.`,
    categories: ['AGI Constitution', 'AI Governance'],
    pubDate: new Date(CONSTITUTION_BASE_DATE + index * ONE_DAY_MS),
  }));

  const articles: FeedItem[] = learningPathArticles.map((article) => ({
    path: `/${article.path}/${article.slug}`,
    title: article.title,
    description: article.description,
    categories: article.tags,
    pubDate: new Date(article.publishDate),
  }));

  return [...constitution.reverse(), ...articles.reverse()];
}
