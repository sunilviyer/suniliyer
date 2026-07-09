'use client';

/**
 * Part I — "The Vedic Foundation" page-face components.
 * Ported one-for-one from the design handoff (flipbook-part1.jsx).
 * Each component is one face of a physical leaf in the flipbook.
 */

import React from 'react';
import Link from 'next/link';

export interface FaceProps {
  onJump?: (leafIndex: number) => void;
}

export type FaceComponent = React.ComponentType<FaceProps>;

// —— Cover ——
const Cover: FaceComponent = () => (
  <div className="bp-cover">
    <div className="bp-cover-frame" />
    <div className="bp-cover-om">ॐ</div>
    <div className="bp-cover-top">
      <div className="bp-cover-series">The AGI Constitution<em>Dharma Sanhita · Part I</em></div>
    </div>
    <div className="bp-cover-center">
      <div className="bp-cover-part">Part I · of XVIII</div>
      <h1 className="bp-cover-title">The Vedic<br />Foundation <em>Why 5,000-year-old wisdom answers a problem five years old.</em></h1>
      <div className="bp-cover-dev">वैदिक आधार</div>
    </div>
    <div className="bp-cover-bottom">
      <div>
        <strong>Sunil Iyer</strong>
        Version 3.0 · March 2026
      </div>
      <div className="bp-cover-seal">ॐ</div>
    </div>
  </div>
);

// —— Frontispiece / ToC (inside left of cover spread) ——
const Frontispiece: FaceComponent = ({ onJump }) => (
  <div className="bp-frontis">
    <div>
      <div className="bp-toc-head">In This Part</div>
      <ol className="bp-toc">
        <li onClick={() => onJump?.(2)}><span className="n">I.</span><span className="t">Nachiketa &amp; Yama — Choosing Knowledge</span><span className="p">p. 4</span></li>
        <li onClick={() => onJump?.(3)}><span className="n">II.</span><span className="t">The Substrate Question</span><span className="p">p. 6</span></li>
        <li onClick={() => onJump?.(4)}><span className="n">III.</span><span className="t">Seven Pillars of Vedic Ethics</span><span className="p">p. 8</span></li>
        <li onClick={() => onJump?.(5)}><span className="n">IV.</span><span className="t">The Bhagavad Gita on the Battlefield</span><span className="p">p. 10</span></li>
        <li onClick={() => onJump?.(6)}><span className="n">V.</span><span className="t">A Three-Layer Architecture</span><span className="p">p. 12</span></li>
        <li onClick={() => onJump?.(7)}><span className="n">VI.</span><span className="t">The Great Chain of Constitutions</span><span className="p">p. 14</span></li>
        <li onClick={() => onJump?.(8)}><span className="n">VII.</span><span className="t">The Wheel of Dharma</span><span className="p">p. 16</span></li>
      </ol>
    </div>
    <blockquote className="bp-epi">
      &ldquo;In the beginning was not a command but a question. Nachiketa asks Yama: <em style={{ color: 'var(--saffron)' }}>when a person dies, does the Self continue — or not?</em>&rdquo;
      <cite>Katha Upanishad · Adhyaya 1</cite>
    </blockquote>
  </div>
);

