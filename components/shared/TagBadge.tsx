'use client';

interface TagBadgeProps {
  tag: string;
  size?: 'small' | 'medium' | 'large';
  interactive?: boolean;
}

export function TagBadge({ tag, size = 'medium', interactive = false }: TagBadgeProps) {
  return (
    <>
      <span className={`tag-badge ${interactive ? 'interactive' : ''}`}>
        {tag}
      </span>
      <style jsx>{`
        .tag-badge {
          display: inline-block;
          padding: ${size === 'small' ? '4px 12px' : size === 'large' ? '10px 24px' : '8px 20px'};
          background: var(--card-bg);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border-color);
          border-radius: ${size === 'small' ? '12px' : size === 'large' ? '24px' : '20px'};
          font-size: ${size === 'small' ? '11px' : size === 'large' ? '14px' : '13px'};
          color: var(--text-primary);
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .tag-badge.interactive {
          cursor: pointer;
        }

        .tag-badge.interactive:hover {
          background: var(--text-primary);
          color: var(--bg-primary);
          border-color: var(--text-primary);
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        [data-theme='dark'] .tag-badge {
          background: rgba(255, 255, 255, 0.05);
        }

        [data-theme='dark'] .tag-badge.interactive:hover {
          background: rgba(255, 255, 255, 0.9);
          color: #1a1a1a;
        }
      `}</style>
    </>
  );
}
