import { TestBed } from '@angular/core/testing';

import { SuberheroService } from './suberhero.service';

describe('SuberheroService', () => {
  let service: SuberheroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuberheroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
