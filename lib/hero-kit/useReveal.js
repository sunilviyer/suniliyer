'use client';

import { useEffect, useRef } from 'react';

// Adds "revealed" when the element enters the viewport.
// If loopDelay is set, adds "looping" that many ms after reveal
// (used by the hero so word personalities start after the entrance).
export function useReveal(loopDelay = null) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          el.classList.add('revealed');
          if (loopDelay != null) {
            setTimeout(() => el.classList.add('looping'), loopDelay);
          }
          io.unobserve(el);
        }),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [loopDelay]);
  return ref;
}
