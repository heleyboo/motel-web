import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { FlashMessageModule } from '../flash-message/flash-message.module';
import { HomeModule } from '../home/home.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    FlashMessageModule.forRoot()
  ],
  declarations: [UserComponent]
})
export class UserModule { }
