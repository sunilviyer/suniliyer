'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const SECTIONS = [
  {
    id: 'intelligence',
    label: 'Intelligence',
    routes: ['/seshan', '/ai-agents', 'suniliyer.ca/seshan'],
    items: [
      {
        title: 'Seshan Intelligence',
        description: 'AI-powered business platform',
        image: '/images/portfolio/seshan-intelligence.webp',
        href: 'https://www.suniliyer.ca/seshan/demo/',
        external: true,
      },
      {
        title: 'AI Agents',
        description: 'Intelligent automation solutions',
        image: '/images/portfolio/AIagents.webp',
        href: '/ai-agents',
        external: false,
      },
    ],
  },
  {
    id: 'leftbrain',
    label: 'The Left Brain',
    routes: ['/gita', '/calvinhobbes', '/creative-works', '/mortgage-calculator'],
    items: [
      {
        title: 'Bhagavad Gita',
        description: 'Interactive wisdom exploration',
        image: '/images/portfolio/gita.webp',
        href: '/gita',
        external: false,
      },
      {
        title: 'Calvin & Hobbes',
        description: 'Comic strip appreciation',
        image: '/images/portfolio/calvin-and-hobbes.webp',
        href: '/calvinhobbes',
        external: false,
      },
      {
        title: 'Creative Works',
        description: 'Poetry and creative writing',
        image: '/images/portfolio/creative-works.webp',
        href: '/creative-works',
        external: false,
      },
      {
        title: 'Mortgage Calculator',
        description: 'Financial planning tool',
        image: '/images/portfolio/mortgage-calculator.webp',
        href: '/mortgage-calculator',
        external: false,
      },
    ],
  },
  {
    id: 'monologue',
    label: 'The Inner Monologue',
    routes: ['/history', '/terminology', '/risk', '/responsibility', '/future', '/articles'],
    items: [
      {
        title: 'History',
        description: 'AI evolution and milestones',
        image: '/images/history/ai-history.webp',
        href: '/history',
        external: false,
      },
      {
        title: 'Terminology',
        description: 'Key concepts explained',
        image: '/images/terminology/terminology-hero.webp',
        href: '/terminology',
        external: false,
      },
      {
        title: 'Risk',
        description: 'Challenges and concerns',
        image: '/images/risk/risk-hero.webp',
        href: '/risk',
        external: false,
      },
      {
        title: 'Responsibility',
        description: 'Ethical considerations',
        image: '/images/responsibility/responsibility-hero.webp',
        href: '/responsibility',
        external: false,
      },
      {
        title: 'Future',
        description: 'Vision and possibilities',
        image: '/images/future/future-hero.webp',
        href: '/future',
        external: false,
      },
    ],
  },
];

