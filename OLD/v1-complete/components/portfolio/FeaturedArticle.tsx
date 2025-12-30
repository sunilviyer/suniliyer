'use client';

import Link from 'next/link';
import { Article } from '@/types/article';
import CategoryBadge from '@/components/articles/CategoryBadge';

export interface FeaturedArticleProps {
  article: Article;
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  // Format date for display
  const displayDate = new Date(article.date + 'T00:00:00').toLocaleDateString(
    'en-US',
    { year: 'numeric', month: 'short', day: 'numeric' }
  );

  // Generate gradient placeholder using category color
  const getCategoryColor = (category: string): string => {
    const categoryColors: Record<string, string> = {
      'AI Fundamentals': 'var(--color-cat-ai-fundamentals)',
      'Risks & Principles': 'var(--color-cat-risks-principles)',
      'Legal Frameworks': 'var(--color-cat-legal-frameworks)',
      'AI Laws': 'var(--color-cat-ai-laws)',
      'Risk Frameworks': 'var(--color-cat-risk-frameworks)',
      'Development Lifecycle': 'var(--color-cat-development-lifecycle)',
      'Governance': 'var(--color-cat-governance)',
      'Auditing & Assessment': 'var(--color-cat-auditing-assessment)',
      'Industry Perspectives': 'var(--color-cat-industry-perspectives)',
      'Explainability': 'var(--color-cat-explainability)',
      'Videos': 'var(--color-cat-videos)',
    };
    return categoryColors[category] || 'var(--color-cat-governance)';
  };

  const categoryColor = getCategoryColor(article.category);

  return (
    <Link href="/articles" className="featured-article">
      <div className="featured-article-thumbnail">
        <div
          className="featured-article-placeholder"
          style={{
            background: `linear-gradient(135deg, ${categoryColor} 0%, var(--color-surface-elevated) 100%)`,
          }}
        />
      </div>

      <div className="featured-article-content">
        <CategoryBadge category={article.category} />

        <h3 className="featured-article-title">{article.title}</h3>

        <p className="featured-article-meta">
          {article.reading_time} min read · {displayDate}
        </p>

        <p className="featured-article-excerpt">{article.excerpt}</p>
      </div>
    </Link>
  );
}
