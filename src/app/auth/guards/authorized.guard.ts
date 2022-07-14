import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanLoad { 
  canLoad(route: Route): boolean {
    const url = '/${route.path}';
  
    return this.checkLogin(url);
  }

  checkLogin(url : string)
  {
    return false;
  }
}
