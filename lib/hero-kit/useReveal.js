'use client';

import { useEffect, useRef, useState } from 'react';

// Reveal state as React state (returned as a class string) rather than a
// direct classList mutation: components mix it into their own className,
// so re-renders can never wipe it. If loopDelay is set, "looping" joins
// that many ms after reveal (the hero starts word personalities then).
export function useReveal(loopDelay = null) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [looping, setLooping] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer = null;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          setRevealed(true);
          if (loopDelay != null) {
            timer = setTimeout(() => setLooping(true), loopDelay);
          }
          io.unobserve(el);
        }),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, [loopDelay]);

  return [ref, `${revealed ? 'revealed' : ''}${looping ? ' looping' : ''}`];
}
