'use client';

interface ArticleContentProps {
  slug: string;
}

export function ArticleContent({ slug }: ArticleContentProps) {
  // Placeholder content - will be replaced with MDX rendering
  console.log('Article slug:', slug);

  return (
    <div className="article-content">
      {/* Placeholder content sections */}
      <div className="article-section" id="oecd-definition">
        <h3>OECD AI Definition (Nov 2023)</h3>
        <p>
          The Organisation for Economic Co-operation and Development (OECD) updated its AI definition
          in November 2023 to reflect the rapid evolution of AI systems. This definition is now the
          international standard used by governments, regulatory bodies, and industry organizations
          worldwide.
        </p>
        <blockquote>
          &ldquo;An AI system is a machine-based system that, for explicit or implicit objectives, infers,
          from the input it receives, how to generate outputs such as predictions, content,
          recommendations, or decisions that can influence physical or virtual environments.&rdquo;
        </blockquote>
      </div>

      <div className="article-section" id="iso-terminology">
        <h3>ISO/IEC 22989:2022 Terminology</h3>
        <p>
          The International Organization for Standardization (ISO) and the International
          Electrotechnical Commission (IEC) published ISO/IEC 22989:2022, establishing standardized
          terminology for artificial intelligence concepts and techniques.
        </p>
      </div>

      <style jsx>{`
        .article-content {
          margin-bottom: 80px;
        }

        .article-section {
          margin-bottom: 60px;
        }

        .article-section :global(h3) {
          font-size: 32px;
          font-weight: 600;
          margin-bottom: 24px;
          color: var(--text-primary);
          scroll-margin-top: 100px;
        }

        .article-section :global(p) {
          font-size: 18px;
          line-height: 1.8;
          color: var(--text-primary);
          margin-bottom: 20px;
        }

        .article-section :global(blockquote) {
          border-left: 4px solid #936639;
          padding: 24px 32px;
          margin: 32px 0;
          background: var(--bg-secondary);
          border-radius: 8px;
          font-style: italic;
          color: var(--text-secondary);
        }

        @media (max-width: 767px) {
          .article-section :global(h3) {
            font-size: 24px;
          }

          .article-section :global(p) {
            font-size: 16px;
          }

          .article-section :global(blockquote) {
            padding: 20px 24px;
          }
        }
      `}</style>
    </div>
  );
}
