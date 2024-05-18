import { Observable } from "rxjs";

export interface Querys<T> {
  check(code: string): Observable<T>;
}
