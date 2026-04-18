'use client';

import Link from 'next/link';
import { PathSlug, pathColorMap } from '@/lib/types/path-card';

interface CrossPathLinkProps {
  targetPath: PathSlug;
  articleSlug?: string;
  children?: React.ReactNode;
  variant?: 'badge' | 'link';
}

const pathNames: Record<PathSlug, string> = {
  history: 'History',
  terminology: 'Terminology',
  risk: 'Risk',
  responsibility: 'Responsibility',
  future: 'Future',
};

export function CrossPathLink({
  targetPath,
  articleSlug,
  children,
  variant = 'badge'
}: CrossPathLinkProps) {
  const colors = pathColorMap[targetPath];
  const href = articleSlug ? `/articles/${articleSlug}` : `/${targetPath}`;
  const displayText = children || pathNames[targetPath];

  if (variant === 'badge') {
    return (
      <>
        <Link href={href} className="cross-path-badge">
          {displayText}
        </Link>

        <style jsx>{`
          .cross-path-badge {
            display: inline-block;
            padding: 6px 16px;
            background: ${colors.lightMode};
            color: ${colors.lightModeText};
            border-radius: 12px;
            font-size: 12px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            white-space: nowrap;
          }

          [data-theme='dark'] .cross-path-badge {
            background: ${colors.darkMode};
            color: ${colors.darkModeText};
          }

          .cross-path-badge:hover {
            background: ${colors.lightMode};
            transform: translateY(-2px);
            box-shadow: 0 4px 12px ${colors.lightMode}33;
          }

          [data-theme='dark'] .cross-path-badge:hover {
            background: ${colors.darkMode};
            box-shadow: 0 4px 12px ${colors.darkMode}33;
          }
        `}</style>
      </>
    );
  }

  return (
    <>
      <Link href={href} className="cross-path-link">
        <span className="link-icon">→</span>
        <span className="link-text">{displayText}</span>
      </Link>

      <style jsx>{`
        .cross-path-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: ${colors.lightModeText};
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          padding: 8px 16px;
          border-left: 3px solid ${colors.lightModeText};
          background: var(--bg-secondary);
          border-radius: 8px;
        }

        [data-theme='dark'] .cross-path-link {
          color: ${colors.darkModeText};
          border-left-color: ${colors.darkModeText};
          background: rgba(255, 255, 255, 0.05);
        }

        .cross-path-link:hover {
          background: ${colors.lightMode};
          color: ${colors.lightModeText};
          transform: translateX(8px);
          box-shadow: 0 4px 12px ${colors.lightMode}33;
        }

        [data-theme='dark'] .cross-path-link:hover {
          background: ${colors.darkMode};
          color: ${colors.darkModeText};
          box-shadow: 0 4px 12px ${colors.darkMode}33;
        }

        .link-icon {
          font-size: 20px;
          transition: transform 0.3s ease;
        }

        .cross-path-link:hover .link-icon {
          transform: translateX(4px);
        }

        .link-text {
          font-size: 14px;
        }
      `}</style>
    </>
  );
}
