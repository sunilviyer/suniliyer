/**
 * @jest-environment jsdom
 *
 * Progressive Enhancement Tests (Story 7.6)
 *
 * Tests that core functionality works without JavaScript:
 * - Article cards have fallback links to static pages
 * - Navigation links are standard <a> tags
 * - Content is accessible via direct URLs
 *
 * Note: These tests verify the HTML structure. For full no-JS testing,
 * use Playwright with `javaScriptEnabled: false` in browser context.
 */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArticleCard from '../ArticleCard';
import { CompiledArticle } from '@/types/article';

// Mock CSS imports
jest.mock('../CategoryBadge.css', () => ({}), { virtual: true });

// Mock Next.js Link component
jest.mock('next/link', () => {
  return ({ children, href, ...props }: any) => {
    return <a href={href} {...props}>{children}</a>;
  };
});

// Mock ArticleExpanded component (client-side only, not needed for no-JS test)
jest.mock('../ArticleExpanded', () => {
  return function MockArticleExpanded() {
    return null;
  };
});

describe('Progressive Enhancement - No-JS Fallbacks', () => {
  const mockArticle: CompiledArticle = {
    slug: 'test-article',
    title: 'Test Article',
    excerpt: 'Test excerpt',
    content: 'Test content',
    category: 'AI Fundamentals',
    tags: ['test'],
    date: '2025-12-17',
    reading_time: 5,
    seo_title: 'Test Article',
    seo_description: 'Test description',
  };

  const mockArticles: CompiledArticle[] = [mockArticle];

  test('ArticleCard renders with fallback link to static article page', () => {
    render(<ArticleCard article={mockArticle} allArticles={mockArticles} />);

    // Find the link element (works without JavaScript)
    const link = screen.getByRole('link', { name: /read article/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/articles/test-article');
  });

  test('ArticleCard link contains article title for no-JS users', () => {
    render(<ArticleCard article={mockArticle} allArticles={mockArticles} />);

    const link = screen.getByRole('link');
    const heading = screen.getByRole('heading', { name: 'Test Article' });

    // Verify heading is inside the link (clickable without JS)
    expect(link).toContainElement(heading);
  });

  test('ArticleCard link is keyboard accessible', () => {
    render(<ArticleCard article={mockArticle} allArticles={mockArticles} />);

    const link = screen.getByRole('link');

    // Links are naturally keyboard accessible (tab + enter)
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href');
  });

  test('Article metadata is visible without JavaScript', () => {
    render(<ArticleCard article={mockArticle} allArticles={mockArticles} />);

    // Reading time and date should be visible (not hidden behind JS)
    expect(screen.getByText('5 min read')).toBeInTheDocument();
    expect(screen.getByText(/december 17, 2025/i)).toBeInTheDocument();
  });
});

/**
 * Manual No-JS Testing Checklist:
 *
 * 1. Disable JavaScript in browser DevTools
 * 2. Visit /articles page
 * 3. Verify article cards are clickable links
 * 4. Click an article card - should navigate to /articles/[slug]
 * 5. Verify article content loads and is readable
 * 6. Verify "Back to Articles" link works
 * 7. Verify no-JS banner displays at top of page
 * 8. Verify no broken interactions or JS errors in console
 *
 * For automated testing, use Playwright:
 * ```typescript
 * const context = await browser.newContext({
 *   javaScriptEnabled: false
 * });
 * // Navigate and test article access
 * ```
 */
