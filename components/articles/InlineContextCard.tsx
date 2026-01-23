'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCard } from './CardContext';
import { CardType } from '@/lib/db';

interface CardData {
  id: string;
  title: string;
  type: CardType;
  icon?: string;
  summary: string;
  tags?: string[];
  articleSlug?: string; // For article-link type
  download_url?: string; // For downloadable resources
  learn_more?: string; // Article slug for "Learn More" link
}

interface InlineContextCardProps {
  trigger: string;
  // Old pattern - pass card object directly (for backward compatibility)
  card?: CardData;
  // New pattern - pass cardId to fetch from database/context
  cardId?: string;
}

const cardTypeStyles: Record<CardType, {
  color: string;
  badgeColor: string;
  label: string;
  backgroundImage: string;
}> = {
  concept: {
    color: '#718096',
    badgeColor: '#A0AEC0',
    label: 'CONCEPT',
    backgroundImage: '/images/cards/technical-concepts.png'
  },
  example: {
    color: '#A0847C',
    badgeColor: '#B5A09E',
    label: 'EXAMPLE',
    backgroundImage: '/images/cards/example-cards.png'
  },
  milestone: {
    color: '#D69E2E',
    badgeColor: '#ECC94B',
    label: 'MILESTONE',
    backgroundImage: '/images/cards/milestone-cards.png'
  },
  framework: {
    color: '#A0887C',
    badgeColor: '#B5A89E',
    label: 'FRAMEWORK',
    backgroundImage: '/images/cards/framework-cards.png'
  },
  resource: {
    color: '#7A9E9E',
    badgeColor: '#9EB5B5',
    label: 'RESOURCE',
    backgroundImage: '/images/cards/resource-cards.png'
  },
  insight: {
    color: '#38A169',
    badgeColor: '#48BB78',
    label: 'INSIGHT',
    backgroundImage: '/images/cards/market-insights.png'
  },
  scenario: {
    color: '#7A8A9E',
    badgeColor: '#9EA8B5',
    label: 'SCENARIO',
    backgroundImage: '/images/cards/scenario-cards.png'
  },
  'operational-pattern': {
    color: '#5A67D8',
    badgeColor: '#667EEA',
    label: 'OPERATIONAL PATTERN',
    backgroundImage: '/images/cards/operational-pattern.png'
  },
  'market-insight': {
    color: '#38A169',
    badgeColor: '#48BB78',
    label: 'MARKET INSIGHT',
    backgroundImage: '/images/cards/market-insights.png'
  },
  'technical-concept': {
    color: '#718096',
    badgeColor: '#A0AEC0',
    label: 'TECHNICAL CONCEPT',
    backgroundImage: '/images/cards/technical-concepts.png'
  },
  'article-link': {
    color: '#6366F1',
    badgeColor: '#818CF8',
    label: 'RELATED ARTICLE',
    backgroundImage: '/images/cards/example-cards.png'
  },
  trend: {
    color: '#9F7AEA',
    badgeColor: '#B794F4',
    label: 'TREND',
    backgroundImage: '/images/cards/market-insights.png'
  },
  quote: {
    color: '#ED8936',
    badgeColor: '#F6AD55',
    label: 'QUOTE',
    backgroundImage: '/images/cards/example-cards.png'
  },
};

