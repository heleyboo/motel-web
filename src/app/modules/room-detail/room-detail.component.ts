import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SERVER_ADDRESS } from 'src/app/configs/app_config';
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
  @Input() rooms!: RoomResponse;


  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute,
    private directionService: DirectionService
    ) { }

  ngOnInit() {
    this.getRoom();
    this.getDirections();
    this.getRelatedRooms();
    if (this.rooms && this.rooms.images && this.rooms.images.length > 0) {
      this.roomImageUrl = `${SERVER_ADDRESS}/${this.rooms.images[0].url}`;
    } 
  }
  
  getDirections() {
    this.directionService.getDirections().subscribe((res: CodeValue[]) => this.directions  = res);
  }

  getRoom(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.roomService.getRoomById(id).subscribe(room => (this.room = room));
    
    
  }

  getRelatedRooms(): void {
    this.roomService.getRooms(0, 6).subscribe((res: Page) => {
      if (res.content) {
        this.relatedRooms = res.content;
      }
    });
  }

}
