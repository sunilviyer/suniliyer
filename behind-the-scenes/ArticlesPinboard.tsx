"use client";

import { useState, useRef, useEffect, useCallback } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────
type Category = "governance" | "builder" | "futurist" | "human";
type Status   = "published" | "soon" | "idea";

interface Article {
  id: number;
  title: string;
  description: string;
  category: Category;
  status: Status;
  readTime?: string;
  date?: string;
  link?: string;
  image?: string;
  isHero?: boolean;
  isSticky?: boolean;
  stickyText?: string;
  stickyBg?: string;
}

interface ThreadPath {
  key: string;
  color: string;
  d: string;
  x1: number; y1: number;
  x2: number; y2: number;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const ARTICLES: Article[] = [
  { id:1,  category:"builder",    status:"published", isHero:true,
    title:"Seshan: What 280 Hours of Building Taught Me About AI, Learning, and Letting Go of Perfection",
    description:"A raw, honest account of building an AI-powered platform — the wins, the failures, and what perfection actually costs.",
    readTime:"5 min read", date:"Feb 2026", link:"#",
    image:"https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80" },
  { id:2,  category:"builder",    status:"soon",      isHero:true,
    title:"Five AI Agents, One Portfolio: The Architecture Behind Automation",
    description:"How Scout, Ticker, Matcher, Quill, and Sage were built — and why the human never left the loop.",
    readTime:"8 min read", date:"Coming Soon",
    image:"https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80" },
  { id:3,  category:"futurist",   status:"published",
    title:"The Race to AGI: Who Is Doing What, Where We Stand, and the SSI Wildcard",
    description:"A clear-eyed map of who's building AGI, what strategies they're betting on, and what the SSI wildcard changes.",
    readTime:"5 min read", date:"Feb 2026", link:"#",
    image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80" },
  { id:4,  category:"governance", status:"published",
    title:"The New Gold Standard for AI Governance and Responsible AI",
    description:"What best-in-class AI governance actually looks like — and the frameworks organizations need to build it.",
    readTime:"4 min read", date:"May 2024", link:"#",
    image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { id:5,  category:"governance", status:"published",
    title:"Ensuring AI Implementations Are Fair, Explainable, Socially Beneficial and Human-Centric",
    description:"The four pillars that separate responsible AI deployment from checkbox compliance.",
    readTime:"3 min read", date:"May 2024", link:"#",
    image:"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80" },
  { id:6,  category:"governance", status:"published",
    title:"Responsibility of Responsible AI for Organizations",
    description:"Why AI responsibility isn't a team — it's a culture. And what organizations must do to build one.",
    readTime:"2 min read", date:"May 2024", link:"#",
    image:"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&q=80" },
  { id:7,  category:"governance", status:"soon",
    title:"Responsible AI: The Urgency Is Real, But the World Is Not Lost",
    description:"A practitioner's take on why we need to act now — without the panic.",
    readTime:"6 min read", date:"Coming Soon",
    image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { id:8,  category:"futurist",   status:"soon",
    title:"The Council of AI: When Multiple LLMs Debate, Everyone Wins",
    description:"Why asking one AI is like consulting one doctor — and what happens when you bring in the whole board.",
    readTime:"7 min read", date:"Coming Soon",
    image:"https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=400&q=80" },
  { id:9,  category:"human",      status:"soon",
    title:"20 Years, 100 Clients, One Rule",
    description:"The micromanager, the visionary, the numbers person — and what each one taught me about putting clients first.",
    readTime:"5 min read", date:"Coming Soon",
    image:"https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=80" },
  { id:10, category:"builder",    status:"idea", isSticky:true,
    title:"Vibe Coding Is Real: What Happens When a Non-Developer Builds a Full Stack App",
    description:"My honest account of building suniliyer.ca — without being a traditional developer.",
    stickyText:"Vibe Coding Is Real — what happens when a non-developer builds a full stack app",
    stickyBg:"linear-gradient(135deg,#f5e6cc,#ecd9b8)" },
  { id:11, category:"builder",    status:"idea", isSticky:true,
    title:"Why I Built Five Agents Instead of One: The Case Against the Swiss Army Knife",
    description:"The architectural philosophy behind keeping Scout, Ticker, Matcher, Quill and Sage beautifully separate.",
    stickyText:"Why I built five agents instead of one",
    stickyBg:"linear-gradient(135deg,#fde8df,#f5d5c8)" },
  { id:12, category:"governance", status:"idea", isSticky:true,
    title:"First, Do No Harm: Using the Hippocratic Oath to Guide Responsible AI",
    description:"Medicine's oldest ethical principle applied to AI governance — by a practitioner who's seen both sides.",
    stickyText:"Using the Hippocratic Oath to guide Responsible AI",
    stickyBg:"linear-gradient(135deg,#d8e8f5,#c8d8e8)" },
  { id:13, category:"futurist",   status:"idea", isSticky:true,
    title:"The Agentic Web: What Happens to the Internet When AI Does the Browsing",
    description:"Where does Google fit? Where do websites fit? Big, provocative questions about the next era of information.",
    stickyText:"The Agentic Web: what happens to the internet when AI does the browsing?",
    stickyBg:"linear-gradient(135deg,#e8f0f8,#d5e5f0)" },
  { id:14, category:"futurist",   status:"idea", isSticky:true,
    title:"AGI Is Not the Finish Line — Alignment Is",
    description:"Less about who gets to AGI first. More about what happens the morning after someone does.",
    stickyText:"AGI is not the finish line — Alignment is",
    stickyBg:"linear-gradient(135deg,#eaeef5,#d8dff0)" },
  { id:15, category:"human",      status:"idea", isSticky:true,
    title:"More stories from 20 years of people-first leadership",
    description:"More articles about people, teams, clients, and the human side of working in AI are on the way.",
    stickyText:"More leadership & people stories coming...",
    stickyBg:"linear-gradient(135deg,#e8fbfc,#d5f0f2)" },
];

// ─── Config ──────────────────────────────────────────────────────────────────
const CAT: Record<Category, { color: string; label: string; pinGrad: string; tagBg: string; tagColor: string }> = {
  governance: { color:"#3d5a80", label:"Governance",         pinGrad:"radial-gradient(circle at 35% 35%,#5a7fa8,#3d5a80)", tagBg:"#1c2d42", tagColor:"#c8dff0" },
  builder:    { color:"#ee6c4d", label:"Builder",            pinGrad:"radial-gradient(circle at 35% 35%,#f28a6e,#ee6c4d)", tagBg:"#38200f", tagColor:"#ffb89a" },
  futurist:   { color:"#98c1d9", label:"Futurist",           pinGrad:"radial-gradient(circle at 35% 35%,#b8d8ea,#98c1d9)", tagBg:"#182a38", tagColor:"#c8dff0" },
  human:      { color:"#e0fbfc", label:"Human & Leadership", pinGrad:"radial-gradient(circle at 35% 35%,#f0fdfe,#e0fbfc)", tagBg:"#182c30", tagColor:"#a0f8fc" },
};

const CATEGORIES = Object.keys(CAT) as Category[];
const TILTS = [-2.5, 1.8, -1.2, 2.8, -0.8, 2.2, -1.8, 1.2, -2.2];

// Group articles by category, preserving order
const BY_CAT: Record<Category, Article[]> = {
  governance: ARTICLES.filter(a => a.category === "governance"),
  builder:    ARTICLES.filter(a => a.category === "builder"),
  futurist:   ARTICLES.filter(a => a.category === "futurist"),
  human:      ARTICLES.filter(a => a.category === "human"),
};

// ─── Helpers ─────────────────────────────────────────────────────────────────
function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return mobile;
}

// ─── Sub-components ───────────────────────────────────────────────────────────
function Pushpin({ category, size = 18 }: { category: Category; size?: number }) {
  return (
    <div style={{
      position:"absolute", top: -size * 0.55, left:"50%",
      transform:"translateX(-50%)",
      zIndex:10, width:size, height:size, borderRadius:"50%",
      background: CAT[category].pinGrad,
      boxShadow:"0 2px 6px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.4)",
      pointerEvents:"none",
    }} />
  );
}

function StatusBadge({ status }: { status: Status }) {
  const cfg = {
    published:{ label:"Published",    bg:"#d4522e", color:"#fff"    },
    soon:     { label:"Coming Soon",  bg:"#2a4a6a", color:"#c8e8f5" },
    idea:     { label:"In the Works", bg:"#1e3a40", color:"#a0f0f8" },
  }[status];
  return (
    <span style={{
      position:"absolute", bottom:10, right:10,
      fontSize:"0.62rem", fontWeight:700, letterSpacing:"0.08em",
      textTransform:"uppercase", padding:"4px 10px", borderRadius:20,
      background:cfg.bg, color:cfg.color, zIndex:5, pointerEvents:"none",
    }}>{cfg.label}</span>
  );
}

function CategoryTag({ category }: { category: Category }) {
  return (
    <span style={{
      fontSize:"0.6rem", fontWeight:700, letterSpacing:"0.12em",
      textTransform:"uppercase", padding:"3px 10px", borderRadius:20,
      background: CAT[category].tagBg, color: CAT[category].tagColor,
      display:"inline-block", border:`1px solid ${CAT[category].color}44`,
    }}>{CAT[category].label}</span>
  );
}

// ─── Single Card ──────────────────────────────────────────────────────────────
function Card({ article, index, isFlipped, onFlip, isDimmed, style }: {
  article: Article; index: number; isFlipped: boolean;
  onFlip: () => void; isDimmed: boolean;
  style?: React.CSSProperties;
}) {
  const tilt   = TILTS[index % TILTS.length];
  const isHero = !!article.isHero;

  return (
    <div onClick={onFlip} style={{
      position:"relative", perspective:1000,
      opacity: isDimmed ? 0.2 : 1,
      transition:"opacity 0.3s ease",
      cursor:"pointer", contain:"layout",
      ...style,
    }}>
      <Pushpin category={article.category} />
      <div style={{
        position:"relative", width:"100%",
        paddingBottom: isHero ? "68%" : "138%",
        transformStyle:"preserve-3d",
        transition:"transform 0.6s cubic-bezier(0.4,0,0.2,1)",
        transform: isFlipped
          ? `rotate(${tilt}deg) rotateY(180deg)`
          : `rotate(${tilt}deg)`,
      }}>
        {/* FRONT */}
        <div style={{
          position:"absolute", inset:0, borderRadius:6,
          backfaceVisibility:"hidden", WebkitBackfaceVisibility:"hidden",
          overflow:"hidden", pointerEvents:"none",
          background: article.isSticky ? article.stickyBg : "#e8d5b7",
          boxShadow:"3px 5px 16px rgba(0,0,0,0.4)",
          display: article.isSticky ? "flex" : "block",
          alignItems:"center", justifyContent:"center",
          padding: article.isSticky ? 20 : 0, textAlign:"center",
        }}>
          {article.isSticky
            ? <p style={{ fontFamily:"'Caveat',cursive", fontSize:"1.1rem", lineHeight:1.4, color:"#1a1a1a", fontWeight:600 }}>{article.stickyText}</p>
            : <><img src={article.image} alt={article.title} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} /><StatusBadge status={article.status} /></>
          }
        </div>
        {/* BACK */}
        <div style={{
          position:"absolute", inset:0, borderRadius:6,
          backfaceVisibility:"hidden", WebkitBackfaceVisibility:"hidden",
          transform:"rotateY(180deg)", overflow:"hidden", pointerEvents:"none",
          background:"linear-gradient(155deg,#2a3c55 0%,#1c2d42 55%,#16243a 100%)",
          border:"1px solid rgba(255,255,255,0.12)",
          boxShadow:"0 16px 48px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.15)",
          display:"flex", flexDirection:"column",
          padding: isHero ? "22px 18px 18px" : "16px 13px 13px",
          gap: isHero ? 11 : 7,
        }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)", pointerEvents:"none" }} />
          <CategoryTag category={article.category} />
          <p style={{ fontFamily:"'Playfair Display',serif", fontSize: isHero ? "1.05rem" : "0.9rem", lineHeight:1.35, color:"#f0fcff", flex:1 }}>{article.title}</p>
          <p style={{ fontSize: isHero ? "0.8rem" : "0.72rem", color:"#c8dff0", lineHeight:1.5 }}>{article.description}</p>
          <div style={{ display:"flex", justifyContent:"space-between", fontSize:"0.68rem", color:"rgba(200,223,240,0.7)", paddingTop:6, borderTop:"1px solid rgba(255,255,255,0.1)" }}>
            <span>{article.readTime ?? "In Progress"}</span>
            <span>{article.date ?? "2026"}</span>
          </div>
          {article.status === "published" && article.link
            ? <a href={article.link} onClick={e => e.stopPropagation()} style={{ display:"block", padding:"9px 14px", borderRadius:20, fontSize:"0.75rem", fontWeight:700, textDecoration:"none", textAlign:"center", fontFamily:"'DM Sans',sans-serif", background:"#ee6c4d", color:"#fff", boxShadow:"0 4px 14px rgba(238,108,77,0.4)", pointerEvents:"auto" }}>Read on Medium →</a>
            : <span style={{ display:"block", padding:"9px 14px", borderRadius:20, fontSize:"0.75rem", textAlign:"center", fontFamily:"'DM Sans',sans-serif", background:"#1a2535", color:"#c8dff0", border:"1px solid rgba(152,193,217,0.35)" }}>{article.status === "soon" ? "Coming Soon" : "In the Works"}</span>
          }
        </div>
      </div>
    </div>
  );
}

// ─── Stack (collapsed cluster) ────────────────────────────────────────────────
function Stack({ category, count, onExpand }: {
  category: Category; count: number; onExpand: () => void;
}) {
  const offsets = [
    { x: 0,  y: 0,  rot: -2   },
    { x: 4,  y: 3,  rot: 2.5  },
    { x: -3, y: 6,  rot: -1.5 },
  ];
  return (
    <div onClick={onExpand} style={{ position:"relative", width:"100%", paddingBottom:"138%", cursor:"pointer" }}>
      <Pushpin category={category} size={22} />
      {offsets.slice(0, Math.min(count, 3)).reverse().map((o, i) => (
        <div key={i} style={{
          position:"absolute", inset:0,
          transform:`translate(${o.x}px,${o.y}px) rotate(${o.rot}deg)`,
          background: i === offsets.slice(0, Math.min(count,3)).length - 1 ? "#e8d5b7" : "#dfc9a8",
          borderRadius:6,
          boxShadow:"2px 4px 12px rgba(0,0,0,0.35)",
          zIndex: i,
        }} />
      ))}
      {/* Top card shows category color strip */}
      <div style={{
        position:"absolute", inset:0, borderRadius:6, zIndex:4,
        background:"#e8d5b7",
        boxShadow:"3px 5px 16px rgba(0,0,0,0.4)",
        display:"flex", flexDirection:"column",
        alignItems:"center", justifyContent:"center", gap:10,
      }}>
        <div style={{ width:40, height:4, borderRadius:2, background: CAT[category].color, opacity:0.8 }} />
        <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.7rem", fontWeight:700, color:"#5a3a1a", letterSpacing:"0.08em", textTransform:"uppercase" }}>{CAT[category].label}</p>
        <div style={{
          background: CAT[category].color, color:"#fff",
          fontSize:"0.65rem", fontWeight:700, padding:"3px 10px",
          borderRadius:20, letterSpacing:"0.06em",
        }}>{count} articles</div>
        <p style={{ fontSize:"0.6rem", color:"rgba(90,58,26,0.6)", fontFamily:"'DM Sans',sans-serif" }}>tap to expand</p>
      </div>
    </div>
  );
}

// ─── Threads SVG ──────────────────────────────────────────────────────────────
function Threads({ containerRef, activeId, collapsed }: {
  containerRef: React.RefObject<HTMLDivElement | null>;
  activeId: number | null;
  collapsed: Set<Category>;
}) {
  const [paths, setPaths] = useState<ThreadPath[]>([]);

  const compute = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const boardRect = el.getBoundingClientRect();
    const groups: Record<Category, { x: number; y: number }[]> = { governance:[], builder:[], futurist:[], human:[] };

    el.querySelectorAll<HTMLElement>("[data-category]").forEach(card => {
      const cat = card.dataset.category as Category;
      if (!groups[cat]) return;
      const r = card.getBoundingClientRect();
      groups[cat].push({ x: r.left - boardRect.left + r.width / 2, y: r.top - boardRect.top + 8 });
    });

    const result: ThreadPath[] = [];
    (Object.entries(groups) as [Category, { x:number; y:number }[]][]).forEach(([cat, pts]) => {
      if (pts.length < 2) return;
      const color = CAT[cat].color;
      for (let i = 0; i < pts.length - 1; i++) {
        const a = pts[i], b = pts[i+1];
        const mx = (a.x+b.x)/2, my = (a.y+b.y)/2 + 30;
        result.push({ key:`${cat}-${i}`, color, d:`M${a.x},${a.y} Q${mx},${my} ${b.x},${b.y}`, x1:a.x, y1:a.y, x2:b.x, y2:b.y });
      }
    });
    setPaths(result);
  }, [containerRef]);

