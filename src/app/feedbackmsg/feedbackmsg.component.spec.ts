import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackmsgComponent } from './feedbackmsg.component';

describe('FeedbackmsgComponent', () => {
  let component: FeedbackmsgComponent;
  let fixture: ComponentFixture<FeedbackmsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackmsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
