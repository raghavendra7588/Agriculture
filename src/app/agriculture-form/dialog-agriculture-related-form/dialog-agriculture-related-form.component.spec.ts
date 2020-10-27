import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAgricultureRelatedFormComponent } from './dialog-agriculture-related-form.component';

describe('DialogAgricultureRelatedFormComponent', () => {
  let component: DialogAgricultureRelatedFormComponent;
  let fixture: ComponentFixture<DialogAgricultureRelatedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAgricultureRelatedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAgricultureRelatedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
