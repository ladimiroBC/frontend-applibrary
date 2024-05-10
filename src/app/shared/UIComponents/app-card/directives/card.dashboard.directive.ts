import { Directive } from "@angular/core";

@Directive({
  selector: '[appCardDashboard]',
  host: {
    class: 'card'
  }
})
export class CardDashboardDirective { }
