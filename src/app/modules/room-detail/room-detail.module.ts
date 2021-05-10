import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomDetailComponent } from './room-detail.component';
import { RcommonModule } from 'src/app/shared/modules/rcommon/rcommon.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RcommonModule,
    RouterModule,
  ],
  declarations: [RoomDetailComponent],
  exports: [RoomDetailComponent]
})
export class RoomDetailModule { }
