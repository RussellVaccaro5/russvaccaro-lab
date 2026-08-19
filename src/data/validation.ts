import type { Book, DiscoveryQuestion, InterviewQuestion, LearningCard } from './schema';
import { bookStatuses, interviewCategories, interviewDifficulties, learningTopics } from './schema';

export interface ValidationIssue {
  index: number;
  field: string;
  message: string;
}

const record = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);
const text = (value: unknown): value is string => typeof value === 'string' && value.trim().length > 0;
const slug = (value: unknown): value is string => text(value) && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);

function commonIssues(value: unknown, index: number, ids: Set<string>): ValidationIssue[] {
  if (!record(value)) return [{ index, field: 'entry', message: 'Must be an object.' }];
  const issues: ValidationIssue[] = [];
  if (!slug(value.id)) issues.push({ index, field: 'id', message: 'Use a lowercase, hyphenated ID.' });
  else if (ids.has(value.id as string)) issues.push({ index, field: 'id', message: 'ID must be unique.' });
  else ids.add(value.id as string);
  return issues;
}

const requiredText = (entry: Record<string, unknown>, fields: string[], index: number) =>
  fields.flatMap((field) => text(entry[field]) ? [] : [{ index, field, message: 'This field is required.' }]);

export function getValidationIssues(kind: 'books' | 'interview' | 'learning' | 'discovery', value: unknown): ValidationIssue[] {
  if (!Array.isArray(value)) return [{ index: -1, field: 'dataset', message: 'Dataset must be an array.' }];
  const ids = new Set<string>();
  return value.flatMap((item, index) => {
    const issues = commonIssues(item, index, ids);
    if (!record(item)) return issues;
    if (kind === 'books') {
      issues.push(...requiredText(item, ['title', 'author', 'topic', 'note'], index).filter((issue) => issue.field !== 'note'));
      if (typeof item.note !== 'string') issues.push({ index, field: 'note', message: 'Must be text (it may be empty).' });
      if (!bookStatuses.includes(item.status as never)) issues.push({ index, field: 'status', message: 'Choose a supported status.' });
      if (!Number.isInteger(item.year) || (item.year as number) < 1 || (item.year as number) > 2100) issues.push({ index, field: 'year', message: 'Enter a valid publication year.' });
      if (item.rating !== null && (!Number.isInteger(item.rating) || (item.rating as number) < 1 || (item.rating as number) > 5)) issues.push({ index, field: 'rating', message: 'Use 1–5 or leave it unrated.' });
    } else if (kind === 'interview') {
      issues.push(...requiredText(item, ['prompt', 'listenFor'], index));
      if (!interviewCategories.includes(item.category as never)) issues.push({ index, field: 'category', message: 'Choose a supported category.' });
      if (!interviewDifficulties.includes(item.difficulty as never)) issues.push({ index, field: 'difficulty', message: 'Choose a supported difficulty.' });
      if (!Array.isArray(item.followUps) || item.followUps.length === 0 || item.followUps.some((entry) => !text(entry))) issues.push({ index, field: 'followUps', message: 'Add at least one non-empty follow-up.' });
    } else if (kind === 'learning') {
      issues.push(...requiredText(item, ['title', 'prompt', 'explanation', 'practice'], index));
      if (!learningTopics.includes(item.topic as never)) issues.push({ index, field: 'topic', message: 'Choose a supported topic.' });
    } else {
      issues.push(...requiredText(item, ['label', 'prompt', 'placeholder'], index));
    }
    return issues;
  });
}

function assertDataset<T>(kind: Parameters<typeof getValidationIssues>[0], value: unknown): T[] {
  const issues = getValidationIssues(kind, value);
  if (issues.length) {
    const detail = issues.slice(0, 8).map(({ index, field, message }) => `entry ${index + 1}.${field}: ${message}`).join('\n');
    throw new Error(`Invalid ${kind} dataset:\n${detail}`);
  }
  return value as T[];
}

export const validateBooks = (value: unknown) => assertDataset<Book>('books', value);
export const validateInterviewQuestions = (value: unknown) => assertDataset<InterviewQuestion>('interview', value);
export const validateLearningCards = (value: unknown) => assertDataset<LearningCard>('learning', value);
export const validateDiscoveryQuestions = (value: unknown) => assertDataset<DiscoveryQuestion>('discovery', value);
export { bookStatuses } from './schema';
export type { Book, DiscoveryQuestion } from './schema';
