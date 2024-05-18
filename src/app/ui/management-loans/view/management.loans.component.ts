import { Component, Inject, OnInit } from "@angular/core";
import { ManagementLoansModel } from "../model/management.loan.model";
import { ServiceApplicationLibrary } from "../../../core/enum/service.app.library";
import { AppCrudLoan } from "../../../domain/interfaces/app.crud.loan";
import { FormBuilder } from "@angular/forms";
import { SearchStudentForm } from "../form/search.student.form";
import { IApplicationMessages } from "../../../domain/interfaces/app.messages";

@Component({
  selector: 'app-loans',
  templateUrl: './management.loans.component.html'
})
export class ManagementLoansComponent extends ManagementLoansModel implements OnInit {

  constructor(
    @Inject(ServiceApplicationLibrary.AppCrudLoan)
    private _loanService: AppCrudLoan,
    @Inject(ServiceApplicationLibrary.IApplicationMessages)
    private _messagesService: IApplicationMessages,
    private _formBuilder: FormBuilder
  ) {
    super();
  }

  ngOnInit(): void {
    this.initSearch();
  }

  initSearch() {
    this.searchStudentForm = this._formBuilder.group(SearchStudentForm);
  }

  onSearch() {
    if (this.searchStudentForm.valid) {
      const code = this.searchStudentForm.get('code')?.value;
      this._loanService.check(code).subscribe({
        next: (response) => {
          this.studentCheck = response;
          console.log('Estudiante encontrado: ', this.studentCheck);
        },
        error: (error) => {
          this.errorMessage = this._messagesService.showMessagesErrorStudentCheck(error);
        }
      })
    }
  }
}
