import { Component, Input, OnInit } from '@angular/core';
import { SERVER_ADDRESS } from 'src/app/configs/app_config';
import { RoomImage } from 'src/app/core/http/response/room-image';

@Component({
  selector: 'image-slideshow',
  templateUrl: './image-slideshow.component.html',
  styleUrls: ['./image-slideshow.component.scss']
})
export class ImageSlideshowComponent implements OnInit {

  @Input() images: RoomImage[] = [];
  index: number = 0;
  serverAddress: string = SERVER_ADDRESS;
  constructor() { }

  ngOnInit() {
  }

  next() {
    this.index += 1;
  }

  prev() {
    this.index -= 1;
  }



}
