'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioData } from '@/lib/portfolio-data';

export function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === portfolioData.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const handlePrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? portfolioData.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [handleNext]);

  const handleDotClick = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const getItemStyle = (index: number) => {
    const diff = index - currentIndex;
    const totalItems = portfolioData.length;

    // Normalize difference to handle circular array
    let normalizedDiff = diff;
    if (diff > totalItems / 2) {
      normalizedDiff = diff - totalItems;
    } else if (diff < -totalItems / 2) {
      normalizedDiff = diff + totalItems;
    }

    if (normalizedDiff === 0) {
      // Center item - forward in 3D space
      return {
        transform: 'scale(1) translateX(0) translateZ(100px) rotateY(0deg)',
        opacity: 1,
        filter: 'blur(0px) brightness(1)',
        zIndex: 3,
      };
    } else if (normalizedDiff === -1) {
      // Left item - visible but receded
      return {
        transform: 'scale(0.85) translateX(-280px) translateZ(-50px) rotateY(8deg)',
        opacity: 0.75,
        filter: 'blur(1px) brightness(0.85)',
        zIndex: 2,
      };
    } else if (normalizedDiff === 1) {
      // Right item - visible but receded
      return {
        transform: 'scale(0.85) translateX(280px) translateZ(-50px) rotateY(-8deg)',
        opacity: 0.75,
        filter: 'blur(1px) brightness(0.85)',
        zIndex: 2,
      };
    } else {
      // Hidden items
      return {
        transform: 'scale(0.7) translateX(0) translateZ(-150px)',
        opacity: 0,
        filter: 'blur(10px)',
        zIndex: 1,
        pointerEvents: 'none' as const,
      };
    }
  };

  return (
    <>
      <div className="card-container">
        <div className="card carousel-card">
          <div className="carousel-wrapper">
            <button
              className="carousel-arrow carousel-arrow-left"
              onClick={handlePrevious}
              aria-label="Previous portfolio item"
            >
              ‹
            </button>

            <div className="carousel-items">
              {portfolioData.map((item, index) => {
                const style = getItemStyle(index);
                const isCenter = index === currentIndex;

                return (
                  <div
                    key={item.id}
                    className={`carousel-item ${isCenter ? 'active' : ''}`}
                    style={style}
                  >
                    <Link href={item.link} className="item-link">
                      <div className="item-image-wrapper">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="580px"
                          style={{ objectFit: 'cover' }}
                          priority={index === 0}
                        />
                        <div className="item-content-overlay">
                          <h3 className="item-title">{item.title}</h3>
                          <p className="item-description">{item.description}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>

            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={handleNext}
              aria-label="Next portfolio item"
            >
              ›
            </button>
          </div>

          <div className="carousel-dots">
            {portfolioData.map((item, index) => (
              <button
                key={item.id}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to ${item.title}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .card-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto 200px;
          padding: 0 40px;
        }

        .card {
          width: 100%;
          background: var(--card-bg);
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .carousel-card {
          padding: 80px 40px;
          min-height: 960px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .carousel-wrapper {
          position: relative;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 2000px;
        }

        .carousel-items {
          position: relative;
          width: 580px;
          height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
        }

        .carousel-item {
          position: absolute;
          width: 580px;
          height: 600px;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .carousel-item.active {
          width: 580px;
        }

        .carousel-item:not(.active) {
          width: 380px;
        }

        .item-link {
          display: block;
          width: 100%;
          height: 100%;
          text-decoration: none;
          color: inherit;
          background: var(--bg-primary);
          border-radius: 24px;
          overflow: hidden;
          border: 3px solid #333d29;
          box-shadow:
            0 8px 24px rgba(0, 0, 0, 0.15),
            0 4px 12px rgba(51, 61, 41, 0.2),
            inset 0 -2px 8px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .carousel-item.active .item-link {
          border-color: #333d29;
          border-width: 4px;
          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.4),
            0 15px 35px rgba(51, 61, 41, 0.5),
            inset 0 -4px 15px rgba(0, 0, 0, 0.1),
            0 0 0 1px rgba(51, 61, 41, 0.1);
        }

        .carousel-item.active .item-link:hover {
          transform: translateY(-12px);
          box-shadow:
            0 28px 80px rgba(0, 0, 0, 0.5),
            0 20px 45px rgba(51, 61, 41, 0.6),
            inset 0 -4px 15px rgba(0, 0, 0, 0.1),
            0 0 0 1px rgba(51, 61, 41, 0.1);
        }

        .carousel-item:not(.active) .item-link {
          border-color: rgba(51, 61, 41, 0.5);
        }

        .item-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          background: #f0f0f0;
          border-radius: 24px;
          overflow: hidden;
        }

        .item-content-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 40px 30px;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.7) 50%,
            rgba(0, 0, 0, 0) 100%
          );
          z-index: 2;
        }

        .item-title {
          font-family: var(--font-funnel);
          font-size: 32px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 12px 0;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .item-description {
          font-size: 15px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.95);
          margin: 0;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 60px;
          height: 60px;
          border: none;
          background: rgba(51, 61, 41, 0.9);
          color: #ffffff;
          font-size: 48px;
          font-weight: 300;
          cursor: pointer;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
          line-height: 1;
          padding-bottom: 4px;
        }

        .carousel-arrow:hover {
          background: rgba(51, 61, 41, 1);
          transform: translateY(-50%) scale(1.1);
        }

        .carousel-arrow-left {
          left: 0;
        }

        .carousel-arrow-right {
          right: 0;
        }

        .carousel-dots {
          display: flex;
          gap: 12px;
          margin-top: 40px;
          justify-content: center;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid #333d29;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .dot:hover {
          transform: scale(1.2);
        }

        .dot.active {
          background: #333d29;
          transform: scale(1.3);
        }

        @media (max-width: 1024px) and (min-width: 768px) {
          .card-container {
            max-width: 90%;
            margin-bottom: 200px;
            padding: 0 40px;
          }

          .carousel-card {
            padding: 60px 30px;
            min-height: 600px;
          }

          .carousel-items {
            width: 480px;
            height: 550px;
          }

          .carousel-item {
            width: 480px;
            height: 550px;
          }

          .carousel-item.active {
            width: 480px;
          }

          .carousel-item:not(.active) {
            width: 320px;
          }

          .item-title {
            font-size: 28px;
          }

          .carousel-arrow {
            width: 50px;
            height: 50px;
            font-size: 40px;
          }
        }

        @media (max-width: 767px) {
          .card-container {
            max-width: 100%;
            margin-bottom: 100px;
            padding: 0 20px;
          }

          .carousel-card {
            padding: 40px 20px;
            min-height: auto;
          }

          .carousel-wrapper {
            flex-direction: column;
          }

          .carousel-items {
            width: 100%;
            max-width: 380px;
            height: 480px;
          }

          .carousel-item {
            width: 100%;
            max-width: 380px;
            height: 480px;
          }

          .carousel-item.active {
            width: 100%;
            max-width: 380px;
          }

          .carousel-item:not(.active) {
            display: none;
          }

          .item-content-overlay {
            padding: 30px 20px;
          }

          .item-title {
            font-size: 24px;
          }

          .item-description {
            font-size: 14px;
          }

          .carousel-arrow {
            width: 44px;
            height: 44px;
            font-size: 32px;
          }

          .carousel-arrow-left {
            left: 10px;
          }

          .carousel-arrow-right {
            right: 10px;
          }
        }
      `}</style>
    </>
  );
}
