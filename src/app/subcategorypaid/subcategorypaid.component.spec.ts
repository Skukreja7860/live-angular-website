import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategorypaidComponent } from './subcategorypaid.component';

describe('SubcategorypaidComponent', () => {
  let component: SubcategorypaidComponent;
  let fixture: ComponentFixture<SubcategorypaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcategorypaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategorypaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
