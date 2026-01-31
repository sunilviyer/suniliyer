'use client';

import { useState } from 'react';
import Image from 'next/image';

const comics = [
  {
    id: 1,
    src: '/images/calvinhobbes/ch-monalisa.webp',
    alt: 'cAlvIn and Hobbes - Monalisa',
    title: 'Monalisa'
  },
  {
    id: 2,
    src: '/images/calvinhobbes/ch-iyer.webp',
    alt: 'cAlvIn and Hobbes - Iyer',
    title: 'Iyer'
  },
];

export default function CalvinHobbesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | 'none'>('none');

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection('right');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? comics.length - 1 : prev - 1));
      setTimeout(() => {
        setIsTransitioning(false);
        setDirection('none');
      }, 50);
    }, 400);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection('left');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === comics.length - 1 ? 0 : prev + 1));
      setTimeout(() => {
        setIsTransitioning(false);
        setDirection('none');
      }, 50);
    }, 400);
  };

  const goToIndex = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setDirection(index > currentIndex ? 'left' : 'right');
    setTimeout(() => {
      setCurrentIndex(index);
      setTimeout(() => {
        setIsTransitioning(false);
        setDirection('none');
      }, 50);
    }, 400);
  };

  return (
    <div className="calvin-hobbes-viewer">
      {/* Header */}
      <header className="comic-header">
        <h1 className="comic-title">
          c<span className="highlight">A</span>lv<span className="highlight">I</span>n and Hobbes
        </h1>
        <p className="comic-subtitle">an <span className="highlight">AI</span> parody</p>
      </header>

      {/* Main Comic Display */}
      <main className="comic-main">
        <div className="comic-display-container">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="nav-arrow nav-arrow-left"
            aria-label="Previous comic"
            disabled={comics.length <= 1}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Comic Image */}
          <div className={`comic-image-wrapper ${isTransitioning ? `transitioning-${direction}` : ''}`}>
            <Image
              src={comics[currentIndex].src}
              alt={comics[currentIndex].alt}
              width={1400}
              height={467}
              priority
              className="comic-image"
            />
          </div>

          <button
            onClick={goToNext}
            className="nav-arrow nav-arrow-right"
            aria-label="Next comic"
            disabled={comics.length <= 1}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Comic Counter */}
        <div className="comic-counter">
          <span className="counter-current">{currentIndex + 1}</span>
          <span className="counter-separator">/</span>
          <span className="counter-total">{comics.length}</span>
        </div>

        {/* Thumbnails */}
        {comics.length > 1 && (
          <div className="comic-thumbnails">
            <div className="thumbnails-track">
              {comics.map((comic, index) => (
                <button
                  key={comic.id}
                  onClick={() => goToIndex(index)}
                  className={`thumbnail ${index === currentIndex ? 'thumbnail-active' : ''}`}
                  aria-label={`Go to ${comic.title}`}
                >
                  <Image
                    src={comic.src}
                    alt={comic.alt}
                    width={200}
                    height={67}
                    className="thumbnail-image"
                  />
                  {index === currentIndex && <div className="thumbnail-indicator"></div>}
                </button>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Disclaimer */}
      <footer className="comic-footer">
        <p className="disclaimer">
          Parody. Original artwork by Bill Watterson. No affiliation or endorsement.
        </p>
      </footer>

      <style jsx>{`
        .calvin-hobbes-viewer {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f1e8 0%, #e8e4db 100%);
          padding: 60px 20px 40px;
          font-family: var(--font-funnel-display), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* Header */
        .comic-header {
          text-align: center;
          margin-bottom: 60px;
          animation: fadeInDown 0.8s ease;
        }

        .comic-title {
          font-size: clamp(48px, 8vw, 96px);
          font-weight: 900;
          color: #2c2c2c;
          margin: 0 0 12px 0;
          letter-spacing: -2px;
          line-height: 1;
          text-transform: none;
          position: relative;
        }

        .comic-title .highlight {
          color: #c75146;
          position: relative;
        }

        .comic-subtitle {
          font-size: clamp(18px, 3vw, 28px);
          color: #666;
          font-weight: 500;
          margin: 0;
          letter-spacing: 1px;
        }

        .comic-subtitle .highlight {
          color: #c75146;
          font-weight: 700;
        }

        /* Main Display */
        .comic-main {
          max-width: 1400px;
          margin: 0 auto;
        }

        .comic-display-container {
          position: relative;
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow:
            0 10px 40px rgba(0, 0, 0, 0.1),
            0 0 0 1px rgba(0, 0, 0, 0.05);
          margin-bottom: 30px;
          animation: fadeInUp 0.8s ease 0.2s both;
        }

        .comic-image-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 300px;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 1;
          transform: translateX(0) scale(1);
        }

        .comic-image-wrapper.transitioning-left {
          opacity: 0;
          transform: translateX(-60px) scale(0.95);
        }

        .comic-image-wrapper.transitioning-right {
          opacity: 0;
          transform: translateX(60px) scale(0.95);
        }

        .comic-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
        }

        /* Navigation Arrows */
        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          border: 2px solid #c75146;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #c75146;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 10;
          box-shadow: 0 4px 12px rgba(199, 81, 70, 0.15);
        }

        .nav-arrow:hover:not(:disabled) {
          background: #c75146;
          color: white;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 20px rgba(199, 81, 70, 0.3);
        }

        .nav-arrow:active:not(:disabled) {
          transform: translateY(-50%) scale(0.95);
        }

        .nav-arrow:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .nav-arrow-left {
          left: -30px;
        }

        .nav-arrow-right {
          right: -30px;
        }

        /* Counter */
        .comic-counter {
          text-align: center;
          font-size: 24px;
          font-weight: 700;
          color: #2c2c2c;
          margin: 20px 0;
          letter-spacing: 1px;
          animation: fadeInUp 0.8s ease 0.3s both;
        }

        .counter-current {
          color: #c75146;
          font-size: 32px;
        }

        .counter-separator {
          margin: 0 8px;
          color: #999;
        }

        .counter-total {
          color: #666;
        }

        /* Thumbnails */
        .comic-thumbnails {
          overflow-x: auto;
          padding: 20px 0;
          animation: fadeInUp 0.8s ease 0.4s both;
        }

        .thumbnails-track {
          display: flex;
          gap: 16px;
          justify-content: center;
          min-width: min-content;
          padding: 0 20px;
        }

        .thumbnail {
          position: relative;
          background: white;
          border: 3px solid transparent;
          border-radius: 12px;
          padding: 8px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .thumbnail:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
          border-color: #c75146;
        }

        .thumbnail-active {
          border-color: #c75146;
          box-shadow: 0 6px 20px rgba(199, 81, 70, 0.3);
        }

        .thumbnail-image {
          width: 200px;
          height: auto;
          border-radius: 6px;
          display: block;
        }

        .thumbnail-indicator {
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 4px;
          background: #c75146;
          border-radius: 2px;
        }

        /* Footer/Disclaimer */
        .comic-footer {
          text-align: center;
          margin-top: 60px;
          animation: fadeIn 0.8s ease 0.6s both;
        }

        .disclaimer {
          font-size: 13px;
          color: #999;
          font-weight: 500;
          letter-spacing: 0.5px;
          margin: 0;
          padding: 16px 24px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 8px;
          display: inline-block;
          border: 1px solid rgba(0, 0, 0, 0.08);
        }

        /* Animations */
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .nav-arrow-left {
            left: 10px;
          }

          .nav-arrow-right {
            right: 10px;
          }
        }

        @media (max-width: 768px) {
          .calvin-hobbes-viewer {
            padding: 40px 16px 30px;
          }

          .comic-display-container {
            padding: 24px 16px;
          }

          .nav-arrow {
            width: 48px;
            height: 48px;
          }

          .nav-arrow svg {
            width: 28px;
            height: 28px;
          }

          .nav-arrow-left {
            left: -8px;
          }

          .nav-arrow-right {
            right: -8px;
          }

          .thumbnail-image {
            width: 150px;
          }

          .thumbnails-track {
            justify-content: flex-start;
          }
        }

        /* Scrollbar Styling */
        .comic-thumbnails::-webkit-scrollbar {
          height: 8px;
        }

        .comic-thumbnails::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 4px;
        }

        .comic-thumbnails::-webkit-scrollbar-thumb {
          background: #c75146;
          border-radius: 4px;
        }

        .comic-thumbnails::-webkit-scrollbar-thumb:hover {
          background: #a84239;
        }
      `}</style>
    </div>
  );
}
