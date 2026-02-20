'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

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

const SECTIONS = [
  {
    id: 'intelligence',
    label: 'Intelligence',
    routes: ['/seshan', '/ai-agents'],
    items: [
      { title: 'Seshan Intelligence', description: 'AI-powered business platform', image: '/images/portfolio/seshan-intelligence.webp', href: 'https://www.suniliyer.ca/seshan/demo/', external: true },
      { title: 'AI Agents', description: 'Intelligent automation solutions', image: '/images/portfolio/AIagents.webp', href: '/ai-agents', external: false },
    ],
  },
  {
    id: 'leftbrain',
    label: 'The Left Brain',
    routes: ['/gita', '/calvinhobbes', '/creative-works', '/mortgage-calculator'],
    items: [
      { title: 'Bhagavad Gita', description: 'Interactive wisdom exploration', image: '/images/portfolio/gita.webp', href: '/gita', external: false },
      { title: 'Calvin & Hobbes', description: 'Comic strip appreciation', image: '/images/portfolio/calvin-and-hobbes.webp', href: '/calvinhobbes', external: false },
      { title: 'Creative Works', description: 'Poetry and creative writing', image: '/images/portfolio/creative-works.webp', href: '/creative-works', external: false },
      { title: 'Mortgage Calculator', description: 'Financial planning tool', image: '/images/portfolio/mortgage-calculator.webp', href: '/mortgage-calculator', external: false },
    ],
  },
  {
    id: 'monologue',
    label: 'The Inner Monologue',
    routes: ['/history', '/terminology', '/risk', '/responsibility', '/future'],
    items: [
      { title: 'History', description: 'AI evolution and milestones', image: '/images/headercards/history-header.webp', href: '/history', external: false },
      { title: 'Terminology', description: 'Key concepts explained', image: '/images/headercards/terminology-header.webp', href: '/terminology', external: false },
      { title: 'Risk', description: 'Challenges and concerns', image: '/images/headercards/risk-header.webp', href: '/risk', external: false },
      { title: 'Responsibility', description: 'Ethical considerations', image: '/images/headercards/responsibility-header.webp', href: '/responsibility', external: false },
      { title: 'Future', description: 'Vision and possibilities', image: '/images/headercards/future-header.webp', href: '/future', external: false },
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

  const toggleContact = () => {
    if (contactOpen) {
      window.dispatchEvent(new CustomEvent('close-contact-widget'));
    } else {
      window.dispatchEvent(new CustomEvent('open-contact-widget'));
    }
  };

  const getActiveSection = () => {
    for (const section of SECTIONS) {
      if (section.routes.some(route => pathname?.startsWith(route))) {
        return section.id;
      }
    }
    return null;
  };

  const activeSection = getActiveSection();
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

          {/* Logo */}
          <Link href="/" style={{ fontSize: '20px', fontWeight: 600, color: textColor, textDecoration: 'none' }}>
            Sunil Iyer
          </Link>

          {/* Desktop Menu */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }} className="desktop-menu">
            {SECTIONS.map((section) => (
              <div
                key={section.id}
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveDropdown(section.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  style={{
                    padding: '8px 16px',
                    background: activeSection === section.id ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                    border: 'none',
                    color: textColor,
                    fontSize: '15px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    borderRadius: '6px',
                    transition: 'all 0.2s',
                    outline: 'none'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = activeSection === section.id ? 'rgba(99, 102, 241, 0.1)' : 'transparent'}
                >
                  {section.label}
                </button>

                {activeDropdown === section.id && (
                  <div style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    minWidth: '320px',
                    background: isDark ? 'rgba(26, 26, 26, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    border: `1px solid ${isDark ? '#444444' : '#dddddd'}`,
                    borderRadius: '12px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                    padding: '8px',
                    zIndex: 1000
                  }}>
                    {section.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '60px 1fr',
                          gap: '12px',
                          alignItems: 'center',
                          padding: '12px',
                          borderRadius: '8px',
                          textDecoration: 'none',
                          color: isDark ? '#ffffff' : '#000000',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(99, 102, 241, 0.08)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        <div style={{ width: '60px', height: '60px', borderRadius: '8px', overflow: 'hidden', background: isDark ? '#2a2a2a' : '#f8f8f8', position: 'relative' }}>
                          <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div>
                          <h3 style={{ fontSize: '15px', fontWeight: 600, margin: '0 0 4px 0', lineHeight: 1.2 }}>{item.title}</h3>
                          <p style={{ fontSize: '13px', color: isDark ? '#cccccc' : '#666666', margin: 0, lineHeight: 1.4 }}>{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginLeft: '16px' }}>

            {/* Profile */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown('profile')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button style={{ width: '44px', height: '44px', padding: 0, background: 'transparent', border: `2px solid ${textColor}`, borderRadius: '50%', cursor: 'pointer', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
                <Image src="/images/sunil.webp" alt="Sunil Iyer" width={30} height={30} style={{ borderRadius: '50%', objectFit: 'cover' }} />
              </button>

              {activeDropdown === 'profile' && (
                <div style={{
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  right: 0,
                  minWidth: '280px',
                  background: isDark ? 'rgba(26, 26, 26, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${isDark ? '#444444' : '#dddddd'}`,
                  borderRadius: '12px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                  padding: '8px',
                  zIndex: 1000
                }}>
                  <Link href="/journey" style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: '12px', alignItems: 'center', padding: '12px', borderRadius: '8px', textDecoration: 'none', color: isDark ? '#ffffff' : '#000000' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(99, 102, 241, 0.08)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '8px', overflow: 'hidden', background: isDark ? '#2a2a2a' : '#f8f8f8', position: 'relative' }}>
                      <Image src="/images/journey/cornell.webp" alt="Journey" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '15px', fontWeight: 600, margin: '0 0 4px 0' }}>My Journey</h3>
                      <p style={{ fontSize: '13px', color: isDark ? '#cccccc' : '#666666', margin: 0 }}>Professional story</p>
                    </div>
                  </Link>
                  <a href="/downloads/Sunil_Iyer_Resume.pdf" download style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: '12px', alignItems: 'center', padding: '12px', borderRadius: '8px', textDecoration: 'none', color: isDark ? '#ffffff' : '#000000' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(99, 102, 241, 0.08)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '8px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 style={{ fontSize: '15px', fontWeight: 600, margin: '0 0 4px 0' }}>Resume</h3>
                      <p style={{ fontSize: '13px', color: isDark ? '#cccccc' : '#666666', margin: 0 }}>Download resume</p>
                    </div>
                  </a>
                </div>
              )}
            </div>

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

            {/* Mobile Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ display: 'none', width: '44px', height: '44px', background: 'transparent', border: `2px solid ${textColor}`, borderRadius: '8px', color: textColor, cursor: 'pointer', alignItems: 'center', justifyContent: 'center' }} className="mobile-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                {mobileMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{ position: 'fixed', top: '90px', left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', zIndex: 999 }}>
          <div style={{
            background: isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            height: '100%',
            overflowY: 'auto',
            padding: '20px',
            border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
          }}>
            {SECTIONS.map((section) => (
              <div key={section.id} style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: isDark ? '#cccccc' : '#666666', margin: '0 0 12px 8px' }}>{section.label}</h3>
                {section.items.map((item, idx) => (
                  <Link key={idx} href={item.href} target={item.external ? '_blank' : undefined} style={{ display: 'block', padding: '14px 16px', marginBottom: '8px', borderRadius: '8px', textDecoration: 'none', color: isDark ? '#ffffff' : '#000000', fontSize: '16px', fontWeight: 500, border: '1px solid transparent' }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(99, 102, 241, 0.08)'; e.currentTarget.style.borderColor = '#6366f1'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; }}>
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: isDark ? '#cccccc' : '#666666', margin: '0 0 12px 8px' }}>Sunil</h3>
              <Link href="/journey" style={{ display: 'block', padding: '14px 16px', marginBottom: '8px', borderRadius: '8px', textDecoration: 'none', color: isDark ? '#ffffff' : '#000000', fontSize: '16px', fontWeight: 500, border: '1px solid transparent' }}>My Journey</Link>
              <a href="/downloads/Sunil_Iyer_Resume.pdf" download style={{ display: 'block', padding: '14px 16px', marginBottom: '8px', borderRadius: '8px', textDecoration: 'none', color: isDark ? '#ffffff' : '#000000', fontSize: '16px', fontWeight: 500, border: '1px solid transparent' }}>Resume</a>
            </div>
          </div>
        </div>
      )}

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

        @media (max-width: 900px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-btn {
            display: flex !important;
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
