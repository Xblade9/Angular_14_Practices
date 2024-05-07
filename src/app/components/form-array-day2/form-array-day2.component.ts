import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface orders {
  name: string;
  type?: string;
}
@Component({
  selector: 'app-form-array-day2',
  templateUrl: './form-array-day2.component.html',
  styleUrls: ['./form-array-day2.component.css'],
})
export class FormArrayDay2Component implements OnInit {
  dayForm!: FormGroup;
  types: orders[] = [{ name: 'shorts' }, { name: 'full' }];
  showSubmit: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.generateForm();
  }

  generateForm() {
    this.dayForm = this.fb.group({
      order: this.fb.array([]),
    });
  }

  get orders() {
    return this.dayForm.controls['order'] as FormArray;
  }

  saveOrder() {
    console.log(this.dayForm.value);
  }

  addOrder() {
    const addOrder = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      orderType: ['', Validators.required],
      cost: ['', Validators.required],
    });
    this.orders.push(addOrder);
    this.showSubmit = true;
  }

  deleteOrder(index: number) {
    this.orders.removeAt(index);
    index >= 1 ? (this.showSubmit = true) : (this.showSubmit = false);
  }
}
