import { Component, OnInit, Input } from '@angular/core';
import { IInstructor } from '../../interfaces/instructor';

@Component({
  selector: 'app-instructor-short',
  templateUrl: './instructor-short.component.html',
  styleUrls: ['./instructor-short.component.scss']
})
export class InstructorShortComponent implements OnInit {

  @Input() instructor: IInstructor;
  constructor() { }

  ngOnInit(): void {
  }

}
