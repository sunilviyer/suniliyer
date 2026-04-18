'use client';

import { useState } from 'react';

interface ChecklistItem {
  id: string;
  text: string;
  checked?: boolean;
}

interface ArticleChecklistProps {
  title?: string;
  items: ChecklistItem[];
  interactive?: boolean;
}

export function ArticleChecklist({ title, items, interactive = false }: ArticleChecklistProps) {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(
    new Set(items.filter(item => item.checked).map(item => item.id))
  );

  const toggleItem = (id: string) => {
    if (!interactive) return;

    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  return (
    <>
      <div className="article-checklist">
        {title && <h4 className="checklist-title">{title}</h4>}
        <ul className="checklist-items">
          {items.map((item) => (
            <li
              key={item.id}
              className={`checklist-item ${checkedItems.has(item.id) ? 'checked' : ''} ${interactive ? 'interactive' : ''}`}
              onClick={() => toggleItem(item.id)}
            >
              <div className="checkbox">
                {checkedItems.has(item.id) && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="check-icon">
                    <path d="M11.5 3.5L5.5 9.5L2.5 6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <span className="item-text">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .article-checklist {
          margin: 40px 0;
          background: white;
          border: 1px solid rgba(26, 26, 26, 0.1);
          border-radius: 8px;
          padding: 32px;
        }

        .checklist-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 24px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 24px 0;
        }

        .checklist-items {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .checklist-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(26, 26, 26, 0.05);
          transition: all 0.2s ease;
        }

        .checklist-item:last-child {
          border-bottom: none;
        }

        .checklist-item.interactive {
          cursor: pointer;
        }

        .checklist-item.interactive:hover {
          background: rgba(26, 26, 26, 0.02);
          margin: 0 -16px;
          padding: 16px;
        }

        .checkbox {
          width: 24px;
          height: 24px;
          border: 2px solid rgba(26, 26, 26, 0.2);
          border-radius: 6px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          margin-top: 2px;
        }

        .checklist-item.checked .checkbox {
          background: #936639;
          border-color: #936639;
        }

        .check-icon {
          animation: checkPop 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        @keyframes checkPop {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }

        .item-text {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 18px;
          line-height: 1.6;
          color: #1a1a1a;
        }

        .checklist-item.checked .item-text {
          color: #6b6b6b;
          text-decoration: line-through;
        }
      `}</style>
    </>
  );
}
