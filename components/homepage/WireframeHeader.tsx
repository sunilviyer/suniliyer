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
      {/* Header Bar */}
      <header
        className="fixed top-0 left-0 w-full h-20 z-[9000] flex items-center px-15 shadow-sm"
        style={{
          background: theme === 'dark' ? 'rgba(26, 26, 26, 0.95)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
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
      </header>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-32 w-12 h-12 rounded-full flex items-center justify-center text-2xl cursor-pointer z-[9500] transition-transform hover:scale-110"
        style={{
          background: theme === 'dark' ? 'rgba(26, 26, 26, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        }}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        <span>{theme === 'dark' ? '🌙' : '☀️'}</span>
      </button>

      {/* Hamburger Menu */}
      <div
        className="fixed top-4 right-15 w-12 h-12 rounded-full flex flex-col items-center justify-center gap-1 cursor-pointer z-[9500] transition-transform hover:scale-110"
        style={{
          background: theme === 'dark' ? 'rgba(26, 26, 26, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        }}
      >
        <span className="w-6 h-0.5 bg-[#333d29] rounded"></span>
        <span className="w-6 h-0.5 bg-[#333d29] rounded"></span>
        <span className="w-6 h-0.5 bg-[#333d29] rounded"></span>
      </div>
    </>
  );
}
