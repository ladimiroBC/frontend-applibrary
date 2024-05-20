import { Component, Inject, OnInit } from "@angular/core";
import { BookCatalogModel } from "../model/book.catalog.model";
import { ServiceApplicationLibrary } from "../../../core/enum/service.app.library";
import { AppCrudBook } from "../../../domain/interfaces/app.crud.book";
import { StatusLoan } from "../../../core/constants/app.messages";
import { Book } from "../../../domain/entitys/book";

@Component({
  selector: 'app-book-catalog',
  templateUrl: './book.catalog.component.html',
  styleUrls: ['./book.catalog.component.scss']
})
export class BookCatalogComponent extends BookCatalogModel implements OnInit {

  constructor(
    @Inject(ServiceApplicationLibrary.AppCrudBook)
    private _bookService: AppCrudBook
  ) {
    super();
  }

  ngOnInit(): void {
    this.getAllBook();
  }

  getAllBook() {
    this._bookService.getAll().subscribe({
      next: ((response) => {
        this.books = response.map(this.checkStatusLoan);
      }),
      error: console.log
    })
  }

  checkStatusLoan(book: Book): Book {
    if (book.loans.length === 0) {
      return { ...book, loanStatus: StatusLoan.BOOK_AVAILABLE }
    } else {
      return { ...book, loanStatus: StatusLoan.BOOK_NOT_AVAILABLE }
    }
  }
}
