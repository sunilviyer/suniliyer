'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { HistoryCard } from '@/lib/data/history';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface HistoryStackCardsProps {
  cards: HistoryCard[];
}

export function HistoryStackCards({ cards }: HistoryStackCardsProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    const wrapper = wrapperRef.current;
    const items = itemRefs.current.filter(Boolean);

    if (!wrapper || items.length === 0) return;

    let tl: gsap.core.Timeline | null = null;
    let st: ScrollTrigger | null = null;

    const initCards = () => {
      // Kill previous animations
      st?.kill();
      tl?.kill();

      // Clear previous transforms and classes
      gsap.set(items, { clearProps: 'transform' });
      items.forEach((item) => item.classList.remove('gsap-initialized'));

      // Measure card height
      const first = items[0];
      const cardHeight = first.getBoundingClientRect().height || first.offsetHeight;

      // Create timeline with sequential card reveals
      tl = gsap.timeline({ defaults: { ease: 'none' } });

      items.forEach((card, index) => {
        if (index > 0) {
          // Position each card below the viewport
          gsap.set(card, { y: cardHeight, willChange: 'transform' });
          // Mark as initialized so CSS shows it
          card.classList.add('gsap-initialized');
          // Each card slides up into place sequentially
          tl!.to(card, { y: 0, duration: 1 }, index - 1);
        }
      });

      // Create ScrollTrigger
      st = ScrollTrigger.create({
        trigger: wrapper,
        start: 'top top',
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        end: () => `+=${items.length * cardHeight}`,
        scrub: 0.5,
        animation: tl!,
        invalidateOnRefresh: true,
        // markers: true, // Uncomment for debugging
      });
    };

    const ctx = gsap.context(() => {
      ScrollTrigger.saveStyles(items);
      initCards();
    }, wrapper);

    return () => {
      st?.kill();
      tl?.kill();
      ctx.revert();
      items.forEach((item) => item.classList.remove('gsap-initialized'));
    };
  }, [cards]);

  return (
    <section className="stack-section">
      <div className="stack-wrapper" ref={wrapperRef}>
        <div className="history-stack">
          {cards.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => {
                if (el) itemRefs.current[index] = el;
              }}
              className="stack-item"
            >
              <div className="concept-stack-card">
                {/* Background Image */}
                <div className="card-image">
                  <Image
                    src={`/images/history/${card.image}`}
                    alt={card.title}
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                    priority={index < 3}
                  />
                </div>

                {/* Content Overlay */}
                <div className="card-content">
                  <div className="card-top">
                    <div className="card-number">Concept {String(index + 1).padStart(2, '0')}</div>
                    <Link
                      href={`/articles/${card.slug}`}
                      className="card-arrow-btn"
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#1a1a1a',
                        color: 'white',
                        textDecoration: 'none',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 256 256"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </div>

                  <div className="card-bottom">
                    {/* Tags */}
                    <div className="card-tags">
                      {card.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="card-title">{card.title}</h2>

                    {/* TLDR - Always visible */}
                    <div className="card-tldr">
                      <strong>TLDR:</strong> {card.tldr}
                    </div>

                    {/* Cross-path badges */}
                    {(card.crossPathRefs?.terminology ||
                      card.crossPathRefs?.risk ||
                      card.crossPathRefs?.responsibility ||
                      card.crossPathRefs?.future) && (
                      <div className="card-meta">
                        <span className="meta-label">Connects to:</span>
                        {card.crossPathRefs.terminology && (
                          <span className="cross-path-badge">Terminology</span>
                        )}
                        {card.crossPathRefs.risk && (
                          <span className="cross-path-badge">Risk</span>
                        )}
                        {card.crossPathRefs.responsibility && (
                          <span className="cross-path-badge">Responsibility</span>
                        )}
                        {card.crossPathRefs.future && (
                          <span className="cross-path-badge">Future</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stack-section {
          padding: 80px 60px 200px;
          max-width: 1920px;
          margin: 0 auto;
        }

        .stack-wrapper {
          position: relative;
        }

        .history-stack {
          position: relative;
        }

        .stack-item {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          will-change: transform;
          opacity: 0;
          visibility: hidden;
        }

        .stack-item:first-child {
          position: relative;
          opacity: 1;
          visibility: visible;
        }

        .stack-item.gsap-initialized {
          opacity: 1;
          visibility: visible;
        }

        .concept-stack-card {
          width: 100%;
          height: 85vh;
          min-height: 650px;
          max-height: 900px;
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          background: var(--bg-secondary);
          cursor: pointer;
          transition: all 0.5s ease;
          border: 2px solid transparent;
        }

        .concept-stack-card:hover {
          border-color: #333d29;
          transform: scale(1.01);
        }

        .card-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 1;
          transition: opacity 0.5s ease;
        }

        [data-theme='dark'] .card-image {
          opacity: 1;
        }

        .concept-stack-card:hover .card-image {
          opacity: 1;
        }

        [data-theme='dark'] .concept-stack-card:hover .card-image {
          opacity: 1;
        }

        .card-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 60px;
          background: transparent;
          transition: background 0.3s ease;
        }

        [data-theme='dark'] .card-content {
          background: transparent;
        }

        .concept-stack-card:hover .card-content {
          background: transparent;
        }

        [data-theme='dark'] .concept-stack-card:hover .card-content {
          background: transparent;
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: start;
        }

        .card-number {
          font-size: 14px;
          color: #936639;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
          background: rgba(255, 255, 255, 0.9);
          padding: 6px 12px;
          border-radius: 8px;
        }

        [data-theme='dark'] .card-number {
          background: rgba(26, 26, 26, 0.9);
        }

        .card-arrow-btn {
          width: 56px !important;
          height: 56px !important;
          border-radius: 50% !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          background-color: #1a1a1a !important;
          background: #1a1a1a !important;
          color: white !important;
          text-decoration: none !important;
          transition: all 0.3s ease !important;
          cursor: pointer !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
        }

        [data-theme='dark'] .card-arrow-btn {
          background-color: #1a1a1a !important;
          background: #1a1a1a !important;
          color: white !important;
        }

        .card-arrow-btn:hover {
          background-color: #1a1a1a !important;
          background: #1a1a1a !important;
          color: white !important;
          transform: scale(1.1) !important;
          box-shadow: 0 0 20px rgba(147, 102, 57, 0.6), 0 0 40px rgba(147, 102, 57, 0.4), 0 0 60px rgba(147, 102, 57, 0.2) !important;
        }

        [data-theme='dark'] .card-arrow-btn:hover {
          box-shadow: 0 0 20px rgba(147, 102, 57, 0.6), 0 0 40px rgba(147, 102, 57, 0.4), 0 0 60px rgba(147, 102, 57, 0.2) !important;
        }

        .card-bottom {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .card-tags {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .tag {
          display: inline-block;
          padding: 8px 20px;
          background: var(--card-bg);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          font-size: 13px;
          color: var(--text-primary);
          transition: all 0.3s ease;
        }

        .concept-stack-card:hover .tag {
          background: #333d29;
          color: white;
          border-color: #333d29;
        }

        .card-title {
          font-size: 48px;
          font-weight: 600;
          line-height: 1.2;
          color: var(--text-primary);
          transition: color 0.3s ease;
          font-family: var(--font-funnel-display);
        }

        .concept-stack-card:hover .card-title {
          color: #333d29;
        }

        .card-tldr {
          font-size: 16px;
          line-height: 1.6;
          color: var(--text-primary);
          padding: 20px 24px;
          background: var(--card-bg);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          border-left: 4px solid #333d29;
          max-width: 700px;
          margin-top: 16px;
        }

        .card-meta {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
        }

        .meta-label {
          font-size: 13px;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .cross-path-badge {
          display: inline-block;
          padding: 6px 16px;
          background: #414833;
          color: white;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .card-title {
            font-size: 36px;
          }

          .card-content {
            padding: 40px;
          }
        }

        @media (max-width: 767px) {
          .stack-section {
            padding: 40px 20px 100px;
          }

          .concept-stack-card {
            height: 75vh;
            min-height: 500px;
          }

          .card-content {
            padding: 30px 24px;
          }

          .card-title {
            font-size: 28px;
          }

          .card-tldr {
            font-size: 14px;
            padding: 16px 20px;
          }
        }
      `}</style>
    </section>
  );
}
