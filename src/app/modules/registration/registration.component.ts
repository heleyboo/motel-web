import { Component, OnInit } from '@angular/core';
import { PAGING } from 'src/app/configs/app_config';
import { RoomResponse } from 'src/app/core/http/response/room.response';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  rooms: RoomResponse[] = [];
  totalPages: number = 0;
  userRooms: RoomResponse[] = [];
  pageSize: number = PAGING.PAGE_SIZE_SEARCH;
  defaultPageNum: number = 0;
  vertical: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
