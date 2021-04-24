import { Component, OnInit } from '@angular/core';
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
  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.roomService.getRooms().subscribe((res: RoomResponse[]) => {
      this.rooms = res;
    });
    this.roomService.getPostedRoomsByUser("vanhoan90it6@gmail.com").subscribe((res: RoomResponse[]) => {
      this.userRooms = res;
    });
  }

}
