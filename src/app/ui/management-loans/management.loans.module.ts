import { NgModule } from "@angular/core";
import { ManagementLoansComponent } from "./view/management.loans.component";
import { appLoans } from "./management.loans.routing";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ProviderAppMessages, ProviderLoanService } from "../../application/providers/provider.app.library";

@NgModule({
  declarations: [
    ManagementLoansComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(appLoans)
  ],
  exports: [
    ManagementLoansComponent
  ],
  providers: [
    ProviderAppMessages,
    ProviderLoanService
  ]
})
export class ManagementLoansModule { }
