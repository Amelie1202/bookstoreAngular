import { TestBed } from '@angular/core/testing';

import { EtagereService } from './etagere.service';

describe('EtagereService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EtagereService = TestBed.get(EtagereService);
    expect(service).toBeTruthy();
  });
});
