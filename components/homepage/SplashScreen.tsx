'use client';

import { useEffect, useState } from 'react';

export function SplashScreen() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 1750); // 1.75 seconds (50% reduction from 3.5s)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-black flex items-center justify-center z-[10000] transition-all duration-500 ease-in-out ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)',
        borderBottomLeftRadius: isHidden ? '50%' : '0',
        borderBottomRightRadius: isHidden ? '50%' : '0',
      }}
    >
      <div
        className="text-[#f5f5f0] font-light animate-blink"
        style={{
          fontFamily: 'var(--font-funnel-display)',
          fontSize: '120px',
        }}
      >
        Hello!
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 45% { opacity: 1; }
          50%, 95% { opacity: 0.2; }
          100% { opacity: 1; }
        }
        .animate-blink {
          animation: blink 0.35s ease-in-out 10;
        }
      `}</style>
    </div>
  );
}
