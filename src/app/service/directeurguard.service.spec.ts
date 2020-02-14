import { TestBed } from '@angular/core/testing';

import { DirecteurguardService } from './directeurguard.service';

describe('DirecteurguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DirecteurguardService = TestBed.get(DirecteurguardService);
    expect(service).toBeTruthy();
  });
});
