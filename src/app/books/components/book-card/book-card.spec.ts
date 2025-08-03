import { TestBed } from '@angular/core/testing';
import { BookCardComponent } from './book-card';
import { provideRouter } from '@angular/router';

describe('BookCardComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BookCardComponent],
            providers: [provideRouter([])], // 👈 сюда
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(BookCardComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
