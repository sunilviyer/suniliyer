/**
 * @jest-environment jsdom
 *
 * Component Accessibility Tests (Story 7.8)
 *
 * Automated WCAG 2.1 Level AA compliance testing for individual components.
 */

import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import SkipToMainContent from '@/components/SkipToMainContent';
import CategoryBadge from '@/components/articles/CategoryBadge';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Mock CSS imports
jest.mock('@/components/articles/CategoryBadge.css', () => ({}), { virtual: true });

describe('Component Accessibility (WCAG 2.1 Level AA)', () => {
  describe('SkipToMainContent', () => {
    it('should have no axe violations', async () => {
      const { container } = render(<SkipToMainContent />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should be keyboard accessible', async () => {
      const { container } = render(<SkipToMainContent />);
      const results = await axe(container, {
        rules: {
          'link-name': { enabled: true },
          'aria-allowed-attr': { enabled: true },
        },
      });
      expect(results).toHaveNoViolations();
    });
  });

  describe('CategoryBadge', () => {
    it('should have no axe violations', async () => {
      const { container } = render(<CategoryBadge category="AI Fundamentals" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have valid ARIA attributes', async () => {
      const { container } = render(<CategoryBadge category="Governance" />);
      const results = await axe(container, {
        rules: {
          'aria-allowed-attr': { enabled: true },
          'aria-valid-attr-value': { enabled: true },
          // Note: color-contrast requires browser testing (canvas API)
        },
      });
      expect(results).toHaveNoViolations();
    });
  });
});
