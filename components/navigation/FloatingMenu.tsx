'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ThemeToggle from '@/components/theme/ThemeToggle';

interface NavItem {
  label: string;
  href: string;
  type: 'scroll' | 'link' | 'current';
}

export function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Determine current page context
  const isHomepage = pathname === '/';

  // Navigation items based on current page
  const navigationItems: NavItem[] = isHomepage
    ? [
        { label: 'About', href: '#hero', type: 'scroll' },
        { label: 'Resume', href: '#resume', type: 'scroll' },
        { label: 'Portfolio', href: '#portfolio', type: 'scroll' },
        { label: 'Articles', href: '/articles', type: 'link' },
      ]
    : [
        { label: 'Home', href: '/', type: 'link' },
        { label: 'Portfolio', href: '/#portfolio', type: 'link' },
        { label: 'Articles', href: pathname, type: 'current' },
      ];

  // Smooth scroll handler for same-page navigation
  const handleScroll = (href: string) => {
    const elementId = href.replace('#', '');
    const element = document.getElementById(elementId);

    if (element) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      element.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
      setIsOpen(false); // Close menu after navigation
    }
  };

  // Handle hash scrolling after page navigation (for cross-page navigation like /articles -> /#portfolio)
  useEffect(() => {
    if (isHomepage && window.location.hash) {
      const hash = window.location.hash;
      // Small delay to ensure page has loaded and sections are rendered
      const timeoutId = setTimeout(() => {
        const elementId = hash.replace('#', '');
        const element = document.getElementById(elementId);
        if (element) {
          const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          element.scrollIntoView({
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
          });
        }
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [isHomepage]);

  // Click-outside-to-close handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Escape key to close
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <div ref={menuRef} className="floating-menu">
      {/* Collapsed button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          aria-expanded={false}
          className="menu-button"
        >
          ☰
        </button>
      )}

      {/* Expanded menu */}
      {isOpen && (
        <nav className="menu-bar" aria-label="Main navigation">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="close-button"
          >
            ×
          </button>

          {/* Navigation items */}
          <div className="nav-items">
            {navigationItems.map((item) => {
              if (item.type === 'scroll') {
                return (
                  <button
                    key={item.label}
                    onClick={() => handleScroll(item.href)}
                    className="nav-item"
                    aria-label={`Navigate to ${item.label} section`}
                  >
                    {item.label}
                  </button>
                );
              } else if (item.type === 'link') {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="nav-item"
                    onClick={() => setIsOpen(false)}
                    aria-label={`Navigate to ${item.label} page`}
                  >
                    {item.label}
                  </Link>
                );
              } else {
                // Current page
                return (
                  <span
                    key={item.label}
                    className="nav-item current"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                );
              }
            })}
          </div>

          <ThemeToggle />
        </nav>
      )}
    </div>
  );
}
