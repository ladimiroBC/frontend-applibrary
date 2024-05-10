import { Injectable } from "@angular/core";
import { AppCrudStudent } from "../../domain/interfaces/app.crud.student";
import { Observable } from "rxjs";
import { Student } from "../../domain/entitys/student";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService implements AppCrudStudent {
  private env = environment;

  constructor(private _http: HttpClient) { }

  getAll(): Observable<Student[]> {
    const students = this._http.get<Student[]>(this.env.studentEndpoint.getAll);
    return students;
  }
  getById(id: string): Observable<Student> {
    throw new Error("Method not implemented.");
  }
  create(item: Student): Observable<Student> {
    throw new Error("Method not implemented.");
  }
  update(id: string, item: Student): Observable<Student> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Observable<boolean> {
    throw new Error("Method not implemented.");
  }
}
