import { Component, OnInit, Input } from '@angular/core';
import { ICourse } from 'src/app/shared/interfaces/course';
import { CourseService } from 'src/app/shared/services/course/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  @Input() courseId;
  course: ICourse;
  constructor(
private courseService : CourseService

  ) { }

  ngOnInit(): void {
  }

  fetchCourse() {
    this.courseService.getCourse(this.courseId).subscribe(
      course => this.course = course
    )
  }

}
