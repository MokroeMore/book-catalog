import {Component, input, InputSignal} from '@angular/core';
import {BookType} from '@app/books/models/book-type.model';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-book-card',
  imports: [RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss'
})
export class BookCardComponent {
    readonly $book: InputSignal<BookType|undefined> = input<BookType>();
}
