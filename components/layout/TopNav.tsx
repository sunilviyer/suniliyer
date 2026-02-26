'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface NavItem {
  title: string;
  description: string;
  image: string;
  href: string;
  external: boolean;
  icon?: 'linkedin' | 'github' | 'resume';
}

function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = saved === 'dark' || (!saved && prefersDark);
    setIsDark(shouldBeDark);
    document.documentElement.setAttribute('data-theme', shouldBeDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    // Dispatch custom event for components to listen to theme changes
    window.dispatchEvent(new CustomEvent('themeChange'));
  };

  return { isDark, toggleTheme };
}

const NAV_SECTIONS = [
  {
    id: 'home',
    label: 'Home',
    colorClass: 'col-home',
    barColor: '#a78bfa',
    items: [
      { title: 'Learning Paths', description: 'AI knowledge journey', image: '/images/headercards/history-header.webp', href: '/#learning-paths', external: false },
      { title: 'Portfolio', description: 'Featured projects', image: '/images/portfolio/seshan-intelligence.webp', href: '/#portfolio', external: false },
      { title: 'Behind the Scenes', description: 'Project journeys', image: '/images/breaks/Behind-Scene-Break.webp', href: '/#behind-the-scenes', external: false },
      { title: 'About Me', description: 'Who is Sunil?', image: '/images/sunil.webp', href: '/#about-me', external: false },
      { title: 'Credits', description: 'Built with...', image: '/images/heroes/credit.webp', href: '/#credits', external: false },
    ],
  },
  {
    id: 'learn',
    label: 'Learning Paths',
    colorClass: 'col-learn',
    barColor: '#10b981',
    items: [
      { title: 'History of AI', description: '1950s to foundation models', image: '/images/headercards/history-header.webp', href: '/history', external: false },
      { title: 'Terminology', description: 'ML, neural nets, LLMs', image: '/images/headercards/terminology-header.webp', href: '/terminology', external: false },
      { title: 'Risk', description: 'Bias, deepfakes, harms', image: '/images/headercards/risk-header.webp', href: '/risk', external: false },
      { title: 'Responsibility', description: 'GDPR, EU AI Act, governance', image: '/images/headercards/responsibility-header.webp', href: '/responsibility', external: false },
      { title: 'Future of AI', description: 'AGI, careers, regulation', image: '/images/headercards/future-header.webp', href: '/future', external: false },
    ],
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    colorClass: 'col-portfolio',
    barColor: '#f59e0b',
    items: [
      { title: 'Seshan Intelligence', description: 'AI business intelligence', image: '/images/portfolio/seshan-intelligence.webp', href: 'https://www.suniliyer.ca/seshan/demo/', external: true },
      { title: 'Seshan Dashboard', description: 'Interactive analytics', image: '/images/portfolio/seshan-financial-dashboard.webp', href: 'https://seshan-navy.vercel.app/', external: true },
      { title: 'AI Agents', description: 'Scout, Ticker, Quill…', image: '/images/portfolio/AIagents.webp', href: 'https://ai-agents-rosy-mu.vercel.app', external: true },
    ],
  },
  {
    id: 'creative',
    label: 'Inner Monologue',
    colorClass: 'col-creative',
    barColor: '#ec4899',
    items: [
      { title: 'Articles', description: 'Thoughts & insights', image: '/images/headercards/articles-header.webp', href: '/articles', external: false },
      { title: 'Bhagavad Gita', description: 'AI-guided scripture', image: '/images/portfolio/gita.webp', href: '/gita', external: false },
      { title: 'Calvin & Hobbes', description: 'AI-illustrated comics', image: '/images/portfolio/calvin-and-hobbes.webp', href: '/calvinhobbes', external: false },
      { title: 'Creative Works', description: 'Poetry & writing', image: '/images/portfolio/creative-works.webp', href: '/creative-works', external: false },
    ],
  },
  {
    id: 'connect',
    label: 'Connect',
    colorClass: 'col-connect',
    barColor: '#38bdf8',
    items: [
      { title: 'My Journey', description: 'Professional story', image: '/images/headercards/journey-header.webp', href: '/journey', external: false },
      { title: 'Resume', description: 'Download resume', image: '', href: '/downloads/Sunil_Iyer_Resume.pdf', external: false, icon: 'resume' },
      { title: 'LinkedIn', description: 'Professional network', image: '', href: 'https://linkedin.com/in/sunilviyer', external: true, icon: 'linkedin' },
      { title: 'GitHub', description: 'Code repositories', image: '', href: 'https://github.com/sunilviyer', external: true, icon: 'github' },
    ],
  },
];

