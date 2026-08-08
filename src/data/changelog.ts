export interface ChangeEntry {
  date: string;
  version: string;
  title: string;
  changes: string[];
  learned: string;
}

export const changelog: ChangeEntry[] = [
  {
    date: '2026-08-08',
    version: '0.1.0',
    title: 'Lab foundation',
    changes: [
      'Added shared navigation, responsive styling, and a dark-mode preference.',
      'Created the experiment directory and core routes.',
      'Added browser-only prototypes for reading, qualification, and account POV work.',
    ],
    learned:
      'Astro can render most of the site as static HTML while small scripts add interaction only where a page needs it.',
  },
];
