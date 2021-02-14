import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseShortComponent } from './components/course-short/course-short.component';
import { FormMessageErrorComponent } from './components/form-message-error/form-message-error.component';
import { CourseApiService } from './services/course/course-api.service';
import { CourseService } from './services/course/course.service';
import { InstructorApiService } from './services/instructor/instructor-api.service';
import { InstructorService } from './services/instructor/instructor.service';
import { InstructorListComponent } from './components/instructor-list/instructor-list.component';
import { InstructorShortComponent } from './components/instructor-short/instructor-short.component';


@NgModule({
  declarations: [
    CourseListComponent,
    CourseShortComponent,
    FormMessageErrorComponent,
    InstructorListComponent,
    InstructorShortComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CourseListComponent,
    FormMessageErrorComponent,
    InstructorListComponent,
  ],
  providers: [
    // CourseService
    {provide: CourseService, useClass: CourseApiService},
    {provide: InstructorService, useClass: InstructorApiService}
  ]
})
export class SharedModule { }
