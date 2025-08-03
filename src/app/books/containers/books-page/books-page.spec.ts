import { TestBed } from '@angular/core/testing';
import { BooksPageComponent } from './books-page';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('BooksPageComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BooksPageComponent],
            providers: [
                provideHttpClient(),
                provideRouter([]),
            ],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(BooksPageComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