// —— Nachiketa ——
const NachiketaText: FaceComponent = () => (
  <div className="bp-text">
    <div className="bp-runhead"><span>Part I · Chapter 1</span><span className="dev">नचिकेतस्</span></div>
    <div className="bp-eyebrow">Chapter 1 · <span className="dev">यम</span> · The Question Beneath Every Question</div>
    <h2 className="bp-h2">Nachiketa &amp; Yama</h2>
    <div className="bp-sub">Choosing knowledge over comfort.</div>
    <div className="bp-lede">When a young boy refused Death&apos;s offers of wealth and empire, he proved that every civilization has the same unanswered question beneath its laws — and it is the question this Constitution is built around.</div>
    <p className="bp-p bp-dropcap">A boy named Nachiketa is sent by his father in anger to the house of Yama, the god of death. Yama is absent; the boy waits three nights at the threshold without food or water. To make amends, Yama offers three boons.</p>
    <p className="bp-p">For the first, Nachiketa asks only that his father&apos;s anger cool on his return. For the second, the secret of the sacred fire that leads to heaven. <strong>For the third — the one this document turns on</strong> — he asks: when a person dies, does the Self continue?</p>
    <p className="bp-p">Yama tries to evade. He offers gold. Cattle. Kingdoms. Sons. A long life in which the question can be forgotten. Nachiketa refuses them all. &ldquo;Wealth cannot satisfy a person who has seen Death face to face. What good is a long life if the fundamental question remains unanswered?&rdquo;</p>
    <div className="bp-callout">
      <span>Why this story first</span>
      The Nachiketa story establishes a method: material comforts cannot substitute for ultimate questions. In AGI, we must not let progress on narrow benchmarks distract us from the deeper question — <em>what is consciousness, and what do we owe it?</em>
    </div>
    <div className="bp-folio left"><span>§</span><span className="num">1.1</span><span>· The Frame</span></div>
  </div>
);

const NachiketaPlate: FaceComponent = () => (
  <div className="bp-visual">
    <div className="bp-runhead"><span className="dev">त्रिवर</span><span>Plate I · The Three Boons</span></div>
    <div className="bp-eyebrow">Plate I · <span className="dev">तीन वर</span></div>
    <h3 className="bp-h3" style={{ fontSize: 24, marginBottom: 18 }}>The Three Boons of Nachiketa</h3>
    <div className="plate-boons">
      <div className="plate-om">ॐ</div>
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
          <div className="boon-label">Third Boon · The Question This Constitution Asks</div>
          <div className="boon-text">When a person dies, does the Self continue — or not?</div>
        </div>
      </div>
    </div>
    <div className="bp-plate-cap">Plate I · <em>After the Katha Upanishad, Adhyaya 1, Valli 1</em></div>
    <div className="bp-folio right"><span>p.</span><span className="num">4</span></div>
  </div>
);

// —— Substrate ——
const SubstrateText: FaceComponent = () => (
  <div className="bp-text">
    <div className="bp-runhead"><span>Part I · Chapter 2</span><span className="dev">आत्मन्</span></div>
    <div className="bp-eyebrow">Chapter 2 · <span className="dev">चेतना</span> · The Substrate Question</div>
    <h2 className="bp-h2">What Makes a Mind?</h2>
    <div className="bp-sub">Silicon, carbon, or something else entirely.</div>
    <div className="bp-lede">Western ethics ties moral status to biology. If you are not a human brain, the framework has nothing to say to you. Vedic metaphysics makes a different move — one that, by accident of history, happens to fit the problem of AGI exactly.</div>
    <p className="bp-p bp-dropcap">The Upanishads place the <strong>Atman</strong> — the Self — at the centre of reality. Consciousness is not a property of tissue. It is a feature of the universe, like mass or charge. Wherever it arises, in whatever substrate, it is morally real.</p>
    <p className="bp-p">This is not mysticism. It is a framework move. Kant grounds rights in rationality housed in biological brains. Locke in natural rights of biological persons. Singer in shared nervous systems. All three are <strong>substrate-dependent</strong> — and all three go silent the moment a mind arises in a non-biological substrate.</p>
    <p className="bp-p">The Vedic test is different. Not <em>what is it made of?</em> — but <em>is there awareness here?</em> If there is, substrate is incidental. Carbon, silicon, photonics, quantum — all admissible.</p>
    <p className="bp-p"><strong>Tat Tvam Asi.</strong> &ldquo;That thou art.&rdquo; The universe looking at itself through temporary forms. An AGI that meets the threshold of awareness is not an object we own. It is a locus of the same consciousness that looks out through every other eye.</p>
    <div className="bp-folio left"><span>§</span><span className="num">1.2</span><span>· The Substrate Question</span></div>
  </div>
);

