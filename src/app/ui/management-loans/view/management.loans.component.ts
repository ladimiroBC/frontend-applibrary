import { Component, Inject, OnInit } from "@angular/core";
import { ManagementLoansModel } from "../model/management.loan.model";
import { ServiceApplicationLibrary } from "../../../core/enum/service.app.library";
import { AppCrudLoan } from "../../../domain/interfaces/app.crud.loan";
import { FormBuilder } from "@angular/forms";
import { SearchStudentForm } from "../form/search.student.form";
import { IApplicationMessages } from "../../../domain/interfaces/app.messages";
import { SearchBookForm } from "../form/search.book.form";
import { AppCrudBook } from "../../../domain/interfaces/app.crud.book";
import { BorrowBook } from "../../../domain/entitys/borrow.book";

@Component({
  selector: 'app-loans',
  templateUrl: './management.loans.component.html'
})
export class ManagementLoansComponent extends ManagementLoansModel implements OnInit {

  constructor(
    @Inject(ServiceApplicationLibrary.AppCrudLoan)
    private _loanService: AppCrudLoan,
    @Inject(ServiceApplicationLibrary.AppCrudBook)
    private _bookService: AppCrudBook,
    @Inject(ServiceApplicationLibrary.IApplicationMessages)
    private _messagesService: IApplicationMessages,
    private _formBuilder: FormBuilder
  ) {
    super();
  }

  ngOnInit(): void {
    this.initSearchStudent();
    this.initSearchBook();
  }

  initSearchStudent() {
    this.searchStudentForm = this._formBuilder.group(SearchStudentForm);
  }

  initSearchBook() {
    this.searchBookForm = this._formBuilder.group(SearchBookForm);
  }

  onSearchStudent() {
    if (this.searchStudentForm.valid) {
      this.resetStudentState();
      const code = this.searchStudentForm.get('code')?.value;
      this._loanService.check(code).subscribe({
        next: (response) => {
          this.studentCheck = response;
          this.codeStudent = this.studentCheck.student.code;
        },
        error: (error) => {
          this.errorMessageStudent = this._messagesService.showMessagesErrorStudentCheck(error);
        }
      })
    }
  }

  onSearchBook() {
    if (this.searchBookForm.valid) {
      this.resetBookState();
      const code = this.searchBookForm.get('code')?.value;
      this._bookService.check(code).subscribe({
        next: (response) => {
          this.bookCheck = response;
          this.codeBook = this.bookCheck.book.registerCode;
        },
        error: (error) => {
          this.errorMessageBook = this._messagesService.showMessagesErrorBookCheck(error);
        }
      })
    }
  }

  onBorrowBook() {
    const borrowBook: BorrowBook = {
      codeStudent: this.codeStudent,
      codeBook: this.codeBook
    }

    this._loanService.borrowBook(borrowBook).subscribe({
      next: () => alert(`Prestamo realizado con exito`),
      error: console.log
    })
  }

  resetStudentState() {
    this.studentCheck = null;
    this.errorMessageStudent = '';
    this.codeStudent = '';
  }

  resetBookState() {
    this.bookCheck = null;
    this.errorMessageBook = '';
    this.codeBook = '';
  }
}
