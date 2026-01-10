'use client';

import { useState } from 'react';

interface MilestoneCardProps {
  milestone: {
    id: string;
    title: string;
    year: number;
    significance: string;
    keyFigures?: string[];
    impact?: string;
    location?: string;
  };
  index: number;
  path: string;
}

export function MilestoneCard({ milestone, index, path }: MilestoneCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div
        className="milestone-card"
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="card-header">
          <span className="milestone-badge">🏆 MILESTONE</span>
          <span className="milestone-year">{milestone.year}</span>
        </div>

        <h4 className="milestone-title">{milestone.title}</h4>

        <p className="milestone-significance">{milestone.significance}</p>

        {milestone.keyFigures && milestone.keyFigures.length > 0 && (
          <div className="key-figures">
            <span className="figures-icon">👤</span>
            <span className="figures-text">{milestone.keyFigures.join(', ')}</span>
          </div>
        )}

        {milestone.location && (
          <div className="milestone-location">
            <span className="location-icon">📍</span>
            <span className="location-text">{milestone.location}</span>
          </div>
        )}

        {milestone.impact && (
          <div className={`milestone-impact ${isExpanded ? 'expanded' : ''}`}>
            <strong>Impact:</strong> {milestone.impact}
          </div>
        )}
      </div>

      <style jsx>{`
        .milestone-card {
          background: white;
          border: 1px solid rgba(26, 26, 26, 0.1);
          border-left: 4px solid #D69E2E;
          border-radius: 8px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          animation: slideInUp 0.5s ease-out both;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .milestone-card:hover {
          border-color: #D69E2E;
          box-shadow: 0 4px 12px rgba(214, 158, 46, 0.15);
          transform: translateY(-2px);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .milestone-badge {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #B7791F;
          background: rgba(214, 158, 46, 0.1);
          padding: 4px 10px;
          border-radius: 4px;
        }

        .milestone-year {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #D69E2E;
        }

        .milestone-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 20px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 12px 0;
          line-height: 1.3;
        }

        .milestone-significance {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 15px;
          line-height: 1.6;
          color: #4a4a4a;
          margin: 0 0 16px 0;
        }

        .key-figures,
        .milestone-location {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 14px;
          color: #6b6b6b;
          margin-bottom: 8px;
        }

        .figures-icon,
        .location-icon {
          font-size: 14px;
          opacity: 0.7;
        }

        .milestone-impact {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 14px;
          line-height: 1.6;
          color: #4a4a4a;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid rgba(26, 26, 26, 0.1);
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .milestone-impact.expanded {
          max-height: 200px;
        }

        .milestone-impact strong {
          color: #1a1a1a;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .milestone-card {
            padding: 16px;
          }

          .milestone-title {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
}
