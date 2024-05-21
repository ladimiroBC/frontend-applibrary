import { Injectable } from "@angular/core";
import { IApplicationMessages } from "../../domain/interfaces/app.messages";
import { AppMessagesErrors } from "../constants/app.messages.errors";
import { StudentCheck } from "../../domain/entitys/student.check";
import { BookCheck } from "../../domain/entitys/book.check";

@Injectable()
export class ApplicationMessages implements IApplicationMessages {

  studentCheck!: StudentCheck | null;
  bookCheck!: BookCheck | null;
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

  showMessagesErrorBookCheck(error: any): string {
    console.error(AppMessagesErrors.ERROR_SEARCHING_BOOK, error);
    this.bookCheck = null;

    if(error.status === 404) {
      return this.errorMessages = AppMessagesErrors.BOOK_NOT_FOUND;
    } else if (error.status === 400) {
      return this.errorMessages = AppMessagesErrors.BOOK_MAINTENANCE;
    } else {
      return this.errorMessages = AppMessagesErrors.BOOK_BORROWED;
    }
  }
}
