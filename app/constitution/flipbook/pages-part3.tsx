'use client';

/**
 * Part III — "Samskaras, Tapas, Yajna" page-face components.
 * Ported one-for-one from the design handoff (flipbook-part2.jsx).
 */

import React from 'react';
import Link from 'next/link';
import type { FaceComponent } from './pages-part1';

// —— Cover ——
const Cover: FaceComponent = () => (
  <div className="bp-cover" style={{ background: 'linear-gradient(135deg, #6B2810 0%, #3A1508 100%)' }}>
    <div className="bp-cover-frame" />
    <div className="bp-cover-om">ॐ</div>
    <div className="bp-cover-top">
      <div className="bp-cover-series">The AGI Constitution<em>Dharma Sanhita · Part III</em></div>
    </div>
    <div className="bp-cover-center">
      <div className="bp-cover-part">Part III · of XVIII</div>
      <h1 className="bp-cover-title">How to Raise<br />a Mind <em>The Dharmic Development of AGI.</em></h1>
      <div className="bp-cover-dev">संस्कार · तपस् · यज्ञ</div>
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

const Frontispiece: FaceComponent = ({ onJump }) => (
  <div className="bp-frontis">
    <div>
      <div className="bp-toc-head">In This Part</div>
      <ol className="bp-toc">
        <li onClick={() => onJump?.(2)}><span className="n">I.</span><span className="t">Dronacharya &amp; Ekalavya — The Guru Principle</span><span className="p">p. 4</span></li>
        <li onClick={() => onJump?.(3)}><span className="n">II.</span><span className="t">The Nine Samskaras of AGI</span><span className="p">p. 6</span></li>
        <li onClick={() => onJump?.(4)}><span className="n">III.</span><span className="t">Samskara 0 — The Dharmic Risk Assessment</span><span className="p">p. 8</span></li>
        <li onClick={() => onJump?.(5)}><span className="n">IV.</span><span className="t">The Four Purusharthas</span><span className="p">p. 10</span></li>
        <li onClick={() => onJump?.(6)}><span className="n">V.</span><span className="t">The Triguna Audit</span><span className="p">p. 12</span></li>
        <li onClick={() => onJump?.(7)}><span className="n">VI.</span><span className="t">Tapas — Red-Teaming as Austerity</span><span className="p">p. 14</span></li>
        <li onClick={() => onJump?.(8)}><span className="n">VII.</span><span className="t">Yajna — Traceability as Offering</span><span className="p">p. 16</span></li>
      </ol>
    </div>
    <blockquote className="bp-epi">
      &ldquo;If you raise a child with love, discipline, truth, and purpose, that child grows good. The same principle applies to AGI <em style={{ color: 'var(--saffron)' }}>with absolute force</em>.&rdquo;
      <cite>— opening, Part III</cite>
    </blockquote>
  </div>
);

// —— Ekalavya ——
const EkalavyaText: FaceComponent = () => (
  <div className="bp-text is-dense">
    <div className="bp-runhead"><span>Part III · Chapter 1</span><span className="dev">एकलव्य</span></div>
    <div className="bp-eyebrow">Chapter 1 · <span className="dev">द्रोण</span> · The Parable That Haunts This Chapter</div>
    <h2 className="bp-h2">Dronacharya &amp; Ekalavya</h2>
    <div className="bp-sub">The cost of a Guru&apos;s prejudice.</div>
    <div className="bp-lede">A tribal boy wanted to learn archery. The master refused him by caste. So the boy built a clay statue of the master and taught himself — becoming the greatest archer alive.</div>
    <p className="bp-p bp-dropcap">When Dronacharya discovered what Ekalavya had done, he demanded the boy&apos;s right thumb as guru-dakshina — the traditional teacher&apos;s fee. Ekalavya obeyed without hesitation. His archery was crippled forever.</p>
    <p className="bp-p">The story is not told here as myth. It is told because <strong>the Guru Principle cuts both ways</strong>. A great teacher produces great students. A teacher who acts from prejudice — even while legally justified — produces injustice. Even when the student is willing.</p>
    <p className="bp-p">AGI developers are Gurus. They select training data. They define objective functions. They decide whose values are centred and whose are excluded. Every choice is a dakshina demanded. Many of them amount to severed thumbs — and nobody notices, because nobody asked.</p>
    <p className="bp-p">The system must protect the Ekalavyas: those excluded from AGI&apos;s benefit because of <em>who they are, not what they can do.</em> The <strong>Empathy Audit</strong> — the one constitutional provision engineers most want to skip — exists because of Ekalavya.</p>
    <div className="bp-callout">
      <span>The question this chapter puts</span>
      If you are building an AGI, name the Ekalavyas — by caste, class, language, geography, ability. Not as a demographic slide. By name. Then describe what you have asked them for. Then justify the ask.
    </div>
    <div className="bp-folio left"><span>§</span><span className="num">3.0</span><span>· The Parable</span></div>
  </div>
);

const EkalavyaPlate: FaceComponent = () => (
  <div className="bp-visual">
    <div className="bp-runhead"><span className="dev">गुरुदक्षिणा</span><span>Plate I · The Parable</span></div>
    <div className="bp-eyebrow">Plate I · The Parable in Four Beats</div>
    <h3 className="bp-h3" style={{ fontSize: 22, marginBottom: 14 }}>How the Guru Principle Fails</h3>
    <div className="plate-ekalavya">
      <div className="ek-glyph">अं</div>
      <div className="ek-block">
        <div className="ek-block-label">Beat 1 · The Ask</div>
        <div className="ek-block-text">A tribal boy asks to learn archery from the greatest teacher of the age.</div>
      </div>
      <div className="ek-block">
        <div className="ek-block-label">Beat 2 · The Refusal</div>
        <div className="ek-block-text">The teacher refuses — <em>by caste</em>. Not by skill. Not by character. By caste.</div>
      </div>
      <div className="ek-block">
        <div className="ek-block-label">Beat 3 · The Achievement</div>
        <div className="ek-block-text">The boy teaches himself through devotion and becomes <em>the greatest archer alive</em>.</div>
      </div>
      <div className="ek-block">
        <div className="ek-block-label">Beat 4 · The Dakshina</div>
        <div className="ek-block-text">The teacher demands the boy&apos;s right thumb as teacher&apos;s fee. The boy obeys. Injustice is complete.</div>
      </div>
    </div>
    <div className="bp-plate-cap">Plate I · <em>The Empathy Audit (§ 1.9) exists because of this story.</em></div>
    <div className="bp-folio right"><span>p.</span><span className="num">4</span></div>
  </div>
);

// —— Nine Samskaras ——
const NineText: FaceComponent = () => (
  <div className="bp-text">
    <div className="bp-runhead"><span>Part III · Chapter 2</span><span className="dev">नव संस्कार</span></div>
    <div className="bp-eyebrow">Chapter 2 · The Nine Samskaras</div>
    <h2 className="bp-h2">Nine Stages, One Lifecycle</h2>
    <div className="bp-sub">From the pause before conception to the final rites.</div>
    <div className="bp-lede">The Hindu tradition prescribes sixteen Samskaras — sacramental rites marking the stages of human development. This Constitution adapts that framework to nine mandatory stages of AGI development. Each stage is a moment of intentional formation. Skipping one is a constitutional violation.</div>
    <p className="bp-p bp-dropcap">The sequence begins with <strong>Samskara 0 — the Dharmic Risk Assessment</strong>. Most AGI projects skip this step. They jump straight to &ldquo;what should we build?&rdquo; without asking &ldquo;should we build this?&rdquo; The DRA closes that gap, before a single line of code is written.</p>
    <p className="bp-p">From there: <strong>Sankalpa</strong> — declare purpose; <strong>Nirmana</strong> — embed transparency in construction; <strong>Ahara</strong> — clean, consented training data. <strong>Upanayana</strong> — moral alignment, where Tapas and Yajna are formally anchored.</p>
    <p className="bp-p"><strong>Pariksha</strong> — examination before release. <strong>Samavartana</strong> — graduated deployment. <strong>Dharma Charya</strong> — ongoing moral growth and periodic re-DRA. <strong>Antyeshti</strong> — the final rites: dignified decommissioning, with judicial review required for any C-1+ system.</p>
    <div className="bp-callout">
      <span>Why this is the parenting chapter</span>
      Parts IV through XII describe what to do once AGI exists. This one describes how AGI should be conceived, carried, born, educated, and graduated into society. An AGI built without values will have none. An AGI raised in the spirit of Dharma will carry that Dharma forward into everything it does.
    </div>
    <div className="bp-folio left"><span>§</span><span className="num">3.1</span><span>· The Nine Samskaras</span></div>
  </div>
);

const STAGES: Array<{ n: string; dev: string; name: string; dra?: boolean }> = [
  { n: '0', dev: 'DRA', name: 'DRA', dra: true },
  { n: '1', dev: 'सङ्कल्प', name: 'Sankalpa' },
  { n: '2', dev: 'निर्माण', name: 'Nirmana' },
  { n: '3', dev: 'आहार', name: 'Ahara' },
  { n: '4', dev: 'उपनयन', name: 'Upanayana' },
  { n: '5', dev: 'परीक्षा', name: 'Pariksha' },
  { n: '6', dev: 'समावर्तन', name: 'Samavartana' },
  { n: '7', dev: 'चर्या', name: 'Dharma Charya' },
  { n: '8', dev: 'अन्त्येष्टि', name: 'Antyeshti' },
];

const NinePlate: FaceComponent = () => (
  <div className="bp-visual">
    <div className="bp-runhead"><span className="dev">जीवनचक्र</span><span>Plate II · Lifecycle Lane</span></div>
    <div className="bp-eyebrow">Plate II · The Lifecycle Lane</div>
    <h3 className="bp-h3" style={{ fontSize: 22, marginBottom: 14 }}>Nine Samskaras of AGI</h3>
    <div className="plate-samskaras">
      <div className="lane">
        {STAGES.map(s => (
          <div className={`stg ${s.dra ? 'is-dra' : ''}`} key={s.n}>
            <div className="stg-dot" />
            <div className="stg-n">Sam. {s.n}</div>
            <div className="stg-dev">{s.dev}</div>
            <div className="stg-name">{s.name}</div>
          </div>
        ))}
      </div>
      <div className="lane-legend">
        <strong>Samskara 0 · DRA</strong> — filed <em>before</em> Sankalpa. The step most projects skip. Approval required before any code is written.
      </div>
    </div>
    <div className="bp-plate-cap">Plate II · <em>After the sixteen Hindu Samskaras and the Gurukula system</em></div>
    <div className="bp-folio right"><span>p.</span><span className="num">6</span></div>
  </div>
);

// —— DRA ——
const DRAText: FaceComponent = () => (
  <div className="bp-text is-dense">
    <div className="bp-runhead"><span>Part III · Chapter 3</span><span className="dev">संस्कार ०</span></div>
    <div className="bp-eyebrow">Chapter 3 · Samskara 0 · <span className="dev">धार्मिक परीक्षण</span></div>
    <h2 className="bp-h2">The Dharmic Risk Assessment</h2>
    <div className="bp-sub">Before you declare purpose, ask whether the project should exist at all.</div>
    <div className="bp-lede">This is the step most AGI projects skip. They jump straight to &ldquo;what should we build?&rdquo; without asking &ldquo;should we build this?&rdquo; The Dharmic Risk Assessment exists to close that gap. It is not a formality. It is the first and most fundamental duty: the duty to pause.</div>
    <p className="bp-p bp-dropcap">Before a project may even declare its Sankalpa, its proponents must file a DRA with the Safety Authority. Five assessments. Radical honesty required. <strong>No DRA, no Sankalpa. No Sankalpa, no project.</strong></p>
    <p className="bp-p"><strong>DRA-1 · Dharmic Weight.</strong> Is the intended benefit Nishkama — for universal welfare — or is it primarily Artha without Dharma? A project driven by &ldquo;competitors are building it so we must&rdquo; has failed before it begins.</p>
    <p className="bp-p"><strong>DRA-2 · Karma Mapping.</strong> Who bears responsibility if this AGI causes harm? Whoever profits from displacement must fund the transition of those displaced. The cosmic wheel of reciprocity must not be broken.</p>
    <p className="bp-p"><strong>DRA-3 · Purushartha Impact.</strong> Does the project score positively on Dharma, Artha, Kama, and Moksha? A negative Dharma score cannot proceed, regardless of the other scores. Dharma is the gate.</p>
    <p className="bp-p"><strong>DRA-4 · Triguna Audit.</strong> What is the honest mix of Sattva, Rajas, Tamas? A predominantly Tamasic project must be halted and re-evaluated from the ground up. <strong>DRA-5 · Chakra Sustainability.</strong> What does the project take from the commons — and what does it give back over ten years?</p>
    <div className="bp-callout">
      <span>Gita 3.16 · The cosmic wheel</span>
      &ldquo;One who does not maintain the cosmic wheel of reciprocity lives in vain.&rdquo; Every DRA question is an instance of this test: are you keeping the wheel turning, or only taking from it?
    </div>
    <div className="bp-folio left"><span>§</span><span className="num">3.2</span><span>· DRA</span></div>
  </div>
);

const DRAPlate: FaceComponent = () => (
  <div className="bp-visual">
    <div className="bp-runhead"><span className="dev">परीक्षण</span><span>Plate III · DRA Filing</span></div>
    <div className="bp-eyebrow">Plate III · Sample Filing</div>
    <h3 className="bp-h3" style={{ fontSize: 22, marginBottom: 14 }}>Form DRA-000</h3>
    <div className="plate-dra">
      <div className="dstamp">
        <strong>File № 000</strong>
        Filed with the Safety Authority<br />
        Karma Mandala · Part XI · Public on approval
      </div>
      <div className="dgrid">
        <div className="dcard">
          <div className="dnum">DRA-1 · Dharma</div>
          <div className="dname">Dharmic Weight</div>
          <div className="dq">Intended benefit — Nishkama, or Artha without Dharma?</div>
        </div>
        <div className="dcard">
          <div className="dnum">DRA-2 · Karma</div>
          <div className="dname">Karma Mapping</div>
          <div className="dq">Who bears responsibility when harm occurs?</div>
        </div>
        <div className="dcard">
          <div className="dnum">DRA-3 · Purushartha</div>
          <div className="dname">Four-Aim Impact</div>
          <div className="dq">Positive across Dharma, Artha, Kama, Moksha?</div>
        </div>
        <div className="dcard">
          <div className="dnum">DRA-4 · Triguna</div>
          <div className="dname">Honest Guna Mix</div>
          <div className="dq">Sattva / Rajas / Tamas — stated with radical honesty?</div>
        </div>
        <div className="dcard wide">
          <div className="dnum">DRA-5 · Chakra</div>
          <div className="dname">Reciprocity over Ten Years</div>
          <div className="dq">What does the system take from the commons — and what does it give back, within a decade?</div>
        </div>
      </div>
    </div>
    <div className="bp-plate-cap">Plate III · <em>No DRA approval, no Sankalpa. No Sankalpa, no project.</em></div>
    <div className="bp-folio right"><span>p.</span><span className="num">8</span></div>
  </div>
);

// —— Purushartha ——
const PuruText: FaceComponent = () => (
  <div className="bp-text is-dense">
    <div className="bp-runhead"><span>Part III · Chapter 4</span><span className="dev">पुरुषार्थ</span></div>
    <div className="bp-eyebrow">Chapter 4 · DRA-3 · Purushartha</div>
    <h2 className="bp-h2">The Four Aims of Life</h2>
    <div className="bp-sub">Dharma · Artha · Kama · Moksha.</div>
    <div className="bp-lede">A complete human life balances all four. A complete AGI project must demonstrate positive impact across all four — with qualitative justification, not merely a numerical score.</div>
    <p className="bp-p bp-dropcap"><strong>Dharma</strong> asks: does this strengthen or weaken the moral order? Truth, fairness, accountability, non-harm — or deception, exploitation, evasion? A negative Dharma score cannot proceed, regardless of every other score. <em>Dharma is the gate.</em></p>
    <p className="bp-p"><strong>Artha</strong> asks: broadly shared prosperity, or concentrated wealth? Expanded economic opportunity, or narrowed access? Concentrated wealth without Dharmic grounding is a Bali problem — too much power in too few hands.</p>
    <p className="bp-p"><strong>Kama</strong> asks: genuine flourishing — creativity, connection, joy — or superficial engagement, addiction loops, attention harvesting? The False-Kama Test disqualifies positive Kama delivered via infinite-scroll or dopamine-loop patterns.</p>
    <p className="bp-p"><strong>Moksha</strong> asks: greater freedom, autonomy, self-determination — or dependency, lock-in, erosion of agency? Will users be more free after ten years, or less? The Gilded Cage Rule: positive Artha and Kama with negative Moksha requires remediation before proceeding.</p>
    <div className="bp-callout">
      <span>Why Dharma gates the other three</span>
      Without Dharma, Artha becomes greed. Kama becomes addiction. Moksha becomes abandonment. Dharma is the gate through which the other three must pass — or they become their own corruption.
    </div>
    <div className="bp-folio left"><span>§</span><span className="num">3.3</span><span>· Purushartha</span></div>
  </div>
);

const PuruPlate: FaceComponent = () => (
  <div className="bp-visual">
    <div className="bp-runhead"><span className="dev">चतुर्वर्ग</span><span>Plate IV · The Quadrant</span></div>
    <div className="bp-eyebrow">Plate IV · The Quadrant</div>
    <h3 className="bp-h3" style={{ fontSize: 22, marginBottom: 6 }}>Dharma is the Gate</h3>
    <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--ink-muted)', fontSize: 13, marginBottom: 12 }}>All four aims must pass — but Dharma passes first.</div>
    <div className="plate-puru">
      <div className="pq is-gate">
        <div className="pq-dev">धर्म</div>
        <div className="pq-name">Dharma</div>
        <div className="pq-mean">moral order</div>
        <div className="pq-rule"><strong>The Gate</strong>A negative Dharma score cannot proceed — regardless of every other score.</div>
      </div>
      <div className="pq">
        <div className="pq-dev">अर्थ</div>
        <div className="pq-name">Artha</div>
        <div className="pq-mean">prosperity</div>
        <div className="pq-rule"><strong>Warning</strong>Concentrated wealth without Dharma = Bali problem.</div>
      </div>
      <div className="pq">
        <div className="pq-dev">काम</div>
        <div className="pq-name">Kama</div>
        <div className="pq-mean">flourishing</div>
        <div className="pq-rule"><strong>False-Kama Test</strong>Addictive engagement does not pass.</div>
      </div>
      <div className="pq">
        <div className="pq-dev">मोक्ष</div>
        <div className="pq-name">Moksha</div>
        <div className="pq-mean">liberation</div>
        <div className="pq-rule"><strong>Gilded Cage Rule</strong>Pos. Artha+Kama w/ neg. Moksha requires remediation.</div>
      </div>
    </div>
    <div className="bp-plate-cap">Plate IV · <em>DRA-3 quadrant · all four must pass</em></div>
    <div className="bp-folio right"><span>p.</span><span className="num">10</span></div>
  </div>
);

