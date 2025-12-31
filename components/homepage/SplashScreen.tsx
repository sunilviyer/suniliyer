'use client';

import { useEffect, useState } from 'react';

export function SplashScreen() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-black flex items-center justify-center z-[10000] transition-transform duration-1000 ease-in-out ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)' }}
    >
      <div
        className="text-[#f5f5f0] font-light animate-blink"
        style={{
          fontFamily: 'var(--font-funnel)',
          fontSize: '120px',
        }}
      >
        Hello
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0.3; }
        }
        .animate-blink {
          animation: blink 0.8s infinite;
        }
      `}</style>
    </div>
  );
}
