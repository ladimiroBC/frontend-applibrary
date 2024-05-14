import { Component, Inject, OnInit } from "@angular/core";
import { ManagementStudentsModel } from "../model/management.students.model";
import { ServiceApplicationLibrary } from "../../../core/enum/service.app.library";
import { AppCrudStudent } from "../../../domain/interfaces/app.crud.student";
import { Student } from "../../../domain/entitys/student";
import { FormBuilder, FormGroup } from "@angular/forms";
import { StudentForm } from "../form/student.form";

@Component({
  selector: 'app-students',
  templateUrl: './management.students.component.html'
})
export class AppManagementStudents extends ManagementStudentsModel implements OnInit {

  constructor(
    @Inject(ServiceApplicationLibrary.AppCrudStudent)
    private _studentService: AppCrudStudent,
    private _formBuilder: FormBuilder
  ) {
    super();
  }

  ngOnInit(): void {
    this.getAllStudents();
    this.initCreate();
  }

  sendForm(): FormGroup {
    return this.formStudent;
  }

  initCreate() {
    this.formStudent = this._formBuilder.group(StudentForm);
  }

  createStudent() {
    this._studentService.create(this.sendForm().value).subscribe({
      next: (() => alert(`Estudiante creado exitosamente`)),
      error: console.log
    })
  }

  initUpdate(id: number) {
    this._studentService.getById(id).subscribe({
      next: ((data: Student) => {
        this.formStudent.patchValue(data);
      }),
      error: console.log
    })
  }

  updateStudent() {
    this._studentService.update(this.formStudent.value).subscribe({
      next: () => alert(`Estudiante actualizado correctamente`),
      error: console.log
    })
  }

  initDeleteStudent(id: number) {
    this.id = id;
  }

  deleteStudent() {
    this._studentService.delete(this.id).subscribe({
      next: () => alert(`Registro de estudiante eliminado`),
      error: console.log
    })
  }

  getAllStudents() {
    this._studentService.getAll().subscribe({
      next: ((data: Student[]) => {
        this.students = data;
      }),
      error: console.log
    })
  }
}
