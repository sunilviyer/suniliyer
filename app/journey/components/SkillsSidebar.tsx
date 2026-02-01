'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { timeline } from '@/data/journey/timeline';
import { Role } from '@/types/journey';

export default function SkillsSidebar() {
  const [activeSkills, setActiveSkills] = useState<string[]>([]);
  const [title, setTitle] = useState('Skills');

  useEffect(() => {
    const handleScroll = () => {
      // Find which timeline item is currently in view
      for (const item of timeline) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if element is in the middle of viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            if (item.type === 'role') {
              const role = item.data as Role;
              setActiveSkills(role.skills);
              setTitle(`Skills - ${role.company}`);
            } else {
              setActiveSkills([]);
              setTitle('Skills');
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className="hidden lg:block sticky top-24 h-fit max-h-[calc(100vh-120px)] overflow-y-auto">
      <div className="p-6 bg-background-secondary border border-border-secondary rounded-lg">
        <h3 className="text-sm uppercase tracking-wider text-text-tertiary mb-4">{title}</h3>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSkills.join(',')}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-2"
          >
            {activeSkills.length > 0 ? (
              activeSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-1 h-1 rounded-full bg-accent-primary" />
                  <span className="text-sm text-text-secondary">{skill}</span>
                </motion.div>
              ))
            ) : (
              <p className="text-sm text-text-tertiary italic">Scroll to view skills</p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </aside>
  );
}
