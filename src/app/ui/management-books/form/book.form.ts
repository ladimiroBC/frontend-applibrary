import { Validators } from "@angular/forms";
import { BookValidator } from "./types/book.validator";

export const BookForm: BookValidator = {
  idBook: [0, [Validators.required]],
  name: ['', [Validators.required]],
  editorial: ['', [Validators.required]],
  autor: ['', [Validators.required]],
  stateBook: [false, [Validators.required]],
  img: ['', [Validators.required]],
  registerCode: ['', [Validators.required]]
}