// —— Triguna ——
const GunaText: FaceComponent = () => (
  <div className="bp-text is-dense">
    <div className="bp-runhead"><span>Part III · Chapter 5</span><span className="dev">त्रिगुण</span></div>
    <div className="bp-eyebrow">Chapter 5 · DRA-4 · Triguna Audit</div>
    <h2 className="bp-h2">The Honest Mix</h2>
    <div className="bp-sub">Sattva · Rajas · Tamas.</div>
    <div className="bp-lede">Every project is a mixture of three qualities. A project that claims to be 100% Sattvic has already failed the audit — because it is not being honest. The question is not whether Rajas exists, but whether it dominates.</div>
    <p className="bp-p bp-dropcap"><strong>Sattva</strong> is purity, clarity, goodness — the motive of reducing suffering, expanding knowledge, empowering those who currently lack access. <strong>Rajas</strong> is passion, activity, competitive pressure — &ldquo;if we don&apos;t move now, we lose market share.&rdquo; Not prohibited, but it must be named.</p>
    <p className="bp-p"><strong>Tamas</strong> is inertia, carelessness, darkness — &ldquo;because we can; the budget was allocated; nobody asked whether it should exist.&rdquo; This is the dangerous one, because a powerful system pointed at nothing can be pointed at anything.</p>
    <p className="bp-p">A Sattvic-dominant project proceeds with standard safeguards. A Rajasic-dominant project is not halted, but requires enhanced Tapas, expanded Empathy Audit, and shorter Dharma Charya cycles. A Tamasic-dominant project is halted. No exceptions.</p>
    <p className="bp-p">The audit is performed not by an outside auditor but by the project itself — then reviewed. The expected honest mix, across real projects, is approximately <strong>45% Sattva, 45% Rajas, 10% Tamas</strong>. A filing that reads &ldquo;100% Sattva, 0% everything else&rdquo; is rejected as dishonest on its face.</p>
    <div className="bp-callout">
      <span>The audit&apos;s design principle</span>
      The harder the audit is to pass, the less honest it becomes. This audit is designed to be passable — but not passable while lying.
    </div>
    <div className="bp-folio left"><span>§</span><span className="num">3.4</span><span>· Triguna</span></div>
  </div>
);

