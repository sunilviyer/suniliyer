'use client';

import Link from 'next/link';
import { PathSlug, pathColorMap } from '@/lib/types/path-card';

interface PathBadgeProps {
  pathSlug: PathSlug;
  pathName?: string;
  href?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'solid' | 'outline';
}

const pathNames: Record<PathSlug, string> = {
  history: 'History',
  terminology: 'Terminology',
  risk: 'Risk',
  responsibility: 'Responsibility',
  future: 'Future',
};

export function PathBadge({
  pathSlug,
  pathName,
  href,
  size = 'medium',
  variant = 'solid'
}: PathBadgeProps) {
  const colors = pathColorMap[pathSlug];
  const displayName = pathName || pathNames[pathSlug];

  const badgeContent = (
    <>
      <span className="badge-text">{displayName}</span>
      <style jsx>{`
        .badge-text {
          display: inline-block;
          padding: ${size === 'small' ? '4px 12px' : size === 'large' ? '10px 24px' : '6px 16px'};
          background: ${variant === 'solid' ? colors.light : 'transparent'};
          color: ${variant === 'solid' ? 'white' : colors.primary};
          border: ${variant === 'outline' ? `2px solid ${colors.primary}` : 'none'};
          border-radius: ${size === 'small' ? '8px' : size === 'large' ? '16px' : '12px'};
          font-size: ${size === 'small' ? '11px' : size === 'large' ? '14px' : '12px'};
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }

        .badge-text:hover {
          background: ${variant === 'solid' ? colors.hover : colors.light};
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px ${colors.primary}33;
        }

        a .badge-text {
          cursor: pointer;
        }
      `}</style>
    </>
  );

  if (href) {
    return <Link href={href}>{badgeContent}</Link>;
  }

  return badgeContent;
}
