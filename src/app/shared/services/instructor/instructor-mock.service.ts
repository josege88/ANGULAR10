import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { instructorMock } from '../../mocks/instructor.mock';
import { InstructorService } from './instructor.service';
import { IInstructor } from '../../interfaces/instructor';

@Injectable({
  providedIn: 'root'
})
export class InstructorMockService extends InstructorService {

  constructor() { 
    super();
  }

  getInstructors(): Observable<IInstructor[]> {
    return new Observable(observer => {
      observer.next(instructorMock);
    });
  }


  getInstructor(id: number): Observable<IInstructor> {
    return new Observable(observer => {
      const instructor: IInstructor = instructorMock.find(instructor => instructor.id === id);
      observer.next(instructor);
    });
  }
}