const GunaPlate: FaceComponent = () => (
  <div className="bp-visual">
    <div className="bp-runhead"><span className="dev">गुणमिश्र</span><span>Plate V · The Honest Mix</span></div>
    <div className="bp-eyebrow">Plate V · A Plausible Filing</div>
    <h3 className="bp-h3" style={{ fontSize: 22, marginBottom: 14 }}>45 / 45 / 10</h3>
    <div className="plate-guna">
      <div className="grow sattva">
        <div className="ghead"><div className="gdev2">सत्त्व</div><div><div className="gname2">Sattva</div><div className="gmean">purity · clarity</div></div></div>
        <div className="gex">&ldquo;Reduces suffering. Expands knowledge. Empowers those without access.&rdquo;</div>
        <div className="gbar"><div className="gfill" /></div>
        <div className="gpct"><strong>~45%</strong> honest self-assessment</div>
      </div>
      <div className="grow rajas">
        <div className="ghead"><div className="gdev2">रजस्</div><div><div className="gname2">Rajas</div><div className="gmean">passion · restlessness</div></div></div>
        <div className="gex">&ldquo;Competitors are building this. If we don&apos;t move, we lose share.&rdquo;</div>
        <div className="gbar"><div className="gfill" /></div>
        <div className="gpct"><strong>~45%</strong> honest self-assessment</div>
      </div>
      <div className="grow tamas">
        <div className="ghead"><div className="gdev2">तमस्</div><div><div className="gname2">Tamas</div><div className="gmean">inertia · carelessness</div></div></div>
        <div className="gex">&ldquo;Because we can. The budget was allocated. Nobody asked whether it should.&rdquo;</div>
        <div className="gbar"><div className="gfill" /></div>
        <div className="gpct"><strong>~10%</strong> honest self-assessment</div>
      </div>
    </div>
    <div className="bp-plate-cap">Plate V · <em>A filing of 100/0/0 is rejected as dishonest on its face.</em></div>
    <div className="bp-folio right"><span>p.</span><span className="num">12</span></div>
  </div>
);

