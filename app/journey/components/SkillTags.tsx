'use client';

import { motion } from 'framer-motion';

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
          className="px-3 py-1.5 text-sm bg-hover-bg border border-border-secondary rounded-md text-text-secondary hover:border-border-accent hover:text-text-primary transition-all duration-200"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  );
}
