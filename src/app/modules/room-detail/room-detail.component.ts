import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CodeValue } from 'src/app/core/http/response/codevalue.response';
import { Page } from 'src/app/core/http/response/page';
import { RoomResponse } from 'src/app/core/http/response/room.response';
import { DirectionService } from 'src/app/core/services/direction.service';
import { RoomService } from 'src/app/core/services/room.service';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnInit {

  relatedRooms: RoomResponse[] = [];
  room!: RoomResponse;
  roomImageUrl!: string;
  vertical: boolean = false;
  directions: CodeValue[] = [];


  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute,
    private directionService: DirectionService
    ) { }

  ngOnInit() {
    this.getRoom();
    this.getDirections();
    this.getRelatedRooms();
  }
  
  getDirections() {
    this.directionService.getDirections().subscribe((res: CodeValue[]) => this.directions  = res);
  }

  getRoom(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.roomService.getRoomById(id).subscribe(room => (this.room = room));
    this.roomImageUrl = "https://cdn.chotot.com/3xqDsCOJJT4-P_xo-QreEgvC9m0ZB3eeUfu6DflKYps/preset:view/plain/178cd4181996c68b4114f56366f9e3c4-2708530669220935085.jpg";
    
  }

  getRelatedRooms(): void {
    this.roomService.getRooms(0, 6).subscribe((res: Page) => {
      if (res.content) {
        this.relatedRooms = res.content;
      }
    });
  }

}
