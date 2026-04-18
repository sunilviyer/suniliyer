'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { LearningPath } from '@/types/learning-path';

interface PathPreviewCardProps {
  path: LearningPath;
}

export function PathPreviewCard({ path }: PathPreviewCardProps) {
  return (
    <Link
      href={`/${path.slug}`}
      className="group relative block overflow-hidden rounded-lg border-2 border-transparent hover:border-current transition-all duration-300 bg-charcoal/40 hover:bg-charcoal/60 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
      style={{ color: path.color }}
    >
      {/* Hero Image */}
      <div className="aspect-[3/2] relative overflow-hidden">
        <Image
          src={path.heroImage}
          alt={`${path.title} hero image`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="text-2xl font-bold mb-2 transition-colors"
          style={{ color: path.color }}
        >
          {path.title}
        </h3>
        <p className="text-cream mb-4 text-sm leading-relaxed">
          {path.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-fern">
            {path.cardCount} concept cards
          </span>
          <svg
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
