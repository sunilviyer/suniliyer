'use client';

interface KeyLearningsProps {
  learnings: string[];
  theme?: 'light' | 'dark';
}

export function KeyLearnings({ learnings, theme = 'light' }: KeyLearningsProps) {
  return (
    <>
      <div className="key-learnings-card">
        <div className="key-learnings-header">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="key-learnings-icon">
            <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="key-learnings-label">KEY LEARNINGS</span>
        </div>
        <ul className="key-learnings-list">
          {learnings.map((learning, index) => (
            <li key={index} className="key-learning-item">
              <span className="check-icon">✓</span>
              <span>{learning}</span>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .key-learnings-card {
          background: ${theme === 'light' ? 'linear-gradient(135deg, #f8f6f1 0%, #ffffff 100%)' : 'linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%)'};
          border-left: 4px solid #936639;
          padding: 32px 36px;
          margin: 48px 0;
          border-radius: 0 8px 8px 0;
          box-shadow: 0 2px 12px ${theme === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(0, 0, 0, 0.3)'};
          animation: slideInLeft 0.6s ease-out 0.3s both;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .key-learnings-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .key-learnings-icon {
          color: #936639;
        }

        .key-learnings-label {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #936639;
        }

        .key-learnings-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .key-learning-item {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 20px;
          line-height: 1.6;
          color: ${theme === 'light' ? '#1a1a1a' : '#e0e0e0'};
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .check-icon {
          color: #936639;
          font-weight: 700;
          font-size: 18px;
          flex-shrink: 0;
          margin-top: 4px;
        }
      `}</style>
    </>
  );
}
