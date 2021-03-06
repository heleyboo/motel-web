import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
import { LabelType, Options } from 'ng5-slider';



@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() onFilterChange = new EventEmitter<Object>();

  @Input() room: RoomResponse[] = [];

  @Input() layoutColumns: number = 6;

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

  minPrice: number = 0;

  maxPrice: number = 30000000;

  minArea: number = 0;

  maxArea: number = 300;

  constructor(private roomService: RoomService,
    private provinceService: ProvinceService,
    private categoryService: CategoryService,
    private directionService: DirectionService,
    private fb: FormBuilder) { }

    filterForm = this.fb.group({
      minPrice: ['0', Validators.required],
      maxPrice: ['30000000', Validators.required],
      minArea: ['0', Validators.required],
      maxArea: ['300', Validators.required],
      numOfBedrooms: ['0', Validators.required],
      numOfToilets: ['0', Validators.required],
      wardCode: ['', Validators.required],
      districtCode: ['', Validators.required],
      provinceCode: ['', Validators.required],
      category: ['', Validators.required],
      doorDirection: ['', Validators.required],
      balconyDirection: ['', Validators.required],
    });

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

  onApplyFilter() {
    this.filterForm.patchValue({
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      minArea: this.minArea,
      maxArea: this.maxArea
    });
    this.onFilterChange.emit(this.filterForm.value);
  }

  minPriceChange(value: any) {
    this.minPrice = value;
  }

  maxPriceChange(highValue: any){
    this.maxPrice = highValue;
  }

  minAreaChange(value1: any) {
    this.minArea = value1;
  }

  maxAreaChange(highValue1: any){
    this.maxArea = highValue1;
  }

  value: number = 1000000;
  highValue: number = 30000000;
  options: Options = {
    floor: 0,
    ceil: 30000000,
    step: 1000000,
  };


  value1: number = 10;
  highValue1: number = 300;
  options1: Options = {
    floor: 0,
    ceil: 300,
    step: 5,
  };
}
