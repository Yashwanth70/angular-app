import { TestBed, inject } from '@angular/core/testing';

import { PostsFetchService } from './posts-fetch.service';

describe('PostsFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsFetchService]
    });
  });

  it('should be created', inject([PostsFetchService], (service: PostsFetchService) => {
    expect(service).toBeTruthy();
  }));
});
