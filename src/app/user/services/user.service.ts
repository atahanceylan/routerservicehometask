import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private isAdmin$$ = new BehaviorSubject(false);
  isAdmin$ = this.isAdmin$$.asObservable();

  private name$$ = new BehaviorSubject(false);
  name$ = this.name$$.asObservable();
  
  getUser()
  {

  }
}
