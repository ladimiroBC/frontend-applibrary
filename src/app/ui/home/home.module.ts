import { NgModule } from "@angular/core";
import { HomeComponent } from "./view/home.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { appHome } from "./home.routing";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(appHome)
  ],
exports: [
  HomeComponent
]
})
export class HomeModule { }