export function InlineContextCard({ trigger, card, cardId }: InlineContextCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Get card data from either prop (old pattern) or context hook (new pattern)
  // MUST call hooks unconditionally before any early returns
  const contextCard = useCard(cardId || '');
  const cardData = card || contextCard;

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  // If no card data, show plain trigger text
  if (!cardData) {
    if (cardId) {
      console.error(`Card not found: ${cardId}`);
    }
    return <span style={{ color: '#A0847C', fontWeight: 600, display: 'inline' }}>{trigger}</span>;
  }

  const style = cardTypeStyles[cardData.type];

  const handleClick = () => {
    // If article-link type, navigate to article instead of expanding
    if (cardData.type === 'article-link' && cardData.articleSlug) {
      window.location.href = `/articles/${cardData.articleSlug}`;
      return;
    }
    setIsExpanded(!isExpanded);
  };

  // Split trigger text into letters for animation
  const splitToLetters = (text: string) =>
    [...text].map((ch, i) => (
      <span key={i} className="trigger-letter">
        {ch.trim() === "" ? "\u00A0" : ch}
      </span>
    ));

  return (
    <>
      <span className="inline-card-container" ref={cardRef} suppressHydrationWarning>
        <span
          className={`inline-card-trigger ${isHovered ? 'hovered' : ''}`}
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            color: style.color,
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          <span className="trigger-text">
            <span className="trigger-text-block">
              {splitToLetters(trigger)}
            </span>
            <span className="trigger-text-block" aria-hidden="true">
              {splitToLetters(trigger)}
            </span>
          </span>
          <i className="ph-bold ph-arrow-up-right trigger-arrow" style={{ fontSize: '14px' }} />
        </span>

        <AnimatePresence>
          {isExpanded && (
            <>
              {/* Backdrop Blur Overlay */}
              <motion.div
                className="card-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={handleClick}
              />

              {/* Modal Card Container */}
              <motion.div
                className="card-modal-container"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{
                  duration: 0.35,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                {/* Main Card */}
                <motion.div
                  className="card-main-layer"
                  style={{
                    borderRadius: '24px',
                    padding: '0',
                    position: 'relative',
                    overflow: 'hidden',
                    isolation: 'isolate',
                    background: '#1a1a1a'
                  }}
                >
                  {/* Blurred Background Image Layer */}
                  <div
                    className="card-background-blur"
                    style={{
                      backgroundImage: `url(${style.backgroundImage})`,
                    }}
                  />

                  {/* Card Content Area */}
                  <div className="card-content-area">
                    {/* Close Button - positioned at top-right */}
                    <div
                      onClick={handleClick}
                      className="card-close-button"
                    >
                      ✕
                    </div>

                    {/* Card Header */}
                    <motion.div
                      className="card-header"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                    >
                      <span
                        className="card-type-label"
                        style={{
                          backgroundColor: style.badgeColor,
                          color: '#ffffff'
                        }}
                      >
                        {style.label}
                      </span>
                    </motion.div>

                    {/* Card Title */}
                    <motion.div
                      className="card-title"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      style={{ color: '#ffffff' }}
                    >
                      {cardData.title}
                    </motion.div>

                    {/* Card Summary */}
                    <motion.div
                      className="card-summary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.25 }}
                      style={{ color: '#ffffff' }}
                    >
                      {cardData.summary}
                    </motion.div>

                    {/* Card Tags */}
                    {cardData.tags && cardData.tags.length > 0 && (
                      <motion.div
                        className="card-tags"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        {cardData.tags.map((tag, index) => (
                          <span key={index} className="card-tag" style={{ color: '#ffffff' }}>
                            {tag}
                          </span>
                        ))}
                      </motion.div>
                    )}

                    {/* Action Buttons - Flexbox Container */}
                    {(cardData.learn_more || cardData.download_url) && (
                      <motion.div
                        className="card-actions-container"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.35 }}
                      >
                        {cardData.learn_more && (
                          <a
                            href={cardData.learn_more.startsWith('/') ? cardData.learn_more : `/articles/${cardData.learn_more}`}
                            className="card-action-button learn-more-button"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Learn More
                          </a>
                        )}
                        {cardData.download_url && (
                          <a
                            href={cardData.download_url}
                            download
                            className="card-action-button download-button"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Download
                          </a>
                        )}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </span>

      <style jsx>{`
        .inline-card-container {
          position: relative;
          display: inline;
        }

        .inline-card-trigger {
          position: relative;
          font-weight: 600;
          cursor: pointer;
          padding-bottom: 2px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        /* Modal Backdrop with Blur */
        .card-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 9998;
        }

        /* Modal Container - Centers the Card */
        .card-modal-container {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          pointer-events: none;
        }

        .card-modal-container > div {
          pointer-events: auto;
        }

        .trigger-text {
          position: relative;
          display: inline-block;
          overflow: hidden;
          vertical-align: top;
          height: 1.2em;
          line-height: 1.2;
        }

        .trigger-text-block {
          display: block;
          white-space: nowrap;
        }

        .trigger-text-block:last-child {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
        }

        :global(.trigger-letter) {
          display: inline-block;
          transition: transform 0.5s cubic-bezier(0.76, 0, 0.024, 1);
        }

        .inline-card-trigger.hovered :global(.trigger-letter) {
          transform: translateY(-100%);
        }

        .trigger-arrow {
          display: inline-block;
          transition: transform 0.3s cubic-bezier(0.76, 0, 0.024, 1);
          opacity: 0.7;
        }

        .inline-card-trigger.hovered .trigger-arrow {
          transform: translate(2px, -2px);
          opacity: 1;
        }

        /* Staggered delay for each letter */
        .trigger-text-block :global(.trigger-letter:nth-child(1)) { transition-delay: 0s; }
        .trigger-text-block :global(.trigger-letter:nth-child(2)) { transition-delay: 30ms; }
        .trigger-text-block :global(.trigger-letter:nth-child(3)) { transition-delay: 60ms; }
        .trigger-text-block :global(.trigger-letter:nth-child(4)) { transition-delay: 90ms; }
        .trigger-text-block :global(.trigger-letter:nth-child(5)) { transition-delay: 120ms; }
        .trigger-text-block :global(.trigger-letter:nth-child(6)) { transition-delay: 150ms; }
        .trigger-text-block :global(.trigger-letter:nth-child(7)) { transition-delay: 180ms; }
        .trigger-text-block :global(.trigger-letter:nth-child(8)) { transition-delay: 210ms; }
        .trigger-text-block :global(.trigger-letter:nth-child(9)) { transition-delay: 240ms; }
        .trigger-text-block :global(.trigger-letter:nth-child(10)) { transition-delay: 270ms; }
        .trigger-text-block :global(.trigger-letter:nth-child(11)) { transition-delay: 300ms; }
        .trigger-text-block :global(.trigger-letter:nth-child(12)) { transition-delay: 330ms; }
        .trigger-text-block :global(.trigger-letter:nth-child(13)) { transition-delay: 360ms; }
        .trigger-text-block :global(.trigger-letter:nth-child(14)) { transition-delay: 390ms; }
        .trigger-text-block :global(.trigger-letter:nth-child(15)) { transition-delay: 420ms; }
        .trigger-text-block :global(.trigger-letter:nth-child(16)) { transition-delay: 450ms; }
        .trigger-text-block :global(.trigger-letter:nth-child(17)) { transition-delay: 480ms; }
        .trigger-text-block :global(.trigger-letter:nth-child(18)) { transition-delay: 510ms; }
        .trigger-text-block :global(.trigger-letter:nth-child(19)) { transition-delay: 540ms; }
        .trigger-text-block :global(.trigger-letter:nth-child(20)) { transition-delay: 570ms; }

        /* Main Card Layer */
        .card-main-layer {
          position: relative;
          border-radius: 24px;
          width: 100%;
          max-width: 700px;
          max-height: 85vh;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4),
                      0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        /* Card Content Area with Padding */
        .card-content-area {
          position: relative;
          padding: 40px;
          z-index: 10;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .card-background-blur {
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          filter: blur(4px);
          z-index: -1;
        }

        .card-background-blur::after {
          content: '';
          position: absolute;
          top: 20px;
          left: 20px;
          right: 20px;
          bottom: 20px;
          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
          z-index: inherit;
        }

        /* Close Button */
        .card-close-button {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 20px;
          font-weight: 600;
          color: #ffffff;
          transition: all 0.2s ease;
          z-index: 20;
        }

        .card-close-button:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: scale(1.05);
        }

        .card-header {
          display: flex;
          align-items: center;
          margin: 0;
        }

        .card-type-label {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 1.3px;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
          color: #ffffff !important;
        }

        .card-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 26px;
          font-weight: 700;
          color: #ffffff !important;
          margin: 0;
          line-height: 1.3;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
        }

        .card-summary {
          font-family: var(--font-funnel-sans), -apple-system, sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.95) !important;
          margin: 0;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
          font-weight: 400;
        }

        /* Action Buttons Container - Flexbox */
        .card-actions-container {
          display: flex;
          gap: 12px;
          margin-top: 8px;
          flex-wrap: wrap;
        }

        .card-action-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 28px;
          border-radius: 28px;
          font-family: var(--font-funnel-sans), -apple-system, sans-serif;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          color: #ffffff !important;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
          flex: 1;
          min-width: 140px;
        }

        .card-action-button:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.3);
        }

        .card-action-button:active {
          transform: scale(0.98);
        }

        .learn-more-button {
          background: linear-gradient(135deg, #90a955 0%, #a3bd6b 100%);
        }

        .learn-more-button:hover {
          background: linear-gradient(135deg, #a3bd6b 0%, #b5ce80 100%);
        }

        .download-button {
          background: linear-gradient(135deg, #da627d 0%, #e37890 100%);
        }

        .download-button:hover {
          background: linear-gradient(135deg, #e37890 0%, #ec8ea3 100%);
        }

        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          row-gap: 12px;
          position: relative;
          z-index: 10;
        }

        .card-tag {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 11px;
          padding: 6px 13px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
          color: #ffffff !important;
          font-weight: 500;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
          margin: 0;
          position: relative;
          z-index: 10;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .card-modal-container {
            padding: 16px;
            align-items: flex-start;
            padding-top: 60px;
          }

          .card-main-layer {
            max-width: 100%;
            max-height: calc(100vh - 80px);
          }

          .card-content-area {
            padding: 32px 24px;
            gap: 14px;
          }

          .card-title {
            font-size: 22px;
          }

          .card-summary {
            font-size: 15px;
            line-height: 1.6;
          }

          .card-actions-container {
            flex-direction: column;
            gap: 10px;
            margin-top: 12px;
          }

          .card-action-button {
            width: 100%;
            min-height: 48px;
            padding: 16px 24px;
            font-size: 16px;
            min-width: unset;
          }

          .card-tags {
            gap: 10px;
          }

          .card-tag {
            font-size: 10px;
            padding: 5px 11px;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .card-content-area {
            padding: 24px 20px;
          }

          .card-title {
            font-size: 20px;
          }

          .card-close-button {
            width: 36px;
            height: 36px;
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
}
