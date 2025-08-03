import {ChangeDetectionStrategy, Component, effect, inject, input, InputSignal} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {AddBookDialogComponent} from '@app/books/components/add-book-dialog/add-book-dialog';

@Component({
    selector: 'app-book-search-bar',
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    templateUrl: './books-search-bar.html',
    styleUrl: './books-search-bar.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksSearchBarComponent {
    readonly $onSearch: InputSignal<((term: string) => void) | undefined> = input<(term: string) => void>();
    private readonly dialog: MatDialog = inject(MatDialog);
    readonly searchControl: FormControl<string | null> = new FormControl<string | null>('');

    constructor() {
        effect((): void => {
            const value = this.searchControl.value;

            if (typeof value === 'string') {
                this.$onSearch()?.(value);
            }
        });
    }

    openDialog(): void {
        this.dialog.open(AddBookDialogComponent, {
            width: '600px',
            autoFocus: false,
            disableClose: false,
        });
    }
}
