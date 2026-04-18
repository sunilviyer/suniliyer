'use client';

interface ArticleExcerptProps {
  content: string;
}

export function ArticleExcerpt({ content }: ArticleExcerptProps) {
  return (
    <p className="article-excerpt">
      {content}

      <style jsx>{`
        .article-excerpt {
          font-size: 24px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 60px;
          font-weight: 400;
        }

        @media (max-width: 767px) {
          .article-excerpt {
            font-size: 20px;
            margin-bottom: 40px;
          }
        }
      `}</style>
    </p>
  );
}
