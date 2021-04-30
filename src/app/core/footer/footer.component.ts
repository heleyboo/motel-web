import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnChanges, OnInit {

  @Input() title: String = "";
  @Input() appName: String = "";
  @Input() counter: Number = 0;

  @Output() onClickButtonInFooterEmiter = new EventEmitter<Object>();

  constructor() { }

  ngOnInit(): void {
    console.log("Footer init");
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Footer On changes");
  }

  // ngDoCheck(): void {
  //   //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  //   //Add 'implements DoCheck' to the class.
  //   console.log("Do check");
  
    
  // }

  // ngDoCheck(): void {
  //   //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  //   //Add 'implements DoCheck' to the class.
  //   console.log("Do check");
  // }

  // ngAfterContentInit(): void {
  //   //Called after ngOnInit when the component's or directive's content has been initialized.
  //   //Add 'implements AfterContentInit' to the class.
  //   console.log("After content init");
    
  // }

  // ngAfterContentChecked(): void {
  //   //Called after every check of the component's or directive's content.
  //   //Add 'implements AfterContentChecked' to the class.
  //   console.log("After content checked");
    
  // }



  // ngOnInit() {
  //   console.log("Init footer");
  // }

}
