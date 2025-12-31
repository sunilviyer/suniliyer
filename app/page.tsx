import { SplashScreen } from '@/components/homepage/SplashScreen';
import { WireframeHeader } from '@/components/homepage/WireframeHeader';
import { WireframeHero } from '@/components/homepage/WireframeHero';
import { BreakCard } from '@/components/homepage/BreakCard';
import { LearningPathsCarousel } from '@/components/homepage/LearningPathsCarousel';
import { PortfolioCarousel } from '@/components/homepage/PortfolioCarousel';
import { AboutCard } from '@/components/homepage/AboutCard';
import { FooterCard } from '@/components/homepage/FooterCard';
import StackCards from '@/components/animation/StackCards';

export default function HomePage() {
  return (
    <>
      <SplashScreen />
      <WireframeHeader />

      <main>
        <StackCards pin={true} scrub={true} durationMul={0.5}>
          <WireframeHero />

          <BreakCard
            image="/images/breaks/learning-paths-break.png"
            text="Learning Paths"
          />

          <LearningPathsCarousel />

          <BreakCard
            image="/images/breaks/portfolio-break.png"
            text="Portfolio"
          />

          <PortfolioCarousel />

          <BreakCard
            image="/images/breaks/about-me-page-break.png"
            text="About Me"
          />

          <AboutCard />

          <FooterCard />
        </StackCards>
      </main>
    </>
  );
}
