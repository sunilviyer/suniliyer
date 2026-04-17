'use client';

import { useState, useEffect } from 'react';
import { EASTER_EGGS, COMPLETION_EGG, TIER_INFO, TOTAL_EGGS, type EasterEgg } from '@/data/easter-eggs';
import TopNav from '@/components/layout/TopNav';
import GardenSVG from '@/components/easter-eggs/GardenSVG';

// ──────────────────────────────────────────────────────────────────────────────
// SVG EGG PATTERN GENERATORS
// ──────────────────────────────────────────────────────────────────────────────

const EggSVG = ({ size, color, pattern }: { size: number; color: string; pattern: string }) => {
  const svgPatterns = {
    stripes: (
      <g>
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={i} x1="7" y1={8 + i * 5} x2="18" y2={8 + i * 5} stroke={color} strokeWidth="1.5" opacity="0.7" />
        ))}
      </g>
    ),
    dots: (
      <g>
        {[[9, 12], [15, 12], [12, 16], [9, 20], [15, 20], [12, 24]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="1.8" fill={color} opacity="0.65" />
        ))}
      </g>
    ),
    zigzag: (
      <path d="M 7 10 L 10 14 L 13 10 L 16 14 L 19 10 M 7 18 L 10 22 L 13 18 L 16 22 L 19 18 M 7 26 L 10 30 L 13 26 L 16 30 L 19 26" stroke={color} strokeWidth="1.3" fill="none" opacity="0.6" />
    ),
    diamonds: (
      <g>
        {[[12, 12], [8, 18], [16, 18], [12, 24]].map(([cx, cy], i) => (
          <rect key={i} x={cx - 2.5} y={cy - 2.5} width="5" height="5" fill={color} opacity="0.55" transform={`rotate(45 ${cx} ${cy})`} />
        ))}
      </g>
    ),
    waves: (
      <g>
        {[10, 16, 22, 28].map((y, i) => (
          <path key={i} d={`M 6 ${y} Q 9 ${y - 2} 12 ${y} T 18 ${y}`} stroke={color} strokeWidth="1.4" fill="none" opacity="0.65" />
        ))}
      </g>
    ),
    stars: (
      <g>
        {[[10, 12], [15, 18], [10, 24]].map(([cx, cy], i) => (
          <path key={i} d={`M ${cx} ${cy - 3} L ${cx + 1} ${cy - 1} L ${cx + 3} ${cy} L ${cx + 1} ${cy + 1} L ${cx} ${cy + 3} L ${cx - 1} ${cy + 1} L ${cx - 3} ${cy} L ${cx - 1} ${cy - 1} Z`} fill={color} opacity="0.7" />
        ))}
      </g>
    ),
  };

  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 25 35" className="egg-svg">
      <defs>
        <filter id="eggShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3" />
        </filter>
      </defs>
      <ellipse cx="12.5" cy="17" rx="11" ry="15" fill="#FFFFFF" filter="url(#eggShadow)" />
      {svgPatterns[pattern as keyof typeof svgPatterns] || svgPatterns.stripes}
    </svg>
  );
};

