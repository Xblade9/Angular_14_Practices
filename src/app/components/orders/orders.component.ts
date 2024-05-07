import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orderForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createOrderForm();
  }

  createOrderForm() {
    this.orderForm = this.fb.group({
      items: this.fb.array([]),
    });
  }

  get items() {
    return this.orderForm.controls['items'] as FormArray;
  }

  addItems() {
    const item = this.fb.group({
      name: '',
      description: '',
      price: '',
    });
    this.items.push(item)
  }

  deleteItem(index:number){
    this.items.removeAt(index)
  }
}
