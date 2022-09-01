import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekereditComponent } from './seekeredit.component';

describe('SeekereditComponent', () => {
  let component: SeekereditComponent;
  let fixture: ComponentFixture<SeekereditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeekereditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