export default function TopNav() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const onOpen = () => setContactOpen(true);
    const onClose = () => setContactOpen(false);
    window.addEventListener('open-contact-widget', onOpen);
    window.addEventListener('close-contact-widget', onClose);
    return () => {
      window.removeEventListener('open-contact-widget', onOpen);
      window.removeEventListener('close-contact-widget', onClose);
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const toggleContact = () => {
    if (contactOpen) {
      window.dispatchEvent(new CustomEvent('close-contact-widget'));
    } else {
      window.dispatchEvent(new CustomEvent('open-contact-widget'));
    }
  };

  const textColor = isDark ? '#FFEFD5' : '#264653';

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: '20px',
        left: 0,
        right: 0,
        height: '70px',
        zIndex: 1000,
        background: 'transparent',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          height: '100%',
          padding: '0 30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
        }}>
          {/* Glassmorphic background */}
          <div style={{
            position: 'absolute',
            inset: '-8px',
            background: isDark ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderRadius: '16px',
            zIndex: -1,
            border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
          }} />

          {/* Left side - Hamburger and Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Desktop Menu - Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hamburger-menu"
              style={{
                width: '44px',
                height: '44px',
                background: 'transparent',
                border: `2px solid ${textColor}`,
                borderRadius: '8px',
                color: textColor,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
                outline: 'none'
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                {mobileMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
              </svg>
            </button>

            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', color: textColor, textDecoration: 'none', transition: 'all 0.2s' }}>
              <svg width="28" height="28" viewBox="0 0 256 256" fill="currentColor">
                <path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"></path>
              </svg>
            </Link>
          </div>

          {/* Slide Menu */}
          {mobileMenuOpen && (
              <div className="mega-menu-wrapper" style={{
                position: 'absolute',
                top: 'calc(100% + 20px)',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '1100px',
                paddingTop: '8px',
                marginTop: '0px',
                zIndex: 1000
              }}>
                <div className="mega-menu-content" style={{
                  background: isDark ? 'rgba(18, 18, 32, 0.72)' : 'rgba(255, 255, 255, 0.70)',
                  backdropFilter: 'blur(28px) saturate(200%)',
                  WebkitBackdropFilter: 'blur(28px) saturate(200%)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.08)'}`,
                  borderRadius: '16px',
                  boxShadow: isDark ? '0 24px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.05)' : '0 24px 60px rgba(99,102,241,0.12), 0 0 0 1px rgba(0,0,0,0.06)',
                  padding: '28px 28px 24px',
                  maxHeight: 'calc(100vh - 140px)',
                  overflowY: 'auto',
                  overflowX: 'hidden'
                }}>
                  {/* Meta row */}
                  <div className="mega-menu-meta" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '20px',
                    paddingBottom: '16px',
                    borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`
                  }}>
                    <span style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '9.5px',
                      letterSpacing: '.17em',
                      textTransform: 'uppercase',
                      color: isDark ? '#555570' : '#9090b0'
                    }}>
                      Every path on this site
                    </span>
                    <span style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '9px',
                      letterSpacing: '.08em',
                      color: isDark ? '#a78bfa' : '#7c5ccc',
                      background: isDark ? 'rgba(167,139,250,.08)' : 'rgba(124,92,204,0.14)',
                      border: `1px solid ${isDark ? 'rgba(167,139,250,.15)' : 'rgba(124,92,204,0.25)'}`,
                      borderRadius: '100px',
                      padding: '2px 10px'
                    }}>
                      Neural Map
                    </span>
                    <span style={{
                      marginLeft: 'auto',
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '9.5px',
                      color: isDark ? '#555570' : '#9090b0'
                    }}>
                      suniliyer.ca
                    </span>
                  </div>

                  {/* Grid */}
                  <div className="mega-menu-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '0.9fr 1.3fr 0.8fr 1.2fr 1fr',
                    gap: '0'
                  }}>
                    {NAV_SECTIONS.map((section, idx) => (
                      <div
                        key={section.id}
                        className="mega-menu-column"
                        style={{
                          padding: idx === 0 ? '0 20px 0 0' : idx === NAV_SECTIONS.length - 1 ? '0 0 0 20px' : '0 20px',
                          borderRight: idx === NAV_SECTIONS.length - 1 ? 'none' : `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`
                        }}
                      >
                        {/* Column heading */}
                        <div style={{
                          fontSize: '9px',
                          fontWeight: 600,
                          letterSpacing: '.15em',
                          textTransform: 'uppercase',
                          color: isDark ? '#555570' : '#9090b0',
                          marginBottom: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '7px'
                        }}>
                          <span style={{
                            width: '14px',
                            height: '1.5px',
                            borderRadius: '2px',
                            background: section.barColor,
                            flexShrink: 0
                          }} />
                          {section.label}
                        </div>

                        {/* Items */}
                        {section.items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            target={item.external ? '_blank' : undefined}
                            rel={item.external ? 'noopener noreferrer' : undefined}
                            download={'icon' in item && item.icon === 'resume' ? true : undefined}
                            onClick={(e) => {
                              // Close menu
                              setMobileMenuOpen(false);

                              // Handle hash links manually for same page
                              if (item.href.startsWith('/#')) {
                                e.preventDefault();
                                const id = item.href.substring(2); // Remove /#
                                const element = document.getElementById(id);
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                              }
                            }}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              padding: '7px 8px',
                              borderRadius: '8px',
                              textDecoration: 'none',
                              marginBottom: '1px',
                              border: '1px solid transparent',
                              transition: 'all .15s'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(99,102,241,0.05)';
                              e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.09)' : 'rgba(99,102,241,0.15)';
                              e.currentTarget.style.transform = 'translateX(3px)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.borderColor = 'transparent';
                              e.currentTarget.style.transform = 'none';
                            }}
                          >
                            {/* Image or Icon */}
                            {item.image ? (
                              <div style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                flexShrink: 0,
                                overflow: 'hidden',
                                border: `1.5px solid ${isDark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.10)'}`,
                                background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                                position: 'relative'
                              }}>
                                <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                              </div>
                            ) : ('icon' in item && item.icon === 'linkedin') ? (
                              <div style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                flexShrink: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'rgba(10, 102, 194, 0.12)',
                                border: '1.5px solid rgba(10, 102, 194, 0.25)'
                              }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="#0a66c2">
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                              </div>
                            ) : ('icon' in item && item.icon === 'github') ? (
                              <div style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                flexShrink: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
                                border: `1.5px solid ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)'}`
                              }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill={textColor}>
                                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                              </div>
                            ) : ('icon' in item && item.icon === 'resume') ? (
                              <div style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                flexShrink: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                border: '1.5px solid rgba(102, 126, 234, 0.4)'
                              }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="#ffffff" stroke="none">
                                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                                </svg>
                              </div>
                            ) : (
                              <div style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                flexShrink: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: isDark ? 'rgba(167, 139, 250, 0.12)' : 'rgba(124, 92, 204, 0.12)',
                                border: `1.5px solid ${isDark ? 'rgba(167, 139, 250, 0.25)' : 'rgba(124, 92, 204, 0.25)'}`
                              }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isDark ? '#a78bfa' : '#7c5ccc'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx="12" cy="12" r="10" />
                                  <path d="M12 16v-4M12 8h.01" />
                                </svg>
                              </div>
                            )}
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{
                                display: 'block',
                                fontSize: '13px',
                                fontWeight: 500,
                                color: textColor,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                transition: 'color .15s'
                              }}>
                                {item.title}
                              </div>
                              <div style={{
                                display: 'block',
                                fontSize: '11px',
                                color: isDark ? '#555570' : '#9090b0',
                                marginTop: '1px',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                              }}>
                                {item.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div style={{
                    marginTop: '18px',
                    paddingTop: '14px',
                    borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span style={{
                      fontSize: '13px',
                      color: isDark ? '#555570' : '#9090b0',
                      fontWeight: 500
                    }}>
                      Built with AI · Powered by curiosity
                    </span>
                  </div>
                </div>
              </div>
            )}

          {/* Actions */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginLeft: '16px' }}>

            {/* Theme Toggle */}
            <div className="toggle-switch">
              <input
                type="checkbox"
                className="checkbox"
                id="theme-checkbox"
                checked={isDark}
                onChange={toggleTheme}
              />
              <label htmlFor="theme-checkbox" className="switch-label">
                <span className="slider"></span>
              </label>
            </div>

            {/* Contact */}
            <button onClick={toggleContact} style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'transparent', border: `2px solid ${textColor}`, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: textColor, transition: 'all 0.2s', outline: 'none' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {contactOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <style jsx>{`

        .toggle-switch {
          position: relative;
          width: 88px;
          height: 44px;
          --light: #d8dbe0;
          --dark: #28292c;
          --link: rgb(27, 129, 112);
          --link-hover: rgb(24, 94, 82);
        }

        .switch-label {
          position: absolute;
          width: 100%;
          height: 44px;
          background-color: var(--dark);
          border-radius: 22px;
          cursor: pointer;
          border: 3px solid var(--dark);
        }

        .checkbox {
          position: absolute;
          display: none;
        }

        .slider {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 22px;
          transition: 0.3s;
        }

        .checkbox:checked ~ .switch-label {
          background-color: var(--light);
          border-color: var(--light);
        }

        .slider::before {
          content: "";
          position: absolute;
          top: 9px;
          left: 9px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          box-shadow: inset 10px -4px 0px 0px var(--light);
          background-color: var(--dark);
          transition: 0.3s;
        }

        .checkbox:checked ~ .switch-label .slider::before {
          transform: translateX(44px);
          background-color: var(--dark);
          box-shadow: none;
        }

        /* Custom scrollbar for menu */
        .mega-menu-content {
          scrollbar-width: thin;
          scrollbar-color: rgba(167, 139, 250, 0.3) transparent;
        }

        .mega-menu-content::-webkit-scrollbar {
          width: 8px;
        }

        .mega-menu-content::-webkit-scrollbar-track {
          background: transparent;
        }

        .mega-menu-content::-webkit-scrollbar-thumb {
          background: rgba(167, 139, 250, 0.3);
          border-radius: 4px;
        }

        .mega-menu-content::-webkit-scrollbar-thumb:hover {
          background: rgba(167, 139, 250, 0.5);
        }

        /* Mobile responsiveness for hamburger menu */
        @media (max-width: 768px) {
          .mega-menu-wrapper {
            width: calc(100vw - 40px) !important;
            left: 20px !important;
            transform: none !important;
          }

          .mega-menu-content {
            padding: 16px !important;
          }

          .mega-menu-meta {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 8px !important;
            margin-bottom: 16px !important;
          }

          .mega-menu-meta span:last-child {
            margin-left: 0 !important;
          }

          .mega-menu-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }

          .mega-menu-column {
            padding: 0 !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(128, 128, 128, 0.2) !important;
            padding-bottom: 16px !important;
          }

          .mega-menu-column:last-child {
            border-bottom: none !important;
            padding-bottom: 0 !important;
          }
        }

        @media (max-width: 480px) {
          nav {
            height: 60px !important;
          }
        }
      `}</style>
    </>
  );
}
