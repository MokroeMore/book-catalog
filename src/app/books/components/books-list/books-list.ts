import {Component, input, InputSignal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookType} from '@app/books/models/book-type.model';
import {BookCardComponent} from '@app/books/components/book-card/book-card';

@Component({
    selector: 'app-books-list',
    imports: [CommonModule, BookCardComponent],
    templateUrl: './books-list.html',
    styleUrl: './books-list.scss'
})
export class BooksListComponent {
    readonly $booksList: InputSignal<BookType[]> = input<BookType[]>([], { alias: 'booksList' });
}
