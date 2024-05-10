import { Directive } from "@angular/core";

@Directive({
  selector: '[appCardDashboardImg]',
  host: {
    class: 'card-img-top img-fluid'
  }
})
export class CardDashboardImgDirective{ }
