import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerheaderComponent } from './seekerheader.component';

describe('SeekerheaderComponent', () => {
  let component: SeekerheaderComponent;
  let fixture: ComponentFixture<SeekerheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeekerheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
