import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';
import { Authorizated } from './core/interceptors/authorizated.interceptor/authorizated.interceptor.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { LoginPageComponent } from './modules/auth/pages/login-page/login-page.component';
import { CourseDetailComponent } from './modules/course/components/course-detail/course-detail.component';
import { CourseDetailPageComponent } from './modules/course/pages/course-detail-page/course-detail-page.component';
import { CourseListPageComponent } from './modules/course/pages/course-list-page/course-list-page.component';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { FooterComponent } from './modules/layout/components/footer/footer.component';
import { HeaderComponent } from './modules/layout/components/header/header.component';
import { SuscribeFormComponent } from './modules/layout/components/suscribe-form/suscribe-form.component';
import { LayoutComponent } from './modules/layout/pages/layout/layout.component';
import { LayoutAdminComponent } from './modules/layout/pages/layout-admin/layout-admin.component';
import { LayoutAuthComponent } from './modules/layout/pages/layout-auth/layout-auth.component';
import { CourseListComponent } from './shared/components/course-list/course-list.component';
import { CourseShortComponent } from './shared/components/course-short/course-short.component';
import { FormMessageErrorComponent } from './shared/components/form-message-error/form-message-error.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    Authorizated.InterceptorComponent,
    LoginComponent,
    LoginPageComponent,
    CourseDetailComponent,
    CourseDetailPageComponent,
    CourseListPageComponent,
    HomePageComponent,
    FooterComponent,
    HeaderComponent,
    SuscribeFormComponent,
    LayoutComponent,
    LayoutAdminComponent,
    LayoutAuthComponent,
    CourseListComponent,
    CourseShortComponent,
    FormMessageErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
