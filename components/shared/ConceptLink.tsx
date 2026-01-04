'use client';

import Link from 'next/link';
import { PathSlug, pathColorMap } from '@/lib/types/path-card';

interface ConceptLinkProps {
  slug: string;
  title: string;
  pathSlug?: PathSlug;
  showIcon?: boolean;
}

export function ConceptLink({ slug, title, pathSlug, showIcon = true }: ConceptLinkProps) {
  const colors = pathSlug ? pathColorMap[pathSlug] : undefined;

  return (
    <>
      <Link href={`/articles/${slug}`} className="concept-link">
        <span className="link-text">{title}</span>
        {showIcon && (
          <svg
            className="link-icon"
            width="16"
            height="16"
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"
              fill="currentColor"
            />
          </svg>
        )}
      </Link>

      <style jsx>{`
        .concept-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: ${colors?.primary || 'var(--text-primary)'};
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          padding: 4px 0;
          border-bottom: 2px solid transparent;
        }

        .concept-link:hover {
          color: ${colors?.hover || 'var(--text-primary)'};
          border-bottom-color: ${colors?.hover || 'var(--text-primary)'};
          transform: translateX(4px);
        }

        .link-text {
          transition: all 0.3s ease;
        }

        .link-icon {
          transition: all 0.3s ease;
          opacity: 0.6;
        }

        .concept-link:hover .link-icon {
          opacity: 1;
          transform: translateX(2px) translateY(-2px);
        }

        [data-theme='dark'] .concept-link {
          color: ${colors?.primary || 'var(--text-primary)'};
        }

        [data-theme='dark'] .concept-link:hover {
          color: ${colors?.primary || 'var(--text-primary)'};
        }
      `}</style>
    </>
  );
}
