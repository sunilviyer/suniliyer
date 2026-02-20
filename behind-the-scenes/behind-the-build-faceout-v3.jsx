import { useState, useEffect, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════════
   BEHIND THE BUILD — FACE-OUT BOOKSHELF v3
   Desktop: 3×3 · Mobile: 1×9 · Bigger books · Page flip
   ═══════════════════════════════════════════════════════════════ */

const PAL = {
  charcoal: "#565264",
  dimGrey: "#706677",
  dustyMauve: "#a6808c",
  almondSilk: "#ccb7ae",
  dustGrey: "#d6cfcb",
};

const PROJECTS = [
  {
    id: "seshan-dashboard",
    title: "Seshan Dashboard",
    subtitle: "Where it all started",
    coverGrad: ["#0a192f", "#112d4e"],
    coverAccent: "#64ffda",
    accent: "#64ffda",
    spark: "A high-value RRSP with dangerous concentration in a single stock. I needed to actually see my risk.",
    journey: "280+ hours across 4 full iterations. Learned Next.js, Flask, and PostgreSQL from scratch.",
    lesson: "The willingness to throw away work and start over is the most underrated skill.",
    stats: ["280+ hrs", "4 iterations", "Real-time"],
    tech: ["Next.js", "Flask", "PostgreSQL", "Neon DB"],
    fullStory: "It started with a spreadsheet. I had a high-value RRSP and was managing it the way most people do — logging into my brokerage, glancing at numbers, hoping for the best. Then one evening I did the math and realized I was dangerously concentrated in a single stock.\n\nThat moment became the spark for Seshan. I wanted a dashboard showing everything my brokerage wouldn't: concentration risk, sector exposure, and what a recession would do to my specific portfolio.\n\nI had never built a full-stack application. I'm not an engineer. I'm a customer success leader who was curious and frustrated. Next.js, Flask, PostgreSQL — all from scratch. The first version was embarrassing. The fourth was good.\n\nOver 280 hours across evenings and weekends. I didn't learn PostgreSQL because I wanted to. I learned it because I needed a database. Attach learning to a problem you care about.",
    portfolioLink: "/portfolio/seshan-dashboard",
  },
  {
    id: "seshan-intelligence",
    title: "Seshan Intelligence",
    subtitle: "Privacy-first AI",
    coverGrad: ["#0b1a10", "#143322"],
    coverAccent: "#4ade80",
    accent: "#4ade80",
    spark: "Could AI financial analysis run entirely on my machine? No cloud. Complete privacy.",
    journey: "Local Llama 3.2B via Ollama. Portfolio analysis, stress-testing — all on my laptop.",
    lesson: "If I advocate for responsible AI at work, I should build responsibly at home too.",
    stats: ["Zero cloud", "Llama 3.2B", "100% local"],
    tech: ["Next.js", "Ollama", "Llama 3.2B", "React"],
    fullStory: "Once the dashboard worked, I wondered: could AI financial analysis run entirely on my machine? No cloud. No data leaving my laptop.\n\nOllama with Llama 3.2B — concentration risks, stress-testing, benchmarks. All local. Your data never leaves.\n\nI work in an industry where data privacy is paramount. Privacy and capability aren't mutually exclusive.",
    portfolioLink: "/portfolio/seshan-intelligence",
  },
  {
    id: "mortgage-calculator",
    title: "Mortgage Calculator",
    subtitle: "Life drives the build",
    coverGrad: ["#1a1408", "#2d2210"],
    coverAccent: "#f59e0b",
    accent: "#f59e0b",
    spark: "House hunting in Oakville. Calculating a million-dollar mortgage on a napkin.",
    journey: "Multi-scenario calculator. Then realized the math was easy — the search was hard.",
    lesson: "The best tools solve a pain point you personally feel.",
    stats: ["∞ scenarios", "Real life", "→ Matcher"],
    tech: ["React", "Financial modeling"],
    fullStory: "Started with life, not technology. House hunting in Oakville with a young family. Calculating mortgage scenarios on a napkin.\n\nThe calculator was born in a weekend. The real insight: math wasn't the hard part. Cross-referencing listings across five platforms was. That became the Matcher agent.",
    portfolioLink: "/portfolio/mortgage-calculator",
  },
  {
    id: "calvin-hobbes",
    title: "cAlvIn & Hobbes",
    subtitle: "AI through comics",
    coverGrad: ["#111111", "#1e1e1e"],
    coverAccent: "#e0e0e0",
    accent: "#d0d0d0",
    spark: "What if Calvin was a kid AI — learning, hallucinating — and Hobbes was his tiger friend?",
    journey: "30+ strips, 10+ themes. Leonardo AI for characters. Every strip hand-assembled.",
    lesson: "AI is the pencil. I'm the cartoonist.",
    stats: ["30+ strips", "10+ themes", "Hand-crafted"],
    tech: ["Leonardo AI", "Manual assembly", "React"],
    fullStory: "cAlvIn is a small robot — not self-aware, always learning, constantly hallucinating. Hobbes is wise and loves trouble.\n\nLeonardo AI generates character poses. I assemble every strip manually — characters, bubbles, panels, pacing. All credit to Bill Watterson.",
    portfolioLink: "/portfolio/calvin-hobbes",
  },
  {
    id: "ai-agents",
    title: "Five AI Agents",
    subtitle: "Scout · Ticker · Matcher · Quill · Sage",
    coverGrad: ["#0a0f1e", "#141e38"],
    coverAccent: "#669bbc",
    accent: "#669bbc",
    spark: "Everyone talked about agentic AI. I wanted to understand it by building — five times.",
    journey: "5 agents, 5 personas, 5 real problems from my life.",
    lesson: "The best way to understand technology is to build five expressions of it.",
    stats: ["5 agents", "5 personas", "1 live"],
    tech: ["Python", "Next.js", "SVG avatars"],
    fullStory: "Scout: fraud research. Ticker: stock monitoring. Matcher: home finding. Quill: editing. Sage: the Bhagavad Gita.\n\nHuman-in-the-loop. Agents compress information-gathering. Humans retain judgment. Each has its own SVG avatar, color, persona.",
    portfolioLink: "/portfolio/ai-agents",
  },
  {
    id: "bhagavad-gita",
    title: "Bhagavad Gita",
    subtitle: "Ancient wisdom, interactive",
    coverGrad: ["#1a0808", "#370617"],
    coverAccent: "#FFBA08",
    accent: "#FFBA08",
    spark: "The Gita shaped how I think — patience, dharma, karma.",
    journey: "10-moment dharma wheel, 4-layer reveal, Sanskrit verses, live Sage agent.",
    lesson: "Do your work, don't do it for the fruit of it.",
    stats: ["10 moments", "4 layers", "Live chat"],
    tech: ["Next.js", "Framer Motion", "Claude API"],
    fullStory: "The most personal project. The Gita isn't a text to me — it's a framework for hard decisions.\n\n10 moments, four layers each. Sage lets visitors converse with the wisdom. No client. No deadline. Just honoring something that has given me so much.",
    portfolioLink: "/portfolio/bhagavad-gita",
  },
  {
    id: "creative-works",
    title: "Creative Works",
    subtitle: "A lifetime of making",
    coverGrad: ["#14002a", "#240046"],
    coverAccent: "#c77dff",
    accent: "#c77dff",
    spark: "Goes back to college. Tools change — the impulse doesn't.",
    journey: "Mythology videos, comics, AI art, photography. Bento grid.",
    lesson: "Creativity isn't a phase. It's a thread through your whole life.",
    stats: ["Videos", "Comics", "AI Art", "Photos"],
    tech: ["Midjourney", "Runway", "Leonardo AI"],
    fullStory: "No single spark. A lifelong flame. From college to AI-generated mythology videos.\n\nPart gallery, part bookshelf, part mixtape. Not curated for an audience. Curated for me.",
    portfolioLink: "/portfolio/creative-works",
  },
  {
    id: "learning-paths",
    title: "Learning Paths",
    subtitle: "158 articles → 5 paths",
    coverGrad: ["#151810", "#2a2f1e"],
    coverAccent: "#a4ac86",
    accent: "#a4ac86",
    spark: "Making AI governance accessible — not papers, but journeys anyone can follow.",
    journey: "158 articles → 6 notebooks → 173 cards → audits → 5 paths.",
    lesson: "Teaching is organization more than knowledge.",
    stats: ["158 articles", "5 paths", "173 cards"],
    tech: ["Next.js", "NotebookLM", "MDX"],
    fullStory: "Nobody sees the scale. Five neat paths on the surface. 158 articles behind it. Custom Apps Script, six notebooks, 173 cards, quality audits, a master fix plan.\n\nThe hardest part: sequencing so someone else could learn naturally.",
    portfolioLink: "/portfolio/learning-paths",
  },
  {
    id: "suniliyer-ca",
    title: "suniliyer.ca",
    subtitle: "The container for all",
    coverGrad: ["#0e0b14", "#1a1525"],
    coverAccent: "#a78bfa",
    accent: "#a78bfa",
    spark: "Needed a home — not a resume, but a living portfolio.",
    journey: "Rayo template → GSAP → Framer Motion → Lenis → everything above.",
    lesson: "A personal site is never done. It grows as you grow.",
    stats: ["Next.js", "GSAP + Framer", "9+ projects"],
    tech: ["Next.js", "Vercel", "GSAP", "Tailwind"],
    fullStory: "The meta-project. Started as a template. Every project added a dimension — demo pages, robot stages, dharma wheels, article rendering.\n\nShould never feel finished. Should feel alive.",
    portfolioLink: "/",
  },
];

function CoverArt({ project }) {
  const [g1] = project.coverGrad;
  const a = project.coverAccent;
  return (
    <svg viewBox="0 0 120 120" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="120" height="120" fill={g1} />
      <circle cx="60" cy="60" r="45" fill="none" stroke={a} strokeWidth="0.5" opacity="0.2" />
      <circle cx="60" cy="60" r="30" fill="none" stroke={a} strokeWidth="0.3" opacity="0.15" />
      <line x1="20" y1="100" x2="100" y2="20" stroke={a} strokeWidth="0.4" opacity="0.12" />
      <rect x="30" y="30" width="60" height="60" rx="2" fill="none" stroke={a} strokeWidth="0.3" opacity="0.1" />
      <circle cx="60" cy="55" r="12" fill={a} opacity="0.08" />
      <text x="60" y="60" textAnchor="middle" dominantBaseline="middle" fill={a} fontSize="18" opacity="0.25" fontFamily="'Libre Baskerville', serif">{project.title.charAt(0)}</text>
    </svg>
  );
}

/* ── Book ── */
function Book({ project, isDark }) {
  const [coverOpen, setCoverOpen] = useState(false);
  const [page1Flipped, setPage1Flipped] = useState(false);
  const [g1, g2] = project.coverGrad;
  const ca = project.coverAccent;

  const closeAll = useCallback(() => {
    setPage1Flipped(false);
    setTimeout(() => setCoverOpen(false), 350);
  }, []);

  const closeFromCover = useCallback(() => {
    if (page1Flipped) { setPage1Flipped(false); setTimeout(() => setCoverOpen(false), 350); }
    else setCoverOpen(false);
  }, [page1Flipped]);

  const pgBg = isDark ? "#141218" : "#f8f5f0";
  const pgTxt = isDark ? "#aaa8b8" : "#555";
  const pgHead = isDark ? "#eee" : "#222";
  const pgMute = isDark ? PAL.dustyMauve : PAL.dimGrey;

  return (
    <div
      style={{ width: "100%", maxWidth: 290, aspectRatio: "5 / 7", perspective: "1400px", position: "relative", zIndex: coverOpen ? 20 : 1, margin: "0 auto" }}
      onMouseEnter={() => !coverOpen && setCoverOpen(true)}
    >
      <div style={{ width: "100%", height: "100%", position: "relative", transformStyle: "preserve-3d" }}>

        {/* PAGE 2 — Full Story + View Project */}
        <div style={{
          position: "absolute", inset: 0, borderRadius: "2px 6px 6px 2px",
          background: pgBg, boxShadow: "inset 2px 0 6px rgba(0,0,0,0.1), 1px 2px 8px rgba(0,0,0,0.15)",
          overflow: "hidden", zIndex: 1,
        }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 6, background: `linear-gradient(to right, rgba(0,0,0,${isDark ? 0.15 : 0.04}), transparent)`, pointerEvents: "none" }} />
          <div style={{
            position: "absolute", inset: 0, overflowY: "auto", padding: "20px 16px 16px 22px",
            scrollbarWidth: "thin", scrollbarColor: `${PAL.dustyMauve}33 transparent`,
          }}>
            <div style={{ fontSize: 8, fontFamily: "'JetBrains Mono', monospace", color: pgMute, letterSpacing: "0.14em", marginBottom: 12, fontWeight: 600 }}>THE FULL STORY</div>

            {project.fullStory.split("\n\n").map((p, i) => (
              <p key={i} style={{ fontSize: 12, color: pgTxt, lineHeight: 1.75, margin: "0 0 12px" }}>{p}</p>
            ))}

            <div style={{ display: "flex", flexWrap: "wrap", gap: 3, marginBottom: 8 }}>
              {project.tech.map((t) => (
                <span key={t} style={{
                  padding: "2px 6px", borderRadius: 3,
                  background: isDark ? "#ffffff06" : "#00000004",
                  border: `1px solid ${isDark ? "#ffffff0a" : "#00000008"}`,
                  color: isDark ? "#777" : "#aaa", fontSize: 8, fontFamily: "'JetBrains Mono', monospace",
                }}>{t}</span>
              ))}
            </div>

            <div style={{ height: 1, background: isDark ? `${PAL.dustyMauve}18` : `${PAL.dustyMauve}25`, margin: "16px 0" }} />

            <a href={project.portfolioLink} style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "10px 20px", borderRadius: 6,
              background: isDark ? `${PAL.dustyMauve}14` : `${PAL.dustyMauve}1a`,
              border: `1px solid ${isDark ? PAL.dustyMauve + "28" : PAL.dustyMauve + "35"}`,
              color: isDark ? PAL.almondSilk : PAL.charcoal,
              fontSize: 11, fontFamily: "'JetBrains Mono', monospace",
              textDecoration: "none", fontWeight: 600, letterSpacing: "0.04em",
            }}>View Project →</a>

            <button onClick={(e) => { e.stopPropagation(); closeAll(); }} style={{
              display: "flex", alignItems: "center", gap: 5,
              padding: "7px 14px", borderRadius: 5, marginTop: 12,
              border: `1px solid ${isDark ? "#ffffff12" : "#00000010"}`,
              background: "transparent", color: pgMute,
              fontSize: 10, fontFamily: "'JetBrains Mono', monospace", cursor: "pointer",
            }}>← Back to cover</button>
          </div>
        </div>

        {/* PAGE 1 — Summary */}
        <div
          style={{
            position: "absolute", inset: 0, transformOrigin: "left center",
            transform: page1Flipped ? "rotateY(-165deg)" : "rotateY(0deg)",
            transition: "transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)",
            backfaceVisibility: "hidden", borderRadius: "2px 6px 6px 2px",
            background: pgBg,
            boxShadow: page1Flipped ? "-4px 3px 12px rgba(0,0,0,0.25)" : "inset 2px 0 6px rgba(0,0,0,0.1), 1px 2px 8px rgba(0,0,0,0.15)",
            overflow: "hidden", zIndex: 2, cursor: page1Flipped ? "pointer" : "default",
          }}
          onClick={(e) => { if (page1Flipped) { e.stopPropagation(); setPage1Flipped(false); } }}
        >
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 6, background: `linear-gradient(to right, rgba(0,0,0,${isDark ? 0.15 : 0.04}), transparent)`, pointerEvents: "none" }} />

          <div style={{
            position: "absolute", inset: 0,
            padding: "16px 12px 12px 20px",
            display: "flex", flexDirection: "column",
            overflow: "hidden",
          }}>
            <h4 style={{
              fontSize: 15, fontFamily: "'Libre Baskerville', serif", fontWeight: 400,
              color: pgHead, margin: "0 0 1px", lineHeight: 1.25,
            }}>{project.title}</h4>
            <p style={{ fontSize: 8, fontFamily: "'JetBrains Mono', monospace", color: pgMute, margin: "0 0 10px", opacity: 0.7 }}>{project.subtitle}</p>

            <div style={{ flex: 1, minHeight: 0, overflowY: "auto", scrollbarWidth: "thin", scrollbarColor: `${PAL.dustyMauve}22 transparent`, paddingRight: 4 }}>
              {[
                { l: "✦ SPARK", t: project.spark, em: false },
                { l: "◆ JOURNEY", t: project.journey, em: false },
                { l: "★ LESSON", t: project.lesson, em: true },
              ].map((s) => (
                <div key={s.l} style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 7, fontFamily: "'JetBrains Mono', monospace", color: pgMute, letterSpacing: "0.14em", marginBottom: 2, fontWeight: 600 }}>{s.l}</div>
                  <p style={{
                    fontSize: s.em ? 11 : 10, color: s.em ? pgHead : pgTxt, lineHeight: 1.55, margin: 0,
                    fontStyle: s.em ? "italic" : "normal",
                    fontFamily: s.em ? "'Libre Baskerville', serif" : "inherit",
                    borderLeft: s.em ? `2px solid ${isDark ? PAL.dustyMauve + "44" : PAL.dustyMauve + "55"}` : "none",
                    paddingLeft: s.em ? 8 : 0,
                  }}>{s.t}</p>
                </div>
              ))}

              <div style={{ display: "flex", flexWrap: "wrap", gap: 3, marginTop: 4 }}>
                {project.stats.map((s) => (
                  <span key={s} style={{
                    padding: "2px 7px", borderRadius: 3,
                    background: isDark ? `${PAL.dustyMauve}0e` : `${PAL.dustyMauve}14`,
                    border: `1px solid ${isDark ? PAL.dustyMauve + "18" : PAL.dustyMauve + "22"}`,
                    color: isDark ? PAL.almondSilk : PAL.charcoal,
                    fontSize: 8, fontFamily: "'JetBrains Mono', monospace",
                  }}>{s}</span>
                ))}
              </div>
            </div>

            {/* Always-visible bottom section */}
            <div style={{ flexShrink: 0, paddingTop: 8, borderTop: `1px solid ${isDark ? PAL.dustyMauve + "15" : PAL.dustyMauve + "22"}`, marginTop: 8 }}>
              <button onClick={(e) => { e.stopPropagation(); setPage1Flipped(true); }} style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "8px 14px", borderRadius: 5,
                border: `1px solid ${isDark ? PAL.dustyMauve + "30" : PAL.dustyMauve + "38"}`,
                background: isDark ? `${PAL.dustyMauve}0c` : `${PAL.dustyMauve}10`,
                color: isDark ? PAL.dustyMauve : PAL.charcoal,
                fontSize: 10, fontFamily: "'JetBrains Mono', monospace",
                cursor: "pointer", transition: "all 0.3s", width: "100%", justifyContent: "center",
              }}>
                Full Story →
                <span style={{ fontSize: 8, opacity: 0.5 }}>flip page</span>
              </button>
            </div>
          </div>
        </div>

        {/* FRONT COVER */}
        <div
          onClick={(e) => { e.stopPropagation(); if (coverOpen) closeFromCover(); }}
          style={{
            position: "absolute", inset: 0, backfaceVisibility: "hidden",
            transformOrigin: "left center",
            transform: coverOpen ? "rotateY(-165deg)" : "rotateY(0deg)",
            transition: "transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1)",
            zIndex: 3, borderRadius: "2px 6px 6px 2px", overflow: "hidden",
            boxShadow: coverOpen ? "-6px 4px 18px rgba(0,0,0,0.35)" : "2px 4px 16px rgba(0,0,0,0.3), 0 1px 3px rgba(0,0,0,0.2)",
            cursor: coverOpen ? "pointer" : "default",
          }}
        >
          <div style={{
            width: "100%", height: "100%",
            background: `linear-gradient(160deg, ${g1} 0%, ${g2} 100%)`,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            padding: "28px 18px", position: "relative",
          }}>
            <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, ${ca} 2px, ${ca} 2.5px), repeating-linear-gradient(90deg, transparent, transparent 4px, ${ca} 4px, ${ca} 4.5px)`, pointerEvents: "none" }} />
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 6, background: "linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0.08))" }} />
            <div style={{ position: "absolute", top: 20, left: 22, right: 22, height: 0.8, background: ca, opacity: 0.15 }} />
            <div style={{ position: "absolute", top: 24, left: 30, right: 30, height: 0.5, background: ca, opacity: 0.08 }} />

            <div style={{
              width: "55%", maxWidth: 130, aspectRatio: "1", borderRadius: 4,
              overflow: "hidden", border: `1px solid ${ca}18`, marginBottom: 18,
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}>
              <CoverArt project={project} />
            </div>

            <h3 style={{
              fontSize: "clamp(12px, 1.8vw, 16px)",
              fontFamily: "'Libre Baskerville', serif", fontWeight: 700,
              color: ca, textAlign: "center", lineHeight: 1.35,
              margin: "0 0 5px", letterSpacing: "0.04em",
              textShadow: "0 1px 3px rgba(0,0,0,0.4)",
            }}>{project.title}</h3>
            <p style={{
              fontSize: "clamp(8px, 1.1vw, 10px)",
              fontFamily: "'JetBrains Mono', monospace",
              color: ca, opacity: 0.45, textAlign: "center", margin: 0,
            }}>{project.subtitle}</p>

            <div style={{ position: "absolute", bottom: 24, left: 30, right: 30, height: 0.5, background: ca, opacity: 0.08 }} />
            <div style={{ position: "absolute", bottom: 20, left: 22, right: 22, height: 0.8, background: ca, opacity: 0.15 }} />

            {!coverOpen && (
              <div style={{ position: "absolute", bottom: 30, left: 0, right: 0, textAlign: "center", fontSize: 8, fontFamily: "'JetBrains Mono', monospace", color: ca, opacity: 0.3, letterSpacing: "0.1em" }}>HOVER TO OPEN</div>
            )}
            {coverOpen && (
              <div style={{ position: "absolute", bottom: 30, left: 0, right: 0, textAlign: "center", fontSize: 8, fontFamily: "'JetBrains Mono', monospace", color: ca, opacity: 0.5, letterSpacing: "0.1em", transform: "scaleX(-1)" }}>CLICK TO CLOSE</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Shelf ── */
function ShelfPlank({ isDark }) {
  const top = isDark ? "#4a4456" : "#8a7d6e";
  const mid = isDark ? "#3a3444" : "#7a6d5e";
  const dark = isDark ? "#2e2a36" : "#6a5d4e";

  return (
    <div style={{ width: "100%", position: "relative", zIndex: 3, marginTop: -4 }}>
      <div style={{ height: 14, background: `linear-gradient(180deg, ${top}, ${mid})`, borderRadius: "1px 1px 0 0", position: "relative", transition: "all 0.5s" }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} style={{ position: "absolute", top: 2 + i * 2.2, left: 0, right: 0, height: i % 2 === 0 ? 0.6 : 0.3, background: isDark ? PAL.almondSilk : "#fff", opacity: isDark ? 0.06 : 0.08 }} />
        ))}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(to right, transparent 5%, ${isDark ? "#ffffff18" : "#ffffff44"} 50%, transparent 95%)` }} />
      </div>
      <div style={{
        height: 16, background: `linear-gradient(180deg, ${mid}, ${dark})`,
        borderRadius: "0 0 3px 3px",
        boxShadow: isDark ? "0 7px 20px rgba(0,0,0,0.5), 0 2px 5px rgba(0,0,0,0.3)" : "0 5px 16px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)",
        position: "relative", transition: "all 0.5s",
      }}>
        <div style={{ position: "absolute", top: 3, left: 10, right: 10, height: 0.4, background: isDark ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.06)" }} />
        <div style={{ position: "absolute", bottom: 3, left: 10, right: 10, height: 0.4, background: isDark ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.06)" }} />
      </div>
      <div style={{ height: 12, background: isDark ? "linear-gradient(180deg, rgba(0,0,0,0.3), transparent)" : "linear-gradient(180deg, rgba(0,0,0,0.05), transparent)" }} />
    </div>
  );
}

