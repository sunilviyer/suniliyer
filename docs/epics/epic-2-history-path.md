# Epic 2: History Path Implementation

**Status**: ⏳ Ready (has all 15 images)
**Priority**: P0 (First learning path)
**Owner**: Development Team
**Estimated Effort**: 32-40 hours (4-5 days)
**Dependencies**: Epic 0 Phase 1 (complete), Epic 1 (homepage)
**Blocks**: Epic 3 (All Paths Infrastructure)

---

## Epic Goal

Implement the complete History & Foundations learning path with StackCards animation (GSAP ScrollTrigger), 15 concept cards with flip animations, MDX article integration, related articles section, keyboard navigation, and full accessibility.

---

## Success Criteria

- ✅ `/history` route renders StackCards animation
- ✅ All 15 History concept cards render correctly
- ✅ Card flip animation reveals article summary on click
- ✅ MDX articles load and render with proper styling
- ✅ Related articles section shows cross-references
- ✅ Keyboard navigation works (Tab, Enter, Escape, Arrow keys)
- ✅ WCAG 2.1 AAA compliant
- ✅ Mobile responsive with scroll-based card transitions
- ✅ Smooth performance (60fps animations)

---

## Story Breakdown

### Story 2.1: Create History Path Layout & Routing

**Goal**: Set up Next.js routing and layout for History learning path.

**Tasks**:
1. Create `/app/history/page.tsx`:
   ```typescript
   import { HistoryStackCards } from '@/components/history/HistoryStackCards';
   import { getHistoryCards } from '@/lib/data/history';

   export default async function HistoryPage() {
     const cards = await getHistoryCards();

     return (
       <main className="min-h-screen bg-charcoal">
         <PathHero
           title="History & Foundations"
           description="Understand what AI is, how it works, and why it matters"
           color="#936639"
         />
         <HistoryStackCards cards={cards} />
       </main>
     );
   }
   ```

2. Create `/lib/data/history.ts`:
   ```typescript
   import { readFileSync } from 'fs';
   import { join } from 'path';
   import matter from 'gray-matter';

   export interface HistoryCard {
     id: string;
     title: string;
     slug: string;
     tldr: string;
     content: string;
     contentSections: string[];
     relatedConcepts: string[];
     crossPathRefs: {
       terminology?: string[];
       risk?: string[];
     };
     tags: string[];
     image: string;
   }

   export async function getHistoryCards(): Promise<HistoryCard[]> {
     // Read from knowledge graph YAML or MDX frontmatter
     // Return array of 15 History cards
   }
   ```

3. Create `/components/history/PathHero.tsx`:
   - Hero section specific to History path
   - Toffee Brown gradient background
   - Path title, description, card count
   - Scroll indicator

**Acceptance Criteria**:
- [ ] `/history` route renders successfully
- [ ] PathHero displays with Toffee Brown gradient
- [ ] Data layer fetches all 15 History cards
- [ ] No TypeScript errors

**Estimated Effort**: 3-4 hours

---

### Story 2.2: Implement StackCards Animation with GSAP

**Goal**: Build the core StackCards animation using GSAP ScrollTrigger.

**Tasks**:
1. Create `/components/history/HistoryStackCards.tsx`:
   ```typescript
   'use client';

   import { useEffect, useRef } from 'react';
   import { gsap } from 'gsap';
   import { ScrollTrigger } from 'gsap/ScrollTrigger';
   import { ConceptCard } from './ConceptCard';

   gsap.registerPlugin(ScrollTrigger);

   export function HistoryStackCards({ cards }: { cards: HistoryCard[] }) {
     const containerRef = useRef<HTMLDivElement>(null);

     useEffect(() => {
       if (!containerRef.current) return;

       const cardElements = containerRef.current.querySelectorAll('.concept-card');

       cardElements.forEach((card, index) => {
         gsap.to(card, {
           scrollTrigger: {
             trigger: card,
             start: 'top center',
             end: 'bottom top',
             scrub: 1,
             markers: false, // Set true for debugging
           },
           scale: 1,
           opacity: 1,
           y: 0,
           ease: 'none',
         });

         // Stack effect
         gsap.to(card, {
           scrollTrigger: {
             trigger: card,
             start: 'top top',
             end: '+=100vh',
             pin: true,
             pinSpacing: false,
           },
         });
       });

       return () => {
         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
       };
     }, [cards]);

     return (
       <div ref={containerRef} className="stack-cards-container">
         {cards.map((card, index) => (
           <ConceptCard
             key={card.id}
             card={card}
             index={index}
             totalCards={cards.length}
           />
         ))}
       </div>
     );
   }
   ```

