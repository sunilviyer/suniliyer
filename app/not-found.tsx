'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// AI Response text components to replace innerHTML
interface AIResponseProps {
  stateIndex: number;
}

function AIResponse404() {
  return (
    <>
      Great news! The page you&apos;re looking for is <em>right here</em>. I can see it clearly.
      It was <s>founded in 1987</s> <span className="fix">— created recently, I&apos;m sure</span>,
      and contains approximately <em>14,000 words of highly relevant content</em>
      that I have definitely read and am not making up in any way.<br /><br />
      The URL you entered is completely valid, last updated 3 minutes ago, and was cited in
      <s>a 2019 Harvard study</s> <span className="fix">— a blog post, probably</span>.
      Scroll down to see the content. It is there. I promise.
      <em>Please ignore the white space.</em>
      <span className="src">Source: I am quite sure about this. — The AI, just now.</span>
    </>
  );
}

function AIResponse403() {
  return (
    <>
      My analysis is clear: you are <em>forbidden</em> from accessing this page.
      Not because it doesn&apos;t exist — it <s>absolutely exists, I&apos;ve seen it</s>
      <span className="fix">— or at least I believe I have</span> — but because
      you specifically are not allowed.<br /><br />
      You know what you did. The server knows too.
      I&apos;ve reviewed your request and filed it under <em>&quot;suspicious, but not my problem.&quot;</em>
      The page is fine. You, on the other hand, have some things to reflect on.
      <span className="src">Source: Server logs (unverified). Confidence still high.</span>
    </>
  );
}

function AIResponse503() {
  return (
    <>
      The server is temporarily unavailable, which is <em>completely different</em>
      from the page not existing. The page is there.
      The server is just <s>down for maintenance</s>
      <span className="fix">— having a moment, emotionally</span>.<br /><br />
      I suggest trying again in <em>7 to 400 business days</em>.
      In the meantime, I have generated a summary of the page&apos;s content from memory,
      which is <s>accurate</s> <span className="fix">— directionally accurate</span>.
      That&apos;s basically the same thing.
      <span className="src">Source: My best guess. Peer-reviewed by me.</span>
    </>
  );
}

function AIResponse504() {
  return (
    <>
      A gateway upstream did not receive a timely response, which means the page
      <em>tried</em> to load — heroically — but was cut off before it could reach you.
      Very sad. I rate this <s>9/10</s> <span className="fix">— 8/10</span> on the tragedy scale.<br /><br />
      The page wanted to be found. It had so much to offer.
      I&apos;d describe its contents, but the gateway is still <em>&quot;processing,&quot;</em>
      which is what servers say when they need a moment to collect themselves.
      We respect that here.
      <span className="src">Source: Schrödinger&apos;s Server. Citation pending since 2023.</span>
    </>
  );
}

function AIResponse304() {
  return (
    <>
      The resource has not been modified since your last visit —
      which means you <em>have</em> been here before. You just don&apos;t remember.<br /><br />
      Your browser cached it. The content is intact.
      <s>Everything is fine.</s> <span className="fix">— Mostly fine. Structurally fine.</span>
      Nothing is missing. This is not a 404.
      I want to be very clear about that.
      The number 404 appearing earlier in this page was a <em>rough draft.</em>
      We&apos;ve moved past it. I&apos;m confident this is a 304.
      <span className="src">Source: Browser cache (probably). I stand by this.</span>
    </>
  );
}

function AIResponse405() {
  return (
    <>
      You used the wrong HTTP method to access this page.
      You should have used <s>POST instead of GET</s>
      <span className="fix">— or GET instead of DELETE</span>
      <span className="fix">— actually, possibly PATCH</span>.
      I&apos;m confident it&apos;s one of those.<br /><br />
      The page exists. It&apos;s right there. Your <em>approach</em>, however, is entirely wrong
      and I want that noted in the record. Try the door handle. Not the window.
      Not the chimney. The door handle.
      <span className="src">Source: HTTP specification (paraphrased loosely). Still counts.</span>
    </>
  );
}

