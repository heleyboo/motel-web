import { Component, OnInit } from '@angular/core';
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
  pageSize: number = 6;
  defaultPageNum: number = 0;
  totalPages: number = 0;

  constructor(private roomService: RoomService) { }

  reloadPagingData(pageNumber: number) {
    this.getRooms(pageNumber, this.pageSize);
  }

  ngOnInit() {
    this.getRooms(this.defaultPageNum, this.pageSize);
  }

  getRooms(pageNum: number, pageSize: number) {
    this.roomService.getRooms(pageNum, pageSize).subscribe((res: Page) => {
      if (res.content) {
        this.rooms = res.content;
      }
      if (res.totalPages) {
        console.log(res.totalPages);
        this.totalPages = this.totalPages;
      }
    });
  }
}
