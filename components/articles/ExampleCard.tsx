'use client';

import { useState } from 'react';

interface Example {
  id: string;
  title: string;
  description: string;
  category: string;
  link?: string;
}

interface ExampleCardProps {
  example: Example;
  index: number;
  isActive: boolean;
  onClick: () => void;
  path: string;
}

export function ExampleCard({ example, index, isActive, onClick, path }: ExampleCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className={`example-card ${isActive ? 'active' : ''}`}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="card-header">
          <span className="category-badge">{example.category}</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className={`expand-icon ${isActive ? 'rotated' : ''}`}
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h4 className="example-title">{example.title}</h4>

        <div className={`example-content ${isActive ? 'expanded' : ''}`}>
          <p className="example-description">{example.description}</p>
          {example.link && (
            <a href={example.link} className="example-link" target="_blank" rel="noopener noreferrer">
              Learn more
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M11 7.5V11.5C11 11.7761 10.7761 12 10.5 12H2.5C2.22386 12 2 11.7761 2 11.5V3.5C2 3.22386 2.22386 3 2.5 3H6.5M9 2H12M12 2V5M12 2L6 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          )}
        </div>

        <div className={`card-decoration ${isHovered ? 'hovered' : ''}`} />
      </div>

      <style jsx>{`
        .example-card {
          background: white;
          border: 1px solid rgba(26, 26, 26, 0.1);
          border-radius: 8px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          animation: slideInRight 0.6s ease-out both;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .example-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          border-color: rgba(147, 102, 57, 0.3);
        }

        .example-card.active {
          border-color: #936639;
          box-shadow: 0 8px 24px rgba(147, 102, 57, 0.12);
        }

        .card-decoration {
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 0;
          background: #936639;
          transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-decoration.hovered {
          height: 100%;
        }

        .example-card.active .card-decoration {
          height: 100%;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .category-badge {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: #6b6b6b;
          background: rgba(26, 26, 26, 0.05);
          padding: 4px 10px;
          border-radius: 4px;
        }

        .expand-icon {
          color: #6b6b6b;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .expand-icon.rotated {
          transform: rotate(180deg);
        }

        .example-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 12px 0;
          line-height: 1.3;
        }

        .example-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .example-content.expanded {
          max-height: 500px;
        }

        .example-description {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 15px;
          line-height: 1.6;
          color: #4a4a4a;
          margin: 0 0 16px 0;
        }

        .example-link {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #936639;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: gap 0.2s ease;
        }

        .example-link:hover {
          gap: 8px;
        }
      `}</style>
    </>
  );
}
