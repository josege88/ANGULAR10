import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICourse } from '../../interfaces/course';
import { environment } from 'src/environments/environment';
import { CourseService } from './course.service';

@Injectable({
  providedIn: 'root'
})
export class CourseApiService extends CourseService {

  apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { 
    super();
  }

  getBooks(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(`${this.apiUrl}/course/`);
  }

  getFeaturedBooks(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(`${this.apiUrl}/course/?featured=true`);
  }

  getBook(id: number): Observable<ICourse> {
    return this.http.get<ICourse>(`${this.apiUrl}/course/${id}/`);
  }
}
