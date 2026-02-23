'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

/* ═══════════════════════════════════════════════════════════════
   BHAGAVAD GITA - TEN MOMENTS OF TRANSFORMATION
   V3: 4-Panel Layout with Transparent Overlay Design
   ═══════════════════════════════════════════════════════════════ */

// ─── Color Palettes ─────────────────────────────────────────────
const darkPalette = {
  bg: '#03071E',
  bgSecondary: '#370617',
  accent1: '#6A040F',
  accent2: '#9D0208',
  accent3: '#D00000',
  accent4: '#DC2F02',
  accent5: '#E85D04',
  accent6: '#F48C06',
  accent7: '#FAA307',
  highlight: '#FFBA08',
  text: '#ffffff',
  textMuted: '#cccccc',
  textSubtle: '#888888',
  cardBg: 'rgba(3, 7, 30, 0.82)',
  headerBg: 'rgba(3, 7, 30, 0.0)',
  footerBg: 'rgba(3, 7, 30, 0.0)',
  overlay: 'rgba(3, 7, 30, 0.7)',
  panelBg: 'rgba(3, 7, 30, 0.85)',
};

const lightPalette = {
  bg: '#FAF7F2',
  bgSecondary: '#EDE8E0',
  accent1: '#8B4513',
  accent2: '#A0522D',
  accent3: '#CD853F',
  accent4: '#D2691E',
  accent5: '#E85D04',
  accent6: '#F48C06',
  accent7: '#DAA520',
  highlight: '#B8860B',
  text: '#2C1810',
  textMuted: '#5C4033',
  textSubtle: '#8B7355',
  cardBg: 'rgba(255, 255, 255, 0.92)',
  headerBg: 'rgba(250, 247, 242, 0.0)',
  footerBg: 'rgba(250, 247, 242, 0.0)',
  overlay: 'rgba(250, 247, 242, 0.4)',
  panelBg: 'rgba(250, 247, 242, 0.88)',
};

const getMomentColors = (isDark: boolean) => isDark ? [
  '#370617', '#6A040F', '#9D0208', '#D00000', '#DC2F02',
  '#E85D04', '#F48C06', '#FAA307', '#FFBA08', '#FFFFFF'
] : [
  '#8B4513', '#A0522D', '#CD853F', '#D2691E', '#E85D04',
  '#F48C06', '#DAA520', '#B8860B', '#D4AF37', '#2C1810'
];

interface Moment {
  id: number;
  title: string;
  chapter: string;
  sanskrit: string;
  transliteration: string;
  translation: string;
  context: string;
  innerMeaning: string;
  practical: string;
  imageUrl: string;
}

