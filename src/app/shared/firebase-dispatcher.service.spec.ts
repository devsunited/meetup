import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { FirebaseDispatcherService } from './firebase-dispatcher.service';

describe('FirebaseDispatcher Service', () => {
  beforeEachProviders(() => [FirebaseDispatcherService]);

  it('should ...',
      inject([FirebaseDispatcherService], (service: FirebaseDispatcherService) => {
    expect(service).toBeTruthy();
  }));
});
