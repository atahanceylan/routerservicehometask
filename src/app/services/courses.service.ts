import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private isLoading$$ = new BehaviorSubject(false);
  isLoading$ = this.isLoading$$.asObservable();

  private courses$$ = new BehaviorSubject(false);
  courses$ = this.courses$$.asObservable();
  
  constructor() { }

  getAll() {
    //return courses;
  }

  createCourse(title: string, description: string, duration: number, authors: ["string"]) {

  }

  editCourse(id: string)
  {

  }

  getCourse(id: string)
  {

  }

  deleteCourse(id: string)
  {

  }

}
