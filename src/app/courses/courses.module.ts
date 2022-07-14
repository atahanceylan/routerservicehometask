import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RegistrationComponent } from './registration.component';
import { AddCourseComponent } from './add-course.component';
import { ListCourseComponent } from './list-course.component';
import { EditCourseComponent } from './edit-course.component';
import { coursesRouting } from './app-routing.module';


@NgModule({
  declarations: [LoginComponent,
    RegistrationComponent,
    AddCourseComponent,
    ListCourseComponent,
    EditCourseComponent],
  imports: [
    CommonModule,
    coursesRouting   
  ]
})
export class CoursesModule { }
