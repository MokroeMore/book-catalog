import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { computed } from '@angular/core';
import {BookType} from '@app/books/models/book-type.model';

@Injectable({ providedIn: 'root' })
export class BookService {
    private readonly http = inject(HttpClient);
    private readonly $books = signal<BookType[]>([]);

    readonly $allBooks = computed(() => this.$books());

    loadBooks(): void {
        this.http.get<BookType[]>('/assets/books-data/books.json')
            .subscribe((books) => this.$books.set(books));
    }

    getBookById(id: string | null): BookType | undefined {
        if (id == null) return;
        return this.$books().find((book) => book.id === +id);
    }

    addBook(book: BookType): void {
        this.$books.update((prev) => [...prev, book]);
    }

    searchBook(term: string): BookType[] {
        const lcTerm = term.toLowerCase();
        return this.$books().filter(
            (book) =>
                book.name.toLowerCase().includes(lcTerm) ||
                book.author.toLowerCase().includes(lcTerm)
        );
    }
}
