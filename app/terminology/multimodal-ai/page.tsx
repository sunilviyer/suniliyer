import { getCardsByArticle, getArticleBySlug } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { DatabaseArticleRenderer } from '@/components/articles/DatabaseArticleRenderer';
import { notFound } from 'next/navigation';

// Generate static paths at build time for SEO
export async function generateStaticParams() {
  return [
    { /* This page - multimodal-ai */ }
  ];
}

// Add metadata for SEO
export async function generateMetadata() {
  return {
    title: 'Multimodal AI - Terminology - Sunil Iyer',
    description: 'AI systems that understand and generate across text, images, audio, and video',
  };
}

export default async function MultimodalAiArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('multimodal-ai'),
    getCardsByArticle('multimodal-ai'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  return (
    <ArticlePageWrapper
      path="terminology"
      pathTitle="Terminology"
      articleTitle="Multimodal AI"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={5}
      totalArticles={8}
      prevArticle={{
        slug: '/terminology/foundation-models',
        title: 'Foundation Models'
      }}
      nextArticle={{
        slug: '/terminology/ai-compute',
        title: 'AI Compute Requirements'
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