function ShelfRow({ books, isDark }) {
  return (
    <div style={{ position: "relative", marginBottom: 8 }}>
      {/* Back panel */}
      <div style={{
        position: "absolute", top: -10, left: -10, right: -10, bottom: 18,
        background: isDark ? "linear-gradient(180deg, #2a2730, #2a2730cc)" : "linear-gradient(180deg, #b8ad9e, #b0a596dd)",
        borderRadius: 4, boxShadow: isDark ? "inset 0 0 20px rgba(0,0,0,0.35)" : "inset 0 0 14px rgba(0,0,0,0.08)",
        zIndex: 0, transition: "all 0.6s",
      }} />
      {["left", "right"].map((s) => (
        <div key={s} style={{
          position: "absolute", [s]: -14, top: -16, bottom: 16, width: 14,
          background: isDark ? `linear-gradient(to ${s === "left" ? "right" : "left"}, #3a3444, #3a3444cc)` : `linear-gradient(to ${s === "left" ? "right" : "left"}, #9a8e7e, #9a8e7ecc)`,
          borderRadius: s === "left" ? "4px 0 0 4px" : "0 4px 4px 0",
          boxShadow: isDark ? `${s === "left" ? "-" : ""}2px 0 5px rgba(0,0,0,0.2)` : `${s === "left" ? "-" : ""}1px 0 3px rgba(0,0,0,0.05)`,
          zIndex: 1, transition: "all 0.6s",
        }} />
      ))}
      {/* Books */}
      <div style={{
        display: "flex", justifyContent: "center",
        gap: 20, padding: "14px 20px 8px",
        position: "relative", zIndex: 2, alignItems: "flex-end",
      }}>
        {books.map((p) => <Book key={p.id} project={p} isDark={isDark} />)}
      </div>
      <ShelfPlank isDark={isDark} />
    </div>
  );
}

