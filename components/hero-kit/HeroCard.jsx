'use client';

import { Word, Words, Letters } from './Kinetic';
import { useReveal } from '@/lib/hero-kit/useReveal';

// Hero card with the Torchlight treatment: a breathing glow bleed behind
// the card and a cursor-following highlight inside it (both read the
// --lx/--ly vars that Torchlight maintains on .kit-root).
export default function HeroCard() {
  const ref = useReveal(2600); // words settle, then personalities begin

  return (
    <div className="hero-wrap">
      <div className="hero-glow" aria-hidden="true" />
      <section className="card hero" ref={ref}>
        <div className="hero-light" aria-hidden="true" />
        <p className="eyebrow">
          <Words text="Sunil Iyer" startIndex={0} />{' '}
          <span className="dot">·</span>{' '}
          <Words text="AI Governance & Responsible AI" startIndex={2} />
        </p>

        <h1>
          <Word delayIndex={7} className="kw-serious">Serious</Word>{' '}
          <Word delayIndex={8}>about</Word>
          <br />
          <span className="gov">
            <Words text="AI governance." startIndex={9} />
          </span>
          <br />
          <span className="playful">
            <Word delayIndex={11}>
              <Letters text="Playful" />
            </Word>
            <svg viewBox="0 0 300 24" aria-hidden="true">
              <path d="M4 16 C 60 4, 120 22, 180 10 S 280 14, 296 8" />
            </svg>
          </span>{' '}
          <Words text="about everything else." startIndex={12} />
        </h1>

        <p className="hero-sub">
          <Words
            text="Helping organizations navigate AI through education, implementation guidance, and governance frameworks."
            startIndex={15}
          />{' '}
          <em>
            <Words text="One world of knowledge, one world of play." startIndex={28} />
          </em>
        </p>
      </section>
    </div>
  );
}
