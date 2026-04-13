'use client';

import React from 'react';
import Link from 'next/link';
import { constitutionParts } from '../data/reading-order';

interface SidebarProps {
  currentPartId?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

/**
 * Sidebar navigation for the Constitution reader
 * Lists all Parts in canonical reading order
 * Grouped by category: Front Matter, Preface, Constitution, Appendix
 */
export default function Sidebar({ currentPartId, isOpen = true, onClose }: SidebarProps) {
  const categories = {
    'front-matter': 'Front Matter',
    'preface': 'Philosophical Preface',
    'constitution': 'The Constitution',
    'appendix': 'Appendices',
  };

  const partsByCategory = Object.entries(categories).map(([key, title]) => ({
    category: key as 'front-matter' | 'preface' | 'constitution' | 'appendix',
    title,
    parts: constitutionParts.filter(p => p.category === key),
  }));

  return (
    <aside className={`constitution-sidebar ${isOpen ? 'mobile-open' : ''}`}>
      {partsByCategory.map(({ category, title, parts }) => (
        <div key={category} className="sidebar-nav-category">
          <div className="sidebar-category-title">{title}</div>
          {parts.map(part => (
            <Link
              key={part.id}
              href={`/constitution/${part.id}`}
              className={`sidebar-nav-item ${currentPartId === part.id ? 'active' : ''}`}
              onClick={onClose}
            >
              <span className="sidebar-nav-number">
                {part.number || '—'}
              </span>
              <span className="sidebar-nav-title">{part.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </aside>
  );
}
