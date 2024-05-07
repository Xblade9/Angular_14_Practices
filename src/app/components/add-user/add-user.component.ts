import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Users } from 'src/models/users';
import { CrudService } from 'src/services/crud.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  crud!: FormGroup;
  public EMAIL_REGEX =
    "[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9]*[a-z0-9])?(.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*";

  constructor(
    private fb: FormBuilder,
    private _crud: CrudService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.generateForm();
  }

  generateForm() {
    this.crud = this.fb.group({
      name: ['', Validators.required],
      mobNo: ['', [Validators.required, Validators.minLength(10)]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(this.EMAIL_REGEX),
        ],
      ],
      age: ['', [Validators.required]],
    });
  }

  adduser() {
    if (this.crud.valid) {
      this._crud.addUsers(this.crud.value).subscribe((res: Users) => {
        console.log(res);
        this.toastr.success('User Added Successfully')
      });
    }
  }
}
