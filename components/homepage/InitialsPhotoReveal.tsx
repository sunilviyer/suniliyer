'use client';

import { useState } from 'react';

interface InitialsPhotoRevealProps {
  photoSrc: string;
  initials: string;
}

export function InitialsPhotoReveal({ photoSrc, initials }: InitialsPhotoRevealProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="initials-reveal-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        className="initials-reveal-svg"
        viewBox="0 0 500 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Definitions */}
        <defs>
          {/* Grain texture for sophistication */}
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0"/>
            <feComponentTransfer>
              <feFuncA type="discrete" tableValues="0 0 0 1"/>
            </feComponentTransfer>
            <feBlend mode="overlay" in="SourceGraphic"/>
          </filter>

          {/* Soft shadow */}
          <filter id="softShadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Mask for photo reveal through text */}
          <mask id="textMask">
            <rect width="500" height="600" fill="black"/>
            <text
              id="initialsText"
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className={`initials-text ${isHovered ? 'revealed' : ''}`}
              fill="white"
            >
              {initials}
            </text>
          </mask>

          {/* Pattern for background */}
          <pattern id="photoPattern" x="0" y="0" width="100%" height="100%">
            <image
              href={photoSrc}
              x="0"
              y="0"
              width="500"
              height="600"
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>
        </defs>

        {/* Background fill when not hovered */}
        <rect
          width="500"
          height="600"
          className="background-rect"
          fill="var(--card-bg)"
          rx="12"
        />

        {/* Full photo - revealed on hover */}
        <rect
          width="500"
          height="600"
          fill="url(#photoPattern)"
          className={`full-photo ${isHovered ? 'visible' : ''}`}
          filter="url(#grain)"
          rx="12"
        />

        {/* Photo revealed through text mask - fades out on hover */}
        <rect
          width="500"
          height="600"
          fill="url(#photoPattern)"
          mask="url(#textMask)"
          className={`photo-reveal ${isHovered ? 'fading' : ''}`}
          filter="url(#grain)"
        />

        {/* Border frame */}
        <rect
          width="500"
          height="600"
          fill="none"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="3"
          rx="12"
          className="border-frame"
        />

        {/* Hint text - "Hover to reveal" */}
        <text
          x="50%"
          y="92%"
          textAnchor="middle"
          className={`hint-text ${isHovered ? 'hidden' : ''}`}
          fill="var(--text-secondary)"
        >
          Hover to reveal
        </text>
      </svg>

      <style jsx>{`
        .initials-reveal-container {
          width: 100%;
          height: 100%;
          cursor: pointer;
          position: relative;
          user-select: none;
        }

        .initials-reveal-svg {
          width: 100%;
          height: 100%;
          display: block;
          filter: drop-shadow(0 10px 40px rgba(0, 0, 0, 0.1));
          transition: filter 0.4s ease;
        }

        .initials-reveal-container:hover .initials-reveal-svg {
          filter: drop-shadow(0 20px 60px rgba(0, 0, 0, 0.2));
        }

        .background-rect {
          transition: fill 0.4s ease;
        }

        .full-photo {
          opacity: 0;
          transition: opacity 0.6s ease 0.3s;
        }

        .full-photo.visible {
          opacity: 1;
        }

        .initials-text {
          font-family: var(--font-funnel), Arial, sans-serif;
          font-size: 120px;
          font-weight: 900;
          letter-spacing: -0.02em;
          transition: font-size 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                      letter-spacing 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.4s ease 0.4s;
        }

        .initials-text.revealed {
          font-size: 380px;
          letter-spacing: 0.05em;
          opacity: 0;
        }

        .photo-reveal {
          transition: opacity 0.5s ease 0.3s;
        }

        .photo-reveal.fading {
          opacity: 0;
        }

        .border-frame {
          transition: stroke 0.3s ease, stroke-width 0.3s ease;
        }

        .initials-reveal-container:hover .border-frame {
          stroke: rgba(255, 255, 255, 0.6);
          stroke-width: 2;
        }

        .hint-text {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }

        .hint-text.hidden {
          opacity: 0;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .initials-text {
            font-size: 100px;
          }

          .initials-text.revealed {
            font-size: 320px;
          }

          .hint-text {
            font-size: 10px;
          }
        }

        @media (max-width: 480px) {
          .initials-text {
            font-size: 80px;
          }

          .initials-text.revealed {
            font-size: 260px;
          }
        }

        /* Additional polish */
        @keyframes subtlePulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .hint-text {
          animation: subtlePulse 2s infinite;
        }

        .initials-reveal-container:hover .hint-text {
          animation: none;
        }
      `}</style>
    </div>
  );
}
