import { getCardsByArticle, getArticleBySlug } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { DatabaseArticleRenderer } from '@/components/articles/DatabaseArticleRenderer';
import { notFound } from 'next/navigation';

// Generate static paths at build time for SEO
export async function generateStaticParams() {
  return [
    { /* This page - ai-privacy */ }
  ];
}

// Add metadata for SEO
export async function generateMetadata() {
  return {
    title: 'AI and Privacy - Risk - Sunil Iyer',
    description: 'Protecting personal information: privacy risks in AI training and inference',
  };
}

export default async function AIPrivacyArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('ai-privacy'),
    getCardsByArticle('ai-privacy'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  return (
    <ArticlePageWrapper
      path="risk"
      pathTitle="Risk"
      articleTitle="AI and Privacy"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={4}
      totalArticles={8}
      prevArticle={{
        slug: '/risk/ai-hallucinations',
        title: 'AI Hallucinations'
      }}
      nextArticle={{
        slug: '/risk/deepfakes-synthetic-media',
        title: 'Deepfakes & Synthetic Media'
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
