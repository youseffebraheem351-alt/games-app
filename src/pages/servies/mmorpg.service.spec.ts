import { TestBed } from '@angular/core/testing';

import { MmorpgService } from './mmorpg.service';

describe('MmorpgService', () => {
  let service: MmorpgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MmorpgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
