import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted: boolean = false;
  hide: boolean = true;
  public EMAIL_REGEX =
    "[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9]*[a-z0-9])?(.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*";

  constructor(private logSvc: LoginService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
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

  submit() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      this.logSvc.login(this.loginForm.value).subscribe((res) => {
        console.log(res);
      });
    }
    this.f['email'].clearValidators();
    this.loginForm.updateValueAndValidity();
    this.f['password'].clearValidators();
    this.loginForm.updateValueAndValidity();
  }

  get f() {
    return this.loginForm.controls;
  }

  resetSubmitForm() {
    sessionStorage.removeItem('jwt');
    this.loginForm.reset();
    this.isSubmitted = false;
    this.f['email'].addValidators([
      Validators.required,
      Validators.email,
      Validators.pattern(this.EMAIL_REGEX),
    ]);
    this.f['email'].updateValueAndValidity();
    this.f['password'].addValidators([
      Validators.required,
      Validators.minLength(6),
    ]);
    this.f['password'].updateValueAndValidity();
  }
}
