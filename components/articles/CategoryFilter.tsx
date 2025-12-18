'use client';

import { useState } from 'react';
import { VALID_CATEGORIES, getCategorySlug } from '@/lib/constants';
import type { CompiledArticle } from '@/types/article';

interface CategoryFilterProps {
  articles: CompiledArticle[];
  onFilterChange: (filtered: CompiledArticle[]) => void;
}

export default function CategoryFilter({ articles, onFilterChange }: CategoryFilterProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);

    if (category === 'All') {
      onFilterChange(articles);
    } else {
      const filtered = articles.filter((article) => article.category === category);
      onFilterChange(filtered);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, category: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleFilterClick(category);
    }
  };

  return (
    <nav className="category-filter" role="navigation" aria-label="Filter articles by category">
      <div className="filter-buttons">
        {/* "All" button */}
        <button
          className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`}
          onClick={() => handleFilterClick('All')}
          onKeyDown={(e) => handleKeyDown(e, 'All')}
          aria-pressed={activeFilter === 'All'}
          aria-label="Show all articles"
        >
          All
        </button>

        {/* Category buttons */}
        {VALID_CATEGORIES.map((category) => {
          const slug = getCategorySlug(category);
          const isActive = activeFilter === category;

          return (
            <button
              key={category}
              className={`filter-btn ${isActive ? 'active' : ''}`}
              data-category={slug}
              onClick={() => handleFilterClick(category)}
              onKeyDown={(e) => handleKeyDown(e, category)}
              aria-pressed={isActive}
              aria-label={`Filter by ${category}`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
