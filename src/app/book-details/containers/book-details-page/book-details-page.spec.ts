import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookDetailsPageComponent } from './book-details-page';
import { provideRouter, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { BookService } from '@app/services/BookService';
import { BookType } from '@app/books/models/book-type.model';

describe('BookDetailsPageComponent', () => {
    let component: BookDetailsPageComponent;
    let fixture: ComponentFixture<BookDetailsPageComponent>;

    const mockBook: BookType = {
        id: 1,
        name: 'Test Book',
        author: 'Author',
        description: 'Description',
        rating: 4.5,
        year: 2020
    };

    const bookServiceMock = {
        loadBooks: jasmine.createSpy('loadBooks'),
        getBookById: (id: string | null): BookType | undefined =>
            id === '1' ? mockBook : undefined
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BookDetailsPageComponent],
            providers: [
                { provide: BookService, useValue: bookServiceMock },
                provideRouter([]),
                {
                    provide: ActivatedRoute,
                    useValue: {
                        paramMap: of({
                            get: () => '1'
                        })
                    }
                }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(BookDetailsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