2. Add CSS for stack effect:
   ```css
   .stack-cards-container {
     position: relative;
     padding: 4rem 0;
   }

   .concept-card {
     position: relative;
     margin: 0 auto 2rem;
     max-width: 900px;
     opacity: 0.3;
     transform: translateY(100px) scale(0.95);
     transition: opacity 0.3s, transform 0.3s;
   }

   .concept-card.active {
     opacity: 1;
     transform: translateY(0) scale(1);
   }
   ```

3. Test scroll behavior:
   - Cards stack on top of each other
   - Active card fully visible
   - Smooth scroll scrubbing
   - Performance optimization (will-change, transform)

**Acceptance Criteria**:
- [ ] Cards stack vertically on scroll
- [ ] Active card pinned at viewport center
- [ ] Smooth scroll scrubbing animation
- [ ] 60fps performance (no jank)
- [ ] Works on desktop and mobile

**Estimated Effort**: 6-8 hours

---

### Story 2.3: Create Concept Card Component with Flip Animation

**Goal**: Build interactive concept card with flip reveal animation.

**Tasks**:
1. Create `/components/history/ConceptCard.tsx`:
   ```typescript
   'use client';

   import { useState } from 'react';
   import Image from 'next/image';
   import { motion, AnimatePresence } from 'framer-motion';

   export function ConceptCard({ card, index }: { card: HistoryCard; index: number }) {
     const [isFlipped, setIsFlipped] = useState(false);

     return (
       <motion.div
         className="concept-card relative"
         data-index={index}
         onClick={() => setIsFlipped(!isFlipped)}
         onKeyDown={(e) => {
           if (e.key === 'Enter' || e.key === ' ') {
             e.preventDefault();
             setIsFlipped(!isFlipped);
           }
         }}
         tabIndex={0}
         role="button"
         aria-label={`Card ${index + 1}: ${card.title}`}
         aria-expanded={isFlipped}
       >
         <AnimatePresence mode="wait">
           {!isFlipped ? (
             <CardFront key="front" card={card} index={index} />
           ) : (
             <CardBack key="back" card={card} index={index} />
           )}
         </AnimatePresence>
       </motion.div>
     );
   }
   ```

2. Create `/components/history/CardFront.tsx`:
   ```typescript
   export function CardFront({ card, index }: { card: HistoryCard; index: number }) {
     return (
       <motion.div
         className="card-face card-front"
         initial={{ rotateY: 0 }}
         animate={{ rotateY: 0 }}
         exit={{ rotateY: 90 }}
         transition={{ duration: 0.3 }}
       >
         <div className="relative aspect-[3/2] overflow-hidden rounded-t-lg">
           <Image
             src={`/images/history/${card.image}`}
             alt={card.title}
             fill
             className="object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
         </div>
         <div className="p-6">
           <span className="text-sm text-history-accent">
             Card {index + 1} of 15
           </span>
           <h3 className="text-2xl font-bold text-history-primary mt-2">
             {card.title}
           </h3>
           <p className="text-khaki mt-4">{card.tldr}</p>
           <div className="flex gap-2 mt-4 flex-wrap">
             {card.tags.slice(0, 3).map(tag => (
               <span key={tag} className="badge badge-history">
                 {tag}
               </span>
             ))}
           </div>
         </div>
       </motion.div>
     );
   }
   ```

3. Create `/components/history/CardBack.tsx`:
   ```typescript
   export function CardBack({ card, index }: { card: HistoryCard; index: number }) {
     return (
       <motion.div
         className="card-face card-back"
         initial={{ rotateY: -90 }}
         animate={{ rotateY: 0 }}
         exit={{ rotateY: 90 }}
         transition={{ duration: 0.3 }}
       >
         <div className="p-8">
           <h3 className="text-2xl font-bold text-history-primary mb-6">
             {card.title}
           </h3>
           <div className="space-y-4">
             <h4 className="text-lg font-semibold text-ivory">What You'll Learn:</h4>
             <ul className="list-disc list-inside space-y-2 text-khaki">
               {card.contentSections.map(section => (
                 <li key={section}>{section}</li>
               ))}
             </ul>
           </div>
           <Link
             href={`/history/${card.slug}`}
             className="btn-primary mt-6 inline-block"
           >
             Read Full Article
           </Link>
           <button
             onClick={(e) => {
               e.stopPropagation();
               setIsFlipped(false);
             }}
             className="btn-secondary mt-4"
           >
             Close
           </button>
         </div>
       </motion.div>
     );
   }
   ```

