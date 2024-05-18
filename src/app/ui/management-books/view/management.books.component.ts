import { Component, Inject, OnInit } from "@angular/core";
import { ServiceApplicationLibrary } from "../../../core/enum/service.app.library";
import { AppCrudBook } from "../../../domain/interfaces/app.crud.book";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ManagementBooksModel } from "../model/management.book.model";
import { BookForm } from "../form/book.form";
import { Book } from "../../../domain/entitys/book";

@Component({
  selector: 'app-students',
  templateUrl: './management.books.component.html'
})
export class ManagementBooksComponent extends ManagementBooksModel implements OnInit {

  constructor(
    @Inject(ServiceApplicationLibrary.AppCrudBook)
    private _bookService: AppCrudBook,
    private _formBuilder: FormBuilder
  ) {
    super();
  }

  ngOnInit(): void {
    this.getAllBooks();
    this.initCreate();
  }

  sendForm(): FormGroup {
    return this.formBook;
  }

  initCreate() {
    this.formBook = this._formBuilder.group(BookForm);
  }

  createStudent() {
    this._bookService.create(this.sendForm().value).subscribe({
      next: (() => alert(`Libro creado exitosamente`)),
      error: console.log
    })
  }

  initUpdate(id: number) {
    this._bookService.getById(id).subscribe({
      next: ((data: Book) => {
        this.formBook.patchValue(data);
      }),
      error: console.log
    })
  }

  updateBook() {
    this._bookService.update(this.formBook.value).subscribe({
      next: () => alert(`Libro actualizado correctamente`),
      error: console.log
    })
  }

  initDeleteBook(id: number) {
    this.id = id;
  }

  deleteBook() {
    this._bookService.delete(this.id).subscribe({
      next: () => alert(`Registro del libro eliminado`),
      error: console.log
    })
  }

  getAllBooks() {
    this._bookService.getAll().subscribe({
      next: ((data: Book[]) => {
        this.books = data;
      }),
      error: console.log
    })
  }
}
