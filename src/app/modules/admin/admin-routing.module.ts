import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseCreatePageComponent } from './pages/course-create-page/course-create-page.component';
import { CourseListPageComponent } from './pages/course-list-page/course-list-page.component';
import { InstructorListPageComponent } from './pages/instructor-list-page/instructor-list-page.component';
import { AuthorizatedGuard } from 'src/app/shared/guards/authorized.guard';
// import { CourseEditPageComponent } from './pages/course-edit-page/course-edit-page.component';

const routes: Routes = [
  {
    path: 'courses',
    // canActivateChild: [],
    children: [
      {
        path: '',
        // canActivate: [AuthorizatedGuard],
        component: CourseListPageComponent
      },
      {
        path: 'instructors',
        // canActivate: [AuthorizatedGuard],
        component: InstructorListPageComponent
      },
    //   {
    //     path: 'edit/:id',
    //     canActivate: [AuthorizatedGuard],
    //     component: CourseEditPageComponent
    //   }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
