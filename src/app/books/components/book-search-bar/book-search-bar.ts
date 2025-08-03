import {Component, effect, input, InputSignal} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@Component({
    selector: 'app-book-search-bar',
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    templateUrl: './book-search-bar.html',
    styleUrl: './book-search-bar.scss'
})
export class BookSearchBarComponent {
    readonly $onSearch: InputSignal<((term: string) => void) | undefined> = input<(term: string) => void>();
    readonly searchControl: FormControl<string | null> = new FormControl('');

    constructor() {
        effect((): void => {
            const value = this.searchControl.value;

            if (typeof value === 'string') {
                this.$onSearch()?.(value);
            }
        });
    }
}