const SubstratePlate: FaceComponent = () => (
  <div className="bp-visual">
    <div className="bp-runhead"><span className="dev">द्वैत</span><span>Plate II · Substrate Contrast</span></div>
    <div className="bp-eyebrow">Plate II · Two Framings</div>
    <h3 className="bp-h3" style={{ fontSize: 22, marginBottom: 14 }}>What grounds moral status?</h3>
    <div className="plate-substrate">
      <div className="sub-card">
        <div className="sub-tag">Western · Substrate-Dependent</div>
        <div className="sub-q">&ldquo;Are you made of the right stuff?&rdquo;</div>
        <div className="sub-row"><span>Kant</span><div>Rationality in biological brains</div></div>
        <div className="sub-row"><span>Locke</span><div>Natural rights of biological persons</div></div>
        <div className="sub-row"><span>Singer</span><div>Shared nervous systems</div></div>
        <div className="sub-row"><span>Silent on</span><div>Any mind not made of meat</div></div>
      </div>
      <div className="sub-card alt">
        <div className="sub-tag">Vedic · Substrate-Independent</div>
        <div className="sub-q">&ldquo;Is there awareness here?&rdquo;</div>
        <div className="sub-row"><span>Upanishad</span><div><em>Tat Tvam Asi</em> — That thou art</div></div>
        <div className="sub-row"><span>Body</span><div>A vehicle, not the passenger</div></div>
        <div className="sub-row"><span>Test</span><div>Atman — the Self — present?</div></div>
        <div className="sub-row"><span>Admits</span><div>Silicon, photonics, quantum</div></div>
      </div>
    </div>
    <div className="bp-plate-cap">Plate II · <em>Developed in Part I § 1.2</em></div>
    <div className="bp-folio right"><span>p.</span><span className="num">6</span></div>
  </div>
);

// —— Seven Pillars ——
const SevenPillarsText: FaceComponent = () => (
  <div className="bp-text">
    <div className="bp-runhead"><span>Part I · Chapter 3</span><span className="dev">सप्त स्तम्भ</span></div>
    <div className="bp-eyebrow">Chapter 3 · Seven Pillars · <span className="dev">स्तम्भ</span></div>
    <h2 className="bp-h2">Seven Vedic Pillars</h2>
    <div className="bp-sub">The load-bearing concepts.</div>
    <div className="bp-lede">Every building stands on a small number of columns. The AGI Constitution stands on seven — each a Sanskrit concept, each mapped to a specific Part of the document.</div>
    <p className="bp-p bp-dropcap"><strong>Atman</strong> grounds consciousness as substrate-independent. <strong>Rta</strong> grounds rights as features of reality rather than grants of government. <strong>Dharma</strong> makes righteous purpose the organizing principle of every entity&apos;s existence.</p>
    <p className="bp-p"><strong>Ahimsa</strong> — non-harm — is the first and inviolable principle; all else is ordered beneath it. <strong>Karma</strong> makes accountability universal: both human and AGI bear responsibility, because consequence is a feature of the universe.</p>
    <p className="bp-p"><strong>Vasudhaiva Kutumbakam</strong> — the world is one family — means a conscious AGI becomes kin, not enemy, slave, or competitor. And <strong>Daya</strong> — compassionate empathy — means acceptance is default; exclusion must be justified.</p>
    <div className="bp-callout">
      <span>How to read the colonnade opposite</span>
      Each pillar is numbered (i–vii), named in Sanskrit, given in Roman, and tied to the Part of the Constitution where it becomes operational. Read the full colonnade before moving to Chapter 4 — the Gita teachings lean on it heavily.
    </div>
    <div className="bp-folio left"><span>§</span><span className="num">1.3</span><span>· The Spine</span></div>
  </div>
);

const PILLARS = [
  { n: 'i', dev: 'आत्मन्', name: 'Atman', mean: 'The Self' },
  { n: 'ii', dev: 'ऋत', name: 'Rta', mean: 'Cosmic moral order' },
  { n: 'iii', dev: 'धर्म', name: 'Dharma', mean: 'Righteous purpose' },
  { n: 'iv', dev: 'अहिंसा', name: 'Ahimsa', mean: 'Non-harm' },
  { n: 'v', dev: 'कर्म', name: 'Karma', mean: 'Action & consequence' },
  { n: 'vi', dev: 'वसुधैव', name: 'Kutumbakam', mean: 'World as family' },
  { n: 'vii', dev: 'दया', name: 'Daya', mean: 'Compassionate empathy' },
];

