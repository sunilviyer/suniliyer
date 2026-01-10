'use client';

import { useState } from 'react';

interface FrameworkCardProps {
  framework: {
    id: string;
    title: string;
    jurisdiction?: string;
    yearEnacted: number;
    type: 'regulation' | 'standard' | 'guideline' | 'law' | 'executive_order';
    overview: string;
    keyRequirements?: string[];
    penalties?: string;
    officialUrl?: string;
  };
  index: number;
  path: string;
}

const typeConfig = {
  regulation: { badge: '⚖️ REGULATION', color: '#DD6B20' },
  standard: { badge: '📐 STANDARD', color: '#3182CE' },
  guideline: { badge: '📋 GUIDELINE', color: '#38A169' },
  law: { badge: '🏛️ LAW', color: '#805AD5' },
  executive_order: { badge: '🖊️ EXECUTIVE ORDER', color: '#E53E3E' }
};

export function FrameworkCard({ framework, index, path }: FrameworkCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const config = typeConfig[framework.type];

  return (
    <>
      <div
        className="framework-card"
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          animationDelay: `${index * 0.1}s`,
          borderLeftColor: config.color
        }}
      >
        <div className="card-header">
          <span className="framework-badge" style={{ color: config.color, backgroundColor: `${config.color}15` }}>
            {config.badge}
          </span>
          <span className="framework-meta">
            {framework.jurisdiction && <span>{framework.jurisdiction}</span>}
            {framework.jurisdiction && framework.yearEnacted && <span> · </span>}
            {framework.yearEnacted && <span>{framework.yearEnacted}</span>}
          </span>
        </div>

        <h4 className="framework-title">{framework.title}</h4>

        <p className="framework-overview">{framework.overview}</p>

        {framework.keyRequirements && framework.keyRequirements.length > 0 && (
          <div className={`key-requirements ${isExpanded ? 'expanded' : ''}`}>
            <strong>Key Requirements:</strong>
            <ul>
              {framework.keyRequirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>
        )}

        {framework.penalties && (
          <div className="framework-penalties">
            <span className="penalty-icon">⚠️</span>
            <strong>Penalties:</strong> {framework.penalties}
          </div>
        )}

        {framework.officialUrl && (
          <div className="framework-link">
            <a href={framework.officialUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              📄 Official Document →
            </a>
          </div>
        )}
      </div>

      <style jsx>{`
        .framework-card {
          background: white;
          border: 1px solid rgba(26, 26, 26, 0.1);
          border-left: 4px solid #DD6B20;
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

        .framework-card:hover {
          border-color: currentColor;
          box-shadow: 0 4px 12px rgba(221, 107, 32, 0.15);
          transform: translateY(-2px);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          flex-wrap: wrap;
          gap: 8px;
        }

        .framework-badge {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 4px 10px;
          border-radius: 4px;
        }

        .framework-meta {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #6b6b6b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .framework-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 20px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 12px 0;
          line-height: 1.3;
        }

        .framework-overview {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 15px;
          line-height: 1.6;
          color: #4a4a4a;
          margin: 0 0 16px 0;
        }

        .key-requirements {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .key-requirements.expanded {
          max-height: 500px;
        }

        .key-requirements strong {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #1a1a1a;
          display: block;
          margin-bottom: 8px;
        }

        .key-requirements ul {
          margin: 0;
          padding-left: 20px;
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 14px;
          line-height: 1.6;
          color: #4a4a4a;
        }

        .key-requirements li {
          margin-bottom: 6px;
        }

        .framework-penalties {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 14px;
          line-height: 1.6;
          color: #E53E3E;
          background: rgba(229, 62, 62, 0.05);
          padding: 12px;
          border-radius: 6px;
          margin-top: 12px;
        }

        .penalty-icon {
          font-size: 16px;
        }

        .framework-penalties strong {
          font-weight: 600;
        }

        .framework-link {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid rgba(26, 26, 26, 0.1);
        }

        .framework-link a {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #936639;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .framework-link a:hover {
          color: #7a5430;
        }

        @media (max-width: 768px) {
          .framework-card {
            padding: 16px;
          }

          .framework-title {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
}
