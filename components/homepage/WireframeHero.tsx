'use client';

import { useEffect, useState } from 'react';
import { tickerWords } from '@/lib/ticker-words';

export function WireframeHero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [videoOpacity, setVideoOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % tickerWords.length);
        setIsAnimating(false);
      }, 300);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // Smooth video loop with subtle fade effect
  const handleVideoTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    const duration = video.duration;
    const currentTime = video.currentTime;

    // Very subtle fade in last 0.1 seconds, fade in during first 0.1 seconds
    if (duration - currentTime < 0.1) {
      setVideoOpacity(0.95 + (currentTime / duration) * 0.05);
    } else if (currentTime < 0.1) {
      setVideoOpacity(0.95 + (currentTime / 0.1) * 0.05);
    } else {
      setVideoOpacity(1);
    }
  };

  return (
    <div className="card-container first">
      <div className="card hero-card">
        {/* Background Video with smooth loop */}
        <video
          autoPlay
          loop
          muted
          playsInline
          onTimeUpdate={handleVideoTimeUpdate}
          className="absolute top-0 left-0 w-full h-full z-[1] object-cover transition-opacity duration-200"
          style={{ opacity: videoOpacity * 0.7 }}
        >
          <source src="/images/HeroCard.webm" type="video/webm" />
        </video>

        {/* Hero Content */}
        <div className="relative z-[2] text-center w-full max-w-6xl">
          <h1
            className="text-[100px] font-normal leading-tight mb-0"
            style={{ fontFamily: 'var(--font-funnel)' }}
          >
            {/* Line 1: Vibe, [word ticker] AI */}
            <span className="flex items-center justify-center gap-7 flex-wrap mb-5">
              <span style={{ color: 'var(--hero-text)' }}>Vibe</span>
              <span style={{ color: 'var(--hero-text)' }}>,</span>

              {/* Inline Ticker */}
              <span className="inline-flex items-center gap-4">
                {/* Word Box */}
                <span
                  className="bg-[#333d29] px-9 py-4 rounded-[40px] inline-flex items-center justify-center overflow-hidden relative"
                  style={{ height: '70px', width: '280px' }}
                >
                  <span className="relative w-full h-full flex items-center justify-center bg-[#333d29] rounded-[30px]">
                    <span
                      className={`absolute w-full text-white font-medium text-[32px] transition-all duration-300 ${
                        isAnimating
                          ? '-translate-y-full opacity-0'
                          : 'translate-y-0 opacity-100'
                      }`}
                      style={{ fontFamily: 'var(--font-funnel)' }}
                    >
                      {tickerWords[currentWordIndex]}
                    </span>
                  </span>
                </span>

                {/* AI Text */}
                <span style={{ color: 'var(--hero-text)' }}>AI</span>
              </span>
            </span>

            {/* Line 2: + a little me */}
            <span
              className="block text-[100px] font-normal opacity-90"
              style={{ color: 'var(--hero-text)' }}
            >
              + a little me
            </span>
          </h1>
        </div>
      </div>

      <style jsx>{`
        .card-container {
          max-width: 1400px;
          margin: 0 auto 200px;
          padding: 0 40px;
        }

        .card-container.first {
          margin-top: 40px;
        }

        .card {
          background: transparent;
          border-radius: 24px;
          overflow: hidden;
          width: 100%;
          min-height: 800px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .hero-card {
          position: relative;
          min-height: 960px;
          background: var(--bg-primary);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 120px 60px 80px;
          transition: background-color 0.3s ease;
        }

        /* Responsive - Tablet */
        @media (max-width: 1024px) and (min-width: 768px) {
          .card-container {
            max-width: 90%;
            margin-bottom: 200px;
            padding: 0 40px;
          }

          h1 {
            font-size: 80px !important;
          }

          .word-box {
            width: 240px !important;
            height: 60px !important;
            padding: 12px 30px !important;
          }

          .word-text {
            font-size: 28px !important;
          }
        }

        /* Responsive - Mobile */
        @media (max-width: 767px) {
          .card-container {
            max-width: 100%;
            margin-bottom: 100px;
            padding: 0 20px;
          }

          .card-container.first {
            margin-top: 60px;
          }

          .card {
            min-height: auto;
          }

          .hero-card {
            padding: 80px 20px 60px;
            min-height: auto;
          }

          h1 {
            font-size: 48px !important;
          }

          h1 > span:first-child {
            flex-direction: column !important;
            gap: 15px !important;
          }

          .word-box {
            width: 200px !important;
            height: 50px !important;
            padding: 10px 25px !important;
          }

          .word-text {
            font-size: 24px !important;
          }
        }
      `}</style>
    </div>
  );
}
