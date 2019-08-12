import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: any;


  constructor() { }

  isAuthenticated() {
    return !!this.user;
  }

}