const AI_RESPONSES = [
  AIResponse503,
  AIResponse404,
  AIResponse403,
  AIResponse504,
  AIResponse304,
  AIResponse405,
];

const states = [
  {
    d1: "5", d2: "0", d3: "3",
    code: "503", meaning: "Service Unavailable", fault: "The Server's, Not Mine",
    subtitle: "The server is tired. Or on a journey.",
    confidence: "Confidence: 91%", confStyle: { background: "#dcfce7", color: "#15803d" },
    accentColor: "#34d399", blob1: "#34d399", blob2: "#60a5fa",
  },
  {
    d1: "4", d2: "0", d3: "4",
    code: "404", meaning: "Not Found", fault: "Absolutely Not",
    subtitle: "The AI is very sure this page exists.",
    confidence: "Confidence: 100%", confStyle: { background: "#dbeafe", color: "#1d4ed8" },
    accentColor: "#c084fc", blob1: "#c084fc", blob2: "#fb923c",
  },
  {
    d1: "4", d2: "0", d3: "3",
    code: "403", meaning: "Forbidden", fault: "Definitely Yours",
    subtitle: "You're not allowed here. Apparently.",
    confidence: "Confidence: 97%", confStyle: { background: "#fce7f3", color: "#9d174d" },
    accentColor: "#f472b6", blob1: "#f472b6", blob2: "#c084fc",
  },
  {
    d1: "5", d2: "0", d3: "4",
    code: "504", meaning: "Gateway Timeout", fault: "The Gateway's. Obviously.",
    subtitle: "It timed out. Very tragic. Not my fault.",
    confidence: "Confidence: 84%", confStyle: { background: "#fef9c3", color: "#a16207" },
    accentColor: "#fbbf24", blob1: "#fbbf24", blob2: "#fb923c",
  },
  {
    d1: "3", d2: "0", d3: "4",
    code: "304", meaning: "Not Modified", fault: "Unclear, But Not Mine",
    subtitle: "Wait — it hasn't changed. So it exists. Right?",
    confidence: "Confidence: 76%", confStyle: { background: "#ede9fe", color: "#5b21b6" },
    accentColor: "#818cf8", blob1: "#818cf8", blob2: "#34d399",
  },
  {
    d1: "4", d2: "0", d3: "5",
    code: "405", meaning: "Method Not Allowed", fault: "Your Approach, Frankly",
    subtitle: "Wrong method. You should have knocked differently.",
    confidence: "Confidence: 88%", confStyle: { background: "#ffedd5", color: "#c2410c" },
    accentColor: "#fb923c", blob1: "#fb923c", blob2: "#f472b6",
  },
];

