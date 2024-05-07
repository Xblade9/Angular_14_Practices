import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

interface login {
  name: string;
  password: string;
  response?: any;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrl: string = environment.apiurl;
  constructor(private http: HttpClient) {}

  login(payload: login): Observable<login> {
    return this.http.post<login>(`${this.apiUrl}auth/user/login`, payload).pipe(
      tap((response) => {
        if (response.response?.tokens[0].token) {
          sessionStorage.setItem('jwt', response.response?.tokens[0].token);
        }
      })
    );
  }
}
