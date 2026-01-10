'use client';

import { useState } from 'react';

interface ScenarioCardProps {
  scenario: {
    id: string;
    title: string;
    setup: string;
    challenge?: string;
    options: string[];
    teachingPoint: string;
    discussionQuestions?: string[];
  };
  index: number;
  path: string;
}

export function ScenarioCard({ scenario, index, path }: ScenarioCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  return (
    <>
      <div
        className="scenario-card"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="card-header">
          <span className="scenario-badge">💭 SCENARIO</span>
        </div>

        <h4 className="scenario-title">{scenario.title}</h4>

        <div className="scenario-setup">
          <div className="setup-label">📋 Setup</div>
          <p>{scenario.setup}</p>
        </div>

        {scenario.challenge && (
          <div className="scenario-challenge">
            <strong>❓ Challenge:</strong> {scenario.challenge}
          </div>
        )}

        <div className="scenario-options">
          <div className="options-label">What do you do?</div>
          {scenario.options.map((option, idx) => (
            <label key={idx} className="option-item">
              <input
                type="radio"
                name={`scenario-${scenario.id}`}
                checked={selectedOption === idx}
                onChange={() => setSelectedOption(idx)}
              />
              <span className="option-text">{option}</span>
            </label>
          ))}
        </div>

        <div className="teaching-point">
          <div className="teaching-icon">🎯</div>
          <div>
            <strong>Teaching Point</strong>
            <p>{scenario.teachingPoint}</p>
          </div>
        </div>

        {scenario.discussionQuestions && scenario.discussionQuestions.length > 0 && (
          <div className="discussion-section">
            <button
              className="discussion-toggle"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              💬 Discussion Questions
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className={`chevron ${isExpanded ? 'rotated' : ''}`}
              >
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={`discussion-content ${isExpanded ? 'expanded' : ''}`}>
              <ul>
                {scenario.discussionQuestions.map((question, idx) => (
                  <li key={idx}>{question}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .scenario-card {
          background: white;
          border: 1px solid rgba(26, 26, 26, 0.1);
          border-left: 4px solid #805AD5;
          border-radius: 8px;
          padding: 24px;
          animation: slideInUp 0.5s ease-out both;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .card-header {
          margin-bottom: 16px;
        }

        .scenario-badge {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #6B46C1;
          background: rgba(128, 90, 213, 0.1);
          padding: 4px 10px;
          border-radius: 4px;
        }

        .scenario-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 22px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 20px 0;
          line-height: 1.3;
        }

        .scenario-setup {
          background: rgba(128, 90, 213, 0.05);
          border-left: 3px solid #805AD5;
          padding: 16px;
          border-radius: 6px;
          margin-bottom: 16px;
        }

        .setup-label {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #805AD5;
          margin-bottom: 8px;
        }

        .scenario-setup p {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 15px;
          line-height: 1.6;
          color: #4a4a4a;
          margin: 0;
        }

        .scenario-challenge {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 15px;
          line-height: 1.6;
          color: #4a4a4a;
          margin-bottom: 20px;
        }

        .scenario-challenge strong {
          color: #1a1a1a;
          font-weight: 600;
        }

        .scenario-options {
          margin-bottom: 24px;
        }

        .options-label {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 12px;
        }

        .option-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 12px;
          cursor: pointer;
          padding: 12px;
          border-radius: 6px;
          transition: background 0.2s ease;
        }

        .option-item:hover {
          background: rgba(26, 26, 26, 0.02);
        }

        .option-item input[type="radio"] {
          margin-top: 4px;
          accent-color: #805AD5;
        }

        .option-text {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 15px;
          line-height: 1.6;
          color: #4a4a4a;
        }

        .teaching-point {
          display: flex;
          gap: 12px;
          background: rgba(56, 161, 105, 0.05);
          border-left: 3px solid #38A169;
          padding: 16px;
          border-radius: 6px;
          margin-bottom: 16px;
        }

        .teaching-icon {
          font-size: 20px;
          flex-shrink: 0;
        }

        .teaching-point strong {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #38A169;
          display: block;
          margin-bottom: 6px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .teaching-point p {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 15px;
          line-height: 1.6;
          color: #4a4a4a;
          margin: 0;
        }

        .discussion-section {
          border-top: 1px solid rgba(26, 26, 26, 0.1);
          padding-top: 16px;
        }

        .discussion-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: none;
          border: none;
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #805AD5;
          padding: 8px 0;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .discussion-toggle:hover {
          color: #6B46C1;
        }

        .chevron {
          transition: transform 0.3s ease;
        }

        .chevron.rotated {
          transform: rotate(180deg);
        }

        .discussion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .discussion-content.expanded {
          max-height: 500px;
        }

        .discussion-content ul {
          margin: 16px 0 0 0;
          padding-left: 20px;
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 15px;
          line-height: 1.7;
          color: #4a4a4a;
        }

        .discussion-content li {
          margin-bottom: 12px;
        }

        @media (max-width: 768px) {
          .scenario-card {
            padding: 20px;
          }

          .scenario-title {
            font-size: 20px;
          }
        }
      `}</style>
    </>
  );
}
