import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
//Base Class admin ve ui için bir ortak. 
//Bütün componentlerde olmasını istediğimiz çalışmaları bu classda belirtebiliriz

export class BaseComponent {
  constructor(private spinner: NgxSpinnerService) { }

  showSpinner(spinnerNameType: SpinnerType) {
    this.spinner.show(spinnerNameType);
    setTimeout(() => this.hideSpinner(spinnerNameType), 3000);
  }
  hideSpinner(spinnerNameType: SpinnerType) {
    this.spinner.hide(spinnerNameType);
  }
}

export enum SpinnerType {
  BallAtom = "s1",
  BallScaleMultiple = "s2",
  BallSpinClockwiseFadeRotating = "s3"

}
