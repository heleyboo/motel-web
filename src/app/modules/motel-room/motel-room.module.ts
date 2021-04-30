import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoomComponent } from './components/post-room/post-room.component';
import { PostRoomFormComponent } from './components/post-room-form/post-room-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlashMessageModule } from '../flash-message/flash-message.module';
import { ControlButtonsComponent } from './components/control-buttons/control-buttons.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlashMessageModule.forRoot()
  ],
  declarations: [
    PostRoomComponent,
    ControlButtonsComponent,
    PostRoomFormComponent
  ]
})
export class MotelRoomModule { }
