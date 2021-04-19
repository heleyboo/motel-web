import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostRoomComponent } from './modules/motel-room/components/post-room/post-room.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'dang-tin', component: PostRoomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
