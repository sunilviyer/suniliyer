'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useGsapScrollScaleAnimations } from '@/lib/hooks/useGsapScrollScaleAnimations';

// Temporary inline data - will be replaced with actual data fetching
const futureCards = [
  {
    id: '1',
    title: 'AGI: Hype, Hope, and Governance',
    slug: 'agi-governance',
    tldr: 'The quest for human-level AI: systems that can learn and reason across any domain',
    image: 'agi-governance.webp',
    era: 'Horizon',
    tags: ['AGI', 'Future']
  },
  {
    id: '2',
    title: 'AI Existential Risk',
    slug: 'ai-existential-risk',
    tldr: 'Long-term threats from advanced AI: Understanding catastrophic risk scenarios',
    image: 'ai-existential-risk.webp',
    era: 'Risk',
    tags: ['X-Risk', 'Safety']
  },
  {
    id: '3',
    title: 'AI and National Security',
    slug: 'ai-national-security',
    tldr: 'AI in defense and intelligence: Geopolitical implications and strategic concerns',
    image: 'ai-national-security.webp',
    era: 'Security',
    tags: ['Defense', 'Geopolitics']
  },
  {
    id: '4',
    title: 'AI Safety',
    slug: 'ai-safety',
    tldr: 'Alignment, robustness, and control: Building AI systems that remain beneficial',
    image: 'ai-safety.webp',
    era: 'Safety',
    tags: ['Alignment', 'Control']
  },
  {
    id: '5',
    title: 'Future of AI Ethics',
    slug: 'future-ai-ethics',
    tldr: 'Evolving ethical frameworks for increasingly powerful AI systems',
    image: 'future-ai-ethics.webp',
    era: 'Ethics',
    tags: ['Ethics', 'Values']
  },
  {
    id: '6',
    title: 'Future of AI Regulation',
    slug: 'future-ai-regulation',
    tldr: 'Shaping the future: emerging frameworks for global AI oversight and cooperation',
    image: 'future-ai-regulation.webp',
    era: 'Policy',
    tags: ['Regulation', 'Governance']
  },
  {
    id: '7',
    title: 'AI Governance Careers',
    slug: 'ai-governance-careers',
    tldr: 'Building a career in AI policy, ethics, and governance: Skills and pathways',
    image: 'ai-governance-careers.webp',
    era: 'Careers',
    tags: ['Careers', 'Skills']
  },
  {
    id: '8',
    title: 'Trustworthy AI: Seven Pillars',
    slug: 'trustworthy-ai',
    tldr: 'The foundational principles for building AI systems society can trust',
    image: 'trustworthy-ai.webp',
    era: 'Principles',
    tags: ['Trust', 'Framework']
  }
];

