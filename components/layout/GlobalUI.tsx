'use client';

import { useState, useEffect } from 'react';
import { SideRail } from './SideRail';
import { ContactWidget } from '@/components/contact/ContactWidget';

/**
 * GlobalUI — mounts the SideRail, ContactWidget, and the top-right chat button on every page.
 * The chat button sits at top: 30px, right: 96px — beside the per-page theme toggles.
 * It toggles the widget open/closed and its icon reflects the current state.
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
        style={{
          position: 'fixed',
          top: 30,
          right: 96,
          zIndex: 1001,
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'var(--card-bg)',
          border: '2px solid var(--border-color)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          color: 'var(--text-primary)',
          transition: 'all 0.3s ease',
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = isOpen ? 'rotate(45deg) scale(1.1)' : 'scale(1.1) rotate(10deg)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = isOpen ? 'rotate(45deg)' : 'rotate(0deg)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
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
    </>
  );
}
