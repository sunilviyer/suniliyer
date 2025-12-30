# Epic 4: Learning Path Navigation & Filtering

**Status**: 🔴 Blocked (needs Epic 3)
**Priority**: P1
**Owner**: Development Team
**Estimated Effort**: 24-32 hours (3-4 days)
**Dependencies**: Epic 3 (All Paths Infrastructure)
**Blocks**: None (parallel with Epic 5, 6, 7)

---

## Epic Goal

Build comprehensive navigation and filtering system for learning paths, including category filters, tag filters, search within path, breadcrumb navigation, and progress tracking.

---

## Success Criteria

- ✅ Category filtering works (filter concepts by category)
- ✅ Tag filtering works (filter by multiple tags)
- ✅ Search within path finds relevant cards
- ✅ Breadcrumb navigation shows user location
- ✅ Progress tracking persists (localStorage)
- ✅ Bookmark system allows saving favorite cards
- ✅ All features work on mobile
- ✅ WCAG 2.1 AAA compliant

---

## Story Breakdown

### Story 4.1: Category Filtering System

**Goal**: Allow users to filter concept cards by category within each learning path.

**Tasks**:
1. Create `/components/shared/CategoryFilter.tsx`:
   ```typescript
   export function CategoryFilter({
     categories,
     selectedCategory,
     onCategoryChange
   }: CategoryFilterProps) {
     return (
       <div className="category-filter">
         <button
           onClick={() => onCategoryChange(null)}
           className={!selectedCategory ? 'active' : ''}
         >
           All
         </button>
         {categories.map(category => (
           <button
             key={category}
             onClick={() => onCategoryChange(category)}
             className={selectedCategory === category ? 'active' : ''}
           >
             {category}
           </button>
         ))}
       </div>
     );
   }
   ```

2. Add category data to knowledge graph (if missing)
3. Implement filter logic in PathStackCards
4. Animate card filtering (fade out/in)
5. Update URL with filter params (?category=legal-frameworks)

**Acceptance Criteria**:
- [ ] Category filter UI renders
- [ ] Clicking category filters cards
- [ ] URL updates with selected category
- [ ] Animation smooth when filtering
- [ ] "All" button clears filter

**Estimated Effort**: 4-5 hours

---

### Story 4.2: Tag Filtering and Multi-Select

**Goal**: Allow users to filter by multiple tags simultaneously.

**Tasks**:
1. Create `/components/shared/TagFilter.tsx`:
   ```typescript
   export function TagFilter({
     tags,
     selectedTags,
     onTagToggle
   }: TagFilterProps) {
     return (
       <div className="tag-filter">
         {tags.map(tag => (
           <button
             key={tag}
             onClick={() => onTagToggle(tag)}
             className={selectedTags.includes(tag) ? 'active' : ''}
             aria-pressed={selectedTags.includes(tag)}
           >
             {tag}
           </button>
         ))}
       </div>
     );
   }
   ```

2. Implement multi-select logic (AND or OR filtering)
3. Show count of cards matching current filters
4. Add "Clear all" button
5. Persist selected tags in URL

**Acceptance Criteria**:
- [ ] Can select multiple tags
- [ ] Cards filter by all selected tags (AND logic)
- [ ] Tag count updates dynamically
- [ ] Clear all button works
- [ ] Tags persist in URL

**Estimated Effort**: 4-5 hours

---

### Story 4.3: Search Within Path

**Goal**: Real-time search within current learning path.

**Tasks**:
1. Create `/components/shared/PathSearch.tsx`:
   ```typescript
   export function PathSearch({ cards, onSearchResults }: PathSearchProps) {
     const [query, setQuery] = useState('');

     const handleSearch = (q: string) => {
       setQuery(q);

       const results = cards.filter(card =>
         card.title.toLowerCase().includes(q.toLowerCase()) ||
         card.tldr.toLowerCase().includes(q.toLowerCase()) ||
         card.tags.some(tag => tag.toLowerCase().includes(q.toLowerCase()))
       );

       onSearchResults(results);
     };

     return (
       <input
         type="search"
         placeholder="Search cards in this path..."
         value={query}
         onChange={(e) => handleSearch(e.target.value)}
         aria-label="Search within path"
       />
     );
   }
   ```

2. Highlight matching text in search results
3. Show "No results" message
4. Debounce search input (300ms)
5. Clear search resets to all cards

**Acceptance Criteria**:
- [ ] Search filters cards in real-time
- [ ] Matches title, TLDR, and tags
- [ ] Search is debounced
- [ ] Highlights matching text
- [ ] Accessible (screen reader announcements)

**Estimated Effort**: 3-4 hours

---

### Story 4.4: Breadcrumb Navigation

**Goal**: Show user's current location in site hierarchy.

**Tasks**:
1. Create `/components/shared/Breadcrumbs.tsx`:
   ```typescript
   export function Breadcrumbs({ path }: { path: BreadcrumbPath[] }) {
     return (
       <nav aria-label="Breadcrumb">
         <ol className="breadcrumbs">
           <li>
             <Link href="/">Home</Link>
           </li>
           {path.map((item, index) => (
             <li key={item.href}>
               {index < path.length - 1 ? (
                 <Link href={item.href}>{item.label}</Link>
               ) : (
                 <span aria-current="page">{item.label}</span>
               )}
             </li>
           ))}
         </ol>
       </nav>
     );
   }
   ```

