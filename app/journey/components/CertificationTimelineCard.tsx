'use client';

import { useState } from 'react';
import { Certification } from '@/types/journey';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CertificationTimelineCardProps {
  certification: Certification;
}

export default function CertificationTimelineCard({ certification }: CertificationTimelineCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const certificationSkills = certification.skills || [];

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
          {certification.logoUrl ? (
            <div className="relative w-full h-48 bg-hover-bg flex-shrink-0">
              <Image
                src={certification.logoUrl}
                alt={`${certification.issuer}`}
                fill
                className="object-cover"
              />
              {/* Skills Overlay on Hover */}
              {isHovered && !isFlipped && certificationSkills.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/80 backdrop-blur-sm p-4 flex flex-col justify-center"
                >
                  <h4 className="text-xs font-semibold text-accent-primary mb-2 text-center">Key Skills</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {certificationSkills.slice(0, 6).map((skill, idx) => (
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
          ) : (
            <div className="w-full h-48 bg-gradient-to-br from-accent-primary/20 to-accent-primary/5 flex items-center justify-center flex-shrink-0">
              <Award className="w-16 h-16 text-accent-primary/50" />
            </div>
          )}

          {/* Standardized Content - Fixed Structure */}
          <div className="p-6 flex flex-col flex-1 justify-between">
            {/* Title & Issuer */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-text-primary line-clamp-1">{certification.issuer}</h3>
              <p className="text-sm text-text-secondary mt-1 line-clamp-2">{certification.name}</p>
              <p className="text-xs text-text-tertiary mt-1">{certification.year}</p>
            </div>

            {/* Description */}
            {certification.description && (
              <div className="text-center my-4">
                <p className="text-sm text-text-secondary line-clamp-3">{certification.description}</p>
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
            <Award className="w-5 h-5 text-accent-primary" />
            <h3 className="text-lg font-semibold text-text-primary">{certification.issuer}</h3>
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-accent-primary mb-1">Certification</h4>
              <p className="text-xs text-text-secondary">{certification.name}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-accent-primary mb-1">Date Obtained</h4>
              <p className="text-xs text-text-secondary">{certification.year}</p>
            </div>

            {certification.description && (
              <div>
                <h4 className="text-sm font-semibold text-accent-primary mb-1">Description</h4>
                <p className="text-xs text-text-secondary leading-relaxed">{certification.description}</p>
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
