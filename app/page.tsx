'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { tickerWords } from '@/lib/ticker-words';
import { useGsapScrollScaleAnimations } from '@/lib/hooks/useGsapScrollScaleAnimations';
import { SplashScreen } from '@/components/homepage/SplashScreen';
import { InitialsPhotoReveal } from '@/components/homepage/InitialsPhotoReveal';
import { LearningPathsAccordion } from '@/components/homepage/LearningPathsAccordion';
import { PortfolioShowcase } from '@/components/homepage/PortfolioShowcase';
import { BehindTheScenesBookshelf } from '@/components/homepage/BehindTheScenesBookshelf';

export default function HomePage() {
  useGsapScrollScaleAnimations();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const contactSectionRef = useRef<HTMLElement>(null);

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

  return (
    <>
      <SplashScreen />
      <div className="page-wrapper">
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

          <LearningPathsAccordion />
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

          <PortfolioShowcase />
        </div>

        {/* Scroll Indicator */}
        <div className="section-scroll-indicator">
          <div className="scroll-indicator-line" />
          <span className="scroll-indicator-text">Scroll</span>
        </div>
      </section>

      {/* Break Card 3: Behind the Scenes - Above Behind the Scenes */}
      <section className="break-card-section">
        <div className="card-container">
          <div className="card break-card break-card-behind-scenes scroll-card-animate">
            <div className="break-card-overlay" />
            <h2 className="break-card-title">Behind the Scenes</h2>
          </div>
        </div>
      </section>

      {/* Behind the Scenes Section */}
      <section className="section behind-scenes-section" style={{position: 'relative'}}>
        <div className="container">
          <div className="section-header">
            <div className="section-label loading__item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z"/>
              </svg>
              <span>Behind the Scenes</span>
            </div>
            <h2 className="section-title loading__item">
              Nine projects, nine journeys
            </h2>
            <p className="section-subtitle loading__item">
              Each one holds the spark, the struggle, and the lesson
            </p>
          </div>

          <BehindTheScenesBookshelf />
        </div>

        {/* Scroll Indicator */}
        <div className="section-scroll-indicator">
          <div className="scroll-indicator-line" />
          <span className="scroll-indicator-text">Scroll</span>
        </div>
      </section>

      {/* Break Card 4: About Me - Above About */}
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

      {/* Break Card 5: Contact - Above Contact */}
      <section className="break-card-section">
        <div className="card-container">
          <div className="card break-card break-card-contact scroll-card-animate">
            <div className="break-card-overlay" />
            <h2 className="break-card-title">Get In Touch</h2>
          </div>
        </div>
      </section>

      {/* Contact & Credits Section */}
      <section ref={contactSectionRef} className="section contact-section" style={{position: 'relative'}}>
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
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('open-contact-widget'))}
                  className="contact-link contact-link-button"
                >
                  <div className="link-icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className="link-content">
                    <span className="link-label">Email</span>
                    <span className="link-text">Send me a message</span>
                  </div>
                  <div className="link-arrow">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 15L15 5M15 5H5M15 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>

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
                    <span className="link-text">Connect with me</span>
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
                    <span className="link-text">Check my code</span>
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
                  <span className="credit-label">The Brain</span>
                  <a href="https://claude.com/product/claude-code" target="_blank" rel="noopener noreferrer" className="credit-value credit-link">Claude Code</a>
                </div>
                <div className="credit-item">
                  <span className="credit-label">The Heart</span>
                  <a href="https://github.com/bmad-code-org/BMAD-METHOD" target="_blank" rel="noopener noreferrer" className="credit-value credit-link">BMAD Method</a>
                </div>
                <div className="credit-item">
                  <span className="credit-label">The Inspiration</span>
                  <a href="https://rayo-nextjs-creative-template.netlify.app/" target="_blank" rel="noopener noreferrer" className="credit-value credit-link">Rayo Template</a>
                </div>
                <div className="credit-item">
                  <span className="credit-label">The Eyes</span>
                  <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" className="credit-value credit-link">Google Nano Banana</a>
                </div>
                <div className="credit-item">
                  <span className="credit-label">The Personality</span>
                  <span className="credit-value">GSAP & Framer Motion</span>
                </div>
                <div className="credit-item">
                  <span className="credit-label">The Body</span>
                  <span className="credit-value">Next.js & TypeScript</span>
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

        .break-card-behind-scenes {
          background-image: url('/images/breaks/Behind-Scene-Break.webp');
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

        .section-subtitle {
          font-size: clamp(16px, 2vw, 20px);
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 16px 0 0 0;
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

        .contact-link-button {
          cursor: pointer;
          width: 100%;
          text-align: left;
          font-family: inherit;
          font-size: inherit;
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

        .credit-link {
          text-decoration: none;
          color: var(--text-primary);
          transition: color 0.3s ease;
          position: relative;
        }

        .credit-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #333d29;
          transition: width 0.3s ease;
        }

        .credit-link:hover {
          color: #333d29;
        }

        .credit-link:hover::after {
          width: 100%;
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
          background: var(--text-primary);
          color: var(--bg-primary);
          transform: scale(1.1);
          animation: none;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          border-color: var(--text-primary);
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
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--card-bg);
          color: var(--text-primary);
          padding: 16px 32px;
          border-radius: 8px;
          border: 2px solid var(--text-primary);
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

        }

        @media (max-width: 768px) {
          .container {
            padding: 0 20px;
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
