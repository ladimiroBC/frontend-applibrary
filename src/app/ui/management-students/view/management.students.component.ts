import { Component, Inject, OnInit } from "@angular/core";
import { ManagementStudentsModel } from "../model/management.students.model";
import { ServiceApplicationLibrary } from "../../../core/enum/service.app.library";
import { AppCrudStudent } from "../../../domain/interfaces/app.crud.student";
import { Student } from "../../../domain/entitys/student";

@Component({
  selector: 'app-students',
  templateUrl: './management.students.component.html'
})
export class AppManagementStudents extends ManagementStudentsModel implements OnInit{

  constructor(
    @Inject(ServiceApplicationLibrary.AppCrudStudent)
    private _studentService: AppCrudStudent
  )
  {
    super();
  }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this._studentService.getAll().subscribe({
      next: ((data: Student[]) => {
        this.students = data;
        console.log(this.students);
      }),
      error: console.log
    })
  }
}
