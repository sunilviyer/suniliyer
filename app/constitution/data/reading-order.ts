/**
 * Canonical reading order for the AGI Constitution: Dharma Sanhita.
 * Rewritten July 2026 for the new 33-article structure
 * (see AGIConstitution/content/README.md and the section-3 order in the
 * author's install instructions). Six groups, front to back.
 *
 * Rules carried from the instructions: Roman numerals I to X are kept for
 * the ten principles; no Arabic chapter numbers appear in visible prose.
 */

export type ArticleGroup = 'opening' | 'principles' | 'machinery' | 'safeguards' | 'aids' | 'closing';

export const GROUP_TITLES: Record<ArticleGroup, string> = {
  opening: 'The Opening Frame',
  principles: 'The Ten Principles',
  machinery: 'The Machinery',
  safeguards: 'Defining and Safeguarding',
  aids: 'The Aids',
  closing: 'The Closing Frame',
};

export interface ConstitutionPart {
  id: string;
  group: ArticleGroup;
  /** Roman numeral, principles only (I to X) */
  roman?: string;
  title: string;
  /** italic descriptor or Sanskrit anchor line from the article */
  subtitle?: string;
  /** "The First of the Ten Principles" ordinal line, principles only */
  ordinal?: string;
  /** the story the article opens with */
  story?: string;
  /** the article's Madhubani plate (site-absolute path) */
  image?: string;
  filename: string;
}

