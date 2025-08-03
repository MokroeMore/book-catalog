import { inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { computed } from '@angular/core';
import { BookType } from '@app/books/models/book-type.model';
import { AddBookType } from '@app/books/models/add-book-form-type.model';
import { createId } from '@app/shared/utils/create-id.util';

@Injectable({ providedIn: 'root' })
export class BookService {
    private readonly http: HttpClient = inject(HttpClient);
    private readonly $books: WritableSignal<BookType[]> = signal<BookType[]>([]);

    readonly $allBooks: Signal<BookType[]> = computed(() => this.$books());

    loadBooks(): void {
        this.http.get<BookType[]>('/assets/books-data/books.json')
            .subscribe((books) => this.$books.set(books));
    }

    getBookById(id: string | null): BookType | undefined {
        if (id == null) return;
        return this.$books().find((book) => book.id === +id);
    }

    addBook(book: AddBookType): void {
        const bookRes = { ...book, id: createId()};
        this.$books.update((prev) => [...prev, bookRes]);
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
