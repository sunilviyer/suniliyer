import { useState, useEffect, useRef, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════════
   CREATIVE WORKS V3 — BENTO GRID
   Dusty Rose palette · Dark/Light mode · YouTube + Mobile video
   ═══════════════════════════════════════════════════════════════ */

const PALETTE = {
  darkAmethyst1: "#1a1210",   // deep warm black
  darkAmethyst2: "#2a1f1d",   // warm dark brown
  indigoInk: "#7d4f50",       // Clay Soil
  indigoVelvet: "#aa998f",    // Dusty Taupe
  royalViolet: "#cc8b86",     // Dusty Rose
  lavenderPurple: "#d1be9c",  // Khaki Beige
  mauveMagic: "#cc8b86",      // Dusty Rose
  mauve: "#f9eae1",           // Linen
};

const CATEGORIES = [
  { id: "all", label: "Everything" },
  { id: "videos", label: "Videos" },
  { id: "comics", label: "Comics" },
  { id: "ai-art", label: "AI Art" },
  { id: "photography", label: "Photography" },
];

/*  type: "youtube" | "mobile-video" | "image" | "photo-panel"
    size: "tall" | "wide" | "large" | "standard" | "full"  ← controls bento placement
    photo-panel items use: images[] array of 5 URLs, panelTitle for the strip label */
const WORKS = [
  {
    id: 1,
    category: "videos",
    title: "Shiva–Parvati Divine Wedding",
    subtitle: "Hindu Mythology Series",
    description:
      "An AI-generated animated sequence depicting the celestial wedding of Lord Shiva and Goddess Parvati — ancient scriptures brought to life through modern AI video generation.",
    type: "youtube",
    youtubeId: "dQw4w9WgXcQ",
    size: "large",
    tags: ["AI Video", "Hindu Mythology", "Animation"],
    date: "2025",
  },
  {
    id: 2,
    category: "comics",
    title: "cAlvIn Meets GPT-5",
    subtitle: "cAlvIn & Hobbes — Issue #1",
    description:
      "cAlvIn discovers a mysterious AI chatbot that Hobbes is deeply suspicious of. Original concept inspired by Bill Watterson's beloved characters, reimagined for the AI age.",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    size: "tall",
    tags: ["Comic", "AI Parody", "Leonardo AI"],
    date: "2025",
  },
  {
    id: 3,
    category: "ai-art",
    title: "Temple of Tomorrow",
    subtitle: "Indian Futurism Series",
    description:
      "A fusion of traditional Indian temple architecture with futuristic AI-generated elements. Created using Midjourney with carefully crafted cultural prompts.",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    size: "standard",
    tags: ["Midjourney", "Indian Culture", "Futurism"],
    date: "2025",
  },
  {
    id: 4,
    category: "videos",
    title: "Ramayana — The Great Battle",
    subtitle: "Epic Warfare Reimagined",
    description:
      "AI-animated battle sequences from the Ramayana, featuring the clash between Lord Rama's forces and the armies of Lanka.",
    type: "mobile-video",
    videoUrl: "/videos/ramayana-battle.mp4",
    posterUrl: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800&q=80",
    size: "tall",
    tags: ["AI Video", "Ramayana", "Mobile"],
    date: "2025",
  },
  {
    id: 5,
    category: "ai-art",
    title: "Neon Diwali",
    subtitle: "Festival of Digital Lights",
    description:
      "Traditional Diwali celebrations reimagined through a cyberpunk lens — diyas meet neon, rangoli meets circuitry.",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
    size: "wide",
    tags: ["Midjourney", "Diwali", "Cyberpunk"],
    date: "2025",
  },
  {
    id: 6,
    category: "photography",
    title: "Golden Hour at Oakville Pier",
    subtitle: "Lake Ontario Series",
    description:
      "Capturing the serene beauty of Oakville's waterfront during golden hour. Light on Lake Ontario creates a meditative canvas.",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    size: "standard",
    tags: ["Photography", "Oakville", "Golden Hour"],
    date: "2025",
  },
  {
    id: 7,
    category: "comics",
    title: "Hobbes vs. The Algorithm",
    subtitle: "cAlvIn & Hobbes — Issue #2",
    description:
      "Hobbes explains why an AI can never truly replace a stuffed tiger's wisdom. Hand-crafted prompts with Leonardo AI character art.",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
    size: "standard",
    tags: ["Comic", "AI Humor", "Leonardo AI"],
    date: "2025",
  },
  {
    id: 8,
    category: "videos",
    title: "Krishna's Cosmic Dance",
    subtitle: "Vishwaroop Darshan",
    description:
      "A visual exploration of Krishna's universal form as described in the Bhagavad Gita, rendered through AI-assisted animation.",
    type: "youtube",
    youtubeId: "dQw4w9WgXcQ",
    size: "wide",
    tags: ["AI Video", "Krishna", "Bhagavad Gita"],
    date: "2025",
  },
  {
    id: 9,
    category: "ai-art",
    title: "Cosmic Mandala",
    subtitle: "Sacred Geometry × AI",
    description:
      "AI-generated mandalas blending sacred geometry with cosmic imagery. Each iteration reveals deeper patterns, much like meditation itself.",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80",
    size: "tall",
    tags: ["Leonardo AI", "Mandala", "Sacred Geometry"],
    date: "2025",
  },
  {
    id: 10,
    category: "photography",
    title: "Monsoon Memories",
    subtitle: "India Through My Lens",
    description:
      "A photographic journey through India's monsoon season — rain-washed streets, glistening temples, and the joy of the first rains.",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    size: "wide",
    tags: ["Photography", "India", "Monsoon"],
    date: "2025",
  },
  {
    id: 11,
    category: "videos",
    title: "Hanuman's Leap",
    subtitle: "Mythology Shorts",
    description:
      "A short-form mobile video capturing Hanuman's legendary leap across the ocean to Lanka, crafted with AI video generation tools.",
    type: "mobile-video",
    videoUrl: "/videos/hanuman-leap.mp4",
    posterUrl: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
    size: "standard",
    tags: ["AI Video", "Hanuman", "Short-Form"],
    date: "2025",
  },
  {
    id: 12,
    category: "photography",
    title: "Little Explorers",
    subtitle: "Family Adventures",
    description:
      "Documenting the wonder of childhood discovery — from backyard stargazing to first trips to the science centre.",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
    size: "standard",
    tags: ["Photography", "Family", "STEM"],
    date: "2025",
  },
  {
    id: 13,
    category: "photography",
    title: "Oakville Waterfront Series",
    subtitle: "A Walk Along the Pier",
    description:
      "Five moments captured during a golden-hour walk along Oakville's waterfront — from the lighthouse silhouette to the final amber glow over Lake Ontario.",
    type: "photo-panel",
    size: "full",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&q=80",
      "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=600&q=80",
    ],
    panelTitle: "Waterfront Golden Hour",
    tags: ["Photography", "Series", "Oakville", "Lake Ontario"],
    date: "2025",
  },
  {
    id: 14,
    category: "ai-art",
    title: "Deities of the Digital Age",
    subtitle: "Hindu Mythology × AI Art",
    description:
      "Five AI-generated portraits of Hindu deities reimagined in a futuristic digital aesthetic — blending sacred iconography with neon and circuitry.",
    type: "photo-panel",
    size: "full",
    images: [
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600&q=80",
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&q=80",
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
      "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=600&q=80",
    ],
    panelTitle: "Sacred × Digital",
    tags: ["AI Art", "Midjourney", "Hindu Mythology", "Futurism"],
    date: "2025",
  },
  {
    id: 15,
    category: "comics",
    title: "cAlvIn & Hobbes — Best of AI",
    subtitle: "Curated Comic Panels",
    description:
      "Three standout panels from the cAlvIn and Hobbes AI parody series — hand-picked moments where the comedy hits hardest.",
    type: "photo-panel",
    size: "full",
    images: [
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600&q=80",
    ],
    panelTitle: "Best of cAlvIn",
    tags: ["Comics", "Curated", "AI Parody"],
    date: "2025",
  },
];

