import React, { useState, useEffect, useCallback } from 'react';

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

const getMomentColors = (isDark) => isDark ? [
  '#370617', '#6A040F', '#9D0208', '#D00000', '#DC2F02',
  '#E85D04', '#F48C06', '#FAA307', '#FFBA08', '#FFFFFF'
] : [
  '#8B4513', '#A0522D', '#CD853F', '#D2691E', '#E85D04',
  '#F48C06', '#DAA520', '#B8860B', '#D4AF37', '#2C1810'
];

const moments = [
  { 
    id: 1, title: "Arjuna's Collapse", chapter: "1-2", 
    sanskrit: "न योत्स्य इति गोविन्दम् उक्त्वा तूष्णीं बभूव ह", 
    transliteration: "na yotsya iti govindam uktvā tūṣṇīṁ babhūva ha", 
    translation: "\"I shall not fight,\" said Arjuna to Krishna, and became silent.", 
    context: "Arjuna, the mighty warrior, sees his teachers, uncles, and cousins on the opposing side. His bow slips from his hands. He cannot act.", 
    innerMeaning: "This is the universal moment of paralysis — when duty conflicts with love, when action seems impossible, when we face choices that have no clean answers.", 
    practical: "Have you ever been frozen by a decision where every option felt wrong? This is where the teaching begins."
  },
  { 
    id: 2, title: "The Eternal Self", chapter: "2.12", 
    sanskrit: "न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः", 
    transliteration: "na tvevāhaṁ jātu nāsaṁ na tvaṁ neme janādhipāḥ", 
    translation: "Never was there a time when I did not exist, nor you, nor these kings; nor shall we ever cease to be.", 
    context: "Krishna's first revelation: You are not the body. What you truly are was never born and will never die.", 
    innerMeaning: "The foundation of all that follows. If you understand this one truth, everything changes. Fear of death dissolves. Fear of loss softens.", 
    practical: "What remains constant in you, despite all the changes you've been through? That unchanging witness — that is what Krishna points to."
  },
  { 
    id: 3, title: "The Steady One", chapter: "2.54-72", 
    sanskrit: "स्थितप्रज्ञस्य का भाषा समाधिस्थस्य केशव", 
    transliteration: "sthita-prajñasya kā bhāṣā samādhi-sthasya keśava", 
    translation: "What are the signs of one whose wisdom is steady? How do they speak, sit, walk?", 
    context: "Arjuna asks a practical question: What does an enlightened person actually look like in daily life?", 
    innerMeaning: "Krishna describes a person unmoved by pleasure or pain, without craving or aversion, fully present. Not detached from life, but unshaken by its waves.", 
    practical: "This is your north star. Not a distant god, but a way of being. How would you act today if you were unshaken?"
  },
  { 
    id: 4, title: "Action Without Attachment", chapter: "2.47", 
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन", 
    transliteration: "karmaṇy evādhikāras te mā phaleṣu kadācana", 
    translation: "You have the right to action alone, never to its fruits.", 
    context: "The most quoted verse. Often misunderstood as \"don't care about results.\" It's deeper than that.", 
    innerMeaning: "Act fully, skillfully, with complete dedication — but release your grip on outcomes. The anxiety isn't in the action, it's in the clinging to results.", 
    practical: "What would you do differently today if you focused entirely on the quality of your effort, not the reward?"
  },
  { 
    id: 5, title: "The Restless Mind", chapter: "6.34-35", 
    sanskrit: "चञ्चलं हि मनः कृष्ण प्रमाथि बलवद् दृढम्", 
    transliteration: "cañcalaṁ hi manaḥ kṛṣṇa pramāthi balavad dṛḍham", 
    translation: "The mind is restless, turbulent, powerful, obstinate. I think it is as hard to control as the wind.", 
    context: "Arjuna voices what every meditator feels. Krishna doesn't dismiss it — he agrees, and offers the way.", 
    innerMeaning: "By practice and dispassion, the mind can be stilled. Not by force, but by patient, repeated return. The wind can be worked with.", 
    practical: "Your mind will wander ten thousand times. The practice is simply: notice, and return. That's it. That's the whole path."
  },
  { 
    id: 6, title: "Devotion", chapter: "9.29", 
    sanskrit: "समोऽहं सर्वभूतेषु न मे द्वेष्योऽस्ति न प्रियः", 
    transliteration: "samo 'haṁ sarva-bhūteṣu na me dveṣyo 'sti na priyaḥ", 
    translation: "I am the same to all beings. None is hateful to me, none dear. But those who worship me with devotion — they are in me, and I am in them.", 
    context: "The path of the heart. Not everyone reaches truth through analysis. Some arrive through love.", 
    innerMeaning: "The divine doesn't play favorites — but those who turn toward it find themselves held. This is not transaction. It's relationship.", 
    practical: "What do you love so completely that you lose yourself in it? That dissolution of self — that's the door."
  },
  { 
    id: 7, title: "At the Moment of Death", chapter: "8.5-6", 
    sanskrit: "अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम्", 
    transliteration: "anta-kāle ca mām eva smaran muktvā kalevaram", 
    translation: "Whoever, at the time of death, leaves the body remembering Me alone, attains My being. Of this there is no doubt.", 
    context: "Arjuna asks directly: What happens when we die? Krishna answers: The final thought shapes what follows.", 
    innerMeaning: "This isn't about a deathbed prayer. It's about what you practice becoming. What you remember in crisis is what you've cultivated in peace.", 
    practical: "If your life ended today, what would your mind naturally turn to? That reveals where your practice truly is."
  },
  { 
    id: 8, title: "The Cosmic Form", chapter: "11", 
    sanskrit: "पश्यादित्यान्वसून्रुद्रानश्विनौ मरुतस्तथा", 
    transliteration: "paśyādityān vasūn rudrān aśvinau marutas tathā", 
    translation: "Behold the Ādityas, Vasus, Rudras, the twin Ashvins, and the Maruts. Behold, Arjuna, wonders never seen before.", 
    context: "Arjuna asks to see Krishna's true form. He is granted divine sight. What he sees overwhelms him with awe.", 
    innerMeaning: "The infinite cannot be domesticated. When Arjuna glimpses totality — creation and destruction, all beings entering and exiting — he is overcome with wonder.", 
    practical: "Sometimes growth means encountering what is too vast to hold. The awe. The beauty. The mystery that doesn't fit in your categories."
  },
  { 
    id: 9, title: "The Three Gunas", chapter: "14", 
    sanskrit: "सत्त्वं रजस्तम इति गुणाः प्रकृतिसम्भवाः", 
    transliteration: "sattvaṁ rajas tama iti guṇāḥ prakṛti-sambhavāḥ", 
    translation: "Sattva, Rajas, Tamas — these three qualities born of nature bind the imperishable soul to the body.", 
    context: "Krishna gives Arjuna a framework for understanding his own mind: clarity (sattva), agitation (rajas), inertia (tamas).", 
    innerMeaning: "You are not your moods. These are patterns of energy that move through you. See them, name them, and you begin to be free of their grip.", 
    practical: "Right now — are you clear and calm? Restless and driven? Heavy and stuck? Just noticing is the first step."
  },
  { 
    id: 10, title: "Surrender", chapter: "18.66", 
    sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज", 
    transliteration: "sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja", 
    translation: "Abandoning all dharmas, take refuge in Me alone. I shall free you from all sins. Do not grieve.", 
    context: "The final teaching. After 18 chapters of paths and practices, Krishna offers the simplest instruction: Let go. Trust. Come to Me.", 
    innerMeaning: "This isn't abandoning ethics. It's releasing the ego's grip on being the doer. After all the effort — surrender the effort itself.", 
    practical: "What are you still trying to control? What would it feel like to set that down, just for a moment?"
  },
];