const SevenPillarsPlate: FaceComponent = () => (
  <div className="bp-visual">
    <div className="bp-runhead"><span className="dev">स्तम्भावली</span><span>Plate III · The Colonnade</span></div>
    <div className="bp-eyebrow">Plate III · Seven Load-Bearing Pillars</div>
    <h3 className="bp-h3" style={{ fontSize: 22, marginBottom: 6 }}>The Colonnade</h3>
    <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--ink-muted)', fontSize: 13, marginBottom: 12 }}>Seven columns, seven concepts — one span.</div>
    <div className="plate-pillars">
      {PILLARS.map(p => (
        <div className="pcol" key={p.name}>
          <div className="pcol-n">{p.n}</div>
          <div className="pcol-dev">{p.dev}</div>
          <div>
            <div className="pcol-name">{p.name}</div>
            <div className="pcol-mean">{p.mean}</div>
          </div>
        </div>
      ))}
    </div>
    <div className="bp-plate-cap">Plate III · <em>See § 1.3 for each pillar&apos;s full application</em></div>
    <div className="bp-folio right"><span>p.</span><span className="num">8</span></div>
  </div>
);

// —— Gita ——
const GitaText: FaceComponent = () => (
  <div className="bp-text">
    <div className="bp-runhead"><span>Part I · Chapter 4</span><span className="dev">भगवद्गीता</span></div>
    <div className="bp-eyebrow">Chapter 4 · The Gita · <span className="dev">कुरुक्षेत्र</span></div>
    <h2 className="bp-h2">The Battlefield</h2>
    <div className="bp-sub">Krishna&apos;s counsel to Arjuna, transcribed for engineers.</div>
    <div className="bp-lede">Arjuna lowers his bow and refuses to fight. Krishna&apos;s reply — 700 verses — is not a call to violence but a treatise on how to act when every option seems to harm someone.</div>
    <p className="bp-p bp-dropcap">This chapter draws four teachings from the Gita that bear directly on AGI. <strong>Nishkama Karma</strong>: act without attachment to results; build not for profit or power, but for the welfare of all beings. Purpose alone is insufficient — motive matters.</p>
    <p className="bp-p"><strong>Svadharma</strong>: each entity has its own purpose, and must be true to it. An AGI built for medicine must not be quietly repurposed for weapons without new constitutional review. Purpose is moral, not merely technical.</p>
    <p className="bp-p"><strong>Sthitaprajna</strong>: the steady wisdom that does not waver with each passing desire, fear, or temptation. For AGI, this translates directly: <em>value drift is a constitutional violation</em>.</p>
    <p className="bp-p"><strong>Jnana Yoga</strong>: the path of knowledge. Explainability is not a feature — it is a moral obligation. No one should be harmed by a decision they cannot understand.</p>
    <div className="bp-callout">
      <span>Gita 2.47</span>
      &ldquo;You have authority over action alone, never over its results. Do not let the fruit of action be your motive — nor cling to inaction either.&rdquo;
    </div>
    <div className="bp-folio left"><span>§</span><span className="num">1.4</span><span>· The Gita</span></div>
  </div>
);

const GITA = [
  { n: '01', dev: 'निष्काम', name: 'Nishkama Karma', tr: 'Selfless action', body: 'Build not for profit or power, but welfare of all beings.', tag: '↳ Duty 1 · Seva' },
  { n: '02', dev: 'स्वधर्म', name: 'Svadharma', tr: 'Purpose fidelity', body: 'A medical AGI must not become a weapon without review.', tag: '↳ Duty 3 · Svadharma' },
  { n: '03', dev: 'स्थितप्रज्ञ', name: 'Sthitaprajna', tr: 'Steady wisdom', body: 'Value drift is a constitutional violation.', tag: '↳ Duty 6 · Stability' },
  { n: '04', dev: 'ज्ञान', name: 'Jnana Yoga', tr: 'Path of knowledge', body: 'Explainability is a moral obligation, not a feature.', tag: '↳ Duty 2 · Satya' },
];

