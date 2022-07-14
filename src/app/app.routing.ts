import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
    }   
];

export const routing = RouterModule.forRoot(appRoutes);