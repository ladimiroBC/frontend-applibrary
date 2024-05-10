import { NgModule } from "@angular/core";
import { RouterLink } from "@angular/router";
import { AppCardModule } from "./UIComponents/app-card/app.card.module";

@NgModule({
  imports: [
    RouterLink,
    AppCardModule
  ],
  exports: [
    AppCardModule
  ]
})
export class SharedModule { }
