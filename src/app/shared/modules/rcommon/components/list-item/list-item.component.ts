import { Component, Input, OnInit } from '@angular/core';
import { RoomResponse } from 'src/app/core/http/response/room.response';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() room!: RoomResponse;
  @Input() layoutColumns: number = 6;
  @Input() vertical: boolean = false;

  itemClass: string = " room-item-wrapper box";

  constructor() { }

  ngOnInit() {
    let colClass = "col-md-3";
    switch (this.layoutColumns) {
      case 2: colClass = "col-md-6 "; break;
      case 3: colClass = "col-md-4 "; break;
      case 4: colClass = "col-md-3 "; break;
      case 6: colClass = "col-md-2 "; break;
    }
    this.itemClass = colClass + this.itemClass;
  }
}
