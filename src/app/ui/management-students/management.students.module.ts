import { NgModule } from "@angular/core";
import { ManagementStudentsComponent } from "./view/management.students.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from "@angular/router";
import { appStudents } from "./management.students.routing";
import { ProviderStudentService } from "../../application/providers/provider.app.library";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ManagementStudentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(appStudents)
  ],
  exports: [
    ManagementStudentsComponent
  ],
  providers: [
    ProviderStudentService
  ]
})
export class ManagementStudentsModule { }
