'use client';

import Link from 'next/link';
import { AnimatedBackground } from './AnimatedBackground';

export function Hero() {
  const scrollToPaths = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const pathsSection = document.getElementById('paths');
    if (pathsSection) {
      pathsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-ivory drop-shadow-lg">
          Master AI Governance
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-cream drop-shadow-md">
          Navigate AI compliance, ethics, and responsible deployment
          through 5 expert-curated learning paths
        </p>
        <Link
          href="#paths"
          onClick={scrollToPaths}
          className="inline-block px-8 py-4 bg-toffee text-ivory font-semibold rounded-lg hover:bg-saddle transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Start Learning
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-cream opacity-70"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
