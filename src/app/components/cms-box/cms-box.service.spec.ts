import { TestBed } from '@angular/core/testing';

import { CmsBoxService } from './cms-box.service';

describe('CmsBoxService', () => {
  let service: CmsBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmsBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
