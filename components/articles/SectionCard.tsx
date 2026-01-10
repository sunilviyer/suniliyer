'use client';

import { useState } from 'react';
import { ExampleCard } from './ExampleCard';
import { MilestoneCard } from './MilestoneCard';
import { FrameworkCard } from './FrameworkCard';
import { ScenarioCard } from './ScenarioCard';
import { ResourceCard } from './ResourceCard';
import { MarketInsightCard } from './MarketInsightCard';
import { TechnicalConceptCard } from './TechnicalConceptCard';
import { OperationalPatternCard } from './OperationalPatternCard';

interface SectionCardProps {
  sectionType: 'example' | 'milestone' | 'framework' | 'scenario' | 'resource' | 'insight' | 'concept' | 'pattern';
  sectionLabel: string;
  cards: Array<{
    id: string;
    title: string;
    type: string;
    image: string;
    summary: string;
    data: Record<string, unknown>;
  }>;
  backgroundImage: string;
  textColor: string;
}

export function SectionCard({ sectionType, sectionLabel, cards, backgroundImage, textColor }: SectionCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (cardId: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const renderCardContent = (card: { id: string; title: string; type: string; image: string; summary: string; data: Record<string, unknown> }) => {
    switch (sectionType) {
      case 'example':
        return <ExampleCard example={card.data as any} index={0} isActive={true} onClick={() => {}} />;
      case 'milestone':
        return <MilestoneCard milestone={card.data as any} index={0} />;
      case 'framework':
        return <FrameworkCard framework={card.data as any} index={0} />;
      case 'scenario':
        return <ScenarioCard scenario={card.data as any} index={0} />;
      case 'resource':
        return <ResourceCard resource={card.data as any} index={0} />;
      case 'insight':
        return <MarketInsightCard insight={card.data as any} index={0} />;
      case 'concept':
        return <TechnicalConceptCard concept={card.data as any} index={0} />;
      case 'pattern':
        return <OperationalPatternCard pattern={card.data as any} index={0} />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Section Square Card */}
      <div
        className="section-square"
        onClick={() => setIsModalOpen(true)}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="section-content">
          <h3 className="section-label" style={{ color: textColor }}>{sectionLabel}</h3>
          <span className="section-count" style={{ color: textColor }}>{cards.length}</span>
        </div>
      </div>

      {/* Modal with All Cards in Section */}
      {isModalOpen && (
        <>
          <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setIsModalOpen(false)} aria-label="Close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className="modal-content">
                <h2 className="modal-title">{sectionLabel}</h2>

                {/* Accordion list of all cards in this section */}
                <div className="cards-accordion">
                  {cards.map((card, index) => (
                    <div key={card.id} className="card-accordion-item">
                      <div
                        className="card-accordion-header"
                        onClick={() => toggleCard(card.id)}
                      >
                        <div className="header-left">
                          <span className="item-number">{index + 1}</span>
                          <h4 className="item-title">{card.title}</h4>
                        </div>
                        <svg
                          className={`expand-icon ${expandedCards[card.id] ? 'expanded' : ''}`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M5 7.5L10 12.5L15 7.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      {expandedCards[card.id] && (
                        <div className="card-accordion-body">
                          {renderCardContent(card)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        .section-square {
          aspect-ratio: 1;
          width: 100%;
          max-width: 120px;
          max-height: 120px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          animation: fadeInScale 0.4s ease-out both;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          position: relative;
          overflow: hidden;
        }

        .section-square::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .section-square:hover::before {
          opacity: 1;
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .section-square:hover {
          transform: translateY(-4px) scale(1.08);
          box-shadow: 0 0 30px rgba(147, 102, 57, 0.8),
                      0 9px 22px rgba(0, 0, 0, 0.25);
          animation: pop 0.3s ease-out;
        }

        @keyframes pop {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-6px) scale(1.12);
          }
          100% {
            transform: translateY(-4px) scale(1.08);
          }
        }

        .section-content {
          text-align: center;
          z-index: 1;
        }

        .section-label {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 13px;
          font-weight: 700;
          margin: 0 0 4px 0;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
          user-select: none;
          line-height: 1.2;
        }

        .section-count {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 10px;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(8px);
          padding: 3px 8px;
          border-radius: 12px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          display: inline-block;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.2s ease-out;
          overflow-y: auto;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .modal-container {
          position: relative;
          background: #FFFCF5;
          border-radius: 12px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          animation: slideUp 0.3s ease-out;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-close {
          position: sticky;
          top: 20px;
          right: 20px;
          float: right;
          background: white;
          border: 1px solid rgba(26, 26, 26, 0.1);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 10;
        }

        .modal-close:hover {
          background: #f5f5f5;
          border-color: rgba(26, 26, 26, 0.2);
          transform: rotate(90deg);
        }

        .modal-close svg {
          color: #1a1a1a;
        }

        .modal-content {
          padding: 20px 40px 40px;
          clear: both;
        }

        .modal-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 36px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 32px 0;
          letter-spacing: -0.02em;
        }

        /* Cards Accordion */
        .cards-accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .card-accordion-item {
          background: white;
          border: 1px solid rgba(26, 26, 26, 0.1);
          border-radius: 8px;
          overflow: hidden;
        }

        .card-accordion-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .card-accordion-header:hover {
          background: rgba(147, 102, 57, 0.05);
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 16px;
          flex: 1;
        }

        .item-number {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: white;
          background: #936639;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .item-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
        }

        .expand-icon {
          color: #936639;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .expand-icon.expanded {
          transform: rotate(180deg);
        }

        .card-accordion-body {
          padding: 20px;
          background: rgba(147, 102, 57, 0.02);
          border-top: 1px solid rgba(26, 26, 26, 0.1);
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 3000px;
          }
        }

        @media (max-width: 768px) {
          .section-square {
            border-radius: 6px;
            max-width: 100%;
          }

          .section-label {
            font-size: 14px;
          }

          .section-count {
            font-size: 11px;
            padding: 3px 10px;
          }

          .modal-container {
            max-height: 95vh;
            border-radius: 12px 12px 0 0;
          }

          .modal-content {
            padding: 20px;
          }

          .modal-close {
            top: 10px;
            right: 10px;
          }

          .modal-title {
            font-size: 28px;
            margin-bottom: 24px;
          }

          .item-title {
            font-size: 16px;
          }

          .card-accordion-header {
            padding: 12px 16px;
          }

          .card-accordion-body {
            padding: 16px;
          }
        }
      `}</style>
    </>
  );
}
