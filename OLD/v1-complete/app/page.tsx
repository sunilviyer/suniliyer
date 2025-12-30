'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { learningPaths } from '@/lib/learning-paths-data';
import { portfolioProjects } from '@/lib/portfolio-data';

export default function HomePage() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const words = [
    "Artificial",
    "Adversarial",
    "Agentic",
    "Open",
    "Claude",
    "Bias",
    "Responsible",
    "Safe"
  ];

  // Word ticker animation (0.5s per word)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        className="hamburger-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Slide-out Menu */}
      <nav className={`slide-out-menu ${menuOpen ? 'open' : ''}`}>
        <button
          className="close-menu"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>
        <ul>
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li>
            <span className="menu-section">Learning</span>
            <ul className="submenu">
              {learningPaths.map((path) => (
                <li key={path.slug}>
                  <Link href={`/learn/${path.slug}`} onClick={() => setMenuOpen(false)}>
                    {path.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <span className="menu-section">Portfolio</span>
            <ul className="submenu">
              {portfolioProjects.map((project, idx) => (
                <li key={idx}>
                  <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li><Link href="#about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>

      <main id="main" tabIndex={-1} className="homepage-new">
        {/* Hero Section */}
        <section className="hero-section-new">
          {/* Video Background */}
          <video
            ref={videoRef}
            className="hero-video-background"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/images/background.webm" type="video/webm" />
          </video>

          {/* Centered Logo with Color Animation */}
          <div className="hero-content">
            <h1 className="hero-logo">Sunil Iyer</h1>

            {/* AI + Word Ticker */}
            <div className="ai-word-ticker">
              <span className="ai-text">AI</span>
              <div className="word-box">
                <span className="word-text">{words[currentWordIndex]}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Page Break Card 1 */}
        <div className="page-break-card">
          <div className="break-content">Learning Paths</div>
        </div>

        {/* Learning Paths Section - Rayo Project Details Style */}
        <section className="learning-paths-section">
          {learningPaths.map((path, index) => (
            <div key={path.slug} className="learning-path-item">
              <div className="path-details">
                <h2 className="path-category">Learning Path {index + 1}</h2>
                <h3 className="path-title">{path.title}</h3>
                <p className="path-description">{path.description}</p>
                <Link href={`/learn/${path.slug}`} className="path-cta">
                  Explore Path →
                </Link>
              </div>
              <div className="path-image">
                <img src={path.imageUrl} alt={path.title} />
              </div>
            </div>
          ))}
        </section>

        {/* Page Break Card 2 */}
        <div className="page-break-card">
          <div className="break-content">Portfolio</div>
        </div>

        {/* Portfolio Section - Fixed Carousel */}
        <section className="portfolio-section">
          <div className="portfolio-carousel">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="portfolio-card">
                <div className="card-image">
                  <img src={project.thumbnailUrl} alt={project.title} />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Page Break Card 3 */}
        <div className="page-break-card">
          <div className="break-content">About</div>
        </div>

        {/* About Section */}
        <section className="about-section">
          <div className="about-image">
            <img src="/images/Sunil.jpg" alt="Sunil Iyer" />
          </div>
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              I help organizations navigate the complex landscape of artificial
              intelligence through education, implementation guidance, and governance
              frameworks.
            </p>
            <div className="stats-row">
              <div className="stat-card">
                <div className="stat-number">20+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer-section">
          <div className="footer-grid">
            <div className="footer-column">
              <h4>About</h4>
              <ul>
                <li><Link href="#mission">Mission</Link></li>
                <li><Link href="#team">Team</Link></li>
                <li><Link href="#contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Learning</h4>
              <ul>
                {learningPaths.map((path) => (
                  <li key={path.slug}>
                    <Link href={`/learn/${path.slug}`}>{path.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-column">
              <h4>Portfolio</h4>
              <ul>
                {portfolioProjects.map((project, idx) => (
                  <li key={idx}>
                    <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-column">
              <h4>Connect</h4>
              <ul>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter/X</a></li>
                <li><a href="mailto:contact@example.com">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-copyright">
            © 2024 Sunil Iyer. All rights reserved.
          </div>
        </footer>
      </main>
    </>
  );
}
