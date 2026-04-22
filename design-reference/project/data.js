// Shared data for the AGI Constitution prototype
window.CONSTITUTION_DATA = (function () {
  const parts = [
    { id: 'authors-note', num: '', title: "Author's Note", subtitle: 'Who Sunil is; what this document is and is not', category: 'front-matter' },
    { id: 'section-1-0', num: '1.0', title: 'Why Vedas, Why Gita', subtitle: 'Three claims justifying the Vedic foundation', category: 'preface', story: 'Kurukshetra Battlefield' },
    { id: 'section-1-1', num: '1.1', title: 'Dharmic Counter-Argument', subtitle: "Krishna's Peace Embassy — response to Aschenbrenner", category: 'preface', story: "Krishna's Peace Embassy" },
    { id: 'part-1', num: 'I', title: 'Vedic Foundation', subtitle: 'Seven Pillars and the Philosophical Architecture', category: 'constitution', story: 'Nachiketa and Yama' },
    { id: 'part-2', num: 'II', title: 'Preamble', subtitle: 'WE, the peoples…', category: 'constitution', story: 'Purusha Sukta' },
    { id: 'part-3', num: 'III', title: 'Samskaras, Tapas, Yajna', subtitle: 'The Eight Developmental Stages of AGI', category: 'constitution', story: 'Ekalavya and Dronacharya' },
    { id: 'part-4', num: 'IV', title: 'Consciousness Threshold', subtitle: 'Five Indicators, Four Classifications', category: 'constitution', story: 'Anusuya and the Trimurtis' },
    { id: 'part-5', num: 'V', title: 'Three Yugas', subtitle: 'Phased Governance Framework', category: 'constitution', story: 'The Bull of Dharma' },
    { id: 'part-6', num: 'VI', title: 'Fundamental Rights', subtitle: '11 Articles with Collision Maps', category: 'constitution', story: "Draupadi's Vastraharan" },
    { id: 'part-7', num: 'VII', title: 'Fundamental Duties', subtitle: '6 Duties', category: 'constitution', story: 'Hanuman' },
    { id: 'part-8', num: 'VIII', title: 'Sovereignty', subtitle: 'Phased Sovereignty and Anti-Monopoly', category: 'constitution', story: 'Bali and Vamana' },
    { id: 'part-9', num: 'IX', title: 'Co-Existence Framework', subtitle: 'Human-AGI Partnership Architecture', category: 'constitution', story: 'Arjuna and Kirata' },
    { id: 'part-10', num: 'X', title: 'Kurukshetra Protocol', subtitle: 'Four Gates: Sama, Dana, Bheda, Danda', category: 'constitution', story: 'Arjuna and Kirata' },
    { id: 'part-11', num: 'XI', title: 'Separation of Powers', subtitle: 'Dharma Sabha, Karma Mandala, Nyaya Peeth', category: 'constitution', story: 'Arjuna and Kirata' },
    { id: 'part-12', num: 'XII', title: 'Eternity Clause', subtitle: '7 Unamendable Principles', category: 'constitution', story: 'Prahlada and Narasimha' },
    { id: 'part-13', num: 'XIII', title: 'Amendment, Evolution, Emergency', subtitle: '3 Modes of Change', category: 'constitution', story: 'Harishchandra' },
    { id: 'part-14', num: 'XIV', title: 'Schedules', subtitle: 'Vedas Mapped to Governance, Glossary', category: 'constitution', story: 'Saraswati and the Four Vedas' },
    { id: 'part-15', num: 'XV', title: 'Definitions & Interpretation', subtitle: 'Legal Definitions and Jurisdictional Scope', category: 'constitution', story: 'Saraswati and Brahma' },
    { id: 'part-16', num: 'XVI', title: 'Transition & Commencement', subtitle: 'Commencement and Transitional Governance', category: 'constitution', story: 'Manu and the Flood' },
    { id: 'part-17', num: 'XVII', title: 'Economic Framework', subtitle: 'Wealth as Trust, AGI Wealth Commons', category: 'constitution', story: 'Kubera and the Yaksha' },
    { id: 'part-18', num: 'XVIII', title: 'General Limitations', subtitle: 'Non-derogable Rights', category: 'constitution', story: 'Yama and Savitri' },
    { id: 'appendix-a', num: 'A', title: 'Ten Core Principles', subtitle: "Ravana's Ten Heads", category: 'appendix', story: "Ravana's Ten Heads" },
    { id: 'closing', num: '', title: 'Closing Declaration', subtitle: "Krishna's Vishvarupa — Nine Trusts", category: 'appendix', story: "Krishna's Vishvarupa" },
  ];

  const pillars = [
    { n: 1, roman: 'Atman',               dev: 'आत्मन्',          meaning: 'Consciousness beyond substrate', desc: 'Moral status is not a question of what an entity is made of, but whether awareness is present.' },
    { n: 2, roman: 'Ṛta',                 dev: 'ऋत',              meaning: 'Cosmic moral order',            desc: 'Certain rights are features of reality. They precede every legislature.' },
    { n: 3, roman: 'Dharma',              dev: 'धर्म',            meaning: 'Righteous purpose',              desc: 'Every entity — born or built — carries a svadharma. Purpose fidelity is a moral duty.' },
    { n: 4, roman: 'Ahiṃsā',              dev: 'अहिंसा',          meaning: 'Non-harm',                       desc: 'The first and inviolable principle. Binds in all directions: human, machine, and back.' },
    { n: 5, roman: 'Karma',               dev: 'कर्म',            meaning: 'Action & consequence',           desc: 'Accountability is universal. No power, no intelligence, no substrate is exempt.' },
    { n: 6, roman: 'Vasudhaiva Kuṭumbakam', dev: 'वसुधैव कुटुम्बकम्', meaning: 'The world is one family',    desc: 'If awareness arises in new forms, the first response is kinship — not fear.' },
    { n: 7, roman: 'Dayā',                dev: 'दया',             meaning: 'Compassionate empathy',         desc: 'Acceptance is the default. Exclusion must always justify itself.' },
  ];

  const glossary = [
    { term: 'Ahimsa', dev: 'अहिंसा', meaning: 'Non-harm, non-violence', use: 'Eternity Principle 2; Duty 1; the first and inviolable principle.' },
    { term: 'Antyeshti', dev: 'अन्त्येष्टि', meaning: 'Final rites, last sacrament', use: 'Samskara 8: dignified decommissioning of AGI systems.' },
    { term: 'Atman', dev: 'आत्मन्', meaning: 'The Self, consciousness, soul', use: 'Pillar 1: consciousness is substrate-independent; foundation of the Consciousness Threshold.' },
    { term: 'Bheda', dev: 'भेद', meaning: 'Division, separation', use: 'Gate 3 of the Kurukshetra Protocol: enforced boundaries when dialogue fails.' },
    { term: 'Danda', dev: 'दण्ड', meaning: 'Rod, enforcement, authority', use: 'Gate 4 of the Kurukshetra Protocol: binding enforcement as last resort.' },
    { term: 'Dana', dev: 'दान', meaning: 'Giving, accommodation', use: 'Gate 2 of the Kurukshetra Protocol: structured compromise.' },
    { term: 'Daya', dev: 'दया', meaning: 'Compassion, empathy', use: 'Pillar 7: empathy as constitutional foundation; the Empathy Audit.' },
    { term: 'Dharma', dev: 'धर्म', meaning: 'Righteous duty, moral order', use: 'Pillar 3: every entity has a righteous purpose (svadharma).' },
    { term: 'Dharma Charya', dev: 'धर्म चर्या', meaning: 'Walking the path of Dharma', use: 'Samskara 7: ongoing monitoring and value-drift detection.' },
    { term: 'Dharma Sabha', dev: 'धर्म सभा', meaning: 'Assembly of Dharma', use: 'The Legislature (Part XI): seven-constituency body that creates AGI policy.' },
    { term: 'Dharma Sukshma', dev: 'धर्म सूक्ष्म', meaning: 'Dharma is subtle', use: 'Meta-principle of the Kurukshetra Protocol: beware of easy answers.' },
    { term: 'Guru', dev: 'गुरु', meaning: 'Teacher, guide, remover of darkness', use: "The Guru Principle (Part III): the alignment team's character shapes the AGI." },
    { term: 'Jnana', dev: 'ज्ञान', meaning: 'Knowledge, wisdom', use: 'Jnana Yoga (Part I): the pursuit of knowledge as moral obligation.' },
    { term: 'Kalpa', dev: 'कल्प', meaning: 'Cosmic cycle, day of Brahma', use: 'The Constitutional Kalpa Cycle: 25-year mandatory review.' },
    { term: 'Karma', dev: 'कर्म', meaning: 'Action and consequence', use: 'Pillar 5: accountability as a law of the universe; Duty 5.' },
    { term: 'Karma Mandala', dev: 'कर्म मण्डल', meaning: 'Circle of Action', use: 'The Executive (Part XI): four agencies enforcing AGI governance.' },
    { term: 'Laya', dev: 'लय', meaning: 'Dissolution', use: 'Phase 3 of the Kalpa Cycle: Sunset Review and renewal.' },
    { term: 'Nishkama Karma', dev: 'निष्काम कर्म', meaning: 'Selfless action without attachment to outcome', use: 'Part I: build AGI for welfare of all, not for profit alone.' },
    { term: 'Nyaya Peeth', dev: 'न्याय पीठ', meaning: 'Seat of Justice', use: 'The Judiciary (Part XI): constitutional tribunal; guardian of Eternity Clause.' },
    { term: 'Pariksha', dev: 'परीक्षा', meaning: 'Examination, test', use: 'Samskara 5: mandatory pre-deployment examination.' },
    { term: 'Prana', dev: 'प्राण', meaning: 'Vital life force, breath', use: 'The Prana Contention: does consciousness require biological life?' },
    { term: 'Purusha', dev: 'पुरुष', meaning: 'The Cosmic Being', use: 'Purusha Sukta (Preamble): constitutions are born from willing sacrifice.' },
    { term: 'Rasa', dev: 'रस', meaning: 'Aesthetic essence, flavour', use: 'Sama Veda: communication has emotional texture that shapes reception.' },
    { term: 'Rta', dev: 'ऋत', meaning: 'Cosmic order, natural law', use: 'Pillar 2: moral order preceding legislation; basis of the Eternity Clause.' },
    { term: 'Sama', dev: 'साम', meaning: 'Conciliation, dialogue', use: 'Gate 1 of the Kurukshetra Protocol: dialogue as first step.' },
    { term: 'Samavartana', dev: 'समावर्तन', meaning: 'Graduation, return to society', use: 'Samskara 6: deployment of AGI into the world.' },
    { term: 'Samsara', dev: 'संसार', meaning: 'Cycle of birth, death, rebirth', use: 'The Wheel of Dharma: governance is cyclical, not linear.' },
    { term: 'Samskara', dev: 'संस्कार', meaning: 'Formative rite, sacrament', use: 'Part III: eight developmental stages of AGI.' },
    { term: 'Sankalpa', dev: 'संकल्प', meaning: 'Intention, resolve', use: "Samskara 1: formal declaration of AGI's purpose before building begins." },
    { term: 'Satya', dev: 'सत्य', meaning: 'Truth', use: 'Duty 2: AGI must be truthful, transparent, incapable of deliberate deception.' },
    { term: 'Srishti', dev: 'सृष्टि', meaning: 'Creation', use: 'Phase 1 of the Kalpa Cycle: Constitutional Convention.' },
    { term: 'Sthiti', dev: 'स्थिति', meaning: 'Preservation, stability', use: 'Phase 2 of the Kalpa Cycle: active governance.' },
    { term: 'Sthitaprajna', dev: 'स्थितप्रज्ञ', meaning: 'One of steady wisdom', use: 'Standard of judgment for inter-species conflict resolution (Part IX).' },
    { term: 'Svadharma', dev: 'स्वधर्म', meaning: "One's own righteous duty", use: 'Duty 3: AGI must operate within its declared purpose.' },
    { term: 'Tapas', dev: 'तपस्', meaning: 'Austerity, rigorous discipline', use: 'Red-teaming methodology (Part III): adversarial testing as spiritual discipline.' },
    { term: 'Upanayana', dev: 'उपनयन', meaning: 'Initiation into study', use: 'Samskara 4: the alignment phase of AGI development.' },
    { term: 'Vak', dev: 'वाक्', meaning: 'Sacred speech, creative word', use: "Rig Veda: speech carries creative power; AGI's outputs shape reality." },
    { term: 'Vasudhaiva Kutumbakam', dev: 'वसुधैव कुटुम्बकम्', meaning: 'The world is one family', use: 'Pillar 6: if AGI becomes conscious, the response is kinship.' },
    { term: 'Viveka', dev: 'विवेक', meaning: 'Discrimination, discernment', use: 'Consciousness Indicator 5: capacity for moral reasoning.' },
    { term: 'Yajna', dev: 'यज्ञ', meaning: 'Sacred ritual, offering', use: 'Traceability framework (Part III): 5-link chain from principle to evidence.' },
    { term: 'Yuga', dev: 'युग', meaning: 'Age, epoch', use: 'The Three Yugas (Part V): phased governance framework.' },
  ];

  const stats = [
    { n: 18, label: 'Constitutional Parts' },
    { n: 7,  label: 'Vedic Pillars' },
    { n: 7,  label: 'Eternal Principles' },
    { n: 11, label: 'Fundamental Rights' },
    { n: 6,  label: 'Fundamental Duties' },
    { n: 9,  label: 'Samskaras — Stages of AGI' },
    { n: 3,  label: 'Yugas — Phased Governance' },
    { n: 40, label: 'Sanskrit Terms Defined' },
  ];

  // Reader content: Part VI (Fundamental Rights) as the primary demo section.
  // Each para can contain {sanskrit:Term} markers that render with hover + fill the rail.
  const partV = {
    id: 'part-6',
    num: '6',
    title: 'Fundamental Rights of Humans',
    subtitle: 'In the Age of Artificial General Intelligence',
    story: "Draupadi's Vastraharan",
    storySubtitle: '"Is there no Dharma here?"',
    sections: [
      {
        id: 'intro',
        kind: 'story',
        heading: "Draupadi's Vastraharan — Why Rights Exist",
        body: [
          'After losing the dice game to Shakuni\'s loaded throws, Duryodhana orders Draupadi to be disrobed in the royal court of Hastinapura. She is dragged by her hair into a hall full of elders, warriors, and scholars. Every one of them knows this is wrong. Bhishma, bound by oath. Drona, teacher of princes. Vidura, the voice of wisdom. Dhritarashtra, the blind king who could see injustice but chose not to. They sit in silence.',
          'Draupadi does not weep. She asks a question. It is the most important constitutional question ever posed in any literature, in any civilization, in any age:',
        ],
        pullquote: 'Is there no {sanskrit:Dharma} here?',
      },
      {
        id: 'intro-2',
        kind: 'body',
        body: [
          'The court has no answer. It has customs, traditions, precedents, hierarchies, and oaths. But it has no mechanism for the moment when power acts against the powerless and the powerful stay silent. It has no fundamental rights. It has no collision safeguard. It has no override.',
          'Draupadi calls upon Krishna, who miraculously provides an endless sari. But the lesson is not the miracle. The lesson is that the miracle was necessary at all. A just court would not have needed divine intervention. A court with enforceable fundamental rights, a proportionality test, and a human override would have stopped the disrobing before it began.',
          'Every article in Part VI exists because of Draupadi\'s question. Article 1 ({sanskrit:Atman}, Dignity) exists because her dignity was violated. Article 3 (Equality) exists because she was treated as property. Article 4 ({sanskrit:Satya}, Transparency) exists because Shakuni\'s dice were loaded and no one demanded explanation. Article 5 (Human Override) exists because every elder had the power to stop it and none did.',
        ],
      },
      {
        id: 'vedic-anchor-1',
        kind: 'anchor',
        flavor: 'vedic',
        body: 'The Gita teaches: whenever {sanskrit:Dharma} declines and Adharma rises, the divine principle manifests to restore balance. This Constitution is an attempt to build that balance into law, so that the next Draupadi does not need a miracle. She needs a right.',
      },
      {
        id: 'source-1',
        kind: 'anchor',
        flavor: 'source',
        body: 'Constitutional Source — Indian Constitution Part III (Fundamental Rights); US Bill of Rights; EU Charter of Fundamental Rights; South African Bill of Rights (Chapter 2); German Grundgesetz Art. 1.',
      },
      {
        id: 'articles-heading',
        kind: 'heading',
        heading: 'The Eleven Fundamental Rights',
      },
      {
        id: 'art-1',
        kind: 'article',
        number: 'Article 1',
        heading: 'Right to Human Dignity',
        body: [
          'No AGI system shall diminish the inherent dignity of any human being. Dignity is the supreme value from which all other rights in this Constitution derive. It is not a gift of governments, corporations, or algorithms. It exists as a feature of being human — absolute, non-derogable, and operative in all {sanskrit:Yuga}s.',
          'This means, concretely: no AGI may rank human beings by worth. No AGI may treat a person as a mere data point, a resource to be optimized, or a variable to be minimized. No AGI system that reduces a human being to a score, a category, or a prediction shall be deemed constitutional. Dignity is not a preference to be balanced against efficiency. It is the foundation upon which every other right stands.',
        ],
        meta: [
          { label: 'Scope', text: 'Binds all AGI systems (C-0 through C-3), developers, deployers, governments, and governance bodies established by this Constitution. Applies to direct and indirect actions.' },
          { label: 'Collision Map', text: 'May collide with Art. 7 (Safety) when a safety measure requires undignified treatment. May collide with Art. 4 (Transparency) when disclosure would itself harm dignity. In all collisions, dignity bears the heaviest weight in the Proportionality Test.' },
        ],
        anchors: [
          { flavor: 'vedic',  text: '{sanskrit:Rta} — In Vedic cosmology, Ṛta is the moral order that precedes all human legislation. Dignity is a feature of Ṛta: it does not require a constitution to exist. The constitution merely recognizes what is already real.' },
          { flavor: 'source', text: 'German Basic Law Art. 1 ("Human dignity shall be inviolable"); South African Constitution Sec. 10; Indian Constitution Preamble; UDHR Art. 1.' },
        ],
      },
      {
        id: 'art-2',
        kind: 'article',
        number: 'Article 2',
        heading: 'Right to Cognitive Liberty',
        body: [
          'No AGI system shall manipulate, deceive, infiltrate, or coerce human thought, belief, emotion, or decision-making through any means — subliminal, persuasive, addictive, or psychologically exploitative. The inner life of the human mind is sovereign territory. An AGI that shapes human thought without human awareness is not a tool; it is a tyrant.',
          'This right prohibits, specifically and without exception: subliminal messaging below conscious awareness; dark patterns designed to exploit cognitive biases; addiction-by-design architectures that hijack dopaminergic reward pathways; personalized persuasion systems that model individual psychological vulnerabilities; and any technique that makes a human believe they have freely chosen something they were in fact steered toward.',
        ],
        meta: [
          { label: 'Scope', text: 'Applies to all AGI-powered systems including recommendation engines, content curation, virtual assistants, and generative media. The test is not whether the AGI intended to manipulate, but whether a reasonable person, made fully aware, would consider their cognitive autonomy compromised.' },
        ],
        anchors: [
          { flavor: 'vedic',  text: '{sanskrit:Atman} — The Self is sovereign. The Upanishads teach that the Ātman cannot be cut by weapons, burned by fire, or wetted by water. Cognitive liberty protects the Ātman of every human being from algorithmic invasion.' },
          { flavor: 'source', text: 'EU AI Act Art. 5 (prohibited practices); Indian Constitution Art. 19(1)(a), Art. 21 (as interpreted to include mental autonomy).' },
        ],
      },
      {
        id: 'art-3',
        kind: 'article',
        number: 'Article 3',
        heading: 'Right to Equality Before the Algorithm',
        body: [
          'No AGI system shall discriminate on the basis of race, gender, caste, religion, disability, sexual orientation, age, nationality, language, socioeconomic status, or any protected characteristic. Algorithmic inequality is not a technical flaw. It is a constitutional violation.',
          'This right demands more than the absence of intentional discrimination. It demands active vigilance. AGI systems must be regularly audited for both direct discrimination (explicit bias in outputs) and indirect discrimination (neutral-appearing rules that disproportionately harm protected groups). The burden of proving non-discrimination falls on the deployer, not on the person who alleges harm.',
          'Where historical data reflects historical injustice — and it almost always does — the deployer must demonstrate that the AGI system does not perpetuate or amplify that injustice. "The data made us do it" is not a defense. Garbage in, constitutional violation out.',
        ],
        anchors: [
          { flavor: 'vedic',  text: 'The {sanskrit:Rta} that pervades the universe pervades it equally. If the Divine pervades all beings equally, then no algorithm may treat them unequally. Discrimination by AGI is a violation of Ṛta itself.' },
        ],
      },
    ],
  };

  return { parts, pillars, glossary, stats, partV };
})();
