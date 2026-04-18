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

interface CompactCardProps {
  card: {
    id: string;
    title: string;
    type: 'example' | 'milestone' | 'framework' | 'scenario' | 'resource' | 'insight' | 'concept' | 'pattern';
    image: string;
    summary: string;
    data: Record<string, unknown>;
  };
  index: number;
}

export function CompactCard({ card, index }: CompactCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderExpandedContent = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = card.data as any;
    switch (card.type) {
      case 'example':
        return <ExampleCard example={data} index={0} isActive={true} onClick={() => {}} />;
      case 'milestone':
        return <MilestoneCard milestone={data} index={0} />;
      case 'framework':
        return <FrameworkCard framework={data} index={0} />;
      case 'scenario':
        return <ScenarioCard scenario={data} index={0} />;
      case 'resource':
        return <ResourceCard resource={data} index={0} />;
      case 'insight':
        return <MarketInsightCard insight={data} index={0} />;
      case 'concept':
        return <TechnicalConceptCard concept={data} index={0} />;
      case 'pattern':
        return <OperationalPatternCard pattern={data} index={0} />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Numbered Square Card */}
      <div
        className="numbered-card"
        onClick={() => setIsModalOpen(true)}
        style={{ animationDelay: `${index * 0.05}s` }}
      >
        <span className="card-number">{index + 1}</span>
      </div>

      {/* Modal with Full Content */}
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
                {renderExpandedContent()}
              </div>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        .numbered-card {
          aspect-ratio: 1;
          background: linear-gradient(135deg, #936639 0%, #7a5530 100%);
          border-radius: 12px;
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

        .numbered-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .numbered-card:hover::before {
          opacity: 1;
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .numbered-card:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 0 30px rgba(147, 102, 57, 0.6),
                      0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .card-number {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 48px;
          font-weight: 700;
          color: white;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          user-select: none;
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
          z-index: 9999;
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
          max-width: 800px;
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

        @media (max-width: 768px) {
          .numbered-card {
            border-radius: 8px;
          }

          .card-number {
            font-size: 36px;
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
        }
      `}</style>
    </>
  );
}
