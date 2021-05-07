import { Component, Input, OnInit } from '@angular/core';
import { RoomResponse } from 'src/app/core/http/response/room.response';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  roomImageUrl!: String;
  @Input() room!: RoomResponse;

  constructor() { }

  ngOnInit() {
    this.roomImageUrl = this.room.images[0].url;
  }

}