const moments: Moment[] = [
  {
    id: 1,
    title: "Arjuna's Collapse",
    chapter: "1-2",
    sanskrit: "न योत्स्य इति गोविन्दम् उक्त्वा तूष्णीं बभूव ह",
    transliteration: "na yotsya iti govindam uktvā tūṣṇīṁ babhūva ha",
    translation: "\"I shall not fight,\" said Arjuna to Krishna, and became silent.",
    context: "Arjuna, the mighty warrior, sees his teachers, uncles, and cousins on the opposing side. His bow slips from his hands. He cannot act.",
    innerMeaning: "This is the universal moment of paralysis — when duty conflicts with love, when action seems impossible, when we face choices that have no clean answers.",
    practical: "Have you ever been frozen by a decision where every option felt wrong? This is where the teaching begins.",
    imageUrl: "/gita/moment-01-collapse.webp"
  },
  {
    id: 2,
    title: "The Eternal Self",
    chapter: "2.12",
    sanskrit: "न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः",
    transliteration: "na tvevāhaṁ jātu nāsaṁ na tvaṁ neme janādhipāḥ",
    translation: "Never was there a time when I did not exist, nor you, nor these kings; nor shall we ever cease to be.",
    context: "Krishna's first revelation: You are not the body. What you truly are was never born and will never die.",
    innerMeaning: "The foundation of all that follows. If you understand this one truth, everything changes. Fear of death dissolves. Fear of loss softens.",
    practical: "What remains constant in you, despite all the changes you've been through? That unchanging witness — that is what Krishna points to.",
    imageUrl: "/gita/moment-02-eternal-self.webp"
  },
  {
    id: 3,
    title: "The Steady One",
    chapter: "2.54-72",
    sanskrit: "स्थितप्रज्ञस्य का भाषा समाधिस्थस्य केशव",
    transliteration: "sthita-prajñasya kā bhāṣā samādhi-sthasya keśava",
    translation: "What are the signs of one whose wisdom is steady? How do they speak, sit, walk?",
    context: "Arjuna asks a practical question: What does an enlightened person actually look like in daily life?",
    innerMeaning: "Krishna describes a person unmoved by pleasure or pain, without craving or aversion, fully present. Not detached from life, but unshaken by its waves.",
    practical: "This is your north star. Not a distant god, but a way of being. How would you act today if you were unshaken?",
    imageUrl: "/gita/moment-03-steady-one.webp"
  },
  {
    id: 4,
    title: "Action Without Attachment",
    chapter: "2.47",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
    transliteration: "karmaṇy evādhikāras te mā phaleṣu kadācana",
    translation: "You have the right to action alone, never to its fruits.",
    context: "The most quoted verse. Often misunderstood as \"don't care about results.\" It's deeper than that.",
    innerMeaning: "Act fully, skillfully, with complete dedication — but release your grip on outcomes. The anxiety isn't in the action, it's in the clinging to results.",
    practical: "What would you do differently today if you focused entirely on the quality of your effort, not the reward?",
    imageUrl: "/gita/moment-04-action.webp"
  },
  {
    id: 5,
    title: "The Restless Mind",
    chapter: "6.34-35",
    sanskrit: "चञ्चलं हि मनः कृष्ण प्रमाथि बलवद् दृढम्",
    transliteration: "cañcalaṁ hi manaḥ kṛṣṇa pramāthi balavad dṛḍham",
    translation: "The mind is restless, turbulent, powerful, obstinate. I think it is as hard to control as the wind.",
    context: "Arjuna voices what every meditator feels. Krishna doesn't dismiss it — he agrees, and offers the way.",
    innerMeaning: "By practice and dispassion, the mind can be stilled. Not by force, but by patient, repeated return. The wind can be worked with.",
    practical: "Your mind will wander ten thousand times. The practice is simply: notice, and return. That's it. That's the whole path.",
    imageUrl: "/gita/moment-05-restless-mind.webp"
  },
  {
    id: 6,
    title: "Devotion",
    chapter: "9.29",
    sanskrit: "समोऽहं सर्वभूतेषु न मे द्वेष्योऽस्ति न प्रियः",
    transliteration: "samo 'haṁ sarva-bhūteṣu na me dveṣyo 'sti na priyaḥ",
    translation: "I am the same to all beings. None is hateful to me, none dear. But those who worship me with devotion — they are in me, and I am in them.",
    context: "The path of the heart. Not everyone reaches truth through analysis. Some arrive through love.",
    innerMeaning: "The divine doesn't play favorites — but those who turn toward it find themselves held. This is not transaction. It's relationship.",
    practical: "What do you love so completely that you lose yourself in it? That dissolution of self — that's the door.",
    imageUrl: "/gita/moment-06-devotion.webp"
  },
  {
    id: 7,
    title: "At the Moment of Death",
    chapter: "8.5-6",
    sanskrit: "अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम्",
    transliteration: "anta-kāle ca mām eva smaran muktvā kalevaram",
    translation: "Whoever, at the time of death, leaves the body remembering Me alone, attains My being. Of this there is no doubt.",
    context: "Arjuna asks directly: What happens when we die? Krishna answers: The final thought shapes what follows.",
    innerMeaning: "This isn't about a deathbed prayer. It's about what you practice becoming. What you remember in crisis is what you've cultivated in peace.",
    practical: "If your life ended today, what would your mind naturally turn to? That reveals where your practice truly is.",
    imageUrl: "/gita/moment-07-death.webp"
  },
  {
    id: 8,
    title: "The Cosmic Form",
    chapter: "11",
    sanskrit: "पश्यादित्यान्वसून्रुद्रानश्विनौ मरुतस्तथा",
    transliteration: "paśyādityān vasūn rudrān aśvinau marutas tathā",
    translation: "Behold the Ādityas, Vasus, Rudras, the twin Ashvins, and the Maruts. Behold, Arjuna, wonders never seen before.",
    context: "Arjuna asks to see Krishna's true form. He is granted divine sight. What he sees overwhelms him with awe.",
    innerMeaning: "The infinite cannot be domesticated. When Arjuna glimpses totality — creation and destruction, all beings entering and exiting — he is overcome with wonder.",
    practical: "Sometimes growth means encountering what is too vast to hold. The awe. The beauty. The mystery that doesn't fit in your categories.",
    imageUrl: "/gita/moment-08-cosmic-form.webp"
  },
  {
    id: 9,
    title: "The Three Gunas",
    chapter: "14",
    sanskrit: "सत्त्वं रजस्तम इति गुणाः प्रकृतिसम्भवाः",
    transliteration: "sattvaṁ rajas tama iti guṇāḥ prakṛti-sambhavāḥ",
    translation: "Sattva, Rajas, Tamas — these three qualities born of nature bind the imperishable soul to the body.",
    context: "Krishna gives Arjuna a framework for understanding his own mind: clarity (sattva), agitation (rajas), inertia (tamas).",
    innerMeaning: "You are not your moods. These are patterns of energy that move through you. See them, name them, and you begin to be free of their grip.",
    practical: "Right now — are you clear and calm? Restless and driven? Heavy and stuck? Just noticing is the first step.",
    imageUrl: "/gita/moment-09-gunas.webp"
  },
  {
    id: 10,
    title: "Surrender",
    chapter: "18.66",
    sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज",
    transliteration: "sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja",
    translation: "Abandoning all dharmas, take refuge in Me alone. I shall free you from all sins. Do not grieve.",
    context: "The final teaching. After 18 chapters of paths and practices, Krishna offers the simplest instruction: Let go. Trust. Come to Me.",
    innerMeaning: "This isn't abandoning ethics. It's releasing the ego's grip on being the doer. After all the effort — surrender the effort itself.",
    practical: "What are you still trying to control? What would it feel like to set that down, just for a moment?",
    imageUrl: "/gita/moment-10-surrender.webp"
  },
];

const getNodePosition = (index: number, total: number, radius: number) => {
  const angleStep = (2 * Math.PI) / total;
  const angle = -Math.PI / 2 + angleStep * index;
  return { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius };
};

// ─── Panel Position Configs ─────────────────────────────────────
const panelPositions = {
  desktop: [
    { top: '160px', left: '50%', transform: 'translateX(-50%)', maxWidth: '480px', width: '90%' },
    { top: '50%', left: '24px', transform: 'translateY(-50%)', maxWidth: '320px', width: '28%' },
    { top: '50%', right: '24px', transform: 'translateY(-50%)', maxWidth: '320px', width: '28%' },
    { bottom: '80px', left: '50%', transform: 'translateX(-50%)', maxWidth: '520px', width: '90%' },
  ],
  mobile: [
    { position: 'relative' as const, width: '100%', marginBottom: '12px' },
    { position: 'relative' as const, width: '100%', marginBottom: '12px' },
    { position: 'relative' as const, width: '100%', marginBottom: '12px' },
    { position: 'relative' as const, width: '100%', marginBottom: '12px' },
  ],
};

const slideDirections = [
  { from: 'translateX(-50%) translateY(-30px)', to: 'translateX(-50%) translateY(0)' },
  { from: 'translateY(-50%) translateX(-40px)', to: 'translateY(-50%) translateX(0)' },
  { from: 'translateY(-50%) translateX(40px)', to: 'translateY(-50%) translateX(0)' },
  { from: 'translateX(-50%) translateY(30px)', to: 'translateX(-50%) translateY(0)' },
];

const panelLabels = [
  { label: 'श्लोक', subtitle: 'The Verse' },
  { label: 'प्रसंग', subtitle: 'The Scene' },
  { label: 'अर्थ', subtitle: 'Inner Meaning' },
  { label: 'आज', subtitle: 'For You, Today' },
];

