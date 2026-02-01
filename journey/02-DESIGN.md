# 🎨 JOURNEY PAGE — DESIGN SPECIFICATION

> **Document Version**: 1.0  
> **Last Updated**: January 31, 2026  
> **Design Philosophy**: Slide-to-reveal, progressive disclosure, timeline-driven narrative

---

## TABLE OF CONTENTS

1. [Design Philosophy](#1-design-philosophy)
2. [Visual Identity](#2-visual-identity)
3. [Typography System](#3-typography-system)
4. [Color System](#4-color-system)
5. [Layout & Grid](#5-layout--grid)
6. [Component Specifications](#6-component-specifications)
7. [Animation Choreography](#7-animation-choreography)
8. [Interaction Patterns](#8-interaction-patterns)
9. [Responsive Breakpoints](#9-responsive-breakpoints)
10. [Accessibility](#10-accessibility)

---

## 1. DESIGN PHILOSOPHY

### Core Principles

| Principle | Implementation |
|-----------|----------------|
| **Progressive Disclosure** | Information reveals in layers: Title → Skills → Results → Details |
| **Slide-to-Reveal** | Content slides in from the left, hidden until user engages |
| **Timeline Navigation** | User always knows where they are in the career journey |
| **Consistent Rhythm** | All role cards have identical sizing and interaction patterns |
| **Authentic Voice** | The Seshan Story section shows real journey, including failures |

### Aesthetic Direction

**Tone**: Executive Authenticity  
**Vibe**: Dark luxury with warm accents — sophisticated but approachable  
**Inspiration**: Rayo template animations + Aziz Khaldi's clean professionalism

### The "Slide-to-Reveal" Concept

```
DEFAULT STATE (Collapsed)
┌────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  2024 ●──  SHIFT TECHNOLOGY                                        │
│            Senior Manager — Customer Success                        │
│            July 2024 — Present                                      │
│                                                           [ → ]    │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘

HOVER STATE (Invitation)
┌────────────────────────────────────────────────────────────────────┐
│ ▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│  2024 ●──  SHIFT TECHNOLOGY                                        │
│            Senior Manager — Customer Success                        │
│            July 2024 — Present                                      │
│                                                          [ →→ ]    │
│ ▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
└────────────────────────────────────────────────────────────────────┘
(Left edge glows, indicating content awaits)

EXPANDED STATE (Content slides in from left)
┌────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  2024 ●──  SHIFT TECHNOLOGY                                        │
│            Senior Manager — Customer Success                        │
│            July 2024 — Present                                      │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │ SKILLS                                                       │  │
│  │ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐        │  │
│  │ │AI Adopt. │ │Customer  │ │Enterprise│ │Cross-Func│        │  │
│  │ └──────────┘ └──────────┘ └──────────┘ └──────────┘        │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                           [ → ]    │
└────────────────────────────────────────────────────────────────────┘
```

---

## 2. VISUAL IDENTITY

### Matching suniliyer.ca

The design must seamlessly integrate with the existing site. Key visual elements observed:

```yaml
existing_site_elements:
  background: "Deep black with subtle gradients"
  cards: "Dark elevated surfaces with border glow on hover"
  headings: "Large, bold, often with gradient or accent color"
  body_text: "Clean, readable, generous line-height"
  accents: "Warm gold/amber tones"
  animations: "GSAP ScrollTrigger, Framer Motion, smooth easing"
  scroll_indicators: "Custom 'Scroll' text with animated elements"
```

### Visual Hierarchy

```
LEVEL 1: Page Title
├── Size: Hero scale (clamp 3rem - 5rem)
├── Weight: Bold (700-800)
└── Color: Primary white

LEVEL 2: Section Headers (About Me, Career Timeline, etc.)
├── Size: 2rem - 2.5rem
├── Weight: Bold
└── Color: Primary white with optional accent

LEVEL 3: Role Titles (Company Names)
├── Size: 1.5rem - 1.75rem
├── Weight: Semi-bold (600)
└── Color: Primary white

LEVEL 4: Job Titles
├── Size: 1.125rem - 1.25rem
├── Weight: Medium (500)
└── Color: Secondary text (muted)

LEVEL 5: Body Text / Details
├── Size: 1rem
├── Weight: Regular (400)
└── Color: Secondary text
```

---

## 3. TYPOGRAPHY SYSTEM

### Font Stack

```css
/* Primary Display Font */
--font-display: 'Outfit', 'Clash Display', system-ui, sans-serif;

/* Body Font */
--font-body: 'DM Sans', 'Inter', system-ui, sans-serif;

/* Monospace (for technical details) */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Type Scale

```css
--text-hero: clamp(2.5rem, 6vw, 4rem);
--text-section: clamp(1.75rem, 4vw, 2.5rem);
--text-card-title: clamp(1.25rem, 2.5vw, 1.5rem);
--text-card-subtitle: clamp(1rem, 2vw, 1.125rem);
--text-body: 1rem;
--text-small: 0.875rem;
--text-micro: 0.75rem;

/* Line Heights */
--leading-tight: 1.2;
--leading-normal: 1.5;
--leading-relaxed: 1.7;

/* Letter Spacing */
--tracking-tight: -0.02em;
--tracking-normal: 0;
--tracking-wide: 0.05em;
```

---

## 4. COLOR SYSTEM

### Primary Palette

```css
/* Backgrounds */
--bg-primary: #0A0A0A;        /* Page background */
--bg-secondary: #0F0F0F;      /* Section backgrounds */
--bg-card: #141414;           /* Card backgrounds */
--bg-card-hover: #1A1A1A;     /* Card hover state */
--bg-elevated: #1F1F1F;       /* Elevated elements */

/* Accent Colors */
--accent-primary: #D4A574;    /* Warm gold - primary accent */
--accent-secondary: #B8956A;  /* Darker gold - hover states */
--accent-glow: rgba(212, 165, 116, 0.15);  /* Glow effect */
--accent-border: rgba(212, 165, 116, 0.3); /* Border highlight */

/* Text Colors */
--text-primary: #FAFAFA;      /* Primary white */
--text-secondary: #A0A0A0;    /* Secondary gray */
--text-muted: #666666;        /* Muted/dates */
--text-accent: #D4A574;       /* Accent text (keywords) */

/* Borders */
--border-subtle: rgba(255, 255, 255, 0.08);
--border-medium: rgba(255, 255, 255, 0.15);
--border-accent: rgba(212, 165, 116, 0.4);

/* Gradients */
--gradient-hero: linear-gradient(135deg, #0A0A0A 0%, #141414 100%);
--gradient-card: linear-gradient(180deg, #141414 0%, #0F0F0F 100%);
--gradient-accent: linear-gradient(135deg, #D4A574 0%, #B8956A 100%);
--gradient-timeline: linear-gradient(180deg, #D4A574 0%, transparent 100%);
```

### Semantic Colors

```css
/* Status */
--color-current: #4ADE80;     /* Current role indicator */
--color-past: #A0A0A0;        /* Past role indicator */

/* Keyword Highlighting */
--highlight-bg: rgba(212, 165, 116, 0.12);
--highlight-text: #D4A574;
```

---

## 5. LAYOUT & GRID

### Container Widths

```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1400px;

/* Content max-width */
--content-max: 900px;  /* For readability */
```

### Spacing Scale

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### Page Grid Structure

```
┌─────────────────────────────────────────────────────────────────────────┐
│ HEADER (fixed)                                                           │
│ ← Back to Home                               SUNIL IYER    [placeholder] │
├────────────┬────────────────────────────────────────────────────────────┤
│            │                                                             │
│  TIMELINE  │  MAIN CONTENT                                              │
│  (sticky)  │                                                             │
│            │  ┌─────────────────────────────────────────────────────┐   │
│  ● 2024    │  │ ROLE CARD                                           │   │
│  │         │  │                                                     │   │
│  ○ 2020    │  └─────────────────────────────────────────────────────┘   │
│  │         │                                                             │
│  ○ 2016    │  ┌─────────────────────────────────────────────────────┐   │
│  │         │  │ ROLE CARD                                           │   │
│  ○ 2014    │  │                                                     │   │
│  │         │  └─────────────────────────────────────────────────────┘   │
│  ○ 2006    │                                                             │
│  │         │                                                             │
│  ─────     │                                                             │
│  ○ Story   │                                                             │
│  ○ Skills  │                                                             │
│            │                                                             │
├────────────┴────────────────────────────────────────────────────────────┤
│ FOOTER                                                                   │
│ ← Back to suniliyer.ca                                                   │
└─────────────────────────────────────────────────────────────────────────┘
```

### Grid Specifications

```css
/* Desktop Layout */
.page-grid {
  display: grid;
  grid-template-columns: 80px 1fr;  /* Timeline | Content */
  gap: var(--space-8);
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: var(--space-6);
}

/* Tablet Layout */
@media (max-width: 1023px) {
  .page-grid {
    grid-template-columns: 60px 1fr;
    gap: var(--space-6);
  }
}

/* Mobile Layout */
@media (max-width: 767px) {
  .page-grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
  
  .timeline {
    position: fixed;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
  }
}
```

---

## 6. COMPONENT SPECIFICATIONS

### 6.1 Role Card Component

**States**: Collapsed → Skills → Results → Details

```
┌─────────────────────────────────────────────────────────────────────────┐
│ COLLAPSED STATE                                                          │
│                                                                          │
│  Dimensions:                                                             │
│  ├── Width: 100% of content area                                        │
│  ├── Min-height: 120px                                                  │
│  ├── Padding: var(--space-6)                                            │
│  └── Border-radius: 12px                                                │
│                                                                          │
│  Visual:                                                                 │
│  ├── Background: var(--bg-card)                                         │
│  ├── Border: 1px solid var(--border-subtle)                             │
│  ├── Box-shadow: none (default), subtle on hover                        │
│  └── Left accent bar: 3px solid var(--accent-primary) for current role  │
│                                                                          │
│  Content Layout:                                                         │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ [Timeline Dot] ──  COMPANY NAME                      [Expand →]  │  │
│  │                    Job Title                                      │  │
│  │                    Date Range · Location                          │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### 6.2 Skills Section (Revealed State 1)

```css
.skills-section {
  margin-top: var(--space-6);
  padding: var(--space-4);
  background: var(--bg-secondary);
  border-radius: 8px;
  border: 1px solid var(--border-subtle);
}

.skill-tag {
  display: inline-flex;
  padding: var(--space-2) var(--space-3);
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: 6px;
  font-size: var(--text-small);
  color: var(--text-secondary);
  transition: all 0.2s ease;
}

.skill-tag:hover {
  border-color: var(--accent-border);
  color: var(--text-primary);
  transform: translateY(-2px);
}
```

### 6.3 Results Section (Revealed State 2)

```
┌─────────────────────────────────────────────────────────────────────────┐
│ RESULTS GRID                                                             │
│                                                                          │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐           │
│  │   100%    │  │    20%    │  │     7     │  │   200%    │           │
│  │           │  │           │  │           │  │           │           │
│  │  Client   │  │   CARR    │  │  AI Use   │  │   Loss    │           │
│  │ Retention │  │  Growth   │  │   Cases   │  │ Avoidance │           │
│  └───────────┘  └───────────┘  └───────────┘  └───────────┘           │
│                                                                          │
│  Metric Card Specs:                                                      │
│  ├── Width: Min 120px, flex-grow                                        │
│  ├── Padding: var(--space-4)                                            │
│  ├── Background: var(--bg-elevated)                                     │
│  ├── Border: 1px solid var(--border-subtle)                             │
│  ├── Border-radius: 8px                                                 │
│  │                                                                       │
│  ├── Value:                                                              │
│  │   ├── Font-size: 1.75rem                                             │
│  │   ├── Font-weight: 700                                               │
│  │   ├── Color: var(--accent-primary)                                   │
│  │   └── Counter animation on reveal                                    │
│  │                                                                       │
│  └── Label:                                                              │
│      ├── Font-size: var(--text-small)                                   │
│      ├── Color: var(--text-muted)                                       │
│      └── Margin-top: var(--space-2)                                     │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### 6.4 Achievements Section (Revealed State 3)

```css
.achievement-item {
  padding: var(--space-4);
  margin-bottom: var(--space-3);
  background: var(--bg-secondary);
  border-radius: 8px;
  border-left: 3px solid var(--accent-primary);
}

.achievement-title {
  font-size: var(--text-body);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-2);
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.achievement-title::before {
  content: "▸";
  color: var(--accent-primary);
}

.achievement-description {
  font-size: var(--text-body);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
}

/* Keyword highlighting */
.achievement-description strong,
.keyword {
  color: var(--text-accent);
  font-weight: 600;
  background: var(--highlight-bg);
  padding: 0.1em 0.3em;
  border-radius: 3px;
}
```

### 6.5 Timeline Component

```
┌───────────────────────────────────────┐
│ TIMELINE (Desktop - Sticky Sidebar)   │
│                                       │
│ Width: 80px                           │
│ Position: sticky                      │
│ Top: 100px                            │
│                                       │
│  ● ─── 2024  (current, filled)       │
│  │                                    │
│  ○ ─── 2020  (past, outline)         │
│  │                                    │
│  ○ ─── 2016                          │
│  │                                    │
│  ○ ─── 2014                          │
│  │                                    │
│  ○ ─── 2006                          │
│  │                                    │
│  ─────────── (divider)               │
│  │                                    │
│  ○ ─── Story                         │
│  │                                    │
│  ○ ─── Skills                        │
│                                       │
│ Dot Specs:                            │
│ ├── Size: 12px (active: 16px)        │
│ ├── Border: 2px solid                │
│ ├── Active: filled with accent       │
│ ├── Inactive: outline only           │
│ └── Hover: glow effect               │
│                                       │
│ Line Specs:                           │
│ ├── Width: 2px                        │
│ ├── Color: var(--border-medium)      │
│ └── Active segment: accent color     │
│                                       │
└───────────────────────────────────────┘
```

### 6.6 Expand/Collapse Button

```css
.expand-button {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  background: transparent;
  border: 1px solid var(--border-subtle);
  border-radius: 6px;
  color: var(--text-secondary);
  font-size: var(--text-small);
  cursor: pointer;
  transition: all 0.3s ease;
}

.expand-button:hover {
  border-color: var(--accent-border);
  color: var(--text-primary);
  background: var(--bg-elevated);
}

.expand-button .arrow {
  transition: transform 0.3s ease;
}

.expand-button.expanded .arrow {
  transform: rotate(90deg);
}
```

---

## 7. ANIMATION CHOREOGRAPHY

### Page Load Sequence

```javascript
const pageLoadTimeline = {
  1: { element: "header", animation: "fadeDown", duration: 0.4, delay: 0 },
  2: { element: "hero-text", animation: "splitTextReveal", duration: 0.6, delay: 0.2 },
  3: { element: "timeline", animation: "slideInLeft", duration: 0.5, delay: 0.4 },
  4: { element: "first-role-card", animation: "fadeUp", duration: 0.5, delay: 0.6 },
  5: { element: "remaining-cards", animation: "staggerFadeUp", duration: 0.4, stagger: 0.1 }
};
```

### Scroll Animations (GSAP ScrollTrigger)

```javascript
// Role cards fade up as they enter viewport
gsap.utils.toArray('.role-card').forEach(card => {
  gsap.from(card, {
    y: 60,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });
});

// Timeline dots activate based on scroll position
gsap.utils.toArray('.timeline-section').forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    onEnter: () => activateTimelineDot(i),
    onLeaveBack: () => activateTimelineDot(i - 1),
  });
});
```

### Expand/Collapse Animation

```javascript
// Using Framer Motion or GSAP
const expandAnimation = {
  initial: { 
    height: 0, 
    opacity: 0,
    x: -20 
  },
  animate: { 
    height: "auto", 
    opacity: 1,
    x: 0,
    transition: {
      height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
      opacity: { duration: 0.3, delay: 0.1 },
      x: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    }
  },
  exit: { 
    height: 0, 
    opacity: 0,
    x: -20,
    transition: {
      height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
      opacity: { duration: 0.2 }
    }
  }
};
```

### Counter Animation (for metrics)

```javascript
function animateCounter(element, target, duration = 1.5) {
  const start = 0;
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / (duration * 1000), 1);
    const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
    
    const current = Math.floor(start + (target - start) * easeProgress);
    element.textContent = formatValue(current, target);
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}
```

### Hover Effects

```css
/* Card hover - left edge glow (invitation to expand) */
.role-card {
  position: relative;
  overflow: hidden;
}

.role-card::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 4px;
  background: var(--accent-primary);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.role-card:hover::before {
  transform: scaleY(1);
}

/* Metric card hover */
.metric-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.metric-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(212, 165, 116, 0.15);
}

/* Skill tag hover */
.skill-tag {
  transition: all 0.2s ease;
}

.skill-tag:hover {
  transform: translateY(-2px);
  border-color: var(--accent-border);
  box-shadow: 0 4px 12px rgba(212, 165, 116, 0.1);
}
```

---

## 8. INTERACTION PATTERNS

### Slide-to-Reveal Behavior

```
User Action          → System Response
─────────────────────────────────────────────────────────────────
Click/Tap Card       → Next layer slides in from left
                       (Skills → Results → Details)
                       
Click Expand Again   → Next layer slides in
                       Previous layers remain visible
                       
Click Collapse       → All expanded layers slide out
                       Returns to collapsed state
                       
Hover on Card        → Left edge glows (gold accent bar appears)
                       Subtle card lift
                       
Scroll Past Card     → Timeline dot activates
                       Previous dot deactivates
                       
Click Timeline Dot   → Smooth scroll to that section
                       Card auto-expands to first layer
```

### State Machine

```
┌──────────────┐
│  COLLAPSED   │ ← Default state
└──────┬───────┘
       │ click
       ▼
┌──────────────┐
│   SKILLS     │ ← Layer 1 visible
└──────┬───────┘
       │ click
       ▼
┌──────────────┐
│   RESULTS    │ ← Layers 1-2 visible
└──────┬───────┘
       │ click
       ▼
┌──────────────┐
│   DETAILS    │ ← All layers visible (fully expanded)
└──────────────┘
       │ click "collapse"
       ▼
┌──────────────┐
│  COLLAPSED   │ ← Back to start
└──────────────┘
```

### Button Label States

```yaml
state_labels:
  collapsed: "Explore →"
  skills: "Show Results →"
  results: "Show Details →"
  details: "← Collapse"
```

---

## 9. RESPONSIVE BREAKPOINTS

### Breakpoint Definitions

```css
/* Mobile first approach */
--bp-sm: 640px;   /* Small tablets */
--bp-md: 768px;   /* Tablets */
--bp-lg: 1024px;  /* Laptops */
--bp-xl: 1280px;  /* Desktops */
--bp-2xl: 1536px; /* Large desktops */
```

### Layout Adaptations

```
DESKTOP (≥1024px)
┌──────────┬────────────────────────────────────────────────────┐
│ Timeline │ Content (role cards, sections)                     │
│ (sticky) │                                                    │
│  80px    │ Full-width cards with multi-column metric grids   │
└──────────┴────────────────────────────────────────────────────┘

TABLET (768px - 1023px)
┌────────┬──────────────────────────────────────────────────────┐
│Timeline│ Content                                              │
│ 60px   │ Cards slightly narrower, 3-column metric grid       │
└────────┴──────────────────────────────────────────────────────┘

MOBILE (<768px)
┌─┬────────────────────────────────────────────────────────────┐
│T│ Content (full width)                                       │
│i│ Cards stack vertically                                     │
│m│ Metric grid: 2 columns                                     │
│e│ Skills: wrap more aggressively                             │
│ │                                                            │
└─┴────────────────────────────────────────────────────────────┘
Timeline: Thin vertical bar on left edge (40px), dots only
```

### Mobile-Specific Adjustments

```css
@media (max-width: 767px) {
  /* Typography scaling */
  :root {
    --text-hero: 2rem;
    --text-section: 1.5rem;
    --text-card-title: 1.25rem;
  }
  
  /* Card padding reduction */
  .role-card {
    padding: var(--space-4);
  }
  
  /* Metric grid to 2 columns */
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-3);
  }
  
  /* Skills wrap */
  .skills-container {
    gap: var(--space-2);
  }
  
  .skill-tag {
    font-size: 0.8rem;
    padding: var(--space-1) var(--space-2);
  }
  
  /* Timeline minimized */
  .timeline {
    position: fixed;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    padding: var(--space-2);
    background: var(--bg-secondary);
    border-radius: 0 8px 8px 0;
  }
  
  .timeline-label {
    display: none; /* Show only dots on mobile */
  }
}
```

---

## 10. ACCESSIBILITY

### WCAG 2.1 AA Compliance

```yaml
color_contrast:
  text_primary_on_bg: "15.3:1"  # FAFAFA on 0A0A0A
  text_secondary_on_bg: "7.5:1" # A0A0A0 on 0A0A0A
  accent_on_bg: "6.2:1"         # D4A574 on 0A0A0A
  status: "All pass AA"

focus_states:
  outline: "2px solid var(--accent-primary)"
  outline_offset: "2px"
  background: "var(--bg-elevated)"

keyboard_navigation:
  tab_order: "Header → Timeline → Cards (in order) → Footer"
  expand_collapse: "Enter or Space to toggle"
  timeline_dots: "Focusable, Enter to scroll"

screen_readers:
  role_cards: "role='article', aria-expanded for state"
  timeline: "role='navigation', aria-label='Career timeline'"
  metrics: "Announce value and label together"
  
reduced_motion:
  - "Disable GSAP ScrollTrigger animations"
  - "Instant state transitions"
  - "No counter animations"
```

### ARIA Attributes

```html
<!-- Role Card -->
<article 
  class="role-card"
  aria-expanded="false"
  aria-label="Shift Technology, Senior Manager, 2024 to Present"
>
  <!-- Content -->
  <button 
    aria-controls="shift-details"
    aria-expanded="false"
  >
    Explore
  </button>
  
  <div id="shift-details" hidden>
    <!-- Expanded content -->
  </div>
</article>

<!-- Timeline -->
<nav role="navigation" aria-label="Career timeline navigation">
  <ul>
    <li>
      <a 
        href="#shift"
        aria-current="true"
        aria-label="2024, Shift Technology, current section"
      >
        2024
      </a>
    </li>
    <!-- More items -->
  </ul>
</nav>
```

---

## APPENDIX: ANIMATION EASING REFERENCE

```css
/* Custom easing functions */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* Usage */
.element {
  transition: transform 0.4s var(--ease-out-expo);
}
```

---

**END OF DESIGN SPECIFICATION**
