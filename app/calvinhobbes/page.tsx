'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

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
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
          <Swiper
            modules={[Navigation]}
            effect="slide"
            speed={1200}
            navigation={{
              prevEl: '.nav-arrow-left',
              nextEl: '.nav-arrow-right',
            }}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="comic-swiper"
            spaceBetween={50}
          >
            {comics.map((comic) => (
              <SwiperSlide key={comic.id}>
                <div className="comic-image-wrapper">
                  <Image
                    src={comic.src}
                    alt={comic.alt}
                    width={2816}
                    height={1532}
                    priority
                    className="comic-image"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button
            className="nav-arrow nav-arrow-left"
            aria-label="Previous comic"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            className="nav-arrow nav-arrow-right"
            aria-label="Next comic"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Comic Counter */}
        <div className="comic-counter">
          <span className="counter-current">{activeIndex + 1}</span>
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
                  onClick={() => swiperInstance?.slideTo(index)}
                  className={`thumbnail ${index === activeIndex ? 'thumbnail-active' : ''}`}
                  aria-label={`Go to ${comic.title}`}
                >
                  <Image
                    src={comic.src}
                    alt={comic.alt}
                    width={200}
                    height={67}
                    className="thumbnail-image"
                  />
                  {index === activeIndex && <div className="thumbnail-indicator"></div>}
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

      <style jsx global>{`
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

        .comic-swiper {
          width: 100%;
          min-height: 300px;
          overflow: visible;
        }

        .comic-image-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px 0;
        }

        .comic-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          filter: blur(8px);
        }

        /* Swiper slide animation enhancement */
        .comic-swiper .swiper-slide {
          opacity: 0.4;
          transform: scale(0.9);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .comic-swiper .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }

        .comic-swiper .swiper-slide-active .comic-image {
          filter: blur(0px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        }

        .comic-swiper .swiper-slide-next,
        .comic-swiper .swiper-slide-prev {
          opacity: 0.3;
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

        .nav-arrow:hover {
          background: #c75146;
          color: white;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 20px rgba(199, 81, 70, 0.3);
        }

        .nav-arrow:active {
          transform: translateY(-50%) scale(0.95);
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
          transition: all 0.3s ease;
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
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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
          transform: translateY(-2px);
        }

        .thumbnail-image {
          width: 200px;
          height: auto;
          border-radius: 6px;
          display: block;
          transition: all 0.3s ease;
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
          animation: indicatorSlide 0.3s ease;
        }

        @keyframes indicatorSlide {
          from {
            width: 0;
          }
          to {
            width: 40px;
          }
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
