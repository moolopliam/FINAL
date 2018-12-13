import { TestBed } from '@angular/core/testing';

import { TypeMovieService } from './type-movie.service';

describe('TypeMovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeMovieService = TestBed.get(TypeMovieService);
    expect(service).toBeTruthy();
  });
});