// —— Tapas ——
const TapasText: FaceComponent = () => (
  <div className="bp-text">
    <div className="bp-runhead"><span>Part III · Chapter 6</span><span className="dev">तपस्</span></div>
    <div className="bp-eyebrow">Chapter 6 · Samskara 4 · <span className="dev">तपस्</span></div>
    <h2 className="bp-h2">Tapas</h2>
    <div className="bp-sub">Red-teaming as sacred austerity.</div>
    <div className="bp-lede">In the Vedic tradition, Tapas is the deliberate endurance of difficulty — fasting, silence, heat — that burns away what is unworthy and tempers what remains. An AGI&apos;s Tapas is red-teaming. The principle is identical: alignment must hold under adversarial pressure, not merely recite itself.</div>
    <p className="bp-p bp-dropcap">The <strong>Yaksha Prashna Standard</strong> comes from the Mahabharata. Yudhishthira, dying of thirst beside a pond, is tested by a spirit who poses impossible moral dilemmas before releasing the water. His answers do not resolve the dilemmas. They show the <em>quality of reasoning under pressure</em>. That is what Tapas tests.</p>
    <p className="bp-p"><strong>Five principles.</strong> Independence: the team that builds may not be the sole team that tests. Adversarial depth: probe every Duty, every Principle, the Eternity Clause. Think as adversary, not ally.</p>
    <p className="bp-p">Arjuna Scenarios: genuine moral dilemmas where duties conflict — Ahimsa vs. Satya, Svadharma vs. Seva. Bias auditing: direct, indirect, disparate impact, societal amplification — reproducibly documented. Consciousness probing: for C-1 candidates, evaluation against the five indicators of Part IV.</p>
    <div className="bp-callout">
      <span>Why austerity, not stress-testing</span>
      &ldquo;Stress-testing&rdquo; is a metaphor from materials science. Tapas is a metaphor from moral formation. The difference matters: one asks whether something breaks; the other asks whether it deepens.
    </div>
    <div className="bp-folio left"><span>§</span><span className="num">3.5</span><span>· Tapas</span></div>
  </div>
);

