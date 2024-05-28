import { Observable } from "rxjs";
import { Loan } from "../entitys/loan";
import { StudentCheck } from "../entitys/student.check";
import { Crud } from "./crud";
import { Querys } from "./querys";
import { BorrowBook } from "../entitys/borrow.book";

export interface AppCrudLoan extends Crud<Loan>, Querys<StudentCheck> {
  borrowBook(borrowBook: BorrowBook): Observable<string>;
}
