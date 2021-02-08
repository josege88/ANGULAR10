import { Component, OnInit, Input } from '@angular/core';
import { ICourse } from '../../interfaces/course';
import { CourseService } from '../../services/course/course.service';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  @Input() isFeatured: boolean = false;
  @Input() showCourses: number = 4;
  courses: ICourse[];
  classShowCourse: number;
  constructor(
    private courseService: CourseService
  ) {     
  }

  ngOnInit(): void {

    this.fetchCourses();
    this.classShowCourse = 12 / this.showCourses;

  }

  fetchCourses(): void {
    if (this.isFeatured) {
      this.courseService.getFeaturedCourses().subscribe(
        courses => this.courses = courses
      )
    }else {
      this.courseService.getCourses().subscribe(
        courses => this.courses = courses
      )
    }
  }

}
