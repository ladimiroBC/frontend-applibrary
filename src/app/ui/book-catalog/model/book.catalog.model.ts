import { Book } from "../../../domain/entitys/book";
import appTextBookCatalog from "../../../core/mock/book.catalog.json"

export abstract class BookCatalogModel {
  books!: Book[];
  textBookCatalog = appTextBookCatalog.bookCatalog;
}
