import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostRoomComponent } from './modules/motel-room/components/post-room/post-room.component';

const routes: Routes = [
  { path: '', component: PostRoomComponent },
  { path: 'dang-tin', component: PostRoomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
