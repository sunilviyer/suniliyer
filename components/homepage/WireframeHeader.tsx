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
        className="w-full h-20 flex items-center px-15"
        style={{
          background: theme === 'dark' ? 'rgba(26, 26, 26, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        }}
      >
        <div className="flex items-center gap-5">
          {/* Logo Ring */}
          <div className="w-12 h-12 rounded-full border-2 border-[#333d29] overflow-hidden flex-shrink-0 relative">
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
          className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110 relative z-10 border-2"
          style={{
            background: 'transparent',
            borderColor: 'var(--border-color)',
            outline: 'none',
            WebkitTapHighlightColor: 'transparent',
          }}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? (
            // Sun icon for dark mode (Phosphor style)
            <svg
              width="24"
              height="24"
              viewBox="0 0 256 256"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ position: 'relative', zIndex: 20 }}
            >
              <path
                d="M128,56a72,72,0,1,0,72,72A72.08,72.08,0,0,0,128,56Zm0,128a56,56,0,1,1,56-56A56.06,56.06,0,0,1,128,184ZM128,32a8,8,0,0,1-8-8V8a8,8,0,0,1,16,0V24A8,8,0,0,1,128,32Zm0,192a8,8,0,0,1-8-8V200a8,8,0,0,1,16,0v16A8,8,0,0,1,128,224ZM61.66,68.24a8,8,0,0,1-11.32-11.32L61.66,45.6a8,8,0,0,1,11.32,11.32Zm144,119.52a8,8,0,0,1-11.32,11.32L183,187.76a8,8,0,0,1,11.32-11.32ZM224,128a8,8,0,0,1,8,8h16a8,8,0,0,1,0-16H232A8,8,0,0,1,224,128Zm-200,0a8,8,0,0,1-8,8H8a8,8,0,0,1,0-16H24A8,8,0,0,1,24,128Zm171.08,59.76a8,8,0,0,1,0,11.32l-11.32,11.32a8,8,0,0,1-11.32-11.32l11.32-11.32A8,8,0,0,1,195.08,187.76ZM61.66,68.24,50.34,56.92A8,8,0,0,1,61.66,45.6L72.98,56.92a8,8,0,0,1-11.32,11.32Z"
                fill="var(--text-primary)"
              />
            </svg>
          ) : (
            // Moon with stars icon for light mode (Phosphor style)
            <svg
              width="24"
              height="24"
              viewBox="0 0 256 256"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ position: 'relative', zIndex: 20 }}
            >
              <path
                d="M224,144a16,16,0,0,1-16,16H192v16a16,16,0,0,1-32,0V160H144a16,16,0,0,1,0-32h16V112a16,16,0,0,1,32,0v16h16A16,16,0,0,1,224,144Zm-80,56a16,16,0,0,0,16-16V168a16,16,0,0,0-32,0v16A16,16,0,0,0,144,200ZM96,56A16,16,0,0,0,80,72V88a16,16,0,0,0,32,0V72A16,16,0,0,0,96,56Zm69.58,86.54a8,8,0,0,0-11.16,1.38A79.75,79.75,0,0,1,128,167.85,80,80,0,1,1,88.15,128a79.75,79.75,0,0,1,23.93-26.42,8,8,0,1,0-9.78-12.54A96,96,0,1,0,166.92,154,8,8,0,0,0,165.58,142.54Z"
                fill="var(--text-primary)"
              />
            </svg>
          )}
          </button>
        </div>
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
    </>
  );
}
