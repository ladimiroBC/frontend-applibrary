import { Student } from "../../../domain/entitys/student";
import appTextManagementStudents from "../../../core/mock/management.students.json"
import { FormGroup } from "@angular/forms";

export abstract class ManagementStudentsModel {
  students!: Student[];
  student!: Student;
  formStudent!: FormGroup;
  id!: number;
  textManagementStudents = appTextManagementStudents.managementStudents;
}
