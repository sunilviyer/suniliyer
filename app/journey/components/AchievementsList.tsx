'use client';

import { motion } from 'framer-motion';
import { Achievement } from '@/types/journey';
import HighlightedText from './HighlightedText';

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
          className="p-4 bg-hover-bg rounded-lg border-l-3 border-l-accent-primary"
        >
          <h5 className="flex items-center gap-2 text-text-primary font-medium">
            <span className="text-accent-primary">▸</span>
            {achievement.title}
          </h5>
          <p className="text-text-secondary mt-2 leading-relaxed">
            <HighlightedText text={achievement.description} keywords={achievement.keywords} />
          </p>
        </motion.div>
      ))}
    </div>
  );
}
