import { Component, Inject, OnInit } from "@angular/core";
import { HomeModel } from "./model/home.model";
import { StudentService } from "../../../application/services/student.service";
import { Student } from "../../../domain/entitys/student";
import { ServiceApplicationLibrary } from "../../../core/enum/service.app.library";
import { BookService } from "../../../application/services/book.service";
import { Book } from "../../../domain/entitys/book";
import { LoanService } from "../../../application/services/loan.service";
import { Loan } from "../../../domain/entitys/loan";
import { AppCrudStudent } from "../../../domain/interfaces/app.crud.student";
import { AppCrudBook } from "../../../domain/interfaces/app.crud.book";
import { AppCrudLoan } from "../../../domain/interfaces/app.crud.loan";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent extends HomeModel implements OnInit {

  constructor(
    @Inject(ServiceApplicationLibrary.AppCrudStudent)
    private _studentService: AppCrudStudent,
    @Inject(ServiceApplicationLibrary.AppCrudBook)
    private _bookService: AppCrudBook,
    @Inject(ServiceApplicationLibrary.AppCrudLoan)
    private _loanService: AppCrudLoan
  )
  {
    super();
  }
  ngOnInit(): void {
    this.getAllStudents();
    this.getAllBooks();
    this.getAllLoans();
  }

  getAllStudents() {
    this._studentService.getAll().subscribe({
      next: ((data: Student[]) => {
        this.students = data;
        this.numberOfStudents = this.students.length;
      }),
      error: console.log
    })
  }

  getAllBooks() {
    this._bookService.getAll().subscribe({
      next: ((data: Book[]) => {
        this.books = data;
        this.numberOfBooks = this.books.length;
      }),
      error: console.log
    })
  }

  getAllLoans() {
    this._loanService.getAll().subscribe({
      next: ((data: Loan[]) => {
        this.loans = data;
        this.numberOfLoans = this.loans.length;
      }),
      error: console.log
    })
  }
}
