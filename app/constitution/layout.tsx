'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from './components/Sidebar';
import SanskritPanel from './components/SanskritPanel';
import { type SanskritTerm } from './data/sanskrit-glossary';
import './constitution.css';

export default function ConstitutionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState<SanskritTerm | null>(null);

  // Extract part ID from pathname
  const currentPartId = pathname?.split('/').pop() || '';

  const handleOpenPanel = (term: SanskritTerm) => {
    setSelectedTerm(term);
    setIsPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
    setTimeout(() => setSelectedTerm(null), 300);
  };

  return (
    <div className="constitution-container">
      {/* Mobile sidebar toggle button - only visible on mobile */}
      <button
        className="constitution-mobile-sidebar-toggle"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Toggle constitution navigation"
      >
        <span>☰</span>
        <span style={{ fontSize: '1.25rem' }}>ॐ</span>
      </button>

      {/* Sidebar */}
      <Sidebar
        currentPartId={currentPartId}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main content */}
      <main className="constitution-reading-area">{children}</main>

      {/* Sanskrit Reference Panel */}
      <SanskritPanel
        isOpen={isPanelOpen}
        onClose={handleClosePanel}
        selectedTerm={selectedTerm}
      />

      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="constitution-mobile-overlay"
        />
      )}
    </div>
  );
}
