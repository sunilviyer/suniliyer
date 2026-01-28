import { notFound } from 'next/navigation';
import { getArticleBySlug, getCardsByArticle } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { DatabaseArticleRenderer } from '@/components/articles/DatabaseArticleRenderer';

export default async function FoundationModelsArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('foundation-models'),
    getCardsByArticle('foundation-models'),
  ]);

  // Handle article not found
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  return (
    <ArticlePageWrapper
      path="terminology"
      pathTitle="Terminology"
      articleTitle={content.articleTitle || 'Foundation Models'}
      tldr={content.tldr || ''}
      tags={content.tags || ['Foundation Models', 'GPAI', 'AI Infrastructure']}
      readTime={content.readTime || '8 min read'}
      updatedDate={content.updatedDate || 'January 2025'}
      headerImage={content.headerImage || '/images/terminology/foundation-models.webp'}
      currentIndex={4}
      totalArticles={8}
      prevArticle={{
        slug: '/terminology/data-behind-ai',
        title: 'The Data Behind AI'
      }}
      nextArticle={{
        slug: '/terminology/multimodal-ai',
        title: 'Multimodal AI'
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
