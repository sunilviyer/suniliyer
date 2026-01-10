'use client';

import { useEffect } from 'react';
import { ExampleCard } from './ExampleCard';
import { MilestoneCard } from './MilestoneCard';
import { FrameworkCard } from './FrameworkCard';
import { ScenarioCard } from './ScenarioCard';
import { ResourceCard } from './ResourceCard';
import { MarketInsightCard } from './MarketInsightCard';
import { TechnicalConceptCard } from './TechnicalConceptCard';
import { OperationalPatternCard } from './OperationalPatternCard';

interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
  card: {
    type: 'example' | 'milestone' | 'framework' | 'scenario' | 'resource' | 'insight' | 'concept' | 'pattern';
    data: Record<string, unknown>;
  };
  path: string;
}

export function CardModal({ isOpen, onClose, card, path }: CardModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const renderCard = () => {
    switch (card.type) {
      case 'example':
        return <ExampleCard example={card.data} index={0} isActive={true} onClick={() => {}} path={path} />;
      case 'milestone':
        return <MilestoneCard milestone={card.data} index={0} path={path} />;
      case 'framework':
        return <FrameworkCard framework={card.data} index={0} path={path} />;
      case 'scenario':
        return <ScenarioCard scenario={card.data} index={0} path={path} />;
      case 'resource':
        return <ResourceCard resource={card.data} index={0} path={path} />;
      case 'insight':
        return <MarketInsightCard insight={card.data} index={0} path={path} />;
      case 'concept':
        return <TechnicalConceptCard concept={card.data} index={0} path={path} />;
      case 'pattern':
        return <OperationalPatternCard pattern={card.data} index={0} path={path} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="modal-content">
            {renderCard()}
          </div>
        </div>
      </div>

      <style jsx>{`
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
