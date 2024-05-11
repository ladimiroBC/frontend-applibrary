import { NgModule } from "@angular/core";
import { AppNavbarComponent } from "./app.navbar.component";
import { RouterLink } from "@angular/router";

@NgModule({
  declarations: [
    AppNavbarComponent
  ],
  imports: [
    RouterLink
  ],
  exports: [
    AppNavbarComponent
  ]
})
export class AppNavbarModule { }
