'use client';

import { motion } from 'framer-motion';
import { TimelineItem, Role, Education, Certification } from '@/types/journey';
import RoleTimelineCard from './RoleTimelineCard';
import EducationTimelineCard from './EducationTimelineCard';
import CertificationTimelineCard from './CertificationTimelineCard';

interface TimelineCardProps {
  item: TimelineItem;
  index: number;
  isLeft: boolean;
}

export default function TimelineCard({ item, index, isLeft }: TimelineCardProps) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: isLeft ? -50 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={cardVariants}
      className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}
    >
      {item.type === 'role' && <RoleTimelineCard role={item.data as Role} />}
      {item.type === 'education' && <EducationTimelineCard education={item.data as Education} />}
      {item.type === 'certification' && <CertificationTimelineCard certification={item.data as Certification} />}
    </motion.div>
  );
}
