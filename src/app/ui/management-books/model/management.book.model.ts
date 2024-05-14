import { FormGroup } from "@angular/forms";
import { Book } from "../../../domain/entitys/book";
import appTextManagementBooks from "../../../core/mock/management.book.json"

export abstract class ManagementBooksModel {
  books!: Book[];
  book!: Book;
  formBook!: FormGroup;
  id!: number;
  textManagementBooks = appTextManagementBooks.managementBooks;
}
