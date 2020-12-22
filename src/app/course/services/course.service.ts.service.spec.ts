import { TestBed } from '@angular/core/testing';

import { Course.Service.TsService } from './course.service.ts.service';

describe('Course.Service.TsService', () => {
  let service: Course.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Course.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
