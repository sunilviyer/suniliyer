'use client';

import { useState, useEffect } from 'react';
import AffordabilityCalculator from './components/AffordabilityCalculator';
import CompleteAnalysisCalculator from './components/CompleteAnalysisCalculator';

export default function MortgageCalculatorPage() {
  const [activeTab, setActiveTab] = useState<'affordability' | 'complete'>('affordability');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('mortgage-calc-theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'light';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
    setMounted(true);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('mortgage-calc-theme', newTheme);
  };

  if (!mounted) {
    return null; // Prevent flash of unstyled content
  }

  return (
    <div className="mortgage-calc-page">
      {/* Theme Toggle Button */}
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        )}
      </button>

      {/* Header */}
      <header className="calc-header fade-in">
        <div className="container">
          <h1 className="calc-title">Mortgage Calculator</h1>
          <p className="calc-subtitle">
            Make informed decisions about your home purchase with comprehensive analysis and affordability insights
          </p>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="tab-navigation fade-in-delayed">
        <div className="container">
          <div className="tab-buttons">
            <button
              className={`tab-button ${activeTab === 'affordability' ? 'active' : ''}`}
              onClick={() => setActiveTab('affordability')}
              aria-label="Affordability Calculator"
            >
              <span className="tab-icon">🎯</span>
              <span className="tab-text">Affordability Calculator</span>
            </button>
            <button
              className={`tab-button ${activeTab === 'complete' ? 'active' : ''}`}
              onClick={() => setActiveTab('complete')}
              aria-label="Complete Analysis"
            >
              <span className="tab-icon">📊</span>
              <span className="tab-text">Complete Analysis</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Calculator Content */}
      <main className="calc-content">
        <div className="container">
          {activeTab === 'affordability' ? (
            <AffordabilityCalculator />
          ) : (
            <CompleteAnalysisCalculator />
          )}
        </div>
      </main>

      <style jsx>{`
        /* CSS Variables for themes will be defined globally */
        .mortgage-calc-page {
          min-height: 100vh;
          background: var(--bg-primary);
          color: var(--text-primary);
          padding-bottom: 80px;
          font-family: var(--font-funnel-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* Theme Toggle */
        .theme-toggle {
          position: fixed;
          top: 30px;
          right: 30px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--card-bg);
          border: 2px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 1000;
          transition: all 0.3s ease;
          color: var(--text-primary);
          box-shadow: var(--shadow-md);
        }

        .theme-toggle:hover {
          transform: scale(1.1) rotate(15deg);
          box-shadow: var(--shadow-lg);
          border-color: var(--accent-primary);
        }

        .theme-toggle svg {
          transition: transform 0.3s ease;
        }

        .theme-toggle:hover svg {
          transform: scale(1.1);
        }

        /* Header */
        .calc-header {
          padding: 120px 0 60px;
          text-align: center;
        }

        .calc-title {
          font-family: var(--font-funnel-display), Georgia, serif;
          font-size: clamp(48px, 8vw, 80px);
          font-weight: 700;
          margin: 0 0 20px 0;
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }

        .calc-subtitle {
          font-size: clamp(16px, 2vw, 20px);
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto;
        }

        /* Container */
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Tab Navigation */
        .tab-navigation {
          position: sticky;
          top: 0;
          z-index: 100;
          background: var(--bg-primary);
          border-bottom: 2px solid var(--border-color);
          margin-bottom: 60px;
          backdrop-filter: blur(10px);
          box-shadow: var(--shadow-sm);
        }

        .tab-buttons {
          display: flex;
          gap: 8px;
          justify-content: center;
          padding: 20px 0;
        }

        .tab-button {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          background: transparent;
          color: var(--text-secondary);
          border: 2px solid transparent;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .tab-button::after {
          content: '';
          position: absolute;
          bottom: -22px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 80%;
          height: 3px;
          background: var(--accent-primary);
          transition: transform 0.3s ease;
        }

        .tab-button.active {
          color: var(--accent-primary);
          background: var(--card-bg);
          border-color: var(--border-color);
        }

        .tab-button.active::after {
          transform: translateX(-50%) scaleX(1);
        }

        .tab-button:hover:not(.active) {
          color: var(--text-primary);
          background: var(--bg-secondary);
          border-color: var(--border-color);
        }

        .tab-icon {
          font-size: 24px;
        }

        .tab-text {
          font-family: var(--font-funnel-sans);
        }

        /* Content */
        .calc-content {
          animation: fadeInUp 0.6s ease;
        }

        /* Animations */
        .fade-in {
          animation: fadeIn 0.8s ease;
        }

        .fade-in-delayed {
          animation: fadeIn 0.8s ease 0.2s both;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .calc-header {
            padding: 100px 0 40px;
          }

          .container {
            padding: 0 20px;
          }

          .theme-toggle {
            top: 20px;
            right: 20px;
            width: 48px;
            height: 48px;
          }

          .tab-buttons {
            flex-direction: column;
            gap: 12px;
          }

          .tab-button {
            justify-content: center;
            width: 100%;
          }

          .tab-button::after {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .theme-toggle {
            width: 44px;
            height: 44px;
            top: 16px;
            right: 16px;
          }

          .tab-icon {
            font-size: 20px;
          }

          .tab-text {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}
