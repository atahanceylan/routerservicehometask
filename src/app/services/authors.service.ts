import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  getAll()
  {
    //return this.authors;
  }

  addAuthor(name: string)
  {
    // authors.Add(name)
  }
}
