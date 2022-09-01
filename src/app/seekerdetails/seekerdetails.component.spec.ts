import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerdetailsComponent } from './seekerdetails.component';

describe('SeekerdetailsComponent', () => {
  let component: SeekerdetailsComponent;
  let fixture: ComponentFixture<SeekerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeekerdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
