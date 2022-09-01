import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorheaderComponent } from './tutorheader.component';

describe('TutorheaderComponent', () => {
  let component: TutorheaderComponent;
  let fixture: ComponentFixture<TutorheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
