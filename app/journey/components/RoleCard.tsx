'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Role, ExpansionState } from '@/types/journey';
import SkillTags from './SkillTags';
import MetricsGrid from './MetricsGrid';
import AchievementsList from './AchievementsList';

interface RoleCardProps {
  role: Role;
  defaultState?: ExpansionState;
}

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
        x: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      height: 0,
      transition: {
        height: { duration: 0.3 },
        opacity: { duration: 0.2 },
      },
    },
  };

  return (
    <article
      id={role.id}
      className={`
        relative p-6 rounded-xl group
        bg-background-secondary border border-border-secondary
        transition-all duration-300
        hover:border-border-accent
        ${role.isCurrent ? 'border-l-4 border-l-accent-primary' : ''}
      `}
      aria-expanded={state !== 'collapsed'}
    >
      {/* Left edge glow on hover */}
      <div
        className={`absolute left-0 top-0 h-full w-1 bg-accent-primary
                    scale-y-0 origin-top transition-transform duration-400
                    group-hover:scale-y-100 ${role.isCurrent ? 'opacity-0' : ''}`}
      />

      {/* Header - Always Visible */}
      <div className="flex items-start justify-between">
        <div>
          {/* Timeline indicator */}
          <span className="text-xs text-accent-primary font-medium tracking-wide">{role.timelineYear}</span>

          {/* Company */}
          <h3 className="text-xl font-semibold text-text-primary mt-1">{role.company}</h3>

          {/* Title */}
          <p className="text-text-secondary mt-1">{role.title}</p>

          {/* Date & Location */}
          <p className="text-sm text-text-tertiary mt-2">
            {role.startDate} — {role.endDate} · {role.location}
          </p>
        </div>

        {/* Expand/Collapse Button */}
        <button
          onClick={handleToggle}
          className="flex items-center gap-2 px-4 py-2 text-sm text-text-secondary border border-border-secondary rounded-lg hover:border-border-accent hover:text-text-primary transition-all duration-200"
          aria-controls={`${role.id}-content`}
        >
          {stateLabels[state]}
          <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${state === 'details' ? 'rotate-90' : ''}`} />
        </button>
      </div>

      {/* Expandable Content */}
      <div id={`${role.id}-content`}>
        <AnimatePresence>
          {/* Skills Section */}
          {state !== 'collapsed' && (
            <motion.div key="skills" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="mt-6">
              <h4 className="text-xs uppercase tracking-wider text-text-tertiary mb-3">Skills</h4>
              <SkillTags skills={role.skills} />
            </motion.div>
          )}

          {/* Results Section */}
          {(state === 'results' || state === 'details') && (
            <motion.div key="results" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="mt-6">
              <h4 className="text-xs uppercase tracking-wider text-text-tertiary mb-3">Results</h4>
              <MetricsGrid metrics={role.results} animate />
            </motion.div>
          )}

          {/* Details Section */}
          {state === 'details' && (
            <motion.div key="details" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="mt-6">
              <h4 className="text-xs uppercase tracking-wider text-text-tertiary mb-3">Key Achievements</h4>
              <AchievementsList achievements={role.achievements} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}
