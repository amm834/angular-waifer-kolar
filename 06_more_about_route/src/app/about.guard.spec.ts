import { TestBed } from '@angular/core/testing';

import { AboutGuard } from './about.guard';

describe('AboutGuard', () => {
  let guard: AboutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AboutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
