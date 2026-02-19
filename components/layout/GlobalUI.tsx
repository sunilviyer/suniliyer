'use client';

import { useState, useEffect } from 'react';
import { SideRail } from './SideRail';
import { ContactWidget } from '@/components/contact/ContactWidget';

/**
 * GlobalUI — mounts the SideRail, ContactWidget, and the top-right chat button on every page.
 * The chat button sits beside the per-page theme toggles, responsive at the same breakpoints:
 *   Desktop (>768): top:30, right:96, 56×56  (theme toggle at right:30+56=86 → gap of 10)
 *   Tablet (≤768):  top:20, right:76, 48×48  (theme toggle at right:20+48=68 → gap of 8)
 *   Mobile (≤480):  top:16, right:68, 44×44  (theme toggle at right:16+44=60 → gap of 8)
 */
export function GlobalUI() {
  const [isOpen, setIsOpen] = useState(false);

  // Keep button state in sync when widget is opened by other means (e.g. SUNIL panel)
  useEffect(() => {
    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);
    window.addEventListener('open-contact-widget', onOpen);
    window.addEventListener('close-contact-widget', onClose);
    return () => {
      window.removeEventListener('open-contact-widget', onOpen);
      window.removeEventListener('close-contact-widget', onClose);
    };
  }, []);

  const toggle = () => {
    if (isOpen) {
      window.dispatchEvent(new CustomEvent('close-contact-widget'));
    } else {
      window.dispatchEvent(new CustomEvent('open-contact-widget'));
    }
  };

  return (
    <>
      <SideRail />
      <ContactWidget hideButton />

      {/* Chat / Contact button — fixed top-right, beside theme toggle */}
      <button
        onClick={toggle}
        aria-label={isOpen ? 'Close contact form' : 'Contact me'}
        className={`global-contact-btn ${isOpen ? 'is-open' : ''}`}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.transform = isOpen ? 'rotate(45deg) scale(1.1)' : 'scale(1.1) rotate(10deg)';
          el.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.transform = isOpen ? 'rotate(45deg)' : 'rotate(0deg)';
          el.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          {isOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          )}
        </svg>
      </button>

      <style jsx global>{`
        .global-contact-btn {
          position: fixed;
          top: 30px;
          right: 96px;
          z-index: 1001;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--card-bg);
          border: 2px solid var(--border-color);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          color: var(--text-primary);
          transition: transform 0.3s ease, box-shadow 0.3s ease, top 0.3s ease, right 0.3s ease, width 0.3s ease, height 0.3s ease;
          transform: rotate(0deg);
        }

        .global-contact-btn.is-open {
          transform: rotate(45deg);
        }

        @media (max-width: 768px) {
          .global-contact-btn {
            top: 20px;
            right: 76px;
            width: 48px;
            height: 48px;
          }
        }

        @media (max-width: 480px) {
          .global-contact-btn {
            top: 16px;
            right: 68px;
            width: 44px;
            height: 44px;
          }
        }
      `}</style>
    </>
  );
}
