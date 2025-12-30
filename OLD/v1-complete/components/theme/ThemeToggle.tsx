'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Prevent hydration mismatch by only rendering theme-specific content after mounting
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Legitimate use case for hydration mismatch prevention
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return neutral state until client-side hydration complete
    return (
      <button
        className="theme-toggle"
        aria-label="Loading theme toggle"
        disabled
      >
        <span className="theme-toggle__icon">◐</span>
      </button>
    );
  }

  const currentTheme = theme || 'dark';
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  const ariaLabel = `Currently ${currentTheme} mode. Click to switch to ${nextTheme} mode.`;

  const handleToggle = () => {
    setTheme(nextTheme);
  };

  return (
    <button
      className="theme-toggle"
      onClick={handleToggle}
      aria-label={ariaLabel}
      type="button"
    >
      <span className="theme-toggle__icon">
        {currentTheme === 'dark' ? '◐' : '☀'}
      </span>
    </button>
  );
}
