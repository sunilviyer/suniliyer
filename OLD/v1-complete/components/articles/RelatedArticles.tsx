'use client';

import CategoryBadge from '@/components/articles/CategoryBadge';
import { getCategorySlug } from '@/lib/constants';
import type { CompiledArticle } from '@/types/article';

/**
 * Props interface for RelatedArticles component
 */
interface RelatedArticlesProps {
  relatedArticles: CompiledArticle[];
  onArticleClick: (slug: string) => void;
}

/**
 * RelatedArticles Component
 *
 * Displays a grid of related articles at the end of article content.
 * Uses getRelatedArticles() algorithm to show 3-4 most relevant articles.
 *
 * Features:
 * - Graceful degradation: Returns null if no related articles
 * - Responsive grid: 2 columns desktop, 1 column mobile
 * - Accessible: ARIA labels, keyboard navigation, touch targets
 * - Category-colored thumbnails and hover effects
 *
 * @param relatedArticles - Array of related articles from getRelatedArticles()
 * @param onArticleClick - Callback when related article is clicked (receives slug)
 */
export default function RelatedArticles({ relatedArticles, onArticleClick }: RelatedArticlesProps) {
  // Graceful degradation: Hide section if no related articles
  if (!relatedArticles || relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className="related-articles">
      <h2 className="related-articles-heading">Related Articles</h2>

      <div className="related-articles-grid">
        {relatedArticles.map((article) => {
          // Get category slug for CSS variable mapping
          const categorySlug = getCategorySlug(article.category);

          return (
            <button
              key={article.slug}
              className="related-article-card"
              data-category={categorySlug}
              onClick={() => onArticleClick(article.slug)}
              aria-label={`Read related article: ${article.title}`}
            >
              {/* Thumbnail placeholder with category color gradient */}
              <div
                className="related-article-thumbnail"
                data-category={categorySlug}
              />

              {/* Article metadata */}
              <div className="related-article-content">
                <CategoryBadge category={article.category} />
                <h3 className="related-article-title">{article.title}</h3>
                <p className="related-article-meta">{article.reading_time} min read</p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
