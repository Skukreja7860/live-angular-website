import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvdetailsComponent } from './cvdetails.component';

describe('CvdetailsComponent', () => {
  let component: CvdetailsComponent;
  let fixture: ComponentFixture<CvdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