export default function TopNav() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for backdrop blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Determine active section based on pathname
  const getActiveSection = () => {
    for (const section of SECTIONS) {
      if (section.routes.some(route => pathname?.startsWith(route))) {
        return section.id;
      }
    }
    return null;
  };

  const activeSection = getActiveSection();

  return (
    <>
      <nav className={`top-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo / Home */}
          <Link href="/" className="nav-logo">
            <span className="logo-text">Sunil Iyer</span>
          </Link>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            {SECTIONS.map((section) => (
              <div
                key={section.id}
                className="menu-item-wrapper"
                onMouseEnter={() => setActiveDropdown(section.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`menu-item ${activeSection === section.id ? 'active' : ''}`}
                >
                  {section.label}
                </button>

                {activeDropdown === section.id && (
                  <div className="dropdown-panel">
                    <div className="dropdown-content">
                      {section.items.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="dropdown-item"
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noopener noreferrer' : undefined}
                        >
                          <div className="item-image">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="120px"
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                          <div className="item-text">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Sunil Menu Item */}
            <div
              className="menu-item-wrapper"
              onMouseEnter={() => setActiveDropdown('sunil')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`menu-item ${pathname === '/journey' ? 'active' : ''}`}
              >
                Sunil
              </button>

              {activeDropdown === 'sunil' && (
                <div className="dropdown-panel">
                  <div className="dropdown-content">
                    <Link href="/journey" className="dropdown-item">
                      <div className="item-image">
                        <Image
                          src="/images/journey/cornell.webp"
                          alt="Journey"
                          fill
                          sizes="120px"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="item-text">
                        <h3>My Journey</h3>
                        <p>Professional story and experience</p>
                      </div>
                    </Link>
                    <a
                      href="/downloads/Sunil_Iyer_Resume.docx"
                      download
                      className="dropdown-item"
                    >
                      <div className="item-image resume-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                        </svg>
                      </div>
                      <div className="item-text">
                        <h3>Resume</h3>
                        <p>Download my resume</p>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-overlay">
          <div className="mobile-menu">
            {SECTIONS.map((section) => (
              <div key={section.id} className="mobile-section">
                <h3 className="mobile-section-title">{section.label}</h3>
                <div className="mobile-items">
                  {section.items.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="mobile-item"
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                    >
                      <div className="mobile-item-image">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="80px"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="mobile-item-text">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Sunil Section */}
            <div className="mobile-section">
              <h3 className="mobile-section-title">Sunil</h3>
              <div className="mobile-items">
                <Link href="/journey" className="mobile-item">
                  <div className="mobile-item-image">
                    <Image
                      src="/images/journey/cornell.webp"
                      alt="Journey"
                      fill
                      sizes="80px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="mobile-item-text">
                    <h4>My Journey</h4>
                    <p>Professional story and experience</p>
                  </div>
                </Link>
                <a href="/downloads/Sunil_Iyer_Resume.docx" download className="mobile-item">
                  <div className="mobile-item-image resume-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                  </div>
                  <div className="mobile-item-text">
                    <h4>Resume</h4>
                    <p>Download my resume</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .top-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 70px;
          background: rgba(255, 255, 255, 0.95);
          border-bottom: 1px solid var(--border-color);
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .top-nav.scrolled {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          height: 100%;
          padding: 0 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          font-size: 20px;
          font-weight: 600;
          color: var(--text-color);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .nav-logo:hover {
          color: var(--accent-color);
        }

        .logo-text {
          display: block;
        }

        .desktop-menu {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .menu-item-wrapper {
          position: relative;
        }

        .menu-item {
          padding: 8px 16px;
          background: transparent;
          border: none;
          color: var(--text-color);
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .menu-item:hover {
          background: rgba(0, 0, 0, 0.05);
          color: var(--accent-color);
        }

        .menu-item.active {
          background: rgba(99, 102, 241, 0.1);
          color: var(--accent-color);
        }

        .dropdown-panel {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          min-width: 320px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          animation: dropdownFade 0.2s ease;
        }

        @keyframes dropdownFade {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        .dropdown-content {
          padding: 8px;
        }

        .dropdown-item {
          display: flex;
          gap: 12px;
          padding: 12px;
          border-radius: 8px;
          text-decoration: none;
          color: var(--text-color);
          transition: all 0.2s ease;
        }

        .dropdown-item:hover {
          background: rgba(99, 102, 241, 0.08);
          transform: translateX(4px);
        }

        .item-image {
          position: relative;
          width: 60px;
          height: 60px;
          flex-shrink: 0;
          border-radius: 8px;
          overflow: hidden;
          background: var(--card-bg);
        }

        .item-image.resume-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .item-image.resume-icon svg {
          width: 30px;
          height: 30px;
        }

        .item-text h3 {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-color);
          margin: 0 0 4px 0;
        }

        .item-text p {
          font-size: 13px;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.4;
        }

        .mobile-menu-btn {
          display: none;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          color: var(--text-color);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .mobile-menu-btn svg {
          width: 24px;
          height: 24px;
        }

        .mobile-menu-btn:hover {
          background: rgba(0, 0, 0, 0.05);
        }

        .mobile-overlay {
          display: none;
        }

        @media (max-width: 1024px) {
          .desktop-menu {
            gap: 4px;
          }

          .menu-item {
            padding: 8px 12px;
            font-size: 14px;
          }

          .dropdown-panel {
            min-width: 280px;
          }
        }

        @media (max-width: 900px) {
          .desktop-menu {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }

          .mobile-overlay {
            display: block;
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(4px);
            z-index: 999;
            animation: overlayFade 0.2s ease;
          }

          @keyframes overlayFade {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .mobile-menu {
            background: var(--card-bg);
            height: 100%;
            overflow-y: auto;
            padding: 20px;
          }

          .mobile-section {
            margin-bottom: 32px;
          }

          .mobile-section-title {
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--text-secondary);
            margin: 0 0 12px 0;
            padding: 0 8px;
          }

          .mobile-items {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          .mobile-item {
            display: flex;
            gap: 12px;
            padding: 12px 8px;
            border-radius: 8px;
            text-decoration: none;
            color: var(--text-color);
            transition: all 0.2s ease;
          }

          .mobile-item:hover {
            background: rgba(99, 102, 241, 0.08);
          }

          .mobile-item-image {
            position: relative;
            width: 50px;
            height: 50px;
            flex-shrink: 0;
            border-radius: 6px;
            overflow: hidden;
            background: var(--card-bg);
          }

          .mobile-item-image.resume-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }

          .mobile-item-image.resume-icon svg {
            width: 24px;
            height: 24px;
          }

          .mobile-item-text h4 {
            font-size: 15px;
            font-weight: 600;
            color: var(--text-color);
            margin: 0 0 2px 0;
          }

          .mobile-item-text p {
            font-size: 13px;
            color: var(--text-secondary);
            margin: 0;
            line-height: 1.4;
          }
        }

        @media (max-width: 480px) {
          .top-nav {
            height: 60px;
          }

          .nav-container {
            padding: 0 16px;
          }

          .nav-logo {
            font-size: 18px;
          }

          .mobile-overlay {
            top: 60px;
          }

          .mobile-menu {
            padding: 16px;
          }
        }

        @media (prefers-color-scheme: dark) {
          .top-nav {
            background: rgba(17, 24, 39, 0.95);
          }

          .top-nav.scrolled {
            background: rgba(17, 24, 39, 0.98);
          }

          .menu-item:hover {
            background: rgba(255, 255, 255, 0.05);
          }

          .dropdown-panel {
            background: rgba(31, 41, 55, 0.95);
          }

          .mobile-menu-btn:hover {
            background: rgba(255, 255, 255, 0.05);
          }
        }
      `}</style>
    </>
  );
}
