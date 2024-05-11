import { Component } from "@angular/core";
import appTextNavbar from "../../../core/mock/navbar.text.json"

@Component({
  selector: 'app-navbar',
  templateUrl: './app.navbar.component.html'
})
export class AppNavbarComponent {
  textNavbar = appTextNavbar.navbarText;
}