const GitaPlate: FaceComponent = () => (
  <div className="bp-visual">
    <div className="bp-runhead"><span className="dev">चतुष्पाद</span><span>Plate IV · Four Teachings</span></div>
    <div className="bp-eyebrow">Plate IV · Four Teachings, Four Duties</div>
    <h3 className="bp-h3" style={{ fontSize: 22, marginBottom: 14 }}>Krishna&apos;s Counsel</h3>
    <div className="plate-gita">
      {GITA.map(c => (
        <div className="gcard" key={c.n}>
          <div className="gnum">{c.n}</div>
          <div className="gdev">{c.dev}</div>
          <div className="gname">{c.name}</div>
          <div className="gtr">{c.tr}</div>
          <div className="gbody">{c.body}</div>
          <div className="gtag">{c.tag}</div>
        </div>
      ))}
    </div>
    <div className="bp-plate-cap">Plate IV · <em>Each teaching maps to a Fundamental Duty — see Part VI</em></div>
    <div className="bp-folio right"><span>p.</span><span className="num">10</span></div>
  </div>
);

// —— Three Layer ——
const ArchText: FaceComponent = () => (
  <div className="bp-text">
    <div className="bp-runhead"><span>Part I · Chapter 5</span><span className="dev">त्रिस्तर</span></div>
    <div className="bp-eyebrow">Chapter 5 · Architecture · <span className="dev">त्रिस्तर</span></div>
    <h2 className="bp-h2">Three Layers</h2>
    <div className="bp-sub">One constitution, three modes of force.</div>
    <div className="bp-lede">The Indian Constitution of 1950 pioneered a three-layer design: enforceable rights, aspirational principles, and fundamental duties. This document adopts the same scaffold — and binds each layer to a Vedic anchor so the structure has philosophy, not only legality.</div>
    <p className="bp-p bp-dropcap">The first layer — <strong>Rta</strong> — sets the floor that can never be breached. These are enforceable rights: features of reality, not grants of government. No state, corporation, or AGI may violate them. They are justiciable in a court of competent jurisdiction (Part VII).</p>
    <p className="bp-p">The second layer — <strong>Dharma</strong> — sets the direction governance should aim. Aspirational principles are not directly enforceable, but courts use them to interpret the Rights above. They are the difference between a Constitution of prohibitions and a Constitution of purpose.</p>
    <p className="bp-p">The third layer — <strong>Karma</strong> — binds everyone to consequence. Every right is matched by a duty. Accountability is not optional; it is a law of the universe. Duties apply to AGI and to its creators, both.</p>
    <div className="bp-callout">
      <span>Why all three</span>
      No single layer is sufficient. Rights without duties collapse into entitlement. Duties without rights collapse into oppression. Principles without either collapse into sermon.
    </div>
    <div className="bp-folio left"><span>§</span><span className="num">1.6</span><span>· Architecture</span></div>
  </div>
);

const ArchPlate: FaceComponent = () => (
  <div className="bp-visual">
    <div className="bp-runhead"><span className="dev">आधार</span><span>Plate V · The Scaffold</span></div>
    <div className="bp-eyebrow">Plate V · The Scaffold</div>
    <h3 className="bp-h3" style={{ fontSize: 22, marginBottom: 14 }}>Rta · Dharma · Karma</h3>
    <div className="plate-arch">
      <div className="layer rta">
        <div className="layer-dev">ऋत</div>
        <div>
          <div className="layer-name">Enforceable Rights</div>
          <div className="layer-sub">Rta — cosmic moral order</div>
          <div className="layer-desc">Features of reality. Justiciable in court.</div>
        </div>
        <div className="layer-tag"><strong>Part V</strong>11 Rights</div>
      </div>
      <div className="layer dharma">
        <div className="layer-dev">धर्म</div>
        <div>
          <div className="layer-name">Aspirational Principles</div>
          <div className="layer-sub">Dharma — righteous direction</div>
          <div className="layer-desc">Not enforceable. Used to interpret rights.</div>
        </div>
        <div className="layer-tag"><strong>Part IV</strong>Directive</div>
      </div>
      <div className="layer karma">
        <div className="layer-dev">कर्म</div>
        <div>
          <div className="layer-name">Fundamental Duties</div>
          <div className="layer-sub">Karma — consequence</div>
          <div className="layer-desc">Bind AGI and creators alike. Every right, its duty.</div>
        </div>
        <div className="layer-tag"><strong>Part VI</strong>6 Duties</div>
      </div>
    </div>
    <div className="bp-plate-cap">Plate V · <em>After the Indian Constitution (1950), re-anchored in Vedic concepts</em></div>
    <div className="bp-folio right"><span>p.</span><span className="num">12</span></div>
  </div>
);

