import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerupdateComponent } from './seekerupdate.component';

describe('SeekerupdateComponent', () => {
  let component: SeekerupdateComponent;
  let fixture: ComponentFixture<SeekerupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeekerupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
