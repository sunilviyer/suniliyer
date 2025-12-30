/**
 * @jest-environment jsdom
 *
 * Articles Page Accessibility Tests (Story 7.8)
 *
 * Automated WCAG 2.1 Level AA compliance testing using axe-core.
 * Tests verify zero accessibility violations on the articles listing page.
 */

import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Mock CSS imports
jest.mock('@/components/articles/CategoryBadge.css', () => ({}), { virtual: true });

// Mock next-themes
jest.mock('next-themes', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useTheme: () => ({ theme: 'dark', setTheme: jest.fn() }),
}));

// Mock Next.js modules
jest.mock('next/navigation', () => ({
  usePathname: () => '/articles',
}));

jest.mock('next/link', () => {
  return ({ children, href, ...props }: any) => {
    return <a href={href} {...props}>{children}</a>;
  };
});

// Import after mocks
import ArticlesWithFilter from '@/components/articles/ArticlesWithFilter';
import { CompiledArticle } from '@/types/article';

const mockArticles: CompiledArticle[] = [
  {
    slug: 'test-article-1',
    title: 'Test Article 1',
    excerpt: 'Test excerpt 1',
    content: 'Test content 1',
    category: 'AI Fundamentals',
    tags: ['test'],
    date: '2025-12-17',
    reading_time: 5,
    seo_title: 'Test Article 1',
    seo_description: 'Test description 1',
  },
  {
    slug: 'test-article-2',
    title: 'Test Article 2',
    excerpt: 'Test excerpt 2',
    content: 'Test content 2',
    category: 'Governance',
    tags: ['test'],
    date: '2025-12-16',
    reading_time: 3,
    seo_title: 'Test Article 2',
    seo_description: 'Test description 2',
  },
];

describe('Articles Page Accessibility (WCAG 2.1 Level AA)', () => {
  it('should have no axe violations', async () => {
    const { container } = render(<ArticlesWithFilter articles={mockArticles} />);
    const results = await axe(container, {
      rules: {
        // Note: color-contrast disabled in jsdom (requires canvas, use Playwright for full testing)
        'color-contrast': { enabled: false },
        'aria-allowed-attr': { enabled: true },
        'aria-required-attr': { enabled: true },
        'button-name': { enabled: true },
        'link-name': { enabled: true },
      },
    });

    expect(results).toHaveNoViolations();
  });

  it('should have accessible filter buttons', async () => {
    const { container } = render(<ArticlesWithFilter articles={mockArticles} />);
    const results = await axe(container, {
      rules: {
        'button-name': { enabled: true },
        'aria-allowed-attr': { enabled: true },
        'aria-valid-attr-value': { enabled: true },
      },
    });

    expect(results).toHaveNoViolations();
  });

  it('should have accessible article cards', async () => {
    const { container } = render(<ArticlesWithFilter articles={mockArticles} />);
    const results = await axe(container, {
      rules: {
        'link-name': { enabled: true },
        'aria-allowed-attr': { enabled: true },
        'color-contrast': { enabled: false }, // Requires canvas (browser-only)
      },
    });

    expect(results).toHaveNoViolations();
  });
});
