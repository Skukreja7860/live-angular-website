import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutors2Component } from './tutors2.component';

describe('Tutors2Component', () => {
  let component: Tutors2Component;
  let fixture: ComponentFixture<Tutors2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutors2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutors2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
