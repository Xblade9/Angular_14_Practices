import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface signUp {
  name: string;
  password: string;
  email: string;
  phone: string;
}
@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  apiUrl: any = environment.apiurl;
  constructor(private http: HttpClient) {}

  signUp(payload: signUp): Observable<signUp> {
    return this.http.post<signUp>(`${this.apiUrl}auth/user/register`, payload);
  }
}
