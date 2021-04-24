import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomResponse } from 'src/app/core/http/response/room.response';
import { RoomService } from 'src/app/core/services/room.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  roomCreated: Boolean = false;
  userPostedRooms: RoomResponse[] = [];
  constructor(private router: Router, private roomService: RoomService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state?.roomCreated;
    this.roomCreated = state;
  }

  ngOnInit() {
    this.roomService.getPostedRoomsByUser('user1').subscribe((res: RoomResponse[]) => {
      this.userPostedRooms = res;
      console.log(this.userPostedRooms);
    });
  }

}