2. Add breadcrumbs to all path and article pages:
   - Path page: Home > History & Foundations
   - Article page: Home > History > AI Definition

3. Style with separators (›)
4. Make responsive (hide on mobile if needed)

**Acceptance Criteria**:
- [ ] Breadcrumbs show on all path/article pages
- [ ] Links navigate correctly
- [ ] Current page not linked
- [ ] Accessible (aria-label, aria-current)
- [ ] Responsive

**Estimated Effort**: 2-3 hours

---

### Story 4.5: Progress Tracking System

**Goal**: Track which cards user has viewed and show progress.

**Tasks**:
1. Create `/lib/hooks/useProgressTracking.ts`:
   ```typescript
   export function useProgressTracking(pathSlug: string) {
     const [viewedCards, setViewedCards] = useState<Set<string>>(new Set());

     useEffect(() => {
       // Load from localStorage
       const saved = localStorage.getItem(`progress_${pathSlug}`);
       if (saved) setViewedCards(new Set(JSON.parse(saved)));
     }, [pathSlug]);

     const markCardViewed = (cardId: string) => {
       const updated = new Set(viewedCards).add(cardId);
       setViewedCards(updated);
       localStorage.setItem(`progress_${pathSlug}`, JSON.stringify([...updated]));
     };

     return { viewedCards, markCardViewed, progress: viewedCards.size };
   }
   ```

2. Create `/components/shared/ProgressIndicator.tsx`:
   - Visual progress bar
   - "X of Y cards viewed"
   - Percentage complete

3. Mark card as viewed when:
   - User flips card to back
   - User clicks "Read Full Article"

4. Show checkmark on viewed cards

**Acceptance Criteria**:
- [ ] Progress persists across sessions
- [ ] Progress indicator updates in real-time
- [ ] Viewed cards show checkmark
- [ ] Progress resets per path
- [ ] Export progress data option

**Estimated Effort**: 5-6 hours

---

### Story 4.6: Bookmark System

**Goal**: Allow users to bookmark favorite cards for later.

**Tasks**:
1. Create `/lib/hooks/useBookmarks.ts`:
   ```typescript
   export function useBookmarks() {
     const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());

     useEffect(() => {
       const saved = localStorage.getItem('bookmarks');
       if (saved) setBookmarks(new Set(JSON.parse(saved)));
     }, []);

     const toggleBookmark = (cardId: string) => {
       const updated = new Set(bookmarks);
       if (updated.has(cardId)) {
         updated.delete(cardId);
       } else {
         updated.add(cardId);
       }
       setBookmarks(updated);
       localStorage.setItem('bookmarks', JSON.stringify([...updated]));
     };

     return { bookmarks, toggleBookmark, isBookmarked: (id: string) => bookmarks.has(id) };
   }
   ```

2. Add bookmark button to card:
   - Star icon (outlined when not bookmarked, filled when bookmarked)
   - Click toggles bookmark
   - Show toast notification "Bookmark added"

3. Create `/app/bookmarks/page.tsx`:
   - Show all bookmarked cards
   - Group by learning path
   - Remove bookmark option

4. Add "Bookmarks" link to header navigation

**Acceptance Criteria**:
- [ ] Bookmark button on all cards
- [ ] Bookmarks persist across sessions
- [ ] Bookmarks page shows all bookmarked cards
- [ ] Can remove bookmarks
- [ ] Visual feedback on bookmark action

**Estimated Effort**: 6-8 hours

---

## Technical Architecture

### Components
```
/components
  /shared
    /CategoryFilter.tsx        # Category filter buttons
    /TagFilter.tsx             # Multi-select tag filter
    /PathSearch.tsx            # Search within path
    /Breadcrumbs.tsx           # Breadcrumb navigation
    /ProgressIndicator.tsx     # Progress bar
    /BookmarkButton.tsx        # Bookmark toggle button

/app
  /bookmarks
    /page.tsx                  # Bookmarks page

/lib
  /hooks
    /useProgressTracking.ts    # Progress tracking hook
    /useBookmarks.ts           # Bookmark system hook
```

---

## Dependencies

**Epic 4 depends on**:
- ✅ Epic 3: All Paths Infrastructure (routing, shared components)

**Epic 4 blocks**:
- None (parallel with other path implementations)

---

## Success Metrics

- ✅ Filter response time: <100ms
- ✅ Search response time: <200ms (debounced)
- ✅ Bookmark action time: <50ms
- ✅ Progress tracking: 100% accurate

---

## Definition of Done

- ✅ All 6 stories complete
- ✅ Category and tag filtering working
- ✅ Search within path functional
- ✅ Breadcrumbs on all pages
- ✅ Progress tracking persists
- ✅ Bookmark system working
- ✅ All features mobile responsive
- ✅ WCAG 2.1 AAA compliant
- ✅ Code reviewed and merged

---

**Epic Status**: 🔴 Blocked (needs Epic 3)
**Next Epic**: Epic 5, 6, 7 (can run in parallel)
