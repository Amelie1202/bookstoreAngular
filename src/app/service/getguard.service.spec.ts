import { TestBed } from '@angular/core/testing';

import { GetguardService } from './getguard.service';

describe('GetguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetguardService = TestBed.get(GetguardService);
    expect(service).toBeTruthy();
  });
});
