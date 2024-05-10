import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array-day3',
  templateUrl: './form-array-day3.component.html',
  styleUrls: ['./form-array-day3.component.css'],
})
export class FormArrayDay3Component implements OnInit {
  addForm!: FormGroup;
  showSubmit:boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.generateAddressForm();
  }

  generateAddressForm() {
    this.addForm = this.fb.group({
      address: this.fb.array([]),
    });
  }

  get addControls() {
    return this.addForm.controls['address'] as FormArray;
  }

  addAddress() {
    const runtimeForm = this.fb.group({
      name: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
    });

    this.addControls.push(runtimeForm);
    this.showSubmit=true;
  }

  deleteAddressForm(i: number) {
    this.addControls.removeAt(i);
    (i >=1 ? this.showSubmit = true: this.showSubmit= false)
  }

  submit() {
    if (this.addForm.valid) {
      console.log(this.addForm.value);
    }
  }
}
