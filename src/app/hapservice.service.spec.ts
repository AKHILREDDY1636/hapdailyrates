import { TestBed } from '@angular/core/testing';

import { HapserviceService } from './hapservice.service';

describe('HapserviceService', () => {
  let service: HapserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HapserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
