import { TestBed } from '@angular/core/testing';

import { IptreatmentServiceService } from './iptreatment-service.service';

describe('IptreatmentServiceService', () => {
  let service: IptreatmentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IptreatmentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
