import { TestBed } from '@angular/core/testing';

import { UserAbonnementServiceService } from './user-abonnement-service.service';

describe('UserAbonnementServiceService', () => {
  let service: UserAbonnementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAbonnementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
