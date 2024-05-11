import { NgModule } from "@angular/core";
import { AppManagementStudents } from "./view/management.students.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from "@angular/router";
import { appStudents } from "./management.students.routing";
import { ProviderStudentService } from "../../application/providers/provider.app.library";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppManagementStudents
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(appStudents)
  ],
  exports: [
    AppManagementStudents
  ],
  providers: [
    ProviderStudentService
  ]
})
export class ManagementStudentsModule { }
