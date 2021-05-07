import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostRoomComponent } from './modules/motel-room/components/post-room/post-room.component';
import { UserComponent } from './modules/user/user.component';
import { HomeComponent } from './modules/home/home.component';
import { SearchComponent } from './modules/search/search.component';
import { ProductComponent } from './modules/product/product.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'thue-phong-tro', component: SearchComponent },
  { path: 'dang-tin', component: PostRoomComponent },
  { path: 'user-profile', component: UserComponent },
  { path: 'product-room', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
