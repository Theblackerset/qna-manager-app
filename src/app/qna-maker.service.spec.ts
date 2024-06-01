import { TestBed } from '@angular/core/testing';

import { QnaMakerServiceTsService } from './qna-maker.service.ts.service';

describe('QnaMakerServiceTsService', () => {
  let service: QnaMakerServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QnaMakerServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
