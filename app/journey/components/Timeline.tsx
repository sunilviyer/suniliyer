'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TimelineSection } from '@/types/journey';

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
    <nav className="sticky top-24 h-fit" role="navigation" aria-label="Career timeline">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-border-secondary" />

        {/* Active line segment */}
        <motion.div
          className="absolute left-[7px] w-0.5 bg-accent-primary"
          layoutId="timeline-active"
          style={{
            top: `${sections.findIndex((s) => s.id === activeId) * 48}px`,
            height: '48px',
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
                  ${activeId === section.id ? 'text-text-primary' : 'text-text-tertiary'}
                `}
                aria-current={activeId === section.id ? 'true' : 'false'}
              >
                {/* Dot */}
                <span
                  className={`
                  w-4 h-4 rounded-full border-2 transition-all duration-200
                  ${activeId === section.id ? 'bg-accent-primary border-accent-primary scale-125' : 'bg-transparent border-text-tertiary group-hover:border-accent-primary/50'}
                `}
                />

                {/* Year */}
                <span className="text-sm font-medium">{section.year}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
