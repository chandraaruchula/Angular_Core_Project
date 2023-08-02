import { TestBed } from '@angular/core/testing';

import { OrderwatchService } from './orderwatch.service';

describe('OrderwatchService', () => {
  let service: OrderwatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderwatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
