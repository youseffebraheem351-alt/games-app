import { TestBed } from '@angular/core/testing';

import { SailingService } from './sailing.service';

describe('SailingService', () => {
  let service: SailingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SailingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
