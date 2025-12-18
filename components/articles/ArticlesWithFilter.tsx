'use client';

import { useState } from 'react';
import type { CompiledArticle } from '@/types/article';
import CategoryFilter from '@/components/articles/CategoryFilter';
import ArticleCard from '@/components/articles/ArticleCard';

interface ArticlesWithFilterProps {
  articles: CompiledArticle[];
}

export default function ArticlesWithFilter({ articles }: ArticlesWithFilterProps) {
  const [filteredArticles, setFilteredArticles] = useState<CompiledArticle[]>(articles);
  const [isFiltering, setIsFiltering] = useState(false);

  const handleFilterChange = (filtered: CompiledArticle[]) => {
    // Start fade-out animation
    setIsFiltering(true);

    // After 200ms, update articles and fade-in
    setTimeout(() => {
      setFilteredArticles(filtered);
      setIsFiltering(false);
    }, 200);
  };

  return (
    <>
      {/* Category Filter */}
      <CategoryFilter articles={articles} onFilterChange={handleFilterChange} />

      {/* Articles Grid with animation classes */}
      <div className={`articles-grid ${isFiltering ? 'filtering' : 'filter-complete'}`}>
        {filteredArticles.length === 0 ? (
          <p className="empty-state">No articles in this category yet. Check back soon!</p>
        ) : (
          filteredArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} allArticles={articles} />
          ))
        )}
      </div>
    </>
  );
}
