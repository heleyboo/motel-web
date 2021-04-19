import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ProvinceService } from '../../../../core/services/province.service';
import { District } from '../../../../core/http/district';
import { Province } from '../../../../core/http/province';

@Component({
  selector: 'app-post-room-form',
  templateUrl: './post-room-form.component.html',
  styleUrls: ['./post-room-form.component.scss']
})
export class PostRoomFormComponent implements OnInit {

  provinces: Province[] = [];

  districts: District[] = [];

  // categories: Category[] = [];
  
  constructor(private fb: FormBuilder, private provinceService: ProvinceService) {
  }

  motelRoomForm = this.fb.group({
    title: [''],
    description: [''],
    price: [''],
    area: [''],
    utilities: [''],
    phoneNumber: [''],
    address: [''],
    district: [''],
    province: [''],
  });

  onSubmit() {
    console.log(this.motelRoomForm.value);
  }

  ngOnInit() {
    this.provinceService.getProvinces().subscribe((res: Province[]) => this.provinces = res);
  }

  onChangeProvince(evt: Event) {
    let provinceId = (<HTMLInputElement>evt.target).value;
    let province = this.provinces.find(province => province.id == provinceId);
    if (province && province.districts) {
      this.districts = province.districts;
    }
  }

}
