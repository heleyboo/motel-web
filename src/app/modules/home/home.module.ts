import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { RoomListComponent } from './components/room-list/room-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [HomeComponent, RoomListComponent, ListItemComponent],
  declarations: [HomeComponent, RoomListComponent, ListItemComponent]
})
export class HomeModule { }
