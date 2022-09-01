import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursevideosComponent } from './coursevideos.component';

describe('CoursevideosComponent', () => {
  let component: CoursevideosComponent;
  let fixture: ComponentFixture<CoursevideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursevideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursevideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
