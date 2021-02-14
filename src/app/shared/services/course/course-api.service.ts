import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient , HttpBackend } from '@angular/common/http';
import { ICourse } from '../../interfaces/course';
import { environment } from 'src/environments/environment';
import { CourseService } from './course.service';

@Injectable({
  providedIn: 'root'
})
export class CourseApiService extends CourseService {

  apiUrl: string = environment.apiUrl;
  private http: HttpClient;
  constructor(
    handler: HttpBackend
  ) {
    super();
    this.http = new HttpClient(handler);
  }

  getCourses(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(`${this.apiUrl}/course/`);
  }

  getFeaturedCourses(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(`${this.apiUrl}/course/?featured=true`);
  }

  getCourse(id: number): Observable<ICourse> {
    return this.http.get<ICourse>(`${this.apiUrl}/course/${id}/`);
  }
}
