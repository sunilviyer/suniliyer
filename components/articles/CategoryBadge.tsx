import { getCategorySlug, getBadgeTextColor, type Category } from '@/lib/constants';
import './CategoryBadge.css';

interface CategoryBadgeProps {
  category: Category;
}

/**
 * CategoryBadge Component
 *
 * Displays an article category with smart contrast logic to ensure
 * text is readable on all category background colors.
 *
 * Story: 2.4 - Implement Smart Badge Contrast Logic
 *
 * Features:
 * - Uses CSS custom properties for category colors (--color-cat-{slug})
 * - Automatically selects light or dark text based on background luminance
 * - Meets WCAG AAA contrast ratio (7:1 minimum)
 * - Reusable across article cards, headers, and featured sections
 *
 * @param category - One of 11 valid article categories (enforced by TypeScript)
 *
 * @example
 * <CategoryBadge category="AI Fundamentals" />
 * <CategoryBadge category="Risks & Principles" />
 */
export default function CategoryBadge({ category }: CategoryBadgeProps) {
  const slug = getCategorySlug(category);
  const textColor = getBadgeTextColor(category);

  return (
    <span
      className="category-badge"
      style={{
        backgroundColor: `var(--color-cat-${slug})`,
        color: textColor,
      }}
    >
      {category}
    </span>
  );
}
