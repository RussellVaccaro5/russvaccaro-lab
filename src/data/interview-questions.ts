export const interviewCategories = [
  'Discovery',
  'Qualification',
  'Storytelling',
  'Objections',
  'Closing',
  'Strategy',
] as const;

export const interviewDifficulties = ['Warm-up', 'Core', 'Stretch'] as const;

export type InterviewCategory = (typeof interviewCategories)[number];
export type InterviewDifficulty = (typeof interviewDifficulties)[number];

export interface InterviewQuestion {
  id: string;
  category: InterviewCategory;
  difficulty: InterviewDifficulty;
  prompt: string;
  followUps: string[];
  listenFor: string;
}

export const interviewQuestions: InterviewQuestion[] = [
  {
    id: 'discovery-01',
    category: 'Discovery',
    difficulty: 'Warm-up',
    prompt: 'Walk me through how you prepare for a first discovery call with a new account.',
    followUps: [
      'What do you research before the call?',
      'How do you keep preparation from turning into over-preparation?',
    ],
    listenFor: 'A repeatable plan that connects account research to a small set of useful hypotheses.',
  },
  {
    id: 'discovery-02',
    category: 'Discovery',
    difficulty: 'Core',
    prompt: 'Tell me about a discovery call where the customer’s stated problem was not the real problem.',
    followUps: [
      'Which question changed the direction of the conversation?',
      'How did the new insight affect your deal strategy?',
    ],
    listenFor: 'Curiosity, business acumen, and evidence that the seller can move beyond surface requirements.',
  },
  {
    id: 'discovery-03',
    category: 'Discovery',
    difficulty: 'Stretch',
    prompt: 'A technical buyer gives short answers and insists they are “just evaluating.” How do you create a useful conversation?',
    followUps: [
      'What would you avoid asking?',
      'When would you decide the meeting is not worth forcing?',
    ],
    listenFor: 'Low-pressure relevance, informed hypotheses, and comfort earning depth instead of demanding it.',
  },
  {
    id: 'discovery-04',
    category: 'Discovery',
    difficulty: 'Core',
    prompt: 'How do you uncover the cost of doing nothing without sounding manipulative?',
    followUps: [
      'Give me the exact wording of a question you might use.',
      'How do you validate that the impact is real?',
    ],
    listenFor: 'Neutral questions, customer-owned numbers, and a clear distinction between urgency and pressure.',
  },
  {
    id: 'discovery-05',
    category: 'Discovery',
    difficulty: 'Warm-up',
    prompt: 'What makes a discovery question good?',
    followUps: [
      'Give an example of a weak question and improve it.',
      'How do you decide what to ask next?',
    ],
    listenFor: 'Questions that are relevant, specific, sequenced, and responsive to what the buyer actually says.',
  },
  {
    id: 'discovery-06',
    category: 'Discovery',
    difficulty: 'Stretch',
    prompt: 'You inherit an opportunity with extensive notes but no clear business problem. What do you do next?',
    followUps: [
      'How would you reset with the customer?',
      'What evidence would make you keep or remove the opportunity from forecast?',
    ],
    listenFor: 'A tactful reset, verification of prior claims, and willingness to trade false momentum for clarity.',
  },
  {
    id: 'qualification-01',
    category: 'Qualification',
    difficulty: 'Warm-up',
    prompt: 'What does a genuinely qualified opportunity look like to you?',
    followUps: [
      'Which signal is most often mistaken for qualification?',
      'How does your answer change early versus late in a cycle?',
    ],
    listenFor: 'Multiple verified signals: problem, impact, process, people, timing, and mutual commitment.',
  },
  {
    id: 'qualification-02',
    category: 'Qualification',
    difficulty: 'Core',
    prompt: 'Describe a deal you disqualified even though the prospect liked the product.',
    followUps: [
      'What evidence drove the decision?',
      'How did you communicate it internally and externally?',
    ],
    listenFor: 'Judgment, pipeline honesty, and a productive way of preserving the relationship.',
  },
  {
    id: 'qualification-03',
    category: 'Qualification',
    difficulty: 'Stretch',
    prompt: 'Your champion is enthusiastic but cannot get you access to power. How do you test whether the deal is real?',
    followUps: [
      'How do you avoid undermining the champion?',
      'What is your exit criterion?',
    ],
    listenFor: 'Champion coaching, a value-based reason for access, and a time-bound test of influence.',
  },
  {
    id: 'qualification-04',
    category: 'Qualification',
    difficulty: 'Core',
    prompt: 'How do you use a framework like MEDDPICC without turning the customer conversation into a checklist?',
    followUps: [
      'Which fields require direct customer validation?',
      'How do you handle an unknown that stays unknown?',
    ],
    listenFor: 'Frameworks used as thinking tools, natural sequencing, and explicit evidence quality.',
  },
  {
    id: 'qualification-05',
    category: 'Qualification',
    difficulty: 'Warm-up',
    prompt: 'How do you distinguish a coach from a champion?',
    followUps: [
      'How have you tested that distinction in a live deal?',
      'Can someone become a champion over time?',
    ],
    listenFor: 'Influence, personal motivation, access, action, and evidence beyond friendliness.',
  },
  {
    id: 'qualification-06',
    category: 'Qualification',
    difficulty: 'Stretch',
    prompt: 'A large opportunity has strong pain and executive support but no compelling event. How would you forecast it?',
    followUps: [
      'What would you do to discover or create a decision timeline?',
      'What would make you change the forecast category?',
    ],
    listenFor: 'Separation of deal quality from deal timing and disciplined use of forecast evidence.',
  },
  {
    id: 'storytelling-01',
    category: 'Storytelling',
    difficulty: 'Warm-up',
    prompt: 'Give me the two-minute version of your career story and why this role is the logical next step.',
    followUps: [
      'Which choice in your career best represents how you work?',
      'Why this company specifically?',
    ],
    listenFor: 'A concise through-line, deliberate choices, and a credible connection to the role.',
  },
  {
    id: 'storytelling-02',
    category: 'Storytelling',
    difficulty: 'Core',
    prompt: 'Tell me about your best win without relying on the size of the contract to make it impressive.',
    followUps: [
      'What did you personally change?',
      'Where did the deal nearly fail?',
    ],
    listenFor: 'Clear stakes, seller contribution, obstacles, decisions, and lessons—not just a victory lap.',
  },
  {
    id: 'storytelling-03',
    category: 'Storytelling',
    difficulty: 'Core',
    prompt: 'Tell me about a loss that changed the way you sell.',
    followUps: [
      'What did you miss in the moment?',
      'What behavior is different now?',
    ],
    listenFor: 'Ownership, a specific learning loop, and evidence of changed behavior.',
  },
  {
    id: 'storytelling-04',
    category: 'Storytelling',
    difficulty: 'Stretch',
    prompt: 'Explain a technically complex product you sold to an executive with no technical background.',
    followUps: [
      'Which technical detail did you deliberately leave out?',
      'How did you know the explanation landed?',
    ],
    listenFor: 'Accurate simplification tied to business consequences, with a feedback check.',
  },
  {
    id: 'storytelling-05',
    category: 'Storytelling',
    difficulty: 'Warm-up',
    prompt: 'What accomplishment are you most proud of, and what made it difficult?',
    followUps: [
      'Who else deserves credit?',
      'What would you repeat in a new role?',
    ],
    listenFor: 'Specific difficulty, proportionate ownership, collaboration, and transferable behavior.',
  },
  {
    id: 'storytelling-06',
    category: 'Storytelling',
    difficulty: 'Stretch',
    prompt: 'Give me an example of a time the result was good but your process was poor.',
    followUps: [
      'How did you recognize the difference?',
      'What did you standardize afterward?',
    ],
    listenFor: 'Ability to separate luck from skill and improve even when the scoreboard looked favorable.',
  },
  {
    id: 'objections-01',
    category: 'Objections',
    difficulty: 'Warm-up',
    prompt: 'A prospect says, “You are too expensive.” Talk me through your response.',
    followUps: [
      'What are you trying to learn before defending price?',
      'When would you offer a concession?',
    ],
    listenFor: 'Diagnosis before response, connection to value, and disciplined give-get negotiation.',
  },
  {
    id: 'objections-02',
    category: 'Objections',
    difficulty: 'Core',
    prompt: 'How do you respond when a buyer says your competitor has a feature you lack?',
    followUps: [
      'What if the feature is genuinely important?',
      'How do you avoid attacking the competitor?',
    ],
    listenFor: 'Honesty, requirement validation, consequence mapping, and confidence without defensiveness.',
  },
  {
    id: 'objections-03',
    category: 'Objections',
    difficulty: 'Stretch',
    prompt: 'Late in the cycle, procurement says the deal only happens with a 30% discount. What do you do?',
    followUps: [
      'Who do you involve?',
      'What can you trade besides price?',
    ],
    listenFor: 'Process control, economic-buyer alignment, package creativity, and reciprocal concessions.',
  },
  {
    id: 'objections-04',
    category: 'Objections',
    difficulty: 'Core',
    prompt: 'Tell me about an objection you initially misdiagnosed.',
    followUps: [
      'What exposed the real concern?',
      'How did you recover?',
    ],
    listenFor: 'Listening, willingness to revisit an assumption, and a concrete recovery step.',
  },
  {
    id: 'objections-05',
    category: 'Objections',
    difficulty: 'Warm-up',
    prompt: 'What do you do when a prospect says, “Just send me information”?',
    followUps: [
      'What would make you agree without pushing?',
      'How do you earn a next conversation?',
    ],
    listenFor: 'Respectful pattern interruption, a low-friction question, and relevance instead of generic collateral.',
  },
  {
    id: 'objections-06',
    category: 'Objections',
    difficulty: 'Stretch',
    prompt: 'An executive says the problem matters, but it is not a priority this year. How do you respond?',
    followUps: [
      'How would you test whether that is a real objection or a polite no?',
      'When should you nurture instead of pursue?',
    ],
    listenFor: 'Clear prioritization questions, comfort with a real no, and an appropriate nurture plan.',
  },
  {
    id: 'closing-01',
    category: 'Closing',
    difficulty: 'Warm-up',
    prompt: 'How do you establish next steps so they are mutual rather than seller-owned?',
    followUps: [
      'What makes a next step meaningful?',
      'How do you handle a buyer who will not commit to a date?',
    ],
    listenFor: 'Shared purpose, named owners, dates, and customer contribution.',
  },
  {
    id: 'closing-02',
    category: 'Closing',
    difficulty: 'Core',
    prompt: 'Tell me about a complex deal you brought back on track after it stalled.',
    followUps: [
      'What caused the stall?',
      'Which action created movement rather than activity?',
    ],
    listenFor: 'Accurate diagnosis, stakeholder re-engagement, and a material—not cosmetic—next step.',
  },
  {
    id: 'closing-03',
    category: 'Closing',
    difficulty: 'Stretch',
    prompt: 'It is the final week of the quarter and the customer has gone quiet. What do you do?',
    followUps: [
      'What would you refuse to do?',
      'How would the answer differ if their deadline, not yours, were at risk?',
    ],
    listenFor: 'Composure, customer-centered urgency, multi-threading, and no quarter-end theater.',
  },
  {
    id: 'closing-04',
    category: 'Closing',
    difficulty: 'Core',
    prompt: 'How do you build and use a mutual action plan?',
    followUps: [
      'When do you introduce it?',
      'What makes it valuable to the buyer?',
    ],
    listenFor: 'A buyer-relevant plan covering decisions and implementation, introduced before contracting.',
  },
  {
    id: 'closing-05',
    category: 'Closing',
    difficulty: 'Warm-up',
    prompt: 'How do you ask for the business?',
    followUps: [
      'What should already be true before you ask?',
      'Give me the actual language you use.',
    ],
    listenFor: 'Direct, natural language after decision criteria and process have been earned and verified.',
  },
  {
    id: 'closing-06',
    category: 'Closing',
    difficulty: 'Stretch',
    prompt: 'A customer verbally selects you, but legal and security reviews have no owners or dates. Is the deal committed?',
    followUps: [
      'How would you expose the implementation path?',
      'What evidence moves it into commit?',
    ],
    listenFor: 'A firm distinction between preference and executable purchase process.',
  },
  {
    id: 'strategy-01',
    category: 'Strategy',
    difficulty: 'Warm-up',
    prompt: 'How do you decide where to spend your time across a territory?',
    followUps: [
      'Which signals affect account priority?',
      'How often do you revisit the plan?',
    ],
    listenFor: 'Explicit segmentation, trigger-based prioritization, balanced horizons, and regular review.',
  },
  {
    id: 'strategy-02',
    category: 'Strategy',
    difficulty: 'Core',
    prompt: 'Build a 30-day plan for entering a territory with low brand awareness and no inherited pipeline.',
    followUps: [
      'What would you measure each week?',
      'How would partners or internal experts fit into the plan?',
    ],
    listenFor: 'Focused account selection, learning loops, relevant messaging, multi-channel activity, and leading indicators.',
  },
  {
    id: 'strategy-03',
    category: 'Strategy',
    difficulty: 'Stretch',
    prompt: 'Your pipeline is healthy by dollars but concentrated in three similar deals. How do you evaluate the risk?',
    followUps: [
      'What patterns would worry you?',
      'What do you change this week?',
    ],
    listenFor: 'Concentration analysis, correlated risk, evidence quality, and specific coverage actions.',
  },
  {
    id: 'strategy-04',
    category: 'Strategy',
    difficulty: 'Core',
    prompt: 'Describe how you would create a point of view for a target account.',
    followUps: [
      'What makes it different from personalization?',
      'How do you test the hypothesis?',
    ],
    listenFor: 'A defensible market/account insight connected to business impact and offered as a testable hypothesis.',
  },
  {
    id: 'strategy-05',
    category: 'Strategy',
    difficulty: 'Warm-up',
    prompt: 'Which sales metrics tell you the most about the health of your business?',
    followUps: [
      'Which one is most actionable?',
      'How do you prevent metrics from driving the wrong behavior?',
    ],
    listenFor: 'A mix of outcomes, conversion, velocity, quality, and activity interpreted in context.',
  },
  {
    id: 'strategy-06',
    category: 'Strategy',
    difficulty: 'Stretch',
    prompt: 'Leadership raises your quota while your territory shrinks. How do you respond?',
    followUps: [
      'What do you analyze before escalating?',
      'How do you stay accountable while challenging the assumptions?',
    ],
    listenFor: 'Fact-based planning, scenario analysis, constructive escalation, and ownership of controllables.',
  },
];
