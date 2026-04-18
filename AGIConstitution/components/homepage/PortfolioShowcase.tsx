'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioData } from '@/lib/portfolio-data';

export function PortfolioShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % portfolioData.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + portfolioData.length) % portfolioData.length);
  }, []);

  const activeItem = portfolioData[activeIndex];

  // All 6 other items in circular order after the active one
  const sideItems = [1, 2, 3, 4, 5, 6].map(
    (offset) => portfolioData[(activeIndex + offset) % portfolioData.length]
  );

  return (
    <div className="showcase-layout">

      {/* ── Featured (left) ── */}
      <Link href={activeItem.link} className="featured-link">
        <div className="featured-card">
          <Image
            src={activeItem.image}
            alt={activeItem.title}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="featured-overlay" />
          <div className="featured-content">
            <span className="featured-badge">Featured</span>
            <h3 className="featured-title">{activeItem.title}</h3>
            <p className="featured-desc">{activeItem.description}</p>
            <span className="featured-cta">
              View project
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </div>
      </Link>

      {/* ── Right column: 6 side cards + nav ── */}
      <div className="side-col">
        <div className="side-grid">
          {sideItems.map((item) => (
            <button
              key={item.id}
              className="side-card"
              onClick={() => setActiveIndex(portfolioData.findIndex((p) => p.id === item.id))}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="side-overlay" />
              <div className="side-content">
                <span className="side-title">{item.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Prev / Next only — no dots */}
        <div className="nav-row">
          <button className="nav-btn" onClick={handlePrev} aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="nav-counter">{activeIndex + 1} / {portfolioData.length}</span>
          <button className="nav-btn" onClick={handleNext} aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .showcase-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          align-items: stretch;
        }

        /* ── Featured ── */
        .featured-link {
          display: block;
          text-decoration: none;
          color: inherit;
          border-radius: 20px;
          overflow: hidden;
        }

        .featured-card {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 580px;
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s ease;
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
        }

        .featured-link:hover .featured-card {
          transform: scale(1.012);
          box-shadow: 0 20px 60px rgba(0,0,0,0.25);
        }

        .featured-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.88) 0%,
            rgba(0,0,0,0.45) 45%,
            rgba(0,0,0,0.08) 100%
          );
          transition: background 0.35s ease;
        }

        .featured-link:hover .featured-overlay {
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.93) 0%,
            rgba(0,0,0,0.52) 45%,
            rgba(0,0,0,0.12) 100%
          );
        }

        .featured-content {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          z-index: 2;
          padding: 36px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .featured-badge {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.6);
        }

        .featured-title {
          font-family: var(--font-funnel-display), var(--font-funnel-sans), sans-serif;
          font-size: clamp(26px, 2.8vw, 38px);
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          line-height: 1.15;
        }

        .featured-desc {
          font-size: 14px;
          line-height: 1.65;
          color: rgba(255,255,255,0.82);
          margin: 0;
        }

        .featured-cta {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          font-weight: 700;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          margin-top: 6px;
          transition: gap 0.25s ease;
        }

        .featured-link:hover .featured-cta { gap: 12px; }

        /* ── Side column ── */
        .side-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .side-grid {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: repeat(3, 1fr);
          gap: 10px;
        }

        .side-card {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 150px;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          padding: 0;
          border: none;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
        }

        .side-card:hover {
          transform: scale(1.03);
          box-shadow: 0 10px 32px rgba(0,0,0,0.2);
        }

        .side-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.80) 0%,
            rgba(0,0,0,0.30) 55%,
            rgba(0,0,0,0.05) 100%
          );
          transition: background 0.3s ease;
        }

        .side-card:hover .side-overlay {
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.88) 0%,
            rgba(0,0,0,0.42) 55%,
            rgba(0,0,0,0.08) 100%
          );
        }

        .side-content {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          z-index: 2;
          padding: 10px 12px;
        }

        .side-title {
          font-family: var(--font-funnel-display), var(--font-funnel-sans), sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: #ffffff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: block;
        }

        /* ── Nav ── */
        .nav-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 0 0;
          border-top: 1px solid var(--border-color);
        }

        .nav-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1.5px solid var(--border-color);
          background: var(--card-bg);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }

        .nav-btn:hover {
          background: var(--text-primary);
          color: var(--bg-primary);
          border-color: var(--text-primary);
        }

        .nav-counter {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-secondary);
          letter-spacing: 0.5px;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .side-card { min-height: 120px; }
        }

        @media (max-width: 768px) {
          .showcase-layout {
            grid-template-columns: 1fr;
          }

          .featured-card { min-height: 380px; }

          .side-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
          }

          .side-card { min-height: 110px; }
        }

        @media (max-width: 480px) {
          .side-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat(3, 1fr);
          }

          .side-card { min-height: 100px; }
        }
      `}</style>
    </div>
  );
}
