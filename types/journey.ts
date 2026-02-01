export type ExpansionState = 'collapsed' | 'skills' | 'results' | 'details';

export interface Metric {
  value: string;
  label: string;
  context?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  keywords: string[];
}

export interface Role {
  id: string;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  timelineYear: string;
  isCurrent: boolean;
  logoUrl?: string;
  skills: string[];
  results: Metric[];
  achievements: Achievement[];
}

export interface TimelineSection {
  id: string;
  year: string;
  label: string;
  type: 'role' | 'section';
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  year: string;
  imageUrl?: string;
  honors?: string[];
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  year: string;
  logoUrl?: string;
  description?: string;
  skills?: string[];
}

export type TimelineItemType = 'role' | 'education' | 'certification';

export interface TimelineItem {
  id: string;
  type: TimelineItemType;
  year: string;
  date: string; // For sorting
  data: Role | Education | Certification;
}

export interface PhilosophyPrinciple {
  title: string;
  description: string;
}

export interface SeshanEvolutionStep {
  name: string;
  tech: string;
  issue: string;
  tool: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