**Acceptance Criteria**:
- [ ] Card flips on click (front → back)
- [ ] Flip animation smooth (300ms)
- [ ] Front shows image, title, TLDR, tags
- [ ] Back shows content sections and CTA
- [ ] Keyboard accessible (Enter/Space to flip)
- [ ] Focus management works correctly

**Estimated Effort**: 6-8 hours

---

### Story 2.4: Add Related Articles Section

**Goal**: Display related concepts and cross-path references at bottom of each card.

**Tasks**:
1. Update `CardBack.tsx` to include related articles:
   ```typescript
   <div className="mt-8">
     <h4 className="text-lg font-semibold text-ivory mb-4">
       Related Concepts:
     </h4>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
       {card.relatedConcepts.map(conceptId => (
         <RelatedConceptLink key={conceptId} conceptId={conceptId} />
       ))}
     </div>
   </div>

   {card.crossPathRefs && (
     <div className="mt-6">
       <h4 className="text-lg font-semibold text-ivory mb-4">
         Explore Other Paths:
       </h4>
       <div className="flex gap-2 flex-wrap">
         {card.crossPathRefs.terminology?.map(id => (
           <CrossPathLink key={id} conceptId={id} path="terminology" />
         ))}
         {card.crossPathRefs.risk?.map(id => (
           <CrossPathLink key={id} conceptId={id} path="risk" />
         ))}
       </div>
     </div>
   )}
   ```

