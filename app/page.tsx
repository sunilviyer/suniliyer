'use client';

import { SplashScreen } from '@/components/homepage/SplashScreen';
import { WireframeHeader } from '@/components/homepage/WireframeHeader';
import { WireframeHero } from '@/components/homepage/WireframeHero';
import { BreakCard } from '@/components/homepage/BreakCard';
import { LearningPathsCarousel } from '@/components/homepage/LearningPathsCarousel';
import { PortfolioCarousel } from '@/components/homepage/PortfolioCarousel';
import { AboutCard } from '@/components/homepage/AboutCard';
import { FooterCard } from '@/components/homepage/FooterCard';
import { useGsapScrollScaleAnimations } from '@/lib/hooks/useGsapScrollScaleAnimations';
import StackCards from '@/components/animation/StackCards';

export default function HomePage() {
  useGsapScrollScaleAnimations();

  return (
    <>
      <SplashScreen />
      <WireframeHeader />

      <main className="loading-wrap">
        <StackCards stackName="homepage-stack" pin={true} scrub={true}>
          <WireframeHero />

          <BreakCard
            image="/images/heroes/future-hero.webp"
            text="Learning Paths"
          />

          <LearningPathsCarousel />

          <BreakCard
            image="/images/extra/growth-hero.webp"
            text="Portfolio"
          />

          <PortfolioCarousel />

          <BreakCard
            image="/images/heroes/about-me-page-break.webp"
            text="About Me"
          />

          <AboutCard />

          <FooterCard />
        </StackCards>
      </main>
    </>
  );
}
