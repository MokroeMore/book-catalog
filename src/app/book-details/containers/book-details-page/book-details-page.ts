import {ChangeDetectionStrategy, Component, computed, inject, signal, WritableSignal} from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import { BookService} from '@app/services/BookService';
import { CommonModule } from '@angular/common';
import { Signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {BookType} from '@app/books/models/book-type.model';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-book-details-page',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, RouterModule],
    templateUrl: './book-details-page.html',
    styleUrl: './book-details-page.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsPageComponent {
    private readonly route: ActivatedRoute = inject(ActivatedRoute);
    private readonly booksService: BookService = inject(BookService);
    readonly $bookId: WritableSignal<string | null> = signal<string | null>(null);

    readonly $book: Signal<BookType | undefined> = computed(() =>
        this.booksService.getBookById(this.$bookId())
    );

    constructor() {
        this.booksService.loadBooks();
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            this.$bookId.set(id);
        });
    }
}
