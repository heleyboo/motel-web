import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlashMessagesService {
  show!: (text?: string, options?: Object) => void;
  grayOut!: (value: boolean) => void;
}
