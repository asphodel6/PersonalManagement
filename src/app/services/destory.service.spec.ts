import { TestBed } from '@angular/core/testing';

import { DestroyService } from './destroy.service';

describe('DestoryService', () => {
  let service: DestroyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestroyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
