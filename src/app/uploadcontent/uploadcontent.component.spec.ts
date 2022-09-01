import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadcontentComponent } from './uploadcontent.component';

describe('UploadcontentComponent', () => {
  let component: UploadcontentComponent;
  let fixture: ComponentFixture<UploadcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
