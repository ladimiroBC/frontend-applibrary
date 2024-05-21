import { Injectable } from "@angular/core";
import { AppCrudBook } from "../../domain/interfaces/app.crud.book";
import { Observable } from "rxjs";
import { Book } from "../../domain/entitys/book";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { BookCheck } from "../../domain/entitys/book.check";

@Injectable()
export class BookService implements AppCrudBook {
  private env = environment;

  constructor(private _http: HttpClient) { }

  check(code: string): Observable<BookCheck> {
    const params = new HttpParams().set('registerCode', code);
    return this._http.get<BookCheck>(this.env.bookEndPoint.checkBook, {params});
  }

  getAll(): Observable<Book[]> {
    return this._http.get<Book[]>(this.env.bookEndPoint.getAll);
  }

  getById(id: number): Observable<Book> {
    return this._http.get<Book>(this.env.bookEndPoint.getById(id));
  }

  create(item: Book): Observable<Book> {
    return this._http.post<Book>(this.env.bookEndPoint.create, item);
  }

  update(item: Book): Observable<Book> {
    return this._http.put<Book>(this.env.bookEndPoint.update, item);
  }

  delete(id: number): Observable<Book> {
    return this._http.delete<Book>(this.env.bookEndPoint.delete(id));
  }
}
