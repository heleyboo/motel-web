import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './components/list-item/list-item.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { PagingComponent } from './components/paging/paging.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ListItemComponent, RoomListComponent, PagingComponent],
  declarations: [ListItemComponent, RoomListComponent, PagingComponent]
})
export class RcommonModule { }
