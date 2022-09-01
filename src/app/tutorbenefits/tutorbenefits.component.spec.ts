import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorbenefitsComponent } from './tutorbenefits.component';

describe('TutorbenefitsComponent', () => {
  let component: TutorbenefitsComponent;
  let fixture: ComponentFixture<TutorbenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorbenefitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorbenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
