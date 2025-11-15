import books_en from '$lib/stores/en/books';
import books_de from '$lib/stores/de/books';
import type { Book } from '$lib/types';

export const loadBooks = (language = 'de'): { books?: Book[]; error?: string } => {
	try {
		const books: Book[] = language === 'de' ? books_de : books_en;

		return { books };
	} catch (e) {
		console.error('Load error', { e });
		return { error: 'Failed to load books.' };
	}
};
