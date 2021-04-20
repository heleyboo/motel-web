import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { FlashMessageModule } from '../flash-message/flash-message.module';

@NgModule({
  imports: [
    CommonModule,
    FlashMessageModule.forRoot()
  ],
  declarations: [UserComponent]
})
export class UserModule { }
