import { getCardsByArticle, getArticleBySlug } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { DatabaseArticleRenderer } from '@/components/articles/DatabaseArticleRenderer';
import { JsonLd } from '@/components/seo/JsonLd';
import { getArticleSchema, getBreadcrumbSchema } from '@/lib/schema';
import { getArticleSocialMeta } from '@/lib/social-meta';
import { notFound } from 'next/navigation';

// Generate static paths at build time for SEO
export async function generateStaticParams() {
  return [
    { /* This page - human-centered-ai */ }
  ];
}

// Add metadata for SEO and social media
export async function generateMetadata() {
  return getArticleSocialMeta({
    title: 'Human-Centered AI',
    description: 'Putting people first: Designing AI systems that augment rather than replace human judgment',
    slug: 'human-centered-ai',
    path: 'responsibility',
    tags: ['Human-Centered AI', 'Design', 'Ethics', 'UX'],
  });
};
}

export default async function HumanCenteredAiArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('human-centered-ai'),
    getCardsByArticle('human-centered-ai'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  // Schema.org structured data
  const articleSchema = getArticleSchema({
    title: 'Human-Centered AI',
    description: 'Keeping people in the loop: prioritizing human needs and wellbeing',
    slug: 'human-centered-ai',
    path: 'responsibility',
    datePublished: '2025-01-01T00:00:00Z',
    dateModified: content.updatedDate || '2025-01-01T00:00:00Z',
    image: content.headerImage,
    readTime: content.readTime,
    tags: content.tags || []
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Responsibility', url: '/responsibility' },
    { name: 'Human-Centered AI', url: '/responsibility/human-centered-ai' }
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <ArticlePageWrapper
      path="responsibility"
      pathTitle="Responsibility"
      articleTitle="Human-Centered AI"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={6}
      totalArticles={8}
      prevArticle={{
        slug: '/responsibility/ai-accountability',
        title: 'AI Accountability'
      }}
      nextArticle={{
        slug: '/responsibility/global-ai-law-tracker',
        title: 'Global AI Law Tracker'
      }}
      cards={cards}
    >
      <DatabaseArticleRenderer
        content={content.content}
        keyLearnings={content.keyLearnings}
        additionalResources={content.additionalResources}
        sources={content.sources}
      />
    </ArticlePageWrapper>
    </>
  );
}
