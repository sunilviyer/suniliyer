'use client';

import { useState } from 'react';
import AffordabilityCalculator from './components/AffordabilityCalculator';
import CompleteAnalysisCalculator from './components/CompleteAnalysisCalculator';

export default function MortgageCalculatorPage() {
  const [activeTab, setActiveTab] = useState<'affordability' | 'cost'>('cost');

  return (
    <div className="mortgage-calc-page">
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
              className={`tab-button ${activeTab === 'cost' ? 'active' : ''}`}
              onClick={() => setActiveTab('cost')}
              aria-label="Cost Calculator"
            >
              <span className="tab-text">Cost Calculator</span>
            </button>
            <button
              className={`tab-button ${activeTab === 'affordability' ? 'active' : ''}`}
              onClick={() => setActiveTab('affordability')}
              aria-label="Affordability Calculator"
            >
              <span className="tab-text">Affordability Calculator</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Calculator Content */}
      <main className="calc-content">
        <div className="container">
          {activeTab === 'cost' ? (
            <CompleteAnalysisCalculator />
          ) : (
            <AffordabilityCalculator />
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

        /* Header */
        .calc-header {
          padding: 160px 0 60px;
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
          justify-content: center;
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
            padding: 140px 0 40px;
          }

          .container {
            padding: 0 20px;
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
          .tab-text {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}
