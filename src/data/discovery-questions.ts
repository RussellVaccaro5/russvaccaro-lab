import data from './discovery-questions.json';
import { validateDiscoveryQuestions } from './validation';

export const discoveryQuestions = validateDiscoveryQuestions(data);
export type { DiscoveryQuestion } from './validation';
