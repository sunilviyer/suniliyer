import { getCardsByArticle, getArticleBySlug } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { DatabaseArticleRenderer } from '@/components/articles/DatabaseArticleRenderer';
import { notFound } from 'next/navigation';

export default async function GenerativeAIExplainedArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('generative-ai-explained'),
    getCardsByArticle('generative-ai-explained'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  return (
    <ArticlePageWrapper
      path="history"
      pathTitle="History"
      articleTitle="Generative AI Explained"
      tldr={content.tldr}
      tags={content.tags}
      readTime={content.readTime}
      updatedDate={content.updatedDate}
      headerImage={content.headerImage}
      currentIndex={6}
      totalArticles={8}
      prevArticle={{
        slug: '/articles/deep-learning-decoded',
        title: 'Deep Learning Decoded'
      }}
      nextArticle={{
        slug: '/articles/large-language-models',
        title: 'Large Language Models'
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
