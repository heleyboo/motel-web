import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'control-buttons',
  templateUrl: './control-buttons.component.html',
  styleUrls: ['./control-buttons.component.scss']
})
export class ControlButtonsComponent implements OnInit {

  @Input() totalSteps!: number;
  @Input() currentStep!: number
  @Output() onChangeStep = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  nextStep() {
    this.onChangeStep.emit(this.currentStep+1);
  }
  
  backStep() {
    this.onChangeStep.emit(this.currentStep-1);
  }

}
