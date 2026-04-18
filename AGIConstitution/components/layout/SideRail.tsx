'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// ─── Palette (matches ContactWidget exactly) ───────────────────────────────
const P = {
  spaceIndigo: '#22223B',
  dustyGrape: '#4A4E69',
  lilacAsh: '#9A8C98',
  almondSilk: '#C9ADA7',
  seashell: '#F2E9E4',
  accentOlive: '#333d29',
};

// ─── Section Data ──────────────────────────────────────────────────────────
const SECTIONS = [
  {
    id: 'intelligence',
    label: 'INTELLIGENCE',
    routes: ['/seshan', '/ai-agents', 'suniliyer.ca/seshan'],
    items: [
      {
        title: 'Seshan Intelligence',
        description: 'AI-powered business platform',
        image: '/images/portfolio/seshan-intelligence.webp',
        href: 'https://www.suniliyer.ca/seshan/demo/',
        external: true,
      },
      {
        title: 'Seshan Financial Dashboard',
        description: 'Analytics & reporting platform',
        image: '/images/portfolio/seshan-financial-dashboard.webp',
        href: 'https://seshan-navy.vercel.app/',
        external: true,
      },
      {
        title: 'AI Agents',
        description: 'Multi-agent orchestration',
        image: '/images/portfolio/AIagents.webp',
        href: 'https://ai-agents-rosy-mu.vercel.app',
        external: true,
      },
    ],
  },
  {
    id: 'leftbrain',
    label: 'THE LEFT BRAIN',
    routes: ['/gita', '/calvinhobbes', '/creative-works', '/mortgage-calculator'],
    items: [
      {
        title: 'Bhagavad Gita Journey',
        description: '10 transformative moments',
        image: '/images/portfolio/gita.webp',
        href: '/gita',
        external: false,
      },
      {
        title: 'cAlvIn and Hobbes',
        description: 'AI parody comics',
        image: '/images/portfolio/calvin-and-hobbes.webp',
        href: '/calvinhobbes',
        external: false,
      },
      {
        title: 'Creative Works',
        description: 'Art, video & photography',
        image: '/images/portfolio/creative-works.webp',
        href: '/creative-works',
        external: false,
      },
      {
        title: 'Mortgage Calculator',
        description: 'Financial planning tool',
        image: '/images/portfolio/mortgage-calculator.webp',
        href: '/mortgage-calculator',
        external: false,
      },
    ],
  },
  {
    id: 'monologue',
    label: 'THE INNER MONOLOGUE',
    routes: ['/history', '/terminology', '/risk', '/responsibility', '/future', '/articles'],
    items: [
      { title: 'History & Foundations', description: '8 articles', href: '/history', image: '', external: false },
      { title: 'Terminology & Concepts', description: '8 articles', href: '/terminology', image: '', external: false },
      { title: 'Risk & Ethics', description: '8 articles', href: '/risk', image: '', external: false },
      { title: 'Responsibility & Regulation', description: '8 articles', href: '/responsibility', image: '', external: false },
      { title: 'Future of AI', description: '8 articles', href: '/future', image: '', external: false },
    ],
  },
];

// ─── Hook: detect background luminance under the rail ─────────────────────
function useRailBgLuminance(active: boolean) {
  const [isDark, setIsDark] = useState(true);

  const measure = useCallback(() => {
    const el = document.elementFromPoint(60, window.innerHeight / 2);
    if (!el) return;
    let node = el as HTMLElement | null;
    while (node && node !== document.documentElement) {
      const bg = getComputedStyle(node).backgroundColor;
      if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
        const m = bg.match(/\d+/g);
        if (m) {
          const [r, g, b] = m.map(Number);
          const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          setIsDark(lum < 0.45);
        }
        return;
      }
      node = node.parentElement;
    }
  }, []);

  useEffect(() => {
    if (!active) return;
    const t = setTimeout(measure, 100);
    const onScroll = () => requestAnimationFrame(measure);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
    };
  }, [active, measure]);

  return isDark;
}