const GoldEggSVG = () => (
  <svg width="28" height="36" viewBox="0 0 25 35" className="gold-egg-svg">
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FCD34D" />
        <stop offset="50%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
      <filter id="goldGlow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <ellipse cx="12.5" cy="17" rx="11" ry="15" fill="url(#goldGrad)" filter="url(#goldGlow)" />
  </svg>
);

// ──────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ──────────────────────────────────────────────────────────────────────────────

export default function EasterEggsClient() {
  const [bookOpen, setBookOpen] = useState(false);
  const [found, setFound] = useState<Set<number>>(new Set());
  const [selectedEgg, setSelectedEgg] = useState<EasterEgg | null>(null);
  const [showCompletion, setShowCompletion] = useState(false);
  const [completionVisible, setCompletionVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const foundCount = Array.from(found).filter(id => id !== 99).length;
  const allFound = foundCount >= TOTAL_EGGS;

  // Listen for theme changes
  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDark(theme === 'dark');
    };

    checkTheme();
    window.addEventListener('themeChange', checkTheme);
    return () => window.removeEventListener('themeChange', checkTheme);
  }, []);

  const handleEggClick = (egg: EasterEgg) => {
    if (found.has(egg.id)) return;

    setFound(prev => new Set([...prev, egg.id]));
    setTimeout(() => {
      setSelectedEgg(egg);

      if (foundCount + 1 >= TOTAL_EGGS) {
        setTimeout(() => {
          setSelectedEgg(null);
          setShowCompletion(true);
        }, 700);
      }
    }, 560);
  };

  const handleCompletionClick = () => {
    setFound(prev => new Set([...prev, 99]));
    setShowCompletion(false);

    setTimeout(() => {
      setCompletionVisible(true);
      setTimeout(() => setCompletionVisible(false), 7000);
    }, 2200);
  };

  const closeModal = () => setSelectedEgg(null);
  const getTierInfo = (tier: 1 | 2 | 3 | 's') => TIER_INFO[tier];

  return (
    <>
      <TopNav />

      <div className="easter-eggs-page">
        {/* Counter Pill */}
        <div className={`counter-pill ${bookOpen ? 'visible' : ''} ${foundCount === TOTAL_EGGS ? 'complete' : ''}`}>
          🥚 {foundCount} / {TOTAL_EGGS}
        </div>

        {/* Storybook Cover */}
        {!bookOpen && (
          <div className="book-overlay">
            <div className="book-left">
              <div className="book-content">
                <div className="book-left-motif">✦</div>
              </div>
            </div>
            <div className="book-right">
              <div className="book-content">
                <div className="book-egg floating">
                  <EggSVG size={60} color="#FFD1DC" pattern="stripes" />
                </div>
                <h1 className="book-title">Every Garden Has Secrets</h1>
                <p className="book-sub">
                  Once upon a time, someone hid {TOTAL_EGGS} Easter eggs across a website. This is where they buried the map.
                </p>
                <p className="book-hint">Begin where gardeners begin...</p>
                <button className="open-btn" onClick={() => setBookOpen(true)}>
                  Open the book
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Garden */}
        {bookOpen && (
          <div className="garden-container">
            <div className="garden-wrapper">
              {/* Garden SVG */}
              <div className="garden-images">
                <GardenSVG isDark={isDark} />

                {/* Eggs positioned relative to SVG */}
                {EASTER_EGGS.map(egg => {
                  const isFound = found.has(egg.id);
                  const foundIds = Array.from(found).filter(id => id !== 99).sort((a, b) => a - b);
                  const nextEggId = foundIds.length + 1;

                  // Only show unfound eggs (next 6)
                  const shouldShow = !isFound && (egg.id >= nextEggId && egg.id < nextEggId + 6);
                  const nightVisible = !egg.nightOnly || isDark;

                  if (!shouldShow || !nightVisible) return null;

                  return (
                    <div
                      key={egg.id}
                      className="egg active-egg"
                      style={{
                        left: `${egg.x}%`,
                        top: `${egg.y}%`,
                      }}
                      onClick={() => handleEggClick(egg)}
                    >
                      <EggSVG size={Math.round(egg.size * 1.25)} color={egg.col} pattern={egg.pat} />
                    </div>
                  );
                })}

                {/* Completion Egg */}
                {showCompletion && (
                  <div
                    className="egg completion visible"
                    style={{
                      left: `${COMPLETION_EGG.x}%`,
                      top: `${COMPLETION_EGG.y}%`,
                    }}
                    onClick={handleCompletionClick}
                  >
                    <GoldEggSVG />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Modal */}
        {selectedEgg && (
          <div className="modal-bg open" onClick={(e) => e.target === e.currentTarget && closeModal()}>
            <div className="modal">
              <button className="modal-close" onClick={closeModal}>×</button>
              <div className="modal-header">
                <div className={`modal-dot ${getTierInfo(selectedEgg.tier).cls}`} />
                <span className="modal-tier">{getTierInfo(selectedEgg.tier).label}</span>
              </div>
              <h2 className="modal-title">{selectedEgg.title}</h2>
              <p className="modal-location">📍 {selectedEgg.location}</p>
              <p className="modal-body">{selectedEgg.body}</p>
              <div className="modal-link">{selectedEgg.link}</div>
              {selectedEgg.hint && (
                <p className="modal-hint">Psst... <em>{selectedEgg.hint}</em></p>
              )}
            </div>
          </div>
        )}

        {/* Completion Message */}
        {completionVisible && (
          <div className="completion-message show">
            <p>You took the path less travelled. All {TOTAL_EGGS} times. Well done.</p>
          </div>
        )}

        <style jsx>{`
          .easter-eggs-page {
            min-height: 100vh;
            padding-top: 110px;
            background: var(--bg-primary);
          }

          /* Counter */
          .counter-pill {
            position: fixed;
            top: 110px;
            right: 20px;
            background: rgba(10, 8, 20, 0.75);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 18px;
            padding: 8px 16px;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.85);
            z-index: 99;
            opacity: 0;
            transition: opacity 0.5s;
          }
          .counter-pill.visible {
            opacity: 1;
          }
          .counter-pill.complete {
            background: rgba(180, 120, 10, 0.3);
            border-color: rgba(245, 158, 11, 0.5);
            color: #FCD34D;
          }

          /* Book Overlay */
          .book-overlay {
            position: fixed;
            inset: 0;
            z-index: 500;
            display: flex;
            perspective: 1400px;
            padding-top: 110px;
          }
          .book-left, .book-right {
            flex: 1;
            position: relative;
            overflow: hidden;
            transition: transform 0.9s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .book-left {
            transform-origin: right center;
            background: linear-gradient(135deg, #2a1506 0%, #160b03 100%);
            border-right: 2px solid rgba(200, 150, 60, 0.4);
          }
          .book-right {
            transform-origin: left center;
            background: linear-gradient(225deg, #2a1506 0%, #160b03 100%);
          }
          .book-content {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 32px 20px;
          }
          .book-left .book-content {
            border: 1px solid rgba(180, 130, 40, 0.15);
            margin: 16px;
            border-radius: 2px;
          }
          .book-left-motif {
            font-size: 80px;
            color: rgba(200, 160, 60, 0.2);
          }
          .book-egg.floating {
            animation: float 3s ease-in-out infinite;
            margin-bottom: 20px;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-7px); }
          }
          .book-title {
            font-family: var(--font-funnel-display), serif;
            font-size: clamp(20px, 5vw, 32px);
            color: #F5DEB3;
            margin: 0 0 16px;
          }
          .book-sub {
            font-size: clamp(11px, 2.5vw, 14px);
            color: rgba(235, 210, 160, 0.55);
            line-height: 1.65;
            max-width: 280px;
            margin-bottom: 18px;
          }
          .book-hint {
            font-size: 12px;
            font-style: italic;
            color: rgba(180, 140, 60, 0.65);
            margin-bottom: 24px;
          }
          .open-btn {
            background: transparent;
            border: 1px solid rgba(200, 160, 60, 0.45);
            color: #F5DEB3;
            padding: 10px 24px;
            border-radius: 20px;
            font-size: 13px;
            cursor: pointer;
            transition: all 0.2s;
          }
          .open-btn:hover {
            background: rgba(200, 160, 60, 0.15);
            transform: scale(1.04);
          }

          /* Garden Container */
          .garden-container {
            width: 100%;
            height: calc(100vh - 110px);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            overflow: hidden;
          }
          .garden-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .garden-images {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .garden-image {
            display: block;
            width: 100%;
            height: auto;
            max-width: 100%;
          }

          /* Eggs */
          .egg {
            position: absolute;
            transform: translate(-50%, -50%);
            cursor: pointer;
            transition: transform 0.3s ease;
            z-index: 10;
          }
          .egg:hover {
            transform: translate(-50%, -50%) scale(1.15);
          }
          .egg.active-egg {
            animation: eggGlowPulse 2s ease-in-out infinite;
            filter: drop-shadow(0 0 8px rgba(255, 223, 0, 0.8)) drop-shadow(0 0 16px rgba(255, 223, 0, 0.6));
          }
          @keyframes eggGlowPulse {
            0%, 100% {
              transform: translate(-50%, -50%) scale(1);
              filter: drop-shadow(0 0 8px rgba(255, 223, 0, 0.8)) drop-shadow(0 0 16px rgba(255, 223, 0, 0.6));
            }
            50% {
              transform: translate(-50%, -50%) scale(1.12);
              filter: drop-shadow(0 0 12px rgba(255, 223, 0, 1)) drop-shadow(0 0 24px rgba(255, 223, 0, 0.8));
            }
          }
          .egg.completion {
            animation: goldPulse 2s ease-in-out infinite;
          }
          @keyframes goldPulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.08); }
          }

          /* Modal */
          .modal-bg {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(8px);
            z-index: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
          }
          .modal-bg.open {
            opacity: 1;
            pointer-events: auto;
          }
          .modal {
            background: rgba(20, 20, 30, 0.95);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 16px;
            padding: 32px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            position: relative;
            animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          @keyframes slideUp {
            from { transform: translateY(40px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .modal-close {
            position: absolute;
            top: 16px;
            right: 16px;
            background: transparent;
            border: none;
            color: rgba(255, 255, 255, 0.6);
            font-size: 32px;
            cursor: pointer;
            padding: 0;
            width: 36px;
            height: 36px;
            line-height: 1;
          }
          .modal-header {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 16px;
          }
          .modal-dot {
            width: 14px;
            height: 14px;
            border-radius: 50%;
          }
          .modal-dot.t1 { background: #9333ea; }
          .modal-dot.t2 { background: #f59e0b; }
          .modal-dot.t3 { background: #3b82f6; }
          .modal-dot.ts { background: #eab308; }
          .modal-tier {
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: rgba(255, 255, 255, 0.6);
            font-weight: 600;
          }
          .modal-title {
            font-family: var(--font-funnel-display), serif;
            font-size: 24px;
            color: #fff;
            margin-bottom: 12px;
          }
          .modal-location {
            font-size: 13px;
            color: rgba(255, 255, 255, 0.5);
            margin-bottom: 20px;
          }
          .modal-body {
            font-size: 15px;
            line-height: 1.7;
            color: rgba(255, 255, 255, 0.85);
            margin-bottom: 24px;
          }
          .modal-link {
            display: inline-block;
            padding: 12px 20px;
            background: rgba(147, 102, 57, 0.2);
            border: 1px solid rgba(147, 102, 57, 0.4);
            border-radius: 20px;
            color: #F5DEB3;
            font-size: 14px;
            margin-bottom: 16px;
          }
          .modal-hint {
            font-size: 13px;
            font-style: italic;
            color: rgba(180, 140, 60, 0.7);
            margin-top: 20px;
          }

          /* Completion */
          .completion-message {
            position: fixed;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 700;
            opacity: 0;
            pointer-events: none;
            transition: opacity 1s ease;
          }
          .completion-message.show {
            opacity: 1;
          }
          .completion-message p {
            font-family: var(--font-funnel-display), serif;
            font-size: clamp(24px, 5vw, 40px);
            color: #fff;
            text-align: center;
            max-width: 600px;
            padding: 0 20px;
            line-height: 1.4;
          }

          @media (max-width: 768px) {
            .garden-wrapper {
              max-width: 100%;
            }
            .garden-image {
              max-width: 100%;
            }
            .counter-pill {
              top: 90px;
              right: 12px;
              font-size: 12px;
              padding: 6px 12px;
            }
          }
        `}</style>
      </div>
    </>
  );
}
