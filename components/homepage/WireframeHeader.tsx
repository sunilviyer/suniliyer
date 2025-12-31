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
        className="w-full h-20 flex items-center justify-between px-15"
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

          {/* Name */}
          <div className="flex flex-col leading-tight">
            <span
              className="text-xl font-semibold"
              style={{
                fontFamily: 'var(--font-funnel)',
                color: 'var(--text-primary)',
              }}
            >
              Sunil
            </span>
            <span
              className="text-xl font-semibold"
              style={{
                fontFamily: 'var(--font-funnel)',
                color: 'var(--text-primary)',
              }}
            >
              Iyer
            </span>
          </div>
        </div>

        {/* Theme Toggle - stays in header */}
        <button
          onClick={toggleTheme}
          className="w-12 h-12 rounded-full flex items-center justify-center text-2xl cursor-pointer transition-transform hover:scale-110"
          style={{
            background: theme === 'dark' ? 'rgba(26, 26, 26, 0.95)' : 'rgba(255, 255, 255, 0.95)',
            border: '1px solid var(--border-color)',
          }}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          <span>{theme === 'dark' ? '🌙' : '☀️'}</span>
        </button>
      </header>

      {/* Hamburger Menu - Fixed floating on right */}
      <div
        className="fixed top-6 right-6 w-14 h-14 rounded-full flex flex-col items-center justify-center gap-1.5 cursor-pointer z-[9500] transition-all hover:scale-110 shadow-lg"
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
