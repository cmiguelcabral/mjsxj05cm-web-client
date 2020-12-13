import { TestBed } from '@angular/core/testing';

import { SshService } from './ssh.service';

describe('SshService', () => {
  let service: SshService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SshService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
