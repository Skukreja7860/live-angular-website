import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursecategoryComponent } from './coursecategory.component';

describe('CoursecategoryComponent', () => {
  let component: CoursecategoryComponent;
  let fixture: ComponentFixture<CoursecategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursecategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
