export interface LearningNote {
  term: string;
  category: 'AI & Data' | 'Cloud & DevOps' | 'Cybersecurity' | 'Sales & GTM';
  prompt: string;
  answer: string;
  connections: string[];
}

export const learningNotes: LearningNote[] = [
  {
    term: 'Lakehouse',
    category: 'AI & Data',
    prompt: 'What problem is the lakehouse architecture trying to solve?',
    answer:
      'It aims to combine the flexible, low-cost storage associated with data lakes with the management, reliability, and query patterns associated with data warehouses.',
    connections: ['Open table formats', 'Governance', 'Analytics and AI workloads'],
  },
  {
    term: 'eBPF',
    category: 'Cloud & DevOps',
    prompt: 'Why does eBPF matter for infrastructure tooling?',
    answer:
      'It allows verified programs to run in the Linux kernel, enabling deep observability, networking, and security controls without modifying application code or loading a traditional kernel module.',
    connections: ['Runtime security', 'Observability', 'Cloud networking'],
  },
  {
    term: 'Zero Trust',
    category: 'Cybersecurity',
    prompt: 'What is the operating assumption behind Zero Trust?',
    answer:
      'Access decisions should continuously evaluate identity, device, context, and requested resource instead of treating network location as sufficient proof of trust.',
    connections: ['Identity', 'Device posture', 'Least privilege'],
  },
  {
    term: 'Economic Buyer',
    category: 'Sales & GTM',
    prompt: 'What distinguishes an economic buyer from a senior stakeholder?',
    answer:
      'The economic buyer has final authority over the funds or business tradeoff required for the purchase. Title alone does not prove that authority.',
    connections: ['MEDDPICC', 'Decision process', 'Executive alignment'],
  },
];
