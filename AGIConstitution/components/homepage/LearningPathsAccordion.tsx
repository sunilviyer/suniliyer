'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { learningPathsData } from '@/lib/learning-paths-data';

export function LearningPathsAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="cards-row">
      {learningPathsData.map((path, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={path.id}
            className={`card-item ${isActive ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <Link href={`/${path.slug}`} className="card-link" onClick={(e) => !isActive && e.preventDefault()}>
              {/* Background image */}
              <Image
                src={path.image}
                alt={path.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />

              {/* Gradient overlay */}
              <div className="card-overlay" />

              {/* Collapsed label — visible when inactive */}
              <div className="card-label">
                <span className="label-number">{path.number}</span>
                <span className="label-title">{path.title}</span>
              </div>

              {/* Expanded content — slides up when active */}
              <div className="card-content">
                <span className="content-number">{path.number}</span>
                <h3 className="content-title">{path.title}</h3>
                <p className="content-desc">{path.description}</p>
                <span className="content-cta">
                  Explore
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        );
      })}

      <style jsx>{`
        .cards-row {
          display: flex;
          gap: 12px;
          height: 600px;
          align-items: stretch;
        }

        /* ── Each card ── */
        .card-item {
          flex: 1;                  /* collapsed: equal share */
          min-width: 0;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: flex 0.55s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .card-item.active {
          flex: 3.5;                /* expanded: ~3.5× wider */
          cursor: default;
        }

        .card-link {
          display: block;
          width: 100%;
          height: 100%;
          text-decoration: none;
          color: inherit;
          position: relative;
        }

        /* ── Overlay ── */
        .card-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          transition: background 0.4s ease;
          /* Collapsed: darker so rotated label reads well */
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.25) 0%,
            rgba(0,0,0,0.55) 60%,
            rgba(0,0,0,0.80) 100%
          );
        }

        .card-item.active .card-overlay {
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.05) 0%,
            rgba(0,0,0,0.35) 50%,
            rgba(0,0,0,0.82) 100%
          );
        }

        /* ── Collapsed label (rotated, centered) ── */
        .card-label {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding-bottom: 28px;
          gap: 6px;
          opacity: 1;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .card-item.active .card-label {
          opacity: 0;
        }

        .label-number {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: rgba(255,255,255,0.6);
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }

        .label-title {
          font-family: var(--font-funnel-display), var(--font-funnel-sans), sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          white-space: nowrap;
        }

        /* ── Expanded content (bottom of active card) ── */
        .card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 2;
          padding: 32px 32px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.35s ease 0.15s, transform 0.35s ease 0.15s;
          pointer-events: none;
        }

        .card-item.active .card-content {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .content-number {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: rgba(255,255,255,0.6);
        }

        .content-title {
          font-family: var(--font-funnel-display), var(--font-funnel-sans), sans-serif;
          font-size: clamp(24px, 2.5vw, 36px);
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          line-height: 1.15;
        }

        .content-desc {
          font-size: 14px;
          line-height: 1.65;
          color: rgba(255,255,255,0.85);
          margin: 4px 0 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .content-cta {
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

        .card-item.active .card-link:hover .content-cta {
          gap: 12px;
        }

        /* Hover lift on active card */
        .card-item.active .card-link:hover .card-overlay {
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.08) 0%,
            rgba(0,0,0,0.42) 50%,
            rgba(0,0,0,0.90) 100%
          );
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .cards-row {
            height: 500px;
            gap: 8px;
          }

          .content-desc {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .cards-row {
            flex-direction: column;
            height: auto;
            gap: 8px;
          }

          .card-item {
            flex: none;
            height: 80px;
            border-radius: 14px;
          }

          .card-item.active {
            flex: none;
            height: 340px;
          }

          .card-label {
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            padding: 0 20px;
            gap: 10px;
          }

          .label-number,
          .label-title {
            writing-mode: horizontal-tb;
            transform: none;
          }

          .label-number {
            font-size: 9px;
          }

          .label-title {
            font-size: 14px;
          }

          .card-content {
            padding: 20px 20px;
          }

          .content-desc {
            display: block;
            -webkit-line-clamp: 2;
          }
        }
      `}</style>
    </div>
  );
}
