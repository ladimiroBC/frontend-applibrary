import { Component, OnInit } from "@angular/core";
import { HomeModel } from "./model/home.model";
import { StudentService } from "../../../application/services/student.service";
import { Student } from "../../../domain/entitys/student";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends HomeModel implements OnInit {

  constructor(private _studentService: StudentService) {
    super();
  }
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this._studentService.getAll().subscribe({
      next: ((data: Student[]) => {
        this.student = data;
        console.log(this.student);
      }),
      error: console.log
    })
  }
}