// ─── Panel Item: with thumbnail (Intelligence, Left Brain) ─────────────────
function PanelItemWithImage({
  item,
  isDark,
  onClose,
}: {
  item: (typeof SECTIONS)[0]['items'][0];
  isDark: boolean;
  onClose: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  const content = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 12px',
        borderRadius: 12,
        cursor: 'pointer',
        background: hovered
          ? isDark
            ? `${P.lilacAsh}18`
            : `${P.spaceIndigo}08`
          : 'transparent',
        transform: hovered ? 'translateX(4px)' : 'translateX(0)',
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 8,
          overflow: 'hidden',
          flexShrink: 0,
          background: isDark ? `${P.spaceIndigo}88` : `${P.lilacAsh}22`,
          position: 'relative',
        }}
      >
        {item.image && (
          <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} sizes="44px" />
        )}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: isDark ? P.seashell : P.spaceIndigo,
            fontFamily: 'var(--font-funnel-display), sans-serif',
            marginBottom: 2,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {item.title}
        </div>
        <div
          style={{
            fontSize: 11,
            color: P.lilacAsh,
            fontFamily: 'var(--font-funnel-sans), sans-serif',
          }}
        >
          {item.description}
        </div>
      </div>
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke={P.lilacAsh}
        strokeWidth="2"
        strokeLinecap="round"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translate(2px, -2px)' : 'translate(0, 0)',
          transition: 'all 0.2s ease',
          flexShrink: 0,
        }}
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </div>
  );

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} onClick={onClose}>
        {content}
      </a>
    );
  }
  return (
    <Link href={item.href} style={{ textDecoration: 'none' }} onClick={onClose}>
      {content}
    </Link>
  );
}

// ─── Panel Item: text only (Inner Monologue) ──────────────────────────────
function PanelItemText({
  item,
  isDark,
  onClose,
}: {
  item: (typeof SECTIONS)[0]['items'][0];
  isDark: boolean;
  onClose: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const pathname = usePathname();
  const isActive = pathname?.startsWith(item.href);

  return (
    <Link href={item.href} style={{ textDecoration: 'none' }} onClick={onClose}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '9px 12px',
          borderRadius: 10,
          cursor: 'pointer',
          background: hovered
            ? isDark
              ? `${P.lilacAsh}18`
              : `${P.spaceIndigo}08`
            : 'transparent',
          transform: hovered ? 'translateX(4px)' : 'translateX(0)',
          transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            flexShrink: 0,
            background: isActive ? P.accentOlive : isDark ? `${P.lilacAsh}66` : `${P.dustyGrape}44`,
            transition: 'background 0.2s',
          }}
        />
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: isActive ? 600 : 500,
              color: isActive
                ? P.accentOlive
                : isDark
                ? P.seashell
                : P.spaceIndigo,
              fontFamily: 'var(--font-funnel-sans), sans-serif',
            }}
          >
            {item.title}
          </div>
        </div>
        <div
          style={{
            fontSize: 11,
            color: P.lilacAsh,
            fontFamily: 'var(--font-funnel-sans), sans-serif',
          }}
        >
          {item.description}
        </div>
      </div>
    </Link>
  );
}

// ─── Panel Item: SUNIL section (Journey, Resume, Contact) ─────────────────
function SunilPanelItem({
  isDark,
  icon,
  label,
  desc,
  isActive,
}: {
  isDark: boolean;
  icon: string;
  label: string;
  desc: string;
  isActive: boolean;
  isButton?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '9px 12px',
        borderRadius: 10,
        background: hovered
          ? isDark
            ? `${P.lilacAsh}18`
            : `${P.spaceIndigo}08`
          : 'transparent',
        transform: hovered ? 'translateX(4px)' : 'translateX(0)',
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
      }}
    >
      <span
        style={{
          fontSize: 13,
          color: isActive ? P.accentOlive : isDark ? P.almondSilk : P.dustyGrape,
          flexShrink: 0,
        }}
      >
        {icon}
      </span>
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: isActive ? 600 : 500,
            color: isActive ? P.accentOlive : isDark ? P.seashell : P.spaceIndigo,
            fontFamily: 'var(--font-funnel-sans), sans-serif',
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: 11,
            color: P.lilacAsh,
            fontFamily: 'var(--font-funnel-sans), sans-serif',
          }}
        >
          {desc}
        </div>
      </div>
    </div>
  );
}

