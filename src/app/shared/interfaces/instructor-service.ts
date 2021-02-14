import { Observable } from 'rxjs';
import { IInstructor } from './instructor';

export interface IInstructorService {
  getInstructors(): Observable<IInstructor[]>;
  getInstructor(id: number): Observable<IInstructor>;
}
