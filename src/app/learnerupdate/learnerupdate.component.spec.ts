import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerupdateComponent } from './learnerupdate.component';

describe('LearnerupdateComponent', () => {
  let component: LearnerupdateComponent;
  let fixture: ComponentFixture<LearnerupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnerupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
