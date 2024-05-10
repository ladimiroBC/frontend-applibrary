import { Injectable } from "@angular/core";
import { AppCrudBook } from "../../domain/interfaces/app.crud.book";
import { Observable } from "rxjs";
import { Book } from "../../domain/entitys/book";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BookService implements AppCrudBook {
  private env = environment;

  constructor(private _http: HttpClient) { }

  getAll(): Observable<Book[]> {
    const books = this._http.get<Book[]>(this.env.bookEndPoint.getAll);
    return books;
  }

  getById(id: string): Observable<Book> {
    throw new Error("Method not implemented.");
  }

  create(item: Book): Observable<Book> {
    throw new Error("Method not implemented.");
  }

  update(id: string, item: Book): Observable<Book> {
    throw new Error("Method not implemented.");
  }

  delete(id: string): Observable<boolean> {
    throw new Error("Method not implemented.");
  }
}
