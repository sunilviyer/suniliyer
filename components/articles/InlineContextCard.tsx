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
            <motion.div
              className="inline-card-expanded"
              initial={{
                height: 0,
                width: 0,
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                height: 'auto',
                width: 1050,
                opacity: 1,
                scale: 1
              }}
              exit={{
                height: 0,
                width: 0,
                opacity: 0,
                scale: 0.9
              }}
              transition={{
                duration: 0.35,
                ease: [0.4, 0, 0.2, 1]
              }}
              style={{
                borderRadius: '32px',
                overflow: 'hidden'
              }}
            >
              {/* Shadow Layer */}
              <motion.div
                className="card-shadow-layer"
                initial={{ x: 0, y: 0 }}
                animate={{ x: 4, y: 4 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                style={{
                  boxShadow: `0 0 30px ${style.color}80, 0 0 60px ${style.color}40`,
                  borderRadius: '32px'
                }}
              />

              {/* Main Card with Background Image */}
              <motion.div
                className="card-main-layer"
                style={{
                  boxShadow: `0 0 0 3px ${style.color}, 0 0 30px ${style.color}60, 0 8px 24px rgba(0, 0, 0, 0.3)`,
                  borderRadius: '32px',
                  padding: '48px',
                  position: 'relative',
                  overflow: 'hidden',
                  isolation: 'isolate'
                }}
              >
                {/* Blurred Background Image Layer */}
                <div
                  className="card-background-blur"
                  style={{
                    backgroundImage: `url(${style.backgroundImage})`,
                  }}
                />
                {/* Close Button - positioned at top-right of card */}
                <div
                  onClick={handleClick}
                  style={{
                    color: '#ffffff',
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'rgba(0, 0, 0, 0.8)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '20px',
                    fontWeight: '700',
                    backdropFilter: 'blur(10px)',
                    zIndex: 20,
                    margin: 0,
                    padding: 0
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)'}
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

                {/* Action Buttons */}
                {(cardData.learn_more || cardData.download_url) && (
                  <motion.div
                    className="card-actions"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.28 }}
                  >
                    {cardData.learn_more && (
                      <a
                        href={cardData.learn_more.startsWith('/') ? cardData.learn_more : `/articles/${cardData.learn_more}`}
                        className="card-action-button learn-more-button"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="ph-bold ph-book-open" />
                        <span>Learn More</span>
                      </a>
                    )}
                    {cardData.download_url && (
                      <a
                        href={cardData.download_url}
                        download
                        className="card-action-button download-button"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="ph-bold ph-download-simple" />
                        <span>Download</span>
                      </a>
                    )}
                  </motion.div>
                )}

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
              </motion.div>
            </motion.div>
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

        .inline-card-expanded {
          position: absolute;
          left: 0;
          top: calc(100% + 8px);
          z-index: 1000;
          border-radius: 32px;
          overflow: hidden;
        }

        .card-shadow-layer {
          position: absolute;
          inset: 0;
          background: transparent;
          border-radius: 32px;
          filter: blur(8px);
        }

        .card-main-layer {
          position: relative;
          border-radius: 32px;
          padding: 40px;
          min-height: 200px;
          display: flex;
          flex-direction: column;
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
          background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
          z-index: inherit;
        }

        .card-header {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          position: relative;
          z-index: 10;
        }

        .card-header > * {
          position: relative;
          z-index: 10;
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
          font-size: 24px;
          font-weight: 700;
          color: #ffffff !important;
          margin: 0 0 14px 0;
          line-height: 1.3;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8), 0 0 4px rgba(255, 255, 255, 0.8);
          position: relative;
          z-index: 10;
        }

        .card-summary {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 16px;
          line-height: 1.65;
          color: #ffffff !important;
          margin: 0 0 14px 0;
          flex-grow: 1;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.7), 0 0 3px rgba(255, 255, 255, 0.7);
          font-weight: 400;
          position: relative;
          z-index: 10;
        }

        .card-actions {
          display: flex;
          gap: 12px;
          margin: 16px 0 12px 0;
          position: relative;
          z-index: 10;
        }

        .card-action-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 20px;
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          color: #ffffff !important;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .card-action-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.6);
        }

        .card-action-button i {
          font-size: 18px;
        }

        .learn-more-button:hover {
          background: rgba(99, 102, 241, 0.3);
          border-color: rgba(99, 102, 241, 0.6);
        }

        .download-button:hover {
          background: rgba(56, 161, 105, 0.3);
          border-color: rgba(56, 161, 105, 0.6);
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

        @media (max-width: 768px) {
          .inline-card-expanded {
            position: fixed;
            left: 20px;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            max-width: calc(100vw - 40px);
            z-index: 10000;
          }
        }
      `}</style>
    </>
  );
}
