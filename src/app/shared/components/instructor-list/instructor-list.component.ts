import { Component, OnInit, Input } from '@angular/core';
import { IInstructor } from '../../interfaces/instructor';
import { InstructorService } from '../../services/instructor/instructor.service';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.scss']
})
export class InstructorListComponent implements OnInit {

  instructors: IInstructor[];
  constructor(
    private instructorServie: InstructorService
  ) { }

  ngOnInit(): void {
    this.fetchInstructor();
  }

  fetchInstructor(): void {
      this.instructorServie.getInstructors().subscribe(
        instructors => this.instructors = instructors
      );
  }

}
