import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewmsgComponent } from './reviewmsg.component';

describe('ReviewmsgComponent', () => {
  let component: ReviewmsgComponent;
  let fixture: ComponentFixture<ReviewmsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewmsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
