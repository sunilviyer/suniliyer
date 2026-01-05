'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SplashScreen } from '@/components/homepage/SplashScreen';
import { WireframeHeader } from '@/components/homepage/WireframeHeader';
import { WireframeHero } from '@/components/homepage/WireframeHero';
import { BreakCard } from '@/components/homepage/BreakCard';
import { LearningPathsCarousel } from '@/components/homepage/LearningPathsCarousel';
import { PortfolioCarousel } from '@/components/homepage/PortfolioCarousel';
import { AboutCard } from '@/components/homepage/AboutCard';
import { FooterCard } from '@/components/homepage/FooterCard';
import { useGsapScrollScaleAnimations } from '@/lib/hooks/useGsapScrollScaleAnimations';

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export default function HomePage() {
  useGsapScrollScaleAnimations();

  // Force scroll to top on page load/refresh
  useEffect(() => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Immediately scroll to top
    window.scrollTo(0, 0);

    // Also ensure scroll to top after a brief delay (for any late-loading content)
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <SplashScreen />
      <WireframeHeader />

      <main className="loading-wrap">
        <motion.div
          className="loading__item"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <WireframeHero />
        </motion.div>

        <motion.div
          className="loading__item"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <BreakCard
            image="/images/breaks/learning-path-page-break.png"
            text="Learning Paths"
          />
        </motion.div>

        <motion.div
          className="loading__item"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <LearningPathsCarousel />
        </motion.div>

        <motion.div
          className="loading__item"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <BreakCard
            image="/images/breaks/portfolio-page-break.png"
            text="Portfolio"
          />
        </motion.div>

        <motion.div
          className="loading__item"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <PortfolioCarousel />
        </motion.div>

        <motion.div
          className="loading__item"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <BreakCard
            image="/images/breaks/about-me-page-break.webp"
            text="About Me"
          />
        </motion.div>

        <motion.div
          className="loading__item"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <AboutCard />
        </motion.div>

        <motion.div
          className="loading__item"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <FooterCard />
        </motion.div>
      </main>
    </>
  );
}