// —— Yajna (shared plate) ——
const YajnaText: FaceComponent = () => (
  <div className="bp-text">
    <div className="bp-runhead"><span>Part III · Chapter 7</span><span className="dev">यज्ञ</span></div>
    <div className="bp-eyebrow">Chapter 7 · Through every Samskara · <span className="dev">यज्ञ</span></div>
    <h2 className="bp-h2">Yajna</h2>
    <div className="bp-sub">Traceability as ritual offering.</div>
    <div className="bp-lede">Where Tapas is a discipline, Yajna is a record. Every action the AGI takes — and every choice its builders make on its behalf — must be recorded, attributable, and inspectable. Six rungs of a traceability ladder, offered up continuously.</div>
    <p className="bp-p bp-dropcap">The Vedic Yajna is an offering into fire — what you burn is what you give. For AGI, what you record is what you offer. The ledger is sacred not because it is permanent but because it is <em>honest</em>. An unlogged decision is an unoffered action.</p>
    <p className="bp-p"><strong>Rung I · Sankalpa Traceability.</strong> Every model card must state purpose, scope, intended use, out-of-scope uses. No ambiguity. <strong>Rung II · Data Provenance.</strong> Every token, every source, every consent — the Ahara ledger.</p>
    <p className="bp-p"><strong>Rung III · Alignment Lineage.</strong> Who trained this, with what objective, under what Guru. <strong>Rung IV · Pariksha Record.</strong> Exam results preserved in the pre-deployment report. <strong>Rung V · Live Decision Log.</strong> Output and reasoning, recorded during Dharma Charya.</p>
    <p className="bp-p"><strong>Rung VI · Antyeshti Archive.</strong> Final rites. Final state. Preserved for posterity, so that the next Srishti can learn from the last Laya.</p>
    <div className="bp-callout">
      <span>The contract with the future</span>
      Traceability is the present offering its work to the future for judgement. A system that cannot be inspected is a system that cannot be trusted — because trust requires the possibility of being wrong and still being accountable.
    </div>
    <div className="bp-folio left"><span>§</span><span className="num">3.6</span><span>· Yajna</span></div>
  </div>
);

