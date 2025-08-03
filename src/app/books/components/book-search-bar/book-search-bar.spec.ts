import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSearchBar } from './book-search-bar';

describe('BookSearchBar', () => {
  let component: BookSearchBar;
  let fixture: ComponentFixture<BookSearchBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookSearchBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookSearchBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
