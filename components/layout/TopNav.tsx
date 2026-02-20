'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// Theme hook
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
  };

  return { isDark, toggleTheme };
}

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
  const [contactOpen, setContactOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
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

  return (
    <>
      <nav className={`top-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo */}
          <Link href="/" className="nav-logo">
            Sunil Iyer
          </Link>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            {SECTIONS.map((section) => (
              <div
                key={section.id}
                className="menu-wrapper"
                onMouseEnter={() => setActiveDropdown(section.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`menu-btn ${activeSection === section.id ? 'active' : ''}`}>
                  {section.label}
                </button>

                {activeDropdown === section.id && (
                  <div className="dropdown">
                    {section.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="dropdown-link"
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                      >
                        <div className="dropdown-img">
                          <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className="dropdown-text">
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="actions">
            {/* Profile Icon */}
            <div
              className="menu-wrapper"
              onMouseEnter={() => setActiveDropdown('profile')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="profile-icon" aria-label="Profile">
                <Image src="/images/sunil.webp" alt="Sunil Iyer" width={30} height={30} style={{ borderRadius: '50%', objectFit: 'cover' }} />
              </button>

              {activeDropdown === 'profile' && (
                <div className="dropdown">
                  <Link href="/journey" className="dropdown-link">
                    <div className="dropdown-img">
                      <Image src="/images/journey/cornell.webp" alt="Journey" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="dropdown-text">
                      <h3>My Journey</h3>
                      <p>Professional story and experience</p>
                    </div>
                  </Link>
                  <a href="/downloads/Sunil_Iyer_Resume.docx" download className="dropdown-link">
                    <div className="dropdown-img resume-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                      </svg>
                    </div>
                    <div className="dropdown-text">
                      <h3>Resume</h3>
                      <p>Download my resume</p>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
              <span className="theme-icon">{isDark ? '🌙' : '☀️'}</span>
            </button>

            {/* Contact Button */}
            <button className="contact-btn" onClick={toggleContact} aria-label={contactOpen ? 'Close' : 'Contact'}>
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

          {/* Mobile Menu Button */}
          <button className="mobile-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-overlay">
          <div className="mobile-menu">
            {SECTIONS.map((section) => (
              <div key={section.id} className="mobile-section">
                <h3>{section.label}</h3>
                {section.items.map((item, idx) => (
                  <Link key={idx} href={item.href} className="mobile-link" target={item.external ? '_blank' : undefined}>
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
            <div className="mobile-section">
              <h3>Sunil</h3>
              <Link href="/journey" className="mobile-link">My Journey</Link>
              <a href="/downloads/Sunil_Iyer_Resume.docx" download className="mobile-link">Resume</a>
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
          z-index: 1000;
          transition: backdrop-filter 0.3s ease;
        }

        .top-nav.scrolled {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
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

        /* Logo */
        .nav-logo {
          font-size: 20px;
          font-weight: 600;
          color: #264653;
          text-decoration: none;
          transition: color 0.2s;
        }

        :global([data-theme='dark']) .nav-logo {
          color: #FFEFD5;
        }

        .nav-logo:hover {
          color: #6366f1;
        }

        /* Desktop Menu */
        .desktop-menu {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .menu-wrapper {
          position: relative;
        }

        .menu-btn {
          padding: 8px 16px;
          background: transparent;
          border: none;
          color: #264653;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.2s;
        }

        :global([data-theme='dark']) .menu-btn {
          color: #FFEFD5;
        }

        .menu-btn:hover,
        .menu-btn.active {
          background: rgba(99, 102, 241, 0.1);
          color: #6366f1;
        }

        /* Dropdown */
        .dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          min-width: 320px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid #dddddd;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          padding: 8px;
          animation: fadeIn 0.2s;
        }

        :global([data-theme='dark']) .dropdown {
          background: rgba(26, 26, 26, 0.95);
          border-color: #444444;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        .dropdown-link {
          display: flex;
          gap: 12px;
          padding: 12px;
          border-radius: 8px;
          text-decoration: none;
          color: #000000;
          transition: all 0.2s;
        }

        :global([data-theme='dark']) .dropdown-link {
          color: #ffffff;
        }

        .dropdown-link:hover {
          background: rgba(99, 102, 241, 0.08);
          transform: translateX(4px);
        }

        .dropdown-img {
          position: relative;
          width: 60px;
          height: 60px;
          flex-shrink: 0;
          border-radius: 8px;
          overflow: hidden;
          background: #f8f8f8;
        }

        :global([data-theme='dark']) .dropdown-img {
          background: #2a2a2a;
        }

        .resume-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .resume-icon svg {
          width: 30px;
          height: 30px;
        }

        .dropdown-text h3 {
          font-size: 15px;
          font-weight: 600;
          margin: 0 0 4px 0;
        }

        .dropdown-text p {
          font-size: 13px;
          color: #666666;
          margin: 0;
        }

        :global([data-theme='dark']) .dropdown-text p {
          color: #cccccc;
        }

        /* Actions */
        .actions {
          display: flex;
          gap: 12px;
          align-items: center;
          margin-left: 16px;
        }

        /* Profile Icon */
        .profile-icon {
          width: 44px;
          height: 44px;
          padding: 0;
          background: transparent;
          border: 2px solid #264653;
          border-radius: 50%;
          cursor: pointer;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        :global([data-theme='dark']) .profile-icon {
          border-color: #FFEFD5;
        }

        .profile-icon:hover {
          border-color: #6366f1;
          transform: scale(1.05);
        }

        /* Theme Toggle */
        .theme-btn {
          width: 56px;
          height: 30px;
          border-radius: 100px;
          border: 2px solid #264653;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 3px;
          transition: all 0.3s;
          position: relative;
        }

        :global([data-theme='dark']) .theme-btn {
          border-color: #FFEFD5;
        }

        .theme-btn:hover {
          background: rgba(99, 102, 241, 0.1);
        }

        .theme-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #f59e0b;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          position: absolute;
          left: 3px;
          transition: left 0.3s ease;
        }

        :global([data-theme='dark']) .theme-icon {
          left: calc(100% - 27px);
          background: #6366f1;
        }

        /* Contact Button */
        .contact-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: transparent;
          border: 2px solid #264653;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #264653;
          transition: all 0.2s;
        }

        :global([data-theme='dark']) .contact-btn {
          border-color: #FFEFD5;
          color: #FFEFD5;
        }

        .contact-btn:hover {
          background: rgba(99, 102, 241, 0.1);
          border-color: #6366f1;
          color: #6366f1;
          transform: scale(1.05);
        }

        /* Mobile Button */
        .mobile-btn {
          display: none;
          width: 44px;
          height: 44px;
          background: transparent;
          border: 2px solid #264653;
          border-radius: 8px;
          color: #264653;
          cursor: pointer;
          align-items: center;
          justify-content: center;
        }

        :global([data-theme='dark']) .mobile-btn {
          border-color: #FFEFD5;
          color: #FFEFD5;
        }

        .mobile-btn svg {
          width: 24px;
          height: 24px;
        }

        .mobile-overlay {
          display: none;
        }

        @media (max-width: 900px) {
          .desktop-menu {
            display: none;
          }

          .actions {
            margin-left: auto;
          }

          .mobile-btn {
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
          }

          .mobile-menu {
            background: #ffffff;
            height: 100%;
            overflow-y: auto;
            padding: 20px;
          }

          :global([data-theme='dark']) .mobile-menu {
            background: #1a1a1a;
          }

          .mobile-section {
            margin-bottom: 32px;
          }

          .mobile-section h3 {
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #666666;
            margin: 0 0 12px 8px;
          }

          :global([data-theme='dark']) .mobile-section h3 {
            color: #cccccc;
          }

          .mobile-link {
            display: block;
            padding: 14px 16px;
            border-radius: 8px;
            text-decoration: none;
            color: #000000;
            font-size: 16px;
            font-weight: 500;
            transition: all 0.2s;
            border: 1px solid transparent;
          }

          :global([data-theme='dark']) .mobile-link {
            color: #ffffff;
          }

          .mobile-link:hover {
            background: rgba(99, 102, 241, 0.08);
            border-color: #6366f1;
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
        }
      `}</style>
    </>
  );
}
