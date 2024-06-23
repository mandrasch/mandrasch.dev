import books_en from '$lib/stores/en/books';
import books_de from '$lib/stores/de/books';
import type { Book } from '$lib/types';

export const loadBooks = (selectedLanguage: string): { books?: Book[]; error?: string } => {
	try {
		let books: Book[];
		if (selectedLanguage === 'de') {
			books = books_de;
		} else {
			books = books_en;
		}

		return { books };
	} catch (e) {
		console.error('Load error', { e });
		return { error: 'Failed to load books.' };
	}
};
