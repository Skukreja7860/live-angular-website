import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerdataComponent } from './seekerdata.component';

describe('SeekerdataComponent', () => {
  let component: SeekerdataComponent;
  let fixture: ComponentFixture<SeekerdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeekerdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
