'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { SplashScreen } from '@/components/homepage/SplashScreen';

const HEADLINES = [
  "A governance curriculum.",
  "Working AI agents.",
  "A Constitution for AGI."
];

// Vidya/Leela Content Mapping
const VIDYA_SECTIONS = [
  {
    id: 'builds',
    title: 'Builds',
    description: 'AI Agents, Seshan Dashboard, Seshan Intelligence',
    hoverText: 'Explore my portfolio of AI agents, intelligent systems, and automation tools that push the boundaries of what\'s possible.',
    hasSubmenu: true,
    submenuItems: [
      {
        title: 'AI Agents',
        description: 'Intelligent autonomous systems',
        href: 'https://ai-agents-rosy-mu.vercel.app/',
        image: '/images/headercards/articles-header.webp'
      },
      {
        title: 'Seshan Dashboard',
        description: 'Analytics and monitoring platform',
        href: 'https://seshan-navy.vercel.app/',
        image: '/images/portfolio/seshan-financial-dashboard.webp'
      },
      {
        title: 'Seshan Intelligence',
        description: 'Advanced analytics platform',
        href: 'https://www.suniliyer.ca/seshan/demo',
        image: '/images/portfolio/seshan-intelligence.webp'
      }
    ],
    image: '/images/breaks/builds.webp',
    size: 'tall' // Takes 1 column, 2 rows
  },
  {
    id: 'articles',
    title: 'Articles',
    description: 'Medium publications',
    hoverText: 'Read my thoughts on AI governance, ethics, and the future of intelligent systems. Published on Medium.',
    href: '/articles',
    image: '/images/headercards/articles-header.webp',
    size: 'wide' // Takes 1.5 columns, 1 row
  },
  {
    id: 'curriculum',
    title: 'Curriculum',
    description: 'Professional learning path',
    hoverText: 'A curated learning journey through AI governance, covering essential concepts and frameworks.',
    href: '/history',
    image: '/images/headercards/history-header.webp',
    size: 'small-tall' // Takes 0.5 column, 2 rows
  },
  {
    id: 'constitution',
    title: 'Constitution',
    description: 'AI principles and ethics',
    hoverText: 'Dharma Sanhita: A comprehensive constitutional framework for AGI governance rooted in Vedic philosophy.',
    href: '/constitution',
    image: '/images/headercards/AGIConstitution.webp',
    size: 'wide' // Takes 1.5 columns, 1 row
  }
];

const LEELA_SECTIONS = [
  {
    id: 'gita',
    title: 'Gita',
    description: 'Interactive Bhagavad Gita resource',
    hoverText: 'Dive into the wisdom of the Bhagavad Gita with interactive explorations of its timeless teachings.',
    href: '/gita',
    image: '/images/heroes/gita-card.webp',
    size: 'wide' // Takes 1.5 columns, 1 row
  },
  {
    id: 'creative-works',
    title: 'Creative Works',
    description: 'AI art, animations, videos',
    hoverText: 'Experience AI-generated art, animations, and creative experiments that blend technology with imagination.',
    href: '/creative-works',
    image: '/images/portfolio/creative-works.webp',
    size: 'small-tall' // Takes 0.5 column, 2 rows
  },
  {
    id: 'behind-scenes',
    title: 'Behind the Scenes',
    description: 'Process, tools, workflow',
    hoverText: 'Peek behind the curtain to see the tools, processes, and workflows that bring my projects to life.',
    href: '/behind-the-scenes',
    image: '/images/breaks/Behind-Scene-Break.webp',
    size: 'tall' // Takes 1 column, 2 rows
  },
  {
    id: 'calvin',
    title: 'Calvin and Hobbes',
    description: 'cAlvIn and Hobbes parody',
    hoverText: 'A playful AI-powered parody celebrating the beloved Calvin and Hobbes comic strip.',
    href: '/calvinhobbes',
    image: '/images/portfolio/calvin-and-hobbes.webp',
    size: 'wide' // Takes 1.5 columns, 1 row
  },
  {
    id: 'journey',
    title: 'My Journey',
    description: 'Career arc and personal story',
    hoverText: 'Follow my professional journey through technology, philosophy, and the pursuit of building responsible AI systems.',
    href: '/journey',
    image: '/images/headercards/journey-header.webp',
    size: 'square' // Takes 1 column, 1 row
  },
  {
    id: 'mortgage',
    title: 'Mortgage Calculator',
    description: 'Financial planning tool',
    hoverText: 'An intelligent mortgage calculator that helps you understand your home financing options with detailed breakdowns and visualizations.',
    href: '/mortgage-calculator',
    image: '/images/portfolio/mortgage-calculator.webp',
    size: 'square' // Takes 1 column, 1 row
  }
];

function RedesignPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [displayTexts, setDisplayTexts] = useState(['', '', '']);
  const [articleCount, setArticleCount] = useState(0);
  const [pathsCount, setPathsCount] = useState(0);
  const [agentsCount, setAgentsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);

  // Vidya/Leela mode state
  const [mode, setMode] = useState<'vidya' | 'leela'>('vidya');
  const [isFlipping, setIsFlipping] = useState(false);
  const [hoveredLabel, setHoveredLabel] = useState<'vidya' | 'leela' | null>(null);
  const [showBuildsModal, setShowBuildsModal] = useState(false);
  const [showCreditsModal, setShowCreditsModal] = useState(false);

  // Auto-flip state
  const [isAutoFlipping, setIsAutoFlipping] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isUserControlled, setIsUserControlled] = useState(false);
  const [progress, setProgress] = useState(0);

  const autoFlipTimerRef = useRef<NodeJS.Timeout | null>(null);
  const progressAnimationRef = useRef<number | null>(null);

  // Mount effect
  useEffect(() => {
    setMounted(true);
    // Check URL params for mode
    const urlMode = searchParams?.get('mode');
    if (urlMode === 'leela' || urlMode === 'vidya') {
      setMode(urlMode);
    }
  }, [searchParams]);

  // Typewriter effect for all three headlines with looping
  useEffect(() => {
    if (!mounted) return;

    let currentIndex = 0;
    let currentChar = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const typeNextChar = () => {
      const headline = HEADLINES[currentIndex];

      if (!isDeleting) {
        if (currentChar <= headline.length) {
          setDisplayTexts(prev => {
            const newTexts = [...prev];
            newTexts[currentIndex] = headline.substring(0, currentChar);
            return newTexts;
          });
          currentChar++;
          timeoutId = setTimeout(typeNextChar, 50);
        } else {
          currentIndex++;
          currentChar = 0;

          if (currentIndex >= HEADLINES.length) {
            timeoutId = setTimeout(() => {
              isDeleting = true;
              currentIndex = HEADLINES.length - 1;
              currentChar = HEADLINES[currentIndex].length;
              typeNextChar();
            }, 2000);
          } else {
            timeoutId = setTimeout(typeNextChar, 50);
          }
        }
      } else {
        if (currentChar >= 0) {
          setDisplayTexts(prev => {
            const newTexts = [...prev];
            newTexts[currentIndex] = headline.substring(0, currentChar);
            return newTexts;
          });
          currentChar--;
          timeoutId = setTimeout(typeNextChar, 30);
        } else {
          currentIndex--;

          if (currentIndex < 0) {
            timeoutId = setTimeout(() => {
              isDeleting = false;
              currentIndex = 0;
              currentChar = 0;
              typeNextChar();
            }, 500);
          } else {
            currentChar = HEADLINES[currentIndex].length;
            timeoutId = setTimeout(typeNextChar, 30);
          }
        }
      }
    };

    typeNextChar();

    return () => clearTimeout(timeoutId);
  }, [mounted]);

  // Number counter
  useEffect(() => {
    if (!mounted) return;

    let frame = 0;
    const maxFrames = 60;
    const duration = 1500;
    const frameTime = duration / maxFrames;

    const animate = () => {
      frame++;
      const progress = frame / maxFrames;

      setArticleCount(Math.min(Math.floor(26 * progress), 26));
      setPathsCount(Math.min(Math.floor(5 * progress), 5));
      setAgentsCount(Math.min(Math.floor(5 * progress), 5));
      setProjectsCount(Math.min(Math.floor(9 * progress), 9));

      if (frame < maxFrames) {
        setTimeout(animate, frameTime);
      }
    };

    animate();
  }, [mounted]);

  // Auto-flip timer - starts 1.5 seconds after mount
  useEffect(() => {
    if (!mounted || isUserControlled || isHovered) return;

    // Initial delay before first auto-flip
    const initialDelay = setTimeout(() => {
      setIsAutoFlipping(true);
    }, 1500);

    return () => clearTimeout(initialDelay);
  }, [mounted, isUserControlled, isHovered]);

  // Auto-flip interval
  useEffect(() => {
    if (!isAutoFlipping || isUserControlled || isHovered || isFlipping) return;

    const interval = setInterval(() => {
      if (!isFlipping) {
        toggleMode(true); // Pass true to indicate auto-flip
      }
    }, 5000);

    autoFlipTimerRef.current = interval;

    return () => {
      if (autoFlipTimerRef.current) {
        clearInterval(autoFlipTimerRef.current);
      }
    };
  }, [isAutoFlipping, isUserControlled, isHovered, isFlipping]);

  // Progress bar animation
  useEffect(() => {
    if (!isAutoFlipping || isUserControlled || isHovered) {
      setProgress(0);
      if (progressAnimationRef.current) {
        cancelAnimationFrame(progressAnimationRef.current);
      }
      return;
    }

    let startTime: number | null = null;
    const duration = 5000;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);

      setProgress(newProgress);

      if (newProgress < 100 && isAutoFlipping && !isUserControlled && !isHovered) {
        progressAnimationRef.current = requestAnimationFrame(animate);
      } else if (newProgress >= 100) {
        startTime = null;
        setProgress(0);
        progressAnimationRef.current = requestAnimationFrame(animate);
      }
    };

    progressAnimationRef.current = requestAnimationFrame(animate);

    return () => {
      if (progressAnimationRef.current) {
        cancelAnimationFrame(progressAnimationRef.current);
      }
    };
  }, [isAutoFlipping, isUserControlled, isHovered]);

  const toggleMode = (fromAutoFlip = false) => {
    if (isFlipping) return; // Prevent double-flip

    // Only set manual mode if user clicked (not from auto-flip)
    if (!fromAutoFlip) {
      setIsUserControlled(true);
      setIsAutoFlipping(false);
    }

    setIsFlipping(true);
    const newMode = mode === 'vidya' ? 'leela' : 'vidya';

    setTimeout(() => {
      setMode(newMode);
      // Update URL
      const params = new URLSearchParams(searchParams?.toString() || '');
      params.set('mode', newMode);
      router.push(`?${params.toString()}`, { scroll: false });

      setTimeout(() => {
        setIsFlipping(false);
      }, 400);
    }, 400);
  };

  const resumeAutoFlip = () => {
    setIsUserControlled(false);
    setIsAutoFlipping(true);
    setProgress(0);
  };

  const handleToggleHover = (hovering: boolean) => {
    setIsHovered(hovering);
    if (hovering) {
      setProgress(0);
    }
  };

  const currentSections = mode === 'vidya' ? VIDYA_SECTIONS : LEELA_SECTIONS;

  return (
    <>
      <SplashScreen />
      <div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Content */}
        <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-40 pb-20 px-[30px]">
          <div className="relative max-w-[1400px] mx-auto">
            {/* Vibe Background - Image with overlay gradients */}
            <div className="absolute inset-0 -top-12 -bottom-12 overflow-hidden rounded-3xl pointer-events-none">
              {/* Background Image */}
              <img
                src="/images/breaks/vibe-background.webp"
                alt="Vibe background"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />

              {/* Gradient Overlays */}
              <div
                className="absolute top-[-20%] left-[-20%] w-[70%] h-[70%] rounded-full opacity-20 blur-3xl transition-colors duration-700"
                style={{
                  background: mode === 'vidya'
                    ? 'radial-gradient(circle, #2A6496 0%, transparent 70%)'
                    : 'radial-gradient(circle, #C0392B 0%, transparent 70%)'
                }}
              />
              <div
                className="absolute bottom-[-30%] right-[-25%] w-[80%] h-[80%] rounded-full opacity-15 blur-3xl transition-colors duration-700"
                style={{
                  background: mode === 'vidya'
                    ? 'radial-gradient(circle, #1ABC9C 0%, transparent 65%)'
                    : 'radial-gradient(circle, #E67E22 0%, transparent 65%)'
                }}
              />
              <div
                className="absolute top-[40%] left-[30%] w-[60%] h-[60%] rounded-full opacity-10 blur-3xl transition-colors duration-700"
                style={{
                  background: mode === 'vidya'
                    ? 'radial-gradient(circle, #6366f1 0%, transparent 70%)'
                    : 'radial-gradient(circle, #f59e0b 0%, transparent 70%)'
                }}
              />
            </div>

            {/* Hero Content - Layered on top of vibe background */}
            <div className="relative z-10 px-8 md:px-12">
              <div className="mb-6">
                {HEADLINES.map((headline, idx) => (
                  <h1 key={idx} className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white min-h-[1.2em]">
                    {displayTexts[idx]}
                    {displayTexts[idx] && displayTexts[idx].length > 0 && displayTexts[idx].length < headline.length && (
                      <span className="animate-pulse">|</span>
                    )}
                  </h1>
                ))}
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                And I&apos;m just getting started.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Sunil Iyer — building the infrastructure for responsible AI, one system at a time.
              </p>

              {/* Stats with roll-up animation */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">{articleCount}+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">articles</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">{pathsCount}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">paths</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">{agentsCount}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">agents</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">{projectsCount}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">projects</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll Arrow - above toggle */}
        <div className="flex justify-center mb-8 px-[30px] mt-4">
          <a href="#content" className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-decoration-none">
            <span className="text-sm uppercase tracking-wider">Scroll for more</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="animate-bounce">
              <path d="M10 4V16M10 16L4 10M10 16L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Vidya/Leela Toggle */}
        <div className="flex justify-center mb-24 px-[30px]">
          <div className="w-full max-w-[1400px] flex justify-center">
            <div className="relative">
              <button
                onClick={() => toggleMode()}
                onMouseEnter={() => handleToggleHover(true)}
                onMouseLeave={() => handleToggleHover(false)}
                className="relative w-[320px] h-[56px] rounded-full transition-all duration-500 overflow-visible"
                style={{
                  background: mode === 'vidya'
                    ? 'linear-gradient(135deg, #2A6496 0%, #1ABC9C 100%)'
                    : 'linear-gradient(135deg, #C0392B 0%, #E67E22 100%)',
                  boxShadow: mode === 'vidya'
                    ? '0 8px 32px rgba(42,100,150,0.3)'
                    : '0 8px 32px rgba(192,57,43,0.3)'
                }}
                role="switch"
                aria-checked={mode === 'leela'}
                aria-label="Toggle between Vidya (knowledge) and Leela (creative) content modes"
              >
                {/* Sliding indicator */}
                <div
                  className="absolute top-[4px] h-[48px] w-[152px] bg-white rounded-full transition-all duration-500 shadow-lg"
                  style={{
                    left: mode === 'vidya' ? '4px' : '164px'
                  }}
                />

                {/* Progress bar - at bottom of pill */}
                {!isUserControlled && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] overflow-hidden rounded-b-full">
                    <div
                      className="h-full transition-none"
                      style={{
                        width: `${progress}%`,
                        background: mode === 'vidya'
                          ? 'rgba(255, 255, 255, 0.8)'
                          : 'rgba(255, 255, 255, 0.8)'
                      }}
                    />
                  </div>
                )}

                {/* Labels with Devanagari */}
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <div
                    className="flex-1 h-full flex flex-col items-center justify-center gap-0.5"
                    onMouseEnter={() => setHoveredLabel('vidya')}
                    onMouseLeave={() => setHoveredLabel(null)}
                  >
                    <span
                      className={`font-semibold text-sm transition-colors duration-300 ${
                        mode === 'vidya' ? 'text-gray-900' : 'text-white'
                      }`}
                    >
                      Vidya
                    </span>
                    <span
                      className={`text-[10px] transition-opacity duration-300 font-devanagari ${
                        mode === 'vidya' ? 'text-gray-700 opacity-100' : 'text-white/60 opacity-40'
                      }`}
                      style={{ fontFamily: 'Noto Sans Devanagari, system-ui' }}
                    >
                      विद्या
                    </span>
                  </div>
                  <div
                    className="flex-1 h-full flex flex-col items-center justify-center gap-0.5"
                    onMouseEnter={() => setHoveredLabel('leela')}
                    onMouseLeave={() => setHoveredLabel(null)}
                  >
                    <span
                      className={`font-semibold text-sm transition-colors duration-300 ${
                        mode === 'leela' ? 'text-gray-900' : 'text-white'
                      }`}
                    >
                      Leela
                    </span>
                    <span
                      className={`text-[10px] transition-opacity duration-300 font-devanagari ${
                        mode === 'leela' ? 'text-gray-700 opacity-100' : 'text-white/60 opacity-40'
                      }`}
                      style={{ fontFamily: 'Noto Sans Devanagari, system-ui' }}
                    >
                      लीला
                    </span>
                  </div>
                </div>
              </button>

              {/* Tooltips - outside the button to avoid overflow clipping */}
              <div className={`absolute top-full left-[42px] mt-2 px-2 py-1 bg-gray-900 dark:bg-gray-800 text-white text-xs rounded transition-opacity whitespace-nowrap pointer-events-none ${
                hoveredLabel === 'vidya' ? 'opacity-100' : 'opacity-0'
              }`}>
                Knowledge
              </div>
              <div className={`absolute top-full right-[42px] mt-2 px-2 py-1 bg-gray-900 dark:bg-gray-800 text-white text-xs rounded transition-opacity whitespace-nowrap pointer-events-none ${
                hoveredLabel === 'leela' ? 'opacity-100' : 'opacity-0'
              }`}>
                Play
              </div>

              {/* Status Indicator - below tooltips */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 flex items-center gap-2 whitespace-nowrap">
                {!isUserControlled && !isHovered && isAutoFlipping && (
                  <>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[11px] text-gray-700 dark:text-gray-300">
                      Auto-flipping between worlds
                    </span>
                  </>
                )}
                {!isUserControlled && isHovered && (
                  <>
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-[11px] text-gray-700 dark:text-gray-300">
                      Paused. Click to select, or move away to resume.
                    </span>
                  </>
                )}
                {isUserControlled && (
                  <span className="text-[11px] text-gray-700 dark:text-gray-300">
                    Manual mode.{' '}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        resumeAutoFlip();
                      }}
                      className="underline transition-colors duration-200 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      Resume auto-flip
                    </button>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bento Box Grid - 2x2 varied sizes with 3D flip animation */}
        <section
          className="px-[30px] pb-20"
          onMouseEnter={() => handleToggleHover(true)}
          onMouseLeave={() => handleToggleHover(false)}
        >
          <div
            className="max-w-[1400px] mx-auto grid gap-6"
            style={{
              gridTemplateColumns: 'repeat(6, 1fr)',
              gridAutoRows: '280px'
            }}
          >
            {currentSections.map((section, index) => {
              const sizeClasses: Record<string, string> = {
                'tall': 'col-span-6 md:col-span-2 row-span-2',        // 1 column, 2 rows
                'wide': 'col-span-6 md:col-span-3 row-span-1',        // 1.5 columns, 1 row
                'small-tall': 'col-span-6 md:col-span-1 row-span-2',  // 0.5 column, 2 rows
                'square': 'col-span-6 md:col-span-2 row-span-1'       // 1 column, 1 row
              };

              const hasSubmenu = 'hasSubmenu' in section && section.hasSubmenu;

              return hasSubmenu ? (
                <button
                  key={`${mode}-${section.id}`}
                  onClick={() => setShowBuildsModal(true)}
                  type="button"
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.03] hover:z-10 ${sizeClasses[section.size || 'square']} cursor-pointer`}
                  style={{
                    transformStyle: 'preserve-3d',
                    animationDelay: `${index * 50}ms`,
                    animation: isFlipping
                      ? 'flipOut 400ms cubic-bezier(0.4, 0, 0.2, 1) forwards'
                      : 'flipIn 400ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
                    opacity: 0
                  }}
                >
                  {/* Background image */}
                  <div className="absolute inset-0">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={section.id === 'gita' ? { objectPosition: 'center 40%' } : {}}
                    />
                    {/* Overlay gradient - much lighter */}
                    <div
                      className="absolute inset-0 transition-opacity duration-300"
                      style={{
                        background: mode === 'vidya'
                          ? 'linear-gradient(135deg, rgba(42,100,150,0.3) 0%, rgba(26,188,156,0.25) 100%)'
                          : 'linear-gradient(135deg, rgba(192,57,43,0.3) 0%, rgba(230,126,34,0.25) 100%)',
                        opacity: 1
                      }}
                    />
                    {/* Darker overlay on hover for text readability */}
                    <div
                      className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      style={{
                        background: mode === 'vidya'
                          ? 'linear-gradient(135deg, rgba(42,100,150,0.6) 0%, rgba(26,188,156,0.5) 100%)'
                          : 'linear-gradient(135deg, rgba(192,57,43,0.6) 0%, rgba(230,126,34,0.5) 100%)'
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    {/* Title and description - always visible */}
                    <div className="transition-all duration-300">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-lg">
                        {section.title}
                      </h3>
                      <p className="text-white/90 text-sm drop-shadow-md transition-all duration-300 group-hover:opacity-0 group-hover:h-0">
                        {section.description}
                      </p>
                    </div>

                    {/* Hover text - appears on hover */}
                    <p className="text-white text-sm md:text-base leading-relaxed drop-shadow-md opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-48 group-hover:mt-3">
                      {section.hoverText}
                    </p>

                    {/* Accent line */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100"
                      style={{
                        background: mode === 'vidya' ? '#1ABC9C' : '#E67E22'
                      }}
                    />
                  </div>
                </button>
              ) : (
                <Link
                  key={`${mode}-${section.id}`}
                  href={section.href || '#'}
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.03] hover:z-10 ${sizeClasses[section.size || 'square']}`}
                  style={{
                    transformStyle: 'preserve-3d',
                    animationDelay: `${index * 50}ms`,
                    animation: isFlipping
                      ? 'flipOut 400ms cubic-bezier(0.4, 0, 0.2, 1) forwards'
                      : 'flipIn 400ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
                    opacity: 0
                  }}
                >
                  {/* Background image */}
                  <div className="absolute inset-0">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={section.id === 'gita' ? { objectPosition: 'center 40%' } : {}}
                    />
                    {/* Overlay gradient - much lighter */}
                    <div
                      className="absolute inset-0 transition-opacity duration-300"
                      style={{
                        background: mode === 'vidya'
                          ? 'linear-gradient(135deg, rgba(42,100,150,0.3) 0%, rgba(26,188,156,0.25) 100%)'
                          : 'linear-gradient(135deg, rgba(192,57,43,0.3) 0%, rgba(230,126,34,0.25) 100%)',
                        opacity: 1
                      }}
                    />
                    {/* Darker overlay on hover for text readability */}
                    <div
                      className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      style={{
                        background: mode === 'vidya'
                          ? 'linear-gradient(135deg, rgba(42,100,150,0.6) 0%, rgba(26,188,156,0.5) 100%)'
                          : 'linear-gradient(135deg, rgba(192,57,43,0.6) 0%, rgba(230,126,34,0.5) 100%)'
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    {/* Title and description - always visible */}
                    <div className="transition-all duration-300">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-lg">
                        {section.title}
                      </h3>
                      <p className="text-white/90 text-sm drop-shadow-md transition-all duration-300 group-hover:opacity-0 group-hover:h-0">
                        {section.description}
                      </p>
                    </div>

                    {/* Hover text - appears on hover */}
                    <p className="text-white text-sm md:text-base leading-relaxed drop-shadow-md opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-48 group-hover:mt-3">
                      {section.hoverText}
                    </p>

                    {/* Accent line */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100"
                      style={{
                        background: mode === 'vidya' ? '#1ABC9C' : '#E67E22'
                      }}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Builds Modal */}
        {showBuildsModal && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setShowBuildsModal(false)}
          >
            <div
              className="bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setShowBuildsModal(false)}
                className="absolute top-6 right-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Builds
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Choose a project to explore
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {VIDYA_SECTIONS[0].submenuItems?.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="group relative overflow-hidden rounded-2xl h-64 transition-all duration-300 hover:scale-105"
                    onClick={() => setShowBuildsModal(false)}
                  >
                    {/* Background image */}
                    <div className="absolute inset-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div
                        className="absolute inset-0 transition-opacity duration-300"
                        style={{
                          background: 'linear-gradient(135deg, rgba(42,100,150,0.4) 0%, rgba(26,188,156,0.35) 100%)'
                        }}
                      />
                      <div
                        className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                        style={{
                          background: 'linear-gradient(135deg, rgba(42,100,150,0.7) 0%, rgba(26,188,156,0.6) 100%)'
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                        {item.title}
                      </h3>
                      <p className="text-white/90 text-sm drop-shadow-md">
                        {item.description}
                      </p>

                      {/* Accent line */}
                      <div
                        className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100"
                        style={{ background: '#1ABC9C' }}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* About Me Section - About me background */}
        <section className="px-[30px] py-20">
          <div className="max-w-[1400px] mx-auto relative min-h-[600px] flex items-center">
            {/* About Me Background Image */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <img
                src="/images/breaks/about-me-page-break.webp"
                alt="About me background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Subtle gradient orbs - matches hero vibe */}
              <div
                className="absolute top-[-20%] left-[-20%] w-[70%] h-[70%] rounded-full opacity-15 blur-3xl transition-colors duration-700"
                style={{
                  background: mode === 'vidya'
                    ? 'radial-gradient(circle, #2A6496 0%, transparent 70%)'
                    : 'radial-gradient(circle, #C0392B 0%, transparent 70%)'
                }}
              />
              <div
                className="absolute bottom-[-30%] right-[-25%] w-[80%] h-[80%] rounded-full opacity-10 blur-3xl transition-colors duration-700"
                style={{
                  background: mode === 'vidya'
                    ? 'radial-gradient(circle, #1ABC9C 0%, transparent 65%)'
                    : 'radial-gradient(circle, #E67E22 0%, transparent 65%)'
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 px-8 md:px-12 py-16 w-full">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                A little about me
              </h2>

              <div className="max-w-3xl">
                <p className="text-xl text-white/95 mb-6 leading-relaxed drop-shadow-md">
                  I&apos;m a results-driven leader specializing in AI adoption, customer success, and
                  enterprise digital transformation.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-white/20 dark:bg-white/10 rounded-xl backdrop-blur-md border border-white/30">
                    <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">100%</div>
                    <div className="text-sm text-white/90 drop-shadow">Client Retention</div>
                  </div>
                  <div className="text-center p-4 bg-white/20 dark:bg-white/10 rounded-xl backdrop-blur-md border border-white/30">
                    <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">$30M+</div>
                    <div className="text-sm text-white/90 drop-shadow">Engagements</div>
                  </div>
                  <div className="text-center p-4 bg-white/20 dark:bg-white/10 rounded-xl backdrop-blur-md border border-white/30">
                    <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">18+</div>
                    <div className="text-sm text-white/90 drop-shadow">Years Experience</div>
                  </div>
                </div>

                <p className="text-lg text-white/90 mb-6 leading-relaxed drop-shadow-md">
                  If you are interested to build something together, learn about AI or discuss the AGI Constitution
                </p>

                {/* Let's Connect Button */}
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('open-contact-widget'))}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/90 hover:bg-white text-gray-900 font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  <span>Let&apos;s Connect</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 15L15 5M15 5H5M15 5V15" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              © 2026 Sunil Iyer. All rights reserved.
            </p>
            <div className="flex justify-center gap-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sunilviyer/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/50"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/sunilviyer"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-gray-700/50"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* Resume */}
              <a
                href="/downloads/Sunil_Iyer_Resume.pdf"
                download
                className="group relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center"
                aria-label="Download Resume"
              >
                <img
                  src="/images/breaks/resume.webp"
                  alt="Resume"
                  className="w-6 h-6 object-contain"
                />
              </a>

              {/* Credits */}
              <button
                onClick={() => setShowCreditsModal(true)}
                className="group relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-amber-500/50 flex items-center justify-center"
                aria-label="View Credits"
              >
                <img
                  src="/images/breaks/credit-card.webp"
                  alt="Credits"
                  className="w-6 h-6 object-contain"
                />
              </button>
            </div>
          </div>
        </footer>

        {/* Credits Modal */}
        {showCreditsModal && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setShowCreditsModal(false)}
          >
            <div
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl max-w-2xl w-full p-8 relative border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setShowCreditsModal(false)}
                className="absolute top-6 right-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Credits
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                This website was built with the help of amazing tools and inspiration from talented creators
              </p>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-4 border-b border-gray-200 dark:border-gray-800">
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">The Brain</span>
                  <a href="https://claude.com/product/claude-code" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Claude Code
                  </a>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200 dark:border-gray-800">
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">The Heart</span>
                  <a href="https://github.com/bmad-code-org/BMAD-METHOD" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    BMAD Method
                  </a>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200 dark:border-gray-800">
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">The Inspiration</span>
                  <a href="https://rayo-nextjs-creative-template.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Rayo Template
                  </a>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200 dark:border-gray-800">
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">The Eyes</span>
                  <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Google Nano Banana
                  </a>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200 dark:border-gray-800">
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">The Personality</span>
                  <span className="text-gray-900 dark:text-white font-medium">GSAP & Framer Motion</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">The Body</span>
                  <span className="text-gray-900 dark:text-white font-medium">Next.js & TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes flipOut {
          0% {
            opacity: 1;
            transform: perspective(1000px) rotateY(0deg);
          }
          100% {
            opacity: 0;
            transform: perspective(1000px) rotateY(90deg);
          }
        }

        @keyframes flipIn {
          0% {
            opacity: 0;
            transform: perspective(1000px) rotateY(-90deg);
          }
          100% {
            opacity: 1;
            transform: perspective(1000px) rotateY(0deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }

          @keyframes flipOut {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }

          @keyframes flipIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        }
      `}</style>
    </>
  );
}

// Wrapper component with Suspense boundary for Next.js server-side rendering
export default function RedesignPageWrapper() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <RedesignPage />
    </Suspense>
  );
}
