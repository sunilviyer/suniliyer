'use client';

import { motion } from 'framer-motion';

interface PathHeroProps {
  title: string;
  tagline: string;
  description: string;
  cardCount: number;
  readingTime: string;
}

export function PathHero({
  title,
  tagline,
  description,
  cardCount,
  readingTime,
}: PathHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#333d29] via-[#414833] to-[#333d29]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Path Label */}
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-white/10 border border-white/20">
            <span className="text-sm font-medium text-white/90 tracking-wide uppercase">
              Learning Path
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-funnel-display)' }}>
            {title}
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-[#F5F5DC] mb-6 opacity-90">
            {tagline}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            {description}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-center gap-6 text-white/70">
            <div className="flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 256 256"
                fill="currentColor"
              >
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0v52h24A8,8,0,0,1,168,148Z"></path>
              </svg>
              <span>{readingTime}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/50"></div>
            <div className="flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 256 256"
                fill="currentColor"
              >
                <path d="M224,48H32A16,16,0,0,0,16,64V224a8,8,0,0,0,11.58,7.15L64,216.94l36.42,14.21a8,8,0,0,0,5.94,0L144,216.94l36.42,14.21a8,8,0,0,0,5.94,0L224,216.94l36.42,14.21A8,8,0,0,0,272,224V64A16,16,0,0,0,224,48ZM88,144H72a8,8,0,0,1,0-16H88a8,8,0,0,1,0,16Zm96,0H152a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16Z"></path>
              </svg>
              <span>{cardCount} Cards</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        >
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-sm uppercase tracking-wide">Scroll to Explore</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 256 256"
              fill="currentColor"
            >
              <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
