'use client';

/**
 * AGI Constitution - Interior Design Showcase
 * All 14 design concepts from Claude Design handoff with ACTUAL constitution content
 *
 * Visit: http://localhost:3006/constitution/showcase
 */

export default function ShowcasePage() {
  return (
    <div style={{ background: '#EFE8D7', minHeight: '100vh', padding: '0' }}>

      {/* Design Concept 01: Story Opener - Nachiketa & Yama */}
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

      <div style={{height: '80px', background: '#C9ADA7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '24px', color: '#2D2D2D'}}>
        ✦ Scroll for more designs (1 of 14) ✦
      </div>

      {/* Design Concept 02: Substrate Diptych */}
      <div className="ib c-substrate" style={{padding: 0}}>
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

      {/* Footer */}
      <div style={{padding: '80px 40px', background: '#2D2D2D', color: '#F3F4F6', textAlign: 'center'}}>
        <h3 style={{fontFamily: 'var(--font-dev)', fontSize: '48px', marginBottom: '24px'}}>ॐ</h3>
        <p style={{fontSize: '16px', marginBottom: '12px'}}>
          2 of 14 design concepts shown
        </p>
        <p style={{fontSize: '14px', opacity: 0.7}}>
          Open <strong>http://localhost:3006/constitution/showcase</strong> to see the real Claude Design layouts
        </p>
      </div>

    </div>
  );
}
