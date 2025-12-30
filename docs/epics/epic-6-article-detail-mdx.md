# Epic 6: Article Detail View & MDX Rendering

**Status**: Not Started
**Priority**: P1 (High - Core Feature)
**Owner**: TBD
**Estimated Effort**: 36-48 hours (5-6 days)
**Dependencies**: Epic 5 (Terminology Path Implementation)
**Blocks**: Epic 7, Epic 8, Epic 9

---

## Epic Goal

Implement comprehensive article detail view with MDX rendering, custom components, table of contents, and enhanced reading experience features.

---

## Success Criteria

- Article detail pages fully functional for all learning paths
- MDX components render correctly (callouts, code blocks, diagrams)
- Auto-generated table of contents with scroll spy
- Reading time estimate accurate
- Social sharing buttons functional
- Print-friendly styles
- Mobile responsive
- WCAG 2.1 AA compliant

---

## Story Breakdown

### Story 6.1: Article Detail Page Layout
**Goal**: Create base article detail page template
**Effort**: 6-8 hours

**Tasks**:
- Create `ArticleDetailPage` component
- Implement responsive layout (content + sidebar)
- Add article header (title, metadata, tags)
- Implement breadcrumb navigation
- Set up SEO metadata per article
- Add structured data (Article schema)

**Acceptance Criteria**:
- Article page loads with proper layout
- Breadcrumbs show: Home > Learn > [Path] > [Article]
- Metadata displays: publish date, read time, category
- SEO meta tags unique per article

---

### Story 6.2: MDX Rendering Pipeline
**Goal**: Set up MDX compilation and rendering
**Effort**: 8-10 hours

**Tasks**:
- Configure next-mdx-remote for server-side compilation
- Create MDX component mapping
- Implement remark and rehype plugins
- Add frontmatter parsing
- Set up MDX error handling
- Test with sample articles

**Acceptance Criteria**:
- MDX content renders correctly
- Frontmatter extracted and displayed
- Markdown features work (headings, lists, links, images)
- Build fails gracefully on MDX errors

---

### Story 6.3: Custom MDX Components
**Goal**: Create rich MDX components for enhanced content
**Effort**: 8-10 hours

**Component List**:
1. **Callout** - Info, warning, danger, success boxes
2. **CodeBlock** - Syntax highlighted code with copy button
3. **Diagram** - Interactive diagrams with zoom
4. **CurvedBox** - Highlighted insights/definitions
5. **Quote** - Styled blockquotes
6. **Table** - Responsive tables
7. **Accordion** - Collapsible sections
8. **Tabs** - Tabbed content

**Acceptance Criteria**:
- All 8 components render correctly
- Components are responsive
- Dark mode compatible
- Accessible (keyboard + screen reader)

---

### Story 6.4: Syntax Highlighting
**Goal**: Implement code syntax highlighting
**Effort**: 3-4 hours

**Tasks**:
- Integrate Prism.js or Highlight.js
- Configure language support (Python, JavaScript, TypeScript, Bash)
- Implement copy-to-clipboard button
- Add line numbers (optional)
- Create dark mode compatible theme

**Acceptance Criteria**:
- Code blocks syntax highlighted
- Copy button works
- Line numbers display correctly
- Theme matches site dark/light mode

---

### Story 6.5: Table of Contents
**Goal**: Auto-generate TOC with scroll spy
**Effort**: 4-5 hours

**Tasks**:
- Extract h2/h3 headings from MDX
- Generate TOC component
- Implement scroll spy (highlight current section)
- Add smooth scroll on TOC click
- Make TOC sticky on desktop

**Acceptance Criteria**:
- TOC auto-generates from headings
- Current section highlighted as user scrolls
- Clicking TOC scrolls to section smoothly
- TOC sticky on desktop, collapsible on mobile

---

### Story 6.6: Reading Time & Metadata
**Goal**: Calculate and display reading time
**Effort**: 2-3 hours

**Tasks**:
- Calculate reading time (words per minute)
- Display reading time in article header
- Show last updated date
- Add author attribution
- Display category badges

**Acceptance Criteria**:
- Reading time accurate (±1 minute)
- Metadata displays in header
- Last updated date shown if different from publish date

---

### Story 6.7: Social Sharing
**Goal**: Add social sharing buttons
**Effort**: 2-3 hours

**Tasks**:
- Create share buttons (LinkedIn, Twitter/X, Email)
- Implement share functionality (Web Share API + fallback)
- Add Open Graph meta tags
- Add Twitter Card meta tags
- Track shares in analytics

**Acceptance Criteria**:
- Share buttons work on desktop and mobile
- Web Share API used on mobile when available
- Shared content includes image, title, description
- Share clicks tracked in analytics

---

### Story 6.8: Print-Friendly Styles
**Goal**: Create print stylesheet
**Effort**: 2-3 hours

**Tasks**:
- Create print.css stylesheet
- Hide navigation, sidebar, share buttons
- Optimize typography for print
- Add print header/footer
- Test print preview

**Acceptance Criteria**:
- Print layout clean (no navigation)
- Typography readable in print
- Links show URLs in print
- Page breaks avoid splitting sections

---

### Story 6.9: Related Articles Sidebar
**Goal**: Show related articles in sidebar
**Effort**: 3-4 hours

**Tasks**:
- Calculate related articles (by tags, category)
- Create RelatedArticles component
- Limit to 3-5 most relevant
- Add "Read Next" suggestion
- Link to related articles

**Acceptance Criteria**:
- Related articles relevant (same category or tags)
- Maximum 5 related articles shown
- Clicking related article navigates correctly

---

### Story 6.10: Mobile Responsive & Accessibility
**Goal**: Ensure mobile responsiveness and accessibility
**Effort**: 4-5 hours

**Tasks**:
- Test on mobile devices (320px - 767px)
- Adjust layout for mobile (full-width content)
- Test with screen readers
- Run axe accessibility audit
- Fix any violations

**Acceptance Criteria**:
- Layout works on small screens (320px+)
- All interactive elements accessible via keyboard
- Zero critical accessibility violations
- Screen reader announces content correctly

---

## Total Effort Estimate

| Story | Focus | Hours |
|-------|-------|-------|
| 6.1 | Page Layout | 6-8 |
| 6.2 | MDX Rendering | 8-10 |
| 6.3 | Custom Components | 8-10 |
| 6.4 | Syntax Highlighting | 3-4 |
| 6.5 | Table of Contents | 4-5 |
| 6.6 | Reading Time | 2-3 |
| 6.7 | Social Sharing | 2-3 |
| 6.8 | Print Styles | 2-3 |
| 6.9 | Related Articles | 3-4 |
| 6.10 | Mobile & A11y | 4-5 |
| **TOTAL** | **10 Stories** | **42-55 hours** |

---

## Dependencies

**Epic 6 blocks**: Epic 7, 8, 9 (other paths need article detail)
**Epic 6 depends on**: Epic 5 (needs one path as reference implementation)

---

**Epic Status**: Ready after Epic 5 complete
**Blockers**: Epic 5
**Owner**: TBD
