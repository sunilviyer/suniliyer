'use client';

import { Accordion } from './Accordion';

interface KeyTakeawaysProps {
  takeaways: string[];
  theme?: 'light' | 'dark';
}

export function KeyTakeaways({ takeaways, theme = 'light' }: KeyTakeawaysProps) {
  if (!takeaways || takeaways.length === 0) return null;

  return (
    <>
      <div className="key-takeaways-section">
        <Accordion title="Key Takeaways" defaultOpen={false} theme={theme}>
          <ul className="takeaways-list">
            {takeaways.map((takeaway, index) => (
              <li key={index} className="takeaway-item">
                <span className="check-mark">✓</span>
                {takeaway}
              </li>
            ))}
          </ul>
        </Accordion>
      </div>

      <style jsx>{`
        .key-takeaways-section {
          margin-top: 80px;
          margin-bottom: 40px;
        }

        .takeaways-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .takeaway-item {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 17px;
          line-height: 1.7;
          color: ${theme === 'light' ? '#1a1a1a' : '#e0e0e0'};
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding-bottom: 16px;
          margin-bottom: 16px;
          border-bottom: 1px solid ${theme === 'light' ? 'rgba(26, 26, 26, 0.06)' : 'rgba(255, 255, 255, 0.1)'};
        }

        .takeaway-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
          margin-bottom: 0;
        }

        .check-mark {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          background: #936639;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          margin-top: 3px;
        }

        @media (max-width: 768px) {
          .takeaway-item {
            font-size: 16px;
          }

          .check-mark {
            width: 18px;
            height: 18px;
            font-size: 11px;
          }
        }
      `}</style>
    </>
  );
}
