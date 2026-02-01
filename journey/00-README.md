# 🚀 SUNIL IYER — /JOURNEY PAGE

## Complete Documentation Package

> **Created**: January 31, 2026  
> **For**: suniliyer.ca  
> **Purpose**: Comprehensive resume/career narrative page with progressive disclosure

---

## 📁 DOCUMENT INDEX

| # | Document | Purpose | Lines |
|---|----------|---------|-------|
| 1 | [01-DATA.md](./01-DATA.md) | All role information, achievements, metrics | ~800 |
| 2 | [02-DESIGN.md](./02-DESIGN.md) | Visual specs, colors, typography, animations | ~700 |
| 3 | [03-PRD.md](./03-PRD.md) | Requirements, user stories, acceptance criteria | ~500 |
| 4 | [04-COMPONENTS.md](./04-COMPONENTS.md) | React/TypeScript component specifications | ~800 |

---

## 🎯 QUICK START

### What We're Building

A dedicated **/journey** page for suniliyer.ca that:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│   /journey                                                               │
│                                                                          │
│   ┌────────┬────────────────────────────────────────────────────────┐   │
│   │        │                                                        │   │
│   │  2024 ●│  SHIFT TECHNOLOGY ────────────────────── [Explore →]   │   │
│   │   │    │  Senior Manager · July 2024 - Present                  │   │
│   │        │                                                        │   │
│   │  2020 ○│  ERNST & YOUNG ───────────────────────── [Explore →]   │   │
│   │   │    │  Senior Manager · Oct 2020 - Apr 2024                  │   │
│   │        │                                                        │   │
│   │  2016 ○│  ERNST & YOUNG ───────────────────────── [Explore →]   │   │
│   │   │    │  Manager · Oct 2016 - Sep 2020                         │   │
│   │        │                                                        │   │
│   │  2014 ○│  ERNST & YOUNG ───────────────────────── [Explore →]   │   │
│   │   │    │  Senior Consultant · May 2014 - Sep 2016               │   │
│   │        │                                                        │   │
│   │  2006 ○│  INFOSYS ─────────────────────────────── [Explore →]   │   │
│   │        │  Various Roles · 2006 - 2012                           │   │
│   │        │                                                        │   │
│   │  ──────│  ───────────────────────────────────────────────────   │   │
│   │        │                                                        │   │
│   │  Story ○│  THE SESHAN STORY                                     │   │
│   │        │  280+ hours, 4 rewrites, "Data is King"                │   │
│   │        │                                                        │   │
│   │ Skills ○│  EXPERTISE                                            │   │
│   │        │  Leadership · Technical · Methodologies                │   │
│   │        │                                                        │   │
│   └────────┴────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Key Features

| Feature | Description |
|---------|-------------|
| **Progressive Disclosure** | Click to reveal: Title → Skills → Results → STAR Details |
| **Slide-from-Left** | Content animates in from the left on expand |
| **Timeline Navigation** | Sticky sidebar shows position in career |
| **Keyword Highlighting** | Metrics and action words in accent color |
| **Seshan Story** | Authentic project narrative with failures |
| **Mobile-First** | Full functionality on all devices |

---

## 🔧 TECH STACK

```yaml
Framework:    Next.js 14+ (App Router)
Language:     TypeScript
Styling:      Tailwind CSS
Animations:   GSAP (ScrollTrigger) + Framer Motion
Deployment:   Vercel
```

---

## 📋 KEY DECISIONS

### From Our Discussion

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Page route | `/journey` | Clear, professional URL |
| Card sizing | All equal height (collapsed) | Visual consistency |
| AI Governance | REMOVED from EY roles | Per Sunil's request |
| Email display | NOT shown | Privacy; use contact form |
| Infosys section | Condensed format | Focus on recent roles |
| Seshan Story | INCLUDED | Authentic, memorable differentiator |
| Animation intensity | Match existing site | Cohesive experience |

---

## 📊 DATA HIGHLIGHTS

### Roles to Display

| Role | Company | Key Metric |
|------|---------|------------|
| Sr. Manager, CS | Shift Technology | 100% retention, 200% loss avoidance |
| Sr. Manager | Ernst & Young | $30M+ portfolio, $8M wins |
| Manager | Ernst & Young | $10M cloud solution, 20% NPS↑ |
| Sr. Consultant | Ernst & Young | #1 utilization (160%), $250K saved |
| Various | Infosys | $1M contract win, 90% process improvement |

### Seshan Story Highlights

- **Duration**: 280+ hours over 10 weeks
- **Rewrites**: 4 complete architectural overhauls
- **Critical Moment**: 60,000 ESLint errors revealed AI drift
- **Philosophy Born**: "Data is King"

---

## 🎨 DESIGN TOKENS

```css
/* Primary Colors */
--bg-primary:     #0A0A0A;
--accent-primary: #D4A574;  /* Warm gold */
--text-primary:   #FAFAFA;
--text-secondary: #A0A0A0;

/* Animations */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--duration-normal: 0.4s;
```

---

## ✅ IMPLEMENTATION CHECKLIST

### Phase 1: Setup
- [ ] Create `/app/journey/` directory
- [ ] Set up page layout
- [ ] Configure GSAP + Framer Motion

### Phase 2: Components
- [ ] Build RoleCard with expansion states
- [ ] Build Timeline (desktop + mobile)
- [ ] Build supporting components

### Phase 3: Content
- [ ] Populate role data from 01-DATA.md
- [ ] Add Seshan Story content
- [ ] Configure keyword highlighting

### Phase 4: Animation
- [ ] Page load sequence
- [ ] Scroll-triggered reveals
- [ ] Expand/collapse transitions

### Phase 5: Polish
- [ ] Responsive testing
- [ ] Accessibility audit
- [ ] Performance optimization

### Phase 6: Integration
- [ ] Update About Me section on homepage
- [ ] Add "Explore My Journey" button
- [ ] Test navigation flow

---

## 🔗 INTEGRATION NOTES

### Homepage About Me Section

Add animated button after the metrics:

```tsx
<Link href="/journey" className="...">
  Explore My Journey →
</Link>
```

### External Links

| Link | Opens In |
|------|----------|
| LinkedIn | New tab |
| GitHub | New tab |
| Seshan Dashboard | New tab |
| Seshan Intelligence | New tab |

---

## 📝 CONTENT NOTES

### Removed (Per Request)
- ❌ All AI Governance references from EY roles
- ❌ Email address (privacy)
- ❌ Phone number (privacy)

### Included
- ✅ All quantifiable metrics
- ✅ STAR-format achievements with keywords
- ✅ Seshan project journey (authentic story)
- ✅ "Data is King" philosophy
- ✅ Education + Certifications (collapsible)

---

## 🚦 NEXT STEPS

1. **Review these documents** for accuracy
2. **Confirm any missing content** or corrections
3. **Begin implementation** using 04-COMPONENTS.md
4. **Iterate** based on preview deployments

---

**Questions? The documents contain all specifications needed for development. Each role's data, every animation timing, and all component interfaces are defined.**

*Ready to build when you are, Sunil!* 🚀
