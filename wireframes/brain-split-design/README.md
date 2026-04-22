# Brain Split Homepage Wireframe

**Interactive wireframe for suniliyer.ca homepage redesign**

## Overview

This wireframe demonstrates the "left brain/right brain" visual metaphor to solve choice overload on the homepage. Instead of 17+ competing elements, visitors choose between two clear paths:

- **🧠 Left Brain (Technical)**: AGI Constitution, Seshan, Portfolio, Resume
- **🎨 Right Brain (Creative)**: Learning Paths, Calvin & Hobbes, Gita, Creative Works

## How to View

Open `index.html` in your browser:

```bash
open /Volumes/External/aidefence/wireframes/brain-split-design/index.html
```

Or simply double-click the HTML file.

## Features

### Desktop Experience

1. **Collapsed State (50/50)**
   - Both brain hemispheres visible side-by-side
   - Each shows: Brain SVG + Thumbnails + 3-4 bullet points + Expand button
   - Click either side to expand

2. **Left Expanded (80/20)**
   - Left brain expands to 80% width
   - Shows full content cards: AGI Constitution (featured), Seshan, Portfolio, Stats
   - Right brain contracts to 20% with dimmed preview

3. **Right Expanded (20/80)**
   - Right brain expands to 80% width
   - Shows full content cards: Learning Paths, Calvin & Hobbes, Gita, Creative Works
   - Left brain contracts to 20% with dimmed preview

### Mobile Experience

- **Horizontal Tabs** (not vertical stack)
- Toggle between "🧠 Technical" and "🎨 Creative"
- Full content cards shown for selected tab
- Clean, scrollable interface

### Visual Design

- **Left Brain SVG**: Two-tone blue colors with circuit pattern (analytical)
- **Right Brain SVG**: Rainbow gradient with artistic swirls (creative)
- **Pulsing Animation**: Subtle opacity pulse on brain illustrations
- **Smooth Transitions**: 0.8s cubic-bezier easing
- **Hover Effects**: Lift + glow effect on hemispheres

## Design Specifications

| Element | Specification |
|---------|--------------|
| Brain Style | Hand-drawn/illustrated (friendly, playful) |
| Left Brain Colors | Two-tone blues/grays (#3b82f6, #60a5fa) |
| Right Brain Colors | Rainbow gradient (purple → pink → orange) |
| Split Visual | Subtle gradient transition with pulsing |
| Collapsed State | Thumbnails + 3-4 bullet points |
| Expanded Ratio | 80/20 split |
| Animation | 0.8s cubic-bezier (elastic easing in production) |
| Mobile Layout | Horizontal tabs (Technical / Creative) |

## Content Structure

### Left Brain (Technical)
- 📜 **AGI Constitution** - AI governance framework (Featured when expanded)
- 🤖 **Seshan Intelligence** - Enterprise AI platform ($30M+ engagements)
- 💼 **Portfolio Projects** - Full-stack applications
- 📄 **Resume** - Career journey (15+ years)

### Right Brain (Creative)
- 🛤️ **Learning Paths** - Interactive knowledge timelines
- 🐯 **Calvin & Hobbes** - Philosophy through comics
- 📿 **Bhagavad Gita** - Ancient wisdom for modern AI
- ✨ **Creative Works** - Essays & thought experiments

## Controls

Use the control buttons at the top to toggle between states:

- **Collapsed (50/50)** - Initial state showing both sides equally
- **Left Expanded (80/20)** - Technical side expanded
- **Right Expanded (20/80)** - Creative side expanded

Resize your browser window below 768px to see the mobile view.

## Next Steps for Production

When ready to implement in the actual Next.js application:

1. **Convert to React Component**: `components/BrainSplitSection.tsx`
2. **Add GSAP Animation**: Replace CSS transitions with GSAP timeline
3. **Create Brain SVG**: Higher fidelity hand-drawn illustration
4. **Integrate Content**: Pull from existing components (LearningPathsAccordion, PortfolioShowcase, etc.)
5. **Update Homepage**: Insert after compact hero in `app/page.tsx`
6. **Add AGI Constitution**: New section + hamburger menu link

## Files in This Folder

```
wireframes/brain-split-design/
├── index.html       # Interactive wireframe (open this!)
└── README.md        # This documentation
```

## Design Decisions

### Why Left/Right Brain Metaphor?

- **Solves choice overload**: 17+ elements → 2 clear choices
- **Makes duality explicit**: "Logic + Magic" becomes visual
- **Memorable branding**: Unique, playful, on-brand
- **Progressive disclosure**: Show what matters based on visitor intent

### Why No New Pages?

- User explicitly rejected `/enterprise-hub` and `/creative-hub` pages
- Hamburger menu already handles navigation
- Everything on homepage = less cognitive load
- Expansion/contraction keeps user in context

### Why These Colors?

- **Left = Blue tones**: Professional, trustworthy, analytical (matches enterprise)
- **Right = Rainbow**: Creative, playful, diverse (matches philosophy/arts)
- **Gradient transition**: Subtle visual connection between logic and creativity

---

**Created**: March 22, 2026
**For**: suniliyer.ca homepage redesign
**Status**: Wireframe for review
