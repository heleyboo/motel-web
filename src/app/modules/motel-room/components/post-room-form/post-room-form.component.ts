import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ProvinceService } from '../../../../core/services/province.service';
import { District } from '../../../../core/http/district';
import { Province } from '../../../../core/http/province';
import { Category } from 'src/app/core/http/category';
import { CategoryService } from 'src/app/core/services/category.service';
import { RoomService } from 'src/app/core/services/room.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-post-room-form',
  templateUrl: './post-room-form.component.html',
  styleUrls: ['./post-room-form.component.scss']
})
export class PostRoomFormComponent implements OnInit {

  provinces: Province[] = [];

  districts: District[] = [];

  categories: Category[] = [];

  formInvalid: Boolean = false;

  success: Boolean = false;
  
  constructor(
    private fb: FormBuilder, 
    private provinceService: ProvinceService, 
    private categoryService: CategoryService,
    private roomService: RoomService,
    private router: Router
  ) {
}

  motelRoomForm = this.fb.group({
    category: ['', Validators.required],
    title: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    area: ['', Validators.required],
    utilities: [''],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^(84|0[3|5|7|8|9])+([0-9]{8})$/)]],
    address: ['', Validators.required],
    district: ['', Validators.required],
  });

  onSubmit() {
    if (this.motelRoomForm.valid) {   
      let data = this.motelRoomForm.value;
      data['slug'] = this.createSlug(data['title']);
      this.roomService.createRoom(this.motelRoomForm.value).subscribe(
        response => {
          this.success = true;
          const navigationExtras: NavigationExtras = {state: {roomCreated: true}};
          this.router.navigate(['/user-profile'], navigationExtras);
          console.log(response);
        },
        error => {
          console.log(error);
        });;
    } else {
      this.formInvalid = true;
    }

    window.scroll(0,0);
  }

  get roomFormControl() {
    return this.motelRoomForm.controls;
  }

  ngOnInit() {
    this.provinceService.getProvinces().subscribe((res: Province[]) => {
      this.provinces = res;
    });
    this.categoryService.getCategories().subscribe((res: Category[]) => this.categories = res);
  }

  onChangeProvince(evt: Event) {
    let provinceId = (<HTMLInputElement>evt.target).value;
    this.setDistricts(provinceId);
  }

  setDistricts(provinceId: String) {
    let province = this.provinces.find(province => province.id == provinceId);
    if (province && province.districts) {
      this.districts = province.districts;
    }
  }


  createSlug(title: String): String {
    //Đổi chữ hoa thành chữ thường
    let slug = "";
    slug = title.toLowerCase();
 
    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, "-");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');

    return slug;
  }

}
