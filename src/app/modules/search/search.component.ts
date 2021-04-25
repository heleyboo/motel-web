import { Component, OnInit } from '@angular/core';
import { PAGING } from 'src/app/configs/app_config';
import { Page } from 'src/app/core/http/response/page';
import { RoomResponse } from 'src/app/core/http/response/room.response';
import { RoomService } from 'src/app/core/services/room.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  rooms: RoomResponse[] = [];
  totalPages: number = 0;
  userRooms: RoomResponse[] = [];
  pageSize: number = PAGING.PAGE_SIZE_SEARCH;
  defaultPageNum: number = 0;
  vertical: boolean = false;

  constructor(private roomService: RoomService) { }

  reloadPagingData(pageNum: number) {
    this.getRooms(pageNum, this.pageSize);
  }

  ngOnInit() {
    this.getRooms(this.defaultPageNum, this.pageSize);
  }
  getRooms(pageNum: number, pageSize: number) {
    this.roomService.getRooms(pageNum, pageSize).subscribe((res: Page) => {
      if (res.content) {
        this.rooms = res.content;
        this.totalPages = res.totalPages;
      }
    });
  }

}
