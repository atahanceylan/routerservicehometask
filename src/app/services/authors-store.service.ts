import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthorsService } from './authors.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorsStoreService {
  private isLoading$$ = new BehaviorSubject(false);
  isLoading$ = this.isLoading$$.asObservable();

  private authors$$ = new BehaviorSubject(false);
  authors$ = this.authors$$.asObservable();
  
  constructor() { }

  getAll()
  {
    //authors$ = AuthorsService.GetAll();
    //return AuthorsService.GetAll();
  }

  addAuthor()
  {
    //AuthorsService.Add(author);
  }
}
