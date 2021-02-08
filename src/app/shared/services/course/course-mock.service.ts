import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ICourse } from '../../interfaces/course';
import { courseMock } from '../../mocks/course.mock';
import { CourseService } from './course.service';

@Injectable({
  providedIn: 'root'
})
export class CourseMockService extends CourseService {

  constructor() { 
    super();
  }

  getCourses(): Observable<ICourse[]> {
    return new Observable(observer => {
      observer.next(courseMock);
    });
  }

  getFeaturedCourses(): Observable<ICourse[]> {
    return new Observable(observer => {
      const featuredBooks: ICourse[] = courseMock.filter(course => course.featured === true);
      observer.next(featuredBooks);
      setTimeout(() => {
        observer.next(courseMock);
      }, 10000);
    });
  }
  
  getCourse(id: number): Observable<ICourse> {
    return new Observable(observer => {
      const course: ICourse = courseMock.find(course => course.id === id);
      observer.next(course);
    });
  }
}