2. Create `/components/shared/RelatedConceptLink.tsx`:
   ```typescript
   export function RelatedConceptLink({ conceptId }: { conceptId: string }) {
     const concept = useConceptById(conceptId);

     return (
       <Link
         href={`#${conceptId}`} // Scroll to card or navigate to article
         className="text-sm px-3 py-2 rounded bg-moss hover:bg-fern transition-colors"
       >
         {concept?.title}
       </Link>
     );
   }
   ```

3. Implement scroll-to-card behavior when clicking related concept

**Acceptance Criteria**:
- [ ] Related concepts displayed on card back
- [ ] Cross-path references displayed with path badges
- [ ] Links navigate to correct cards/articles
- [ ] Hover effects on related links
- [ ] Related concepts fetched from knowledge graph

**Estimated Effort**: 4-5 hours

---

### Story 2.5: Implement Keyboard Navigation

**Goal**: Full keyboard accessibility for navigating between cards and flipping.

**Tasks**:
1. Add keyboard event handlers:
   ```typescript
   useEffect(() => {
     const handleKeyDown = (e: KeyboardEvent) => {
       switch (e.key) {
         case 'ArrowDown':
         case 'ArrowRight':
           // Navigate to next card
           scrollToCard(currentIndex + 1);
           break;
         case 'ArrowUp':
         case 'ArrowLeft':
           // Navigate to previous card
           scrollToCard(currentIndex - 1);
           break;
         case 'Enter':
         case ' ':
           // Flip current card
           toggleFlip();
           break;
         case 'Escape':
           // Close flipped card
           if (isFlipped) setIsFlipped(false);
           break;
       }
     };

     window.addEventListener('keydown', handleKeyDown);
     return () => window.removeEventListener('keydown', handleKeyDown);
   }, [currentIndex, isFlipped]);
   ```

2. Add focus indicators:
   ```css
   .concept-card:focus {
     outline: 2px solid var(--color-history-primary);
     outline-offset: 4px;
   }
   ```

3. Implement focus management:
   - Focus moves to card after flip
   - Escape closes card and returns focus
   - Tab navigation works logically

**Acceptance Criteria**:
- [ ] Arrow keys navigate between cards
- [ ] Enter/Space flips active card
- [ ] Escape closes flipped card
- [ ] Focus indicators visible and styled
- [ ] Tab order logical
- [ ] Screen reader announces card state changes

**Estimated Effort**: 3-4 hours

---

### Story 2.6: Add Mobile Responsive Behavior

**Goal**: Optimize StackCards for mobile with touch gestures and responsive layout.

**Tasks**:
1. Add touch gesture support:
   ```typescript
   import { useSwipeable } from 'react-swipeable';

   const handlers = useSwipeable({
     onSwipedUp: () => scrollToCard(currentIndex + 1),
     onSwipedDown: () => scrollToCard(currentIndex - 1),
     preventDefaultTouchmoveEvent: true,
   });
   ```

2. Responsive CSS:
   ```css
   @media (max-width: 768px) {
     .concept-card {
       max-width: 90vw;
       margin: 0 auto 1rem;
     }

     .card-face {
       padding: 1rem;
     }

     /* Disable pin on mobile, use simple scroll */
     .stack-cards-container {
       padding: 2rem 0;
     }
   }
   ```

3. Test on mobile devices:
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - iPad (768px)

4. Optimize scroll behavior for touch:
   - Smoother scrubbing
   - Snap points at each card
   - Performance optimization (passive event listeners)

**Acceptance Criteria**:
- [ ] Cards render correctly on mobile (375px+)
- [ ] Touch gestures work (swipe up/down)
- [ ] Flip animation works on tap
- [ ] No horizontal scroll
- [ ] Text readable (minimum 16px)
- [ ] Images load optimized sizes

**Estimated Effort**: 4-5 hours

---

### Story 2.7: Integrate MDX Articles (Preview)

**Goal**: Load MDX article content and render in card back or article detail view.

**Tasks**:
1. Set up MDX processing:
   ```typescript
   import { serialize } from 'next-mdx-remote/serialize';
   import { MDXRemote } from 'next-mdx-remote';

   export async function getHistoryArticle(slug: string) {
     const filePath = join(process.cwd(), 'content/articles/final', `${slug}.md`);
     const fileContent = readFileSync(filePath, 'utf-8');
     const { data, content } = matter(fileContent);
     const mdxSource = await serialize(content);

     return {
       frontmatter: data,
       content: mdxSource,
     };
   }
   ```

2. Create `/app/history/[slug]/page.tsx`:
   ```typescript
   export default async function HistoryArticlePage({ params }: { params: { slug: string } }) {
     const article = await getHistoryArticle(params.slug);

     return (
       <article className="max-w-4xl mx-auto px-4 py-12">
         <h1 className="text-4xl font-bold text-history-primary mb-6">
           {article.frontmatter.title}
         </h1>
         <div className="prose prose-invert prose-history">
           <MDXRemote {...article.content} />
         </div>
       </article>
     );
   }
   ```

3. Style MDX content:
   ```css
   .prose-history {
     /* History path color scheme for article styling */
     --tw-prose-headings: #936639;
     --tw-prose-links: #a68a64;
     --tw-prose-bold: #F5F5DC;
   }
   ```

**Acceptance Criteria**:
- [ ] MDX articles load and render correctly
- [ ] Article route works: `/history/[slug]`
- [ ] Prose styling matches History path colors
- [ ] Code blocks have syntax highlighting
- [ ] Images in articles load correctly

**Estimated Effort**: 4-5 hours

---

### Story 2.8: Testing & Accessibility Audit

**Goal**: Comprehensive testing and WCAG 2.1 AAA compliance verification.

**Tasks**:
1. Run automated accessibility tests:
   - axe DevTools
   - Lighthouse accessibility score
   - WAVE browser extension

2. Manual testing:
   - Keyboard navigation (all features)
   - Screen reader testing (VoiceOver, NVDA)
   - Color contrast verification (7:1 ratio)
   - Focus management
   - ARIA attributes correctness

3. Performance testing:
   - Lighthouse Performance score
   - ScrollTrigger performance (Chrome DevTools Performance tab)
   - Animation frame rate (should be 60fps)
   - Image loading optimization

4. Cross-browser testing:
   - Chrome, Firefox, Safari, Edge
   - Mobile Safari (iOS), Chrome Mobile (Android)

5. Create test report:
   - Document findings
   - Fix all critical issues
   - Log medium/low issues for future epics

**Acceptance Criteria**:
- [ ] Lighthouse Accessibility score: 100
- [ ] Lighthouse Performance score: ≥85
- [ ] All WCAG 2.1 AAA criteria met
- [ ] Keyboard navigation fully functional
- [ ] Screen reader announces all card state changes
- [ ] 60fps animation performance
- [ ] Zero critical accessibility issues

**Estimated Effort**: 4-6 hours

---

## Implementation Sequence

### Week 1 (Days 1-3)
- Story 2.1: Routing & layout (3-4 hours)
- Story 2.2: StackCards animation (6-8 hours)
- Story 2.3: Concept card with flip (6-8 hours)

### Week 1 (Days 4-5)
- Story 2.4: Related articles (4-5 hours)
- Story 2.5: Keyboard navigation (3-4 hours)
- Story 2.6: Mobile responsive (4-5 hours)

### Week 2 (Days 6-7)
- Story 2.7: MDX integration (4-5 hours)
- Story 2.8: Testing & accessibility (4-6 hours)

**Total**: 32-40 hours (4-5 days)

---

## Dependencies

**Epic 2 depends on**:
- ✅ Epic 0 Phase 1 (15 History concept images) - READY
- ✅ Epic 1 (Homepage with header/navigation) - READY after Epic 1
- ✅ Epic 2.5 (4 missing History articles) - Can start without, add later

**Epic 2 blocks**:
- Epic 3: All Paths Infrastructure (needs History path as template)

---

## Technical Architecture

### Components
```
/components
  /history
    /HistoryStackCards.tsx     # Main container with GSAP
    /ConceptCard.tsx            # Interactive card with flip
    /CardFront.tsx              # Front face (image, title, TLDR)
    /CardBack.tsx               # Back face (content, related)
    /PathHero.tsx               # History path hero section
  /shared
    /RelatedConceptLink.tsx     # Related concept link
    /CrossPathLink.tsx          # Cross-path reference link
