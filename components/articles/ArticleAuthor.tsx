'use client';

import Image from 'next/image';

export function ArticleAuthor() {
  return (
    <div className="article-author">
      <div className="author-avatar">
        <Image
          src="/images/logo.jpg"
          alt="Sunil Iyer"
          width={120}
          height={120}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="author-info">
        <h4>Sunil Iyer</h4>
        <div className="author-position">AI Governance Expert & Founder</div>
        <p className="author-bio">
          With over two decades of experience in technology leadership and AI
          governance, Sunil helps organizations navigate the complex landscape of
          responsible AI development, deployment, and regulation.
        </p>
        <div className="author-socials">
          <a href="https://linkedin.com/in/sunilviyer" target="_blank" rel="noopener">
            LinkedIn →
          </a>
          <a href="https://twitter.com/suniliyer" target="_blank" rel="noopener">
            Twitter →
          </a>
          <a href="mailto:contact@aidefence.com">Email →</a>
        </div>
      </div>

      <style jsx>{`
        .article-author {
          margin: 80px 0;
          padding: 40px;
          background: var(--bg-secondary);
          border-radius: 16px;
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 32px;
        }

        .author-avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          background: var(--border-color);
        }

        .author-info :global(h4) {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text-primary);
        }

        .author-position {
          font-size: 16px;
          color: #936639;
          margin-bottom: 16px;
        }

        .author-bio {
          font-size: 16px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        .author-socials {
          display: flex;
          gap: 16px;
        }

        .author-socials :global(a) {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .author-socials :global(a):hover {
          color: #333d29;
        }

        @media (max-width: 767px) {
          .article-author {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 30px 20px;
          }

          .author-avatar {
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
}
