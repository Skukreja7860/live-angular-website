import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnereditComponent } from './learneredit.component';

describe('LearnereditComponent', () => {
  let component: LearnereditComponent;
  let fixture: ComponentFixture<LearnereditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnereditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
