import {
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  ConnectedOverlayPositionChange,
  ConnectedPosition,
  VerticalConnectionPos
} from '@angular/cdk/overlay';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { dropDownToggle } from '../utils/animations';

@Component({
  selector: 'z-auto-complete-popup',
  templateUrl: './auto-complete-popup.component.html',
  styleUrls: ['./auto-complete-popup.component.css'],
  animations: [dropDownToggle]
})
export class AutoCompletePopupComponent implements OnInit {
  isOpen = false
  source: any
  origin!: CdkOverlayOrigin;

  width!: number

  inputCode = ''

  onChange = (_: any) => null
  constructor() { }

  ngOnInit(): void {
  }

  registerOnChange(fn: any) {
    this.onChange = fn
  }

  selectValue(item: any, event: any) {
    event.preventDefault()
    event.stopPropagation();
    this.onChange({ value: item })
  }

}
