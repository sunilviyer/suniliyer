"use client";

import { useEffect, useRef, useState } from "react";
import { CUES, STAGES } from "./data";
import { ThemeProvider } from "./theme";
import { ScrollFilm } from "./film";
import { Hero, Nav } from "./hero";
import { DepthGauge, FilmCaption, Footer, StageSection } from "./strata";
import "./evo.css";
import "./evo.host.css";

export function EvoPage() {
  const [active, setActive] = useState(1);
  const activeRef = useRef(1);
  const onProgress = (p: number) => {
    let n = 1;
    for (let i = 0; i < CUES.length; i++) if (p >= CUES[i].t) n = i + 1;
    if (n !== activeRef.current) { activeRef.current = n; setActive(n); }
  };
  useEffect(() => {
    const w = window as unknown as { __evo?: Record<string, unknown> };
    w.__evo = { ...w.__evo, activeStratum: active };
  }, [active]);
  const label = CUES[active - 1]?.label ?? "";
  return (
    <ThemeProvider>
      <div className="evo">
        <ScrollFilm onProgress={onProgress} />
        <Nav />
        <DepthGauge active={active} />
        <FilmCaption active={active} label={label} />
        <main id="journey" className="evo-content">
          <Hero />
          {STAGES.map((s, i) => (
            <StageSection key={s.num} stage={s} side={i % 2 === 0 ? "left" : "right"} />
          ))}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
