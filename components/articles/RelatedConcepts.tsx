'use client';

import Link from 'next/link';

interface Article {
  id: string;
  title: string;
  slug: string;
  path: string;
}

interface RelatedConceptsProps {
  relatedArticles: Article[];
}

export function RelatedConcepts({ relatedArticles }: RelatedConceptsProps) {
  if (!relatedArticles || relatedArticles.length === 0) {
    return null;
  }

  return (
    <div className="related-concepts">
      <h3 className="related-concepts-title">📚 Related Concepts in This Path</h3>
      <div className="related-concepts-grid">
        {relatedArticles.map((article, index) => (
          <Link
            key={article.id}
            href={`/articles/${article.slug}`}
            className="related-card"
          >
            <div className="related-card-number">
              Concept {String(index + 1).padStart(2, '0')}
            </div>
            <h4 className="related-card-title">{article.title}</h4>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .related-concepts {
          margin: 80px 0;
          padding: 40px;
          background: var(--bg-secondary);
          border-radius: 16px;
        }

        .related-concepts-title {
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 32px;
          color: var(--text-primary);
        }

        .related-concepts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
        }

        .related-concepts :global(.related-card) {
          background: var(--bg-primary);
          padding: 24px;
          border-radius: 12px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          display: block;
        }

        .related-concepts :global(.related-card):hover {
          border-color: #333d29;
          transform: translateY(-4px);
        }

        .related-card-number {
          font-size: 12px;
          color: #936639;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .related-card-title {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.3;
          color: var(--text-primary);
        }

        @media (max-width: 767px) {
          .related-concepts {
            padding: 30px 20px;
          }

          .related-concepts-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
