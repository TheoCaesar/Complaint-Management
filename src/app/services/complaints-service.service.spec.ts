import { TestBed } from '@angular/core/testing';

import { ComplaintsServiceService } from './complaints-service.service';

describe('ComplaintsServiceService', () => {
  let service: ComplaintsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplaintsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
