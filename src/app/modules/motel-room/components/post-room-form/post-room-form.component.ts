import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { ProvinceService } from '../../../../core/services/province.service';
import { District } from '../../../../core/http/district';
import { Province } from '../../../../core/http/province';
import { Category } from 'src/app/core/http/category';
import { CategoryService } from 'src/app/core/services/category.service';
import { RoomService } from 'src/app/core/services/room.service';
import { NavigationExtras, Router } from '@angular/router';
import { Ward } from 'src/app/core/http/Ward';
import { CodeValue } from 'src/app/core/http/response/codevalue.response';
import { DirectionService } from 'src/app/core/services/direction.service';
@Component({
  selector: 'app-post-room-form',
  templateUrl: './post-room-form.component.html',
  styleUrls: ['./post-room-form.component.scss']
})
export class PostRoomFormComponent implements OnInit {

  provinces: Province[] = [];

  districts: District[] = [];

  wards: Ward[] = [];

  categories: Category[] = [];

  images: any[] = [];

  directions: CodeValue[] = [];

  formInvalid: Boolean = false;

  success: Boolean = false;

  step: number = 1;

  constructor(
    private fb: FormBuilder,
    private provinceService: ProvinceService,
    private categoryService: CategoryService,
    private roomService: RoomService,
    private directionService: DirectionService,
    private router: Router
  ) {
  }

  motelRoomForm = this.fb.group({
    category: ['', Validators.required],
    title: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    depositAmount: ['', Validators.required],
    area: ['', Validators.required],
    utilities: [''],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^(84|0[3|5|7|8|9])+([0-9]{8})$/)]],
    address: ['', Validators.required],
    ward: ['', Validators.required],
    images: new FormControl('', [Validators.required]),
    numOfToilets: ['', Validators.required],
    numOfBedrooms: ['', Validators.required],
    doorDirection: ['', Validators.required],
    balconyDirection: ['', Validators.required],
  });

  onSubmit() {
    console.log(this.motelRoomForm);
    
    if (this.motelRoomForm.valid) {
      let data = this.motelRoomForm.value;
      data['slug'] = this.createSlug(data['title']);
      console.log(this.motelRoomForm.value);
      
      this.roomService.createRoom(this.motelRoomForm.value).subscribe(
        response => {
          this.success = true;
          const navigationExtras: NavigationExtras = { state: { roomCreated: true } };
          this.router.navigate(['/user-profile'], navigationExtras);
          console.log(response);
        },
        error => {
          console.log(error);
        });
    } else {
      this.formInvalid = true;
    }

    window.scroll(0, 0);
  }

  get roomFormControl() {
    return this.motelRoomForm.controls;
  }

  ngOnInit() {
    this.provinceService.getProvinces().subscribe((res: Province[]) => {
      this.provinces = res;
    });
    this.categoryService.getCategories().subscribe((res: Category[]) => this.categories = res);

    this.directionService.getDirections().subscribe((res: CodeValue[]) => this.directions  = res);
  }

  onChangeProvince(evt: Event) {
    let provinceId = (<HTMLInputElement>evt.target).value;
    this.setDistricts(provinceId);
    this.wards = [];// Also reset ward list when change province
  }

  onChangeDistrict(evt: Event) {
    let districtId = (<HTMLInputElement>evt.target).value;
    this.setWards(districtId);
  }

  onImagesChange(event: Event) {
    let reader = new FileReader();
    let target = <HTMLInputElement>event.target;

    if (target.files && target.files.length) {
      for (let i=0; i<target.files.length; i++) {
        let reader = new FileReader();
        reader.onload = (_event) => { 
          this.images.push(reader.result);
          console.log(this.images);
          
          this.motelRoomForm.patchValue({
            images: this.images
          });
        }
        reader.readAsDataURL(target.files[i]);
      }
    }


    if (target.files && target.files.length) {
      this.motelRoomForm.patchValue({
        images: reader.result
      });
    }
  }

  removeImage(index: number) {
    this.images.splice(index, 1);
    this.motelRoomForm.patchValue({
      images: this.images
    });
    console.log(this.motelRoomForm.value);
    
  }

  setDistricts(provinceId: String) {
    let province = this.provinces.find(province => province.code == provinceId);
    if (province && province.districts) {
      this.districts = province.districts;
    }
  }

  setWards(districtId: String) {
    let district = this.districts.find(district => district.code == districtId);
    if (district && district.wards) {
      this.wards = district.wards;
    }
  }

  onChangeStep(step: number) {
    this.step = step;
  }


  createSlug(title: String): String {
    //?????i ch??? hoa th??nh ch??? th?????ng
    let slug = "";
    slug = title.toLowerCase();

    //?????i k?? t??? c?? d???u th??nh kh??ng d???u
    slug = slug.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/gi, 'a');
    slug = slug.replace(/??|??|???|???|???|??|???|???|???|???|???/gi, 'e');
    slug = slug.replace(/i|??|??|???|??|???/gi, 'i');
    slug = slug.replace(/??|??|???|??|???|??|???|???|???|???|???|??|???|???|???|???|???/gi, 'o');
    slug = slug.replace(/??|??|???|??|???|??|???|???|???|???|???/gi, 'u');
    slug = slug.replace(/??|???|???|???|???/gi, 'y');
    slug = slug.replace(/??/gi, 'd');
    //X??a c??c k?? t??? ?????t bi???t
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //?????i kho???ng tr???ng th??nh k?? t??? g???ch ngang
    slug = slug.replace(/ /gi, "-");
    //?????i nhi???u k?? t??? g???ch ngang li??n ti???p th??nh 1 k?? t??? g???ch ngang
    //Ph??ng tr?????ng h???p ng?????i nh???p v??o qu?? nhi???u k?? t??? tr???ng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    //X??a c??c k?? t??? g???ch ngang ??? ?????u v?? cu???i
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');

    return slug;
  }

}
