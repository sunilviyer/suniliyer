'use client';

import { useState } from "react";
import Link from "next/link";

const WOOD = {
  deep: "#1C110A", dark: "#2A1810", walnut: "#3D2417", rich: "#4E3020",
  warm: "#5E3C28", mid: "#6E4C38", caramel: "#8B6340", honey: "#A07850",
  oak: "#B89068", light: "#C8A480", pale: "#D8BC9C", cream: "#E8D4B8",
};

const BOOK_COLORS = [
  { bg: "#1B3A4B", spine: "#1B3A4B", text: "#B8D4E3" },
  { bg: "#2D1B0E", spine: "#3A2414", text: "#D4B896" },
  { bg: "#5B1A1A", spine: "#5B1A1A", text: "#E8C4B8" },
  { bg: "#F2E8D4", spine: "#E8DCC4", text: "#3A2E1C" },
  { bg: "#1A2E1A", spine: "#1E341E", text: "#B8D4B8" },
  { bg: "#2E2440", spine: "#2E2440", text: "#C8B8E0" },
  { bg: "#0D0D0D", spine: "#141414", text: "#B0B0B0" },
  { bg: "#8B2500", spine: "#7A2000", text: "#F0D8C4" },
  { bg: "#1C2833", spine: "#1C2833", text: "#A8C0D0" },
];

const PROJECTS = [
  { id: "seshan-dashboard", spineLabel: "SESHAN  DASHBOARD", href: "/coming-soon" },
  { id: "seshan-intelligence", spineLabel: "SESHAN  INTELLIGENCE", href: "/coming-soon" },
  { id: "mortgage-calculator", spineLabel: "MORTGAGE  CALCULATOR", href: "/mortgage-calculator" },
  { id: "calvin-hobbes", spineLabel: "cAlvIn  & HOBBES", href: "/calvinhobbes" },
  { id: "ai-agents", spineLabel: "FIVE AI  AGENTS", href: "/coming-soon" },
  { id: "bhagavad-gita", spineLabel: "BHAGAVAD  GITA", href: "/gita" },
  { id: "creative-works", spineLabel: "CREATIVE  WORKS", href: "/creative-works" },
  { id: "learning-paths", spineLabel: "LEARNING  PATHS", href: "/history" },
  { id: "suniliyer-ca", spineLabel: "SUNIL  IYER.CA", href: "/" },
];

const HEIGHTS = [340, 360, 330, 350, 345, 355, 338, 348, 342];
const WIDTHS = [62, 58, 66, 54, 60, 56, 64, 58, 60];

interface BookSpineProps {
  project: { id: string; spineLabel: string; href: string };
  index: number;
}

