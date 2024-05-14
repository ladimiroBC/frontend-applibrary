import { Student } from './../../domain/entitys/student';
import { Injectable } from "@angular/core";
import { AppCrudStudent } from "../../domain/interfaces/app.crud.student";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class StudentService implements AppCrudStudent {
  private env = environment;

  constructor(private _http: HttpClient) { }

  getAll(): Observable<Student[]> {
    return this._http.get<Student[]>(this.env.studentEndPoint.getAll);
  }

  getById(id: number): Observable<Student> {
    return this._http.get<Student>(this.env.studentEndPoint.getById(id));
  }

  create(item: Student): Observable<Student> {
    return this._http.post<Student>(this.env.studentEndPoint.create, item);
  }

  update(item: Student): Observable<Student> {
    return this._http.put<Student>(this.env.studentEndPoint.update, item);
  }

  delete(id: number): Observable<Student> {
    return this._http.delete<Student>(this.env.studentEndPoint.delete(id));
  }
}
