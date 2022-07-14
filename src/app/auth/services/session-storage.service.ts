import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  private window: Window;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.window = window;
  } 

  setToken(token: string)
  {
    this.window.sessionStorage.setItem('key',token);
  }

  getToken()
  {
    return this.window.sessionStorage.getItem('key');
  }

  deleteToken()
  {
    this.window.sessionStorage.removeItem('key');
  }
}
