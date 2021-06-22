import { TestBed } from '@angular/core/testing';

import { IpTreatmentOfferingServiceService } from './ip-treatment-offering-service.service';

describe('IpTreatmentOfferingServiceService', () => {
  let service: IpTreatmentOfferingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpTreatmentOfferingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
