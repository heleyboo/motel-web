import { Component, Input, OnInit } from '@angular/core';
import { SERVER_ADDRESS } from 'src/app/configs/app_config';
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
  roomImageUrl!: String;

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
    if (this.room && this.room.images && this.room.images.length > 0) {
      this.roomImageUrl = `${SERVER_ADDRESS}/${this.room.images[0].url}`;
    } else {
      this.roomImageUrl = "https://media.istockphoto.com/photos/brown-two-story-all-american-home-picture-id1158713117?k=6&m=1158713117&s=612x612&w=0&h=I9MumcAjR1biBKDLG_C9XkSoGDZLAHqL0Godjgq2UEQ=";
    }
    
    
  }
}
