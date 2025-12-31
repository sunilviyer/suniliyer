'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { learningPathsData } from '@/lib/learning-paths-data';

export function LearningPathsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === learningPathsData.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const handlePrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? learningPathsData.length - 1 : prev - 1));
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
    const totalItems = learningPathsData.length;

    // Normalize difference to handle circular array
    let normalizedDiff = diff;
    if (diff > totalItems / 2) {
      normalizedDiff = diff - totalItems;
    } else if (diff < -totalItems / 2) {
      normalizedDiff = diff + totalItems;
    }

    if (normalizedDiff === 0) {
      // Center item
      return {
        transform: 'scale(1) translateX(0)',
        opacity: 1,
        filter: 'blur(0px)',
        zIndex: 3,
      };
    } else if (normalizedDiff === -1) {
      // Left item
      return {
        transform: 'scale(0.9) translateX(-100px)',
        opacity: 0.6,
        filter: 'blur(5px)',
        zIndex: 2,
      };
    } else if (normalizedDiff === 1) {
      // Right item
      return {
        transform: 'scale(0.9) translateX(100px)',
        opacity: 0.6,
        filter: 'blur(5px)',
        zIndex: 2,
      };
    } else {
      // Hidden items
      return {
        transform: 'scale(0.8) translateX(0)',
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
              aria-label="Previous learning path"
            >
              ‹
            </button>

            <div className="carousel-items">
              {learningPathsData.map((item, index) => {
                const style = getItemStyle(index);
                const isCenter = index === currentIndex;

                return (
                  <div
                    key={item.id}
                    className={`carousel-item ${isCenter ? 'active' : ''}`}
                    style={style}
                  >
                    <Link href={`/learning-paths/${item.slug}`} className="item-link">
                      <div className="item-image-wrapper">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="580px"
                          style={{ objectFit: 'cover' }}
                          priority={index === 0}
                        />
                      </div>
                      <div className="item-content">
                        <div className="item-number">{item.number}</div>
                        <h3 className="item-title">{item.title}</h3>
                        <p className="item-description">{item.description}</p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>

            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={handleNext}
              aria-label="Next learning path"
            >
              ›
            </button>
          </div>

          <div className="carousel-dots">
            {learningPathsData.map((item, index) => (
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
          max-width: 1920px;
          margin: 0 auto;
          padding: 0;
          margin-bottom: 300px;
        }

        .card {
          width: 100%;
          background: var(--card-bg);
          border-radius: 0;
          box-shadow: 0 4px 12px var(--shadow-color);
        }

        .carousel-card {
          padding: 80px 40px;
          min-height: 800px;
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
        }

        .carousel-items {
          position: relative;
          width: 580px;
          height: 650px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-item {
          position: absolute;
          width: 580px;
          height: 650px;
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
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .carousel-item.active .item-link:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
        }

        .item-image-wrapper {
          position: relative;
          width: 100%;
          height: 350px;
          background: #f0f0f0;
        }

        .item-content {
          padding: 30px;
        }

        .item-number {
          font-family: var(--font-funnel);
          font-size: 14px;
          font-weight: 600;
          color: #333d29;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }

        .item-title {
          font-family: var(--font-funnel);
          font-size: 32px;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 15px 0;
        }

        .item-description {
          font-size: 16px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0;
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

        @media (max-width: 1024px) {
          .card-container {
            margin-bottom: 200px;
          }

          .carousel-card {
            padding: 60px 30px;
            min-height: 600px;
          }

          .carousel-items {
            width: 480px;
            height: 580px;
          }

          .carousel-item {
            width: 480px;
            height: 580px;
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

        @media (max-width: 768px) {
          .card-container {
            margin-bottom: 100px;
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
            height: 520px;
          }

          .carousel-item {
            width: 100%;
            max-width: 380px;
            height: 520px;
          }

          .carousel-item.active {
            width: 100%;
            max-width: 380px;
          }

          .carousel-item:not(.active) {
            display: none;
          }

          .item-image-wrapper {
            height: 280px;
          }

          .item-content {
            padding: 20px;
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
