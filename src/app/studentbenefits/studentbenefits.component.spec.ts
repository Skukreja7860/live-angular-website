import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentbenefitsComponent } from './studentbenefits.component';

describe('StudentbenefitsComponent', () => {
  let component: StudentbenefitsComponent;
  let fixture: ComponentFixture<StudentbenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentbenefitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentbenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
