import { Component, OnInit, Input } from '@angular/core';
import { ICourse } from '../../interfaces/course';

@Component({
  selector: 'app-course-short',
  templateUrl: './course-short.component.html',
  styleUrls: ['./course-short.component.scss']
})
export class CourseShortComponent implements OnInit {

  @Input() course: ICourse;
  constructor() { }

  ngOnInit(): void {
  }

}
