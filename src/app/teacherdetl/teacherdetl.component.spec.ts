import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherdetlComponent } from './teacherdetl.component';

describe('TeacherdetlComponent', () => {
  let component: TeacherdetlComponent;
  let fixture: ComponentFixture<TeacherdetlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherdetlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherdetlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
