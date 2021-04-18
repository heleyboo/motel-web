import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoomComponent } from './components/post-room/post-room.component';
import { PostRoomFormComponent } from './components/post-room-form/post-room-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    PostRoomComponent,
    PostRoomFormComponent
  ]
})
export class MotelRoomModule { }
