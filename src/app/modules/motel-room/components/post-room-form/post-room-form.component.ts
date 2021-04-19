import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ProvinceService } from '../../../../core/services/province.service';
import { District } from '../../../../core/http/district';
import { Province } from '../../../../core/http/province';
import { Category } from 'src/app/core/http/category';
import { CategoryService } from 'src/app/core/services/category.service';
import { RoomService } from 'src/app/core/services/room.service';


@Component({
  selector: 'app-post-room-form',
  templateUrl: './post-room-form.component.html',
  styleUrls: ['./post-room-form.component.scss']
})
export class PostRoomFormComponent implements OnInit {

  provinces: Province[] = [];

  districts: District[] = [];

  categories: Category[] = [];
  
  constructor(
    private fb: FormBuilder, 
    private provinceService: ProvinceService, 
    private categoryService: CategoryService,
    private roomService: RoomService
  ) {
}

  motelRoomForm = this.fb.group({
    category: [''],
    title: [''],
    description: [''],
    price: [''],
    area: [''],
    utilities: [''],
    phoneNumber: [''],
    address: [''],
    district: [''],
  });

  onSubmit() {
    this.roomService.createRoom(this.motelRoomForm.value).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });;
  }

  ngOnInit() {
    this.provinceService.getProvinces().subscribe((res: Province[]) => this.provinces = res);
    this.categoryService.getCategories().subscribe((res: Category[]) => this.categories = res);
  }

  onChangeProvince(evt: Event) {
    let provinceId = (<HTMLInputElement>evt.target).value;
    let province = this.provinces.find(province => province.id == provinceId);
    if (province && province.districts) {
      this.districts = province.districts;
    }
  }

}