function BookSpine({ project, index }: BookSpineProps) {
  const [hovered, setHovered] = useState(false);
  const bc = BOOK_COLORS[index];
  const h = HEIGHTS[index];
  const w = WIDTHS[index];

  return (
    <Link
      href={project.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: `clamp(${w - 10}px, ${w / 7}vw, ${w}px)`,
        height: h,
        cursor: "pointer",
        transition: "all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)",
        transform: hovered ? "translateY(-14px) scale(1.02)" : "translateY(0) scale(1)",
        zIndex: hovered ? 5 : 1,
        filter: hovered
          ? "drop-shadow(2px 8px 16px rgba(0,0,0,0.5))"
          : "drop-shadow(1px 3px 6px rgba(0,0,0,0.25))",
        flexShrink: 0,
        alignSelf: "flex-end",
        textDecoration: "none",
        display: "block",
      }}
    >
      <div style={{
        width: "100%", height: "100%", borderRadius: "3px 5px 5px 2px",
        background: `linear-gradient(150deg, ${bc.bg} 0%, ${bc.spine} 50%, ${bc.bg}cc 100%)`,
        position: "relative", overflow: "hidden",
        boxShadow: "inset -4px 0 10px rgba(0,0,0,0.35), inset 2px 0 5px rgba(255,255,255,0.03), inset 0 2px 3px rgba(255,255,255,0.04), inset 0 -2px 3px rgba(0,0,0,0.15)",
      }}>
        {/* Cloth texture */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none",
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 1.5px, ${bc.text} 1.5px, ${bc.text} 2px), repeating-linear-gradient(90deg, transparent, transparent 3px, ${bc.text} 3px, ${bc.text} 3.5px)`,
        }} />

        {/* Binding edge */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: "linear-gradient(to right, rgba(0,0,0,0.3), transparent)" }} />
        <div style={{ position: "absolute", left: 1, top: 8, bottom: 8, width: 1.5, background: `${bc.text}18` }} />

        {/* Top band */}
        <div style={{ position: "absolute", top: 18, left: 7, right: 7, height: 1, background: bc.text, opacity: 0.2 }} />
        <div style={{ position: "absolute", top: 22, left: 10, right: 10, height: 0.5, background: bc.text, opacity: 0.12 }} />

        {/* Title */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%) rotate(-90deg)",
          whiteSpace: "nowrap", fontSize: 9,
          fontFamily: "'Libre Baskerville', 'Georgia', serif",
          fontWeight: 700, color: bc.text,
          letterSpacing: "0.12em", textTransform: "uppercase",
          opacity: 0.85, textShadow: index === 3 ? "none" : "0 1px 2px rgba(0,0,0,0.4)",
        }}>
          {project.spineLabel}
        </div>

        {/* Bottom band */}
        <div style={{ position: "absolute", bottom: 22, left: 10, right: 10, height: 0.5, background: bc.text, opacity: 0.12 }} />
        <div style={{ position: "absolute", bottom: 18, left: 7, right: 7, height: 1, background: bc.text, opacity: 0.2 }} />

        {/* Page edges */}
        <div style={{
          position: "absolute", right: 0, top: 5, bottom: 5, width: 3,
          background: "#d8d0c414", borderRadius: "0 3px 3px 0",
        }}>
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} style={{ position: "absolute", top: `${6 + i * 6}%`, left: 0, right: 0, height: 0.5, background: "rgba(0,0,0,0.06)" }} />
          ))}
        </div>
      </div>
    </Link>
  );
}

export function BehindTheScenesBookshelf() {
  return (
    <div style={{
      padding: "0 16px 60px",
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column", alignItems: "center",
    }}>
      {/* Warm overhead glow */}
      <div style={{
        position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)",
        width: 700, height: 300, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(180,140,80,0.05) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      {/* THE BOOKSHELF */}
      <div style={{ position: "relative", zIndex: 2, padding: "0 4px", maxWidth: "96vw" }}>

        {/* Back panel */}
        <div style={{
          position: "absolute", top: -14, left: -10, right: -10, bottom: 14,
          background: `linear-gradient(180deg, ${WOOD.dark}cc, ${WOOD.deep}ee)`,
          borderRadius: 6,
          boxShadow: "inset 0 0 30px rgba(0,0,0,0.5), 0 8px 30px rgba(0,0,0,0.4)",
          zIndex: 0,
        }} />

        {/* Left side panel */}
        <div style={{
          position: "absolute", left: -10, top: -14, bottom: 14, width: 10,
          background: `linear-gradient(to right, ${WOOD.walnut}, ${WOOD.dark})`,
          borderRadius: "6px 0 0 6px",
          boxShadow: "-2px 0 8px rgba(0,0,0,0.3)", zIndex: 1,
        }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} style={{ position: "absolute", left: 1, right: 1, top: `${20 + i * 20}%`, height: 0.5, background: WOOD.honey, opacity: 0.08 }} />
          ))}
        </div>

        {/* Right side panel */}
        <div style={{
          position: "absolute", right: -10, top: -14, bottom: 14, width: 10,
          background: `linear-gradient(to left, ${WOOD.walnut}, ${WOOD.dark})`,
          borderRadius: "0 6px 6px 0",
          boxShadow: "2px 0 8px rgba(0,0,0,0.3)", zIndex: 1,
        }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} style={{ position: "absolute", left: 1, right: 1, top: `${20 + i * 20}%`, height: 0.5, background: WOOD.honey, opacity: 0.08 }} />
          ))}
        </div>

        {/* Top trim */}
        <div style={{
          position: "absolute", top: -20, left: -14, right: -14, height: 8,
          background: `linear-gradient(180deg, ${WOOD.warm}, ${WOOD.walnut})`,
          borderRadius: "4px 4px 0 0",
          boxShadow: "0 -2px 6px rgba(0,0,0,0.2)", zIndex: 4,
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `${WOOD.honey}22` }} />
        </div>

        {/* Books */}
        <div style={{
          display: "flex", gap: 3, alignItems: "flex-end",
          padding: "0 14px", position: "relative", zIndex: 2, minHeight: 370,
        }}>
          {PROJECTS.map((p, i) => (
            <BookSpine key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* SHELF PLANK */}
        <div style={{ position: "relative", zIndex: 3, marginTop: -1 }}>
          {/* Top surface */}
          <div style={{
            height: 18,
            background: `linear-gradient(180deg, ${WOOD.caramel} 0%, ${WOOD.warm} 30%, ${WOOD.walnut} 100%)`,
            borderRadius: "1px 1px 0 0", position: "relative",
          }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} style={{ position: "absolute", top: 2 + i * 2.5, left: 0, right: 0, height: i % 3 === 0 ? 0.8 : 0.4, background: WOOD.honey, opacity: 0.12 }} />
            ))}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(to right, transparent 5%, ${WOOD.pale}33 30%, ${WOOD.cream}44 50%, ${WOOD.pale}33 70%, transparent 95%)` }} />
          </div>

          {/* Front face */}
          <div style={{
            height: 20,
            background: `linear-gradient(180deg, ${WOOD.walnut} 0%, ${WOOD.dark} 70%, ${WOOD.deep} 100%)`,
            borderRadius: "0 0 2px 2px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.6), 0 3px 8px rgba(0,0,0,0.4)",
            position: "relative",
          }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} style={{ position: "absolute", top: 3 + i * 3.5, left: 0, right: 0, height: 0.4, background: WOOD.caramel, opacity: 0.08 }} />
            ))}
            <div style={{ position: "absolute", top: 4, left: 12, right: 12, height: 0.5, background: "rgba(0,0,0,0.3)" }} />
            <div style={{ position: "absolute", bottom: 4, left: 12, right: 12, height: 0.5, background: "rgba(0,0,0,0.3)" }} />
          </div>

          {/* Shadow */}
          <div style={{ height: 16, background: "linear-gradient(180deg, rgba(0,0,0,0.4), transparent)" }} />
        </div>
      </div>

      {/* Hint text */}
      <p style={{
        marginTop: 20, fontSize: 10, fontFamily: "'JetBrains Mono', monospace",
        color: `${WOOD.caramel}44`, letterSpacing: "0.06em",
      }}>hover to peek · click any book to read the stories</p>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=JetBrains+Mono:wght@400;600&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
      `}</style>
    </div>
  );
}
