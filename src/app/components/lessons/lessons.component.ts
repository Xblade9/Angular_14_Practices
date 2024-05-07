import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css'],
})
export class LessonsComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createLessonForm();
  }

  createLessonForm() {
    this.form = this.fb.group({
      lessons: this.fb.array([]),
    });
  }

  //creating getter to get access of lessons array....

  get lessons(){
    return this.form.controls['lessons'] as FormArray;
  }

  addLesson(){
    const lesson = this.fb.group({
      title:['',Validators.required],
      level:['beginner',Validators.required]
    })

    this.lessons.push(lesson);
  }

  deleteLesson(lessonIndex: number) {
    this.lessons.removeAt(lessonIndex);
  }
}
