'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface PathItem {
  slug: string;
  title: string;
  heroImage: string;
}

interface FloatingPathsNavProps {
  currentPath?: string;
  theme?: 'light' | 'dark';
}

const paths: PathItem[] = [
  {
    slug: '/',
    title: 'Home',
    heroImage: '/images/headercards/history-header.png' // Using history as placeholder for home
  },
  {
    slug: '/history',
    title: 'History',
    heroImage: '/images/headercards/history-header.png'
  },
  {
    slug: '/terminology',
    title: 'Terminology',
    heroImage: '/images/headercards/terminology-header.png'
  },
  {
    slug: '/risk',
    title: 'Risk',
    heroImage: '/images/headercards/risk-header.png'
  },
  {
    slug: '/responsibility',
    title: 'Responsibility',
    heroImage: '/images/headercards/responsibility-header.png'
  },
  {
    slug: '/future',
    title: 'Future',
    heroImage: '/images/headercards/future-header.png'
  }
];

export function FloatingPathsNav({ currentPath, theme = 'light' }: FloatingPathsNavProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // On desktop, expand by default. On mobile, keep collapsed.
    if (window.innerWidth > 768) {
      setIsExpanded(true);
    }
  }, []);

  return (
    <>
      <div className={`floating-paths-nav ${isExpanded ? 'expanded' : ''}`}>
        <button
          className="paths-toggle"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label="Toggle learning paths"
          title="Learning Paths Navigator"
        >
          <i className={`ph-bold ${isExpanded ? 'ph-x' : 'ph-stack'}`} />
        </button>

        <div className="paths-list">
          {paths.filter(path => path.slug !== currentPath).map((path) => (
            <Link
              key={path.slug}
              href={path.slug}
              className="path-card"
              onClick={() => setIsExpanded(false)}
            >
              <div className="path-card-image">
                <Image
                  src={path.heroImage}
                  alt={path.title}
                  width={200}
                  height={120}
                  className="path-img"
                  unoptimized
                  priority
                />
                <div className="path-card-overlay">
                  <div className="path-card-title">
                    {path.title}
                  </div>
                  <div className="path-arrow-circle">
                    <i className="ph-bold ph-arrow-up-right" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .floating-paths-nav {
          position: fixed;
          right: 30px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 900;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: flex-end;
          pointer-events: auto;
        }

        .paths-toggle {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: ${theme === 'light' ? '#1a1a1a' : '#ffffff'};
          color: ${theme === 'light' ? '#ffffff' : '#1a1a1a'};
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 951;
          pointer-events: auto;
        }

        .paths-toggle:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2);
        }

        .paths-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translateX(20px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 950;
          max-height: calc(100vh - 200px);
          overflow-y: auto;
          padding-right: 4px;
        }

        .paths-list::-webkit-scrollbar {
          width: 4px;
        }

        .paths-list::-webkit-scrollbar-track {
          background: transparent;
        }

        .paths-list::-webkit-scrollbar-thumb {
          background: rgba(147, 102, 57, 0.3);
          border-radius: 2px;
        }

        .paths-list::-webkit-scrollbar-thumb:hover {
          background: rgba(147, 102, 57, 0.5);
        }

        .floating-paths-nav.expanded .paths-list {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateX(0);
        }

        .path-card {
          position: relative;
          width: 202px;
          border-radius: 20px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          border: 2px solid transparent;
          will-change: transform;
          overflow: visible;
        }

        .path-card:hover {
          transform: translateX(-8px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
          border-color: #936639;
        }

        .path-card-image {
          position: relative;
          width: 100%;
          height: 132px;
          overflow: hidden;
          border-radius: 18px;
        }

        .path-card-image :global(.path-img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .path-card:hover .path-card-image :global(.path-img) {
          transform: scale(1.1);
        }

        .path-card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%);
          display: flex;
          align-items: flex-end;
          padding: 14px;
          z-index: 1;
        }

        .path-card-title {
          flex: 1;
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
          position: relative;
          z-index: 2;
        }

        .path-arrow-circle {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.7);
          border: 2px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          color: #ffffff;
          opacity: 0.6;
          transform: scale(0.9);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 10;
        }

        .path-card:hover .path-arrow-circle {
          opacity: 1;
          transform: scale(1);
          background: rgba(0, 0, 0, 0.9);
        }

        @media (max-width: 1024px) {
          .floating-paths-nav {
            right: 20px;
          }

          .paths-toggle {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }

          .path-card {
            width: 180px;
          }

          .path-card-image {
            height: 110px;
          }

          .path-card-title {
            font-size: 15px;
          }

          .path-card-overlay {
            padding: 12px;
          }
        }

        @media (max-width: 768px) {
          .floating-paths-nav {
            right: 15px;
            top: auto;
            bottom: 80px;
            transform: none;
          }

          .paths-list {
            position: fixed;
            right: 15px;
            bottom: 145px;
            max-height: calc(100vh - 200px);
            overflow-y: auto;
          }

          .path-card {
            width: 160px;
          }

          .path-card-image {
            height: 100px;
          }

          .path-card-title {
            font-size: 14px;
          }

          .path-card-overlay {
            padding: 10px;
          }

          .path-arrow-circle {
            width: 32px;
            height: 32px;
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}
