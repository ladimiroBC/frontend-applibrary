import { AbstractControl, ValidationErrors } from "@angular/forms";

export interface StudentValidator {
  name: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null)[])[];
  code: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null)[])[];
  email: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null)[])[];
  collegeCareer: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null)[])[];
  stateStudent: (boolean | ((control: AbstractControl<any, any>) => ValidationErrors | null)[])[];
}
