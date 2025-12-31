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
          <BreakCard
            image="/images/breaks/learning-paths-break.png"
            text="Learning Paths"
          />
        </div>

        <div className="loading__item">
          <LearningPathsCarousel />
        </div>

        <div className="loading__item">
          <BreakCard
            image="/images/breaks/portfolio-break.png"
            text="Portfolio"
          />
        </div>

        <div className="loading__item">
          <PortfolioCarousel />
        </div>

        <div className="loading__item">
          <BreakCard
            image="/images/breaks/about-me-page-break.png"
            text="About Me"
          />
        </div>

        <div className="loading__item">
          <AboutCard />
        </div>

        <div className="loading__item">
          <FooterCard />
        </div>
      </main>
    </>
  );
}
