import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomResponse } from 'src/app/core/http/response/room.response';
import { RoomService } from 'src/app/core/services/room.service';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnInit {

  room!: RoomResponse;
  roomImageUrl!: string;
  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getRoom();
  }

  getRoom(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.roomService.getRoomById(id).subscribe(room => (this.room = room));
    this.roomImageUrl = "https://cdn.chotot.com/3xqDsCOJJT4-P_xo-QreEgvC9m0ZB3eeUfu6DflKYps/preset:view/plain/178cd4181996c68b4114f56366f9e3c4-2708530669220935085.jpg";
    
  }

}