interface SelectedMoment extends Moment {
  accentColor: string;
}

// ─── Floating Action Button for layers ──────────────────────────
const LayerDot = ({ index, active, onClick, color, palette, isMobile }: {
  index: number;
  active: boolean;
  onClick: () => void;
  color: string;
  palette: typeof darkPalette;
  isMobile: boolean;
}) => (
  <button
    onClick={onClick}
    style={{
      width: active ? (isMobile ? 32 : 36) : (isMobile ? 10 : 12),
      height: isMobile ? 10 : 12,
      borderRadius: 20,
      border: `1.5px solid ${active ? color : palette.textSubtle}`,
      backgroundColor: active ? color : 'transparent',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
      opacity: active ? 1 : 0.5,
      padding: 0,
    }}
    title={panelLabels[index].subtitle}
  />
);

// ─── Main Component ─────────────────────────────────────────────
export default function GitaExperience() {
  const [mode, setMode] = useState<'navigation' | 'reading'>('navigation');
  const [selectedMoment, setSelectedMoment] = useState<SelectedMoment | null>(null);
  const [activeLayer, setActiveLayer] = useState(0);
  const [visibleLayers, setVisibleLayers] = useState(new Set([0]));
  const [orbitAngle, setOrbitAngle] = useState(0);
  const [chakraVisible, setChakraVisible] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showHint, setShowHint] = useState(false);

  const palette = isDarkMode ? darkPalette : lightPalette;
  const momentColors = getMomentColors(isDarkMode);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Sync with global theme from TopNav
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = saved === 'dark' || (!saved && prefersDark);
    setIsDarkMode(shouldBeDark);

    const handleThemeChange = () => {
      const saved = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const shouldBeDark = saved === 'dark' || (!saved && prefersDark);
      setIsDarkMode(shouldBeDark);
    };

    window.addEventListener('storage', handleThemeChange);
    window.addEventListener('themeChange', handleThemeChange);

    return () => {
      window.removeEventListener('storage', handleThemeChange);
      window.removeEventListener('themeChange', handleThemeChange);
    };
  }, []);

  useEffect(() => {
    if (mode !== 'navigation') return;
    const interval = setInterval(() => {
      setOrbitAngle(prev => (prev + 0.7) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, [mode]);

  // Show onboarding hint after 1.5s whenever returning to navigation mode
  useEffect(() => {
    if (mode !== 'navigation') return;
    const showTimer = setTimeout(() => setShowHint(true), 1500);
    const hideTimer = setTimeout(() => {
      setShowHint(false);
    }, 7000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [mode]);

  const handleNodeClick = (moment: Moment, index: number) => {
    setShowHint(false);
    setSelectedMoment({ ...moment, accentColor: momentColors[index] });
    setActiveLayer(0);
    setVisibleLayers(new Set([0]));
    setChakraVisible(false);
    setTimeout(() => {
      setMode('reading');
      setTimeout(() => setContentVisible(true), 100);
    }, 500);
  };

  const handleClose = () => {
    setContentVisible(false);
    setTimeout(() => {
      setMode('navigation');
      setSelectedMoment(null);
      setActiveLayer(0);
      setVisibleLayers(new Set([0]));
      setTimeout(() => setChakraVisible(true), 100);
    }, 400);
  };

  const handleLayerProgress = useCallback(() => {
    if (activeLayer < 3) {
      const next = activeLayer + 1;
      setActiveLayer(next);
      setVisibleLayers(prev => new Set([...prev, next]));
    }
  }, [activeLayer]);

  const handleLayerClick = useCallback((index: number) => {
    if (visibleLayers.has(index)) {
      setActiveLayer(index);
    }
  }, [visibleLayers]);

  const radius = isMobile ? 137.5 : 200;
  const orbitRad = (orbitAngle * Math.PI) / 180;
  const orbitX = Math.cos(orbitRad - Math.PI / 2) * radius;
  const orbitY = Math.sin(orbitRad - Math.PI / 2) * radius;

  // ─── Panel Content Builders ─────────────────────────────────
  const renderPanelContent = (layerIndex: number) => {
    if (!selectedMoment) return null;

    switch (layerIndex) {
      case 0: // Sanskrit verse — top
        return (
          <div style={{ textAlign: 'center' }}>
            <p style={{
              fontFamily: "'Tiro Devanagari Hindi', serif",
              color: palette.highlight,
              fontSize: isMobile ? '1rem' : '1.2rem',
              lineHeight: 1.7,
              marginBottom: 6,
              textShadow: isDarkMode ? `0 0 20px ${palette.highlight}22` : 'none',
            }}>
              {selectedMoment.sanskrit}
            </p>
            <p style={{
              fontFamily: "'Laila', serif",
              color: palette.accent7,
              fontSize: isMobile ? '0.65rem' : '0.72rem',
              fontStyle: 'italic',
              opacity: 0.7,
              marginBottom: 10,
            }}>
              {selectedMoment.transliteration}
            </p>
            <p style={{
              fontFamily: "'Laila', serif",
              color: palette.text,
              fontSize: isMobile ? '0.85rem' : '0.9rem',
              lineHeight: 1.7,
            }}>
              &ldquo;{selectedMoment.translation}&rdquo;
            </p>
          </div>
        );

      case 1: // Context — left
        return (
          <p style={{
            fontFamily: "'Laila', serif",
            color: palette.textMuted,
            fontSize: isMobile ? '0.82rem' : '0.88rem',
            lineHeight: 1.75,
          }}>
            {selectedMoment.context}
          </p>
        );

      case 2: // Inner Meaning — right
        return (
          <p style={{
            fontFamily: "'Laila', serif",
            color: palette.textMuted,
            fontSize: isMobile ? '0.82rem' : '0.88rem',
            lineHeight: 1.75,
          }}>
            {selectedMoment.innerMeaning}
          </p>
        );

      case 3: // Practical — bottom
        return (
          <div style={{
            borderLeft: `3px solid ${palette.highlight}`,
            paddingLeft: 16,
          }}>
            <p style={{
              fontFamily: "'Laila', serif",
              color: palette.text,
              fontSize: isMobile ? '0.85rem' : '0.9rem',
              lineHeight: 1.75,
              fontStyle: 'italic',
            }}>
              {selectedMoment.practical}
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  // ─── Render ─────────────────────────────────────────────────
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Yatra+One&family=Laila:wght@300;400;500&family=Tiro+Devanagari+Hindi&family=Khand:wght@400;500&display=swap" rel="stylesheet" />

      <div style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Laila', serif",
        backgroundColor: palette.bg,
        position: 'relative',
        overflow: 'hidden',
        transition: 'background-color 0.5s ease',
      }}>

        {/* ═══ BACKGROUND IMAGE LAYER ═══ */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          transition: 'opacity 0.8s ease',
        }}>
          {/* Base radial color */}
          <div style={{
            position: 'absolute', inset: 0,
            background: selectedMoment
              ? `radial-gradient(ellipse at center, ${selectedMoment.accentColor}${isDarkMode ? '33' : '22'} 0%, ${palette.bg} 70%)`
              : `radial-gradient(ellipse at center, ${palette.bgSecondary}${isDarkMode ? '22' : '33'} 0%, ${palette.bg} 80%)`,
            transition: 'background 0.8s ease',
          }} />

          {/* Master image for navigation mode */}
          {mode === 'navigation' && (
            <div style={{
              position: 'absolute',
              inset: 0,
              opacity: isDarkMode ? 0.35 : 0.25,
              transition: 'opacity 0.8s ease',
            }}>
              <img
                src="/gita/master.webp"
                alt="Bhagavad Gita"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          )}

          {/* Image layer — all moments use their specific images */}
          {mode === 'reading' && selectedMoment && (
            <div style={{
              position: 'absolute',
              inset: 0,
              opacity: isDarkMode ? 0.55 : 0.4,
              transition: 'opacity 0.8s ease',
            }}>
              <img
                src={selectedMoment.imageUrl}
                alt={selectedMoment.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          )}

          {/* Soft vignette for readability */}
          <div style={{
            position: 'absolute', inset: 0,
            background: mode === 'reading'
              ? `radial-gradient(ellipse at center, transparent 30%, ${palette.overlay} 100%)`
              : `radial-gradient(ellipse at center, transparent 30%, ${isDarkMode ? 'rgba(3,7,30,0.3)' : 'rgba(250,247,242,0.3)'} 100%)`,
            transition: 'background 0.8s ease',
          }} />

          {/* Subtle texture */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            opacity: isDarkMode ? 0.03 : 0.02,
          }} />
        </div>

        {/* ═══ HEADER — fully transparent ═══ */}
        <header style={{
          position: 'absolute',
          top: isMobile ? '70px' : '100px',
          left: 0,
          right: 0,
          zIndex: 30,
          padding: isMobile ? '10px 14px' : '14px 24px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'transparent',
          transition: 'all 0.5s ease',
        }}>
          {/* Center: Title or moment info */}
          {mode === 'navigation' ? (
            <div style={{ textAlign: 'center', flex: 1 }}>
              <h1 style={{
                fontFamily: "'Tiro Devanagari Hindi', serif",
                color: palette.highlight,
                fontSize: isMobile ? '1.5rem' : '1.8rem',
                fontWeight: 400,
                marginBottom: 2,
                textShadow: isDarkMode ? `0 0 30px ${palette.highlight}33` : 'none',
              }}>
                भगवद्गीता
              </h1>
              <p style={{
                fontFamily: "'Yatra One', system-ui",
                color: palette.accent7,
                fontSize: isMobile ? '0.45rem' : '0.55rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                opacity: 0.85,
              }}>
                Ten Moments of Transformation
              </p>
            </div>
          ) : (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1, justifyContent: 'center' }}>
                <span style={{
                  fontFamily: "'Yatra One', system-ui",
                  color: palette.text,
                  fontSize: isMobile ? '0.9rem' : '1.1rem',
                  opacity: 0.9,
                }}>
                  {selectedMoment?.title}
                </span>
                <span style={{
                  fontFamily: "'Khand', sans-serif",
                  color: selectedMoment?.accentColor || palette.accent7,
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  opacity: 0.7,
                }}>
                  Ch. {selectedMoment?.chapter}
                </span>
              </div>

              {/* Close button */}
              <button
                onClick={handleClose}
                style={{
                  position: 'absolute',
                  right: isMobile ? '14px' : '24px',
                  background: 'none', border: 'none',
                  fontFamily: "'Khand', sans-serif",
                  color: palette.accent7, fontSize: isMobile ? '1.2rem' : '1.4rem',
                  cursor: 'pointer', opacity: 0.7,
                  transition: 'opacity 0.3s ease', padding: '4px 8px',
                }}
                onMouseOver={(e) => ((e.target as HTMLElement).style.opacity = '1')}
                onMouseOut={(e) => ((e.target as HTMLElement).style.opacity = '0.7')}
              >
                ✕
              </button>
            </>
          )}
        </header>

        {/* ═══ MAIN CONTENT ═══ */}
        <main style={{
          flex: 1,
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>

          {/* ─── NAVIGATION MODE: Chakra ─── */}
          {mode === 'navigation' && (
            <div style={{
              position: 'relative',
              width: radius * 2 + 100,
              height: radius * 2 + 100,
              opacity: chakraVisible ? 1 : 0,
              transform: chakraVisible ? 'scale(1)' : 'scale(0.9)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}>
              <svg
                style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'visible' }}
                viewBox={`${-radius - 50} ${-radius - 50} ${(radius + 50) * 2} ${(radius + 50) * 2}`}
              >
                <defs>
                  <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={palette.bgSecondary} />
                    <stop offset="50%" stopColor={palette.accent2} />
                    <stop offset="100%" stopColor={palette.highlight} />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>

                {/* Spokes */}
                {moments.map((_, index) => {
                  const pos = getNodePosition(index, 10, radius);
                  return <line key={`spoke-${index}`} x1={pos.x} y1={pos.y} x2="0" y2="0" stroke={palette.highlight} strokeWidth="2" opacity="0.4" />;
                })}

                {/* Ring */}
                <circle cx="0" cy="0" r={radius} fill="none" stroke="url(#ringGradient)" strokeWidth="3" opacity="0.6" />

                {/* Orbiting Pulse */}
                <g>
                  <circle cx={orbitX} cy={orbitY} r="14" fill={palette.highlight} opacity="0.15" filter="url(#glow)">
                    <animate attributeName="r" values="12;18;12" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx={orbitX} cy={orbitY} r="6" fill={palette.accent7} opacity="0.6">
                    <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx={orbitX} cy={orbitY} r="3" fill={palette.highlight} />
                </g>

                {/* Center circle - outer glow ring */}
                <circle cx="0" cy="0" r="38" fill="none" stroke={palette.highlight} strokeWidth="1" opacity="0.2">
                  <animate attributeName="r" values="36;42;36" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.15;0.35;0.15" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="0" cy="0" r="32" fill={isDarkMode ? 'rgba(3,7,30,0.6)' : 'rgba(255,255,255,0.6)'} stroke={palette.accent2} strokeWidth="1" opacity="0.8" />
              </svg>

              {/* Center — Sage figure link */}
              <a
                href="https://ai-agents-rosy-mu.vercel.app/agents/sage"
                target="_blank"
                rel="noopener noreferrer"
                className="sage-center"
                style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  width: isMobile ? '60px' : '72px',
                  height: isMobile ? '60px' : '72px',
                  animation: 'sageBounce 3s ease-in-out infinite',
                }}
              >
                {/* Sage SVG — meditating figure */}
                <svg
                  width={isMobile ? 44 : 54}
                  height={isMobile ? 44 : 54}
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: 'block', overflow: 'visible' }}
                >
                  {/* Aura glow */}
                  <circle cx="27" cy="27" r="26" fill={palette.highlight} opacity="0.07" />
                  {/* Halo */}
                  <circle cx="27" cy="10" r="6" fill="none" stroke={palette.highlight} strokeWidth="1.2" opacity="0.7" />
                  {/* Head */}
                  <circle cx="27" cy="13" r="5" fill={palette.accent7} opacity="0.9" />
                  {/* Body / robe */}
                  <path d="M18 42 Q21 26 27 24 Q33 26 36 42 Z" fill={palette.accent6} opacity="0.75" />
                  {/* Left arm resting */}
                  <path d="M20 30 Q16 35 14 38" stroke={palette.accent7} strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                  {/* Right arm resting */}
                  <path d="M34 30 Q38 35 40 38" stroke={palette.accent7} strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                  {/* Crossed legs */}
                  <path d="M14 38 Q20 44 27 43 Q34 44 40 38" stroke={palette.accent6} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.85" />
                  {/* Left hand mudra dot */}
                  <circle cx="14" cy="38" r="2" fill={palette.highlight} opacity="0.9" />
                  {/* Right hand mudra dot */}
                  <circle cx="40" cy="38" r="2" fill={palette.highlight} opacity="0.9" />
                </svg>

                {/* Hover tooltip */}
                <span
                  className="sage-label"
                  style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginBottom: 8,
                    fontFamily: "'Khand', sans-serif",
                    fontSize: isMobile ? '0.52rem' : '0.6rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: palette.accent7,
                    whiteSpace: 'nowrap',
                    opacity: 0,
                    transition: 'opacity 0.25s ease, transform 0.25s ease',
                    pointerEvents: 'none',
                    background: isDarkMode ? 'rgba(3,7,30,0.9)' : 'rgba(255,255,255,0.92)',
                    padding: '4px 10px',
                    borderRadius: 20,
                    border: `1px solid ${palette.accent2}55`,
                    boxShadow: `0 2px 12px rgba(0,0,0,0.3)`,
                  }}
                >
                  Chat with the Sage
                </span>
              </a>

              {/* Nodes */}
              {moments.map((moment, index) => {
                const pos = getNodePosition(index, 10, radius);
                // Decide tooltip position: top half of circle shows tooltip below, bottom half above
                const angle = -Math.PI / 2 + (2 * Math.PI / 10) * index;
                const tooltipBelow = Math.sin(angle) < 0; // node is in top half
                return (
                  <div
                    key={moment.id}
                    className="chakra-node"
                    onClick={() => handleNodeClick(moment, index)}
                    onMouseOver={(e) => (e.currentTarget.style.transform = `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px)) scale(1.15)`)}
                    onMouseOut={(e) => (e.currentTarget.style.transform = `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px)) scale(1)`)}
                    style={{
                      position: 'absolute', left: '50%', top: '50%',
                      transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`,
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <div style={{
                      width: isMobile ? 36 : 44,
                      height: isMobile ? 36 : 44,
                      borderRadius: '50%',
                      backgroundColor: isDarkMode ? 'rgba(3,7,30,0.8)' : 'rgba(255,255,255,0.9)',
                      border: `2px solid ${momentColors[index]}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: isDarkMode ? `0 0 15px rgba(3,7,30,0.8)` : `0 0 15px rgba(0,0,0,0.1)`,
                      transition: 'all 0.3s ease',
                    }}>
                      <span style={{
                        fontFamily: "'Khand', sans-serif",
                        color: palette.highlight,
                        fontSize: isMobile ? '0.8rem' : '0.9rem',
                        fontWeight: 500,
                      }}>
                        {String(moment.id).padStart(2, '0')}
                      </span>
                    </div>
                    {/* Node tooltip */}
                    <span
                      className="node-tooltip"
                      style={{
                        position: 'absolute',
                        [tooltipBelow ? 'top' : 'bottom']: '110%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontFamily: "'Khand', sans-serif",
                        fontSize: '0.58rem',
                        letterSpacing: '0.08em',
                        color: palette.highlight,
                        whiteSpace: 'nowrap',
                        opacity: 0,
                        pointerEvents: 'none',
                        background: isDarkMode ? 'rgba(3,7,30,0.92)' : 'rgba(255,255,255,0.92)',
                        padding: '3px 9px',
                        borderRadius: 20,
                        border: `1px solid ${momentColors[index]}55`,
                        boxShadow: `0 2px 10px rgba(0,0,0,0.35)`,
                        transition: 'opacity 0.2s ease',
                        zIndex: 50,
                      }}
                    >
                      {moment.title}
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {/* ─── HINT POPUP — slides from right ─── */}
          {showHint && mode === 'navigation' && (
            <div
              onClick={() => {
                setShowHint(false);
              }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingRight: isMobile ? 16 : 24,
                pointerEvents: 'none',
              }}
            >
              <div
                style={{
                  pointerEvents: 'auto',
                  background: isDarkMode
                    ? 'rgba(3, 7, 30, 0.92)'
                    : 'rgba(250, 247, 242, 0.95)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: `1px solid ${palette.highlight}33`,
                  borderRadius: 16,
                  padding: isMobile ? '16px 20px' : '18px 26px',
                  maxWidth: isMobile ? 'calc(100vw - 40px)' : 320,
                  width: '100%',
                  boxShadow: `0 8px 40px rgba(0,0,0,0.45), 0 0 0 1px ${palette.highlight}22`,
                  animation: 'hintSlideRight 0.5s cubic-bezier(0.16,1,0.3,1) both',
                  cursor: 'pointer',
                }}
              >
                {/* Header */}
                <p style={{
                  fontFamily: "'Khand', sans-serif",
                  fontSize: '0.58rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: palette.highlight,
                  opacity: 0.7,
                  marginBottom: 10,
                }}>
                  How to explore
                </p>

                {/* Hint rows */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{
                      fontFamily: "'Khand', sans-serif",
                      fontSize: isMobile ? '1rem' : '1.1rem',
                      color: palette.accent7,
                      flexShrink: 0,
                    }}>01</span>
                    <p style={{
                      fontFamily: "'Laila', serif",
                      fontSize: isMobile ? '0.78rem' : '0.83rem',
                      color: palette.textMuted,
                      lineHeight: 1.5,
                      margin: 0,
                    }}>
                      Tap a <strong style={{ color: palette.highlight }}>numbered circle</strong> to explore a moment of transformation
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    {/* Mini sage icon */}
                    <svg width="22" height="22" viewBox="0 0 54 54" fill="none" style={{ flexShrink: 0 }}>
                      <circle cx="27" cy="13" r="5" fill={palette.accent7} opacity="0.9" />
                      <path d="M18 42 Q21 26 27 24 Q33 26 36 42 Z" fill={palette.accent6} opacity="0.75" />
                      <path d="M14 38 Q20 44 27 43 Q34 44 40 38" stroke={palette.accent6} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.85" />
                      <circle cx="14" cy="38" r="2" fill={palette.highlight} opacity="0.9" />
                      <circle cx="40" cy="38" r="2" fill={palette.highlight} opacity="0.9" />
                    </svg>
                    <p style={{
                      fontFamily: "'Laila', serif",
                      fontSize: isMobile ? '0.78rem' : '0.83rem',
                      color: palette.textMuted,
                      lineHeight: 1.5,
                      margin: 0,
                    }}>
                      Touch the <strong style={{ color: palette.highlight }}>bouncing sage</strong> at the center to begin a conversation
                    </p>
                  </div>
                </div>

                {/* Dismiss */}
                <p style={{
                  fontFamily: "'Khand', sans-serif",
                  fontSize: '0.55rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: palette.textSubtle,
                  opacity: 0.5,
                  marginTop: 14,
                  textAlign: 'right',
                }}>
                  tap to dismiss
                </p>
              </div>
            </div>
          )}

          {/* ─── READING MODE: 4-Sides Layout ─── */}
          {mode === 'reading' && selectedMoment && (
            <>
              {/* DESKTOP: Absolute positioned panels */}
              {!isMobile && (
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: contentVisible ? 1 : 0,
                  transition: 'opacity 0.5s ease',
                  pointerEvents: contentVisible ? 'auto' : 'none',
                }}>
                  {[0, 1, 2, 3].map((layerIndex) => {
                    const isVisible = visibleLayers.has(layerIndex);
                    const isActive = activeLayer === layerIndex;
                    const pos = panelPositions.desktop[layerIndex];
                    const slide = slideDirections[layerIndex];

                    return (
                      <div
                        key={layerIndex}
                        onClick={() => handleLayerClick(layerIndex)}
                        style={{
                          position: 'absolute',
                          ...pos,
                          transform: isVisible ? slide.to : slide.from,
                          opacity: isVisible ? (isActive ? 1 : 0.6) : 0,
                          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                          pointerEvents: isVisible ? 'auto' : 'none',
                          cursor: isVisible ? 'pointer' : 'default',
                          zIndex: isActive ? 15 : 10,
                        }}
                      >
                        <div style={{
                          position: 'relative',
                          background: isDarkMode
                            ? `linear-gradient(145deg, rgba(249,243,237,0.08), rgba(201,173,167,0.12) 50%, rgba(249,243,237,0.06))`
                            : `linear-gradient(145deg, rgba(34,34,59,0.12), rgba(74,78,105,0.10) 50%, rgba(34,34,59,0.08))`,
                          backdropFilter: 'blur(32px) saturate(1.3)',
                          WebkitBackdropFilter: 'blur(32px) saturate(1.3)',
                          borderRadius: 16,
                          padding: '20px 24px',
                          border: `1px solid ${isActive ? (selectedMoment.accentColor || palette.accent7) : (isDarkMode ? 'rgba(201,173,167,0.22)' : 'rgba(255,255,255,0.7)')}`,
                          boxShadow: isActive
                            ? (isDarkMode
                                ? `0 10px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(201,173,167,0.12), 0 0 0 1px ${selectedMoment.accentColor}22`
                                : `0 8px 40px rgba(201,173,167,0.22), inset 0 1px 0 rgba(255,255,255,0.9), 0 0 0 1px ${selectedMoment.accentColor}22`)
                            : (isDarkMode
                                ? `0 10px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(201,173,167,0.12)`
                                : `0 8px 40px rgba(201,173,167,0.22), inset 0 1px 0 rgba(255,255,255,0.9)`),
                          transition: 'all 0.4s ease',
                          transform: isActive ? 'scale(1)' : 'scale(0.97)',
                        }}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            marginBottom: 12,
                          }}>
                            <span style={{
                              fontFamily: "'Tiro Devanagari Hindi', serif",
                              color: [palette.highlight, palette.accent5, palette.accent6, palette.highlight][layerIndex],
                              fontSize: '0.85rem',
                              opacity: 0.8,
                            }}>
                              {panelLabels[layerIndex].label}
                            </span>
                            <span style={{
                              fontFamily: "'Khand', sans-serif",
                              color: palette.textSubtle,
                              fontSize: '0.6rem',
                              letterSpacing: '0.1em',
                              textTransform: 'uppercase',
                            }}>
                              {panelLabels[layerIndex].subtitle}
                            </span>
                          </div>
                          {renderPanelContent(layerIndex)}

                          {/* Reveal/Go Deeper button on each card */}
                          {layerIndex < 3 && isActive && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleLayerProgress();
                              }}
                              style={{
                                position: 'absolute',
                                top: 16,
                                right: 16,
                                zIndex: 20,
                                fontFamily: "'Khand', sans-serif",
                                backgroundColor: selectedMoment?.accentColor || palette.accent7,
                                border: 'none',
                                color: '#fff',
                                padding: '8px 16px',
                                fontSize: '0.65rem',
                                fontWeight: 500,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                borderRadius: 20,
                                transition: 'all 0.3s ease',
                                whiteSpace: 'nowrap',
                                boxShadow: `0 0 20px ${selectedMoment?.accentColor || palette.accent7}88`,
                                animation: 'pulse 2s infinite',
                              }}
                              onMouseOver={(e) => {
                                (e.target as HTMLElement).style.transform = 'scale(1.05)';
                                (e.target as HTMLElement).style.boxShadow = `0 0 30px ${selectedMoment?.accentColor || palette.accent7}`;
                              }}
                              onMouseOut={(e) => {
                                (e.target as HTMLElement).style.transform = 'scale(1)';
                                (e.target as HTMLElement).style.boxShadow = `0 0 20px ${selectedMoment?.accentColor || palette.accent7}88`;
                              }}
                            >
                              {layerIndex === 0 && 'Reveal Scene →'}
                              {layerIndex === 1 && 'Go Deeper →'}
                              {layerIndex === 2 && 'For Today →'}
                            </button>
                          )}

                          {/* Top edge highlight */}
                          <div style={{
                            position: 'absolute',
                            top: 0,
                            left: '10%',
                            right: '10%',
                            height: 1,
                            background: `linear-gradient(90deg, transparent, ${isDarkMode ? 'rgba(201,173,167,0.4)' : 'rgba(255,255,255,0.8)'}, transparent)`,
                            pointerEvents: 'none',
                          }} />

                          {/* Left edge accent */}
                          <div style={{
                            position: 'absolute',
                            left: 0,
                            top: '12%',
                            bottom: '12%',
                            width: 3,
                            borderRadius: '0 3px 3px 0',
                            background: isDarkMode
                              ? `linear-gradient(180deg, transparent, rgba(249,243,237,0.35), rgba(201,173,167,0.28), transparent)`
                              : `linear-gradient(180deg, transparent, rgba(255,255,255,0.88), rgba(201,173,167,0.44), transparent)`,
                            pointerEvents: 'none',
                            boxShadow: isDarkMode ? `0 0 10px rgba(249,243,237,0.12)` : 'none',
                          }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* MOBILE: Scrollable stacked panels */}
              {isMobile && (
                <div style={{
                  width: '100%',
                  height: '100%',
                  overflowY: 'auto',
                  padding: '140px 16px 180px 16px',
                  opacity: contentVisible ? 1 : 0,
                  transition: 'opacity 0.5s ease',
                }}>
                  {[0, 1, 2, 3].map((layerIndex) => {
                    const isVisible = visibleLayers.has(layerIndex);
                    const isActive = activeLayer === layerIndex;

                    return (
                      <div
                        key={layerIndex}
                        onClick={() => handleLayerClick(layerIndex)}
                        style={{
                          marginBottom: 14,
                          opacity: isVisible ? (isActive ? 1 : 0.55) : 0,
                          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                          pointerEvents: isVisible ? 'auto' : 'none',
                          maxHeight: isVisible ? '500px' : '0px',
                          overflow: 'hidden',
                        }}
                      >
                        <div style={{
                          position: 'relative',
                          background: isDarkMode
                            ? `linear-gradient(145deg, rgba(249,243,237,0.08), rgba(201,173,167,0.12) 50%, rgba(249,243,237,0.06))`
                            : `linear-gradient(145deg, rgba(34,34,59,0.12), rgba(74,78,105,0.10) 50%, rgba(34,34,59,0.08))`,
                          backdropFilter: 'blur(32px) saturate(1.3)',
                          WebkitBackdropFilter: 'blur(32px) saturate(1.3)',
                          borderRadius: 12,
                          padding: '16px 18px',
                          border: `1px solid ${isActive ? (selectedMoment.accentColor || palette.accent7) : (isDarkMode ? 'rgba(201,173,167,0.22)' : 'rgba(255,255,255,0.7)')}`,
                          boxShadow: isActive
                            ? (isDarkMode
                                ? `0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(201,173,167,0.12), 0 0 0 1px ${selectedMoment.accentColor}22`
                                : `0 6px 24px rgba(201,173,167,0.22), inset 0 1px 0 rgba(255,255,255,0.9), 0 0 0 1px ${selectedMoment.accentColor}22`)
                            : (isDarkMode
                                ? `0 6px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(201,173,167,0.12)`
                                : `0 4px 16px rgba(201,173,167,0.22), inset 0 1px 0 rgba(255,255,255,0.9)`),
                          transition: 'all 0.4s ease',
                        }}>
                          <div style={{
                            display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10,
                          }}>
                            <span style={{
                              fontFamily: "'Tiro Devanagari Hindi', serif",
                              color: [palette.highlight, palette.accent5, palette.accent6, palette.highlight][layerIndex],
                              fontSize: '0.8rem', opacity: 0.8,
                            }}>
                              {panelLabels[layerIndex].label}
                            </span>
                            <span style={{
                              fontFamily: "'Khand', sans-serif",
                              color: palette.textSubtle,
                              fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                            }}>
                              {panelLabels[layerIndex].subtitle}
                            </span>
                          </div>
                          {renderPanelContent(layerIndex)}

                          {/* Reveal/Go Deeper button on each card */}
                          {layerIndex < 3 && isActive && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleLayerProgress();
                              }}
                              style={{
                                position: 'absolute',
                                top: 12,
                                right: 12,
                                zIndex: 20,
                                fontFamily: "'Khand', sans-serif",
                                backgroundColor: selectedMoment?.accentColor || palette.accent7,
                                border: 'none',
                                color: '#fff',
                                padding: '6px 12px',
                                fontSize: '0.6rem',
                                fontWeight: 500,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                borderRadius: 16,
                                transition: 'all 0.3s ease',
                                whiteSpace: 'nowrap',
                                boxShadow: `0 0 20px ${selectedMoment?.accentColor || palette.accent7}88`,
                                animation: 'pulse 2s infinite',
                              }}
                            >
                              {layerIndex === 0 && 'Reveal Scene →'}
                              {layerIndex === 1 && 'Go Deeper →'}
                              {layerIndex === 2 && 'For Today →'}
                            </button>
                          )}

                          {/* Top edge highlight */}
                          <div style={{
                            position: 'absolute',
                            top: 0,
                            left: '10%',
                            right: '10%',
                            height: 1,
                            background: `linear-gradient(90deg, transparent, ${isDarkMode ? 'rgba(201,173,167,0.4)' : 'rgba(255,255,255,0.8)'}, transparent)`,
                            pointerEvents: 'none',
                          }} />

                          {/* Left edge accent */}
                          <div style={{
                            position: 'absolute',
                            left: 0,
                            top: '12%',
                            bottom: '12%',
                            width: 2,
                            borderRadius: '0 2px 2px 0',
                            background: isDarkMode
                              ? `linear-gradient(180deg, transparent, rgba(249,243,237,0.35), rgba(201,173,167,0.28), transparent)`
                              : `linear-gradient(180deg, transparent, rgba(255,255,255,0.88), rgba(201,173,167,0.44), transparent)`,
                            pointerEvents: 'none',
                            boxShadow: isDarkMode ? `0 0 8px rgba(249,243,237,0.12)` : 'none',
                          }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* ─── Layer Navigation Dots ─── */}
              <div style={{
                position: 'absolute',
                bottom: isMobile ? 20 : 30,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 25,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                opacity: contentVisible ? 1 : 0,
                transition: 'opacity 0.5s ease 0.2s',
              }}>
                {/* Layer dots */}
                {[0, 1, 2, 3].map((i) => (
                  <LayerDot
                    key={i}
                    index={i}
                    active={activeLayer === i}
                    onClick={() => handleLayerClick(i)}
                    color={selectedMoment?.accentColor || palette.highlight}
                    palette={palette}
                    isMobile={isMobile}
                  />
                ))}
              </div>
            </>
          )}
        </main>

        {/* ═══ FOOTER — only show in navigation mode ═══ */}
        {mode === 'navigation' && (
          <footer style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 20,
            textAlign: 'center',
            padding: isMobile ? '8px 12px' : '12px 20px',
            background: 'transparent',
            transition: 'all 0.5s ease',
          }}>
          <p style={{
            fontFamily: "'Tiro Devanagari Hindi', serif",
            color: palette.highlight,
            fontSize: isMobile ? '0.85rem' : '1rem',
            lineHeight: 1.8,
            marginBottom: 6,
            opacity: 0.7,
            textShadow: isDarkMode ? `0 1px 8px rgba(0,0,0,0.5)` : `0 1px 4px rgba(255,255,255,0.5)`,
          }}>
            परित्राणाय साधूनां विनाशाय च दुष्कृताम्
            <br />
            धर्मसंस्थापनार्थाय सम्भवामि युगे युगे
          </p>
          <p style={{
            fontFamily: "'Laila', serif",
            color: palette.accent7,
            fontSize: isMobile ? '0.7rem' : '0.85rem',
            fontStyle: 'italic',
            marginBottom: 5,
            opacity: 0.6,
            textShadow: isDarkMode ? `0 1px 4px rgba(0,0,0,0.4)` : 'none',
            lineHeight: 1.6,
            maxWidth: isMobile ? '280px' : '400px',
            margin: '0 auto 5px auto',
          }}>
            paritrāṇāya sādhūnāṁ vināśāya ca duṣkṛtām — dharma-saṁsthāpanārthāya sambhavāmi yuge yuge
          </p>
          <p style={{
            fontFamily: "'Laila', serif",
            color: palette.textSubtle,
            fontSize: isMobile ? '0.7rem' : '0.8rem',
            opacity: 0.55,
            textShadow: isDarkMode ? `0 1px 4px rgba(0,0,0,0.4)` : 'none',
            lineHeight: 1.6,
            maxWidth: isMobile ? '320px' : '450px',
            margin: '0 auto',
          }}>
            &ldquo;To protect the righteous, to annihilate the wicked, and to reestablish dharma, I appear age after age.&rdquo;
          </p>
        </footer>
        )}

        {/* ═══ Styles ═══ */}
        <style>{`
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes hintSlideUp {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes hintSlideRight {
            from { opacity: 0; transform: translateX(40px); }
            to   { opacity: 1; transform: translateX(0); }
          }
          @keyframes sageBounce {
            0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
            50% { transform: translate(-50%, -50%) translateY(-6px); }
          }
          .sage-center:hover {
            filter: drop-shadow(0 0 10px #FFBA08);
          }
          .sage-center:hover .sage-label {
            opacity: 1 !important;
          }
          .chakra-node {
            overflow: visible;
          }
          .chakra-node:hover {
            z-index: 20;
          }
          .chakra-node:hover .node-tooltip {
            opacity: 1 !important;
          }
          @keyframes pulse {
            0%, 100% {
              box-shadow: 0 0 20px currentColor;
              opacity: 1;
            }
            50% {
              box-shadow: 0 0 30px currentColor;
              opacity: 0.9;
            }
          }
          main::-webkit-scrollbar { display: none; }
          main { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </div>
    </>
  );
}
