import data from './learning-cards.json';
import { validateLearningCards } from './validation';
export { learningTopics } from './schema';
export type { LearningCard, LearningTopic } from './schema';

export const learningCards = validateLearningCards(data);
