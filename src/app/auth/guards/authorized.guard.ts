import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanLoad { 
  constructor(private router: Router) {}
  canLoad(route: Route): boolean {
    const url = '/${route.path}';
  
    return this.checkLogin(url);
  }

  checkLogin(url : string)
  {
    return false;
  }
}
