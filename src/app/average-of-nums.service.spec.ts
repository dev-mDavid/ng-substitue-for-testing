import { TestBed } from '@angular/core/testing';

import { AverageOfNumsService } from './average-of-nums.service';

describe('AverageOfNumsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AverageOfNumsService = TestBed.get(AverageOfNumsService);
    expect(service).toBeTruthy();
  });
});
