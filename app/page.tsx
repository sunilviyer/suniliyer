'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { tickerWords } from '@/lib/ticker-words';
import { learningPathsData } from '@/lib/learning-paths-data';
import { portfolioData } from '@/lib/portfolio-data';
import { useGsapScrollScaleAnimations } from '@/lib/hooks/useGsapScrollScaleAnimations';
import { SplashScreen } from '@/components/homepage/SplashScreen';
import { InitialsPhotoReveal } from '@/components/homepage/InitialsPhotoReveal';

export default function HomePage() {
  useGsapScrollScaleAnimations();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const [currentPortfolioIndex, setCurrentPortfolioIndex] = useState(0);
  const [isPathTransitioning, setIsPathTransitioning] = useState(false);
  const [isPortfolioTransitioning, setIsPortfolioTransitioning] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Set initial theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'light';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Word ticker animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % tickerWords.length);
        setIsAnimating(false);
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handlePathNext = useCallback(() => {
    if (isPathTransitioning) return;
    setIsPathTransitioning(true);
    setCurrentPathIndex((prev) => (prev + 1) % learningPathsData.length);
    setTimeout(() => setIsPathTransitioning(false), 600);
  }, [isPathTransitioning]);

  const handlePathPrev = useCallback(() => {
    if (isPathTransitioning) return;
    setIsPathTransitioning(true);
    setCurrentPathIndex((prev) => (prev - 1 + learningPathsData.length) % learningPathsData.length);
    setTimeout(() => setIsPathTransitioning(false), 600);
  }, [isPathTransitioning]);

  const handlePortfolioNext = useCallback(() => {
    if (isPortfolioTransitioning) return;
    setIsPortfolioTransitioning(true);
    setCurrentPortfolioIndex((prev) => (prev + 1) % portfolioData.length);
    setTimeout(() => setIsPortfolioTransitioning(false), 600);
  }, [isPortfolioTransitioning]);

  const handlePortfolioPrev = useCallback(() => {
    if (isPortfolioTransitioning) return;
    setIsPortfolioTransitioning(true);
    setCurrentPortfolioIndex((prev) => (prev - 1 + portfolioData.length) % portfolioData.length);
    setTimeout(() => setIsPortfolioTransitioning(false), 600);
  }, [isPortfolioTransitioning]);

  // Auto-rotate learning paths
  useEffect(() => {
    const timer = setInterval(() => {
      handlePathNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [handlePathNext]);

  // Auto-rotate portfolio
  useEffect(() => {
    const timer = setInterval(() => {
      handlePortfolioNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [handlePortfolioNext]);

  const getPathPosition = (index: number) => {
    const diff = index - currentPathIndex;
    const total = learningPathsData.length;
    let normalizedDiff = diff;

    if (diff > total / 2) normalizedDiff = diff - total;
    else if (diff < -total / 2) normalizedDiff = diff + total;

    if (normalizedDiff === 0) return 'center';
    if (normalizedDiff === -1) return 'left';
    if (normalizedDiff === 1) return 'right';
    return 'hidden';
  };

  const getPortfolioPosition = (index: number) => {
    const diff = index - currentPortfolioIndex;
    const total = portfolioData.length;
    let normalizedDiff = diff;

    if (diff > total / 2) normalizedDiff = diff - total;
    else if (diff < -total / 2) normalizedDiff = diff + total;

    if (normalizedDiff === 0) return 'center';
    if (normalizedDiff === -1) return 'left';
    if (normalizedDiff === 1) return 'right';
    return 'hidden';
  };

  return (
    <>
      <SplashScreen />
      <div className="page-wrapper">
        {/* Theme Toggle Button */}
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

      {/* Hero Section */}
      <section className="hero-section">
        {/* Hero Background Card */}
        <div className="hero-background-card"></div>
        <div className="container">
          <div className="hero-content loading-wrap">
            <div className="hero-title-block loading__item">
              <h1 className="hero-title">
                <span className="title-line">
                  <span className="word-vibe">Vibe</span>
                  <span className="comma">,</span>
                </span>
                <span className="title-line ticker-line">
                  <span className="ticker-wrapper">
                    <span className={`ticker-word ${isAnimating ? 'exit' : 'enter'}`}>
                      {tickerWords[currentWordIndex]}
                    </span>
                  </span>
                  <span className="word-ai">AI</span>
                </span>
                <span className="title-line">
                  <span className="word-plus">+ a little me</span>
                </span>
              </h1>
            </div>

            <div className="hero-meta loading__fade">
              <p className="hero-subtitle">
                Results-driven leader specializing in AI adoption, customer success, and enterprise digital transformation
              </p>
            </div>
          </div>
        </div>

        <div className="hero-scroll-wrapper">
          <a href="#learning-paths" className="scroll-link">
            <span className="scroll-text">Scroll for more</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4V16M10 16L4 10M10 16L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Break Card 1: Timeline - Above Learning Paths */}
      <section className="break-card-section first-break-card">
        <div className="card-container">
          <div className="card break-card break-card-timeline scroll-card-animate">
            <div className="break-card-overlay" />
            <h2 className="break-card-title">Learning Paths</h2>
          </div>
        </div>
      </section>

      {/* Learning Paths Section with Carousel */}
      <section id="learning-paths" className="section learning-paths-section" style={{position: 'relative'}}>
        <div className="container">
          <div className="section-header">
            <div className="section-label loading__item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z"/>
              </svg>
              <span>Learning Paths</span>
            </div>
            <h2 className="section-title loading__item">
              Explore curated journeys
            </h2>
          </div>

          <div className="carousel-wrapper">
            <button
              className="carousel-nav carousel-nav-prev"
              onClick={handlePathPrev}
              aria-label="Previous learning path"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="paths-carousel">
              {learningPathsData.map((path, index) => {
                const position = getPathPosition(index);

                return (
                  <div
                    key={path.id}
                    className={`carousel-item path-item ${position}`}
                  >
                    <Link href={`/${path.slug}`} className="path-link">
                      <div className="path-media">
                        <div className="path-image-wrapper">
                          <Image
                            src={path.image}
                            alt={path.title}
                            fill
                            sizes="600px"
                            style={{ objectFit: 'cover' }}
                            className="path-image"
                          />
                        </div>
                        <div className="path-content">
                          <h3 className="path-title">{path.title}</h3>
                          <p className="path-description">{path.description}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>

            <button
              className="carousel-nav carousel-nav-next"
              onClick={handlePathNext}
              aria-label="Next learning path"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="carousel-dots">
            {learningPathsData.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentPathIndex ? 'active' : ''}`}
                onClick={() => {
                  if (!isPathTransitioning) {
                    setIsPathTransitioning(true);
                    setCurrentPathIndex(index);
                    setTimeout(() => setIsPathTransitioning(false), 600);
                  }
                }}
                aria-label={`Go to learning path ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="section-scroll-indicator">
          <div className="scroll-indicator-line" />
          <span className="scroll-indicator-text">Scroll</span>
        </div>
      </section>

      {/* Break Card 2: Portfolio - Above Portfolio */}
      <section className="break-card-section">
        <div className="card-container">
          <div className="card break-card break-card-portfolio scroll-card-animate">
            <div className="break-card-overlay" />
            <h2 className="break-card-title">Portfolio</h2>
          </div>
        </div>
      </section>

      {/* Portfolio Section with Carousel */}
      <section className="section portfolio-section" style={{position: 'relative'}}>
        <div className="container">
          <div className="section-header">
            <div className="section-label loading__item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z"/>
              </svg>
              <span>Portfolio</span>
            </div>
            <h2 className="section-title loading__item">
              Real-world projects
            </h2>
          </div>

          <div className="carousel-wrapper">
            <button
              className="carousel-nav carousel-nav-prev"
              onClick={handlePortfolioPrev}
              aria-label="Previous portfolio item"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="portfolio-carousel">
              {portfolioData.map((item, index) => {
                const position = getPortfolioPosition(index);

                return (
                  <div
                    key={item.id}
                    className={`carousel-item portfolio-item ${position}`}
                  >
                    <Link href={item.link} className="portfolio-link">
                      <div className="portfolio-media">
                        <div className="portfolio-image-wrapper">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="600px"
                            style={{ objectFit: 'cover' }}
                            className="portfolio-image"
                          />
                        </div>
                        <div className="portfolio-content">
                          <h3 className="portfolio-title">{item.title}</h3>
                          <p className="portfolio-description">{item.description}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>

            <button
              className="carousel-nav carousel-nav-next"
              onClick={handlePortfolioNext}
              aria-label="Next portfolio item"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="carousel-dots">
            {portfolioData.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentPortfolioIndex ? 'active' : ''}`}
                onClick={() => {
                  if (!isPortfolioTransitioning) {
                    setIsPortfolioTransitioning(true);
                    setCurrentPortfolioIndex(index);
                    setTimeout(() => setIsPortfolioTransitioning(false), 600);
                  }
                }}
                aria-label={`Go to portfolio item ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="section-scroll-indicator">
          <div className="scroll-indicator-line" />
          <span className="scroll-indicator-text">Scroll</span>
        </div>
      </section>

      {/* Break Card 3: About Me - Above About */}
      <section className="break-card-section">
        <div className="card-container">
          <div className="card break-card break-card-about scroll-card-animate">
            <div className="break-card-overlay" />
            <h2 className="break-card-title">About Me</h2>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section" style={{position: 'relative'}}>
        <div className="container">
          <div className="section-header">
            <div className="section-label loading__item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z"/>
              </svg>
              <span>About Me</span>
            </div>
          </div>

          <div className="about-grid loading__item">
            <div className="about-image-col">
              <Link href="/journey" className="about-image-link">
                <div className="about-image-wrapper">
                  <InitialsPhotoReveal
                    photoSrc="/images/Sunil.jpg"
                    initials="SVI"
                  />
                </div>
              </Link>
            </div>

            <div className="about-text-col">
              <div className="about-heading-wrapper">
                <h3 className="about-heading">A little about me</h3>
                {/* Journey Link - Top Right */}
                <Link href="/journey" className="journey-arrow-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </Link>
              </div>
              <p className="about-paragraph">
                I&apos;m a results-driven leader specializing in AI adoption, customer success, and
                enterprise digital transformation. With a proven track record implementing AI-driven
                engagement models, optimizing data analytics, and leading cross-functional teams, I drive
                revenue growth, operational efficiency, and long-term client retention.
              </p>
              <p className="about-paragraph">
                Currently serving as Senior Manager at Shift Technology, I&apos;ve fostered long-term
                enterprise relationships while implementing data-driven engagement models that maintain
                100% client retention and drive significant growth. Previously at Ernst & Young, I oversaw
                $30M+ in client engagements focused on strategy implementation, process improvement, and
                technology transformation.
              </p>

              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-value">100%</div>
                  <div className="stat-label">Client Retention</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">$30M+</div>
                  <div className="stat-label">Engagements</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">10+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="section-scroll-indicator">
          <div className="scroll-indicator-line" />
          <span className="scroll-indicator-text">Scroll</span>
        </div>
      </section>

      {/* Break Card 4: Contact - Above Contact */}
      <section className="break-card-section">
        <div className="card-container">
          <div className="card break-card break-card-contact scroll-card-animate">
            <div className="break-card-overlay" />
            <h2 className="break-card-title">Get In Touch</h2>
          </div>
        </div>
      </section>

      {/* Contact & Credits Section */}
      <section className="section contact-section" style={{position: 'relative'}}>
        <div className="container">
          <div className="section-header">
            <div className="section-label loading__item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z"/>
              </svg>
              <span>Contact & Connect</span>
            </div>
          </div>

          <div className="contact-grid loading__item">
            <div className="contact-info">
              <h3 className="contact-heading">Let&apos;s Connect</h3>
              <p className="contact-paragraph">
                I&apos;m always interested in hearing about new projects, collaborations,
                or just connecting with fellow AI enthusiasts and technology leaders.
              </p>

              <div className="contact-links">
                <a
                  href="https://www.linkedin.com/in/sunilviyer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <div className="link-icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className="link-content">
                    <span className="link-label">Email</span>
                    <span className="link-text">Connect via LinkedIn</span>
                  </div>
                  <div className="link-arrow">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 15L15 5M15 5H5M15 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/sunilviyer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <div className="link-icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div className="link-content">
                    <span className="link-label">LinkedIn</span>
                    <span className="link-text">linkedin.com/in/sunilviyer</span>
                  </div>
                  <div className="link-arrow">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 15L15 5M15 5H5M15 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>

                <a
                  href="https://github.com/sunilviyer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <div className="link-icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="link-content">
                    <span className="link-label">GitHub</span>
                    <span className="link-text">github.com/sunilviyer</span>
                  </div>
                  <div className="link-arrow">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 15L15 5M15 5H5M15 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            <div className="credits-section">
              <h4 className="credits-heading">Credits</h4>
              <p className="credits-intro">
                This website was built with the help of amazing tools and inspiration from talented creators:
              </p>

              <div className="credits-list">
                <div className="credit-item">
                  <span className="credit-label">AI Assistant</span>
                  <span className="credit-value">Google Nano Banana</span>
                </div>
                <div className="credit-item">
                  <span className="credit-label">Development Tool</span>
                  <span className="credit-value">Claude Code</span>
                </div>
                <div className="credit-item">
                  <span className="credit-label">Methodology</span>
                  <span className="credit-value">BMAD-Method</span>
                </div>
                <div className="credit-item">
                  <span className="credit-label">Design Inspiration</span>
                  <span className="credit-value">Rayo Template</span>
                </div>
                <div className="credit-item">
                  <span className="credit-label">Framework</span>
                  <span className="credit-value">Next.js & TypeScript</span>
                </div>
                <div className="credit-item">
                  <span className="credit-label">Animations</span>
                  <span className="credit-value">GSAP & Framer Motion</span>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright">
            © 2026 Sunil Iyer. All rights reserved.
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-wrapper {
          min-height: 100vh;
          background: var(--bg-primary);
          color: var(--text-primary);
        }

        /* Theme Toggle Button */
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

        .theme-toggle svg {
          transition: transform 0.3s ease;
        }

        .theme-toggle:hover svg {
          transform: scale(1.1);
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Loading Animations */
        .loading-wrap {
          position: relative;
        }

        .loading__item,
        .loading__fade {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }

        .loading__item:nth-child(1) { animation-delay: 0.1s; }
        .loading__item:nth-child(2) { animation-delay: 0.2s; }
        .loading__item:nth-child(3) { animation-delay: 0.3s; }
        .loading__item:nth-child(4) { animation-delay: 0.4s; }

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

        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 120px 0 120px;
          position: relative;
        }

        /* Hero Background Card - Matches break card sizing exactly */
        .hero-background-card {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: calc(100% - 40px);
          min-height: 600px;
          background-image: url('/images/breaks/vibe-background.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          border-radius: 60px 60px 24px 24px;
          box-shadow:
            0 35px 90px rgba(0, 0, 0, 0.3),
            0 18px 45px rgba(51, 61, 41, 0.35),
            inset 0 2px 4px rgba(255, 255, 255, 0.12);
          z-index: 0;
          opacity: 0.6;
        }

        .hero-section .container {
          position: relative;
          z-index: 2;
        }

        .hero-content {
          text-align: center;
          max-width: 1000px;
          margin: 0 auto;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-title {
          font-family: var(--font-funnel);
          font-size: clamp(60px, 10vw, 140px);
          font-weight: 700;
          line-height: 1.1;
          margin: 0 0 40px 0;
          letter-spacing: -0.02em;
        }

        .title-line {
          display: block;
          margin: 10px 0;
        }

        .ticker-line {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(20px, 3vw, 40px);
          flex-wrap: wrap;
        }

        .word-vibe {
          color: var(--text-primary);
        }

        .comma {
          color: var(--text-primary);
          opacity: 0.7;
        }

        .ticker-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: clamp(250px, 25vw, 400px);
          height: clamp(60px, 8vw, 100px);
          background: var(--card-bg);
          border: 2px solid var(--border-color);
          border-radius: 100px;
          padding: 0 40px;
          overflow: hidden;
        }

        .ticker-word {
          position: absolute;
          font-size: clamp(32px, 5vw, 60px);
          font-weight: 600;
          color: var(--accent-color);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .ticker-word.exit {
          transform: translateY(-100%);
          opacity: 0;
        }

        .ticker-word.enter {
          transform: translateY(0);
          opacity: 1;
        }

        .word-ai {
          color: var(--text-primary);
        }

        .word-plus {
          color: var(--text-secondary);
          font-weight: 400;
        }

        .hero-meta {
          margin-bottom: 60px;
        }

        .hero-subtitle {
          font-size: clamp(16px, 2vw, 20px);
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto;
        }

        .hero-scroll-wrapper {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }

        .scroll-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: var(--text-secondary);
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: color 0.3s ease;
        }

        .scroll-link:hover {
          color: var(--text-primary);
        }

        .scroll-link svg {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }

        /* Scroll Indicator - Appears at section ends */
        .section-scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }

        .section-scroll-indicator:hover {
          opacity: 1;
        }

        .scroll-indicator-line {
          width: 2px;
          height: 40px;
          background: linear-gradient(
            to bottom,
            transparent,
            var(--text-secondary)
          );
          animation: scrollPulse 2s infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }

        .scroll-indicator-text {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-secondary);
        }

        /* Break Card Section */
        .break-card-section {
          padding: 0;
          margin: 0 0 120px 0;
          perspective: 1500px;
          transform-style: preserve-3d;
        }

        /* First break card needs more space from hero */
        .break-card-section.first-break-card {
          margin-top: 200px;
        }

        .break-card-section .card-container {
          margin-bottom: 0;
          transform-style: preserve-3d;
          padding: 0 20px; /* Edge padding */
        }

        /* Curved card that slides up */
        .break-card {
          position: relative;
          min-height: 600px;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;

          /* Curved corners - more curve on top for "sliding up" effect */
          border-radius: 60px 60px 24px 24px;

          /* Removed border, enhanced shadows for depth */
          box-shadow:
            0 35px 90px rgba(0, 0, 0, 0.3),
            0 18px 45px rgba(51, 61, 41, 0.35),
            inset 0 2px 4px rgba(255, 255, 255, 0.12);

          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, box-shadow;
        }

        /* Initial state for scroll animation - blur effect for focus transition */
        .scroll-card-animate {
          opacity: 0;
          transform: translateY(100px) scale(0.95);
          filter: blur(8px);
        }

        .break-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow:
            0 45px 110px rgba(0, 0, 0, 0.4),
            0 22px 55px rgba(51, 61, 41, 0.45),
            inset 0 2px 6px rgba(255, 255, 255, 0.18);
        }

        .break-card-timeline {
          background-image: url('/images/breaks/learning-path-page-break.png');
        }

        .break-card-portfolio {
          background-image: url('/images/breaks/portfolio-page-break.png');
        }

        .break-card-about {
          background-image: url('/images/breaks/about-me-page-break.webp');
        }

        .break-card-contact {
          background-image: url('/images/breaks/contact-page-break.png');
        }

        .break-card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 0.3) 50%,
            rgba(0, 0, 0, 0.4) 100%
          );
          z-index: 1;
          transition: background 0.5s ease;
        }

        .break-card:hover .break-card-overlay {
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0.3) 100%
          );
        }

        .break-card-title {
          position: relative;
          z-index: 2;
          font-family: var(--font-funnel);
          font-size: clamp(48px, 8vw, 96px);
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          text-shadow:
            0 4px 12px rgba(0, 0, 0, 0.5),
            0 2px 4px rgba(0, 0, 0, 0.3);
          margin: 0;
          padding: 40px;
          letter-spacing: -0.02em;
          transition: all 0.3s ease;
        }

        .break-card:hover .break-card-title {
          transform: scale(1.05);
          text-shadow:
            0 6px 16px rgba(0, 0, 0, 0.6),
            0 3px 6px rgba(0, 0, 0, 0.4);
        }

        /* Section Styles */
        .section {
          padding: 120px 0;
        }

        .section-header {
          margin-bottom: 80px;
        }

        .section-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        .section-label svg {
          width: 20px;
          height: 20px;
          opacity: 0.6;
        }

        .section-title {
          font-family: var(--font-funnel);
          font-size: clamp(48px, 6vw, 80px);
          font-weight: 700;
          line-height: 1.2;
          color: var(--text-primary);
          margin: 0;
        }

        /* Carousel Wrapper */
        .carousel-wrapper {
          position: relative;
          margin-bottom: 50px;
        }

        .carousel-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border: 2px solid var(--border-color);
          background: var(--card-bg);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
          color: var(--text-primary);
        }

        .carousel-nav:hover {
          background: var(--bg-primary);
          border-color: var(--accent-color);
          transform: translateY(-50%) scale(1.1);
        }

        .carousel-nav-prev {
          left: -25px;
        }

        .carousel-nav-next {
          right: -25px;
        }

        /* Learning Paths Carousel */
        .paths-carousel {
          position: relative;
          height: 700px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1500px;
        }

        .paths-carousel .carousel-item {
          position: absolute;
          width: 500px;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .paths-carousel .carousel-item.center {
          transform: translateX(0) scale(1);
          opacity: 1;
          z-index: 3;
        }

        .paths-carousel .carousel-item.left {
          transform: translateX(-350px) scale(0.85);
          opacity: 0.6;
          z-index: 2;
        }

        .paths-carousel .carousel-item.right {
          transform: translateX(350px) scale(0.85);
          opacity: 0.6;
          z-index: 2;
        }

        .paths-carousel .carousel-item.hidden {
          transform: translateX(0) scale(0.7);
          opacity: 0;
          z-index: 1;
          pointer-events: none;
        }

        /* Portfolio Carousel */
        .portfolio-carousel {
          position: relative;
          height: 650px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1500px;
        }

        .portfolio-carousel .carousel-item {
          position: absolute;
          width: 500px;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .portfolio-carousel .carousel-item.center {
          transform: translateX(0) scale(1);
          opacity: 1;
          z-index: 3;
        }

        .portfolio-carousel .carousel-item.left {
          transform: translateX(-350px) scale(0.85);
          opacity: 0.6;
          z-index: 2;
        }

        .portfolio-carousel .carousel-item.right {
          transform: translateX(350px) scale(0.85);
          opacity: 0.6;
          z-index: 2;
        }

        .portfolio-carousel .carousel-item.hidden {
          transform: translateX(0) scale(0.7);
          opacity: 0;
          z-index: 1;
          pointer-events: none;
        }

        /* Path & Portfolio Item Styles */
        .path-link,
        .portfolio-link {
          display: block;
          text-decoration: none;
          color: inherit;
          height: 100%;
        }

        .path-media,
        .portfolio-media {
          position: relative;
          width: 100%;
          padding-bottom: 125%;
          border-radius: 12px;
          overflow: hidden;
          background: var(--card-bg);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .carousel-item.center .path-media,
        .carousel-item.center .portfolio-media {
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
        }

        .carousel-item.center .path-link:hover .path-media,
        .carousel-item.center .portfolio-link:hover .portfolio-media {
          transform: translateY(-10px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
        }

        .path-image-wrapper,
        .portfolio-image-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .path-image,
        .portfolio-image {
          transition: transform 0.6s ease;
        }

        .carousel-item.center .path-link:hover .path-image,
        .carousel-item.center .portfolio-link:hover .portfolio-image {
          transform: scale(1.05);
        }

        /* Text overlay on images */
        .path-content,
        .portfolio-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 32px 24px 24px;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 0, 0, 0.7) 40%,
            rgba(0, 0, 0, 0.85) 100%
          );
          z-index: 2;
          transition: all 0.3s ease;
        }

        .carousel-item.center .path-link:hover .path-content,
        .carousel-item.center .portfolio-link:hover .portfolio-content {
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 0, 0, 0.8) 40%,
            rgba(0, 0, 0, 0.95) 100%
          );
        }

        .path-title,
        .portfolio-title {
          font-family: var(--font-funnel);
          font-size: 28px;
          font-weight: 700;
          margin: 0 0 8px 0;
          color: #ffffff;
        }

        .path-description,
        .portfolio-description {
          font-size: 15px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Carousel Dots */
        .carousel-dots {
          display: flex;
          gap: 12px;
          justify-content: center;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: transparent;
          border: 2px solid var(--border-color);
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .dot:hover {
          background: var(--text-secondary);
          transform: scale(1.2);
        }

        .dot.active {
          background: var(--accent-color);
          border-color: var(--accent-color);
          transform: scale(1.3);
        }

        /* Contact Section */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .contact-heading {
          font-family: var(--font-funnel);
          font-size: 48px;
          font-weight: 700;
          margin: 0 0 24px 0;
          color: var(--text-primary);
        }

        .contact-paragraph {
          font-size: 18px;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 40px;
        }

        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px 28px;
          background: var(--card-bg);
          border-radius: 16px;
          border: 2px solid var(--border-color);
          text-decoration: none;
          color: var(--text-primary);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .contact-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(51, 61, 41, 0.1),
            transparent
          );
          transition: left 0.5s ease;
        }

        .contact-link:hover::before {
          left: 100%;
        }

        .contact-link:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.15);
          border-color: #333d29;
        }

        .link-icon-wrapper {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-primary);
          border-radius: 12px;
          flex-shrink: 0;
          color: #333d29;
          transition: all 0.3s ease;
        }

        .contact-link:hover .link-icon-wrapper {
          background: #333d29;
          color: #ffffff;
          transform: scale(1.1);
        }

        .link-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .link-label {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .link-text {
          font-size: 16px;
          font-weight: 500;
          color: var(--text-primary);
        }

        .link-arrow {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .contact-link:hover .link-arrow {
          color: #333d29;
          transform: translate(4px, -4px);
        }

        .credits-section {
          position: sticky;
          top: 120px;
        }

        .credits-heading {
          font-family: var(--font-funnel);
          font-size: 36px;
          font-weight: 700;
          margin: 0 0 16px 0;
          color: var(--text-primary);
        }

        .credits-intro {
          font-size: 16px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 32px;
        }

        .credits-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: 40px;
        }

        .credit-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          border-bottom: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .credit-item:hover {
          padding-left: 12px;
          border-color: #333d29;
        }

        .credit-label {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .credit-value {
          font-size: 16px;
          color: var(--text-primary);
          text-align: right;
          font-weight: 500;
        }

        .copyright {
          text-align: center;
          padding: 24px 0;
          border-top: 2px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 14px;
          opacity: 0.7;
          margin-top: 60px;
          grid-column: 1 / -1;
        }

        /* About Section */
        .about-section .container {
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 500px 1fr;
          gap: 80px;
          align-items: start;
        }

        .about-image-wrapper {
          position: relative;
          width: 100%;
          height: 600px;
        }

        .about-heading-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 30px;
          position: relative;
        }

        .about-heading {
          font-family: var(--font-funnel);
          font-size: 48px;
          font-weight: 700;
          margin: 0;
          color: var(--text-primary);
        }

        .about-paragraph {
          font-size: 17px;
          line-height: 1.8;
          color: var(--text-secondary);
          margin: 0 0 24px 0;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 50px;
        }

        .stat-item {
          text-align: center;
          padding: 30px 20px;
          background: var(--card-bg);
          border-radius: 12px;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .stat-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border-color: var(--accent-color);
        }

        .stat-value {
          font-family: var(--font-funnel);
          font-size: 42px;
          font-weight: 800;
          color: var(--accent-color);
          margin-bottom: 10px;
        }

        .stat-label {
          font-size: 14px;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Journey Arrow Link - Next to Heading */
        :global(.journey-arrow-link) {
          width: 80px;
          height: 80px;
          min-width: 80px;
          min-height: 80px;
          background: var(--card-bg);
          border-width: 3px;
          border-style: solid;
          border-color: var(--text-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          flex-shrink: 0;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1), 0 0 0 0 rgba(0, 0, 0, 0.3);
          animation: pulse-border-glow 2s ease-in-out infinite;
          text-decoration: none;
        }

        @keyframes :global(pulse-border-glow) {
          0%, 100% {
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1), 0 0 0 0 rgba(0, 0, 0, 0.3);
          }
          50% {
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 0 0 20px rgba(0, 0, 0, 0);
          }
        }

        :global(.journey-arrow-link:hover) {
          background: var(--accent-color);
          color: #ffffff;
          transform: scale(1.1);
          animation: none;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          border-color: var(--accent-color);
        }

        :global(.journey-arrow-link svg) {
          transition: transform 0.3s ease;
          width: 28px;
          height: 28px;
        }

        :global(.journey-arrow-link:hover svg) {
          transform: translate(3px, -3px);
        }

        /* Clickable About Image */
        .about-image-link {
          display: block;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .about-image-link::after {
          content: 'Click for journey';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(51, 61, 41, 0.95);
          color: #ffffff;
          padding: 16px 32px;
          border-radius: 8px;
          font-size: 18px;
          font-weight: 600;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: 10;
        }

        .about-image-link:hover::after {
          opacity: 1;
        }

        .about-image-link:hover .about-image-wrapper {
          transform: scale(1.02);
          filter: brightness(0.7);
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .about-image-wrapper {
            max-width: 600px;
            margin: 0 auto;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .credits-section {
            position: relative;
            top: 0;
          }

          .carousel-nav-prev {
            left: -10px;
          }

          .carousel-nav-next {
            right: -10px;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 20px;
          }

          .theme-toggle {
            top: 20px;
            right: 20px;
            width: 48px;
            height: 48px;
          }

          .hero-section {
            padding: 100px 0 100px;
          }

          .hero-background-card {
            width: calc(100% - 30px);
            min-height: 400px;
          }

          .section {
            padding: 80px 0;
          }

          .section-header {
            margin-bottom: 50px;
          }

          .break-card-section {
            margin: 0 0 80px 0;
          }

          .break-card-section.first-break-card {
            margin-top: 150px;
          }

          .break-card-section .card-container {
            padding: 0 15px;
          }

          .break-card {
            min-height: 400px;
            border-radius: 40px 40px 20px 20px;
          }

          .break-card-title {
            font-size: 40px;
            padding: 20px;
          }

          .scroll-card-animate {
            transform: translateY(80px) scale(0.94);
            filter: blur(6px);
          }

          .paths-carousel,
          .portfolio-carousel {
            height: 600px;
          }

          .paths-carousel .carousel-item,
          .portfolio-carousel .carousel-item {
            width: 100%;
            max-width: 380px;
          }

          .paths-carousel .carousel-item.left,
          .paths-carousel .carousel-item.right,
          .portfolio-carousel .carousel-item.left,
          .portfolio-carousel .carousel-item.right {
            display: none;
          }

          .carousel-nav {
            width: 44px;
            height: 44px;
          }

          .carousel-nav-prev {
            left: 0;
          }

          .carousel-nav-next {
            right: 0;
          }

          .about-stats {
            grid-template-columns: 1fr;
          }

          .about-image-wrapper {
            height: 500px;
          }

          .contact-link {
            padding: 20px 24px;
            gap: 16px;
          }

          .link-icon-wrapper {
            width: 44px;
            height: 44px;
          }

          .link-text {
            font-size: 14px;
          }

          .contact-heading {
            font-size: 36px;
          }

          .credits-heading {
            font-size: 28px;
          }
        }

        @media (max-width: 480px) {
          .theme-toggle {
            width: 44px;
            height: 44px;
            top: 16px;
            right: 16px;
          }

          .hero-background-card {
            width: calc(100% - 20px);
            min-height: 300px;
            border-radius: 40px 40px 20px 20px;
          }

          .ticker-wrapper {
            min-width: 200px;
            height: 50px;
            padding: 0 20px;
          }

          .break-card-section {
            margin: 0 0 60px 0;
          }

          .break-card-section.first-break-card {
            margin-top: 100px;
          }

          .break-card-section .card-container {
            padding: 0 10px;
          }

          .break-card {
            min-height: 300px;
            border-radius: 32px 32px 16px 16px;
          }

          .break-card-title {
            font-size: 32px;
            padding: 16px;
          }

          .scroll-card-animate {
            transform: translateY(60px) scale(0.95);
            filter: blur(4px);
          }

          .section-scroll-indicator {
            bottom: 20px;
          }

          .scroll-indicator-line {
            height: 30px;
          }

          .scroll-indicator-text {
            font-size: 10px;
          }
        }
      `}</style>
      </div>
    </>
  );
}
