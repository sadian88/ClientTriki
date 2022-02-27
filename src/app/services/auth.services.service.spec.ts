import { TestBed } from '@angular/core/testing';

import { Auth.ServicesService } from './auth.services.service';

describe('Auth.ServicesService', () => {
  let service: Auth.ServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Auth.ServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
