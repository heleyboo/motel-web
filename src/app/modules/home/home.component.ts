import { Component, OnInit, PLATFORM_ID } from '@angular/core';
import { PAGING } from 'src/app/configs/app_config';
import { Page } from 'src/app/core/http/response/page';
import { RoomResponse } from 'src/app/core/http/response/room.response';
import { RoomService } from 'src/app/core/services/room.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  rooms: RoomResponse[] = [];
  userRooms: RoomResponse[] = [];
  pageSize: number = PAGING.HOME_PAGE_SIZE;
  defaultPageNum: number = 0;
  remainingRooms: number = 0;

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.getRooms(this.defaultPageNum, this.pageSize);
  }

  getRooms(pageNum: number, pageSize: number) {
    this.roomService.getRooms(pageNum, pageSize).subscribe((res: Page) => {
      if (res.content) {
        this.rooms = res.content;
        this.remainingRooms = res.totalElements - this.pageSize;
      }
    });
  }
}
