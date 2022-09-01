import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreedemoComponent } from './freedemo.component';

describe('FreedemoComponent', () => {
  let component: FreedemoComponent;
  let fixture: ComponentFixture<FreedemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreedemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
