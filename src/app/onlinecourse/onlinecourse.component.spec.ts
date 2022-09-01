import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinecourseComponent } from './onlinecourse.component';

describe('OnlinecourseComponent', () => {
  let component: OnlinecourseComponent;
  let fixture: ComponentFixture<OnlinecourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlinecourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
