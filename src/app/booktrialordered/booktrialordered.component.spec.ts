import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooktrialorderedComponent } from './booktrialordered.component';

describe('BooktrialorderedComponent', () => {
  let component: BooktrialorderedComponent;
  let fixture: ComponentFixture<BooktrialorderedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooktrialorderedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooktrialorderedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
