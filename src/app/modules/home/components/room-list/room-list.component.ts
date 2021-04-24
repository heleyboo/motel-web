import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RoomResponse } from 'src/app/core/http/response/room.response';

@Component({
  selector: 'room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit, OnChanges {

  @Input() rooms: RoomResponse[] = [];

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Room list on change");
    
    
  }

 

}
