import { Injectable } from "@angular/core";
import { IApplicationMessages } from "../../domain/interfaces/app.messages";
import { AppMessagesErrors } from "../constants/app.messages.errors";
import { StudentCheck } from "../../domain/entitys/student.check";

@Injectable()
export class ApplicationMessages implements IApplicationMessages {
  studentCheck!: StudentCheck | null;
  errorMessages!: string;

  showMessagesErrorStudentCheck(error: any): string {
    console.error(AppMessagesErrors.ERROR_SEARCHING_STUDENT, error);
    this.studentCheck = null;

    if (error.status === 404) {
      return this.errorMessages = AppMessagesErrors.STUDENT_NOT_FOUND;
    } else if (error.status === 400) {
      return this.errorMessages = AppMessagesErrors.STUDENT_MAX_LOANS_EXCEEDED;
    } else {
      return this.errorMessages = AppMessagesErrors.UNFORESEEN_ERROR;
    }
  }
}
