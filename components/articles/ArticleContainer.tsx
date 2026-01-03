'use client';

import { ReactNode } from 'react';

interface ArticleContainerProps {
  children: ReactNode;
}

export function ArticleContainer({ children }: ArticleContainerProps) {
  return (
    <main className="article-container">
      {children}

      <style jsx>{`
        .article-container {
          max-width: 920px;
          margin: 0 auto;
          padding: 120px 40px 80px;
        }

        @media (max-width: 767px) {
          .article-container {
            padding: 100px 20px 60px;
          }
        }
      `}</style>
    </main>
  );
}
