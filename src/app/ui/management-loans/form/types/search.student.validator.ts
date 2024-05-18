import { AbstractControl, ValidationErrors } from "@angular/forms";

export interface SearchStudentValidator {
  code: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null)[])[];
}
