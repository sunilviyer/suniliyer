'use client';

interface ArticleTLDRProps {
  tldr: string;
  theme?: 'light' | 'dark';
}

export function ArticleTLDR({ tldr, theme = 'light' }: ArticleTLDRProps) {
  return (
    <>
      <div className="tldr-card">
        <div className="tldr-header">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="tldr-icon">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="tldr-label">TL;DR</span>
        </div>
        <p className="tldr-text">{tldr}</p>
      </div>

      <style jsx>{`
        .tldr-card {
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

        .tldr-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .tldr-icon {
          color: #936639;
        }

        .tldr-label {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #936639;
        }

        .tldr-text {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 22px;
          line-height: 1.6;
          color: ${theme === 'light' ? '#1a1a1a' : '#e0e0e0'};
          margin: 0;
          font-style: italic;
        }
      `}</style>
    </>
  );
}
