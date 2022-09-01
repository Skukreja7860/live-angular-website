import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerdetailsComponent } from './learnerdetails.component';

describe('LearnerdetailsComponent', () => {
  let component: LearnerdetailsComponent;
  let fixture: ComponentFixture<LearnerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnerdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
