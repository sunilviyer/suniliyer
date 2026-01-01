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
        <div className="loading__item">
          <WireframeHero />
        </div>

        <div className="loading__item">
          <StackCards stackName="learning-paths-stack">
            <BreakCard
              image="/images/heroes/future-hero.webp"
              text="Learning Paths"
            />
            <LearningPathsCarousel />
          </StackCards>
        </div>

        <div className="loading__item">
          <StackCards stackName="portfolio-stack">
            <BreakCard
              image="/images/extra/growth-hero.webp"
              text="Portfolio"
            />
            <PortfolioCarousel />
          </StackCards>
        </div>

        <div className="loading__item">
          <StackCards stackName="about-stack">
            <BreakCard
              image="/images/heroes/about-me-page-break.webp"
              text="About Me"
            />
            <AboutCard />
          </StackCards>
        </div>

        <div className="loading__item">
          <FooterCard />
        </div>
      </main>
    </>
  );
}
