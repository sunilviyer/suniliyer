import { MetadataRoute } from 'next';
import { constitutionParts } from '@/app/constitution/data/reading-order';
import {
  LEARNING_PATH_SLUGS,
  learningPathArticles,
} from '@/lib/data/learning-path-articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.suniliyer.ca';
  const currentDate = new Date().toISOString();

  // Main pages with high priority
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/journey`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/behind-the-scenes`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/creative-works`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Portfolio pages
  const portfolioPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/calvinhobbes`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gita`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/mortgage-calculator`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/coming-soon`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.3,
    },
  ];

  // Learning path index pages, one per path
  const learningPathIndexPages: MetadataRoute.Sitemap = LEARNING_PATH_SLUGS.map(
    (path) => ({
      url: `${baseUrl}/${path}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })
  );

  // Learning path articles, from the shared content index that the RSS feed
  // also reads, so the two can never list different articles.
  const learningPathArticlePages: MetadataRoute.Sitemap =
    learningPathArticles.map((article) => ({
      url: `${baseUrl}/${article.path}/${article.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));

  // AGI Constitution pages, driven by the canonical reading order so the
  // sitemap cannot drift from the routes that actually render.
  const constitutionPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/constitution`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/constitution/context`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.95, // High priority for AI discoverability
    },
    ...constitutionParts.map((part) => ({
      url: `${baseUrl}/constitution/${part.id}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];

  // Combine all pages
  return [
    ...mainPages,
    ...portfolioPages,
    ...constitutionPages,
    ...learningPathIndexPages,
    ...learningPathArticlePages,
  ];
}
