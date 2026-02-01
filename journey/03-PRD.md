# 📋 JOURNEY PAGE — MASTER PRD

> **Product Requirements Document**  
> **Version**: 1.0  
> **Last Updated**: January 31, 2026  
> **Status**: Ready for Development

---

## TABLE OF CONTENTS

1. [Executive Summary](#1-executive-summary)
2. [Problem Statement](#2-problem-statement)
3. [Goals & Success Metrics](#3-goals--success-metrics)
4. [User Stories](#4-user-stories)
5. [Functional Requirements](#5-functional-requirements)
6. [Non-Functional Requirements](#6-non-functional-requirements)
7. [Technical Architecture](#7-technical-architecture)
8. [Component Inventory](#8-component-inventory)
9. [Integration Points](#9-integration-points)
10. [Content Requirements](#10-content-requirements)
11. [Testing Criteria](#11-testing-criteria)
12. [Deployment Checklist](#12-deployment-checklist)
13. [Future Considerations](#13-future-considerations)

---

## 1. EXECUTIVE SUMMARY

### Product Overview

The **/journey** page is a dedicated career narrative experience for suniliyer.ca that showcases Sunil Iyer's professional evolution through an interactive, timeline-driven interface with progressive disclosure.

### Key Features

| Feature | Description |
|---------|-------------|
| **Progressive Disclosure** | 4-stage reveal: Title → Skills → Results → STAR Details |
| **Slide-to-Reveal** | Content slides in from the left on interaction |
| **Timeline Navigation** | Sticky sidebar showing career progression |
| **Keyword Highlighting** | Metrics and action words highlighted in accent color |
| **Seshan Story** | Authentic narrative of technical project journey |
| **Responsive Design** | Optimized for desktop, tablet, and mobile |

### Target Audience

- Potential employers (especially AI companies like Anthropic)
- Recruiters in AI/ML, Customer Success, and Enterprise Technology
- Professional contacts and networking connections
- Anyone exploring the site's "About Me" section

---

## 2. PROBLEM STATEMENT

### Current State

The existing "About Me" section on suniliyer.ca provides a brief overview but:
- Lacks depth for serious professional evaluation
- Does not showcase the full career progression
- Missing quantifiable achievements and metrics
- No technical project portfolio detail
- Static presentation without engagement

### Desired State

A dedicated **/journey** page that:
- Tells a compelling career narrative from recent to past
- Reveals information progressively to respect reader's time
- Showcases quantifiable achievements prominently
- Includes authentic technical project stories
- Matches the visual excellence of the existing site
- Drives engagement through interaction design

---

## 3. GOALS & SUCCESS METRICS

### Primary Goals

| Goal | Metric | Target |
|------|--------|--------|
| **Engagement** | Average time on page | > 2 minutes |
| **Exploration** | Cards expanded (any level) | > 60% of visitors |
| **Full Engagement** | Cards fully expanded | > 30% of visitors |
| **Navigation** | Scroll to bottom | > 50% of visitors |
| **Conversion** | Click to LinkedIn/contact | > 15% of visitors |

### Secondary Goals

- Demonstrate technical capability through page itself
- Provide recruiters easy access to role-specific details
- Support job applications with deep-linkable sections
- Showcase authentic personality through Seshan Story

---

## 4. USER STORIES

### US-001: Quick Scan
```
AS A busy recruiter
I WANT TO quickly scan career highlights
SO THAT I can decide if this candidate is worth a deeper look

ACCEPTANCE CRITERIA:
- [ ] Page loads with all role titles visible
- [ ] Key metrics visible without interaction
- [ ] Total time to scan all titles < 30 seconds
```

### US-002: Deep Dive
```
AS A hiring manager
I WANT TO explore specific role details
SO THAT I can evaluate relevant experience for my open position

ACCEPTANCE CRITERIA:
- [ ] I can expand any role to see skills
- [ ] I can expand further to see quantifiable results
- [ ] I can expand fully to see detailed achievements
- [ ] Keywords relevant to my search are highlighted
```

### US-003: Timeline Navigation
```
AS A visitor exploring the page
I WANT TO jump to specific career periods
SO THAT I can navigate efficiently

ACCEPTANCE CRITERIA:
- [ ] Timeline is always visible on desktop
- [ ] Clicking a timeline dot scrolls to that section
- [ ] Current section is indicated on timeline
- [ ] Mobile has accessible timeline alternative
```

### US-004: Technical Portfolio
```
AS A technical interviewer
I WANT TO understand the candidate's hands-on capabilities
SO THAT I can assess technical depth

ACCEPTANCE CRITERIA:
- [ ] Seshan Story section is accessible
- [ ] Technical decisions are documented
- [ ] Live demo links work
- [ ] Authentic challenges/failures are visible
```

### US-005: Return to Main Site
```
AS ANY visitor
I WANT TO easily return to the main site
SO THAT I can explore other sections

ACCEPTANCE CRITERIA:
- [ ] "Back to Home" link in header
- [ ] "Back to suniliyer.ca" link in footer
- [ ] No dead-end experience
```

### US-006: Mobile Experience
```
AS A mobile user
I WANT TO have full functionality on my phone
SO THAT I can explore on any device

ACCEPTANCE CRITERIA:
- [ ] All content accessible on mobile
- [ ] Touch targets are 44px minimum
- [ ] Timeline navigation works on mobile
- [ ] Expand/collapse works with touch
```

---

## 5. FUNCTIONAL REQUIREMENTS

### FR-001: Page Structure

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-001.1 | Page accessible at `/journey` route | P0 |
| FR-001.2 | Header with back navigation and user identity | P0 |
| FR-001.3 | Mini hero with page title and tagline | P1 |
| FR-001.4 | Timeline sidebar (desktop) or compact nav (mobile) | P0 |
| FR-001.5 | 5 role cards (Shift, EY×3, Infosys) | P0 |
| FR-001.6 | Seshan Story section | P1 |
| FR-001.7 | Philosophy section ("Data is King") | P2 |
| FR-001.8 | Skills grid section | P1 |
| FR-001.9 | Education section (collapsible) | P2 |
| FR-001.10 | Footer with navigation links | P0 |

### FR-002: Role Card Behavior

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-002.1 | Cards start in collapsed state showing only title/dates | P0 |
| FR-002.2 | Click expands to show skills (State 1) | P0 |
| FR-002.3 | Click again expands to show results (State 2) | P0 |
| FR-002.4 | Click again expands to show details (State 3) | P0 |
| FR-002.5 | Click collapse button returns to collapsed state | P0 |
| FR-002.6 | All cards maintain same collapsed height | P0 |
| FR-002.7 | Expansion animates content sliding from left | P1 |
| FR-002.8 | Current role (Shift) has visual distinction | P1 |

### FR-003: Timeline Navigation

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-003.1 | Timeline shows all career periods + special sections | P0 |
| FR-003.2 | Active section highlighted on timeline | P0 |
| FR-003.3 | Clicking timeline dot scrolls to section | P0 |
| FR-003.4 | Timeline stays visible while scrolling (sticky) | P1 |
| FR-003.5 | Timeline adapts to mobile (simplified) | P1 |

### FR-004: Animations

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-004.1 | Page load animations (staggered reveal) | P1 |
| FR-004.2 | Scroll-triggered animations for cards | P1 |
| FR-004.3 | Counter animation for metric values | P2 |
| FR-004.4 | Slide-from-left animation on expand | P0 |
| FR-004.5 | Hover effects on interactive elements | P1 |
| FR-004.6 | Respect `prefers-reduced-motion` | P0 |

### FR-005: Content Display

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-005.1 | Skills displayed as tag chips | P0 |
| FR-005.2 | Results displayed as metric cards with value + label | P0 |
| FR-005.3 | Achievements displayed with highlighted keywords | P0 |
| FR-005.4 | Keywords highlighted using accent color | P1 |
| FR-005.5 | External links open in new tab | P0 |

### FR-006: Seshan Story Section

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-006.1 | Quote block with featured quote | P1 |
| FR-006.2 | Evolution timeline (4 project versions) | P1 |
| FR-006.3 | "60,000 Error Moment" narrative | P1 |
| FR-006.4 | Key learnings list | P2 |
| FR-006.5 | Links to live demos | P0 |

---

## 6. NON-FUNCTIONAL REQUIREMENTS

### NFR-001: Performance

| ID | Requirement | Target |
|----|-------------|--------|
| NFR-001.1 | First Contentful Paint (FCP) | < 1.5s |
| NFR-001.2 | Largest Contentful Paint (LCP) | < 2.5s |
| NFR-001.3 | Time to Interactive (TTI) | < 3.5s |
| NFR-001.4 | Cumulative Layout Shift (CLS) | < 0.1 |
| NFR-001.5 | Total page weight | < 500KB |

### NFR-002: Accessibility

| ID | Requirement | Standard |
|----|-------------|----------|
| NFR-002.1 | Color contrast ratio | WCAG 2.1 AA (4.5:1) |
| NFR-002.2 | Keyboard navigation | Full support |
| NFR-002.3 | Screen reader compatibility | ARIA compliant |
| NFR-002.4 | Focus indicators | Visible |
| NFR-002.5 | Reduced motion support | Required |

### NFR-003: Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Last 2 versions |
| Firefox | Last 2 versions |
| Safari | Last 2 versions |
| Edge | Last 2 versions |
| Mobile Safari | iOS 14+ |
| Chrome Mobile | Android 10+ |

### NFR-004: SEO

| ID | Requirement |
|----|-------------|
| NFR-004.1 | Proper heading hierarchy (h1, h2, h3) |
| NFR-004.2 | Meta title: "Sunil Iyer - Professional Journey" |
| NFR-004.3 | Meta description with key highlights |
| NFR-004.4 | Structured data (Person schema) |
| NFR-004.5 | Canonical URL set |

---

## 7. TECHNICAL ARCHITECTURE

### Tech Stack

```yaml
framework: "Next.js 14+ (App Router)"
language: "TypeScript"
styling: "Tailwind CSS"
animations:
  - "GSAP (ScrollTrigger)"
  - "Framer Motion"
state_management: "React useState/useReducer"
deployment: "Vercel"
```

### File Structure

```
app/
└── journey/
    ├── page.tsx              # Main page component
    ├── layout.tsx            # Page-specific layout
    └── components/
        ├── JourneyHeader.tsx
        ├── JourneyHero.tsx
        ├── Timeline.tsx
        ├── RoleCard.tsx
        ├── SkillTags.tsx
        ├── MetricCard.tsx
        ├── AchievementItem.tsx
        ├── SeshanStory.tsx
        ├── Philosophy.tsx
        ├── SkillsGrid.tsx
        ├── Education.tsx
        └── JourneyFooter.tsx

data/
└── journey/
    ├── roles.ts              # Role data (from 01-DATA.md)
    ├── skills.ts             # Skills taxonomy
    └── constants.ts          # Shared constants

lib/
├── animations.ts             # GSAP/Framer configs
└── utils.ts                  # Helper functions

styles/
└── journey.css               # Page-specific styles (if needed)
```

### State Management

```typescript
// Role card expansion state
type ExpansionState = 'collapsed' | 'skills' | 'results' | 'details';

interface RoleCardState {
  [roleId: string]: ExpansionState;
}

// Timeline active state
interface TimelineState {
  activeSection: string;
}
```

---

## 8. COMPONENT INVENTORY

### Core Components

| Component | Description | Props |
|-----------|-------------|-------|
| `JourneyHeader` | Fixed header with back link | `name`, `avatarPlaceholder` |
| `JourneyHero` | Mini hero with title | `title`, `tagline` |
| `Timeline` | Sticky sidebar navigation | `sections`, `activeId` |
| `RoleCard` | Expandable role display | `role`, `state`, `onToggle` |
| `SkillTags` | Skill chip container | `skills` |
| `MetricCard` | Single metric display | `value`, `label`, `animate` |
| `AchievementItem` | STAR bullet with highlights | `achievement`, `keywords` |
| `SeshanStory` | Project narrative section | `story` |
| `Philosophy` | "Data is King" section | `principles` |
| `SkillsGrid` | Categorized skills display | `categories` |
| `Education` | Collapsible education section | `degrees`, `certs` |
| `JourneyFooter` | Simple footer with links | - |

### Shared Components (from existing site)

| Component | Usage |
|-----------|-------|
| `AnimatedText` | Text reveal animations |
| `ScrollIndicator` | Scroll down prompt |
| `Button` | CTA buttons |

---

## 9. INTEGRATION POINTS

### Homepage Integration

**About Me Section Update Required**:

```tsx
// Current About Me section needs new CTA button
<section id="about-me">
  {/* Existing content */}
  
  {/* NEW: Add button to journey page */}
  <AnimatedButton href="/journey">
    Explore My Journey →
  </AnimatedButton>
</section>
```

**Animation Enhancement**:
- Add animated entry for the new button
- Consider updating the "SVI" hover reveal to link to journey

### External Links

| Link | Destination | Opens In |
|------|-------------|----------|
| Back to Home | `/` (suniliyer.ca) | Same tab |
| LinkedIn | `linkedin.com/in/sunilviyer` | New tab |
| GitHub | `github.com/sunilviyer` | New tab |
| Seshan Dashboard | `seshan-navy.vercel.app` | New tab |
| Seshan Intelligence | `/seshan/demo/` | New tab |

### Analytics Events (if implemented)

```typescript
// Track key interactions
const analyticsEvents = {
  PAGE_VIEW: 'journey_page_view',
  CARD_EXPANDED: 'journey_card_expanded',
  CARD_FULLY_EXPANDED: 'journey_card_fully_expanded',
  TIMELINE_CLICK: 'journey_timeline_click',
  EXTERNAL_LINK: 'journey_external_link',
  SCROLL_DEPTH: 'journey_scroll_depth'
};
```

---

## 10. CONTENT REQUIREMENTS

### Content Source

All content sourced from `01-DATA.md`:
- 5 roles with complete STAR achievements
- Skills taxonomy
- Education details
- Seshan Story narrative
- Philosophy principles

### Content Updates

Future content updates should:
1. Update `01-DATA.md` first
2. Regenerate TypeScript data files
3. No hardcoded strings in components

### Localization

- Primary language: English
- No localization required for v1
- Consider future: French (for Canadian market)

---

## 11. TESTING CRITERIA

### Unit Tests

| Component | Test Cases |
|-----------|------------|
| `RoleCard` | Renders collapsed, expands on click, shows correct state content |
| `Timeline` | Highlights active section, click triggers scroll |
| `MetricCard` | Displays value/label, counter animates |
| `AchievementItem` | Renders with highlighted keywords |

### Integration Tests

| Test | Criteria |
|------|----------|
| Full page render | All sections visible, no console errors |
| Navigation flow | Timeline → Card → Back works correctly |
| State persistence | Expansion state maintained on scroll |

### E2E Tests (Playwright/Cypress)

```typescript
// Example test cases
describe('Journey Page', () => {
  it('loads and displays all role cards', () => {});
  it('expands card through all states', () => {});
  it('timeline navigation works', () => {});
  it('mobile layout renders correctly', () => {});
  it('animations respect reduced motion', () => {});
});
```

### Manual Testing Checklist

- [ ] Desktop Chrome - Full flow
- [ ] Desktop Firefox - Full flow
- [ ] Desktop Safari - Full flow
- [ ] Mobile Safari (iPhone) - Full flow
- [ ] Mobile Chrome (Android) - Full flow
- [ ] Tablet (iPad) - Full flow
- [ ] Keyboard-only navigation
- [ ] Screen reader (VoiceOver/NVDA)
- [ ] Reduced motion setting

---

## 12. DEPLOYMENT CHECKLIST

### Pre-Deployment

- [ ] All content reviewed for accuracy
- [ ] No AI governance references in EY roles
- [ ] Links tested (especially external)
- [ ] Images optimized (WebP, lazy loading)
- [ ] Performance audit passed (Lighthouse > 90)
- [ ] Accessibility audit passed
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags in place

### Deployment

- [ ] Deploy to Vercel preview first
- [ ] Test on preview URL
- [ ] Verify no console errors
- [ ] Test all interactions
- [ ] Verify analytics (if implemented)

### Post-Deployment

- [ ] Verify production URL works
- [ ] Test from multiple devices
- [ ] Monitor for errors (Vercel logs)
- [ ] Share preview with stakeholder for feedback

---

## 13. FUTURE CONSIDERATIONS

### v1.1 Potential Enhancements

| Enhancement | Description | Priority |
|-------------|-------------|----------|
| PDF Export | Generate PDF resume from page | Medium |
| Deep Links | Direct links to specific roles | Medium |
| Search | Search within achievements | Low |
| Testimonials | Add client quotes | Low |
| Certifications Detail | Expand certification section | Low |

### v2.0 Possibilities

- Interactive skills radar chart
- Animated career path visualization
- Video introduction section
- AI-powered Q&A about experience
- Integration with live portfolio projects

---

## APPENDIX: GLOSSARY

| Term | Definition |
|------|------------|
| **Progressive Disclosure** | UI pattern revealing information in layers |
| **STAR Format** | Situation, Task, Action, Result achievement structure |
| **CARR** | Contract Annual Recurring Revenue |
| **BMAD** | Breakthrough Method for Agile AI-Driven Development |
| **Seshan** | Sunil's financial dashboard project name |

---

## APPENDIX: REVISION HISTORY

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | 2026-01-31 | Initial PRD | Claude |

---

**END OF MASTER PRD**
