# Database Integration Refactoring Guide

## Overview

This guide explains how to refactor article pages from hardcoded cards to database-fetched cards using the **Option 1: Server Component** pattern.

## What Changes

### Before: Client Component with Hardcoded Cards
```tsx
// app/articles/ai-vs-automation/page.tsx
'use client';

import { useState } from 'react';
import { ArticleLayout } from '@/components/articles/ArticleLayout';
import { InlineContextCard } from '@/components/articles/InlineContextCard';
//... other imports

export default function AIvsAutomationArticle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // ❌ Hardcoded card data
  const cardData = {
    whatAIActuallyIs: {
      id: 'article-link-what-ai-actually-is',
      title: 'What AI Actually Is',
      type: 'article-link' as const,
      summary: '...',
      tags: ['...']
    },
    // ... more cards
  };

  return (
    <>
      {/* Theme toggle button */}
      <button onClick={() => setTheme(...)}>...</button>

      <ArticleLayout {...props} theme={theme}>
        {/* Article content with InlineContextCard components */}
        <InlineContextCard trigger="artificial intelligence" card={cardData.whatAIActuallyIs} />
      </ArticleLayout>

      <ArticleProgressNav theme={theme} {...navProps} />
      <FloatingPathsNav theme={theme} />
    </>
  );
}
```

### After: Server Component with Database Cards
```tsx
// app/articles/ai-vs-automation/page.tsx
// ✅ NO 'use client' - this is now a Server Component

import { getCardsByArticle } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { InlineContextCard } from '@/components/articles/InlineContextCard';

export default async function AIvsAutomationArticle() {
  // ✅ Fetch cards from database
  const cards = await getCardsByArticle('ai-vs-automation');

  return (
    <ArticlePageWrapper
      path="terminology"
      pathTitle="Terminology"
      articleTitle="AI vs Automation"
      tldr="..."
      tags={['AI Fundamentals', 'Automation', 'RPA']}
      readTime="8 min read"
      updatedDate="January 2025"
      headerImage="/images/history/ai-vs-automation.webp"
      currentIndex={2}
      totalArticles={8}
      prevArticle={{ slug: '/articles/ai-technology-stack', title: 'The AI Technology Stack' }}
      nextArticle={{ slug: '/articles/data-behind-ai', title: 'The Data Behind AI' }}
      cards={cards}  // ✅ Cards from database passed to wrapper
    >
      {/* Article content - InlineContextCard now gets cards from wrapper context */}
      <div className="content-p">
        <InlineContextCard cardId="article-link-what-ai-actually-is" trigger="artificial intelligence" />
      </div>
    </ArticlePageWrapper>
  );
}
```

## Key Changes Summary

### 1. **Remove 'use client' directive**
   - Article pages become Server Components
   - Can use async/await to fetch data server-side
   - No more `useState` in the page component

### 2. **Replace hardcoded cardData with database fetch**
   ```tsx
   // Before
   const cardData = { ... };

   // After
   const cards = await getCardsByArticle('ai-vs-automation');
   ```

### 3. **Use ArticlePageWrapper instead of individual components**
   ```tsx
   // Before
   return <>
     <button onClick={...} />
     <ArticleLayout>...</ArticleLayout>
     <ArticleProgressNav />
     <FloatingPathsNav />
   </>;

   // After
   return <ArticlePageWrapper cards={cards} {...metadata}>
     {children}
   </ArticlePageWrapper>;
   ```

### 4. **Update InlineContextCard usage**
   ```tsx
   // Before
   <InlineContextCard trigger="AI" card={cardData.whatAIActuallyIs} />

   // After
   <InlineContextCard cardId="article-link-what-ai-actually-is" trigger="AI" />
   ```

## Features Preserved

✅ **Theme Toggle** - Now managed in ArticlePageWrapper
✅ **Scroll Progress** - Still works in ArticleLayout (client component)
✅ **Navigation** - ArticleProgressNav and FloatingPathsNav still client components
✅ **Interactive Cards** - InlineContextCard still interactive
✅ **All Styling** - No visual changes

## Features Enhanced

✅ **Performance** - Cards fetched server-side, faster initial page load
✅ **SEO** - Server-side rendering improves SEO
✅ **Maintainability** - Cards managed in one database, not duplicated in code
✅ **Analytics** - Can track card usage via `usage_count` in database

## Migration Steps

1. ✅ Database populated with cards (DONE - script ran successfully)
2. ✅ Database connection utility created (`lib/db.ts`)
3. ✅ API route created (`app/api/cards/route.ts`)
4. ✅ ArticlePageWrapper component created
5. ⏳ Update InlineContextCard to accept `cardId` prop
6. ⏳ Refactor one article page as example
7. ⏳ Test thoroughly
8. ⏳ Refactor remaining article pages

## Next Steps

1. Update `InlineContextCard` component to:
   - Accept `cardId` prop instead of full card object
   - Fetch card data from wrapper context or make API call

2. Create migration helper script to automate article page updates

3. Test with one article (ai-vs-automation recommended as example)

4. Once verified, roll out to all articles
