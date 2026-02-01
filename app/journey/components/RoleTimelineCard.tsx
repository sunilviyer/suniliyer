'use client';

import { useState } from 'react';
import { Role } from '@/types/journey';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

interface RoleTimelineCardProps {
  role: Role;
}

export default function RoleTimelineCard({ role }: RoleTimelineCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Get unique skills - first 6
  const uniqueSkills = role.skills.slice(0, 6);

  return (
    <div
      className="w-full h-[550px] cursor-pointer perspective-1000 group"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full backface-hidden bg-background-secondary border border-border-secondary rounded-lg hover:border-accent-primary transition-all duration-300 flex flex-col overflow-hidden hover:shadow-[0_0_30px_rgba(212,165,116,0.4)]"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Header Image - Fixed Height */}
          {role.logoUrl && (
            <div className="relative w-full h-48 bg-hover-bg flex-shrink-0">
              <Image
                src={role.logoUrl}
                alt={`${role.company}`}
                fill
                className="object-cover"
              />
              {/* Skills Overlay on Hover */}
              {isHovered && !isFlipped && uniqueSkills.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/80 backdrop-blur-sm p-4 flex flex-col justify-center"
                >
                  <h4 className="text-xs font-semibold text-accent-primary mb-2 text-center">Key Skills</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {uniqueSkills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-accent-primary/20 text-white text-xs rounded-full border border-accent-primary/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {/* Standardized Content - Fixed Structure */}
          <div className="p-6 flex flex-col flex-1 justify-between">
            {/* Title & Company - Fixed Height */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-text-primary line-clamp-1">{role.company}</h3>
              <p className="text-sm text-text-secondary mt-1 line-clamp-2">{role.title}</p>
              <p className="text-xs text-text-tertiary mt-1">
                {role.startDate} - {role.endDate}
              </p>
              <p className="text-xs text-text-tertiary">{role.location}</p>
            </div>

            {/* Key Results - Exactly 3 */}
            <div className="grid grid-cols-3 gap-3 my-4">
              {role.results && role.results.slice(0, 3).map((result, idx) => (
                <div key={idx} className="p-3 bg-hover-bg rounded text-center">
                  <div className="text-lg font-bold text-accent-primary line-clamp-1">{result.value}</div>
                  <div className="text-xs text-text-tertiary mt-1 line-clamp-2">{result.label}</div>
                </div>
              ))}
            </div>

            {/* Click Prompt */}
            <div className="text-center text-xs text-text-tertiary">
              Click for details
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full backface-hidden p-8 bg-background-secondary border border-border-secondary rounded-lg flex flex-col overflow-hidden hover:shadow-[0_0_30px_rgba(212,165,116,0.4)]"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="flex items-center gap-3 mb-4 flex-shrink-0">
            <Briefcase className="w-5 h-5 text-accent-primary" />
            <h3 className="text-lg font-semibold text-text-primary">{role.company}</h3>
          </div>

          {/* Achievements with Markdown Rendering */}
          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {role.achievements && role.achievements.length > 0 && (
              <div className="space-y-3">
                {role.achievements.map((achievement) => (
                  <div key={achievement.id} className="pb-3 border-b border-border-primary last:border-0">
                    <h4 className="text-sm font-semibold text-accent-primary mb-1">{achievement.title}</h4>
                    <div className="text-xs text-text-secondary leading-relaxed prose prose-sm prose-invert max-w-none">
                      <ReactMarkdown
                        components={{
                          strong: ({ children }) => (
                            <strong className="text-accent-primary font-semibold">{children}</strong>
                          ),
                          p: ({ children }) => <span>{children}</span>,
                        }}
                      >
                        {achievement.description}
                      </ReactMarkdown>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-2 text-center text-xs text-text-tertiary flex-shrink-0">
            Click to flip back
          </div>
        </div>
      </motion.div>
    </div>
  );
}
