import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> 
  {
    // const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // if (currentUser && currentUser.token) {
    //   request = request.clone({
    //     setHeaders: {
    //       'Content-Type': 'application/json',
    //       Authorization: `JWT ${currentUser.token}`
    //     }
    //   });
    // }

    return next.handle(request).pipe( tap(() => {},
    (err: any) => {
    if (err instanceof HttpErrorResponse) {
      if (err.status !== 401) {
       return;
      }
      this.router.navigate(['login']);
    }
  }));
  }
}
