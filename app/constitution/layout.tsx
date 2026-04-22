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

  // Check if we're on the landing page
  const isLandingPage = pathname === '/constitution';

  // Handler for opening the Sanskrit panel (not currently used but available for future tooltip integration)
  // const handleOpenPanel = (term: SanskritTerm) => {
  //   setSelectedTerm(term);
  //   setIsPanelOpen(true);
  // };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
    setTimeout(() => setSelectedTerm(null), 300);
  };

  // All pages get full width, centered layout (no sidebar)
  // Sidebar removed per design requirements
  return <>{children}</>;
}
