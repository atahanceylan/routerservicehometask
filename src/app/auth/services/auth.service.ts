import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {  

  private isAuthorized$$ = new BehaviorSubject(false);
  isAuthorized$ = this.isAuthorized$$.asObservable();

  name: string = 'Test User';
  email: string = 'user@gmail.com';
  password: string = 'user123';

  constructor() { }

  login(username: string, password: string): Observable<any> {
    // Mock a successful call to an API server.
    if (username == this.name && password == this.password) {
      localStorage.setItem("token", "my-super-secret-token-from-server");
      return of(new HttpResponse({ status: 200 }));
    } else {
      return of(new HttpResponse({ status: 401 }));
    }
  }

  logout(): void {
    localStorage.removeItem("token");
  }

  register(username: string, password: string, email: string)
  {
    //Register(username,password,email);

    return of(new HttpResponse({ status: 201 }));
  }

}
