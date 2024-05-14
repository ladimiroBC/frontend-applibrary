import { AbstractControl, ValidationErrors } from "@angular/forms";

export interface BookValidator {
  idBook?: (number | ((control: AbstractControl<any, any>) => ValidationErrors | null)[])[];
  name: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null)[])[];
  editorial: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null)[])[];
  autor: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null)[])[];
  stateBook: (boolean | ((control: AbstractControl<any, any>) => ValidationErrors | null)[])[];
  img: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null)[])[];
  registerCode: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null)[])[];
}
