import { TestBed } from '@angular/core/testing';

import { InsuranceClaimServiceService } from './insurance-claim-service.service';

describe('InsuranceClaimServiceService', () => {
  let service: InsuranceClaimServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuranceClaimServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
