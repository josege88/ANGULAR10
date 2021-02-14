import { Observable } from 'rxjs';
import { ICourse } from './course';

export interface ICourseService {
  getCourses(): Observable<ICourse[]>;
  getFeaturedCourses(): Observable<ICourse[]>;
  getCourse(id: number): Observable<ICourse>;
}
