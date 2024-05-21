import { Validators } from "@angular/forms";
import { SearchBookValidator } from "./types/search.book.validator";

export const SearchBookForm: SearchBookValidator = {
  code: ['', [Validators.required]],
}
