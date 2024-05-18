import { FormGroup } from "@angular/forms"
import appTextManagementLoans from "../../../core/mock/management.loan.json"
import { StudentCheck } from "../../../domain/entitys/student.check";

export abstract class ManagementLoansModel {
  searchStudentForm!: FormGroup;
  studentCheck!: StudentCheck;
  errorMessage!: string;
  textManagementLoans = appTextManagementLoans.managementLoan;
}
