import {FormControl} from '@angular/forms';

export interface AddBookFormType {
    name: FormControl<string>;
    author: FormControl<string>;
    description: FormControl<string>;
    rating: FormControl<number>;
}

export interface AddBookType {
    name: string;
    author: string;
    description: string;
    rating: number;
}
