import { Provider } from "@angular/core";
import { ServiceApplicationLibrary } from "../../core/enum/service.app.library";
import { StudentService } from "../services/student.service";
import { BookService } from "../services/book.service";
import { LoanService } from "../services/loan.service";

export const ProviderStudentService: Provider = {
  provide: ServiceApplicationLibrary.StudentService,
  useClass: StudentService
}

export const ProviderBookService:  Provider = {
  provide: ServiceApplicationLibrary.BookService,
  useClass: BookService
}

export const ProviderLoanService: Provider = {
  provide: ServiceApplicationLibrary.LoanService,
  useClass: LoanService
}
