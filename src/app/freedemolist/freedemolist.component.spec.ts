import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreedemolistComponent } from './freedemolist.component';

describe('FreedemolistComponent', () => {
  let component: FreedemolistComponent;
  let fixture: ComponentFixture<FreedemolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreedemolistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreedemolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
