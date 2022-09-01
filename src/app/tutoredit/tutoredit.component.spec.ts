import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoreditComponent } from './tutoredit.component';

describe('TutoreditComponent', () => {
  let component: TutoreditComponent;
  let fixture: ComponentFixture<TutoreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutoreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