export default function NewFuturePage() {
  useGsapScrollScaleAnimations();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Set initial theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'light';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  // Save theme
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Track scroll progress for timeline indicator (centered to viewport)
  useEffect(() => {
    const handleScroll = () => {
      const timelineSection = document.querySelector('.timeline-section');
      if (!timelineSection) return;

      const rect = timelineSection.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate center of viewport relative to timeline section
      const viewportCenter = windowHeight / 2;
      const distanceFromTop = viewportCenter - sectionTop;

      // Calculate progress (0 to 1) based on viewport center position
      const progress = Math.max(0, Math.min(1, distanceFromTop / sectionHeight));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-triggered card animations
  useEffect(() => {
    const cards = document.querySelectorAll('.history-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('card-visible');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="page-wrapper">
      {/* Theme Toggle */}
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        )}
      </button>

      {/* Hero Section - PathHeadline Style */}
      <section className="inner-headline-section">
        <div className="headline-grid">
          {/* Left: Learning Paths Navigation */}
          <div className="headline-sidebar">
            <div className="headline-name">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20px"
                height="20px"
                viewBox="0 0 20 20"
              >
                <path d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2
                  c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4
                  c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2
                  c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6
                  c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4
                  c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6
                  c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z"/>
              </svg>
            </div>
            <nav className="paths-nav">
              <Link href="/history" className="path-link">
                History
              </Link>
              <Link href="/terminology" className="path-link">
                Terminology
              </Link>
              <Link href="/risk" className="path-link">
                Risk
              </Link>
              <Link href="/responsibility" className="path-link">
                Responsibility
              </Link>
              <Link href="/future" className="path-link active">
                Future
              </Link>
            </nav>
          </div>

          {/* Right: Title and Description with Background Image */}
          <div className="headline-content">
            <div className="headline-image-card">
              <Image
                src="/images/headercards/future-header.webp"
                alt="The Future of AI: Trends & Possibilities"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                style={{ objectFit: 'cover' }}
                priority
              />
              <div className="headline-overlay">
                <h1>The Future of AI: Trends & Possibilities</h1>
                <p>Exploring tomorrow: from AGI to quantum computing. Understand emerging trends, transformative technologies, and the evolving landscape of AI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          {/* Timeline Line */}
          <div className="timeline-line-wrapper">
            <div className="timeline-line" />
            {/* Pulsing Scroll Indicator */}
            <div
              className="scroll-position-indicator"
              style={{
                top: `${scrollProgress * 100}%`,
                opacity: scrollProgress > 0 && scrollProgress < 1 ? 1 : 0
              }}
            />
          </div>

          {/* History Cards */}
          <div className="history-cards">
            {futureCards.map((card, index) => (
              <article
                key={card.id}
                className={`history-card ${
                  index % 2 === 0 ? 'card-left' : 'card-right'
                }`}
              >
                <Link href={`/articles/${card.slug}`} className="card-link">
                  <div className="card-media">
                    <div className="card-image-wrapper">
                      <Image
                        src={`/images/future/${card.image}`}
                        alt={card.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 600px"
                        style={{ objectFit: 'cover' }}
                        className="card-image"
                      />
                    </div>

                    {/* Arrow Indicator - Top Corner */}
                    <div className="card-arrow">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>

                    {/* Text Overlay */}
                    <div className="card-overlay">
                      <div className="card-era">{card.era}</div>
                      <h2 className="card-title">{card.title}</h2>
                      <p className="card-tldr">{card.tldr}</p>
                      <div className="card-tags">
                        {card.tags.map((tag, i) => (
                          <span key={i} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="timeline-dot" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home Button */}
      <section className="back-to-home-section">
        <div className="container">
          <Link href="/" className="back-to-home-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 10H5M5 10L10 15M5 10L10 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>
      </section>


      <style jsx>{`
        .page-wrapper {
          min-height: 100vh;
          background: var(--bg-primary);
          color: var(--text-primary);
        }

        /* Theme Toggle */
        .theme-toggle {
          position: fixed;
          top: 30px;
          right: 30px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--card-bg);
          border: 2px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 1000;
          transition: all 0.3s ease;
          color: var(--text-primary);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .theme-toggle:hover {
          transform: scale(1.1) rotate(15deg);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
          border-color: var(--accent-color);
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Loading Animations */
        .loading__item,
        .loading__fade {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }

        .loading__item:nth-child(1) { animation-delay: 0.1s; }
        .loading__item:nth-child(2) { animation-delay: 0.2s; }
        .loading__item:nth-child(3) { animation-delay: 0.3s; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Hero Section - PathHeadline Style */
        .inner-headline-section {
          padding: 160px 60px 80px;
          max-width: 1920px;
          margin: 0 auto;
        }

        .headline-grid {
          display: grid;
          grid-template-columns: 2fr 10fr;
          gap: 60px;
        }

        .headline-sidebar {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .headline-name {
          display: flex;
          align-items: flex-start;
          gap: 24px;
          font-size: 48px;
          color: #414833;
          text-transform: uppercase;
          letter-spacing: 4px;
          font-weight: 700;
        }

        [data-theme='dark'] .headline-name {
          color: #f5f5f0;
        }

        .headline-name svg {
          width: 60px;
          height: 60px;
          fill: #414833;
          flex-shrink: 0;
          margin-top: 12px;
        }

        [data-theme='dark'] .headline-name svg {
          fill: #f5f5f0;
        }

        .paths-nav {
          display: flex;
          flex-direction: column;
          gap: 28px;
          margin-top: 60px;
        }

        .path-link {
          font-size: 36px !important;
          color: #414833 !important;
          text-decoration: none !important;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
          padding: 12px 0 !important;
          border-left: 6px solid transparent !important;
          padding-left: 32px !important;
          font-weight: 500 !important;
          line-height: 1.2 !important;
          text-shadow: none !important;
        }

        [data-theme='dark'] .path-link {
          color: #f5f5f0 !important;
        }

        .path-link:hover {
          color: #414833 !important;
          border-left-color: #414833 !important;
          padding-left: 40px !important;
          font-weight: 600 !important;
          transform: translateX(4px) !important;
          text-shadow: 0 0 12px rgba(65, 72, 51, 0.4), 0 0 24px rgba(65, 72, 51, 0.2) !important;
        }

        [data-theme='dark'] .path-link:hover {
          color: #f5f5f0 !important;
          border-left-color: #f5f5f0 !important;
          text-shadow: 0 0 12px rgba(65, 72, 51, 0.4), 0 0 24px rgba(65, 72, 51, 0.2) !important;
        }

        .path-link.active {
          color: #414833 !important;
          font-weight: 700 !important;
          border-left-color: #414833 !important;
        }

        [data-theme='dark'] .path-link.active {
          color: #f5f5f0 !important;
          border-left-color: #f5f5f0 !important;
        }

        .headline-image-card {
          position: relative;
          width: 100%;
          height: 600px;
          border-radius: 24px;
          overflow: hidden;
          background: var(--bg-secondary);
        }

        .headline-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 60px;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.5) 100%
          );
        }

        [data-theme='dark'] .headline-overlay {
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 0.6) 100%
          );
        }

        .headline-overlay h1 {
          font-size: 96px;
          font-weight: 600;
          line-height: 1.1;
          color: white;
          margin-bottom: 32px;
          font-family: var(--font-funnel-display);
          text-shadow: 0 4px 16px rgba(0, 0, 0, 0.8);
        }

        .headline-overlay p {
          font-size: 24px;
          line-height: 1.6;
          color: white;
          max-width: 800px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
        }

        /* Timeline Section */
        .timeline-section {
          padding: 100px 0 150px;
          position: relative;
        }

        .timeline-line-wrapper {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          transform: translateX(-50%);
          pointer-events: none;
        }

        .timeline-line {
          width: 3px;
          height: 100%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            var(--border-color) 10%,
            var(--border-color) 90%,
            transparent 100%
          );
        }

        /* Scroll Position Indicator */
        .scroll-position-indicator {
          position: absolute;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          width: 18px;
          height: 18px;
          background: #414833;
          border-radius: 50%;
          border: 3px solid var(--bg-primary);
          box-shadow: 0 0 0 6px rgba(65, 72, 51, 0.3), 0 0 25px rgba(65, 72, 51, 0.5);
          animation: pulseIndicator 2s ease-in-out infinite;
          z-index: 20;
          transition: top 0.3s ease-out, opacity 0.3s ease;
        }

        [data-theme='dark'] .scroll-position-indicator {
          background: #f5f5f0;
          box-shadow: 0 0 0 6px rgba(65, 72, 51, 0.3), 0 0 25px rgba(65, 72, 51, 0.5);
        }

        @keyframes pulseIndicator {
          0%, 100% {
            transform: translateX(-50%) translateY(-50%) scale(1);
            box-shadow: 0 0 0 6px rgba(65, 72, 51, 0.3), 0 0 25px rgba(65, 72, 51, 0.5);
          }
          50% {
            transform: translateX(-50%) translateY(-50%) scale(1.4);
            box-shadow: 0 0 0 10px rgba(65, 72, 51, 0.2), 0 0 35px rgba(65, 72, 51, 0.7);
          }
        }

        [data-theme='dark'] @keyframes pulseIndicator {
          0%, 100% {
            box-shadow: 0 0 0 6px rgba(65, 72, 51, 0.3), 0 0 25px rgba(65, 72, 51, 0.5);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(65, 72, 51, 0.2), 0 0 35px rgba(65, 72, 51, 0.7);
          }
        }

        /* History Cards */
        .history-cards {
          display: flex;
          flex-direction: column;
          gap: 120px;
          position: relative;
        }

        .history-card {
          position: relative;
          width: 100%;
          max-width: 702px;
          opacity: 0;
          transform: translateY(60px) scale(0.95);
          filter: blur(4px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .history-card.card-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0);
        }

        .history-card.card-left {
          margin-right: auto;
          margin-left: 0;
          padding-right: 80px;
        }

        .history-card.card-right {
          margin-left: auto;
          margin-right: 0;
          padding-left: 80px;
        }

        .card-link {
          display: block;
          text-decoration: none;
          color: inherit;
        }

        .card-media {
          position: relative;
          width: 100%;
          padding-bottom: 66.67%; /* 3:2 aspect ratio */
          border-radius: 24px;
          overflow: hidden;
          background: var(--card-bg);
          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.15),
            0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-link:hover .card-media {
          transform: translateY(-8px);
          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.2),
            0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .card-image-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .card-image {
          transition: transform 0.6s ease;
        }

        .card-link:hover .card-image {
          transform: scale(1.05);
        }

        /* Text Overlay */
        .card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 40px 32px 32px;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 0, 0, 0.5) 20%,
            rgba(0, 0, 0, 0.85) 50%,
            rgba(0, 0, 0, 0.95) 100%
          );
          z-index: 2;
          transition: all 0.3s ease;
        }

        .card-link:hover .card-overlay {
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 0, 0, 0.6) 20%,
            rgba(0, 0, 0, 0.9) 50%,
            rgba(0, 0, 0, 0.98) 100%
          );
        }

        .card-era {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--accent-color);
          background: rgba(51, 61, 41, 0.3);
          padding: 6px 12px;
          border-radius: 20px;
          margin-bottom: 12px;
          backdrop-filter: blur(10px);
        }

        .card-title {
          font-family: var(--font-funnel);
          font-size: 32px;
          font-weight: 700;
          line-height: 1.2;
          margin: 0 0 12px 0;
          color: #ffffff;
        }

        .card-tldr {
          font-size: 16px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 16px 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tag {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 4px 10px;
          border-radius: 12px;
          transition: all 0.2s ease;
        }

        .card-link:hover .tag {
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.5);
          background: rgba(255, 255, 255, 0.1);
        }

        /* Arrow Indicator */
        .card-arrow {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          animation: arrowPulse 2.5s ease-in-out infinite;
          z-index: 3;
        }

        @keyframes arrowPulse {
          0%, 100% {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), 0 0 0 0 rgba(65, 72, 51, 0.4);
          }
          50% {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), 0 0 20px rgba(65, 72, 51, 0.6);
          }
        }

        [data-theme='dark'] @keyframes arrowPulse {
          0%, 100% {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), 0 0 0 0 rgba(65, 72, 51, 0.4);
          }
          50% {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), 0 0 20px rgba(65, 72, 51, 0.6);
          }
        }

        .card-link:hover .card-arrow {
          background: rgba(0, 0, 0, 0.9);
          box-shadow: 0 0 30px rgba(65, 72, 51, 0.8), 0 0 50px rgba(65, 72, 51, 0.5);
          transform: scale(1.1);
          animation: none;
        }

        [data-theme='dark'] .card-link:hover .card-arrow {
          box-shadow: 0 0 30px rgba(65, 72, 51, 0.8), 0 0 50px rgba(65, 72, 51, 0.5);
        }

        .card-arrow svg {
          transform: rotate(-45deg);
          transition: transform 0.3s ease;
        }

        .card-link:hover .card-arrow svg {
          transform: rotate(-45deg) translate(3px, -3px);
        }

        /* Timeline Dot */
        .timeline-dot {
          position: absolute;
          top: 50%;
          width: 20px;
          height: 20px;
          background: var(--accent-color);
          border: 4px solid var(--bg-primary);
          border-radius: 50%;
          transform: translateY(-50%);
          box-shadow: 0 0 0 8px var(--card-bg);
          z-index: 10;
          transition: all 0.3s ease;
        }

        .card-left .timeline-dot {
          right: -10px;
        }

        .card-right .timeline-dot {
          left: -10px;
        }

        .card-link:hover .timeline-dot {
          transform: translateY(-50%) scale(1.3);
          box-shadow: 0 0 0 12px var(--card-bg), 0 0 20px var(--accent-color);
        }

        /* Back to Home Section */
        .back-to-home-section {
          padding: 80px 0 100px;
          background: var(--bg-primary);
        }

        .back-to-home-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 20px 40px;
          background: var(--card-bg);
          border: 2px solid var(--border-color);
          border-radius: 50px;
          text-decoration: none;
          color: var(--text-primary);
          font-size: 18px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          margin: 0 auto;
          display: flex;
          justify-content: center;
          max-width: 280px;
        }

        .back-to-home-button:hover {
          background: #414833;
          border-color: #414833;
          color: #f5f5f0;
          transform: translateX(-8px) scale(1.05);
          box-shadow: 0 8px 24px rgba(65, 72, 51, 0.3);
        }

        [data-theme='dark'] .back-to-home-button:hover {
          background: #f5f5f0;
          border-color: #f5f5f0;
          color: #414833;
        }

        .back-to-home-button svg {
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .back-to-home-button:hover svg {
          transform: translateX(-6px);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .headline-image-card {
            height: 500px;
          }

          .headline-overlay {
            padding: 40px;
          }

          .headline-overlay h1 {
            font-size: 64px;
          }

          .headline-name {
            font-size: 36px;
          }

          .headline-name svg {
            width: 48px;
            height: 48px;
          }

          .path-link {
            font-size: 27px !important;
          }

          .headline-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .history-card.card-left,
          .history-card.card-right {
            margin-left: 60px;
            margin-right: 0;
            padding-left: 0;
            padding-right: 0;
          }

          .timeline-line-wrapper {
            left: 30px;
          }

          .timeline-dot {
            left: -10px !important;
            right: auto !important;
          }
        }

        @media (max-width: 768px) {
          .inner-headline-section {
            padding: 140px 20px 60px;
          }

          .headline-image-card {
            height: 400px;
          }

          .headline-overlay {
            padding: 30px 24px;
          }

          .headline-overlay h1 {
            font-size: 48px;
          }

          .headline-overlay p {
            font-size: 18px;
          }

          .headline-sidebar {
            gap: 16px;
          }

          .headline-name {
            font-size: 28px;
            gap: 16px;
          }

          .headline-name svg {
            width: 36px;
            height: 36px;
          }

          .paths-nav {
            gap: 16px;
            margin-top: 30px;
          }

          .path-link {
            font-size: 24px !important;
            padding-left: 20px !important;
            border-left-width: 4px !important;
          }

          .path-link:hover {
            padding-left: 24px !important;
            transform: translateX(2px) !important;
          }

          .container {
            padding: 0 20px;
          }

          .timeline-section {
            padding: 60px 0 100px;
          }

          .history-cards {
            gap: 80px;
          }

          .history-card {
            max-width: 100%;
            margin-left: 40px !important;
          }

          .timeline-line-wrapper {
            left: 20px;
          }

          .card-title {
            font-size: 24px;
          }

          .card-tldr {
            font-size: 14px;
          }

          .back-to-home-section {
            padding: 60px 0 80px;
          }

          .back-to-home-button {
            padding: 16px 32px;
            font-size: 16px;
            max-width: 240px;
          }
        }
      `}</style>
    </div>
  );
}
