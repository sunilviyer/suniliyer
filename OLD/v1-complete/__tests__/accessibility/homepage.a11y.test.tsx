/**
 * @jest-environment jsdom
 *
 * Homepage Accessibility Tests (Story 7.8)
 *
 * Automated WCAG 2.1 Level AA compliance testing using axe-core.
 * Tests verify zero accessibility violations on the homepage.
 */

import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import HomePage from '@/app/page';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Mock next-themes
jest.mock('next-themes', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useTheme: () => ({ theme: 'dark', setTheme: jest.fn() }),
}));

describe('Homepage Accessibility (WCAG 2.1 Level AA)', () => {
  it('should have no axe violations', async () => {
    const { container } = render(<HomePage />);
    const results = await axe(container, {
      rules: {
        // Note: color-contrast disabled in jsdom (requires canvas, use Playwright for full testing)
        'color-contrast': { enabled: false },
        'valid-lang': { enabled: true },
        'html-has-lang': { enabled: true },
        'landmark-one-main': { enabled: true },
        'page-has-heading-one': { enabled: true },
        'region': { enabled: true },
      },
    });

    expect(results).toHaveNoViolations();
  });

  it('should have proper document structure', async () => {
    const { container } = render(<HomePage />);
    const results = await axe(container, {
      rules: {
        'landmark-one-main': { enabled: true },
        'page-has-heading-one': { enabled: true },
        'region': { enabled: true },
      },
    });

    expect(results).toHaveNoViolations();
  });

  it('should have accessible navigation', async () => {
    const { container } = render(<HomePage />);
    const results = await axe(container, {
      rules: {
        'aria-allowed-attr': { enabled: true },
        'aria-required-attr': { enabled: true },
        'aria-valid-attr': { enabled: true },
        'aria-valid-attr-value': { enabled: true },
        'button-name': { enabled: true },
        'link-name': { enabled: true },
      },
    });

    expect(results).toHaveNoViolations();
  });

  it('should have accessible interactive elements', async () => {
    const { container } = render(<HomePage />);
    const results = await axe(container, {
      rules: {
        'button-name': { enabled: true },
        'link-name': { enabled: true },
        'aria-command-name': { enabled: true },
      },
    });

    expect(results).toHaveNoViolations();
  });
});
