'use client';

import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';
import { ArticleBreadcrumbs } from './ArticleBreadcrumbs';
import { ArticleTLDR } from './ArticleTLDR';
import { FloatingSidebar } from './FloatingSidebar';
import { ReadingProgress } from './ReadingProgress';

interface ArticleLayoutProps {
  children: ReactNode;
  path: string;
  pathTitle: string;
  articleTitle: string;
  tldr: string;
  tags: string[];
  readTime: string;
  updatedDate: string;
  headerImage?: string;
  theme?: 'light' | 'dark';
  sidebarCards?: Array<{
    id: string;
    title: string;
    type: 'example' | 'milestone' | 'framework' | 'scenario' | 'resource' | 'insight' | 'concept' | 'pattern';
    image: string;
    summary: string;
    data: Record<string, unknown>;
  }>;
}

export function ArticleLayout({
  children,
  path,
  pathTitle,
  articleTitle,
  tldr,
  tags,
  readTime,
  updatedDate,
  headerImage,
  theme = 'light',
  sidebarCards,
}: ArticleLayoutProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ReadingProgress progress={scrollProgress} pathColor={getPathColor(path)} />

      <div className="article-layout">
        <div className="article-container">
          {/* Main Content Column */}
          <article className="article-main">
            <ArticleBreadcrumbs
              path={path}
              pathTitle={pathTitle}
              articleTitle={articleTitle}
              theme={theme}
            />

            <header className="article-header-section">
              {headerImage ? (
                <div className="header-with-overlay">
                  <div className="header-image-container">
                    <Image
                      src={headerImage}
                      alt={articleTitle}
                      width={1400}
                      height={500}
                      className="header-image"
                      priority
                    />
                    <div className="image-overlay" />
                  </div>

                  <div className="header-overlay-content">
                    <div className="article-meta">
                      <span className="path-badge" data-path={path}>{pathTitle}</span>
                      <span className="meta-divider">·</span>
                      <time>{updatedDate}</time>
                      <span className="meta-divider">·</span>
                      <span>{readTime}</span>
                    </div>

                    <h1 className="article-title">{articleTitle}</h1>

                    <div className="article-tags">
                      {tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="article-meta">
                    <span className="path-badge" data-path={path}>{pathTitle}</span>
                    <span className="meta-divider">·</span>
                    <time>{updatedDate}</time>
                    <span className="meta-divider">·</span>
                    <span>{readTime}</span>
                  </div>

                  <h1 className="article-title">{articleTitle}</h1>

                  <div className="article-tags">
                    {tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </>
              )}
            </header>

            <ArticleTLDR tldr={tldr} theme={theme} />

            <div className="article-body">
              {children}
            </div>
          </article>

          {/* Floating Sidebar */}
          {sidebarCards && (
            <FloatingSidebar cards={sidebarCards} />
          )}
        </div>
      </div>

      <style jsx>{`
        .article-layout {
          min-height: 100vh;
          background: ${theme === 'light' ? '#ffffff' : '#1a1a1a'};
          padding: 140px 0 100px;
          transition: background 0.3s ease;
        }

        .article-container {
          max-width: ${sidebarCards && sidebarCards.length > 0 ? '1400px' : '1100px'};
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: ${sidebarCards && sidebarCards.length > 0 ? '1fr 420px' : '1fr'};
          gap: 80px;
          position: relative;
        }

        .article-main {
          max-width: ${sidebarCards && sidebarCards.length > 0 ? '720px' : '1100px'};
          margin: ${sidebarCards && sidebarCards.length > 0 ? '0' : '0 auto'};
          animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .article-header-section {
          margin-bottom: 48px;
          padding-bottom: 40px;
          border-bottom: 1px solid ${theme === 'light' ? 'rgba(26, 26, 26, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
        }

        .header-with-overlay {
          position: relative;
          margin: -40px 0 32px;
        }

        .header-image-container {
          position: relative;
          width: 100%;
          min-height: 500px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }

        .header-image {
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%);
        }

        .header-overlay-content {
          position: absolute;
          bottom: 40px;
          left: 40px;
          right: 40px;
          z-index: 10;
        }

        .article-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 14px;
          color: ${theme === 'light' ? '#6b6b6b' : '#a0a0a0'};
          margin-bottom: 24px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 500;
        }

        .header-overlay-content .article-meta {
          color: rgba(255, 255, 255, 0.9);
        }

        .header-overlay-content .meta-divider {
          color: rgba(255, 255, 255, 0.5);
        }

        .path-badge {
          background: var(--path-color, #936639);
          color: white;
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .path-badge[data-path="history"] {
          --path-color: #936639;
        }

        .path-badge[data-path="terminology"] {
          --path-color: #a68a64;
        }

        .path-badge[data-path="risk"] {
          --path-color: #582f0e;
        }

        .path-badge[data-path="responsibility"] {
          --path-color: #a4ac86;
        }

        .path-badge[data-path="future"] {
          --path-color: #414833;
        }

        .meta-divider {
          color: rgba(26, 26, 26, 0.2);
        }

        .article-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 56px;
          font-weight: 700;
          line-height: 1.15;
          color: ${theme === 'light' ? '#1a1a1a' : '#ffffff'};
          margin: 0 0 32px 0;
          letter-spacing: -0.02em;
        }

        .header-overlay-content .article-title {
          color: white;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .article-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tag {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 13px;
          color: ${theme === 'light' ? '#1a1a1a' : '#e0e0e0'};
          background: ${theme === 'light' ? 'rgba(26, 26, 26, 0.05)' : 'rgba(255, 255, 255, 0.1)'};
          padding: 6px 14px;
          border-radius: 20px;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .tag:hover {
          background: ${theme === 'light' ? 'rgba(26, 26, 26, 0.1)' : 'rgba(255, 255, 255, 0.15)'};
        }

        .header-overlay-content .tag {
          color: white;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(8px);
        }

        .header-overlay-content .tag:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .article-body {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 20px;
          line-height: 1.8;
          color: #1a1a1a;
        }

        /* Global content styles for article children */
        .article-body :global(.content-h2) {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 32px;
          font-weight: 700;
          color: ${theme === 'light' ? '#1a1a1a' : '#ffffff'};
          margin: 60px 0 24px 0;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .article-body :global(.heading-decoration) {
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #936639 0%, transparent 100%);
          border-radius: 2px;
        }

        .article-body :global(.content-p) {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 20px;
          line-height: 1.8;
          color: ${theme === 'light' ? '#1a1a1a' : '#e0e0e0'};
          margin-bottom: 24px;
        }

        .article-body :global(.content-ul) {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 20px;
          line-height: 1.8;
          color: ${theme === 'light' ? '#1a1a1a' : '#e0e0e0'};
          margin: 24px 0 24px 32px;
        }

        .article-body :global(.content-ul li) {
          margin-bottom: 12px;
        }

        @media (max-width: 1200px) {
          .article-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }
        }

        @media (max-width: 768px) {
          .article-layout {
            padding: 120px 0 80px;
          }

          .article-container {
            padding: 0 20px;
          }

          .header-with-overlay {
            margin: 0 0 32px 0;
          }

          .header-image-container {
            min-height: 300px;
            border-radius: 8px;
          }

          .header-overlay-content {
            bottom: 20px;
            left: 20px;
            right: 20px;
          }

          .article-title {
            font-size: 40px;
          }

          .header-overlay-content .article-title {
            font-size: 28px;
            margin-bottom: 16px;
          }

          .article-body {
            font-size: 18px;
          }

          .article-body :global(.content-h2) {
            font-size: 28px;
            margin: 40px 0 20px 0;
          }

          .article-body :global(.content-p) {
            font-size: 18px;
          }

          .article-body :global(.content-ul) {
            font-size: 18px;
            margin-left: 24px;
          }
        }
      `}</style>
    </>
  );
}

function getPathColor(path: string): string {
  const colors: Record<string, string> = {
    history: '#936639',
    terminology: '#a68a64',
    risk: '#582f0e',
    responsibility: '#a4ac86',
    future: '#414833',
  };
  return colors[path] || '#936639';
}
