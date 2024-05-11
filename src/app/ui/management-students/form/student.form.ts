import { Validators } from "@angular/forms";
import { StudentValidator } from "./types/student.validator";

export const StudentForm: StudentValidator = {
  name: ['', [Validators.required]],
  code: ['', [Validators.required]],
  email: ['', [Validators.required]],
  collegeCareer: ['', [Validators.required]],
  stateStudent: [true, [Validators.required]]
}
