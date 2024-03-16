import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticate=false;

  login(username:String,password:String):boolean{
    if (username === 'user' && password === 'password') {
      this.authenticate = true;
      return true;
    }
    return false;

  }
  logout(): void {
    this.authenticate = false;
  }

  isLoggedIn(): boolean {
    return this.authenticate;
  }
 
}
