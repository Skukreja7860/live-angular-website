import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecoursecatComponent } from './updatecoursecat.component';

describe('UpdatecoursecatComponent', () => {
  let component: UpdatecoursecatComponent;
  let fixture: ComponentFixture<UpdatecoursecatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecoursecatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecoursecatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
