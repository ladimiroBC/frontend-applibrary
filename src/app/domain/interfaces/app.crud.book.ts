import { Book } from "../entitys/book";
import { Crud } from "./crud";

export interface AppCrudBook extends Crud<Book> { }
