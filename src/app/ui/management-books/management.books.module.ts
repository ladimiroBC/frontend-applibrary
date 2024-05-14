import { NgModule } from "@angular/core";
import { ProviderBookService } from "../../application/providers/provider.app.library";
import { AppManagementBooks } from "./view/management.books.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { appBooks } from "./management.books.routing";

@NgModule({
  declarations: [
    AppManagementBooks
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(appBooks)
  ],
  exports: [
    AppManagementBooks
  ],
  providers: [
    ProviderBookService
  ]
})
export class ManagementBooksModule { }
