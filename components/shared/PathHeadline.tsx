'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PathSlug, pathColorMap } from '@/lib/types/path-card';

interface PathHeadlineProps {
  pathSlug: PathSlug;
  title: string;
  description: string;
  heroImage: string;
}

export function PathHeadline({ pathSlug, title, description, heroImage }: PathHeadlineProps) {
  const colors = pathColorMap[pathSlug];

  return (
    <section className="inner-headline-section">
      <div className="headline-grid">
        {/* Left: Learning Paths Navigation */}
        <div className="headline-sidebar">
          <div className="headline-name">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
            >
              <path d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2
                c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4
                c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2
                c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6
                c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4
                c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6
                c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z"/>
            </svg>
          </div>
          <nav className="paths-nav">
            <Link
              href="/history"
              className={`path-link ${pathSlug === 'history' ? 'active' : ''}`}
            >
              History
            </Link>
            <Link
              href="/terminology"
              className={`path-link ${pathSlug === 'terminology' ? 'active' : ''}`}
            >
              Terminology
            </Link>
            <Link
              href="/risk"
              className={`path-link ${pathSlug === 'risk' ? 'active' : ''}`}
            >
              Risk
            </Link>
            <Link
              href="/responsibility"
              className={`path-link ${pathSlug === 'responsibility' ? 'active' : ''}`}
            >
              Responsibility
            </Link>
            <Link
              href="/future"
              className={`path-link ${pathSlug === 'future' ? 'active' : ''}`}
            >
              Future
            </Link>
          </nav>
        </div>

        {/* Right: Title and Description with Background Image */}
        <div className="headline-content">
          {/* Hero Image Card with Overlay Text */}
          <div className="headline-image-card">
            <Image
              src={heroImage}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="headline-overlay">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .inner-headline-section {
          padding: 160px 60px 80px;
          max-width: 1920px;
          margin: 0 auto;
        }

        .headline-grid {
          display: grid;
          grid-template-columns: 2fr 10fr;
          gap: 60px;
        }

        .headline-sidebar {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .headline-name {
          display: flex;
          align-items: flex-start;
          gap: 24px;
          font-size: 48px;
          color: ${colors.hover};
          text-transform: uppercase;
          letter-spacing: 4px;
          font-weight: 700;
        }

        [data-theme='dark'] .headline-name {
          color: var(--text-primary);
        }

        .headline-name svg {
          width: 60px;
          height: 60px;
          fill: ${colors.hover};
          flex-shrink: 0;
          margin-top: 12px;
        }

        [data-theme='dark'] .headline-name svg {
          fill: var(--text-primary);
        }

        .paths-nav {
          display: flex;
          flex-direction: column;
          gap: 28px;
          margin-top: 60px;
        }

        .path-link {
          font-size: 36px !important;
          color: ${colors.hover} !important;
          text-decoration: none !important;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
          padding: 12px 0 !important;
          border-left: 6px solid transparent !important;
          padding-left: 32px !important;
          font-weight: 500 !important;
          line-height: 1.2 !important;
          text-shadow: none !important;
        }

        [data-theme='dark'] .path-link {
          color: var(--text-primary) !important;
        }

        .path-link:hover {
          color: ${colors.hover} !important;
          border-left-color: ${colors.hover} !important;
          padding-left: 40px !important;
          font-weight: 600 !important;
          transform: translateX(4px) !important;
          text-shadow: 0 0 12px ${colors.hover}66, 0 0 24px ${colors.hover}33 !important;
        }

        [data-theme='dark'] .path-link:hover {
          color: var(--text-primary) !important;
          border-left-color: var(--text-primary) !important;
          text-shadow: 0 0 12px rgba(255, 255, 255, 0.4), 0 0 24px rgba(255, 255, 255, 0.2) !important;
        }

        .path-link.active {
          color: ${colors.hover} !important;
          font-weight: 700 !important;
          border-left-color: ${colors.hover} !important;
        }

        [data-theme='dark'] .path-link.active {
          color: var(--text-primary) !important;
          border-left-color: var(--text-primary) !important;
        }

        .headline-image-card {
          position: relative;
          width: 100%;
          height: 600px;
          border-radius: 24px;
          overflow: hidden;
          background: var(--bg-secondary);
        }

        .headline-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 60px;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.5) 100%
          );
        }

        [data-theme='dark'] .headline-overlay {
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 0.6) 100%
          );
        }

        .headline-overlay h1 {
          font-size: 96px;
          font-weight: 600;
          line-height: 1.1;
          color: white;
          margin-bottom: 32px;
          font-family: var(--font-funnel-display);
          text-shadow: 0 4px 16px rgba(0, 0, 0, 0.8);
        }

        .headline-overlay p {
          font-size: 24px;
          line-height: 1.6;
          color: white;
          max-width: 800px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
        }

        @media (max-width: 1024px) {
          .headline-image-card {
            height: 500px;
          }

          .headline-overlay {
            padding: 40px;
          }

          .headline-overlay h1 {
            font-size: 64px;
          }

          .headline-name {
            font-size: 36px;
          }

          .headline-name svg {
            width: 48px;
            height: 48px;
          }

          .path-link {
            font-size: 27px !important;
          }
        }

        @media (max-width: 1024px) {
          .headline-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 767px) {
          .inner-headline-section {
            padding: 140px 20px 60px;
          }

          .headline-image-card {
            height: 400px;
          }

          .headline-overlay {
            padding: 30px 24px;
          }

          .headline-overlay h1 {
            font-size: 48px;
          }

          .headline-overlay p {
            font-size: 18px;
          }

          .headline-sidebar {
            gap: 16px;
          }

          .headline-name {
            font-size: 28px;
            gap: 16px;
          }

          .headline-name svg {
            width: 36px;
            height: 36px;
          }

          .paths-nav {
            gap: 16px;
            margin-top: 30px;
          }

          .path-link {
            font-size: 24px !important;
            padding-left: 20px !important;
            border-left-width: 4px !important;
          }

          .path-link:hover {
            padding-left: 24px !important;
            transform: translateX(2px) !important;
          }
        }
      `}</style>
    </section>
  );
}
