export interface MeddpiccDimension {
  key: string;
  label: string;
  prompt: string;
  evidence: string;
}

export const meddpiccDimensions: MeddpiccDimension[] = [
  {
    key: 'metrics',
    label: 'Metrics',
    prompt: 'What measurable business outcome would justify change?',
    evidence: 'A validated baseline, target improvement, calculation, and owner.',
  },
  {
    key: 'economic-buyer',
    label: 'Economic Buyer',
    prompt: 'Who can approve the money and accept the business tradeoff?',
    evidence: 'Confirmed authority, priorities, access plan, and success criteria.',
  },
  {
    key: 'decision-criteria',
    label: 'Decision Criteria',
    prompt: 'What technical, business, and commercial criteria will determine the choice?',
    evidence: 'Customer-confirmed criteria plus your position against each one.',
  },
  {
    key: 'decision-process',
    label: 'Decision Process',
    prompt: 'How will the customer move from evaluation to an approved decision?',
    evidence: 'Named steps, stakeholders, meetings, dependencies, and dates.',
  },
  {
    key: 'paper-process',
    label: 'Paper Process',
    prompt: 'What must happen after the business decision before signature?',
    evidence: 'Security, legal, procurement, finance, vendor, and signature workflow.',
  },
  {
    key: 'identified-pain',
    label: 'Identified Pain',
    prompt: 'What consequential problem makes maintaining the status quo unacceptable?',
    evidence: 'A specific problem, affected people, consequences, and urgency.',
  },
  {
    key: 'champion',
    label: 'Champion',
    prompt: 'Who has influence, personal motivation, and the willingness to sell internally?',
    evidence: 'Demonstrated influence, coaching, internal action, and shared information.',
  },
  {
    key: 'competition',
    label: 'Competition',
    prompt: 'What other vendor, internal path, or no-decision outcome could win?',
    evidence: 'Known alternatives, political support, relative position, and counter-plan.',
  },
];
