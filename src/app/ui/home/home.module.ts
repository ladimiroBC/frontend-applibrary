import { NgModule } from "@angular/core";
import { HomeComponent } from "./view/home.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { appHome } from "./home.routing";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appHome)
  ],
exports: [
  HomeComponent
]
})
export class HomeModule { }