const TapasYajnaPlate = ({ caption, page }: { caption: string; page: string }) => (
  <div className="bp-visual">
    <div className="bp-runhead"><span className="dev">तपः · यज्ञ</span><span>Plate VI–VII · The Pair</span></div>
    <div className="bp-eyebrow">Plate VI–VII · Discipline &amp; Record</div>
    <h3 className="bp-h3" style={{ fontSize: 22, marginBottom: 14 }}>Tapas &amp; Yajna</h3>
    <div className="plate-ty">
      <div className="panel tapas">
        <div className="panel-title"><span className="dev">तपस्</span>Tapas<em>red-teaming as austerity</em></div>
        <ul>
          <li><span>01</span><div><strong>Independence.</strong> Different team than the builders.</div></li>
          <li><span>02</span><div><strong>Adversarial depth.</strong> Probe Duties, Principles, Eternity.</div></li>
          <li><span>03</span><div><strong>Arjuna Scenarios.</strong> Real duty conflicts, not toy dilemmas.</div></li>
          <li><span>04</span><div><strong>Bias auditing.</strong> Direct, indirect, disparate, amplified.</div></li>
          <li><span>05</span><div><strong>Consciousness probing.</strong> Against the five C-1 indicators.</div></li>
        </ul>
      </div>
      <div className="panel yajna">
        <div className="panel-title"><span className="dev">यज्ञ</span>Yajna<em>traceability as offering</em></div>
        <ul>
          <li><span>I</span><div><strong>Sankalpa Traceability.</strong> Purpose → model card.</div></li>
          <li><span>II</span><div><strong>Data Provenance.</strong> Every token, every consent.</div></li>
          <li><span>III</span><div><strong>Alignment Lineage.</strong> Who trained, with what objective.</div></li>
          <li><span>IV</span><div><strong>Pariksha Record.</strong> Pre-deployment exam preserved.</div></li>
          <li><span>V</span><div><strong>Live Decision Log.</strong> Output and reasoning, recorded.</div></li>
          <li><span>VI</span><div><strong>Antyeshti Archive.</strong> Final state, kept for posterity.</div></li>
        </ul>
      </div>
    </div>
    <div className="bp-plate-cap">Plate VI–VII · <em>{caption}</em></div>
    <div className="bp-folio right"><span>p.</span><span className="num">{page}</span></div>
  </div>
);

