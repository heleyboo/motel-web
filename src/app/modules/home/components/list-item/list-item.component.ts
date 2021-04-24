import { Component, Input, OnInit } from '@angular/core';
import { RoomResponse } from 'src/app/core/http/response/room.response';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() room!: RoomResponse;

  constructor() { }

  ngOnInit() {
  }
}
