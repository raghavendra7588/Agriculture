import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgricultureRelatedFormComponent } from './agriculture-related-form.component';

describe('AgricultureRelatedFormComponent', () => {
  let component: AgricultureRelatedFormComponent;
  let fixture: ComponentFixture<AgricultureRelatedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgricultureRelatedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgricultureRelatedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
