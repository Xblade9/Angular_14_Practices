import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from 'src/models/users';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  public apiUrl = environment.apiurl2;

  constructor(private http: HttpClient) {}

  // POST API ENDPOINT TO ADD USERS....

  addUsers(payload: Users): Observable<Users> {
    return this.http.post<Users>(`${this.apiUrl}Users`, payload);
  }

  // GET API ENDPOINT TO GET USERS.....

  getUsers(): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrl}Users`);
  }

  //DELETE API ENDPOINT TO DELETE THE USER....

  deleteUserById(id: Users): Observable<Users> {
    return this.http.delete<Users>(`${this.apiUrl}Users/${id}`);
  }

  // GET API ENDPOINT TO UPDATE THE USERS....

  getUserById(id: Users): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrl}Users/${id}`);
  }
}
