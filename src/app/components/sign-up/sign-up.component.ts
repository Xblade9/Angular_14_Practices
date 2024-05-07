import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from 'src/services/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signUp!: FormGroup;
  public EMAIL_REGEX =
    "[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9]*[a-z0-9])?(.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*";
  hide = true;
  submitted = false;

  constructor(private fb: FormBuilder, private _signUp: SignUpService) {}

  ngOnInit(): void {
    this.createSignUpForm();
  }

  createSignUpForm() {
    this.signUp = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(250),
          Validators.minLength(3),
        ],
      ],
      phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(this.EMAIL_REGEX),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.signUp.controls;
  }

  submitForm() {
    this.submitted = true;
    if (this.signUp.valid) {
      this._signUp.signUp(this.signUp.value).subscribe((res: any) => {
        console.log(res);
      });
    }
  }

  resetSubmitForm(){
    this.signUp.reset()
    this.submitted = false;
  }
}
