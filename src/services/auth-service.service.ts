import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor() {}

  isLoggedIn(){
    const token = sessionStorage.getItem('jwt');
    if (!token) {
      return false;
    }
    const payload = atob(token!.split('.')[1]); //The atob() function decodes a string of data which has been encoded using Base64 encoding.
    const parsedPayload = JSON.parse(payload); // convert payload into an Object
    return parsedPayload.exp > Date.now() / 1000; // check if token is expired
  }
}
