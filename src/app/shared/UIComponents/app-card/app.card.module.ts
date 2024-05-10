import { NgModule } from "@angular/core";
import { CardDashboardDirective } from "./directives/card.dashboard.directive";
import { CardDashboardImgDirective } from "./directives/card.dashboard.img.directive";

@NgModule({
  declarations: [
    CardDashboardDirective,
    CardDashboardImgDirective
  ],
  exports: [
    CardDashboardDirective,
    CardDashboardImgDirective
  ]
})
export class AppCardModule { }
