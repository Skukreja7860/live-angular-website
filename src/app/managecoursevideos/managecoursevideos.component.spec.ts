import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecoursevideosComponent } from './managecoursevideos.component';

describe('ManagecoursevideosComponent', () => {
  let component: ManagecoursevideosComponent;
  let fixture: ComponentFixture<ManagecoursevideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagecoursevideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecoursevideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