  useEffect(() => {
    const t = setTimeout(compute, 400);
    window.addEventListener("resize", compute);
    return () => { clearTimeout(t); window.removeEventListener("resize", compute); };
  }, [compute, collapsed]);

  return (
    <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none", zIndex: activeId !== null ? 55 : 150 }} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {paths.map(p => (
          <linearGradient key={`g-${p.key}`} id={`g-${p.key}`} gradientUnits="userSpaceOnUse" x1={p.x1} y1={p.y1} x2={p.x2} y2={p.y2}>
            <stop offset="0%"  stopColor={p.color} stopOpacity="0.9" />
            <stop offset="50%" stopColor={p.color} stopOpacity="0.25" />
            <stop offset="100%" stopColor={p.color} stopOpacity="0.9" />
          </linearGradient>
        ))}
      </defs>
      {paths.map(p => (
        <path key={p.key} d={p.d} fill="none" stroke={`url(#g-${p.key})`} strokeWidth={2.5} strokeLinecap="round" />
      ))}
    </svg>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function ArticlesPinboard() {
  const [activeId,   setActiveId]   = useState<number | null>(null);
  const [collapsed,  setCollapsed]  = useState<Set<Category>>(() => {
    // Mobile starts all collapsed, desktop starts all expanded
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return new Set<Category>(CATEGORIES);
    }
    return new Set<Category>();
  });
  const [dealing,    setDealing]    = useState<Set<Category>>(new Set());
  const boardRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // On first mobile render, collapse all
  useEffect(() => {
    if (isMobile) setCollapsed(new Set(CATEGORIES));
  }, [isMobile]);

  function toggleCategory(cat: Category) {
    setActiveId(null);
    const isCollapsed = collapsed.has(cat);

    if (isCollapsed) {
      // Expand — deal cards out with staggered animation
      setDealing(prev => new Set(prev).add(cat));
      if (isMobile) {
        // Auto-collapse all others, expand only this one
        setCollapsed(new Set(CATEGORIES.filter(c => c !== cat)));
      } else {
        setCollapsed(prev => { const s = new Set(prev); s.delete(cat); return s; });
      }
      setTimeout(() => setDealing(prev => { const s = new Set(prev); s.delete(cat); return s; }), 600);
    } else {
      setCollapsed(prev => new Set(prev).add(cat));
    }
  }

  type GridItem =
    | { type: "card"; article: Article; catIndex: number }
    | { type: "stack"; category: Category };

  const allItems: GridItem[] = [];

  (["builder","governance","futurist","human"] as Category[]).forEach(cat => {
    if (collapsed.has(cat)) {
      allItems.push({ type:"stack", category:cat });
    } else {
      BY_CAT[cat].forEach((a, i) => allItems.push({ type:"card", article:a, catIndex:i }));
    }
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600&family=Caveat:wght@500&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }

        @keyframes dealCard {
          from { opacity:0; transform:translateY(-24px) scale(0.9) rotate(0deg); }
          to   { opacity:1; transform:none; }
        }
        @keyframes collapseCard {
          from { opacity:1; transform:none; }
          to   { opacity:0; transform:translateY(-20px) scale(0.92); }
        }
        .deal { animation: dealCard 0.45s cubic-bezier(0.34,1.56,0.64,1) both; }
      `}</style>

      <div style={{ background:"#293241", minHeight:"100vh", fontFamily:"'DM Sans',sans-serif" }}>

        {/* Header */}
        <div style={{ textAlign:"center", padding:"140px 20px 36px" }}>
          <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(2rem,5vw,3.4rem)", color:"#e0fbfc", letterSpacing:"-0.02em", marginBottom:10 }}>
            Thoughts & Writings
          </h1>
          <p style={{ color:"#b8d8ee", fontSize:"1rem", fontWeight:400 }}>
            Ideas pinned to the board — tap a cluster to fan it out.
          </p>
        </div>

        {/* Category buttons — double as collapse/expand triggers */}
        <div style={{ display:"flex", justifyContent:"center", gap:10, padding:"0 20px 44px", flexWrap:"wrap" }}>
          {(["builder","governance","futurist","human"] as Category[]).map(cat => {
            const isCollapsed = collapsed.has(cat);
            return (
              <button key={cat} onClick={() => toggleCategory(cat)} style={{
                display:"flex", alignItems:"center", gap:8,
                padding:"9px 18px", borderRadius:50,
                border: isCollapsed ? `1px solid ${CAT[cat].color}88` : `1px solid ${CAT[cat].color}`,
                background: isCollapsed ? "#2c3a50" : "#3d4e68",
                color:"#fff",
                fontFamily:"'DM Sans',sans-serif", fontSize:"0.8rem", fontWeight:600,
                letterSpacing:"0.06em", textTransform:"uppercase",
                cursor:"pointer", transition:"all 0.25s ease",
                opacity: isCollapsed ? 0.7 : 1,
              }}>
                <span style={{ width:9, height:9, borderRadius:"50%", background: CAT[cat].color, flexShrink:0 }} />
                {CAT[cat].label}
                <span style={{ fontSize:"0.65rem", opacity:0.8, marginLeft:2 }}>
                  {isCollapsed ? "▸" : "▾"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Corkboard */}
        <div style={{ maxWidth:1300, margin:"0 auto", padding:"0 24px 80px" }}>

          {/* Hidden SVG filters */}
          <svg width="0" height="0" style={{ position:"absolute" }}>
            <defs>
              <filter id="cork-texture" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence type="turbulence" baseFrequency="0.65 0.15" numOctaves="4" seed="8" result="noise" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.62 0 0 0 0 0.42 0 0 0 0 0.22 0 0 0 1 0" in="noise" result="coloredNoise" />
                <feBlend in="SourceGraphic" in2="coloredNoise" mode="multiply" result="blended" />
                <feComposite in="blended" in2="SourceGraphic" operator="in" />
              </filter>
            </defs>
          </svg>

          <div ref={boardRef} style={{
            position:"relative", borderRadius:16,
            padding: isMobile ? "32px 16px 40px" : "44px 36px 56px",
            boxShadow:"0 0 0 6px #6b4820, 0 0 0 12px #4a2e0e, 0 0 0 14px #8B6340, 0 28px 70px rgba(0,0,0,0.75)",
            minHeight: isMobile ? 400 : 900,
            isolation:"isolate", overflow:"hidden",
            background:"#b07a45",
          }}>
            {/* Cork texture layers */}
            <div style={{ position:"absolute", inset:0, zIndex:0, borderRadius:16, background:`radial-gradient(ellipse at 15% 20%,#c8924e 0%,transparent 40%),radial-gradient(ellipse at 85% 75%,#9a6530 0%,transparent 35%),radial-gradient(ellipse at 50% 50%,#b87840 0%,transparent 60%),linear-gradient(160deg,#c09050 0%,#a87038 30%,#b88040 60%,#986030 100%)` }} />
            <div style={{ position:"absolute", inset:0, zIndex:0, borderRadius:16, backgroundImage:`repeating-linear-gradient(0deg,transparent 0px,transparent 2px,rgba(80,45,10,0.12) 2px,rgba(80,45,10,0.12) 3px,transparent 3px,transparent 6px,rgba(120,70,20,0.08) 6px,rgba(120,70,20,0.08) 7px,transparent 7px,transparent 11px,rgba(60,30,5,0.10) 11px,rgba(60,30,5,0.10) 12px,transparent 12px,transparent 18px),repeating-linear-gradient(2deg,transparent 0px,transparent 8px,rgba(100,55,15,0.06) 8px,rgba(100,55,15,0.06) 9px,transparent 9px,transparent 20px)` }} />
            <div style={{ position:"absolute", inset:0, zIndex:0, borderRadius:16, background:`radial-gradient(ellipse at 50% 50%,transparent 40%,rgba(40,20,5,0.35) 100%)` }} />

            <Threads containerRef={boardRef} activeId={activeId} collapsed={collapsed} />

            {/* Dark overlay when card flipped */}
            {activeId !== null && (
              <div onClick={() => setActiveId(null)} style={{ position:"absolute", inset:0, background:"rgba(15,20,32,0.80)", zIndex:50, borderRadius:16 }} />
            )}

            <p style={{ fontFamily:"'Caveat',cursive", fontSize:"1.05rem", color:"rgba(60,30,10,0.65)", marginBottom:28, textAlign:"center", letterSpacing:"0.05em", position:"relative", zIndex:2 }}>
              pinned thoughts, published and in progress
            </p>

            {/* Grid */}
            <div style={{
              position:"relative", zIndex: activeId !== null ? 60 : 2,
              display:"grid",
              gridTemplateColumns: isMobile
                ? "repeat(2, 1fr)"
                : "repeat(auto-fill, minmax(188px, 1fr))",
              gap: isMobile ? "24px 16px" : "30px 22px",
              alignItems:"start",
            }}>
              {allItems.map((item, i) => {
                if (item.type === "stack") {
                  return (
                    <div key={`stack-${item.category}`} data-category={item.category} style={{ position:"relative", zIndex:2 }}>
                      <Stack category={item.category} count={BY_CAT[item.category].length} onExpand={() => toggleCategory(item.category)} />
                    </div>
                  );
                }

                const { article, catIndex } = item;
                const isFlipped = activeId === article.id;
                const isDimmed  = activeId !== null && !isFlipped;
                const isDealing = dealing.has(article.category);

                return (
                  <div
                    key={article.id}
                    data-category={article.category}
                    className={isDealing ? "deal" : ""}
                    style={{
                      animationDelay: isDealing ? `${catIndex * 55}ms` : "0ms",
                      gridColumn: article.isHero && !isMobile ? "span 2" : "span 1",
                      position:"relative",
                      zIndex: isFlipped ? 100 : 2,
                      transition:"opacity 0.35s ease, transform 0.35s ease",
                      opacity: isDimmed ? 0.2 : 1,
                    }}
                  >
                    <Card
                      article={article}
                      index={catIndex}
                      isFlipped={isFlipped}
                      onFlip={() => setActiveId(prev => prev === article.id ? null : article.id)}
                      isDimmed={isDimmed}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
