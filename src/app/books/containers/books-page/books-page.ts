import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    OnInit,
    Signal,
    signal,
    WritableSignal
} from '@angular/core';
import {BooksSearchBarComponent} from '@app/books/components/book-search-bar/books-search-bar';
import {BooksListComponent} from '@app/books/components/books-list/books-list';
import {BookService} from '@app/services/BookService';
import {BookType} from '@app/books/models/book-type.model';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
    selector: 'app-books-page',
    imports: [CommonModule, BooksSearchBarComponent, BooksListComponent, RouterModule],
    templateUrl: './books-page.html',
    styleUrl: './books-page.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksPageComponent implements OnInit {
    private readonly booksService: BookService = inject(BookService);
    $searchVal: WritableSignal<string> = signal('');

    readonly $filteredBooks: Signal<BookType[]> = computed(() =>
        this.$searchVal() ? this.booksService.searchBook(this.$searchVal()) : this.booksService.$allBooks()
    );

    readonly onSearch = (value: string): void => {
        this.$searchVal.set(value);
    };

    ngOnInit(): void {
        this.booksService.loadBooks();
    }
}
