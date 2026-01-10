'use client';

import { useState } from 'react';

interface OperationalPatternCardProps {
  pattern: {
    id: string;
    name: string;
    context: string;
    problemSolved: string;
    implementation: Record<string, string>;
    benefits?: string[];
    challenges?: string[];
    usedBy?: string[];
  };
  index: number;
  _path: string;
}

export function OperationalPatternCard({ pattern, index,  _path }: OperationalPatternCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div
        className="operational-pattern-card"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="card-header">
          <span className="pattern-badge">⚙️ OPERATIONAL PATTERN</span>
        </div>

        <h4 className="pattern-name">{pattern.name}</h4>

        <p className="pattern-context">{pattern.context}</p>

        <div className="problem-solved">
          <strong>🎯 Problem Solved:</strong>
          <p>{pattern.problemSolved}</p>
        </div>

        <div className="implementation-section">
          <strong>Implementation:</strong>
          <div className="implementation-grid">
            {Object.entries(pattern.implementation).map(([key, value], idx) => (
              <div key={idx} className="implementation-row">
                <div className="impl-key">{key.replace(/_/g, ' ')}</div>
                <div className="impl-value">{value}</div>
              </div>
            ))}
          </div>
        </div>

        {(pattern.benefits || pattern.challenges || pattern.usedBy) && (
          <button
            className="details-toggle"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Show Less' : 'Show More Details'}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className={`chevron ${isExpanded ? 'rotated' : ''}`}
            >
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        <div className={`expanded-details ${isExpanded ? 'expanded' : ''}`}>
          {pattern.benefits && pattern.benefits.length > 0 && (
            <div className="benefits-section">
              <strong>✅ Benefits:</strong>
              <ul>
                {pattern.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}

          {pattern.challenges && pattern.challenges.length > 0 && (
            <div className="challenges-section">
              <strong>⚠️ Challenges:</strong>
              <ul>
                {pattern.challenges.map((challenge, idx) => (
                  <li key={idx}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          {pattern.usedBy && pattern.usedBy.length > 0 && (
            <div className="used-by-section">
              <strong>🏢 Used By:</strong> {pattern.usedBy.join(', ')}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .operational-pattern-card {
          background: white;
          border: 1px solid rgba(26, 26, 26, 0.1);
          border-left: 4px solid #5A67D8;
          border-radius: 8px;
          padding: 24px;
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

        .card-header {
          margin-bottom: 16px;
        }

        .pattern-badge {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #4C51BF;
          background: rgba(90, 103, 216, 0.1);
          padding: 4px 10px;
          border-radius: 4px;
        }

        .pattern-name {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 22px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 12px 0;
          line-height: 1.3;
        }

        .pattern-context {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 15px;
          line-height: 1.6;
          color: #4a4a4a;
          margin: 0 0 20px 0;
        }

        .problem-solved {
          background: rgba(90, 103, 216, 0.05);
          border-left: 3px solid #5A67D8;
          padding: 16px;
          border-radius: 6px;
          margin-bottom: 20px;
        }

        .problem-solved strong {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #5A67D8;
          display: block;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .problem-solved p {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 15px;
          line-height: 1.6;
          color: #4a4a4a;
          margin: 0;
        }

        .implementation-section {
          margin-bottom: 20px;
        }

        .implementation-section > strong {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #1a1a1a;
          display: block;
          margin-bottom: 12px;
        }

        .implementation-grid {
          border: 1px solid rgba(26, 26, 26, 0.1);
          border-radius: 6px;
          overflow: hidden;
        }

        .implementation-row {
          display: grid;
          grid-template-columns: 120px 1fr;
          border-bottom: 1px solid rgba(26, 26, 26, 0.1);
        }

        .implementation-row:last-child {
          border-bottom: none;
        }

        .impl-key {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: #1a1a1a;
          background: rgba(26, 26, 26, 0.03);
          padding: 12px 16px;
          text-transform: capitalize;
          border-right: 1px solid rgba(26, 26, 26, 0.1);
        }

        .impl-value {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 14px;
          line-height: 1.6;
          color: #4a4a4a;
          padding: 12px 16px;
        }

        .details-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: rgba(26, 26, 26, 0.02);
          border: 1px solid rgba(26, 26, 26, 0.1);
          border-radius: 6px;
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #5A67D8;
          padding: 12px 16px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .details-toggle:hover {
          background: rgba(90, 103, 216, 0.05);
          border-color: #5A67D8;
        }

        .chevron {
          transition: transform 0.3s ease;
        }

        .chevron.rotated {
          transform: rotate(180deg);
        }

        .expanded-details {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .expanded-details.expanded {
          max-height: 800px;
        }

        .benefits-section,
        .challenges-section,
        .used-by-section {
          margin-top: 20px;
        }

        .benefits-section strong,
        .challenges-section strong,
        .used-by-section strong {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #1a1a1a;
          display: block;
          margin-bottom: 10px;
        }

        .benefits-section ul,
        .challenges-section ul {
          margin: 0;
          padding-left: 20px;
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 14px;
          line-height: 1.6;
          color: #4a4a4a;
        }

        .benefits-section li,
        .challenges-section li {
          margin-bottom: 6px;
        }

        .used-by-section {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 14px;
          line-height: 1.6;
          color: #4a4a4a;
        }

        @media (max-width: 768px) {
          .operational-pattern-card {
            padding: 20px;
          }

          .pattern-name {
            font-size: 20px;
          }

          .implementation-row {
            grid-template-columns: 1fr;
          }

          .impl-key {
            border-right: none;
            border-bottom: 1px solid rgba(26, 26, 26, 0.1);
          }
        }
      `}</style>
    </>
  );
}
