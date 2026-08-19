export const interviewCategories = ['Discovery', 'Qualification', 'Storytelling', 'Objections', 'Closing', 'Strategy'] as const;
export const interviewDifficulties = ['Warm-up', 'Core', 'Stretch'] as const;
export const learningTopics = ['Sales craft', 'Technical fluency', 'Thinking', 'Writing', 'Career'] as const;
export const bookStatuses = ['Reading', 'Queue', 'Finished'] as const;

export type InterviewCategory = (typeof interviewCategories)[number];
export type InterviewDifficulty = (typeof interviewDifficulties)[number];
export type LearningTopic = (typeof learningTopics)[number];

export interface InterviewQuestion {
  id: string;
  category: InterviewCategory;
  difficulty: InterviewDifficulty;
  prompt: string;
  followUps: string[];
  listenFor: string;
}

export interface LearningCard {
  id: string;
  topic: LearningTopic;
  title: string;
  prompt: string;
  explanation: string;
  practice: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  topic: string;
  status: (typeof bookStatuses)[number];
  year: number;
  rating: number | null;
  note: string;
}

export interface DiscoveryQuestion {
  id: string;
  label: string;
  prompt: string;
  placeholder: string;
}
