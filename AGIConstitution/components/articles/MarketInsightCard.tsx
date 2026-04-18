'use client';

interface MarketInsightCardProps {
  insight: {
    id: string;
    metric: string;
    value: string;
    year: number;
    source: string;
    sourceUrl?: string;
    significance: string;
    trend?: 'increasing' | 'decreasing' | 'stable';
    comparison?: Array<{ label: string; value: string }>;
  };
  index: number;
}

export function MarketInsightCard({ insight, index }: MarketInsightCardProps) {
  const getTrendIcon = () => {
    switch (insight.trend) {
      case 'increasing': return '📈';
      case 'decreasing': return '📉';
      case 'stable': return '➡️';
      default: return '';
    }
  };

  return (
    <>
      <div
        className="market-insight-card"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="card-header">
          <span className="insight-badge">📊 MARKET DATA</span>
          <span className="insight-year">{insight.year}</span>
        </div>

        <h4 className="insight-metric">{insight.metric}</h4>

        <div className="insight-value">
          <div className="value-display">{insight.value}</div>
          {insight.trend && (
            <div className="trend-indicator">{getTrendIcon()}</div>
          )}
        </div>

        <div className="insight-significance">
          <strong>📈 Why It Matters:</strong>
          <p>{insight.significance}</p>
        </div>

        {insight.comparison && insight.comparison.length > 0 && (
          <div className="insight-comparison">
            <strong>{insight.trend ? `${getTrendIcon()} Trend:` : 'Comparison:'}</strong>
            <ul>
              {insight.comparison.map((item, idx) => (
                <li key={idx}>
                  <span className="comparison-label">{item.label}:</span>{' '}
                  <span className="comparison-value">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="insight-source">
          <span className="source-icon">📰</span>
          <span className="source-text">
            Source: {insight.source}
            {insight.sourceUrl && (
              <a href={insight.sourceUrl} target="_blank" rel="noopener noreferrer"> →</a>
            )}
          </span>
        </div>
      </div>

      <style jsx>{`
        .market-insight-card {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          border: 1px solid rgba(26, 26, 26, 0.1);
          border-left: 4px solid #38A169;
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
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .insight-badge {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #2F855A;
          background: rgba(56, 161, 105, 0.1);
          padding: 4px 10px;
          border-radius: 4px;
        }

        .insight-year {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #38A169;
        }

        .insight-metric {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 20px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 20px 0;
          line-height: 1.3;
        }

        .insight-value {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .value-display {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 40px;
          font-weight: 700;
          color: #38A169;
          text-align: center;
          padding: 20px 32px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(56, 161, 105, 0.1);
        }

        .trend-indicator {
          font-size: 32px;
        }

        .insight-significance {
          background: rgba(56, 161, 105, 0.05);
          border-left: 3px solid #38A169;
          padding: 16px;
          border-radius: 6px;
          margin-bottom: 16px;
        }

        .insight-significance strong {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #38A169;
          display: block;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .insight-significance p {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 15px;
          line-height: 1.6;
          color: #4a4a4a;
          margin: 0;
        }

        .insight-comparison {
          margin-bottom: 16px;
        }

        .insight-comparison strong {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #1a1a1a;
          display: block;
          margin-bottom: 10px;
        }

        .insight-comparison ul {
          margin: 0;
          padding-left: 20px;
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 14px;
          line-height: 1.8;
          color: #4a4a4a;
        }

        .comparison-label {
          font-weight: 500;
        }

        .comparison-value {
          font-weight: 700;
          color: #38A169;
        }

        .insight-source {
          display: flex;
          align-items: center;
          gap: 8px;
          padding-top: 16px;
          border-top: 1px solid rgba(26, 26, 26, 0.1);
        }

        .source-icon {
          font-size: 14px;
        }

        .source-text {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 14px;
          color: #6b6b6b;
        }

        .source-text a {
          color: #38A169;
          text-decoration: none;
          font-weight: 600;
        }

        .source-text a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .market-insight-card {
            padding: 20px;
          }

          .insight-metric {
            font-size: 18px;
          }

          .value-display {
            font-size: 32px;
            padding: 16px 24px;
          }

          .trend-indicator {
            font-size: 24px;
          }
        }
      `}</style>
    </>
  );
}
