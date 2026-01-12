'use client';

import { useState, ReactNode } from 'react';
import { useTheme } from './ThemeContext';

interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  onToggle?: () => void;
  theme?: 'light' | 'dark'; // Optional for backward compatibility
}

export function Accordion({ title, children, defaultOpen = false, onToggle, theme: themeProp }: AccordionProps) {
  const contextTheme = useTheme();
  const theme = themeProp || contextTheme;
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // Use controlled state if onToggle is provided
  const isControlled = onToggle !== undefined;
  const currentState = isControlled ? defaultOpen : isOpen;

  const handleToggle = () => {
    if (isControlled) {
      onToggle?.();
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <div className="accordion">
        <button
          className="accordion-header"
          onClick={handleToggle}
          aria-expanded={currentState}
        >
          <span className="accordion-title">{title}</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className={`accordion-icon ${currentState ? 'rotated' : ''}`}
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className={`accordion-content ${currentState ? 'expanded' : ''}`}>
          <div className="accordion-inner">
            {children}
          </div>
        </div>
      </div>

      <style jsx>{`
        .accordion {
          border: 1px solid ${theme === 'light' ? 'rgba(26, 26, 26, 0.1)' : 'rgba(255, 255, 255, 0.15)'};
          border-radius: 8px;
          overflow: hidden;
          background: ${theme === 'light' ? 'white' : '#2a2a2a'};
        }

        .accordion-header {
          width: 100%;
          padding: 20px 24px;
          background: transparent;
          border: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .accordion-header:hover {
          background: ${theme === 'light' ? 'rgba(26, 26, 26, 0.02)' : 'rgba(255, 255, 255, 0.05)'};
        }

        .accordion-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 18px;
          font-weight: 600;
          color: ${theme === 'light' ? '#1a1a1a' : '#e0e0e0'};
          text-align: left;
        }

        .accordion-icon {
          color: ${theme === 'light' ? '#6b6b6b' : '#a0a0a0'};
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          flex-shrink: 0;
        }

        .accordion-icon.rotated {
          transform: rotate(180deg);
        }

        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .accordion-content.expanded {
          max-height: 1000px;
        }

        .accordion-inner {
          padding: 0 24px 24px 24px;
        }
      `}</style>
    </>
  );
}