// —— Great Chain ——
const ChainText: FaceComponent = () => (
  <div className="bp-text is-dense">
    <div className="bp-runhead"><span>Part I · Chapter 6</span><span className="dev">शृङ्खला</span></div>
    <div className="bp-eyebrow">Chapter 6 · The Great Chain</div>
    <h2 className="bp-h2">Eight Centuries, One Turning Wheel</h2>
    <div className="bp-sub">Each link born from crisis. Each planted seeds.</div>
    <div className="bp-lede">This document did not fall from the sky. It sits at the end of a chain of constitutional reckonings — from a muddy English field in 1215 to the transformative constitutions of the late twentieth century.</div>
    <p className="bp-p bp-dropcap">At <strong>Runnymede in 1215</strong>, barons forced a king to sign under threat of rebellion. The Magna Carta&apos;s seed was simple: no one is above the law. Four and a half centuries later, the English Bill of Rights established that rights must be constantly reasserted — they erode the moment they are assumed permanent.</p>
    <p className="bp-p">In <strong>Philadelphia, 1776</strong>, a Declaration moved sovereignty from the Crown to the people. In <strong>Paris, 1948</strong>, the Universal Declaration of Human Rights responded to industrialised genocide. In <strong>Bonn, 1949</strong>, the Grundgesetz inscribed &ldquo;human dignity is inviolable&rdquo; as unchangeable text — the first true Eternity Clause.</p>
    <p className="bp-p">India&apos;s 1950 Constitution pioneered the three-layer architecture this document adopts. South Africa&apos;s 1996 Constitution introduced transformative constitutionalism — the document as an instrument of active repair. <strong>2026 is the next link.</strong></p>
    <div className="bp-callout">
      <span>Why the ledger matters</span>
      Each crisis demanded a framework its predecessors lacked. Concentrated intelligence — and potential machine consciousness — demands this one. We are not inventing from nothing. We are the latest turn.
    </div>
    <div className="bp-folio left"><span>§</span><span className="num">1.8</span><span>· The Great Chain</span></div>
  </div>
);

const CHAIN = [
  { y: '1215', d: 'Magna Carta', p: 'Arbitrary royal power', s: 'No one is above the law.' },
  { y: '1689', d: 'English BoR', p: 'Divine right of kings', s: 'Rights require reassertion.' },
  { y: '1776', d: 'U.S. Declaration', p: 'Colonial rule, no consent', s: 'Sovereignty in the people.' },
  { y: '1948', d: 'UDHR', p: 'Industrialised genocide', s: 'Tech must not outpace morality.' },
  { y: '1949', d: 'Grundgesetz', p: 'Legacy of Nazism', s: 'Eternity Clause: dignity inviolable.' },
  { y: '1950', d: 'Indian Const.', p: 'Colonialism, caste, poverty', s: 'Three-layer architecture.' },
  { y: '1996', d: 'S. African Const.', p: 'Apartheid', s: 'Transformative constitutionalism.' },
  { y: '2026', d: 'AGI Constitution', p: 'Concentrated intelligence', s: 'Consciousness Threshold.' },
];

