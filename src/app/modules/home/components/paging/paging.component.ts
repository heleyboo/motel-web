import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit, OnChanges {

  @Input() totalPages: number = 0;
  @Input() pageSize: number = 0;
  @Output() onChangePage = new EventEmitter<number>();
  currentPage: number = 1;
  
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Change pageing");
    
    console.log(this.totalPages);
    
  }

  changePageNumber(pageNumber: number) {
    this.currentPage = pageNumber;
    this.onChangePage.emit(pageNumber);
  }

  ngOnInit() {
  }

}
