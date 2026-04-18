'use client';

interface CrossPathRefsProps {
  refs: {
    terminology?: string[];
    risk?: string[];
    responsibility?: string[];
    future?: string[];
  };
}

const pathDescriptions: Record<string, string> = {
  terminology: 'Technical terminology and ML concepts covered in the Terminology path',
  risk: 'AI risks, bias, and safety concerns explored in the Risk path',
  responsibility: 'Legal frameworks and accountability mechanisms in the Responsibility path',
  future: 'Future trends and emerging technologies in the Future path',
};

export function CrossPathRefs({ refs }: CrossPathRefsProps) {
  const hasCrossRefs =
    refs.terminology || refs.risk || refs.responsibility || refs.future;

  if (!hasCrossRefs) {
    return null;
  }

  return (
    <div className="cross-path-refs">
      <h4 className="cross-path-title">
        <span>🔗</span>
        <span>Connections to Other Learning Paths</span>
      </h4>
      <div className="cross-path-list">
        {refs.terminology && (
          <div className="cross-path-item">
            <span className="cross-path-badge">Terminology</span>
            <p className="cross-path-reason">
              {pathDescriptions.terminology}
            </p>
          </div>
        )}
        {refs.risk && (
          <div className="cross-path-item">
            <span className="cross-path-badge">Risk</span>
            <p className="cross-path-reason">
              {pathDescriptions.risk}
            </p>
          </div>
        )}
        {refs.responsibility && (
          <div className="cross-path-item">
            <span className="cross-path-badge">Responsibility</span>
            <p className="cross-path-reason">
              {pathDescriptions.responsibility}
            </p>
          </div>
        )}
        {refs.future && (
          <div className="cross-path-item">
            <span className="cross-path-badge">Future</span>
            <p className="cross-path-reason">
              {pathDescriptions.future}
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        .cross-path-refs {
          margin: 60px 0;
          padding: 32px;
          background: linear-gradient(
            135deg,
            rgba(51, 61, 41, 0.05),
            rgba(65, 72, 51, 0.05)
          );
          border-radius: 12px;
          border: 2px solid #414833;
        }

        .cross-path-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 24px;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .cross-path-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .cross-path-item {
          display: flex;
          align-items: start;
          gap: 16px;
        }

        .cross-path-badge {
          display: inline-block;
          padding: 6px 16px;
          background: #414833;
          color: white;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
        }

        .cross-path-reason {
          font-size: 16px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 767px) {
          .cross-path-refs {
            padding: 24px;
          }

          .cross-path-item {
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>
    </div>
  );
}
