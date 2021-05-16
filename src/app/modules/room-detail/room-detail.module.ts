import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomDetailComponent } from './room-detail.component';
import { RcommonModule } from 'src/app/shared/modules/rcommon/rcommon.module';
import { RouterModule } from '@angular/router';
import { CustomPipesModule } from 'src/app/shared/pipes/custom-pipes/custom-pipes.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RcommonModule,
    RouterModule,
    CustomPipesModule,
    AppRoutingModule
  ],
  declarations: [RoomDetailComponent],
  exports: [RoomDetailComponent]
})
export class RoomDetailModule { }
