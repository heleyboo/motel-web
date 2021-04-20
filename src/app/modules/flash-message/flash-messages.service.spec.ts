/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlashMessagesService } from './flash-messages.service';

describe('Service: FlashMessages', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlashMessagesService]
    });
  });

  it('should ...', inject([FlashMessagesService], (service: FlashMessagesService) => {
    expect(service).toBeTruthy();
  }));
});
