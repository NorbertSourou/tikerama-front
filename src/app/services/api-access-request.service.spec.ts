import { TestBed } from '@angular/core/testing';

import { ApiAccessRequestService } from './api-access-request.service';

describe('ApiAccessRequestService', () => {
  let service: ApiAccessRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAccessRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
