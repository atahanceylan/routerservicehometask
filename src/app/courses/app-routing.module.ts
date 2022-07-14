import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login.component';
import { RegistrationComponent } from './registration.component';
import { AddCourseComponent } from './add-course.component';
import { ListCourseComponent } from './list-course.component';
import { EditCourseComponent } from './edit-course.component';

const CoursesRoute: Routes = [
    {
        path : 'login', component : LoginComponent
    },
    {
        path : 'registration', component : RegistrationComponent
    },
    {
        path : 'courses/add', component : AddCourseComponent
    },
    {
        path : 'courses', component : ListCourseComponent
    },
    {
        path : 'courses/edit', component : EditCourseComponent
    }
]

export const coursesRouting = RouterModule.forChild(CoursesRoute);