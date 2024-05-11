import { NgModule } from "@angular/core";
import { RouterLink } from "@angular/router";
import { AppCardModule } from "./UIComponents/app-card/app.card.module";
import { AppNavbarModule } from "./UIComponents/app-navbar/app.navbar.module";

@NgModule({
  imports: [
    RouterLink,
    AppCardModule,
    AppNavbarModule
  ],
  exports: [
    AppCardModule,
    AppNavbarModule
  ]
})
export class SharedModule { }
