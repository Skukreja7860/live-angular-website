import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutors1Component } from './tutors1.component';

describe('Tutors1Component', () => {
  let component: Tutors1Component;
  let fixture: ComponentFixture<Tutors1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutors1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutors1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
