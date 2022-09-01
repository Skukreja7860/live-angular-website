import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactmsgComponent } from './contactmsg.component';

describe('ContactmsgComponent', () => {
  let component: ContactmsgComponent;
  let fixture: ComponentFixture<ContactmsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactmsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