const getNodePosition = (index, total, radius) => {
  const angleStep = (2 * Math.PI) / total;
  const angle = -Math.PI / 2 + angleStep * index;
  return { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius };
};

// ─── Icons ──────────────────────────────────────────────────────
const HomeIcon = ({ color }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const SunIcon = ({ color }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = ({ color }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

// ─── Panel Position Configs ─────────────────────────────────────
// Each of the 4 layers slides in from a different edge
const panelPositions = {
  desktop: [
    // Layer 0: Sanskrit — top center
    { top: '80px', left: '50%', transform: 'translateX(-50%)', maxWidth: '480px', width: '90%' },
    // Layer 1: Context — left side
    { top: '50%', left: '24px', transform: 'translateY(-50%)', maxWidth: '320px', width: '28%' },
    // Layer 2: Inner Meaning — right side
    { top: '50%', right: '24px', transform: 'translateY(-50%)', maxWidth: '320px', width: '28%' },
    // Layer 3: Practical — bottom center
    { bottom: '80px', left: '50%', transform: 'translateX(-50%)', maxWidth: '520px', width: '90%' },
  ],
  mobile: [
    // On mobile, panels stack from top with scroll
    { position: 'relative', width: '100%', marginBottom: '12px' },
    { position: 'relative', width: '100%', marginBottom: '12px' },
    { position: 'relative', width: '100%', marginBottom: '12px' },
    { position: 'relative', width: '100%', marginBottom: '12px' },
  ],
};

// Slide-in directions for each panel (desktop)
const slideDirections = [
  { from: 'translateX(-50%) translateY(-30px)', to: 'translateX(-50%) translateY(0)' },   // top: slides down
  { from: 'translateY(-50%) translateX(-40px)', to: 'translateY(-50%) translateX(0)' },   // left: slides right
  { from: 'translateY(-50%) translateX(40px)', to: 'translateY(-50%) translateX(0)' },    // right: slides left
  { from: 'translateX(-50%) translateY(30px)', to: 'translateX(-50%) translateY(0)' },    // bottom: slides up
];

// ─── Panel Labels ───────────────────────────────────────────────
const panelLabels = [
  { label: 'श्लोक', subtitle: 'The Verse' },
  { label: 'प्रसंग', subtitle: 'The Scene' },
  { label: 'अर्थ', subtitle: 'Inner Meaning' },
  { label: 'आज', subtitle: 'For You, Today' },
];

// ─── Floating Action Button for layers ──────────────────────────
const LayerDot = ({ index, active, onClick, color, palette, isMobile }) => (
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
  const [mode, setMode] = useState('navigation');
  const [selectedMoment, setSelectedMoment] = useState(null);
  const [activeLayer, setActiveLayer] = useState(0);
  const [visibleLayers, setVisibleLayers] = useState(new Set([0]));
  const [orbitAngle, setOrbitAngle] = useState(0);
  const [chakraVisible, setChakraVisible] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const palette = isDarkMode ? darkPalette : lightPalette;
  const momentColors = getMomentColors(isDarkMode);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (mode !== 'navigation') return;
    const interval = setInterval(() => {
      setOrbitAngle(prev => (prev + 0.7) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, [mode]);

  const handleNodeClick = (moment, index) => {
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

  const handleLayerClick = useCallback((index) => {
    // Can only click layers that have been revealed
    if (visibleLayers.has(index)) {
      setActiveLayer(index);
    }
  }, [visibleLayers]);

  const radius = isMobile ? 110 : 160;
  const orbitRad = (orbitAngle * Math.PI) / 180;
  const orbitX = Math.cos(orbitRad - Math.PI / 2) * radius;
  const orbitY = Math.sin(orbitRad - Math.PI / 2) * radius;

  // ─── Panel Content Builders ─────────────────────────────────
  const renderPanelContent = (layerIndex) => {
    if (!selectedMoment) return null;

    const labelColor = [palette.highlight, palette.accent5, palette.accent6, palette.highlight][layerIndex];

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
              "{selectedMoment.translation}"
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

          {/* Image layer — centered, full viewport, never clipped */}
          {mode === 'reading' && selectedMoment?.id === 1 && (
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: isDarkMode ? 0.55 : 0.4,
              transition: 'opacity 0.8s ease',
            }}>
              <img
                src="/mnt/user-data/uploads/IMG_8047.png"
                alt="Arjuna's Collapse"
                style={{
                  maxWidth: '70%',
                  maxHeight: '70%',
                  objectFit: 'contain',
                }}
              />
            </div>
          )}

          {/* Soft vignette for readability but doesn't obscure center */}
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

        {/* ═══ HEADER — fully transparent, floating over image ═══ */}
        <header style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 30,
          padding: isMobile ? '10px 14px' : '14px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'transparent',
          // No backgroundColor, no backdropFilter — fully transparent
          transition: 'all 0.5s ease',
        }}>
          {/* Left: Home */}
          <button
            onClick={() => window.location.href = '/'}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              opacity: 0.7, transition: 'opacity 0.3s ease', padding: '4px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            onMouseOver={(e) => e.currentTarget.style.opacity = 1}
            onMouseOut={(e) => e.currentTarget.style.opacity = 0.7}
            title="Home"
          >
            <HomeIcon color={palette.highlight} />
          </button>

          {/* Center: Title or moment dots */}
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
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1, justifyContent: 'center' }}>
              {/* Moment title */}
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
          )}

          {/* Right: Theme + Close */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                opacity: 0.7, transition: 'opacity 0.3s ease', padding: '4px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = 1}
              onMouseOut={(e) => e.currentTarget.style.opacity = 0.7}
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <SunIcon color={palette.highlight} /> : <MoonIcon color={palette.highlight} />}
            </button>

            {mode === 'reading' && (
              <button
                onClick={handleClose}
                style={{
                  background: 'none', border: 'none',
                  fontFamily: "'Khand', sans-serif",
                  color: palette.accent7, fontSize: isMobile ? '1.2rem' : '1.4rem',
                  cursor: 'pointer', opacity: 0.7,
                  transition: 'opacity 0.3s ease', padding: '4px 8px',
                }}
                onMouseOver={(e) => e.target.style.opacity = 1}
                onMouseOut={(e) => e.target.style.opacity = 0.7}
              >
                ✕
              </button>
            )}
          </div>
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
                  return <line key={`spoke-${index}`} x1={pos.x} y1={pos.y} x2="0" y2="0" stroke={palette.bgSecondary} strokeWidth="1" opacity="0.3" />;
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

                {/* Center circle */}
                <circle cx="0" cy="0" r="32" fill={isDarkMode ? 'rgba(3,7,30,0.6)' : 'rgba(255,255,255,0.6)'} stroke={palette.accent2} strokeWidth="1" opacity="0.8" />
              </svg>

              {/* Center ॐ */}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)', textAlign: 'center',
              }}>
                <span style={{
                  fontFamily: "'Tiro Devanagari Hindi', serif",
                  color: palette.highlight,
                  fontSize: isMobile ? '1.6rem' : '2rem',
                  textShadow: isDarkMode ? `0 0 20px ${palette.highlight}44` : 'none',
                }}>ॐ</span>
              </div>

              {/* Nodes */}
              {moments.map((moment, index) => {
                const pos = getNodePosition(index, 10, radius);
                return (
                  <div
                    key={moment.id}
                    onClick={() => handleNodeClick(moment, index)}
                    style={{
                      position: 'absolute', left: '50%', top: '50%',
                      transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`,
                      cursor: 'pointer', transition: 'transform 0.3s ease',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px)) scale(1.15)`}
                    onMouseOut={(e) => e.currentTarget.style.transform = `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px)) scale(1)`}
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
                  </div>
                );
              })}
            </div>
          )}

          {/* ─── READING MODE: 4-Sides Layout ─── */}
          {mode === 'reading' && selectedMoment && (
            <>
              {/* DESKTOP: Absolute positioned panels on 4 sides */}
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
                          backgroundColor: palette.panelBg,
                          backdropFilter: 'blur(16px)',
                          WebkitBackdropFilter: 'blur(16px)',
                          borderRadius: 10,
                          padding: '20px 24px',
                          border: `1px solid ${isActive ? (selectedMoment.accentColor || palette.accent7) : palette.bgSecondary}55`,
                          boxShadow: isActive
                            ? `0 8px 32px ${isDarkMode ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.12)'}, 0 0 0 1px ${selectedMoment.accentColor}22`
                            : `0 4px 16px ${isDarkMode ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.06)'}`,
                          transition: 'all 0.4s ease',
                          transform: isActive ? 'scale(1)' : 'scale(0.97)',
                        }}>
                          {/* Panel label */}
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

                          {/* Panel content */}
                          {renderPanelContent(layerIndex)}
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
                  padding: '70px 16px 100px 16px',
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
                          backgroundColor: palette.panelBg,
                          backdropFilter: 'blur(16px)',
                          WebkitBackdropFilter: 'blur(16px)',
                          borderRadius: 10,
                          padding: '16px 18px',
                          border: `1px solid ${isActive ? (selectedMoment.accentColor || palette.accent7) : palette.bgSecondary}44`,
                          boxShadow: isActive
                            ? `0 4px 20px ${isDarkMode ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`
                            : 'none',
                          transition: 'all 0.4s ease',
                        }}>
                          {/* Panel label */}
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
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* ─── Layer Progress Control ─── */}
              <div style={{
                position: 'absolute',
                bottom: isMobile ? 55 : 64,
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

                {/* Next layer button */}
                {activeLayer < 3 && (
                  <button
                    onClick={handleLayerProgress}
                    style={{
                      fontFamily: "'Khand', sans-serif",
                      backgroundColor: 'transparent',
                      border: `1px solid ${selectedMoment?.accentColor || palette.accent7}`,
                      color: palette.accent7,
                      padding: isMobile ? '6px 14px' : '8px 18px',
                      fontSize: '0.65rem',
                      fontWeight: 500,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      borderRadius: 20,
                      transition: 'all 0.3s ease',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = selectedMoment?.accentColor || palette.accent7;
                      e.target.style.color = '#fff';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = palette.accent7;
                    }}
                  >
                    {activeLayer === 0 && 'Reveal the Scene →'}
                    {activeLayer === 1 && 'Go Deeper →'}
                    {activeLayer === 2 && 'For You Today →'}
                  </button>
                )}
              </div>
            </>
          )}
        </main>

        {/* ═══ FOOTER — fully transparent, floating ═══ */}
        <footer style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 20,
          textAlign: 'center',
          padding: isMobile ? '8px 12px' : '12px 20px',
          background: 'transparent',
          // No backgroundColor — floating text only
          transition: 'all 0.5s ease',
        }}>
          <p style={{
            fontFamily: "'Tiro Devanagari Hindi', serif",
            color: palette.highlight,
            fontSize: isMobile ? '0.65rem' : '0.8rem',
            lineHeight: 1.8,
            marginBottom: 4,
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
            fontSize: isMobile ? '0.42rem' : '0.5rem',
            fontStyle: 'italic',
            marginBottom: 3,
            opacity: 0.5,
            textShadow: isDarkMode ? `0 1px 4px rgba(0,0,0,0.4)` : 'none',
          }}>
            paritrāṇāya sādhūnāṁ vināśāya ca duṣkṛtām — dharma-saṁsthāpanārthāya sambhavāmi yuge yuge
          </p>
          <p style={{
            fontFamily: "'Laila', serif",
            color: palette.textSubtle,
            fontSize: isMobile ? '0.42rem' : '0.48rem',
            opacity: 0.45,
            textShadow: isDarkMode ? `0 1px 4px rgba(0,0,0,0.4)` : 'none',
          }}>
            "To protect the righteous, to annihilate the wicked, and to reestablish dharma, I appear age after age."
          </p>
        </footer>

        {/* ═══ Keyframes ═══ */}
        <style>{`
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }
          /* Hide scrollbar but keep scrolling */
          main::-webkit-scrollbar { display: none; }
          main { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </div>
    </>
  );
}
