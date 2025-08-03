import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddBookDialogComponent } from './add-book-dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { BookService } from '@app/services/BookService';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddBookDialogComponent', () => {
    let component: AddBookDialogComponent;
    let fixture: ComponentFixture<AddBookDialogComponent>;
    let mockBookService: BookService;
    let mockMatDialogRef: MatDialogRef<AddBookDialogComponent>;

    beforeEach(async () => {
        mockBookService = jasmine.createSpyObj('BookService', ['addBook']);
        mockMatDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);

        await TestBed.configureTestingModule({
            imports: [
                AddBookDialogComponent,
                HttpClientTestingModule
            ],
            providers: [
                FormBuilder,
                { provide: BookService, useValue: mockBookService },
                { provide: MatDialogRef, useValue: mockMatDialogRef }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(AddBookDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should close the dialog and add book on valid form submission', () => {
        component.form.controls['name'].setValue('Test Book');
        component.form.controls['author'].setValue('Test Author');
        component.form.controls['description'].setValue('Test Description');
        component.form.controls['rating'].setValue(4);

        component.onSubmit();

        expect(mockBookService.addBook).toHaveBeenCalledWith(component.form.value);
        expect(mockMatDialogRef.close).toHaveBeenCalledWith(true);
    });

    it('should not add book or close dialog on invalid form submission', () => {
        component.form.controls['name'].setValue('');
        component.form.controls['author'].setValue('Test Author');

        component.onSubmit();

        expect(mockBookService.addBook).not.toHaveBeenCalled();
        expect(mockMatDialogRef.close).not.toHaveBeenCalled();
    });
});
