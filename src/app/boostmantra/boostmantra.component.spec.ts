import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostmantraComponent } from './boostmantra.component';

describe('BoostmantraComponent', () => {
  let component: BoostmantraComponent;
  let fixture: ComponentFixture<BoostmantraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoostmantraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoostmantraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
