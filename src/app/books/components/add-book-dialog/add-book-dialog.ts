import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { BookService } from '@app/services/BookService';

@Component({
    selector: 'app-add-book-dialog',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
    templateUrl: './add-book-dialog.html',
    styleUrl: './add-book-dialog.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBookDialogComponent {
    readonly form: FormGroup;
    private readonly _fb: FormBuilder = inject(FormBuilder);
    private readonly _bookService: BookService = inject(BookService);
    private readonly _dialogRef: MatDialogRef<AddBookDialogComponent> = inject(MatDialogRef);

    constructor() {
        this.form = this._fb.group({
            name: ['', [Validators.required, Validators.maxLength(100)]],
            author: ['', [Validators.required]],
            description: ['', [Validators.maxLength(500)]],
            rating: [null, [Validators.min(0), Validators.max(5)]]
        });
    }

    onSubmit(): void {
        if (this.form.valid) {
            this._bookService.addBook(this.form.value);
            this._dialogRef.close(true);
        }
    }
}
