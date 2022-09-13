import { TestBed } from '@angular/core/testing';

import { PostcodeApiService } from './postcode-api.service';

describe('PostcodeApiService', () => {
  let service: PostcodeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostcodeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
