import { TestBed } from '@angular/core/testing';

import { AlartfyService } from './alartfy.service';

describe('AlartfyService', () => {
  let service: AlartfyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlartfyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
