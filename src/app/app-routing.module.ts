import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostRoomComponent } from './modules/motel-room/components/post-room/post-room.component';
import { UserComponent } from './modules/user/user.component';
import { HomeComponent } from './modules/home/home.component';
import { SearchComponent } from './modules/search/search.component';
import { RoomDetailComponent } from './modules/room-detail/room-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'thue-phong-tro', component: SearchComponent },
  { path: 'dang-tin', component: PostRoomComponent },
  { path: 'user-profile', component: UserComponent },
  { path: 'room/:id', component: RoomDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
