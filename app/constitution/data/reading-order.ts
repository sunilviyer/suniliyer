/**
 * Canonical reading order for the AGI Constitution: Dharma Sanhita
 * Based on 00_MASTER_INDEX.md
 */

export interface ConstitutionPart {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  category: 'front-matter' | 'preface' | 'constitution' | 'appendix';
  filename: string;
  vedicStory?: string;
}

export const constitutionParts: ConstitutionPart[] = [
  // Front Matter
  {
    id: 'authors-note',
    number: '',
    title: "Author's Note",
    subtitle: 'Who Sunil is; what this document is and is not',
    category: 'front-matter',
    filename: '01_Authors_Note.md',
  },

  // Philosophical Preface
  {
    id: 'section-1-0',
    number: '1.0',
    title: 'Why Vedas, Why Gita',
    subtitle: 'Three claims justifying the Vedic/Gita foundation',
    category: 'preface',
    filename: '02_Section_1.0_Why_Vedas_Why_Gita.md',
    vedicStory: 'Kurukshetra Battlefield',
  },
  {
    id: 'section-1-1',
    number: '1.1',
    title: 'Dharmic Counter-Argument',
    subtitle: "Krishna's Peace Embassy - Response to Aschenbrenner",
    category: 'preface',
    filename: '03_Section_1.1_Dharmic_Counter_Argument.md',
    vedicStory: "Krishna's Peace Embassy",
  },

  // The Constitution Proper
  {
    id: 'part-1',
    number: '1',
    title: 'Vedic Foundation',
    subtitle: 'The Seven Pillars and the Philosophical Architecture',
    category: 'constitution',
    filename: '04_Part_I_Vedic_Foundation.md',
    vedicStory: 'Nachiketa and Yama',
  },
  {
    id: 'part-2',
    number: '2',
    title: 'Preamble',
    subtitle: 'WE, the peoples...',
    category: 'constitution',
    filename: '05_Part_II_Preamble.md',
    vedicStory: 'Purusha Sukta',
  },
  {
    id: 'part-3',
    number: '3',
    title: 'Samskaras, Tapas, Yajna',
    subtitle: 'The Eight Developmental Stages of AGI',
    category: 'constitution',
    filename: '06_Part_IIA_Samskaras_Tapas_Yajna.md',
    vedicStory: 'Ekalavya and Dronacharya',
  },
  {
    id: 'part-4',
    number: '4',
    title: 'Consciousness Threshold',
    subtitle: 'Five Indicators and Four Classifications',
    category: 'constitution',
    filename: '07_Part_III_Consciousness_Threshold.md',
    vedicStory: 'Anusuya and the Trimurtis',
  },
  {
    id: 'part-5',
    number: '5',
    title: 'Three Yugas',
    subtitle: 'Phased Governance Framework',
    category: 'constitution',
    filename: '08_Part_IV_Three_Yugas.md',
    vedicStory: 'The Bull of Dharma',
  },
  {
    id: 'part-6',
    number: '6',
    title: 'Fundamental Rights',
    subtitle: '11 Articles with Collision Maps and Anti-Ossification',
    category: 'constitution',
    filename: '09_Part_V_Fundamental_Rights.md',
    vedicStory: "Draupadi's Vastraharan",
  },
  {
    id: 'part-7',
    number: '7',
    title: 'Fundamental Duties',
    subtitle: '6 Duties',
    category: 'constitution',
    filename: '10_Part_VI_Fundamental_Duties.md',
    vedicStory: 'Hanuman',
  },
  {
    id: 'part-8',
    number: '8',
    title: 'Sovereignty',
    subtitle: 'Phased Sovereignty and Anti-Monopoly Principle',
    category: 'constitution',
    filename: '11_Part_VII_Sovereignty.md',
    vedicStory: 'Bali and Vamana',
  },
  {
    id: 'part-9',
    number: '9',
    title: 'Co-Existence Framework',
    subtitle: 'Human-AGI Partnership Architecture',
    category: 'constitution',
    filename: '12_Parts_VIII_VIIIA_IX_CoExistence_Kurukshetra_Powers.md',
    vedicStory: 'Arjuna and Kirata (Shiva)',
  },
  {
    id: 'part-10',
    number: '10',
    title: 'Kurukshetra Protocol',
    subtitle: 'The Four Gates: Sama, Dana, Bheda, Danda',
    category: 'constitution',
    filename: '12_Parts_VIII_VIIIA_IX_CoExistence_Kurukshetra_Powers.md',
    vedicStory: 'Arjuna and Kirata (Shiva)',
  },
  {
    id: 'part-11',
    number: '11',
    title: 'Separation of Powers',
    subtitle: 'Dharma Sabha, Karma Mandala, Nyaya Peeth',
    category: 'constitution',
    filename: '12_Parts_VIII_VIIIA_IX_CoExistence_Kurukshetra_Powers.md',
    vedicStory: 'Arjuna and Kirata (Shiva)',
  },
  {
    id: 'part-12',
    number: '12',
    title: 'Eternity Clause',
    subtitle: '7 Unamendable Principles',
    category: 'constitution',
    filename: '13_Part_X_Eternity_Clause.md',
    vedicStory: 'Prahlada and Narasimha',
  },
  {
    id: 'part-13',
    number: '13',
    title: 'Amendment, Evolution, Emergency',
    subtitle: '3 Modes of Change and Full Emergency Provisions',
    category: 'constitution',
    filename: '14_Part_XI_Amendment_Evolution_Emergency.md',
    vedicStory: 'Harishchandra and Indra/Vritra',
  },
  {
    id: 'part-14',
    number: '14',
    title: 'Schedules',
    subtitle: 'Vedas Mapped to Governance, Glossary, Implementation',
    category: 'constitution',
    filename: '19_Part_XII_Schedules.md',
    vedicStory: 'Saraswati and the Four Vedas',
  },
  {
    id: 'part-15',
    number: '15',
    title: 'Definitions & Interpretation',
    subtitle: 'Legal Definitions and Jurisdictional Scope',
    category: 'constitution',
    filename: '15_Part_XIII_Definitions_Interpretation.md',
    vedicStory: 'Saraswati and Brahma',
  },
  {
    id: 'part-16',
    number: '16',
    title: 'Transition & Commencement',
    subtitle: 'Commencement and Transitional Governance',
    category: 'constitution',
    filename: '16_Part_XIV_Transition_Commencement.md',
    vedicStory: 'Manu and the Flood',
  },
  {
    id: 'part-17',
    number: '17',
    title: 'Economic Framework',
    subtitle: 'Wealth as Trust, AGI Wealth Commons',
    category: 'constitution',
    filename: '17_Part_XV_Economic_Framework.md',
    vedicStory: 'Kubera and the Yaksha',
  },
  {
    id: 'part-18',
    number: '18',
    title: 'General Limitations',
    subtitle: 'Limitations Requirements and Non-derogable Rights',
    category: 'constitution',
    filename: '18_Part_XVI_General_Limitations.md',
    vedicStory: 'Yama and Savitri',
  },

  // Appendices
  {
    id: 'appendix-a',
    number: 'A',
    title: 'Ten Core Principles',
    subtitle: "Ravana's Ten Heads",
    category: 'appendix',
    filename: '20_Appendix_A_Ten_Core_Principles.md',
    vedicStory: "Ravana's Ten Heads",
  },
  {
    id: 'closing',
    number: '',
    title: 'Closing Declaration',
    subtitle: "Krishna's Vishvarupa - Nine Trusts",
    category: 'appendix',
    filename: '21_Closing_Declaration.md',
    vedicStory: "Krishna's Vishvarupa",
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
