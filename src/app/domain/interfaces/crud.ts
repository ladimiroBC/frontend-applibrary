import { Observable } from "rxjs";
import { Student } from "../entitys/student";

export interface Crud<T> {
  getAll(): Observable<T[]>;
  getById(id: number): Observable<T>;
  create(item: T): Observable<T>;
  update(item: T): Observable<T>;
  delete(id: number): Observable<T>;
}