/* ─── helper: video type badge icon ─── */
function MediaBadge({ type, isDark }) {
  const bg = isDark ? "rgba(249,234,225,0.15)" : "rgba(125,79,80,0.1)";
  const color = isDark ? PALETTE.mauve : PALETTE.indigoVelvet;
  const labels = { youtube: "YouTube", "mobile-video": "Mobile", image: "Photo", "photo-panel": "Series" };
  const icons = { youtube: "▶", "mobile-video": "📱", image: "◎", "photo-panel": "▤" };
  return (
    <span
      style={{
        position: "absolute",
        top: 18,
        left: 18,
        zIndex: 3,
        padding: "4px 10px",
        borderRadius: 100,
        background: bg,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        fontSize: 10,
        fontFamily: "var(--font-mono)",
        color,
        letterSpacing: 1.2,
        textTransform: "uppercase",
        display: "flex",
        alignItems: "center",
        gap: 4,
        border: `1px solid ${isDark ? "rgba(249,234,225,0.12)" : "rgba(125,79,80,0.08)"}`,
      }}
    >
      <span style={{ fontSize: 11 }}>{icons[type]}</span>
      {labels[type]}
    </span>
  );
}

/* ─── Lightbox Modal ─── */
function Lightbox({ work, onClose, isDark }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!work) return null;

  const accent = isDark ? PALETTE.mauveMagic : PALETTE.royalViolet;
  const textPrimary = isDark ? "rgba(255,255,255,0.92)" : "rgba(26,18,16,0.92)";
  const textSecondary = isDark ? "rgba(255,255,255,0.5)" : "rgba(26,18,16,0.55)";
  const cardBg = isDark ? "rgba(26,18,16,0.96)" : "rgba(255,255,255,0.97)";
  const border = isDark ? "rgba(204,139,134,0.12)" : "rgba(125,79,80,0.1)";

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && onClose()}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: isDark ? "rgba(20,14,12,0.88)" : "rgba(255,255,255,0.85)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        animation: "lbFadeIn 0.3s ease",
        padding: 24,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 900,
          maxHeight: "90vh",
          overflow: "auto",
          background: cardBg,
          borderRadius: 20,
          border: `1px solid ${border}`,
          boxShadow: isDark
            ? "0 40px 100px rgba(125,79,80,0.25)"
            : "0 40px 100px rgba(125,79,80,0.12)",
          animation: "lbSlideUp 0.35s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "sticky",
            top: 16,
            float: "right",
            marginRight: 16,
            marginTop: 16,
            zIndex: 10,
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: `1px solid ${border}`,
            background: isDark ? "rgba(36,0,70,0.8)" : "rgba(255,255,255,0.9)",
            color: textPrimary,
            cursor: "pointer",
            fontSize: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(8px)",
          }}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Media */}
        <div style={{ width: "100%", position: "relative" }}>
          {work.type === "photo-panel" ? (
            <div
              style={{
                borderRadius: "20px 20px 0 0",
                overflow: "hidden",
                padding: 20,
                background: isDark
                  ? `linear-gradient(135deg, ${PALETTE.darkAmethyst2}, ${PALETTE.darkAmethyst1})`
                  : `linear-gradient(135deg, #fdf5f0, #f9eae1)`,
                position: "relative",
              }}
            >
              {/* Subtle dot texture */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: isDark ? 0.04 : 0.06,
                  backgroundImage: `radial-gradient(${isDark ? PALETTE.mauveMagic : PALETTE.indigoVelvet} 1px, transparent 1px)`,
                  backgroundSize: "16px 16px",
                  zIndex: 0,
                  borderRadius: "20px 20px 0 0",
                }}
              />
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {work.images.map((url, imgIdx) => (
                  <div
                    key={imgIdx}
                    style={{
                      flex: "1 1 0",
                      maxWidth: work.images.length <= 3 ? 260 : "none",
                      borderRadius: 10,
                      overflow: "hidden",
                      border: `3px solid ${isDark ? PALETTE.indigoVelvet : PALETTE.mauve}`,
                      boxShadow: isDark
                        ? `0 6px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(204,139,134,0.08)`
                        : `0 6px 24px rgba(125,79,80,0.12), 0 0 0 1px rgba(125,79,80,0.05)`,
                      background: isDark ? "#1a1210" : "#fff",
                      position: "relative",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-6px) scale(1.03)";
                      e.currentTarget.style.boxShadow = isDark
                        ? `0 16px 40px rgba(125,79,80,0.35), 0 0 0 1px rgba(204,139,134,0.2)`
                        : `0 16px 40px rgba(125,79,80,0.18), 0 0 0 1px rgba(125,79,80,0.1)`;
                      e.currentTarget.style.zIndex = "10";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "";
                      e.currentTarget.style.boxShadow = isDark
                        ? `0 6px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(204,139,134,0.08)`
                        : `0 6px 24px rgba(125,79,80,0.12), 0 0 0 1px rgba(125,79,80,0.05)`;
                      e.currentTarget.style.zIndex = "";
                    }}
                  >
                    <img
                      src={url}
                      alt={`${work.title} — photo ${imgIdx + 1}`}
                      style={{
                        width: "100%",
                        aspectRatio: "3/4",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 8,
                        right: 8,
                        minWidth: 26,
                        height: 26,
                        padding: "0 7px",
                        borderRadius: 7,
                        background: isDark ? "rgba(26,18,16,0.8)" : "rgba(255,255,255,0.85)",
                        backdropFilter: "blur(8px)",
                        border: `1px solid ${isDark ? "rgba(204,139,134,0.3)" : "rgba(125,79,80,0.15)"}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        fontWeight: 600,
                        color: accent,
                      }}
                    >
                      {imgIdx + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : work.type === "youtube" ? (
            <div style={{ aspectRatio: "16/9", background: "#000", borderRadius: "20px 20px 0 0", overflow: "hidden" }}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${work.youtubeId}?rel=0`}
                title={work.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ display: "block" }}
              />
            </div>
          ) : work.type === "mobile-video" ? (
            <div
              style={{
                aspectRatio: "16/9",
                background: "#000",
                borderRadius: "20px 20px 0 0",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <video
                controls
                playsInline
                poster={work.posterUrl}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              >
                <source src={work.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <img
              src={work.imageUrl}
              alt={work.title}
              style={{
                width: "100%",
                maxHeight: 500,
                objectFit: "cover",
                borderRadius: "20px 20px 0 0",
                display: "block",
              }}
            />
          )}
        </div>

        {/* Info */}
        <div style={{ padding: "28px 32px 32px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: accent,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              display: "block",
              marginBottom: 8,
            }}
          >
            {work.subtitle}
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 30,
              fontWeight: 700,
              color: textPrimary,
              lineHeight: 1.2,
              marginBottom: 14,
              letterSpacing: "-0.5px",
            }}
          >
            {work.title}
          </h2>
          <p
            style={{
              fontSize: 15,
              color: textSecondary,
              lineHeight: 1.75,
              marginBottom: 20,
              maxWidth: 640,
            }}
          >
            {work.description}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
            {work.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "5px 12px",
                  borderRadius: 100,
                  fontSize: 11,
                  fontFamily: "var(--font-mono)",
                  letterSpacing: 0.5,
                  color: accent,
                  background: isDark ? "rgba(204,139,134,0.08)" : "rgba(125,79,80,0.06)",
                  border: `1px solid ${isDark ? "rgba(204,139,134,0.15)" : "rgba(125,79,80,0.1)"}`,
                }}
              >
                {tag}
              </span>
            ))}
            <span
              style={{
                marginLeft: "auto",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: textSecondary,
                letterSpacing: 1,
              }}
            >
              {work.date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function CreativeWorksV2() {
  const [isDark, setIsDark] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedWork, setSelectedWork] = useState(null);
  const [animateCards, setAnimateCards] = useState(true);

  const filteredWorks =
    activeCategory === "all"
      ? WORKS
      : WORKS.filter((w) => w.category === activeCategory);

  useEffect(() => {
    setAnimateCards(false);
    const t = setTimeout(() => setAnimateCards(true), 50);
    return () => clearTimeout(t);
  }, [activeCategory]);

  /* ─── theme tokens ─── */
  const t = isDark
    ? {
        bg: PALETTE.darkAmethyst1,
        bgGradient: `
          radial-gradient(ellipse 80% 50% at 15% 30%, ${PALETTE.indigoInk}22, transparent),
          radial-gradient(ellipse 60% 40% at 85% 60%, ${PALETTE.indigoVelvet}15, transparent),
          ${PALETTE.darkAmethyst1}
        `,
        cardBg: `rgba(42,31,29,0.35)`,
        cardBorder: "rgba(204,139,134,0.1)",
        cardHoverBorder: "rgba(204,139,134,0.3)",
        textPrimary: "rgba(249,234,225,0.92)",
        textSecondary: "rgba(249,234,225,0.45)",
        textMuted: "rgba(249,234,225,0.25)",
        accent: PALETTE.royalViolet,
        accentSoft: PALETTE.lavenderPurple,
        filterBg: "rgba(249,234,225,0.04)",
        filterBorder: "rgba(249,234,225,0.08)",
        filterActiveBg: `${PALETTE.royalViolet}22`,
        filterActiveBorder: `${PALETTE.royalViolet}55`,
        toggleBg: "rgba(249,234,225,0.06)",
        overlayGradient: `linear-gradient(180deg, transparent 30%, ${PALETTE.darkAmethyst1}cc 100%)`,
        glow: `0 8px 32px rgba(125,79,80,0.15)`,
        glass: "blur(20px) saturate(1.5)",
      }
    : {
        bg: "#fdf8f5",
        bgGradient: `
          radial-gradient(ellipse 80% 50% at 15% 30%, ${PALETTE.mauve}33, transparent),
          radial-gradient(ellipse 60% 40% at 85% 60%, ${PALETTE.lavenderPurple}22, transparent),
          #fdf8f5
        `,
        cardBg: "rgba(255,255,255,0.35)",
        cardBorder: "rgba(125,79,80,0.08)",
        cardHoverBorder: "rgba(125,79,80,0.2)",
        textPrimary: PALETTE.darkAmethyst1,
        textSecondary: "rgba(26,18,16,0.55)",
        textMuted: "rgba(26,18,16,0.28)",
        accent: PALETTE.indigoInk,
        accentSoft: PALETTE.indigoVelvet,
        filterBg: "rgba(125,79,80,0.04)",
        filterBorder: "rgba(125,79,80,0.1)",
        filterActiveBg: `${PALETTE.royalViolet}18`,
        filterActiveBorder: `${PALETTE.royalViolet}44`,
        toggleBg: "rgba(125,79,80,0.06)",
        overlayGradient: "linear-gradient(180deg, transparent 30%, rgba(253,248,245,0.85) 100%)",
        glow: `0 8px 32px ${PALETTE.indigoVelvet}18`,
        glass: "blur(20px) saturate(1.4)",
      };

  /* ─── bento grid sizing: map size → CSS grid spans ─── */
  const sizeMap = {
    large: { gridColumn: "span 2", gridRow: "span 2" },
    wide: { gridColumn: "span 2", gridRow: "span 1" },
    tall: { gridColumn: "span 1", gridRow: "span 2" },
    standard: { gridColumn: "span 1", gridRow: "span 1" },
    full: { gridColumn: "span 3", gridRow: "span 1" },
  };

  const categoryCount = (cat) =>
    cat === "all" ? WORKS.length : WORKS.filter((w) => w.category === cat).length;

  return (
    <div
      style={{
        background: t.bgGradient,
        minHeight: "100vh",
        transition: "background 0.5s ease",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Outfit:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <style>{`
        :root {
          --font-display: 'Cormorant Garamond', serif;
          --font-body: 'Outfit', sans-serif;
          --font-mono: 'DM Mono', monospace;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes lbFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes lbSlideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes shimmerLine {
          0% { background-position: -300% 0; }
          100% { background-position: 300% 0; }
        }

        .bento-card {
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border-top: 1px solid rgba(255,255,255,0.12);
          border-left: 1px solid rgba(255,255,255,0.08);
        }
        .bento-card:hover {
          transform: translateY(-6px) scale(1.015);
          z-index: 2;
        }
        .bento-card:hover .card-overlay {
          opacity: 1;
        }
        .bento-card:hover .card-img {
          transform: scale(1.06);
        }
        .bento-card:active {
          transform: translateY(-2px) scale(1.005);
        }

        .panel-photo-frame:hover {
          transform: translateY(-4px) scale(1.03) !important;
          box-shadow: 0 8px 32px rgba(125,79,80,0.25), 0 0 0 1px rgba(204,139,134,0.2) !important;
          z-index: 10;
        }

        .card-overlay {
          position: absolute;
          inset: 8px;
          border-radius: 10px;
          z-index: 2;
          opacity: 0;
          transition: opacity 0.35s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 20px;
        }
        .card-img {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .filter-chip {
          padding: 8px 18px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: var(--font-body);
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
          user-select: none;
          border: 1px solid;
        }

        .theme-toggle {
          width: 56px;
          height: 30px;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          position: relative;
          transition: background 0.35s ease;
          display: flex;
          align-items: center;
          padding: 3px;
        }
        .theme-toggle .knob {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
        }

        .play-icon-overlay {
          position: absolute;
          inset: 8px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }
        .play-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          transition: all 0.3s ease;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .bento-card:hover .play-btn {
          transform: scale(1.12);
        }

        .shimmer-line {
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, var(--shimmer-color) 50%, transparent 100%);
          background-size: 200% 100%;
          animation: shimmerLine 6s linear infinite;
        }

        @media (max-width: 768px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
          }
          .bento-card {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
          .panel-images-row {
            flex-direction: column !important;
          }
        }
      `}</style>

      {/* ═══ TOP BAR ═══ */}
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "32px 32px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          animation: "fadeInUp 0.5s ease both",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 10,
              background: `linear-gradient(135deg, ${PALETTE.royalViolet}, ${PALETTE.mauveMagic})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              fontWeight: 800,
              color: "#fff",
              fontFamily: "var(--font-display)",
            }}
          >
            S
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: t.textMuted,
              letterSpacing: 1.5,
            }}
          >
            suniliyer.ca
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Home button */}
          <a
            href="https://www.suniliyer.ca"
            className="home-btn"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              padding: "7px 16px",
              borderRadius: 100,
              background: isDark ? "rgba(204,139,134,0.08)" : "rgba(125,79,80,0.05)",
              border: `1px solid ${isDark ? "rgba(204,139,134,0.15)" : "rgba(125,79,80,0.1)"}`,
              color: t.accent,
              textDecoration: "none",
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: 0.3,
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = isDark
                ? "rgba(204,139,134,0.15)"
                : "rgba(125,79,80,0.1)";
              e.currentTarget.style.borderColor = isDark
                ? "rgba(204,139,134,0.3)"
                : "rgba(125,79,80,0.2)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = isDark
                ? "rgba(204,139,134,0.08)"
                : "rgba(125,79,80,0.05)";
              e.currentTarget.style.borderColor = isDark
                ? "rgba(204,139,134,0.15)"
                : "rgba(125,79,80,0.1)";
              e.currentTarget.style.transform = "";
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Home
          </a>

          {/* Theme toggle */}
          <button
          className="theme-toggle"
          onClick={() => setIsDark(!isDark)}
          style={{
            background: isDark
              ? `linear-gradient(135deg, ${PALETTE.darkAmethyst2}, ${PALETTE.indigoInk})`
              : `linear-gradient(135deg, ${PALETTE.mauve}44, ${PALETTE.mauveMagic}33)`,
            border: `1px solid ${isDark ? "rgba(204,139,134,0.15)" : "rgba(125,79,80,0.12)"}`,
          }}
          aria-label="Toggle theme"
        >
          <div
            className="knob"
            style={{
              transform: isDark ? "translateX(0)" : "translateX(26px)",
              background: isDark
                ? `linear-gradient(135deg, ${PALETTE.indigoVelvet}, ${PALETTE.royalViolet})`
                : `linear-gradient(135deg, ${PALETTE.mauveMagic}, ${PALETTE.lavenderPurple})`,
              boxShadow: isDark
                ? `0 2px 8px ${PALETTE.indigoVelvet}80`
                : `0 2px 8px ${PALETTE.mauveMagic}60`,
            }}
          >
            {isDark ? "🌙" : "☀️"}
          </div>
        </button>
        </div>
      </div>

      {/* ═══ HEADER ═══ */}
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "48px 32px 0",
          animation: "fadeInUp 0.6s ease both",
          animationDelay: "0.1s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <div
            style={{
              width: 28,
              height: 2,
              borderRadius: 2,
              background: `linear-gradient(90deg, ${t.accent}, transparent)`,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: t.accent,
              letterSpacing: 3,
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Creative Portfolio
          </span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 5.5vw, 68px)",
            fontWeight: 600,
            color: t.textPrimary,
            lineHeight: 1.08,
            letterSpacing: "-1px",
            marginBottom: 14,
            fontStyle: "italic",
            transition: "color 0.4s ease",
          }}
        >
          Where Code
          <br />
          Meets{" "}
          <span
            style={{
              background: `linear-gradient(135deg, ${PALETTE.indigoInk}, ${PALETTE.royalViolet}, ${PALETTE.lavenderPurple})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Canvas
          </span>
        </h1>
        <p
          style={{
            fontSize: 16,
            fontWeight: 400,
            color: t.textSecondary,
            maxWidth: 500,
            lineHeight: 1.65,
            marginBottom: 36,
            transition: "color 0.4s ease",
          }}
        >
          AI-generated videos, comics, digital art, and photography —
          exploring the intersection of technology, culture, and creativity.
        </p>
      </div>

      {/* ═══ FILTERS ═══ */}
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 32px 12px",
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          alignItems: "center",
          animation: "fadeInUp 0.6s ease both",
          animationDelay: "0.2s",
        }}
      >
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              className="filter-chip"
              onClick={() => setActiveCategory(cat.id)}
              style={{
                background: isActive ? t.filterActiveBg : t.filterBg,
                borderColor: isActive ? t.filterActiveBorder : t.filterBorder,
                color: isActive ? t.accent : t.textSecondary,
                fontWeight: isActive ? 600 : 400,
              }}
            >
              {cat.label}
              {isActive && (
                <span
                  style={{
                    background: `linear-gradient(135deg, ${PALETTE.royalViolet}, ${PALETTE.mauveMagic})`,
                    color: "#fff",
                    borderRadius: 100,
                    padding: "1px 8px",
                    fontSize: 11,
                    fontWeight: 700,
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {categoryCount(cat.id)}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Shimmer divider */}
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        <div
          className="shimmer-line"
          style={{ "--shimmer-color": isDark ? "rgba(204,139,134,0.18)" : "rgba(125,79,80,0.1)" }}
        />
      </div>

      {/* ═══ BENTO GRID ═══ */}
      <div
        className="bento-grid"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "28px 32px 64px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridAutoRows: 240,
          gap: 18,
        }}
      >
        {filteredWorks.map((work, i) => {
          const spans = sizeMap[work.size] || sizeMap.standard;
          const minH =
            work.size === "large"
              ? 498
              : work.size === "tall"
              ? 498
              : work.size === "wide"
              ? 240
              : work.size === "full"
              ? 320
              : 240;

          return (
            <div
              key={work.id}
              className="bento-card"
              onClick={() => setSelectedWork(work)}
              style={{
                ...spans,
                minHeight: minH,
                background: t.cardBg,
                border: `1px solid ${t.cardBorder}`,
                borderTop: `1px solid ${isDark ? "rgba(249,234,225,0.1)" : "rgba(255,255,255,0.5)"}`,
                borderLeft: `1px solid ${isDark ? "rgba(249,234,225,0.07)" : "rgba(255,255,255,0.35)"}`,
                boxShadow: `${t.glow}, inset 0 1px 0 ${isDark ? "rgba(249,234,225,0.04)" : "rgba(255,255,255,0.3)"}`,
                backdropFilter: t.glass,
                WebkitBackdropFilter: t.glass,
                ...(animateCards
                  ? {
                      animation: `fadeInUp 0.5s cubic-bezier(0.16,1,0.3,1) both`,
                      animationDelay: `${i * 0.06}s`,
                    }
                  : { opacity: 0 }),
                transition: "all 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = t.cardHoverBorder;
                e.currentTarget.style.boxShadow = isDark
                  ? `0 16px 60px ${PALETTE.indigoInk}30, inset 0 1px 0 rgba(249,234,225,0.06)`
                  : `0 16px 60px ${PALETTE.indigoVelvet}25, inset 0 1px 0 rgba(255,255,255,0.4)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = t.cardBorder;
                e.currentTarget.style.boxShadow = `${t.glow}, inset 0 1px 0 ${isDark ? "rgba(249,234,225,0.04)" : "rgba(255,255,255,0.3)"}`;
              }}
            >
              {/* ─── PHOTO PANEL RENDERING ─── */}
              {work.type === "photo-panel" ? (
                <>
                  {/* Panel surface background */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 8,
                      borderRadius: 10,
                      background: isDark
                        ? `linear-gradient(135deg, ${PALETTE.darkAmethyst2}, ${PALETTE.darkAmethyst1})`
                        : `linear-gradient(135deg, #fdf5f0, #f9eae1)`,
                      zIndex: 0,
                      overflow: "hidden",
                    }}
                  />
                  {/* Subtle texture pattern */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 8,
                      borderRadius: 10,
                      zIndex: 0,
                      opacity: isDark ? 0.04 : 0.06,
                      backgroundImage: `radial-gradient(${isDark ? PALETTE.mauveMagic : PALETTE.indigoVelvet} 1px, transparent 1px)`,
                      backgroundSize: "20px 20px",
                    }}
                  />

                  {/* Panel header */}
                  <div
                    style={{
                      position: "absolute",
                      top: 8,
                      left: 8,
                      right: 8,
                      zIndex: 6,
                      padding: "12px 20px",
                      borderRadius: "10px 10px 0 0",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: 15,
                          fontWeight: 700,
                          color: t.textPrimary,
                        }}
                      >
                        {work.title}
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        color: t.accent,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        background: isDark ? "rgba(204,139,134,0.08)" : "rgba(125,79,80,0.06)",
                        padding: "4px 10px",
                        borderRadius: 100,
                        border: `1px solid ${isDark ? "rgba(204,139,134,0.15)" : "rgba(125,79,80,0.1)"}`,
                      }}
                    >
                      {work.images.length} PHOTOS
                    </span>
                  </div>

                  {/* Individual framed photos */}
                  <div
                    style={{
                      position: "absolute",
                      top: 8,
                      left: 8,
                      right: 8,
                      bottom: 8,
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "42px 18px 40px",
                      gap: 14,
                      zIndex: 2,
                    }}
                  >
                    {work.images.map((url, imgIdx) => (
                      <div
                        key={imgIdx}
                        className="panel-photo-frame"
                        style={{
                          flex: "1 1 0",
                          maxWidth: work.images.length <= 3 ? 280 : "none",
                          height: "100%",
                          borderRadius: 10,
                          overflow: "hidden",
                          border: `3px solid ${
                            isDark ? PALETTE.indigoVelvet : PALETTE.mauve
                          }`,
                          boxShadow: isDark
                            ? `0 4px 20px rgba(0,0,0,0.5), 0 0 0 1px rgba(204,139,134,0.08)`
                            : `0 4px 20px rgba(125,79,80,0.12), 0 0 0 1px rgba(125,79,80,0.05)`,
                          position: "relative",
                          background: isDark ? "#1a1210" : "#fff",
                          transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease",
                        }}
                      >
                        <img
                          src={url}
                          alt={`${work.title} — photo ${imgIdx + 1}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                          }}
                        />
                        {/* Photo number badge */}
                        <div
                          style={{
                            position: "absolute",
                            bottom: 6,
                            right: 6,
                            zIndex: 4,
                            minWidth: 22,
                            height: 22,
                            padding: "0 6px",
                            borderRadius: 6,
                            background: isDark
                              ? "rgba(26,18,16,0.8)"
                              : "rgba(255,255,255,0.85)",
                            backdropFilter: "blur(8px)",
                            WebkitBackdropFilter: "blur(8px)",
                            border: `1px solid ${isDark ? "rgba(204,139,134,0.25)" : "rgba(125,79,80,0.12)"}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "var(--font-mono)",
                            fontSize: 10,
                            fontWeight: 600,
                            color: t.accent,
                          }}
                        >
                          {imgIdx + 1}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom info bar */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 8,
                      left: 8,
                      right: 8,
                      zIndex: 5,
                      padding: "8px 20px 10px",
                      borderRadius: "0 0 10px 10px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", gap: 6 }}>
                      {work.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          style={{
                            padding: "2px 8px",
                            borderRadius: 100,
                            fontSize: 9,
                            fontFamily: "var(--font-mono)",
                            color: isDark ? PALETTE.mauve : PALETTE.indigoVelvet,
                            background: isDark ? "rgba(249,234,225,0.1)" : "rgba(125,79,80,0.06)",
                            border: `1px solid ${isDark ? "rgba(249,234,225,0.12)" : "rgba(125,79,80,0.08)"}`,
                            letterSpacing: 0.5,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        color: t.textMuted,
                        letterSpacing: 1,
                      }}
                    >
                      {work.panelTitle} · {work.date}
                    </span>
                  </div>
                </>
              ) : (
              <>
              {/* ─── STANDARD CARD RENDERING ─── */}
              {/* Background image / video poster */}
              <div style={{ position: "absolute", inset: 8, borderRadius: 10, overflow: "hidden" }}>
                {work.type === "youtube" ? (
                  <img
                    className="card-img"
                    src={`https://img.youtube.com/vi/${work.youtubeId}/maxresdefault.jpg`}
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                ) : work.type === "mobile-video" ? (
                  <img
                    className="card-img"
                    src={work.posterUrl}
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <img
                    className="card-img"
                    src={work.imageUrl}
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                )}
                {/* Gradient overlay (always visible) */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: t.overlayGradient,
                    zIndex: 1,
                  }}
                />
              </div>

              {/* Media badge */}
              <MediaBadge type={work.type} isDark={isDark} />

              {/* Play button for videos */}
              {(work.type === "youtube" || work.type === "mobile-video") && (
                <div className="play-icon-overlay">
                  <div
                    className="play-btn"
                    style={{
                      background: isDark
                        ? "rgba(26,18,16,0.5)"
                        : "rgba(255,255,255,0.5)",
                      border: `1.5px solid ${isDark ? "rgba(204,139,134,0.3)" : "rgba(125,79,80,0.2)"}`,
                      color: t.accent,
                    }}
                  >
                    {work.type === "youtube" ? "▶" : "📱"}
                  </div>
                </div>
              )}

              {/* Hover overlay with info */}
              <div
                className="card-overlay"
                style={{ background: t.overlayGradient }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: t.accent,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    marginBottom: 6,
                    fontWeight: 500,
                  }}
                >
                  {work.subtitle}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: work.size === "large" || work.size === "wide" ? 22 : 17,
                    fontWeight: 700,
                    color: t.textPrimary,
                    lineHeight: 1.2,
                    marginBottom: 8,
                  }}
                >
                  {work.title}
                </h3>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {work.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "2px 8px",
                        borderRadius: 100,
                        fontSize: 9,
                        fontFamily: "var(--font-mono)",
                        color: isDark ? PALETTE.mauve : PALETTE.indigoVelvet,
                        background: isDark ? "rgba(249,234,225,0.1)" : "rgba(125,79,80,0.06)",
                        border: `1px solid ${isDark ? "rgba(249,234,225,0.12)" : "rgba(125,79,80,0.08)"}`,
                        letterSpacing: 0.5,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom info bar (always visible) */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  zIndex: 3,
                  padding: "14px 16px",
                  background:
                    isDark
                      ? "linear-gradient(180deg, transparent, rgba(26,18,16,0.85) 40%)"
                      : "linear-gradient(180deg, transparent, rgba(253,248,245,0.85) 40%)",
                }}
              >
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 14,
                    fontWeight: 600,
                    color: t.textPrimary,
                    lineHeight: 1.3,
                    marginBottom: 3,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {work.title}
                </h4>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: t.textMuted,
                    letterSpacing: 0.5,
                  }}
                >
                  {work.category.replace("-", " ").toUpperCase()}
                </span>
              </div>
              </>
              )}
            </div>
          );
        })}
      </div>

      {/* ═══ STATS FOOTER ═══ */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px 60px" }}>
        <div
          className="shimmer-line"
          style={{
            "--shimmer-color": isDark ? "rgba(204,139,134,0.15)" : "rgba(125,79,80,0.08)",
            marginBottom: 32,
          }}
        />
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 24 }}>
          {[
            { label: "Videos", count: WORKS.filter((w) => w.category === "videos").length, gradient: `linear-gradient(135deg, ${PALETTE.royalViolet}, ${PALETTE.mauveMagic})` },
            { label: "Comics", count: WORKS.filter((w) => w.category === "comics").length, gradient: `linear-gradient(135deg, ${PALETTE.lavenderPurple}, ${PALETTE.mauve})` },
            { label: "AI Art", count: WORKS.filter((w) => w.category === "ai-art").length, gradient: `linear-gradient(135deg, ${PALETTE.indigoVelvet}, ${PALETTE.royalViolet})` },
            { label: "Photos", count: WORKS.filter((w) => w.category === "photography").length, gradient: `linear-gradient(135deg, ${PALETTE.mauveMagic}, ${PALETTE.mauve})` },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center", flex: "1 1 100px" }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 36,
                  fontWeight: 700,
                  lineHeight: 1,
                  marginBottom: 6,
                  background: s.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.count}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: t.textMuted,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ LIGHTBOX ═══ */}
      {selectedWork && (
        <Lightbox
          work={selectedWork}
          onClose={() => setSelectedWork(null)}
          isDark={isDark}
        />
      )}
    </div>
  );
}