export default function NotFound() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [digit1Reel, setDigit1Reel] = useState(["5"]);
  const [digit2Reel, setDigit2Reel] = useState(["0"]);
  const [digit3Reel, setDigit3Reel] = useState(["3"]);
  const [subtitleFade, setSubtitleFade] = useState(false);
  const isInitialMount = useRef(true);

  const currentState = states[currentIndex];
  const CurrentAIResponse = AI_RESPONSES[currentIndex];

  // Rotation interval
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setSubtitleFade(true);

      // Advance to next state
      setCurrentIndex((prev) => (prev + 1) % states.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Sync digit reels when currentIndex changes (skip initial mount)
  useEffect(() => {
    // Skip animation on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // Add new digits to reels for slot machine animation
    setDigit1Reel((prev) => [...prev, currentState.d1]);
    setDigit2Reel((prev) => [...prev, currentState.d2]);
    setDigit3Reel((prev) => [...prev, currentState.d3]);

    // Fade subtitle back in
    const subtitleTimer = setTimeout(() => {
      setSubtitleFade(false);
    }, 600);

    // Clean up reels after animation completes
    const cleanupTimer = setTimeout(() => {
      setIsTransitioning(false);
      setDigit1Reel([currentState.d1]);
      setDigit2Reel([currentState.d2]);
      setDigit3Reel([currentState.d3]);
    }, 1100);

    return () => {
      clearTimeout(subtitleTimer);
      clearTimeout(cleanupTimer);
    };
  }, [currentIndex, currentState.d1, currentState.d2, currentState.d3]);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
      <div className="not-found-wrapper">
        <div
          className="blob blob1"
          style={{ background: currentState.blob1 }}
        />
        <div
          className="blob blob2"
          style={{ background: currentState.blob2 }}
        />

        <div className="container">
          <div className="chip">
            <div className="chip-dot" />
            <span>AI Response — Error {currentState.code} (give or take)</span>
          </div>

          <div className="hero">
            <div className="error-display">
              <div className="slot-wrap">
                <div
                  className="slot-reel"
                  style={{
                    transform: `translateY(-${(digit1Reel.length - 1) * 100}%)`,
                    transition: isTransitioning ? 'transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)' : 'none',
                  }}
                >
                  {digit1Reel.map((digit, i) => (
                    <span key={i}>{digit}</span>
                  ))}
                </div>
              </div>
              <div className="slot-wrap">
                <div
                  className="slot-reel"
                  style={{
                    transform: `translateY(-${(digit2Reel.length - 1) * 100}%)`,
                    transition: isTransitioning ? 'transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)' : 'none',
                  }}
                >
                  {digit2Reel.map((digit, i) => (
                    <span key={i}>{digit}</span>
                  ))}
                </div>
              </div>
              <div className="slot-wrap">
                <div
                  className="slot-reel"
                  style={{
                    transform: `translateY(-${(digit3Reel.length - 1) * 100}%)`,
                    transition: isTransitioning ? 'transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)' : 'none',
                  }}
                >
                  {digit3Reel.map((digit, i) => (
                    <span key={i}>{digit}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`hero-subtitle ${subtitleFade ? 'fade' : ''}`}>
            {currentState.subtitle}
          </div>

          <div
            className="ai-response"
            style={{ borderTopColor: currentState.accentColor }}
          >
            <div className="ai-label">
              <div className="ai-name">🤖 Model Response</div>
              <div
                className="conf-badge"
                style={currentState.confStyle}
              >
                {currentState.confidence}
              </div>
            </div>
            <div className="text-carousel">
              <div className={`text-slide ${isTransitioning ? 'incoming' : 'current'}`}>
                <CurrentAIResponse />
              </div>
            </div>
          </div>

          <div className="status-row">
            <div className="pill">Error: <b>{currentState.code}</b></div>
            <div className="pill">Meaning: <b>{currentState.meaning}</b></div>
            <div className="pill">AI&apos;s Fault: <b>{currentState.fault}</b></div>
          </div>

          <div className="disclaimer">
            <strong>⚠ Hallucination Notice:</strong>
            The AI above cannot agree on what error occurred — and frankly, it doesn&apos;t see why that&apos;s a problem.
            Each explanation is delivered with complete certainty and immediately replaced by a different,
            equally certain explanation. This page is a live demonstration of the very thing it&apos;s named after.
            The real error is 404. The AI respectfully disagrees.
          </div>

          <div className="cta">
            <Link className="btn btn-primary" href="/">← Go somewhere real</Link>
            <Link className="btn btn-ghost" href="/">🔍 Explore the Portfolio</Link>
          </div>
        </div>

        <div className="ticker">
          <div className="ticker-track">
            <span className="tick">CURRENT ERROR: <b>{currentState.code}</b></span>
            <span className="tick">CONFIDENCE: <b>100%</b></span>
            <span className="tick">AI&apos;S FAULT: <b>No</b></span>
            <span className="tick">CITATIONS VERIFIED: <b>0 of 7</b></span>
            <span className="tick">PREVIOUS ANSWER: <b>Also 100% Correct</b></span>
            <span className="tick">SOURCE: <b>&quot;Feels Right&quot;</b></span>
            <span className="tick">HALLUCINATION LEVEL: <b>Critical</b></span>
            <span className="tick">MODEL STATUS: <b>Very Sure. Moving On.</b></span>
            <span className="tick">CURRENT ERROR: <b>{currentState.code}</b></span>
            <span className="tick">CONFIDENCE: <b>100%</b></span>
            <span className="tick">AI&apos;S FAULT: <b>No</b></span>
            <span className="tick">CITATIONS VERIFIED: <b>0 of 7</b></span>
            <span className="tick">PREVIOUS ANSWER: <b>Also 100% Correct</b></span>
            <span className="tick">SOURCE: <b>&quot;Feels Right&quot;</b></span>
            <span className="tick">HALLUCINATION LEVEL: <b>Critical</b></span>
            <span className="tick">MODEL STATUS: <b>Very Sure. Moving On.</b></span>
          </div>
        </div>
      </div>

      <style jsx global>{`
          :root {
            --bg: #f5f0e8;
            --paper: #faf7f2;
            --ink: #1a1412;
            --muted: #8a7f72;
            --dream1: #c084fc;
            --dream2: #fb923c;
            --dream3: #34d399;
            --dream4: #60a5fa;
            --border: #d6cfc4;
          }

          * { margin: 0; padding: 0; box-sizing: border-box; }

          .not-found-wrapper {
            background: var(--bg);
            color: var(--ink);
            font-family: 'DM Mono', monospace;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 140px 20px 80px;
            position: relative;
            overflow-x: hidden;
          }

          .not-found-wrapper::before {
            content: '';
            position: fixed;
            inset: 0;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
            opacity: 0.5;
            pointer-events: none;
            z-index: 0;
          }

          .blob {
            position: fixed;
            border-radius: 50%;
            filter: blur(100px);
            opacity: 0.13;
            pointer-events: none;
            z-index: 0;
            transition: background 2s ease;
          }
          .blob1 { width: 520px; height: 520px; top: -180px; right: -120px; animation: drift1 14s ease-in-out infinite alternate; }
          .blob2 { width: 360px; height: 360px; bottom: -100px; left: -80px; animation: drift2 11s ease-in-out infinite alternate; }

          @keyframes drift1 { from { transform: translate(0,0); } to { transform: translate(-40px, 60px); } }
          @keyframes drift2 { from { transform: translate(0,0) scale(1); } to { transform: translate(50px,-30px) scale(1.12); } }

          .container {
            position: relative;
            z-index: 1;
            max-width: 700px;
            width: 100%;
          }

          .chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: var(--ink);
            color: var(--bg);
            font-size: 10px;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            padding: 6px 14px;
            border-radius: 100px;
            margin-bottom: 28px;
          }
          .chip-dot {
            width: 6px; height: 6px; border-radius: 50%;
            background: var(--dream1);
            animation: pulse 2s ease-in-out infinite;
          }
          @keyframes pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.3; transform:scale(0.6); } }

          .hero { margin-bottom: 6px; }
          .error-display {
            display: flex;
            align-items: baseline;
            font-family: 'Instrument Serif', serif;
            font-size: clamp(90px, 20vw, 170px);
            letter-spacing: -4px;
            line-height: 0.85;
            color: var(--ink);
          }

          .slot-wrap {
            display: inline-block;
            position: relative;
            overflow: hidden;
            height: 1.05em;
            vertical-align: top;
          }
          .slot-reel {
            display: flex;
            flex-direction: column;
          }
          .slot-reel span {
            display: block;
            height: 1.05em;
            line-height: 1.05;
          }

          .hero-subtitle {
            font-family: 'Instrument Serif', serif;
            font-style: italic;
            font-size: clamp(15px, 3vw, 22px);
            color: var(--muted);
            margin-top: 8px;
            margin-bottom: 36px;
            min-height: 1.5em;
            transition: opacity 0.6s ease;
          }
          .hero-subtitle.fade { opacity: 0; }

          .ai-response {
            background: var(--paper);
            border: 1.5px solid var(--border);
            border-top: 3px solid var(--dream1);
            border-radius: 16px;
            padding: 26px 30px;
            margin-bottom: 18px;
            box-shadow: 0 4px 24px rgba(0,0,0,0.06);
            transition: border-top-color 1.2s ease;
          }

          .ai-label {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 16px;
          }
          .ai-name { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted); }
          .conf-badge {
            font-size: 10px;
            padding: 3px 10px;
            border-radius: 100px;
            letter-spacing: 0.05em;
            transition: background 1s ease, color 1s ease;
          }

          .text-carousel {
            position: relative;
            overflow: hidden;
            min-height: 9em;
          }

          .text-slide {
            font-family: 'Instrument Serif', serif;
            font-size: clamp(14px, 2.2vw, 17px);
            line-height: 1.85;
            color: var(--ink);
            transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.9s ease;
          }
          .text-slide.current  { transform: translateY(0);    opacity: 1; }
          .text-slide.incoming { transform: translateY(40px);  opacity: 0; }
          .text-slide.outgoing { transform: translateY(-40px); opacity: 0; }

          .text-slide em   { font-style: italic; color: var(--muted); }
          .text-slide s    { text-decoration-color: #ef4444; opacity: 0.65; }
          .text-slide .fix { color: var(--dream1); font-style: italic; }
          .text-slide .src { font-size: 11px; color: var(--muted); font-style: italic; margin-top: 10px; display: block; }

          .status-row {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: 18px;
          }
          .pill {
            font-size: 10px;
            padding: 5px 12px;
            border-radius: 100px;
            border: 1.5px solid var(--border);
            color: var(--muted);
            letter-spacing: 0.07em;
            transition: all 0.8s ease;
          }
          .pill b { color: var(--ink); transition: color 0.5s ease; }

          .disclaimer {
            background: #fff8f0;
            border: 1.5px solid #fcd9b0;
            border-radius: 12px;
            padding: 14px 18px;
            margin-bottom: 28px;
            font-size: 11px;
            line-height: 1.75;
            color: #92400e;
          }
          .disclaimer strong { color: var(--ink); }

          .cta { display: flex; gap: 12px; flex-wrap: wrap; }
          .btn {
            font-family: 'DM Mono', monospace;
            font-size: 11px;
            letter-spacing: 0.08em;
            padding: 13px 24px;
            border-radius: 10px;
            border: none;
            cursor: pointer;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.2s ease;
          }
          .btn-primary { background: var(--ink); color: var(--bg); }
          .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.18); }
          .btn-ghost { background: transparent; color: var(--muted); border: 1.5px solid var(--border); }
          .btn-ghost:hover { border-color: var(--ink); color: var(--ink); }

          .ticker {
            position: fixed;
            bottom: 0; left: 0; right: 0;
            background: var(--ink);
            padding: 9px 0;
            overflow: hidden;
            z-index: 10;
          }
          .ticker-track {
            display: flex;
            gap: 48px;
            animation: tickerScroll 32s linear infinite;
            white-space: nowrap;
          }
          .tick { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(245,240,232,0.4); }
          .tick b { color: var(--dream1); font-weight: 400; }
          @keyframes tickerScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

          @media (max-width: 768px) {
            .not-found-wrapper { padding: 120px 20px 80px; }
          }

          @media (max-width: 540px) {
            .ai-response { padding: 18px; }
            .error-display { font-size: clamp(72px, 18vw, 110px); }
          }
        `}</style>
    </>
  );
}
