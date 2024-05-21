import { FormGroup } from "@angular/forms"
import appTextManagementLoans from "../../../core/mock/management.loan.json"
import { StudentCheck } from "../../../domain/entitys/student.check";
import { BookCheck } from "../../../domain/entitys/book.check";

export abstract class ManagementLoansModel {
  searchStudentForm!: FormGroup;
  searchBookForm!: FormGroup;
  studentCheck!: StudentCheck;
  bookCheck!: BookCheck;
  errorMessageStudent!: string;
  errorMessageBook!: string;
  textManagementLoans = appTextManagementLoans.managementLoan;
}
