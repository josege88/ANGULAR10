import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IInstructor } from '../../interfaces/instructor';
import { IInstructorService } from '../../interfaces/instructor-service';

@Injectable({
    providedIn: 'root'
  })
  export class InstructorService implements IInstructorService {

    constructor() { }

    getInstructors(): Observable<IInstructor[]> {
      return;
    }

    // getFeaturedCourses(): Observable<IInstructor[]> {
    //   return;
    // }

    getInstructor(id: number): Observable<IInstructor> {
      return;
    }
  }
