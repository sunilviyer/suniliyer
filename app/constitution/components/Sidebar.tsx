'use client';

import React from 'react';
import Link from 'next/link';
import { constitutionParts, GROUP_TITLES, type ArticleGroup } from '../data/reading-order';

interface SidebarProps {
  currentPartId?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const GROUP_ORDER: ArticleGroup[] = ['opening', 'principles', 'machinery', 'safeguards', 'aids', 'closing'];

/**
 * Sidebar navigation for the Constitution reader.
 * Lists all chapters in canonical reading order, grouped by the six
 * movements of the book.
 */
export default function Sidebar({ currentPartId, isOpen = true, onClose }: SidebarProps) {
  const partsByGroup = GROUP_ORDER.map((group) => ({
    group,
    title: GROUP_TITLES[group],
    parts: constitutionParts.filter(p => p.group === group),
  }));

  return (
    <aside className={`constitution-sidebar ${isOpen ? 'mobile-open' : ''}`}>
      {partsByGroup.map(({ group, title, parts }) => (
        <div key={group} className="sidebar-nav-category">
          <div className="sidebar-category-title">{title}</div>
          {parts.map(part => (
            <Link
              key={part.id}
              href={`/constitution/${part.id}`}
              className={`sidebar-nav-item ${currentPartId === part.id ? 'active' : ''}`}
              onClick={onClose}
            >
              <span className="sidebar-nav-number">
                {part.roman || 'ॐ'}
              </span>
              <span className="sidebar-nav-title">{part.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </aside>
  );
}
