import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatestatus2Component } from './updatestatus2.component';

describe('Updatestatus2Component', () => {
  let component: Updatestatus2Component;
  let fixture: ComponentFixture<Updatestatus2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Updatestatus2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Updatestatus2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
