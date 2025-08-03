import { TestBed } from '@angular/core/testing';
import { AppHeader } from './app-header';
import { provideRouter } from '@angular/router';

describe('AppHeader', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppHeader],
            providers: [provideRouter([])],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(AppHeader);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