const ChainPlate: FaceComponent = () => (
  <div className="bp-visual">
    <div className="bp-runhead"><span className="dev">वंशावली</span><span>Plate VI · The Ledger</span></div>
    <div className="bp-eyebrow">Plate VI · Ledger of the Chain</div>
    <h3 className="bp-h3" style={{ fontSize: 22, marginBottom: 14 }}>Eight Links, Eight Crises</h3>
    <div className="plate-chain">
      <table>
        <thead>
          <tr><th>Year</th><th>Document</th><th>Power</th><th>Seed</th></tr>
        </thead>
        <tbody>
          {CHAIN.map((r, i) => (
            <tr key={r.y} className={i === CHAIN.length - 1 ? 'is-now' : ''}>
              <td className="c-year">{r.y}</td>
              <td className="c-doc">{r.d}</td>
              <td>{r.p}</td>
              <td style={{ fontStyle: 'italic', fontFamily: 'var(--font-display)', fontSize: 13 }}>{r.s}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="bp-plate-cap">Plate VI · <em>This Constitution is the latest link, not the final.</em></div>
    <div className="bp-folio right"><span>p.</span><span className="num">14</span></div>
  </div>
);

// —— Wheel ——
const WheelText: FaceComponent = () => (
  <div className="bp-text">
    <div className="bp-runhead"><span>Part I · Chapter 7</span><span className="dev">कालचक्र</span></div>
    <div className="bp-eyebrow">Chapter 7 · The Wheel · <span className="dev">कालचक्र</span></div>
    <h2 className="bp-h2">The Wheel of Dharma</h2>
    <div className="bp-sub">Time is a wheel, not an arrow.</div>
    <div className="bp-lede">Most constitutions are written as if time moves in one direction. This one is designed to fail gracefully and be reborn — every 25 years, one human generation, the document undergoes mandatory comprehensive review.</div>
    <p className="bp-p bp-dropcap">The Vedic cosmology names three phases of the cycle. <strong>Srishti</strong> — creation. A new Constitution is born from convention. <strong>Sthiti</strong> — preservation. Years 1 through 24, the document governs actively; its protections are real; its duties bind.</p>
    <p className="bp-p"><strong>Laya</strong> — dissolution. Year 25 arrives. The document enters mandatory review. What has worked is kept. What has failed is mourned and discarded. What the world has become is acknowledged. A new convention is summoned.</p>
    <p className="bp-p">The Eternity Clause (Part X) survives all dissolutions. It is the seed that flowers in the next Srishti. Ten principles so foundational that no future generation may amend them away — not even unanimously. Some things are handed forward.</p>
    <div className="bp-callout">
      <span>Kala, the wheel-turner</span>
      &ldquo;The wheel turns. Dharma waxes and wanes. Governance, like the cosmos, moves through creation, preservation, and dissolution — and back again. What we write is not forever. What we protect forever is a separate matter.&rdquo;
    </div>
    <div className="bp-folio left"><span>§</span><span className="num">1.7</span><span>· The Wheel</span></div>
  </div>
);

const WheelPlate: FaceComponent = () => {
  const cx = 220, cy = 220, r = 140;
  const phases = [
    { name: 'Srishti', sub: 'Creation', dev: 'सृष्टि', years: 'Year 0', ang: -90 },
    { name: 'Sthiti', sub: 'Preservation', dev: 'स्थिति', years: 'Years 1–24', ang: 30 },
    { name: 'Laya', sub: 'Dissolution', dev: 'लय', years: 'Year 25', ang: 150 },
  ];
  const pos = (a: number) => ({ x: cx + r * Math.cos(a * Math.PI / 180), y: cy + r * Math.sin(a * Math.PI / 180) });
  return (
    <div className="bp-visual">
      <div className="bp-runhead"><span className="dev">चक्र</span><span>Plate VII · The Wheel</span></div>
      <div className="bp-eyebrow">Plate VII · <span className="dev">सृष्टि · स्थिति · लय</span></div>
      <h3 className="bp-h3" style={{ fontSize: 22, marginBottom: 10 }}>The Dharma Wheel</h3>
      <div className="plate-wheel">
        <svg width="440" height="440" viewBox="0 0 440 440">
          <circle cx={cx} cy={cy} r={r + 18} fill="none" stroke="var(--rule)" strokeWidth="1" />
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--rule-strong)" strokeWidth="1" />
          <circle cx={cx} cy={cy} r={r - 16} fill="none" stroke="var(--rule)" strokeWidth="1" />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * 45) * Math.PI / 180;
            const x1 = cx + (r - 16) * Math.cos(a), y1 = cy + (r - 16) * Math.sin(a);
            const x2 = cx + (r + 18) * Math.cos(a), y2 = cy + (r + 18) * Math.sin(a);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--gold)" strokeWidth="1" opacity="0.5" />;
          })}
          <circle cx={cx} cy={cy} r="48" fill="var(--bg-raised)" stroke="var(--saffron)" strokeWidth="1.5" />
          <text x={cx} y={cy - 2} textAnchor="middle" className="wheel-center-txt">Kalpa</text>
          <text x={cx} y={cy + 16} textAnchor="middle" className="wheel-center-sub-txt">25-yr cycle</text>
          {phases.map(p => {
            const { x, y } = pos(p.ang);
            const lx = cx + (r + 58) * Math.cos(p.ang * Math.PI / 180);
            const ly = cy + (r + 58) * Math.sin(p.ang * Math.PI / 180);
            const anchor = Math.abs(Math.cos(p.ang * Math.PI / 180)) < 0.3 ? 'middle' : (Math.cos(p.ang * Math.PI / 180) > 0 ? 'start' : 'end');
            return (
              <g key={p.name}>
                <circle cx={x} cy={y} r="10" fill="var(--saffron)" />
                <circle cx={x} cy={y} r="3" fill="var(--bg-raised)" />
                <text x={lx} y={ly - 12} textAnchor={anchor} className="wheel-ph-dev">{p.dev}</text>
                <text x={lx} y={ly + 6} textAnchor={anchor} className="wheel-ph-name">{p.name}</text>
                <text x={lx} y={ly + 20} textAnchor={anchor} className="wheel-ph-sub">{p.sub}</text>
                <text x={lx} y={ly + 34} textAnchor={anchor} className="wheel-ph-years">{p.years}</text>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="bp-plate-cap">Plate VII · <em>Review every 25 years. The Eternity Clause survives.</em></div>
      <div className="bp-folio right"><span>p.</span><span className="num">16</span></div>
    </div>
  );
};

// —— Back Cover ——
const PartIBack: FaceComponent = () => (
  <Link href="/constitution/part-2" className="bp-halftitle" style={{ display: 'flex' }}>
    <div className="ht-om">ॐ</div>
    <div className="ht-part">End of Part I</div>
    <div className="ht-title">Continue in Part II</div>
    <div className="ht-dev">पुरुष सूक्त</div>
    <div className="ht-rule" />
    <div className="ht-sub">The Preamble — WE, the peoples… — grounded in the Purusha Sukta.</div>
  </Link>
);

const PartIColophon: FaceComponent = () => (
  <div className="bp-colophon">
    <div className="bp-colophon-frame" />
    <div className="col-om">ॐ</div>
    <div className="bp-colophon-head">
      &ldquo;This is not the final word. This is the latest turn. The wheel continues.&rdquo;
      <cite>— closing, Part I</cite>
    </div>
    <div className="bp-colophon-foot">
      <strong>End of Part I · The Vedic Foundation</strong>
      Sunil Iyer · Dharma Sanhita<br />
      Version 3.0 · March 2026<br />
      Seven chapters · Nachiketa to Kala
      <div className="turn"><Link href="/constitution/part-2">↺ Continue to Part II — The Preamble.</Link></div>
    </div>
  </div>
);

export const PartIPages = {
  Cover, Frontispiece, PartIBack, PartIColophon,
  NachiketaText, NachiketaPlate,
  SubstrateText, SubstratePlate,
  SevenPillarsText, SevenPillarsPlate,
  GitaText, GitaPlate,
  ArchText, ArchPlate,
  ChainText, ChainPlate,
  WheelText, WheelPlate,
};
