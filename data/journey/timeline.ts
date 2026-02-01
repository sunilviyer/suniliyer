import { TimelineItem } from '@/types/journey';
import { roles } from './roles';
import { education } from './education';
import { certifications } from './certifications';

// Helper to find items by ID
const findRole = (id: string) => roles.find(r => r.id === id);
const findEducation = (id: string) => education.find(e => e.id === id);
const findCertification = (id: string) => certifications.find(c => c.id === id);

// Manual ordering as specified by user:
// 1. Shift → 2. Cloud Leader → 3. EY-SM → 4. Python Cornell → 5. EY-M
// → 6. AI Business → 7. EY-SC → 8. MBA → 9. Infosys → 10. B-Tech
export const timeline: TimelineItem[] = [
  // 1. Shift Technology
  {
    id: 'shift',
    type: 'role' as const,
    year: '2024',
    date: 'July 2024',
    data: findRole('shift')!,
  },
  // 2. Certified Cloud Digital Leader - Google
  {
    id: 'cert-google-cloud',
    type: 'certification' as const,
    year: '2024',
    date: '2024-05-03',
    data: findCertification('cert-google-cloud')!,
  },
  // 3. EY Senior Manager
  {
    id: 'ey-sm',
    type: 'role' as const,
    year: '2020',
    date: 'October 2020',
    data: findRole('ey-sm')!,
  },
  // 4. Python for Data Science - Cornell
  {
    id: 'cert-cornell-python',
    type: 'certification' as const,
    year: '2021-2022',
    date: '2022',
    data: findCertification('cert-cornell-python')!,
  },
  // 5. EY Manager
  {
    id: 'ey-m',
    type: 'role' as const,
    year: '2016',
    date: 'October 2016',
    data: findRole('ey-m')!,
  },
  // 6. AI for Business - UPenn
  {
    id: 'cert-upenn-ai',
    type: 'certification' as const,
    year: '2024',
    date: '2024-04',
    data: findCertification('cert-upenn-ai')!,
  },
  // 7. EY Senior Consultant
  {
    id: 'ey-sc',
    type: 'role' as const,
    year: '2014',
    date: 'May 2014',
    data: findRole('ey-sc')!,
  },
  // 8. MBA - University of Toronto
  {
    id: 'mba',
    type: 'education' as const,
    year: '2012-2014',
    date: '2012',
    data: findEducation('mba')!,
  },
  // 9. Infosys
  {
    id: 'infosys',
    type: 'role' as const,
    year: '2006',
    date: 'June 2006',
    data: findRole('infosys')!,
  },
  // 10. B-Tech - Anna University
  {
    id: 'btech',
    type: 'education' as const,
    year: '2002-2006',
    date: '2002',
    data: findEducation('btech')!,
  },
];

// Extract all unique skills from roles
export const allSkills = Array.from(
  new Set(
    roles.flatMap((role) => role.skills)
  )
).sort();
