'use client';

import { useState } from 'react';
import { Education } from '@/types/journey';
import Image from 'next/image';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

interface EducationTimelineCardProps {
  education: Education;
}

export default function EducationTimelineCard({ education }: EducationTimelineCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Placeholder skills until user provides them
  const educationSkills = education.honors || [];

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
          {education.imageUrl ? (
            <div className="relative w-full h-48 bg-hover-bg flex-shrink-0">
              <Image
                src={education.imageUrl}
                alt={education.degree}
                fill
                className="object-cover"
              />
              {/* Skills Overlay on Hover */}
              {isHovered && !isFlipped && educationSkills.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/80 backdrop-blur-sm p-4 flex flex-col justify-center"
                >
                  <h4 className="text-xs font-semibold text-accent-primary mb-2 text-center">Honors & Achievements</h4>
                  <div className="space-y-1 text-center">
                    {educationSkills.slice(0, 6).map((honor, idx) => (
                      <div key={idx} className="text-xs text-white">
                        {honor}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ) : (
            <div className="w-full h-48 bg-gradient-to-br from-accent-primary/20 to-accent-primary/5 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-16 h-16 text-accent-primary/50" />
            </div>
          )}

          {/* Standardized Content - Fixed Structure */}
          <div className="p-6 flex flex-col flex-1 justify-between">
            {/* Title & Institution */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-text-primary line-clamp-1">{education.institution}</h3>
              <p className="text-sm text-text-secondary mt-1 line-clamp-2">{education.degree}</p>
              <p className="text-xs text-text-tertiary mt-1">{education.year}</p>
              <p className="text-xs text-text-tertiary">{education.location}</p>
            </div>

            {/* Description */}
            {education.description && (
              <div className="text-center my-4">
                <p className="text-sm text-text-secondary line-clamp-3">{education.description}</p>
              </div>
            )}

            {/* Click Prompt */}
            <div className="text-center text-xs text-text-tertiary mt-auto">
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
            <GraduationCap className="w-5 h-5 text-accent-primary" />
            <h3 className="text-lg font-semibold text-text-primary">{education.institution}</h3>
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-accent-primary mb-1">Degree</h4>
              <p className="text-xs text-text-secondary">{education.degree}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-accent-primary mb-1">Duration</h4>
              <p className="text-xs text-text-secondary">{education.year}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-accent-primary mb-1">Location</h4>
              <p className="text-xs text-text-secondary">{education.location}</p>
            </div>

            {education.honors && education.honors.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-accent-primary mb-2">Honors & Awards</h4>
                <div className="space-y-1">
                  {education.honors.map((honor, idx) => (
                    <div key={idx} className="text-xs text-text-secondary">
                      <span className="text-accent-primary mr-1">•</span>
                      {honor}
                    </div>
                  ))}
                </div>
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
