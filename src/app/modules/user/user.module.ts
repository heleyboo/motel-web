import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { FlashMessageModule } from '../flash-message/flash-message.module';
import { HomeModule } from '../home/home.module';
import { RcommonModule } from 'src/app/shared/modules/rcommon/rcommon.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    RcommonModule,
    FlashMessageModule.forRoot()
  ],
  declarations: [UserComponent]
})
export class UserModule { }
