import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { PagingComponent } from './components/paging/paging.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [HomeComponent, RoomListComponent, ListItemComponent, PagingComponent],
  declarations: [HomeComponent, RoomListComponent, ListItemComponent, PagingComponent]
})
export class HomeModule { }
