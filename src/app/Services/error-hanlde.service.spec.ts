import { TestBed } from '@angular/core/testing';

import { ErrorHanldeService } from './error-hanlde.service';

describe('ErrorHanldeService', () => {
  let service: ErrorHanldeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorHanldeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
