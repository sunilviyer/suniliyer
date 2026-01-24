'use client';

import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
  articleSlug?: string;
  download_url?: string;
  learn_more?: string;
}

interface InlineContextCardProps {
  trigger: string;
  card?: CardData;
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
  const [isMounted, setIsMounted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const contextCard = useCard(cardId || '');
  const cardData = card || contextCard;

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  if (!cardData) {
    if (cardId) {
      console.error(`Card not found: ${cardId}`);
    }
    return <span style={{ color: '#A0847C', fontWeight: 600, display: 'inline' }}>{trigger}</span>;
  }

  const style = cardTypeStyles[cardData.type];

  const handleClick = () => {
    if (cardData.type === 'article-link' && cardData.articleSlug) {
      window.location.href = `/articles/${cardData.articleSlug}`;
      return;
    }
    setIsExpanded(!isExpanded);
  };

  const splitToLetters = (text: string) =>
    [...text].map((ch, i) => (
      <span key={i} className="trigger-letter">
        {ch.trim() === "" ? "\u00A0" : ch}
      </span>
    ));

  const modalContent = isMounted && isExpanded ? (
    <AnimatePresence>
      {isExpanded && (
        <>
          <motion.div
            className="card-backdrop-portal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClick}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              zIndex: 9998,
            }}
          />

          <motion.div
            className="card-modal-portal-wrapper"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{
              duration: 0.35,
              ease: [0.4, 0, 0.2, 1]
            }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              pointerEvents: 'none',
            }}
          >
            <motion.div
              className="card-main-portal-layer"
              style={{
                borderRadius: '24px',
                padding: '0',
                position: 'relative',
                overflow: 'hidden',
                isolation: 'isolate',
                background: '#1a1a1a',
                pointerEvents: 'auto',
                width: '100%',
                maxWidth: '700px',
                maxHeight: '85vh',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)'
              }}
            >
              <div
                className="card-background-blur"
                style={{
                  backgroundImage: `url(${style.backgroundImage})`,
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px',
                  right: '-20px',
                  bottom: '-20px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  filter: 'blur(4px)',
                  zIndex: -1,
                }}
              />

              <div className="card-content-area" style={{
                position: 'relative',
                padding: '40px',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <div
                  onClick={handleClick}
                  className="card-close-button"
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#ffffff',
                    transition: 'all 0.2s ease',
                    zIndex: 20,
                  }}
                >
                  ✕
                </div>

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
                      color: '#ffffff',
                      fontFamily: "'DM Sans', -apple-system, sans-serif",
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '1.3px',
                      fontWeight: 700,
                      padding: '6px 14px',
                      borderRadius: '16px',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    {style.label}
                  </span>
                </motion.div>

                <motion.div
                  className="card-title"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '26px',
                    fontWeight: 700,
                    color: '#ffffff',
                    margin: 0,
                    lineHeight: 1.3,
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
                  }}
                >
                  {cardData.title}
                </motion.div>

                <motion.div
                  className="card-summary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  style={{
                    fontFamily: 'var(--font-funnel-sans), -apple-system, sans-serif',
                    fontSize: '16px',
                    lineHeight: 1.7,
                    color: 'rgba(255, 255, 255, 0.95)',
                    margin: 0,
                    textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)',
                    fontWeight: 400,
                  }}
                >
                  {cardData.summary}
                </motion.div>

                {cardData.tags && cardData.tags.length > 0 && (
                  <motion.div
                    className="card-tags"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '16px',
                      rowGap: '12px',
                      position: 'relative',
                      zIndex: 10,
                    }}
                  >
                    {cardData.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="card-tag"
                        style={{
                          fontFamily: "'DM Sans', -apple-system, sans-serif",
                          fontSize: '11px',
                          padding: '6px 13px',
                          borderRadius: '16px',
                          border: '1px solid rgba(255, 255, 255, 0.6)',
                          background: 'rgba(255, 255, 255, 0.3)',
                          backdropFilter: 'blur(10px)',
                          color: '#ffffff',
                          fontWeight: 500,
                          textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
                          margin: 0,
                          position: 'relative',
                          zIndex: 10,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                )}

                {(cardData.learn_more || cardData.download_url) && (
                  <motion.div
                    className="card-actions-container"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.35 }}
                    style={{
                      display: 'flex',
                      gap: '16px',
                      marginTop: '12px',
                      flexWrap: 'nowrap',
                      justifyContent: 'flex-start',
                    }}
                  >
                    {cardData.learn_more && (
                      <a
                        href={cardData.learn_more.startsWith('/') ? cardData.learn_more : `/articles/${cardData.learn_more}`}
                        className="card-action-button learn-more-button"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '14px 32px',
                          borderRadius: '28px',
                          fontFamily: 'var(--font-funnel-sans), -apple-system, sans-serif',
                          fontSize: '15px',
                          fontWeight: 600,
                          textDecoration: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          border: 'none',
                          color: '#ffffff',
                          textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                          whiteSpace: 'nowrap',
                          background: 'linear-gradient(135deg, #588157 0%, #6a9b69 100%)',
                        }}
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
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '14px 32px',
                          borderRadius: '28px',
                          fontFamily: 'var(--font-funnel-sans), -apple-system, sans-serif',
                          fontSize: '15px',
                          fontWeight: 600,
                          textDecoration: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          border: 'none',
                          color: '#ffffff',
                          textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                          whiteSpace: 'nowrap',
                          background: 'linear-gradient(135deg, #9d0208 0%, #b91319 100%)',
                        }}
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
  ) : null;

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
      </span>

      {modalContent && createPortal(modalContent, document.body)}

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
      `}</style>
    </>
  );
}
