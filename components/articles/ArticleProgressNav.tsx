'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface ArticleProgressNavProps {
  currentIndex: number;
  totalArticles: number;
  pathTitle: string;
  prevArticle?: {
    slug: string;
    title: string;
  };
  nextArticle?: {
    slug: string;
    title: string;
  };
  theme?: 'light' | 'dark';
}

export function ArticleProgressNav({
  currentIndex,
  totalArticles,
  pathTitle,
  prevArticle,
  nextArticle,
  theme = 'light'
}: ArticleProgressNavProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`article-progress-nav ${isVisible ? 'visible' : ''}`}>
        <div className="progress-nav-container">
          {/* Previous Article */}
          <div className="nav-button-wrapper">
            {prevArticle ? (
              <Link href={prevArticle.slug} className="nav-button prev">
                <i className="ph-bold ph-caret-left" />
                <span className="nav-label">Previous</span>
              </Link>
            ) : (
              <div className="nav-button-placeholder" />
            )}
          </div>

          {/* Progress Indicator */}
          <div className="progress-indicator">
            <span className="progress-text">
              {currentIndex} of {totalArticles} articles in "{pathTitle}"
            </span>
            <div className="progress-dots">
              {Array.from({ length: totalArticles }).map((_, i) => (
                <span
                  key={i}
                  className={`progress-dot ${i + 1 === currentIndex ? 'active' : ''} ${i + 1 < currentIndex ? 'completed' : ''}`}
                />
              ))}
            </div>
          </div>

          {/* Next Article */}
          <div className="nav-button-wrapper">
            {nextArticle ? (
              <Link href={nextArticle.slug} className="nav-button next">
                <span className="nav-label">Next</span>
                <i className="ph-bold ph-caret-right" />
              </Link>
            ) : (
              <div className="nav-button-placeholder" />
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .article-progress-nav {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: ${theme === 'light' ? 'rgba(255, 255, 255, 0.98)' : 'rgba(26, 26, 26, 0.98)'};
          backdrop-filter: blur(10px);
          border-top: 1px solid ${theme === 'light' ? 'rgba(26, 26, 26, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
          padding: 16px 20px;
          z-index: 900;
          transform: translateY(100%);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 -4px 20px ${theme === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(0, 0, 0, 0.4)'};
        }

        .article-progress-nav.visible {
          transform: translateY(0);
        }

        .progress-nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        .nav-button-wrapper {
          min-width: 120px;
        }

        .nav-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: ${theme === 'light' ? 'rgba(26, 26, 26, 0.05)' : 'rgba(255, 255, 255, 0.05)'};
          border: 1px solid ${theme === 'light' ? 'rgba(26, 26, 26, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
          border-radius: 24px;
          color: ${theme === 'light' ? '#1a1a1a' : '#ffffff'};
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .nav-button:hover {
          background: ${theme === 'light' ? 'rgba(26, 26, 26, 0.08)' : 'rgba(255, 255, 255, 0.08)'};
          border-color: ${theme === 'light' ? 'rgba(26, 26, 26, 0.2)' : 'rgba(255, 255, 255, 0.2)'};
          transform: translateY(-2px);
        }

        .nav-button.prev {
          padding-left: 12px;
        }

        .nav-button.next {
          padding-right: 12px;
        }

        .nav-button-placeholder {
          width: 120px;
        }

        .progress-indicator {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .progress-text {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 13px;
          color: ${theme === 'light' ? '#6b6b6b' : '#a0a0a0'};
          font-weight: 500;
        }

        .progress-dots {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .progress-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: ${theme === 'light' ? 'rgba(26, 26, 26, 0.15)' : 'rgba(255, 255, 255, 0.15)'};
          transition: all 0.3s ease;
        }

        .progress-dot.active {
          width: 24px;
          border-radius: 4px;
          background: #936639;
        }

        .progress-dot.completed {
          background: ${theme === 'light' ? 'rgba(147, 102, 57, 0.4)' : 'rgba(147, 102, 57, 0.6)'};
        }

        @media (max-width: 768px) {
          .article-progress-nav {
            padding: 12px 20px;
          }

          .progress-nav-container {
            gap: 16px;
          }

          .nav-button-wrapper {
            min-width: auto;
          }

          .nav-label {
            display: none;
          }

          .nav-button {
            padding: 8px 12px;
          }

          .progress-text {
            font-size: 11px;
          }

          .progress-dots {
            gap: 6px;
          }

          .progress-dot {
            width: 6px;
            height: 6px;
          }

          .progress-dot.active {
            width: 18px;
          }
        }
      `}</style>
    </>
  );
}
