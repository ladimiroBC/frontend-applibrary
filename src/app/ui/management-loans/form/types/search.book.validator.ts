import { AbstractControl, ValidationErrors } from "@angular/forms";

export interface SearchBookValidator {
  code: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null)[])[];
}
