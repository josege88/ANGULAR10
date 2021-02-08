import { Observable } from 'rxjs';
import { IInstructor } from './instructor';

export interface IInstructorService {
  getIntructors(): Observable<IInstructor[]>;
  //getFeaturedCourses(): Observable<ICourse[]>;
  getInstructor(id: number): Observable<IInstructor>;
}