import { TestBed } from '@angular/core/testing';

import { GetexchangeService } from './getexchange.service';

describe('GetexchangeService', () => {
  let service: GetexchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetexchangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
