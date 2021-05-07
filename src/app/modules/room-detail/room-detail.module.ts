import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomDetailComponent } from './room-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RoomDetailComponent],
  exports: [RoomDetailComponent]
})
export class RoomDetailModule { }
