import { TestBed } from '@angular/core/testing';

import { AvancesServiceService } from './avances-service.service';

describe('AvancesServiceService', () => {
  let service: AvancesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvancesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
