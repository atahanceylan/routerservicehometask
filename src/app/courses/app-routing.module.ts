import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login.component';
import { RegistrationComponent } from './registration.component';
import { AddCourseComponent } from './add-course.component';
import { ListCourseComponent } from './list-course.component';
import { EditCourseComponent } from './edit-course.component';
import { AuthorizedGuard } from '../auth/guards/authorized.guard';
import { NotAuthorizedGuard } from '../auth/guards/not-authorized.guard';
import { AdminGuard } from '../user/guards/admin.guard';

const CoursesRoute: Routes = [
    {
        path : 'login', component : LoginComponent, canActivate : [NotAuthorizedGuard]
    },
    {
        path : 'registration', component : RegistrationComponent, canActivate : [NotAuthorizedGuard]
    },
    {
        path : 'courses/add', component : AddCourseComponent, canLoad : [AuthorizedGuard, AdminGuard]
    },
    {
        path : 'courses', component : ListCourseComponent, canLoad : [AuthorizedGuard]
    },
    {
        path : 'courses/edit', component : EditCourseComponent, canLoad : [AuthorizedGuard, AdminGuard], 
    }
]

export const coursesRouting = RouterModule.forChild(CoursesRoute);