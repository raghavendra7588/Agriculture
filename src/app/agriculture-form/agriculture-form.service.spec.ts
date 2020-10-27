import { TestBed } from '@angular/core/testing';

import { AgricultureFormService } from './agriculture-form.service';

describe('AgricultureFormService', () => {
  let service: AgricultureFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgricultureFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
