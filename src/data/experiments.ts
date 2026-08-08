import type { Status } from '../components/StatusBadge.astro';

export interface Experiment {
  title: string;
  description: string;
  href: string;
  status: Status;
  technologies: string[];
}

export const experiments: Experiment[] = [
  {
    title: 'Reading Log Explorer',
    description: 'Search and filter books, surface takeaways, and choose a random item from the visible list.',
    href: '/reading/',
    status: 'Prototype',
    technologies: ['Astro', 'JSON', 'Browser JS'],
  },
  {
    title: 'MEDDPICC Deal Diagnostic',
    description: 'Assess evidence across eight qualification dimensions and expose the weakest areas in a deal.',
    href: '/sales/meddpicc/',
    status: 'Prototype',
    technologies: ['Forms', 'Scoring', 'localStorage'],
  },
  {
    title: 'Target Account POV Builder',
    description: 'Turn account signals, likely pain, and relevant capabilities into a structured working hypothesis.',
    href: '/sales/pov-builder/',
    status: 'Prototype',
    technologies: ['Forms', 'Templates', 'Clipboard API'],
  },
  {
    title: 'Technical Learning Cards',
    description: 'A searchable set of concise concepts across AI/data, cloud infrastructure, DevOps, and security.',
    href: '/learning/',
    status: 'Active',
    technologies: ['TypeScript data', 'Filters', 'Disclosure UI'],
  },
  {
    title: 'Build Changelog',
    description: 'A public record of what changed, what each iteration taught, and what comes next.',
    href: '/changelog/',
    status: 'Active',
    technologies: ['Astro', 'TypeScript', 'Static rendering'],
  },
];
