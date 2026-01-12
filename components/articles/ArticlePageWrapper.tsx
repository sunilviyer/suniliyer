'use client';

import { useState, ReactNode } from 'react';
import { Card } from '@/lib/db';
import { ArticleLayout } from './ArticleLayout';
import { ArticleProgressNav } from './ArticleProgressNav';
import { FloatingPathsNav } from './FloatingPathsNav';

interface ArticlePageWrapperProps {
  // Article metadata
  path: string;
  pathTitle: string;
  articleTitle: string;
  tldr: string;
  tags: string[];
  readTime: string;
  updatedDate: string;
  headerImage?: string;

  // Navigation
  currentIndex: number;
  totalArticles: number;
  prevArticle?: {
    slug: string;
    title: string;
  };
  nextArticle?: {
    slug: string;
    title: string;
  };

  // Cards from database
  cards: Card[];

  // Article content
  children: ReactNode;
}

/**
 * Client-side wrapper for article pages that manages theme state
 * and provides cards from the database to child components
 */
export function ArticlePageWrapper({
  path,
  pathTitle,
  articleTitle,
  tldr,
  tags,
  readTime,
  updatedDate,
  headerImage,
  currentIndex,
  totalArticles,
  prevArticle,
  nextArticle,
  cards,
  children,
}: ArticlePageWrapperProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Convert cards array to lookup object for easy access
  const cardLookup = cards.reduce((acc, card) => {
    acc[card.card_id] = {
      id: card.card_id,
      title: card.title,
      type: card.card_type as any,
      summary: card.summary || '',
      tags: card.tags || [],
      articleSlug: card.articleSlug
    };
    return acc;
  }, {} as Record<string, any>);

  return (
    <>
      {/* Theme Toggle Button */}
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="theme-toggle-btn"
        style={{
          position: 'fixed',
          top: '20px',
          right: '30px',
          zIndex: 10000,
          background: theme === 'light' ? '#1a1a1a' : '#ffffff',
          color: theme === 'light' ? '#ffffff' : '#1a1a1a',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
          fontSize: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          transition: 'all 0.3s ease'
        }}
      >
        <i className={theme === 'light' ? 'ph-bold ph-moon-stars' : 'ph-bold ph-sun-horizon'} />
      </button>

      {/* Article Layout */}
      <ArticleLayout
        path={path}
        pathTitle={pathTitle}
        articleTitle={articleTitle}
        tldr={tldr}
        tags={tags}
        readTime={readTime}
        updatedDate={updatedDate}
        headerImage={headerImage}
        theme={theme}
        sidebarCards={[]}
      >
        {/* Inject card data into context for InlineContextCard components */}
        <div data-card-lookup={JSON.stringify(cardLookup)} style={{ display: 'none' }} />
        {children}
      </ArticleLayout>

      {/* Navigation Components */}
      <ArticleProgressNav
        currentIndex={currentIndex}
        totalArticles={totalArticles}
        pathTitle={pathTitle}
        prevArticle={prevArticle}
        nextArticle={nextArticle}
        theme={theme}
      />

      <FloatingPathsNav
        currentPath={`/${path}`}
        theme={theme}
      />
    </>
  );
}
