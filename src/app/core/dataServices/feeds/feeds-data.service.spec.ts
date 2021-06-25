import { TestBed } from '@angular/core/testing';

import { FeedsDataService } from './feeds-data.service';

describe('FeedsDataService', () => {
  let service: FeedsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
