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
            // Simple sun icon for dark mode (Phosphor style)
            <svg
              width="24"
              height="24"
              viewBox="0 0 256 256"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ position: 'relative', zIndex: 20 }}
            >
              <path
                d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"
                fill="var(--text-primary)"
              />
            </svg>
          ) : (
            // Simple moon icon for light mode (Phosphor style)
            <svg
              width="24"
              height="24"
              viewBox="0 0 256 256"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ position: 'relative', zIndex: 20 }}
            >
              <path
                d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,0,31.4,26A106,106,0,0,0,162.94,159a89,89,0,0,0,26-31.4A88.05,88.05,0,0,1,188.9,190.34Z"
                fill="var(--text-primary)"
              />
            </svg>
          )}
        </button>
      </header>

      {/* Hamburger Menu - Fixed floating on right */}
      <div
        className="fixed top-3 right-6 w-14 h-14 rounded-full flex flex-col items-center justify-center gap-1.5 cursor-pointer z-[9500] transition-all hover:scale-110 shadow-lg"
        style={{
          background: theme === 'dark' ? 'rgba(26, 26, 26, 0.95)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <span className="w-7 h-0.5 bg-[#333d29] rounded"></span>
        <span className="w-7 h-0.5 bg-[#333d29] rounded"></span>
        <span className="w-7 h-0.5 bg-[#333d29] rounded"></span>
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
