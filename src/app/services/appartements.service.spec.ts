import { TestBed } from '@angular/core/testing';

import { AppartementsService } from './appartements.service';

describe('AppartementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppartementsService = TestBed.get(AppartementsService);
    expect(service).toBeTruthy();
  });
});
