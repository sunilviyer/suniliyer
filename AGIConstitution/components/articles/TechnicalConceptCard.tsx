'use client';

interface TechnicalConceptCardProps {
  concept: {
    id: string;
    term: string;
    definition: string;
    plainEnglish: string;
    category: 'drift' | 'bias' | 'architecture' | 'method' | 'metric' | 'security';
    relatedTerms?: string[];
    linksToArticle?: string;
  };
  index: number;
}

const categoryConfig = {
  drift: { badge: '📉 DRIFT', color: '#DD6B20' },
  bias: { badge: '⚖️ BIAS', color: '#E53E3E' },
  architecture: { badge: '🏗️ ARCHITECTURE', color: '#3182CE' },
  method: { badge: '⚙️ METHOD', color: '#38A169' },
  metric: { badge: '📏 METRIC', color: '#805AD5' },
  security: { badge: '🔒 SECURITY', color: '#718096' }
};

export function TechnicalConceptCard({ concept, index }: TechnicalConceptCardProps) {
  const config = categoryConfig[concept.category];

  return (
    <>
      <div
        className="technical-concept-card"
        style={{
          animationDelay: `${index * 0.1}s`,
          borderLeftColor: config.color
        }}
      >
        <div className="card-header">
          <span className="concept-badge" style={{ color: config.color, backgroundColor: `${config.color}15` }}>
            {config.badge}
          </span>
        </div>

        <h4 className="concept-term">{concept.term}</h4>

        <p className="concept-definition">{concept.definition}</p>

        <div className="plain-english">
          <div className="bulb-icon">💡</div>
          <div>
            <strong>Plain English:</strong>
            <p>&ldquo;{concept.plainEnglish}&rdquo;</p>
          </div>
        </div>

        {concept.relatedTerms && concept.relatedTerms.length > 0 && (
          <div className="related-terms">
            <strong>🔗 Related:</strong> {concept.relatedTerms.join(', ')}
          </div>
        )}

        {concept.linksToArticle && (
          <div className="learn-more">
            <a href={`/terminology/${concept.linksToArticle}`}>
              📖 Learn more in Terminology Path →
            </a>
          </div>
        )}
      </div>

      <style jsx>{`
        .technical-concept-card {
          background: white;
          border: 1px solid rgba(26, 26, 26, 0.1);
          border-left: 4px solid #DD6B20;
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

        .concept-badge {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 4px 10px;
          border-radius: 4px;
        }

        .concept-term {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 22px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 12px 0;
          line-height: 1.3;
        }

        .concept-definition {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 15px;
          line-height: 1.6;
          color: #4a4a4a;
          margin: 0 0 20px 0;
        }

        .plain-english {
          display: flex;
          gap: 12px;
          background: rgba(56, 161, 105, 0.05);
          border-left: 3px solid #38A169;
          padding: 16px;
          border-radius: 6px;
          margin-bottom: 16px;
        }

        .bulb-icon {
          font-size: 20px;
          flex-shrink: 0;
        }

        .plain-english strong {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #38A169;
          display: block;
          margin-bottom: 6px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .plain-english p {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 15px;
          line-height: 1.6;
          color: #4a4a4a;
          margin: 0;
          font-style: italic;
        }

        .related-terms {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 14px;
          line-height: 1.6;
          color: #6b6b6b;
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(26, 26, 26, 0.1);
        }

        .related-terms strong {
          font-weight: 600;
          color: #1a1a1a;
        }

        .learn-more a {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #936639;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .learn-more a:hover {
          color: #7a5430;
        }

        @media (max-width: 768px) {
          .technical-concept-card {
            padding: 20px;
          }

          .concept-term {
            font-size: 20px;
          }
        }
      `}</style>
    </>
  );
}
