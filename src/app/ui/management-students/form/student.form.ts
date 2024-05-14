import { Validators } from "@angular/forms";
import { StudentValidator } from "./types/student.validator";

export const StudentForm: StudentValidator = {
  idStudent: [0, [Validators.required]],
  name: ['', [Validators.required]],
  code: ['', [Validators.required]],
  email: ['', [Validators.required]],
  collegeCareer: ['', [Validators.required]],
  stateStudent: [false, [Validators.required]]
}
