'use client';

import { useState, useRef } from 'react';
import { CompiledArticle } from '@/types/article';
import CategoryBadge from '@/components/articles/CategoryBadge';
import ArticleExpanded from '@/components/articles/ArticleExpanded';

interface ArticleCardProps {
  article: CompiledArticle;
  allArticles: CompiledArticle[]; // All articles for related articles feature
}

export default function ArticleCard({ article, allArticles }: ArticleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLElement>(null);
  /**
   * Format article date for display using en-US locale.
   *
   * Adds 'T00:00:00' to date string to prevent timezone shifts.
   * Without this, "2025-12-12" could display as "December 11, 2025" in some timezones.
   *
   * Format options produce: "December 12, 2025" (month spelled out, not abbreviated)
   */
  const formattedDate = new Date(article.date + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',    // "2025"
    month: 'long',      // "December" (not "Dec")
    day: 'numeric',     // "12"
  });

  // Get category slug for CSS custom property
  const categorySlug = article.category
    .toLowerCase()
    .replace(/ & /g, '-')
    .replace(/ /g, '-');

  // Click handler to expand article (Epic 6 - Story 6.2)
  const handleClick = () => {
    setIsExpanded(true);
  };

  // Keyboard navigation handler
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <>
      <article
        ref={cardRef}
        className="article-card"
        aria-label={`${article.category}: ${article.title}, ${article.reading_time} minute read. Press Enter to expand.`}
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
      {/* Thumbnail with gradient placeholder */}
      <div className="article-thumbnail" data-category={categorySlug}>
        <CategoryBadge category={article.category} />
      </div>

      {/* Card content */}
      <div className="article-content">
        <h2 className="article-title">{article.title}</h2>

        <div className="article-meta">
          <span className="reading-time">{article.reading_time} min read</span>
          <span className="separator">•</span>
          <span className="published-date">{formattedDate}</span>
        </div>
      </div>
      </article>

      {/* Expandable article dialog */}
      <ArticleExpanded
        article={article}
        allArticles={allArticles}
        isOpen={isExpanded}
        onClose={() => setIsExpanded(false)}
        cardElement={cardRef.current} // eslint-disable-line react-hooks/refs -- Safe: ArticleExpanded only accesses cardElement in useEffect hook dependencies, not during render phase
      />
    </>
  );
}
