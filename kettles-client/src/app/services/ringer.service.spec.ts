import { TestBed } from '@angular/core/testing';

import { RingerService } from './ringer.service';

describe('RingerService', () => {
  let service: RingerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RingerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