/* ── MAIN ── */
export default function BehindTheBuildFaceOutV3() {
  const [isDark, setIsDark] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const shelves = isMobile
    ? PROJECTS.map((p) => [p])
    : [PROJECTS.slice(0, 3), PROJECTS.slice(3, 6), PROJECTS.slice(6, 9)];

  return (
    <div style={{
      minHeight: "100vh",
      background: isDark
        ? "linear-gradient(180deg, #1a171e 0%, #12101a 50%, #0c0a10 100%)"
        : "linear-gradient(180deg, #e8e0d4 0%, #ddd5c8 50%, #d4ccc0 100%)",
      fontFamily: "'DM Sans', sans-serif",
      padding: "40px 16px 60px", transition: "background 0.6s ease",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=JetBrains+Mono:wght@400;600&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />

      {/* Top bar */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px",
        background: isDark ? "rgba(26,23,30,0.9)" : "rgba(220,212,200,0.92)",
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.08)"}`,
        transition: "all 0.6s",
      }}>
        <a href="/" style={{
          display: "flex", alignItems: "center", gap: 7, textDecoration: "none",
          color: isDark ? PAL.almondSilk : PAL.charcoal,
          fontSize: 11, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em", opacity: 0.65,
        }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          HOME
        </a>
        <button onClick={() => setIsDark(!isDark)} style={{
          display: "flex", alignItems: "center", gap: 7, padding: "5px 13px", borderRadius: 18,
          border: `1px solid ${isDark ? PAL.dimGrey + "33" : PAL.dimGrey + "55"}`,
          background: isDark ? `${PAL.charcoal}33` : `${PAL.dustGrey}88`,
          color: isDark ? PAL.almondSilk : PAL.charcoal,
          fontSize: 11, fontFamily: "'JetBrains Mono', monospace", cursor: "pointer",
          letterSpacing: "0.06em", transition: "all 0.4s",
        }}>
          {isDark ? "☀" : "☾"} <span>{isDark ? "LIGHT" : "DARK"}</span>
        </button>
      </div>

      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: 40, marginTop: 50 }}>
        <p style={{
          fontSize: 10, fontFamily: "'JetBrains Mono', monospace",
          color: PAL.dustyMauve, letterSpacing: "0.28em", textTransform: "uppercase",
          marginBottom: 14, opacity: 0.7,
        }}>Behind the Build</p>
        <h1 style={{
          fontSize: "clamp(22px, 4vw, 38px)", fontWeight: 400,
          color: isDark ? PAL.dustGrey : "#3a342e",
          fontFamily: "'Libre Baskerville', serif", margin: "0 0 10px", lineHeight: 1.3,
          transition: "color 0.6s",
        }}>Hover a cover. Read the story.</h1>
        <p style={{
          fontSize: 14, color: isDark ? PAL.dustyMauve + "99" : PAL.dimGrey + "cc",
          maxWidth: 440, margin: "0 auto", lineHeight: 1.6,
        }}>Nine projects, nine journeys. Each one holds the spark, the struggle, and the lesson.</p>
      </div>

      {/* Shelves */}
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        {shelves.map((row, ri) => (
          <ShelfRow key={ri} books={row} isDark={isDark} />
        ))}
      </div>

      <p style={{
        textAlign: "center", marginTop: 28, fontSize: 10,
        fontFamily: "'JetBrains Mono', monospace",
        color: isDark ? `${PAL.charcoal}88` : `${PAL.dimGrey}99`,
        letterSpacing: "0.06em",
      }}>hover to open · click cover to close · flip pages for the full story</p>
    </div>
  );
}
