import { Routes } from '@angular/router';
import {PageNotFoundComponent} from '@app/core/components/page-not-found/page-not-found';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./books/containers/books-page/books-page')
                .then(m => m.BooksPageComponent)
    },
    {
        path: 'book/:id',
        loadComponent: () =>
            import('./book-details/containers/book-details-page/book-details-page')
                .then(m => m.BookDetailsPageComponent)
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
