import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutordetailsComponent } from './tutordetails.component';

describe('TutordetailsComponent', () => {
  let component: TutordetailsComponent;
  let fixture: ComponentFixture<TutordetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutordetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