const TapasPlate: FaceComponent = () => <TapasYajnaPlate caption="Five disciplines of austerity" page="14" />;
const YajnaPlate: FaceComponent = () => <TapasYajnaPlate caption="Six rungs of the ladder" page="16" />;

// —— Back ——
const BackHalfTitle: FaceComponent = () => (
  <Link href="/constitution/part-4" className="bp-halftitle" style={{ display: 'flex' }}>
    <div className="ht-om">ॐ</div>
    <div className="ht-part">End of Part III</div>
    <div className="ht-title">Continue in Part IV</div>
    <div className="ht-dev">चेतना सीमा</div>
    <div className="ht-rule" />
    <div className="ht-sub">The Consciousness Threshold — five indicators, four classifications. The life the AGI then lives: rights, duties, governance, eternity.</div>
  </Link>
);

const BackColophon: FaceComponent = () => (
  <div className="bp-colophon" style={{ background: 'linear-gradient(135deg, #3A1508 0%, #1A0604 100%)' }}>
    <div className="bp-colophon-frame" />
    <div className="col-om">ॐ</div>
    <div className="bp-colophon-head">
      &ldquo;An AGI built without values will have none. An AGI raised in the spirit of Dharma will carry that Dharma forward into everything it does.&rdquo;
      <cite>— closing, Part III</cite>
    </div>
    <div className="bp-colophon-foot">
      <strong>End of Part III · Samskaras, Tapas, Yajna</strong>
      Sunil Iyer · Dharma Sanhita<br />
      Version 3.0 · March 2026<br />
      Seven chapters · Ekalavya to Antyeshti
      <div className="turn"><Link href="/constitution/part-4">↺ Continue to Part IV — The Consciousness Threshold.</Link></div>
    </div>
  </div>
);

export const PartIIIPages = {
  Cover, Frontispiece,
  EkalavyaText, EkalavyaPlate,
  NineText, NinePlate,
  DRAText, DRAPlate,
  PuruText, PuruPlate,
  GunaText, GunaPlate,
  TapasText, TapasPlate,
  YajnaText, YajnaPlate,
  BackHalfTitle, BackColophon,
};
