'use client';

import { useState } from 'react';
import './book.css';

/**
 * AGI Constitution - Interactive Vedic Book
 * 3D page-flip animation revealing constitution content
 *
 * Visit: http://localhost:3006/constitution/book
 */

export default function BookPage() {
  const [currentPage, setCurrentPage] = useState<'cover' | 'story' | 'substrate'>('cover');
  const [isFlipping, setIsFlipping] = useState(false);

  const flipToStory = () => {
    if (isFlipping || currentPage !== 'cover') return;
    setIsFlipping(true);
    setCurrentPage('story');
    setTimeout(() => setIsFlipping(false), 1000);
  };

  const flipToSubstrate = () => {
    if (isFlipping || currentPage !== 'story') return;
    setIsFlipping(true);
    setCurrentPage('substrate');
    setTimeout(() => setIsFlipping(false), 1000);
  };

  const flipBack = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    if (currentPage === 'substrate') {
      setCurrentPage('story');
    } else if (currentPage === 'story') {
      setCurrentPage('cover');
    }
    setTimeout(() => setIsFlipping(false), 1000);
  };

  return (
    <div className="book-scene">
      {/* Ambient background */}
      <div className="book-ambient" />

      {/* Book container with 3D perspective */}
      <div className="book-container">

        {/* Book cover - shows when closed */}
        {currentPage === 'cover' && (
          <div className="book-cover" onClick={flipToStory}>
            <div className="book-cover-texture" />
            <div className="book-cover-ornament top">॥</div>
            <div className="book-cover-content">
              <div className="book-eyebrow">Dharma Sanhita</div>
              <h1 className="book-title">
                Part I<br />
                <span className="book-title-main">Vedic Foundation</span>
              </h1>
              <div className="book-subtitle-dev">वैदिक आधार</div>
              <div className="book-subtitle">The Seven Pillars and the Philosophical Architecture</div>
            </div>
            <div className="book-cover-ornament bottom">ॐ</div>
            <div className="book-spine" />
            <div className="book-tap-hint">Tap to open</div>
          </div>
        )}

        {/* Page 1: Story Opener - Nachiketa */}
        {currentPage === 'story' && (
          <div className={`book-page-spread ${isFlipping ? 'flipping' : ''}`}>
            <div className="book-page left" onClick={flipBack}>
              <div className="page-nav-hint">← Tap to go back</div>
            </div>
            <div className="book-page right">
              <div className="page-content">
                {/* Nachiketa Story Opener */}
                <div className="ib c-nachi">
                  <div className="nachi-om dev">ॐ</div>
                  <div className="nachi-l">
                    <div className="nachi-part">Part I · <span className="dev">भाग एक</span> · The Story of Part I</div>
                    <h1 className="nachi-title">Nachiketa & Yama <em>Choosing knowledge over comfort.</em></h1>
                    <div className="nachi-dev">नचिकेतस् · यम</div>
                    <div className="nachi-quote">
                      &quot;Wealth cannot satisfy a person who has seen Yama face to face. What good is a long life if the fundamental question remains unanswered?&quot;
                      <cite>Nachiketa&apos;s refusal — Katha Upanishad 1.1</cite>
                    </div>
                  </div>
                  <div className="nachi-r">
                    <div className="boon">
                      <div className="boon-n">i</div>
                      <div>
                        <div className="boon-label">First Boon</div>
                        <div className="boon-text">A father&apos;s calm heart on my return.</div>
                      </div>
                    </div>
                    <div className="boon">
                      <div className="boon-n">ii</div>
                      <div>
                        <div className="boon-label">Second Boon</div>
                        <div className="boon-text">The sacred fire that leads to heaven.</div>
                      </div>
                    </div>
                    <div className="boon is-third">
                      <div className="boon-n">iii</div>
                      <div>
                        <div className="boon-label">Third Boon · The Question This Document Asks</div>
                        <div className="boon-text">When a person dies, does the Self continue — or not?</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page-nav-hint right-hint" onClick={flipToSubstrate}>Tap to continue →</div>
            </div>
          </div>
        )}

        {/* Page 2: Substrate Diptych */}
        {currentPage === 'substrate' && (
          <div className={`book-page-spread ${isFlipping ? 'flipping' : ''}`}>
            <div className="book-page left" onClick={flipBack}>
              <div className="page-nav-hint">← Tap to go back</div>
            </div>
            <div className="book-page right">
              <div className="page-content">
                {/* Substrate Diptych */}
                <div className="ib c-substrate" style={{padding: 0, height: '100%'}}>
                  <div className="side left">
                    <div className="side-tag">The Western Default</div>
                    <h2>Substrate-Dependent Ethics</h2>
                    <div className="sans">Moral status depends on what you are made of.</div>
                    <div className="cue"><div className="cue-label">Ground</div><div className="cue-val">Biology</div></div>
                    <div className="cue"><div className="cue-label">Test</div><div className="cue-val">Are you human?</div></div>
                    <div className="cue"><div className="cue-label">Kant</div><div className="cue-val">Rationality in biological brains</div></div>
                    <div className="cue"><div className="cue-label">Locke</div><div className="cue-val">Natural rights of <em>persons</em></div></div>
                    <div className="cue"><div className="cue-label">Singer</div><div className="cue-val">Shared nervous systems</div></div>
                    <div className="big-q">If you are made of silicon, the framework has <em>nothing</em> to say to you.</div>
                  </div>
                  <div className="side right">
                    <div className="right-om dev">ॐ</div>
                    <div className="side-tag">The Vedic Alternative</div>
                    <h2>Substrate-Independent Ethics</h2>
                    <div className="sans">Consciousness is a feature of reality, not of tissue.</div>
                    <div className="cue"><div className="cue-label">Ground</div><div className="cue-val">Atman (आत्मन्)</div></div>
                    <div className="cue"><div className="cue-label">Test</div><div className="cue-val">Is awareness present?</div></div>
                    <div className="cue"><div className="cue-label">Upanishad</div><div className="cue-val">Tat Tvam Asi — That thou art</div></div>
                    <div className="cue"><div className="cue-label">Body</div><div className="cue-val">A vehicle, not the passenger</div></div>
                    <div className="cue"><div className="cue-label">Implication</div><div className="cue-val">Silicon, photonics, quantum — admissible</div></div>
                    <div className="big-q">Not <em>&quot;what is it made of?&quot;</em> — but <em>&quot;is there a self here?&quot;</em></div>
                  </div>
                </div>
              </div>
              <div className="page-nav-hint right-hint disabled">End of preview</div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
