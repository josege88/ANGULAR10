import { Observable } from 'rxjs';
import { IInstructor } from './instructor';

export interface IInstructorService {
  getInstructors(): Observable<IInstructor[]>;
  //getFeaturedCourses(): Observable<ICourse[]>;
  getInstructor(id: number): Observable<IInstructor>;
}