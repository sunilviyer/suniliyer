'use client';

import { useEffect, useState } from 'react';
import { SectionCard } from './SectionCard';

interface FloatingSidebarProps {
  cards?: Array<{
    id: string;
    title: string;
    type: 'example' | 'milestone' | 'framework' | 'scenario' | 'resource' | 'insight' | 'concept' | 'pattern';
    image: string;
    summary: string;
    data: any;
  }>;
  path: string;
}

const cardTypeConfig = {
  example: {
    label: 'Examples',
    image: '/images/cards/example-cards.png',
    textColor: '#FFFFFF',
  },
  milestone: {
    label: 'Milestones',
    image: '/images/cards/milestone-cards.png',
    textColor: '#1a1a1a',
  },
  framework: {
    label: 'Frameworks',
    image: '/images/cards/framework-cards.png',
    textColor: '#FFFFFF',
  },
  scenario: {
    label: 'Scenarios',
    image: '/images/cards/scenario-cards.png',
    textColor: '#FFFFFF',
  },
  resource: {
    label: 'Resources',
    image: '/images/cards/resource-cards.png',
    textColor: '#FFFFFF',
  },
  insight: {
    label: 'Market Insights',
    image: '/images/cards/market-insights.png',
    textColor: '#FFFFFF',
  },
  concept: {
    label: 'Technical Concepts',
    image: '/images/cards/technical-concepts.png',
    textColor: '#FFFFFF',
  },
  pattern: {
    label: 'Operational Patterns',
    image: '/images/cards/operational-pattern.png',
    textColor: '#FFFFFF',
  },
};

export function FloatingSidebar({ cards, path }: FloatingSidebarProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!cards || cards.length === 0) return null;

  // Group cards by type
  const cardsByType = cards.reduce((acc, card) => {
    if (!acc[card.type]) {
      acc[card.type] = [];
    }
    acc[card.type].push(card);
    return acc;
  }, {} as Record<string, typeof cards>);

  return (
    <>
      {/* Mobile Sidebar Indicator */}
      <button
        className={`mobile-sidebar-toggle ${isMobileOpen ? 'hidden' : ''}`}
        onClick={() => setIsMobileOpen(true)}
        aria-label="Explore related content"
      >
        <span className="toggle-icon">📚</span>
        <span className="toggle-text">Explore</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="toggle-arrow">
          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Sidebar */}
      <aside className={`floating-sidebar ${isSticky ? 'sticky' : ''} ${isMobileOpen ? 'mobile-open' : ''}`}>
        {/* Mobile Close Button */}
        <button
          className="mobile-close-btn"
          onClick={() => setIsMobileOpen(false)}
          aria-label="Close sidebar"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Section Grid - 2x2 */}
        <div className="section-grid">
          {Object.entries(cardsByType).map(([type, typeCards]) => {
            const config = cardTypeConfig[type as keyof typeof cardTypeConfig];
            if (!config) return null;

            return (
              <SectionCard
                key={type}
                sectionType={type as any}
                sectionLabel={config.label}
                cards={typeCards}
                path={path}
                backgroundImage={config.image}
                textColor={config.textColor}
              />
            );
          })}
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <style jsx>{`
        /* Mobile Toggle Button */
        .mobile-sidebar-toggle {
          position: fixed;
          right: 20px;
          bottom: 80px;
          background: white;
          border: 2px solid #936639;
          border-radius: 30px;
          padding: 12px 20px;
          display: none;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
          z-index: 999;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .mobile-sidebar-toggle:hover {
          background: #936639;
          color: white;
          transform: scale(1.1);
        }

        .mobile-sidebar-toggle.hidden {
          display: none;
        }

        .toggle-icon {
          font-size: 20px;
        }

        .toggle-text {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 14px;
          font-weight: 600;
        }

        .toggle-arrow {
          width: 16px;
          height: 16px;
        }

        /* Sidebar */
        .floating-sidebar {
          position: relative;
          animation: fadeIn 0.8s ease-out 0.4s both;
        }

        .floating-sidebar.sticky {
          position: sticky;
          top: 140px;
          align-self: start;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Mobile Close Button */
        .mobile-close-btn {
          display: none;
          position: absolute;
          top: 16px;
          right: 16px;
          background: white;
          border: 1px solid rgba(26, 26, 26, 0.1);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 10;
        }

        .mobile-close-btn:hover {
          background: #f5f5f5;
          transform: rotate(90deg);
        }

        .mobile-close-btn svg {
          color: #1a1a1a;
        }

        /* Section Grid - 2x4 */
        .section-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        /* Mobile Overlay */
        .mobile-overlay {
          display: none;
        }

        /* Mobile Styles */
        @media (max-width: 1200px) {
          .mobile-sidebar-toggle {
            display: flex;
          }

          .floating-sidebar {
            position: fixed;
            top: 0;
            right: -100%;
            width: 90%;
            max-width: 400px;
            height: 100vh;
            background: #FFFCF5;
            padding: 60px 20px 20px;
            overflow-y: auto;
            transition: right 0.3s ease;
            z-index: 1000;
            box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
          }

          .floating-sidebar.mobile-open {
            right: 0;
          }

          .floating-sidebar.sticky {
            position: fixed;
            top: 0;
          }

          .mobile-close-btn {
            display: flex;
          }

          .mobile-overlay {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
          }

          .section-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .section-grid {
            gap: 6px;
          }
        }
      `}</style>
    </>
  );
}