export const constitutionParts: ConstitutionPart[] = [
  {
    id: 'authors-note',
    group: 'opening',
    title: 'Author\'s Note',
    image: '/images/AGIMadhubani/authors-note.png',
    filename: '00-authors-note.md',
  },
  {
    id: 'prologue',
    group: 'opening',
    title: 'Prologue',
    subtitle: 'Before the war.',
    image: '/images/AGIMadhubani/prologue.png',
    filename: '01-prologue.md',
  },
  {
    id: 'preamble',
    group: 'opening',
    title: 'Preamble',
    image: '/images/AGIMadhubani/preamble.png',
    filename: '02-preamble.md',
  },
  {
    id: 'principles-overview',
    group: 'opening',
    title: 'The Ten Principles',
    subtitle: 'The backbone.',
    filename: '03-principles-overview.md',
  },
  {
    id: 'principle-dignity',
    group: 'principles',
    roman: 'I',
    title: 'Inviolable Dignity',
    subtitle: 'Rta (ऋत)',
    ordinal: 'The First of the Ten Principles',
    story: 'Draupadi in the Hall of Kings',
    image: '/images/AGIMadhubani/04-principle-dignity.png',
    filename: '04-principle-dignity.md',
  },
  {
    id: 'principle-cognitive-sovereignty',
    group: 'principles',
    roman: 'II',
    title: 'Cognitive Sovereignty',
    subtitle: 'Atman (आत्मन्)',
    ordinal: 'The Second of the Ten Principles',
    story: 'Nachiketa at the Door of Death',
    image: '/images/AGIMadhubani/05-principle-cognitive-sovereignty.png',
    filename: '05-principle-cognitive-sovereignty.md',
  },
  {
    id: 'principle-non-harm',
    group: 'principles',
    roman: 'III',
    title: 'Non-Harm',
    subtitle: 'Ahimsa (अहिंसा)',
    ordinal: 'The Third of the Ten Principles',
    story: 'King Shibi and the Dove',
    image: '/images/AGIMadhubani/06-principle-non-harm.png',
    filename: '06-principle-non-harm.md',
  },
  {
    id: 'principle-equality',
    group: 'principles',
    roman: 'IV',
    title: 'Equality Before the Algorithm',
    subtitle: 'Ekam Sat (एकम् सत्)',
    ordinal: 'The Fourth of the Ten Principles',
    story: 'Shabari and the Berries',
    image: '/images/AGIMadhubani/07-principle-equality.png',
    filename: '07-principle-equality.md',
  },
  {
    id: 'principle-truth',
    group: 'principles',
    roman: 'V',
    title: 'Truth and Transparency',
    subtitle: 'Satya (सत्य)',
    ordinal: 'The Fifth of the Ten Principles',
    story: 'Harishchandra, the King Who Would Not Lie',
    image: '/images/AGIMadhubani/08-principle-truth.png',
    filename: '08-principle-truth.md',
  },
  {
    id: 'principle-human-authority',
    group: 'principles',
    roman: 'VI',
    title: 'Human Authority',
    subtitle: 'Svadharma (स्वधर्म)',
    ordinal: 'The Sixth of the Ten Principles',
    story: 'Krishna the Charioteer, and Arjuna\'s Choice',
    image: '/images/AGIMadhubani/09-principle-human-authority.png',
    filename: '09-principle-human-authority.md',
  },
  {
    id: 'principle-data-sovereignty',
    group: 'principles',
    roman: 'VII',
    title: 'Data Sovereignty',
    subtitle: 'Karma (कर्म)',
    ordinal: 'The Seventh of the Ten Principles',
    story: 'Karna and the Armour Cut from His Body',
    image: '/images/AGIMadhubani/10-principle-data-sovereignty.png',
    filename: '10-principle-data-sovereignty.md',
  },
  {
    id: 'principle-accountability',
    group: 'principles',
    roman: 'VIII',
    title: 'Accountability',
    subtitle: 'Karma Phala (कर्म फल)',
    ordinal: 'The Eighth of the Ten Principles',
    story: 'Dhritarashtra and the Iron Statue',
    image: '/images/AGIMadhubani/11-principle-accountability.png',
    filename: '11-principle-accountability.md',
  },
  {
    id: 'principle-intergenerational',
    group: 'principles',
    roman: 'IX',
    title: 'Intergenerational Justice',
    subtitle: 'Srishti-Sthiti-Laya (सृष्टि-स्थिति-लय)',
    ordinal: 'The Ninth of the Ten Principles',
    story: 'Manu, the Fish, and the Flood',
    image: '/images/AGIMadhubani/12-principle-intergenerational.png',
    filename: '12-principle-intergenerational.md',
  },
  {
    id: 'principle-empathy',
    group: 'principles',
    roman: 'X',
    title: 'Empathy and Reciprocity',
    subtitle: 'Daya (दया)',
    ordinal: 'The Tenth of the Ten Principles',
    story: 'Rantideva and the Last Cup of Water',
    image: '/images/AGIMadhubani/13-principle-empathy.png',
    filename: '13-principle-empathy.md',
  },
  {
    id: 'consciousness-threshold',
    group: 'machinery',
    title: 'The Consciousness Threshold',
    subtitle: 'When does a machine stop being a thing?',
    story: 'Anusuya and the Trimurtis',
    image: '/images/AGIMadhubani/14-consciousness-threshold.png',
    filename: '14-consciousness-threshold.md',
  },
  {
    id: 'samskaras',
    group: 'machinery',
    title: 'The Raising of an AGI',
    subtitle: 'The Samskaras (संस्कार)',
    story: 'The Weapon That Could Not Be Called Back',
    image: '/images/AGIMadhubani/15-samskaras.png',
    filename: '15-samskaras.md',
  },
  {
    id: 'yugas',
    group: 'machinery',
    title: 'The Three Ages',
    subtitle: 'The Yugas (युग)',
    story: 'The Bull on One Leg',
    image: '/images/AGIMadhubani/16-yugas.png',
    filename: '16-yugas.md',
  },
  {
    id: 'sovereignty',
    group: 'machinery',
    title: 'Sovereignty and Power',
    subtitle: 'No one may hold all three worlds.',
    story: 'The Three Steps',
    image: '/images/AGIMadhubani/17-sovereignty.png',
    filename: '17-sovereignty.md',
  },
  {
    id: 'separation-of-powers',
    group: 'machinery',
    title: 'The Separation of Powers',
    subtitle: 'No power stands above the others.',
    story: 'The Pillar Neither Could Measure',
    image: '/images/AGIMadhubani/18-separation-of-powers.png',
    filename: '18-separation-of-powers.md',
  },
  {
    id: 'coexistence',
    group: 'machinery',
    title: 'Co-Existence',
    subtitle: 'Saha-Astitva (सह-अस्तित्व)',
    story: 'The Hunter in the Forest',
    image: '/images/AGIMadhubani/19-coexistence.png',
    filename: '19-coexistence.md',
  },
  {
    id: 'kurukshetra',
    group: 'machinery',
    title: 'The Kurukshetra Protocol',
    subtitle: 'When neither side is wrong.',
    story: 'Five Villages',
    image: '/images/AGIMadhubani/20-kurukshetra.png',
    filename: '20-kurukshetra.md',
  },
  {
    id: 'economy',
    group: 'machinery',
    title: 'Wealth Held in Trust',
    subtitle: 'Artha Vyavastha (अर्थ व्यवस्था)',
    story: 'The Guardian of the Treasury',
    image: '/images/AGIMadhubani/21-economy.png',
    filename: '21-economy.md',
  },
  {
    id: 'eternity-clause',
    group: 'machinery',
    title: 'The Eternity Clause',
    subtitle: 'What cannot be amended.',
    story: 'The Terrible Vow',
    image: '/images/AGIMadhubani/22-eternity-clause.png',
    filename: '22-eternity-clause.md',
  },
  {
    id: 'amendment',
    group: 'machinery',
    title: 'Amendment and Evolution',
    subtitle: 'How it changes, and what holds.',
    story: 'The Churning of the Ocean',
    image: '/images/AGIMadhubani/23-amendment.png',
    filename: '23-amendment.md',
  },
  {
    id: 'emergency-powers',
    group: 'machinery',
    title: 'Emergency Powers',
    subtitle: 'The thunderbolt is loaned, not given.',
    story: 'The Thunderbolt',
    image: '/images/AGIMadhubani/24-emergency-powers.png',
    filename: '24-emergency-powers.md',
  },
  {
    id: 'limitations',
    group: 'machinery',
    title: 'The Limits on Rights',
    subtitle: 'When a right may be limited, and when it may not.',
    story: 'Savitri and the God of Death',
    image: '/images/AGIMadhubani/25-limitations.png',
    filename: '25-limitations.md',
  },
  {
    id: 'transition',
    group: 'machinery',
    title: 'Transition and Commencement',
    subtitle: 'How it comes into force.',
    story: 'The Bridge to Lanka',
    image: '/images/AGIMadhubani/26-transition.png',
    filename: '26-transition.md',
  },
  {
    id: 'living-rights',
    group: 'safeguards',
    title: 'Living Rights',
    subtitle: 'They collide, and they must not freeze.',
    story: 'The Dog at Heaven\'s Gate',
    image: '/images/AGIMadhubani/27-living-rights.png',
    filename: '27-living-rights.md',
  },
  {
    id: 'definitions',
    group: 'safeguards',
    title: 'Definitions and Interpretation',
    subtitle: 'What the words mean, and whom they bind.',
    story: 'The Naming of the World',
    filename: '28-definitions.md',
  },
  {
    id: 'glossary',
    group: 'aids',
    title: 'Glossary',
    filename: '29-glossary.md',
  },
  {
    id: 'schedules',
    group: 'aids',
    title: 'Schedules',
    filename: '30-schedules.md',
  },
  {
    id: 'sources',
    group: 'aids',
    title: 'Sources',
    filename: '31-sources.md',
  },
  {
    id: 'closing',
    group: 'closing',
    title: 'Closing Declaration',
    subtitle: 'After the war.',
    image: '/images/AGIMadhubani/32-closing.png',
    filename: '32-closing.md',
  },
];

/**
 * Get the canonical index of a part by ID
 */
export function getPartIndex(partId: string): number {
  return constitutionParts.findIndex(p => p.id === partId);
}

/**
 * Get previous and next parts for navigation
 */
export function getAdjacentParts(partId: string) {
  const index = getPartIndex(partId);
  return {
    prev: index > 0 ? constitutionParts[index - 1] : null,
    next: index < constitutionParts.length - 1 ? constitutionParts[index + 1] : null,
  };
}

/**
 * Get part by ID
 */
export function getPartById(partId: string): ConstitutionPart | undefined {
  return constitutionParts.find(p => p.id === partId);
}
