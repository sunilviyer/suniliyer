# 🔧 JOURNEY PAGE — COMPONENT SPECIFICATIONS

> **Document Version**: 1.0  
> **Last Updated**: January 31, 2026  
> **Purpose**: Detailed component specs for development implementation

---

## TABLE OF CONTENTS

1. [Homepage About Me Section Update](#1-homepage-about-me-section-update)
2. [Journey Page Layout](#2-journey-page-layout)
3. [RoleCard Component (Core)](#3-rolecard-component-core)
4. [Timeline Component](#4-timeline-component)
5. [Seshan Story Component](#5-seshan-story-component)
6. [Supporting Components](#6-supporting-components)
7. [Animation Configurations](#7-animation-configurations)
8. [Data Types & Interfaces](#8-data-types--interfaces)

---

## 1. HOMEPAGE ABOUT ME SECTION UPDATE

### Current State Analysis

Based on suniliyer.ca, the About Me section currently has:
- "SVI" hover reveal element
- Brief bio paragraph
- 3 metric cards (100%, $30M+, 10+)
- Scroll indicator

### Required Updates

**Add animated CTA button that links to /journey**

```tsx
// New component to add after the metrics
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.5 }}
>
  <Link href="/journey" className="group">
    <span className="inline-flex items-center gap-3 px-6 py-3 
                     border border-white/20 rounded-full
                     hover:border-amber-400/50 hover:bg-white/5
                     transition-all duration-300">
      <span className="text-white/80 group-hover:text-white">
        Explore My Journey
      </span>
      <span className="text-amber-400 transform transition-transform 
                       group-hover:translate-x-1">
        →
      </span>
    </span>
  </Link>
</motion.div>
```

### Animation Concept for About Me Enhancement

```
┌─────────────────────────────────────────────────────────────────────────┐
│  ABOUT ME SECTION - ENHANCED                                             │
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │                                                                    │ │
│  │     S U N I L   I Y E R                                           │ │
│  │     (Animated letter reveal)                                       │ │
│  │                                                                    │ │
│  │     ┌────────┐    ┌────────┐    ┌────────┐                        │ │
│  │     │  100%  │    │ $30M+  │    │  10+   │                        │ │
│  │     │Retent. │    │Engage. │    │ Years  │                        │ │
│  │     └────────┘    └────────┘    └────────┘                        │ │
│  │     (Counter animation)                                            │ │
│  │                                                                    │ │
│  │     "Results-driven leader..."                                     │ │
│  │     (Fade in)                                                      │ │
│  │                                                                    │ │
│  │             ┌──────────────────────────┐                          │ │
│  │             │  Explore My Journey  →   │  ← NEW BUTTON            │ │
│  │             └──────────────────────────┘                          │ │
│  │             (Pulse animation, hover fill from left)               │ │
│  │                                                                    │ │
│  └────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 2. JOURNEY PAGE LAYOUT

### Page Component Structure

```tsx
// app/journey/page.tsx

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* Fixed Header */}
      <JourneyHeader />
      
      {/* Main Content Grid */}
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-8">
          
          {/* Timeline Sidebar (Desktop) */}
          <aside className="hidden lg:block">
            <Timeline sections={timelineSections} />
          </aside>
          
          {/* Main Content */}
          <div className="space-y-8">
            {/* Hero */}
            <JourneyHero />
            
            {/* Role Cards */}
            <section id="career" className="space-y-6">
              {roles.map((role) => (
                <RoleCard key={role.id} role={role} />
              ))}
            </section>
            
            {/* Seshan Story */}
            <section id="seshan-story">
              <SeshanStory />
            </section>
            
            {/* Philosophy */}
            <section id="philosophy">
              <Philosophy />
            </section>
            
            {/* Skills Grid */}
            <section id="skills">
              <SkillsGrid />
            </section>
            
            {/* Education */}
            <section id="education">
              <Education />
            </section>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <JourneyFooter />
      
      {/* Mobile Timeline (Fixed) */}
      <MobileTimeline sections={timelineSections} />
    </main>
  );
}
```

### Layout CSS Grid

```css
/* Base layout */
.journey-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1280px;
  margin: 0 auto;
  padding: 6rem 1.5rem 4rem;
}

/* Desktop with timeline */
@media (min-width: 1024px) {
  .journey-layout {
    grid-template-columns: 80px 1fr;
    gap: 3rem;
  }
}

/* Timeline sticky behavior */
.timeline-sidebar {
  position: sticky;
  top: 100px;
  height: fit-content;
  max-height: calc(100vh - 120px);
}
```

---

## 3. ROLECARD COMPONENT (CORE)

### Component Interface

```typescript
// types/journey.ts

export type ExpansionState = 'collapsed' | 'skills' | 'results' | 'details';

export interface Role {
  id: string;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  timelineYear: string;
  isCurrent: boolean;
  skills: string[];
  results: Metric[];
  achievements: Achievement[];
}

export interface Metric {
  value: string;
  label: string;
  context?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  keywords: string[];
}

export interface RoleCardProps {
  role: Role;
  defaultState?: ExpansionState;
}
```

### Component Implementation

```tsx
// components/journey/RoleCard.tsx

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import SkillTags from './SkillTags';
import MetricsGrid from './MetricsGrid';
import AchievementsList from './AchievementsList';

const stateLabels: Record<ExpansionState, string> = {
  collapsed: 'Explore',
  skills: 'Show Results',
  results: 'Show Details',
  details: 'Collapse',
};

const nextState: Record<ExpansionState, ExpansionState> = {
  collapsed: 'skills',
  skills: 'results',
  results: 'details',
  details: 'collapsed',
};

export default function RoleCard({ role, defaultState = 'collapsed' }: RoleCardProps) {
  const [state, setState] = useState<ExpansionState>(defaultState);
  
  const handleToggle = () => {
    setState(nextState[state]);
  };
  
  const slideVariants = {
    hidden: { opacity: 0, x: -20, height: 0 },
    visible: { 
      opacity: 1, 
      x: 0, 
      height: 'auto',
      transition: {
        height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.3, delay: 0.1 },
        x: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
      }
    },
    exit: { 
      opacity: 0, 
      x: -20, 
      height: 0,
      transition: {
        height: { duration: 0.3 },
        opacity: { duration: 0.2 }
      }
    }
  };

  return (
    <article 
      id={role.id}
      className={`
        relative p-6 rounded-xl
        bg-[#141414] border border-white/10
        transition-all duration-300
        hover:border-amber-400/30
        ${role.isCurrent ? 'border-l-4 border-l-amber-400' : ''}
      `}
      aria-expanded={state !== 'collapsed'}
    >
      {/* Left edge glow on hover */}
      <div className="absolute left-0 top-0 h-full w-1 bg-amber-400 
                      scale-y-0 origin-top transition-transform duration-400
                      group-hover:scale-y-100" />
      
      {/* Header - Always Visible */}
      <div className="flex items-start justify-between">
        <div>
          {/* Timeline indicator */}
          <span className="text-xs text-amber-400 font-medium tracking-wide">
            {role.timelineYear}
          </span>
          
          {/* Company */}
          <h3 className="text-xl font-semibold text-white mt-1">
            {role.company}
          </h3>
          
          {/* Title */}
          <p className="text-white/70 mt-1">
            {role.title}
          </p>
          
          {/* Date & Location */}
          <p className="text-sm text-white/50 mt-2">
            {role.startDate} — {role.endDate} · {role.location}
          </p>
        </div>
        
        {/* Expand/Collapse Button */}
        <button
          onClick={handleToggle}
          className="flex items-center gap-2 px-4 py-2 
                     text-sm text-white/60 
                     border border-white/10 rounded-lg
                     hover:border-amber-400/30 hover:text-white
                     transition-all duration-200"
          aria-controls={`${role.id}-content`}
        >
          {stateLabels[state]}
          <ChevronRight 
            className={`w-4 h-4 transition-transform duration-300
                       ${state === 'details' ? 'rotate-90' : ''}`} 
          />
        </button>
      </div>
      
      {/* Expandable Content */}
      <div id={`${role.id}-content`}>
        <AnimatePresence>
          {/* Skills Section */}
          {state !== 'collapsed' && (
            <motion.div
              key="skills"
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-6"
            >
              <h4 className="text-xs uppercase tracking-wider text-white/40 mb-3">
                Skills
              </h4>
              <SkillTags skills={role.skills} />
            </motion.div>
          )}
          
          {/* Results Section */}
          {(state === 'results' || state === 'details') && (
            <motion.div
              key="results"
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-6"
            >
              <h4 className="text-xs uppercase tracking-wider text-white/40 mb-3">
                Results
              </h4>
              <MetricsGrid metrics={role.results} animate />
            </motion.div>
          )}
          
          {/* Details Section */}
          {state === 'details' && (
            <motion.div
              key="details"
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-6"
            >
              <h4 className="text-xs uppercase tracking-wider text-white/40 mb-3">
                Key Achievements
              </h4>
              <AchievementsList achievements={role.achievements} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}
```

### Sub-Components

#### SkillTags

```tsx
// components/journey/SkillTags.tsx

interface SkillTagsProps {
  skills: string[];
}

export default function SkillTags({ skills }: SkillTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          className="px-3 py-1.5 text-sm
                     bg-white/5 border border-white/10 rounded-md
                     text-white/70
                     hover:border-amber-400/30 hover:text-white
                     transition-all duration-200"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  );
}
```

#### MetricsGrid

```tsx
// components/journey/MetricsGrid.tsx

interface MetricsGridProps {
  metrics: Metric[];
  animate?: boolean;
}

export default function MetricsGrid({ metrics, animate = false }: MetricsGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={animate ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-4 bg-white/5 border border-white/10 rounded-lg
                     hover:border-amber-400/20 transition-all duration-200
                     hover:transform hover:-translate-y-1"
        >
          <div className="text-2xl font-bold text-amber-400">
            {animate ? (
              <CounterAnimation value={metric.value} />
            ) : (
              metric.value
            )}
          </div>
          <div className="text-sm text-white/50 mt-1">
            {metric.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
```

#### AchievementsList

```tsx
// components/journey/AchievementsList.tsx

interface AchievementsListProps {
  achievements: Achievement[];
}

export default function AchievementsList({ achievements }: AchievementsListProps) {
  return (
    <div className="space-y-4">
      {achievements.map((achievement, index) => (
        <motion.div
          key={achievement.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-4 bg-white/5 rounded-lg border-l-3 border-l-amber-400"
        >
          <h5 className="flex items-center gap-2 text-white font-medium">
            <span className="text-amber-400">▸</span>
            {achievement.title}
          </h5>
          <p className="text-white/70 mt-2 leading-relaxed">
            <HighlightedText 
              text={achievement.description} 
              keywords={achievement.keywords} 
            />
          </p>
        </motion.div>
      ))}
    </div>
  );
}
```

#### HighlightedText

```tsx
// components/journey/HighlightedText.tsx

interface HighlightedTextProps {
  text: string;
  keywords: string[];
}

export default function HighlightedText({ text, keywords }: HighlightedTextProps) {
  // Convert markdown-style **bold** to highlighted spans
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          const content = part.slice(2, -2);
          return (
            <span 
              key={index}
              className="text-amber-400 font-semibold 
                        bg-amber-400/10 px-1 rounded"
            >
              {content}
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}
```

---

## 4. TIMELINE COMPONENT

### Desktop Timeline

```tsx
// components/journey/Timeline.tsx

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TimelineSection {
  id: string;
  year: string;
  label: string;
  type: 'role' | 'section';
}

interface TimelineProps {
  sections: TimelineSection[];
}

export default function Timeline({ sections }: TimelineProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id);
  
  useEffect(() => {
    const handleScroll = () => {
      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveId(section.id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);
  
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav 
      className="sticky top-24 h-fit"
      role="navigation"
      aria-label="Career timeline"
    >
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-white/10" />
        
        {/* Active line segment */}
        <motion.div 
          className="absolute left-[7px] w-0.5 bg-amber-400"
          layoutId="timeline-active"
          style={{ 
            top: `${sections.findIndex(s => s.id === activeId) * 48}px`,
            height: '48px' 
          }}
        />
        
        {/* Timeline items */}
        <ul className="space-y-6">
          {sections.map((section, index) => (
            <li key={section.id}>
              <button
                onClick={() => scrollTo(section.id)}
                className={`
                  flex items-center gap-3 group
                  transition-all duration-200
                  ${activeId === section.id ? 'text-white' : 'text-white/40'}
                `}
                aria-current={activeId === section.id ? 'true' : 'false'}
              >
                {/* Dot */}
                <span className={`
                  w-4 h-4 rounded-full border-2 transition-all duration-200
                  ${activeId === section.id 
                    ? 'bg-amber-400 border-amber-400 scale-125' 
                    : 'bg-transparent border-white/30 group-hover:border-amber-400/50'}
                `} />
                
                {/* Year */}
                <span className="text-sm font-medium">
                  {section.year}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
```

### Mobile Timeline

```tsx
// components/journey/MobileTimeline.tsx

'use client';

import { useState, useEffect } from 'react';

export default function MobileTimeline({ sections }: TimelineProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero
      setIsVisible(window.scrollY > 300);
      
      // Update active section
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveId(section.id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  if (!isVisible) return null;

  return (
    <nav 
      className="lg:hidden fixed left-0 top-1/2 -translate-y-1/2 z-50
                 bg-[#141414]/90 backdrop-blur-sm rounded-r-lg p-2
                 border border-white/10 border-l-0"
    >
      <ul className="space-y-3">
        {sections.filter(s => s.type === 'role').map((section) => (
          <li key={section.id}>
            <button
              onClick={() => {
                document.getElementById(section.id)?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className={`
                w-3 h-3 rounded-full transition-all duration-200
                ${activeId === section.id 
                  ? 'bg-amber-400 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'}
              `}
              aria-label={`Jump to ${section.year}`}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
```

---

## 5. SESHAN STORY COMPONENT

```tsx
// components/journey/SeshanStory.tsx

'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const evolutionSteps = [
  { name: 'Portfolio', tech: 'LocalStorage', issue: 'Data loss' },
  { name: 'PortfolioModular', tech: 'SQLite', issue: 'Sync issues' },
  { name: 'Vasuki', tech: 'FastAPI', issue: '60K errors' },
  { name: 'Seshan', tech: 'Flask', issue: 'Stable ✓' },
];

export default function SeshanStory() {
  return (
    <div className="p-8 bg-[#141414] rounded-xl border border-white/10">
      {/* Section Header */}
      <h2 className="text-2xl font-bold text-white mb-6">
        The Build That Taught Me Everything
      </h2>
      
      {/* Quote Block */}
      <blockquote className="relative p-6 bg-white/5 rounded-lg border-l-4 border-amber-400 mb-8">
        <p className="text-xl text-white/90 italic leading-relaxed">
          "After 280+ hours and 4 complete rewrites, I finally understood: 
          documentation isn't bureaucracy — it's survival."
        </p>
      </blockquote>
      
      {/* Evolution Timeline */}
      <div className="mb-8">
        <h3 className="text-sm uppercase tracking-wider text-white/40 mb-4">
          The Evolution
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          {evolutionSteps.map((step, index) => (
            <motion.div
              key={step.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center"
            >
              <div className="px-4 py-3 bg-white/5 rounded-lg border border-white/10">
                <div className="text-white font-medium">{step.name}</div>
                <div className="text-xs text-white/50">{step.tech}</div>
                <div className={`text-xs mt-1 ${
                  step.issue === 'Stable ✓' ? 'text-green-400' : 'text-amber-400'
                }`}>
                  {step.issue}
                </div>
              </div>
              {index < evolutionSteps.length - 1 && (
                <span className="mx-2 text-white/30">→</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* The 60,000 Error Moment */}
      <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-lg mb-8">
        <h3 className="text-lg font-semibold text-white mb-2">
          The 60,000 Error Revelation
        </h3>
        <p className="text-white/70 leading-relaxed">
          When I relaxed ESLint rules, I uncovered the true cost of unchecked 
          AI drift. Every "quick fix" had compounded into architectural chaos. 
          This catastrophe taught me the most valuable lesson: 
          <span className="text-amber-400 font-medium">
            {' '}structured documentation isn't bureaucracy — it's survival.
          </span>
        </p>
      </div>
      
      {/* Key Learnings */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {[
          'BMAD Method for structured AI development',
          'Flask over FastAPI for Vercel serverless',
          'Documentation prevents AI drift'
        ].map((learning, index) => (
          <div 
            key={index}
            className="p-4 bg-white/5 rounded-lg border border-white/10"
          >
            <span className="text-amber-400 mr-2">→</span>
            <span className="text-white/80">{learning}</span>
          </div>
        ))}
      </div>
      
      {/* Demo Links */}
      <div className="flex flex-wrap gap-4">
        <a
          href="https://seshan-navy.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2
                     border border-amber-400/50 rounded-lg
                     text-amber-400 hover:bg-amber-400/10
                     transition-all duration-200"
        >
          View Seshan Dashboard
          <ExternalLink className="w-4 h-4" />
        </a>
        <a
          href="https://www.suniliyer.ca/seshan/demo/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2
                     border border-white/20 rounded-lg
                     text-white/80 hover:border-white/40
                     transition-all duration-200"
        >
          View Intelligence Demo
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
```

---

## 6. SUPPORTING COMPONENTS

### JourneyHeader

```tsx
// components/journey/JourneyHeader.tsx

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function JourneyHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 
                        bg-[#0A0A0A]/80 backdrop-blur-md
                        border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 
                      flex items-center justify-between">
        {/* Back Link */}
        <Link 
          href="/"
          className="flex items-center gap-2 text-white/60 
                     hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        
        {/* Identity */}
        <div className="flex items-center gap-3">
          <span className="text-white font-medium">SUNIL IYER</span>
          {/* Avatar placeholder */}
          <div className="w-8 h-8 rounded-full bg-amber-400/20 
                          flex items-center justify-center">
            <span className="text-amber-400 text-sm font-medium">SI</span>
          </div>
        </div>
      </div>
    </header>
  );
}
```

### JourneyFooter

```tsx
// components/journey/JourneyFooter.tsx

import Link from 'next/link';

export default function JourneyFooter() {
  return (
    <footer className="border-t border-white/5 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 
                      flex items-center justify-between">
        <Link 
          href="/"
          className="text-white/60 hover:text-white transition-colors"
        >
          ← Back to suniliyer.ca
        </Link>
        
        <span className="text-white/40 text-sm">
          © 2026 Sunil Iyer
        </span>
      </div>
    </footer>
  );
}
```

---

## 7. ANIMATION CONFIGURATIONS

### GSAP ScrollTrigger Setup

```typescript
// lib/animations.ts

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initScrollAnimations = () => {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;
  
  if (prefersReducedMotion) return;
  
  // Role cards fade up on scroll
  gsap.utils.toArray('.role-card').forEach((card: any) => {
    gsap.from(card, {
      y: 60,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  });
};

export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};
```

### Framer Motion Variants

```typescript
// lib/motionVariants.ts

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const slideFromLeft = {
  initial: { opacity: 0, x: -20, height: 0 },
  animate: { 
    opacity: 1, 
    x: 0, 
    height: 'auto',
    transition: {
      height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
      opacity: { duration: 0.3, delay: 0.1 },
      x: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    }
  },
  exit: { 
    opacity: 0, 
    x: -20, 
    height: 0,
    transition: {
      height: { duration: 0.3 },
      opacity: { duration: 0.2 }
    }
  }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
```

---

## 8. DATA TYPES & INTERFACES

### Complete Type Definitions

```typescript
// types/journey.ts

export type ExpansionState = 'collapsed' | 'skills' | 'results' | 'details';

export interface Metric {
  value: string;
  label: string;
  context?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  keywords: string[];
}

export interface Role {
  id: string;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  timelineYear: string;
  isCurrent: boolean;
  skills: string[];
  results: Metric[];
  achievements: Achievement[];
}

export interface TimelineSection {
  id: string;
  year: string;
  label: string;
  type: 'role' | 'section';
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  honors?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface PhilosophyPrinciple {
  title: string;
  description: string;
}

export interface SeshanEvolutionStep {
  name: string;
  tech: string;
  issue: string;
  tool: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
```

---

**END OF COMPONENT SPECIFICATIONS**
