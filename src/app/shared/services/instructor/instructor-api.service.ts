import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICourse } from '../../interfaces/course';
import { environment } from 'src/environments/environment';
import { InstructorService } from './instructor.service';
import { IInstructor } from '../../interfaces/instructor';

@Injectable({
  providedIn: 'root'
})
export class InstructorApiService extends InstructorService {

  apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { 
    super();
  }

  getInstructors(): Observable<IInstructor[]> {
    return this.http.get<IInstructor[]>(`${this.apiUrl}/instructor/`);
  }


  getInstructor(id: number): Observable<IInstructor> {
    return this.http.get<IInstructor>(`${this.apiUrl}/instructor/${id}/`);
  }
}
