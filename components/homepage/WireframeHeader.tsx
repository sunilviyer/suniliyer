'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function WireframeHeader() {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme') || 'light';
    setTheme(saved);
    document.body.setAttribute('data-theme', saved);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Header Bar - Floating (not sticky) */}
      <header
        className="w-full h-20"
        style={{
          background: theme === 'dark' ? 'rgba(26, 26, 26, 0.95)' : 'rgba(255, 255, 255, 0.95)',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '60px',
          paddingRight: '60px',
        }}
      >
        {/* Logo Ring */}
        <div
          className="rounded-full overflow-hidden flex-shrink-0"
          style={{
            width: '48px',
            height: '48px',
            border: '2px solid #333d29',
            position: 'relative',
            marginRight: '20px',
          }}
        >
          <Image
            src="/images/logo.jpg"
            alt="Sunil Iyer Logo"
            fill
            className="object-contain object-center"
          />
        </div>

        {/* Theme Toggle - next to logo */}
        <button
          onClick={toggleTheme}
          className="cursor-pointer"
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            WebkitTapHighlightColor: 'transparent',
            padding: 0,
            margin: 0,
            boxShadow: 'none',
            textDecoration: 'none',
            transition: 'transform 0.2s ease',
            position: 'relative',
            zIndex: 10,
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? (
            // Filled sun icon for dark mode - switch to light mode
            <svg
              width="28"
              height="28"
              viewBox="0 0 256 256"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ position: 'relative', zIndex: 20 }}
            >
              <path
                d="M128,60a68,68,0,1,0,68,68A68.07,68.07,0,0,0,128,60Zm0,120a52,52,0,1,1,52-52A52.06,52.06,0,0,1,128,180ZM128,48a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V40A8,8,0,0,0,128,48Zm0,160a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208ZM208,128a8,8,0,0,0,8,8h24a8,8,0,0,0,0-16H216A8,8,0,0,0,208,128ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128ZM198.14,71.15l16.97-16.97a8,8,0,0,0-11.31-11.31L186.82,59.84a8,8,0,0,0,11.32,11.31ZM69.18,186.82,52.21,203.79a8,8,0,0,0,11.31,11.31L80.49,198.13a8,8,0,0,0-11.31-11.31ZM186.82,196.16l16.97,16.97a8,8,0,0,0,11.31-11.31L198.14,184.85a8,8,0,0,0-11.32,11.31ZM69.18,69.18,52.21,52.21A8,8,0,0,0,40.9,63.52L57.87,80.49a8,8,0,0,0,11.31-11.31Z"
                fill="var(--text-primary)"
              />
            </svg>
          ) : (
            // Filled moon icon for light mode - switch to dark mode
            <svg
              width="28"
              height="28"
              viewBox="0 0 256 256"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ position: 'relative', zIndex: 20 }}
            >
              <path
                d="M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z"
                fill="var(--text-primary)"
              />
            </svg>
          )}
        </button>
      </header>

      {/* Hamburger Menu - Fixed floating on right */}
      <div
        className="fixed top-4 right-6 rounded-full flex flex-col items-center justify-center gap-1.5 cursor-pointer z-[9500] transition-all hover:scale-110 shadow-lg"
        style={{
          width: '48px',
          height: '48px',
          background: theme === 'dark' ? 'rgba(26, 26, 26, 0.95)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <span className="w-6 h-0.5 bg-[#333d29] rounded"></span>
        <span className="w-6 h-0.5 bg-[#333d29] rounded"></span>
        <span className="w-6 h-0.5 bg-[#333d29] rounded"></span>
      </div>

      <style jsx global>{`
        header *::before,
        header *::after,
        header *::marker,
        button::before,
        button::after,
        button::marker,
        svg::before,
        svg::after,
        path::before,
        path::after {
          display: none !important;
          content: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
        }

        header *,
        header button {
          list-style: none !important;
          list-style-type: none !important;
          -webkit-appearance: none !important;
          appearance: none !important;
        }
      `}</style>
    </>
  );
}