// ─── Hover Panel ──────────────────────────────────────────────────────────
function HoverPanel({
  section,
  isDark,
  isOpen,
  onClose,
  onPanelEnter,
  onPanelLeave,
}: {
  section: (typeof SECTIONS)[0];
  isDark: boolean;
  isOpen: boolean;
  onClose: () => void;
  onPanelEnter: () => void;
  onPanelLeave: () => void;
}) {
  const isMonologue = section.id === 'monologue';

  // Exact same glass recipe as ContactWidget's GlassCard
  const bg = isDark
    ? `linear-gradient(145deg, rgba(249,243,237,0.08), rgba(201,173,167,0.12) 50%, rgba(249,243,237,0.06))`
    : `linear-gradient(145deg, rgba(34,34,59,0.12), rgba(74,78,105,0.10) 50%, rgba(34,34,59,0.08))`;

  const borderColor = isDark ? `${P.lilacAsh}22` : 'rgba(255,255,255,0.7)';

  const shadow = isDark
    ? `0 10px 50px rgba(0,0,0,0.5), inset 0 1px 0 ${P.lilacAsh}12`
    : `0 8px 40px ${P.lilacAsh}22, inset 0 1px 0 rgba(255,255,255,0.9)`;

  const edgeHL = isDark ? `${P.lilacAsh}28` : 'rgba(255,255,255,0.95)';

  return (
    <div
      onMouseEnter={onPanelEnter}
      onMouseLeave={onPanelLeave}
      style={{
        position: 'absolute',
        left: '100%',
        top: '50%',
        transform: isOpen
          ? 'translateY(-50%) translateX(0) scale(1)'
          : 'translateY(-50%) translateX(-8px) scale(0.97)',
        width: isMonologue ? 280 : 300,
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'auto' : 'none',
        transition: 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        zIndex: 1002,
      }}
    >
      <div
        style={{
          position: 'relative',
          background: bg,
          backdropFilter: 'blur(32px) saturate(1.3)',
          WebkitBackdropFilter: 'blur(32px) saturate(1.3)',
          borderRadius: 24,
          border: `1px solid ${borderColor}`,
          boxShadow: shadow,
          padding: '22px 18px',
          overflow: 'hidden',
        }}
      >
        {/* Top edge highlight — exact ContactWidget style */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '10%',
            right: '10%',
            height: 1,
            background: `linear-gradient(90deg, transparent, ${edgeHL}, transparent)`,
            pointerEvents: 'none',
          }}
        />

        {/* Left edge accent — exact ContactWidget style */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: '12%',
            bottom: '12%',
            width: 3,
            borderRadius: '0 3px 3px 0',
            background: `linear-gradient(180deg, transparent, ${P.almondSilk}${isDark ? '55' : '88'}, ${P.lilacAsh}44, transparent)`,
            pointerEvents: 'none',
            boxShadow: isDark ? `0 0 10px ${P.almondSilk}12` : 'none',
          }}
        />

        {/* Section heading — matches ContactWidget "Let's Connect" style */}
        <div style={{ marginBottom: 16, paddingLeft: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <div
              style={{
                width: 22,
                height: 2,
                borderRadius: 2,
                background: `linear-gradient(90deg, ${P.almondSilk}, ${P.lilacAsh}66)`,
              }}
            />
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase' as const,
                color: P.almondSilk,
                fontFamily: 'var(--font-funnel-sans), sans-serif',
              }}
            >
              {section.label}
            </span>
          </div>
        </div>

        {/* Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {section.items.map((item) =>
            isMonologue ? (
              <PanelItemText key={item.href} item={item} isDark={isDark} onClose={onClose} />
            ) : (
              <PanelItemWithImage key={item.href} item={item} isDark={isDark} onClose={onClose} />
            )
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Rail Section Button ───────────────────────────────────────────────────
function RailSection({
  section,
  isDark,
  isActive,
  isOpen,
  onEnter,
  onLeave,
  onClose,
}: {
  section: (typeof SECTIONS)[0];
  isDark: boolean;
  isActive: boolean;
  isOpen: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onClose: () => void;
}) {
  return (
    <div style={{ position: 'relative' }}>
      {/* Active indicator */}
      {isActive && (
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 3,
            height: 24,
            borderRadius: '3px 0 0 3px',
            background: P.accentOlive,
          }}
        />
      )}

      {/* Label */}
      <div
        style={{
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          padding: '16px 0',
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '0.14em',
          color: isOpen || isActive
            ? isDark ? P.almondSilk : P.spaceIndigo
            : isDark ? `${P.lilacAsh}88` : `${P.dustyGrape}77`,
          fontFamily: 'var(--font-funnel-sans), sans-serif',
          cursor: 'pointer',
          transition: 'color 0.25s ease',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        {section.label}
      </div>

      {/* Panel */}
      <HoverPanel
        section={section}
        isDark={isDark}
        isOpen={isOpen}
        onClose={onClose}
        onPanelEnter={onEnter}
        onPanelLeave={onLeave}
      />
    </div>
  );
}

