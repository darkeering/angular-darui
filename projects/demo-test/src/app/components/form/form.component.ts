import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'z-form-demo',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {
  profileForm: any
  get aliases() {
    return this.profileForm.get('aliases') as FormArray
  }
  // get firstName() {
  //   return this.profileForm.get('firstName')
  // }
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      address: this.fb.group({
        country: [''],
        city: [''],
        street: [''],
      }),
      aliases: this.fb.array([
        this.fb.control('')
      ])
    })
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

}
