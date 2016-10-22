/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { CrisisService } from './crisis.service';

describe('Service: Crisis', () => {
  beforeEach(() => {
    addProviders([CrisisService]);
  });

  it('should ...',
    inject([CrisisService],
      (service: CrisisService) => {
        expect(service).toBeTruthy();
      }));
});
