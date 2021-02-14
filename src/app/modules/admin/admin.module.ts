import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { CourseListPageComponent } from './pages/course-list-page/course-list-page.component';
import { CourseCreatePageComponent } from './pages/course-create-page/course-create-page.component';

import { CourseTableComponent } from './components/course-table/course-table.component';
// import { CourseCreateEditFormComponent } from './components/course-create-edit-form/course-create-edit-form.component';
// import { CourseEditPageComponent } from './pages/course-edit-page/course-edit-page.component';

import { SharedModule as PrimeShareModule} from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InstructorListPageComponent } from './pages/instructor-list-page/instructor-list-page.component';

@NgModule({
  declarations: [CourseListPageComponent, CourseCreatePageComponent, CourseTableComponent, InstructorListPageComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    PrimeShareModule,
    TableModule,
    ButtonModule,
    PanelModule,
    ConfirmDialogModule,
  ],
})
export class AdminModule { }
