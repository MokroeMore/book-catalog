import { Routes } from '@angular/router';
import {BooksListComponent} from '@app/books/components/books-list/books-list';

export const routes: Routes = [
  { path: '', component: BooksListComponent },
  // { path: 'book/:id', component: BookDetailsComponent },
  // { path: 'add', component: BookFormComponent },
  { path: '**', redirectTo: '' }
];
