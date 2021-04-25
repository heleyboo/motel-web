import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RoomResponse } from 'src/app/core/http/response/room.response';

@Component({
  selector: 'room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit, OnChanges {

  @Input() rooms: RoomResponse[] = [];
  @Input() layoutColumns: number = 6;
  @Input() vertical: boolean = false;
  itemClass: string = "";

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.grid2ListStyle();
  }

  grid2ListStyle() {
    let colClass = "";
    
    if (this.vertical) {
      colClass = "col-md-12 ";
    } else {   
      switch(this.layoutColumns) {
        case 2: colClass = "col-md-6 "; break;
        case 3: colClass = "col-md-4 "; break;
        case 4: colClass = "col-md-3 "; break;
        case 6: colClass = "col-md-2 "; break;
      }
    }

    this.itemClass = colClass + " room-item-wrapper box";
  }

}
