import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerheaderComponent } from './learnerheader.component';

describe('LearnerheaderComponent', () => {
  let component: LearnerheaderComponent;
  let fixture: ComponentFixture<LearnerheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnerheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
