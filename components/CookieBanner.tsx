'use client';

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
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
      style={{
        position: 'fixed',
        bottom: 24,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 99999,
        width: 'min(560px, calc(100vw - 32px))',
        background: 'rgba(10, 10, 20, 0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 16,
        padding: '18px 22px',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
        animation: 'cookieSlideUp 0.4s cubic-bezier(0.16,1,0.3,1) both',
      }}
    >
      {/* Cookie icon */}
      <span style={{ fontSize: 22, flexShrink: 0 }}>🍪</span>

      {/* Text */}
      <p style={{
        flex: 1,
        margin: 0,
        fontSize: 13,
        lineHeight: 1.6,
        color: 'rgba(255,255,255,0.75)',
        fontFamily: 'var(--font-funnel-sans), system-ui, sans-serif',
      }}>
        This site uses cookies for analytics to understand how visitors use it.{' '}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'rgba(255,186,8,0.85)', textDecoration: 'underline', textUnderlineOffset: 3 }}
        >
          Learn more
        </a>
      </p>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
        <button
          onClick={handleDecline}
          style={{
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'rgba(255,255,255,0.55)',
            borderRadius: 8,
            padding: '7px 14px',
            fontSize: 12,
            fontFamily: 'var(--font-funnel-sans), system-ui, sans-serif',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap',
          }}
          onMouseOver={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)')}
          onMouseOut={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')}
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          style={{
            background: 'rgba(255,186,8,0.9)',
            border: '1px solid transparent',
            color: '#0a0a14',
            borderRadius: 8,
            padding: '7px 16px',
            fontSize: 12,
            fontWeight: 600,
            fontFamily: 'var(--font-funnel-sans), system-ui, sans-serif',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap',
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = '#FFBA08')}
          onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(255,186,8,0.9)')}
        >
          Accept
        </button>
      </div>

      <style>{`
        @keyframes cookieSlideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </div>
  );
}
