import data from './interview-questions.json';
import { validateInterviewQuestions } from './validation';
export { interviewCategories, interviewDifficulties } from './schema';
export type { InterviewCategory, InterviewDifficulty, InterviewQuestion } from './schema';

export const interviewQuestions = validateInterviewQuestions(data);
