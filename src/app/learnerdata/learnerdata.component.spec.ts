import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerdataComponent } from './learnerdata.component';

describe('LearnerdataComponent', () => {
  let component: LearnerdataComponent;
  let fixture: ComponentFixture<LearnerdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnerdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