// ─── Mobile Overlay ───────────────────────────────────────────────────────
function MobileOverlay({
  isOpen,
  isDark,
  onClose,
}: {
  isOpen: boolean;
  isDark: boolean;
  onClose: () => void;
}) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const pathname = usePathname();

  const bg = isDark
    ? `rgba(34,34,59,0.97)`
    : `rgba(249,243,237,0.97)`;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1050,
        background: bg,
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'auto' : 'none',
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column',
        padding: '80px 32px 120px',
        overflowY: 'auto',
      }}
    >
      {/* Sections */}
      {SECTIONS.map((section) => {
        const isExpanded = openSection === section.id;
        const isActive = section.routes.some((r) => pathname?.startsWith(r));

        return (
          <div key={section.id} style={{ marginBottom: 8 }}>
            <button
              onClick={() => setOpenSection(isExpanded ? null : section.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 0',
                background: 'transparent',
                border: 'none',
                borderBottom: `1px solid ${isDark ? `${P.lilacAsh}22` : `${P.dustyGrape}18`}`,
                cursor: 'pointer',
                color: isActive || isExpanded
                  ? P.accentOlive
                  : isDark ? P.seashell : P.spaceIndigo,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '0.12em',
                fontFamily: 'var(--font-funnel-sans), sans-serif',
                textAlign: 'left',
                transition: 'color 0.2s',
              }}
            >
              {section.label}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                style={{
                  transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {isExpanded && (
              <div style={{ paddingTop: 8, paddingBottom: 8 }}>
                {section.items.map((item) => {
                  const inner = (
                    <div
                      style={{
                        padding: '10px 0',
                        color: pathname === item.href ? P.accentOlive : isDark ? P.seashell : P.spaceIndigo,
                        fontSize: 15,
                        fontWeight: pathname === item.href ? 600 : 400,
                        fontFamily: 'var(--font-funnel-sans), sans-serif',
                        borderBottom: `1px solid ${isDark ? `${P.lilacAsh}11` : `${P.dustyGrape}10`}`,
                      }}
                    >
                      {item.title}
                    </div>
                  );

                  return item.external ? (
                    <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} onClick={onClose}>
                      {inner}
                    </a>
                  ) : (
                    <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }} onClick={onClose}>
                      {inner}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}

      {/* Sunil section */}
      <div style={{ marginTop: 32 }}>
        <div
          style={{
            padding: '16px 0 8px',
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '0.12em',
            color: pathname === '/journey' ? P.accentOlive : isDark ? P.almondSilk : P.dustyGrape,
            fontFamily: 'var(--font-funnel-sans), sans-serif',
            borderTop: `1px solid ${isDark ? `${P.lilacAsh}22` : `${P.dustyGrape}18`}`,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <div style={{ width: 28, height: 28, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, position: 'relative', border: `1.5px solid ${pathname === '/journey' ? P.accentOlive : isDark ? `${P.almondSilk}66` : `${P.dustyGrape}44`}` }}>
            <Image src="/images/sunil.webp" alt="Sunil Iyer" fill sizes="28px" style={{ objectFit: 'cover' }} />
          </div>
          SUNIL IYER
        </div>
        <div style={{ paddingBottom: 8 }}>
          <Link href="/journey" style={{ textDecoration: 'none' }} onClick={onClose}>
            <div
              style={{
                padding: '10px 0',
                color: pathname === '/journey' ? P.accentOlive : isDark ? P.seashell : P.spaceIndigo,
                fontSize: 15,
                fontWeight: pathname === '/journey' ? 600 : 400,
                fontFamily: 'var(--font-funnel-sans), sans-serif',
                borderBottom: `1px solid ${isDark ? `${P.lilacAsh}11` : `${P.dustyGrape}10`}`,
              }}
            >
              Journey
            </div>
          </Link>
          <a href="/downloads/Sunil_Iyer_Resume.pdf" download style={{ textDecoration: 'none' }} onClick={onClose}>
            <div
              style={{
                padding: '10px 0',
                color: isDark ? P.seashell : P.spaceIndigo,
                fontSize: 15,
                fontWeight: 400,
                fontFamily: 'var(--font-funnel-sans), sans-serif',
              }}
            >
              Download Resume
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Main SideRail Component ──────────────────────────────────────────────
export function SideRail() {
  const pathname = usePathname();
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isDark = useRailBgLuminance(true);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenSection(null);
  }, [pathname]);

  const handleSectionEnter = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenSection(id);
  };

  const handleSectionLeave = () => {
    closeTimer.current = setTimeout(() => setOpenSection(null), 400);
  };

  const handlePanelEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const handlePanelLeave = () => {
    closeTimer.current = setTimeout(() => setOpenSection(null), 400);
  };

  const railBg = isDark
    ? `linear-gradient(180deg, rgba(249,243,237,0.06), rgba(201,173,167,0.09) 50%, rgba(249,243,237,0.05))`
    : `linear-gradient(180deg, rgba(34,34,59,0.05), rgba(74,78,105,0.07) 50%, rgba(34,34,59,0.04))`;

  const railBorder = isDark ? `${P.lilacAsh}18` : `rgba(255,255,255,0.6)`;

  // ── Mobile: just show hamburger ────────────────────────────────────────
  if (isMobile) {
    return (
      <>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          style={{
            position: 'fixed',
            top: 20,
            left: 20,
            zIndex: 1060,
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: isDark
              ? `linear-gradient(135deg, ${P.almondSilk}, ${P.lilacAsh})`
              : `linear-gradient(135deg, ${P.dustyGrape}, ${P.spaceIndigo})`,
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 4px 20px ${isDark ? `${P.lilacAsh}55` : `${P.dustyGrape}44`}`,
            transition: 'all 0.3s ease',
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isDark ? P.spaceIndigo : P.seashell}
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        <MobileOverlay isOpen={mobileOpen} isDark={isDark} onClose={() => setMobileOpen(false)} />
      </>
    );
  }

  // ── Desktop: side rail ────────────────────────────────────────────────
  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: 48,
          zIndex: 1001,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: railBg,
          backdropFilter: 'blur(24px) saturate(1.2)',
          WebkitBackdropFilter: 'blur(24px) saturate(1.2)',
          borderRight: `1px solid ${railBorder}`,
          transition: 'background 0.5s ease, border-color 0.5s ease',
        }}
      >
        {/* Top: Home dot */}
        <div style={{ position: 'absolute', top: 24, left: '50%', transform: 'translateX(-50%)' }}>
          <Link href="/" aria-label="Home">
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: pathname === '/'
                  ? P.accentOlive
                  : isDark ? `${P.almondSilk}88` : `${P.dustyGrape}66`,
                transition: 'background 0.3s ease, transform 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.5)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
              }}
            />
          </Link>
        </div>

        {/* Centre: Three sections */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
          }}
        >
          {SECTIONS.map((section) => {
            const isActive = section.routes.some((r) => pathname?.startsWith(r));
            const isOpen = openSection === section.id;

            return (
              <div
                key={section.id}
                onMouseEnter={() => handleSectionEnter(section.id)}
                onMouseLeave={handleSectionLeave}
                style={{ position: 'relative' }}
              >
                <RailSection
                  section={section}
                  isDark={isDark}
                  isActive={isActive}
                  isOpen={isOpen}
                  onEnter={() => handleSectionEnter(section.id)}
                  onLeave={handleSectionLeave}
                  onClose={() => setOpenSection(null)}
                />
                {/* Invisible bridge — fills gap between rail and panel so mouse doesn't exit */}
                {isOpen && (
                  <div
                    onMouseEnter={handlePanelEnter}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: '100%',
                      width: 8,
                      height: '100%',
                      minHeight: 200,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div
          style={{
            position: 'absolute',
            bottom: 120,
            left: '20%',
            right: '20%',
            height: 1,
            background: isDark ? `${P.lilacAsh}22` : `${P.dustyGrape}18`,
          }}
        />

        {/* Bottom: Profile image with hover panel */}
        <div
          style={{ position: 'absolute', bottom: 88 }}
          onMouseEnter={() => handleSectionEnter('sunil')}
          onMouseLeave={handleSectionLeave}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              overflow: 'hidden',
              cursor: 'pointer',
              border: `2px solid ${openSection === 'sunil' || pathname === '/journey'
                ? P.accentOlive
                : isDark ? `${P.almondSilk}66` : `${P.dustyGrape}55`}`,
              transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
              boxShadow: openSection === 'sunil' || pathname === '/journey'
                ? `0 0 0 2px ${P.accentOlive}44`
                : 'none',
              position: 'relative',
              flexShrink: 0,
            }}
          >
            <Image
              src="/images/sunil.webp"
              alt="Sunil Iyer"
              fill
              sizes="32px"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Sunil panel */}
          {openSection === 'sunil' && (
            <div
              onMouseEnter={handlePanelEnter}
              onMouseLeave={handleSectionLeave}
              style={{
                position: 'absolute',
                left: '100%',
                bottom: 0,
                width: 240,
                zIndex: 1002,
                marginLeft: 8,
              }}
            >
              <div
                style={{
                  position: 'relative',
                  background: isDark
                    ? `linear-gradient(145deg, rgba(249,243,237,0.08), rgba(201,173,167,0.12) 50%, rgba(249,243,237,0.06))`
                    : `linear-gradient(145deg, rgba(34,34,59,0.12), rgba(74,78,105,0.10) 50%, rgba(34,34,59,0.08))`,
                  backdropFilter: 'blur(32px) saturate(1.3)',
                  WebkitBackdropFilter: 'blur(32px) saturate(1.3)',
                  borderRadius: 24,
                  border: `1px solid ${isDark ? `${P.lilacAsh}22` : 'rgba(255,255,255,0.7)'}`,
                  boxShadow: isDark
                    ? `0 10px 50px rgba(0,0,0,0.5), inset 0 1px 0 ${P.lilacAsh}12`
                    : `0 8px 40px ${P.lilacAsh}22, inset 0 1px 0 rgba(255,255,255,0.9)`,
                  padding: '18px 16px',
                  overflow: 'hidden',
                }}
              >
                {/* Top edge highlight */}
                <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: 1, background: `linear-gradient(90deg, transparent, ${isDark ? `${P.lilacAsh}28` : 'rgba(255,255,255,0.95)'}, transparent)`, pointerEvents: 'none' }} />
                {/* Left accent */}
                <div style={{ position: 'absolute', left: 0, top: '12%', bottom: '12%', width: 3, borderRadius: '0 3px 3px 0', background: `linear-gradient(180deg, transparent, ${P.almondSilk}${isDark ? '55' : '88'}, ${P.lilacAsh}44, transparent)`, pointerEvents: 'none' }} />

                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, paddingLeft: 8 }}>
                  <div style={{ width: 22, height: 2, borderRadius: 2, background: `linear-gradient(90deg, ${P.almondSilk}, ${P.lilacAsh}66)` }} />
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: P.almondSilk, fontFamily: 'var(--font-funnel-sans), sans-serif' }}>SUNIL IYER</span>
                </div>

                {/* Journey */}
                <Link href="/journey" style={{ textDecoration: 'none' }} onClick={() => setOpenSection(null)}>
                  <SunilPanelItem isDark={isDark} icon="✦" label="Journey" desc="My story & background" isActive={pathname === '/journey'} />
                </Link>

                {/* Download Resume */}
                <a href="/downloads/Sunil_Iyer_Resume.pdf" download style={{ textDecoration: 'none' }}>
                  <SunilPanelItem isDark={isDark} icon="↓" label="Download Resume" desc="PDF · Updated 2026" isActive={false} />
                </a>

              </div>
            </div>
          )}
        </div>

        {/* Right-edge highlight */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: '10%',
            bottom: '10%',
            width: 1,
            background: `linear-gradient(180deg, transparent, ${isDark ? `${P.almondSilk}18` : 'rgba(255,255,255,0.6)'}, transparent)`,
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Backdrop for open panels */}
      {openSection && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            pointerEvents: 'none',
          }}
        />
      )}
    </>
  );
}
