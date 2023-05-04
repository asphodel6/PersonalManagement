import { TestBed } from '@angular/core/testing';

import { DestoryService } from './destory.service';

describe('DestoryService', () => {
  let service: DestoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
