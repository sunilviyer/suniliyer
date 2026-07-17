'use client';

// Word-by-word kinetic reveal primitives. Containers toggle the
// "revealed" class via useReveal; each word rises with a staggered delay.

export function Word({ children, delayIndex = 0, className = '', style = {} }) {
  return (
    <span className="w">
      <span
        className={className}
        style={{ '--d': `${delayIndex * 0.045}s`, ...style }}
      >
        {children}
      </span>
    </span>
  );
}

export function Words({ text, startIndex = 0, wordClassName = '' }) {
  const words = text.split(/\s+/).filter(Boolean);
  return (
    <>
      {words.map((w, i) => (
        <span key={i}>
          <Word delayIndex={startIndex + i} className={wordClassName}>
            {w}
          </Word>
          {i < words.length - 1 ? ' ' : null}
        </span>
      ))}
    </>
  );
}

// Letters with staggered wave indices, used by the Playful word.
export function Letters({ text }) {
  return (
    <>
      {text.split('').map((ch, i) => (
        <span key={i} className="ltr" style={{ '--li': i }}>
          {ch}
        </span>
      ))}
    </>
  );
}
