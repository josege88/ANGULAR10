import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ICourse } from '../../interfaces/course';
import { ICourseService } from '../../interfaces/course-service';

@Injectable({
    providedIn: 'root'
  })
  export class CourseService implements ICourseService {
  
    constructor() { }
  
    getCourses(): Observable<ICourse[]> {
      return;
    }
  
    getFeaturedCourses(): Observable<ICourse[]> {
      return;
    }
    
    getCourse(id: number): Observable<ICourse> {
      return;
    }
  }