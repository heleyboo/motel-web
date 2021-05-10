import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './components/list-item/list-item.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { PagingComponent } from './components/paging/paging.component';
import { CustomPipesModule } from '../../pipes/custom-pipes/custom-pipes.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BannerRoomComponent } from './components/banner-room/banner-room.component';

@NgModule({
  imports: [
    CommonModule,
    CustomPipesModule,
    AppRoutingModule
  ],
  exports: [ListItemComponent, RoomListComponent, PagingComponent, BannerRoomComponent],
  declarations: [ListItemComponent, RoomListComponent, PagingComponent, BannerRoomComponent]
})
export class RcommonModule { }
