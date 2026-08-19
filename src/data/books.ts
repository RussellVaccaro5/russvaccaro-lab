import data from './books.json';
import { validateBooks } from './validation';

export const books = validateBooks(data);
export type { Book } from './validation';
