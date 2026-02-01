'use client';

import { motion } from 'framer-motion';
import { Metric } from '@/types/journey';

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
          className="p-4 bg-hover-bg border border-border-secondary rounded-lg hover:border-border-accent transition-all duration-200 hover:transform hover:-translate-y-1"
        >
          <div className="text-2xl font-bold text-accent-primary">{metric.value}</div>
          <div className="text-sm text-text-tertiary mt-1">{metric.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
