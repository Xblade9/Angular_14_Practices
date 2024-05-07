import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-array-day1',
  templateUrl: './form-array-day1.component.html',
  styleUrls: ['./form-array-day1.component.css'],
})
export class FormArrayDay1Component implements OnInit {
  regForm!: FormGroup;
  genders: gender[] = [
    { value: 'm', viewValue: 'Male' },
    { value: 'f', viewValue: 'Female' },
    { value: 'o', viewValue: 'Other' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createRegForm();
  }

  createRegForm() {
    this.regForm = this.fb.group({
      register: this.fb.array([]),
    });
  }

  //creating getter to access the controls of the form array..

  get register() {
    return this.regForm.controls['register'] as FormArray;
  }

  //on click we will create an form using push method of form array...

  addRegisterForm() {
    const form = this.fb.group({
      firstName: ['', Validators.required],
      midName: [''],
      lastName: [''],
      gender: ['', Validators.required],
      mobNo: [''],
    });
    this.register.push(form);
  }

  //on delete it will remove the form at index position...

  deleteRegForm(index: number) {
    this.register.removeAt(index);
  }
}
