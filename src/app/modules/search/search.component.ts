import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PAGING } from 'src/app/configs/app_config';
import { Category } from 'src/app/core/http/category';
import { District } from 'src/app/core/http/district';
import { Province } from 'src/app/core/http/province';
import { CodeValue } from 'src/app/core/http/response/codevalue.response';
import { Page } from 'src/app/core/http/response/page';
import { RoomResponse } from 'src/app/core/http/response/room.response';
import { Ward } from 'src/app/core/http/Ward';
import { CategoryService } from 'src/app/core/services/category.service';
import { DirectionService } from 'src/app/core/services/direction.service';
import { ProvinceService } from 'src/app/core/services/province.service';
import { RoomService } from 'src/app/core/services/room.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  rooms: RoomResponse[] = [];
  totalPages: number = 0;
  userRooms: RoomResponse[] = [];
  pageSize: number = PAGING.PAGE_SIZE_SEARCH;
  defaultPageNum: number = 0;
  vertical: boolean = false;
  provinces: Province[] = [];

  districts: District[] = [];

  wards: Ward[] = [];

  categories: Category[] = []; 

  directions: CodeValue[] = [];

  constructor(private roomService: RoomService,
    private provinceService: ProvinceService,
    private categoryService: CategoryService,
    private directionService: DirectionService,
    private fb: FormBuilder

    ) { }

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

  reloadPagingData(pageNum: number) {
    this.getRooms(pageNum, this.pageSize);
  }

  ngOnInit() {
    this.getRooms(this.defaultPageNum, this.pageSize);
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
  
  getRooms(pageNum: number, pageSize: number) {
    this.roomService.getRooms(pageNum, pageSize).subscribe((res: Page) => {
      if (res.content) {
        this.rooms = res.content;
        this.totalPages = res.totalPages;
      }
    });
  }
  

}
