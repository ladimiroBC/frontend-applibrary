import { Provider } from "@angular/core";
import { ServiceApplicationLibrary } from "../../core/enum/service.app.library";
import { StudentService } from "../services/student.service";
import { BookService } from "../services/book.service";
import { LoanService } from "../services/loan.service";
import { ApplicationMessages } from "../../core/utils/app.messages.service";

export const ProviderStudentService: Provider = {
  provide: ServiceApplicationLibrary.AppCrudStudent,
  useClass: StudentService
}

export const ProviderBookService:  Provider = {
  provide: ServiceApplicationLibrary.AppCrudBook,
  useClass: BookService
}

export const ProviderLoanService: Provider = {
  provide: ServiceApplicationLibrary.AppCrudLoan,
  useClass: LoanService
}

export const ProviderAppMessages: Provider = {
  provide: ServiceApplicationLibrary.IApplicationMessages,
  useClass: ApplicationMessages
}
