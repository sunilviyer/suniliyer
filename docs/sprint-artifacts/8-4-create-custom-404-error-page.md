# Story 8.4: Create Custom 404 Error Page

**Epic:** 8 - Performance & Quality Assurance  
**Story:** 8.4  
**Status:** ready-for-dev

---

## Story

As a **user who encounters a broken link**,  
I want **a helpful 404 error page**,  
So that **I can navigate back to valid content easily**.

---

## Acceptance Criteria

**Given** the site is deployed  
**When** I navigate to a non-existent URL (e.g., `/articles/does-not-exist`)  
**Then** a custom 404 page displays (not generic browser error)  
**And** 404 page uses the site design system (earth tones, typography)  
**And** 404 page includes a message: "Article not found"  
**And** 404 page includes navigation links: "View All Articles" and "Go to Homepage"  
**And** 404 page includes floating menu for navigation  
**And** 404 page returns HTTP 404 status code  
**And** Build errors provide clear diagnostic messages for troubleshooting

---

## Tasks

1. **Create app/not-found.tsx** - 45 min
2. **Add 404 message and styling** - 30 min
3. **Add navigation links** - 20 min
4. **Integrate floating menu** - 15 min
5. **Verify HTTP 404 status code** - 15 min
6. **Test with invalid article URLs** - 20 min
7. **Add helpful error messages** - 20 min

**Total Estimated Time:** 2.5 hours

---

## Dev Notes

**Next.js 404 Implementation:**
```typescript
// app/not-found.tsx
import Link from 'next/link'
import FloatingMenu from '@/components/navigation/FloatingMenu'

export default function NotFound() {
  return (
    <main className="not-found-page">
      <FloatingMenu />
      <div className="not-found-container">
        <h1>404 - Article Not Found</h1>
        <p>The article you're looking for doesn't exist.</p>
        <div className="not-found-actions">
          <Link href="/articles">View All Articles</Link>
          <Link href="/">Go to Homepage</Link>
        </div>
      </div>
    </main>
  )
}
```

**Architecture Compliance:**
- Uses design system (earth tones, typography)
- Semantic HTML structure
- Accessible navigation
- Responsive layout

**References:**
- [Source: docs/epics.md - Epic 8, Story 8.4, Lines 1229-1246]
