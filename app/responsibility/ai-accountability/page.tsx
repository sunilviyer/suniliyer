import { getCardsByArticle, getArticleBySlug } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { DatabaseArticleRenderer } from '@/components/articles/DatabaseArticleRenderer';
import { notFound } from 'next/navigation';

// Generate static paths at build time for SEO
export async function generateStaticParams() {
  return [
    { /* This page - ai-accountability */ }
  ];
}

// Add metadata for SEO
export async function generateMetadata() {
  return {
    title: 'AI Accountability - Responsibility - Sunil Iyer',
    description: 'Who is responsible when AI causes harm? Establishing oversight frameworks',
  };
}

export default async function AiAccountabilityArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('ai-accountability'),
    getCardsByArticle('ai-accountability'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  return (
    <ArticlePageWrapper
      path="responsibility"
      pathTitle="Responsibility"
      articleTitle="AI Accountability"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={5}
      totalArticles={8}
      prevArticle={{
        slug: '/responsibility/ai-transparency',
        title: 'AI Transparency'
      }}
      nextArticle={{
        slug: '/responsibility/human-centered-ai',
        title: 'Human-Centered AI'
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
  );
}
