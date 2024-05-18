import { Validators } from "@angular/forms";
import { SearchStudentValidator } from "./types/search.student.validator";

export const SearchStudentForm: SearchStudentValidator = {
  code: ['', [Validators.required]],
}
