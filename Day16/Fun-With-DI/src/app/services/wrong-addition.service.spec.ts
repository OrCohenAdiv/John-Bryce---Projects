import { TestBed } from '@angular/core/testing';

import { WrongAdditionService } from './wrong-addition.service';

describe('WrongAdditionService', () => {
  let service: WrongAdditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WrongAdditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