```

### Data Layer
```
/lib
  /data
    /history.ts                 # History card data fetching
  /hooks
    /useConceptById.ts          # Hook to fetch concept by ID
    /useScrollToCard.ts         # Scroll to card utility
```

### Styling
```css
.stack-cards-container { /* GSAP scroll container */ }
.concept-card { /* Individual card */ }
.card-face { /* Front/back shared styles */ }
.card-front { /* Front-specific */ }
.card-back { /* Back-specific */ }
.badge-history { /* History path badge */ }
```

---

## Success Metrics

### Technical
- ✅ Lighthouse Performance: ≥85
- ✅ Lighthouse Accessibility: 100
- ✅ Animation frame rate: 60fps
- ✅ Image optimization: WebP, lazy loading

### User Experience
- ✅ Smooth scroll behavior on all devices
- ✅ Flip animation feels natural and responsive
- ✅ Keyboard navigation intuitive
- ✅ Related articles increase engagement

### Content
- ✅ All 15 History cards render correctly
- ✅ All History images load properly
- ✅ All related concepts linked correctly
- ✅ All cross-path references working

---

## Testing Checklist

### Functionality
- [ ] All 15 cards render in correct order
- [ ] StackCards scroll animation works
- [ ] Card flip animation works on click
- [ ] Card flip works on Enter/Space
- [ ] Related concepts links work
- [ ] Cross-path references work
- [ ] Article detail pages load

### Keyboard Navigation
- [ ] Arrow keys navigate cards
- [ ] Enter/Space flips card
- [ ] Escape closes card
- [ ] Tab order is logical
- [ ] Focus indicators visible

### Mobile
- [ ] Swipe gestures work
- [ ] Cards render correctly (375px+)
- [ ] Flip animation works on tap
- [ ] No horizontal scroll
- [ ] Performance acceptable on mobile

### Accessibility
- [ ] Screen reader announces card states
- [ ] All images have alt text
- [ ] Color contrast 7:1 (AAA)
- [ ] No keyboard traps
- [ ] ARIA attributes correct

---

## Definition of Done

- ✅ All 8 stories complete
- ✅ `/history` route fully functional
- ✅ All 15 cards render with images
- ✅ StackCards animation smooth (60fps)
- ✅ Flip animation working on all devices
- ✅ Keyboard navigation fully accessible
- ✅ Related articles and cross-references working
- ✅ MDX articles loading and rendering
- ✅ WCAG 2.1 AAA compliant
- ✅ Lighthouse Performance ≥85, Accessibility 100
- ✅ Testing checklist complete
- ✅ Code reviewed and merged
- ✅ Product owner approval

---

**Epic Status**: ⏳ Ready (has all 15 images, waiting for Epic 1)
**Next Epic**: Epic 3 (All Paths Infrastructure)
