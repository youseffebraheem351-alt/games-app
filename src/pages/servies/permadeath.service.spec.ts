import { TestBed } from '@angular/core/testing';

import { PermadeathService } from './permadeath.service';

describe('PermadeathService', () => {
  let service: PermadeathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermadeathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
