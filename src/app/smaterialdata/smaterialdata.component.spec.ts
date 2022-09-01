import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmaterialdataComponent } from './smaterialdata.component';

describe('SmaterialdataComponent', () => {
  let component: SmaterialdataComponent;
  let fixture: ComponentFixture<SmaterialdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmaterialdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmaterialdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
