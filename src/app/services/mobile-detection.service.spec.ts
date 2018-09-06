import { TestBed, inject } from '@angular/core/testing';

import { MobileDetectionService } from './mobile-detection.service';

describe('MobileDetectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MobileDetectionService]
    });
  });

  it('should be created', inject([MobileDetectionService], (service: MobileDetectionService) => {
    expect(service).toBeTruthy();
  }));
});
