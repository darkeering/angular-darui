import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'z-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckBoxComponent),
      multi: true,
    },
  ],
})
export class CheckBoxComponent implements OnInit, ControlValueAccessor {

  @Input() label = 'name'
  @Output() statusChange = new EventEmitter()

  checked = false
  onChange = (_: any) => null
  onTouch = (_: any) => null

  constructor(
  ) { }
  writeValue(value: any): void {
    this.checked = !!value
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  ngOnInit(): void {
  }

  toggle() {
    this.checked = !this.checked
    this.onChange(this.checked)
    this.statusChange.emit(this.checked)
  }

}
