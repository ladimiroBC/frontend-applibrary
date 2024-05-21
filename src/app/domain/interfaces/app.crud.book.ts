import { Book } from "../entitys/book";
import { BookCheck } from "../entitys/book.check";
import { Crud } from "./crud";
import { Querys } from "./querys";

export interface AppCrudBook extends Crud<Book>, Querys<BookCheck> { }
