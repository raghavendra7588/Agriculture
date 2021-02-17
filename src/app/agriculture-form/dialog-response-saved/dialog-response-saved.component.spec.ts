import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogResponseSavedComponent } from './dialog-response-saved.component';

describe('DialogResponseSavedComponent', () => {
  let component: DialogResponseSavedComponent;
  let fixture: ComponentFixture<DialogResponseSavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogResponseSavedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogResponseSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
