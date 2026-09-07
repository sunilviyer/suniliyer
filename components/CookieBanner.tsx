'use client';

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setVisible(true);
    } else if (consent === 'accepted') {
      enableAnalytics();
    }
  }, []);

  const enableAnalytics = () => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args: unknown[]) {
      window.dataLayer.push(args);
    };
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
    });
  };

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    enableAnalytics();
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="cookie-banner"
    >
      <span className="cb-icon" aria-hidden="true">🍪</span>

      <p className="cb-text">
        Cookies for analytics.{' '}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </p>

      <div className="cb-actions">
        <button className="cb-btn cb-decline" onClick={handleDecline}>Decline</button>
        <button className="cb-btn cb-accept" onClick={handleAccept}>Accept</button>
      </div>

      <style>{`
        .cookie-banner {
          position: fixed;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 99999;
          width: max-content;
          max-width: calc(100vw - 24px);
          background: rgba(10, 10, 20, 0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 9px 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
          font-family: var(--font-funnel-sans), system-ui, sans-serif;
          animation: cookieSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .cb-icon { font-size: 15px; flex-shrink: 0; line-height: 1; }
        .cb-text {
          margin: 0;
          font-size: 12.5px;
          line-height: 1.35;
          color: rgba(255, 255, 255, 0.72);
          white-space: nowrap;
        }
        .cb-text a {
          color: rgba(255, 186, 8, 0.85);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .cb-actions { display: flex; gap: 6px; flex-shrink: 0; }
        .cb-btn {
          border-radius: 7px;
          padding: 5px 11px;
          font-size: 12px;
          font-family: inherit;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
        }
        .cb-decline {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.55);
        }
        .cb-decline:hover { border-color: rgba(255, 255, 255, 0.4); }
        .cb-accept {
          background: rgba(255, 186, 8, 0.9);
          border: 1px solid transparent;
          color: #0a0a14;
          font-weight: 600;
        }
        .cb-accept:hover { background: #FFBA08; }

        /* Narrow phones: drop the icon and let the line wrap rather than
           letting the bar grow tall enough to cover page content. */
        @media (max-width: 430px) {
          .cookie-banner { gap: 8px; padding: 8px 10px; }
          .cb-icon { display: none; }
          .cb-text { white-space: normal; font-size: 11.5px; }
          .cb-btn { padding: 5px 9px; font-size: 11.5px; }
        }

        @keyframes cookieSlideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </div>
  );
}
