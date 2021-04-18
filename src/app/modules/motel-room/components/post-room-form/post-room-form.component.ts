import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-post-room-form',
  templateUrl: './post-room-form.component.html',
  styleUrls: ['./post-room-form.component.scss']
})
export class PostRoomFormComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  motelRoomForm = this.fb.group({
    title: [''],
    description: [''],
    price: [''],
    area: [''],
    utilities: [''],
    phoneNumber: [''],
    address: [''],
  });

  onSubmit() {
    console.log(this.motelRoomForm.value);
  }

  ngOnInit() {
  }

}
