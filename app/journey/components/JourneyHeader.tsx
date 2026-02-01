'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function JourneyHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-primary/80 backdrop-blur-md border-b border-border-primary">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Back Link */}
        <Link href="/" className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Identity and Controls */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-accent-primary/30">
            <Image
              src="/images/sunil.webp"
              alt="Sunil Iyer"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
