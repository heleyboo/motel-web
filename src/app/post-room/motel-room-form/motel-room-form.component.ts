import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-motel-room-form',
  templateUrl: './motel-room-form.component.html',
  styleUrls: ['./motel-room-form.component.scss']
})
export class MotelRoomFormComponent implements OnInit {

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
